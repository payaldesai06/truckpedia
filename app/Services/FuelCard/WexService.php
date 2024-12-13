<?php

namespace App\Services\FuelCard;

use App\Jobs\FuelCard\LoginAndGetTransactionsByWexAccountJob;
use App\Models\WexAccount;
use App\Models\WexTransaction;
use App\Models\WexTransactionLineItem;
use App\Models\WexTransactionsSyncedDate;
use Exception, SoapClient, SoapHeader;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Facades\DB;

class WexService {
  private $url;

  private const FILTER_LOCATION_COUNTRY_ID = 85;
  private const AMOUNT_OF_MONTHS_TO_GET_DATA = 7;
  /*
  It is good practice to put in a daily check to make sure the end system has 
  received all fuel card transactions for the previous day. The system could do 
  a one-time run after midnight for the previous day and make sure all transaction 
  IDs are inputted. Transaction IDs are unique #s for each transaction.
  */
  private const DAYS_TO_SUBTRACT = 3;

  public function __construct() {
    if (app()->environment('production')) {
      $this->url = config('services.wex.prodUrl');
    } else {
      $this->url = config('services.wex.testUrl');
    }
  }

  /**
   * Get Wex account connection status.
   * @return string
   * @throws Exception
   */
  public function getConnectionStatus(): string {
    $wexAccount = WexAccount::select('client_id')
      ->where('company_id', getAuthAdminCompanyId())->first();
    if (!$wexAccount || !$wexAccount->client_id) {
      return 'No valid Wex account.';
    }
    return 'Connected';
  }

  /**
   * Get Wex Account details.
   * @return array
   * @throws Exception
   */
  public function getDatAccountDetails(): array {
    $account = WexAccount::select('user_name', 'password')
      ->where('company_id', getAuthAdminCompanyId())
      ->first();

    return [
      'userName' => optional($account)->user_name ?? null,
      'password' => optional($account)->password ?? null,
    ];
  }

  /**
   * Update or create Wex account.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function updateOrCreateAccount($request) {
    $clientId = $this->wexWebServiceLogin(
      $request->username,
      $request->password
    ) ?? null;
    if (empty($clientId)) {
      throw new Exception('Account username/password not valid or you have not"
      . " yet contacted Wex to add our server IP address to the whitelist.');
    }
    WexAccount::updateOrCreate(
      [
        'company_id' => getAuthAdminCompanyId(),
      ],
      [
        'user_name' => $request->username,
        'password' => $request->password,
        'client_id' => $clientId
      ]
    );
  }

  /**
   * Delete Wex account.
   * @return void
   * @throws Exception
   */
  public function disconnectAccount() {
    return WexAccount::where('company_id', getAuthAdminCompanyId())->delete();
  }

  /**
   * @description Call Web Service Wex Login Api and returns the client id.
   * @param string $username
   * @param string $password
   * @return string
   * @throws \SoapFault
   */
  public function wexWebServiceLogin($username, $password): string {
    $loginData = ['username' => $username, 'password' => $password];
    $header = new SoapHeader('NAMESPACE', 'Auth', $loginData);
    $client = new SoapClient($this->url, [
      'trace' => true,
      'stream_context' => stream_context_create(array(
        'http' => array(
          'user_agent' => 'PHPSoapClient'
        )
      )),
      'cache_wsdl' => WSDL_CACHE_NONE
    ]); // null for non-wsdl mode
    $client->__setSoapHeaders($header);
    return $client->login($username, $password);
  }

  /**
   * @description Call Web Service getMCTransExtLocV2 Api and returns the transactions.
   * @param string $clientId
   * @param string $begDate
   * @param string $endDate
   * @return object
   * @throws \SoapFault
   */
  private function getTransactions(string $clientId, string $begDate, string $endDate) {
    $client = new SoapClient($this->url, [
      'trace' => true,
      'stream_context' => stream_context_create(array(
        'http' => array(
          'user_agent' => 'PHPSoapClient'
        )
      )),
      'cache_wsdl' => WSDL_CACHE_NONE
    ]);
    return $client->getMCTransExtLocV2($clientId, $begDate, $endDate);
  }

  /**
   * @description: Save transactions and transactionLineItems that have been retrieved from Wex
   * @param int $wexAccountId
   * @param array $transactionsArray
   * @param Carbon $dayToSynchronize
   * @return void
   * @throws Exception
   */
  private function saveTransactionsAndUpdateSyncedDates(
    int $wexAccountId,
    array $transactionsArray,
    Carbon $dayToSynchronize
  ): void {

    DB::transaction(function () use ($wexAccountId, $transactionsArray, $dayToSynchronize) {
      if (!empty($transactionsArray)) {
        $transactionsArray = $this->fixTransactionsFormat($transactionsArray);
        /*
        $locationCountryId = self::FILTER_LOCATION_COUNTRY_ID;
        $transactionsArray = array_filter(
          $transactionsArray,
          function ($value) use ($locationCountryId) {
            return $value["locationCountry"] === $locationCountryId;
          }
        );
        */

        foreach ($transactionsArray as $transaction) {
          $transactionData = $this->prepareTransactionData($transaction, $wexAccountId);

          $savedTransaction = WexTransaction::updateOrCreate(
            [
              'wex_account_id' => $wexAccountId,
              'transaction_id' => $transactionData['transaction_id']
            ],
            $transactionData
          );

          if (!empty($transaction['lineItems'])) {
            foreach ($transaction['lineItems'] as $lineItem) {
              $preparedTransactionLineItem = $this->prepareTransactionLineItemData($lineItem);
              $preparedTransactionLineItem['wex_transaction_id'] = $savedTransaction->id;

              WexTransactionLineItem::updateOrCreate(
                [
                  'wex_transaction_id' => $preparedTransactionLineItem['wex_transaction_id'],
                  'line_item_number' => $preparedTransactionLineItem['line_item_number']
                ],
                $preparedTransactionLineItem
              );
            }
          }
        }
      }

      $this->updateWexTransactionsSyncedDate(
        $wexAccountId,
        $dayToSynchronize
      );
    });
  }

  /**
   * @return array
   * @param array $transaction
   * @param int $wexAccountId
   * @description: Prepare transaction structure to be saved on DB.
   * @throws Exception
   */
  private function prepareTransactionData(array $transaction, int $wexAccountId): array {
    $taxValue = null;
    $lineItems = $transaction['lineItems'] ?? [];

    foreach ($lineItems as $lineItem) {
      $lineTaxes = $lineItem['lineTaxes'] ?? [];

      foreach ($lineTaxes as $lineTax) {
        if ($taxValue === null) {
          $taxValue = 0;
        }

        if (
          isset($lineTax['taxDescription'], $lineTax['amount'])
        ) {
          $taxValue += $lineTax['amount'];
        }
      }
    }

    return [
      'transaction_id' => $transaction['transactionId'] ?? null,
      'wex_account_id' => $wexAccountId,
      'location_state' => $transaction['locationState'] ?? null,
      'location_city' => $transaction['locationCity'] ?? null,
      'transaction_date' => isset($transaction['transactionDate'])
        ? Carbon::parse($transaction['transactionDate'])->toDateString()
        : null,
      'transaction_time' => isset($transaction['transactionDate'])
        ? Carbon::parse($transaction['transactionDate'])->toTimeString()
        : null,
      'card_number' => $transaction['cardNumber'] ?? null,
      'amount' => $transaction['prefTotal'] ?? null,
      'tax_value' => $taxValue ?? null,
      'created_at' => now(),
      'updated_at' => now()
    ];
  }

  /**
   * @return array
   * @param array $lineItem
   * @description: Prepare transaction lineItems structure to be saved on DB.
   * @throws Exception
   */
  private function prepareTransactionLineItemData(array $lineItem): array {
    if (isset($lineItem['lineTaxes'])) {
      foreach ($lineItem['lineTaxes'] as $lineTax) {
        if ($lineTax['taxDescription'] === 'FED') {
          $federalTax = $lineTax['amount'];
        } else if ($lineTax['taxDescription'] === 'SFTX') {
          $stateTax = $lineTax['amount'];
        }
      }
    }

    return [
      'line_item_number' => $lineItem['lineNumber'] ?? null,
      'amount' => $lineItem['amount'] ?? null,
      'quantity' => $lineItem['quantity'] ?? null,
      'ppu' => $lineItem['ppu'] ?? null,
      'federal_tax' => $federalTax ?? null,
      'state_tax' => $stateTax ?? null,
      'use_type' => $lineItem['useType'] ?? null,
      'created_at' => now(),
      'updated_at' => now()
    ];
  }

  /**
   * @description: Fixes the formatting of the transactions array, since it's a converted soap object.
   * @return array
   * @param $transactions
   * @throws Exception
   */
  private function fixTransactionsFormat(array $transactions): array {
    $transactions = $this->fixTransactionsLineItems($transactions);
    return $this->fixTransactionsLineItemsLineTaxes($transactions);
  }

  /**
   * @param array $transactions
   * @description Fix transactions lineItems format. The original transactions object is formatted this way:
   * If there's only one LineItem, the object is formatted like this:
   * "lineItems": { content }
   * If there's more than one LineItem, the object is formatted like this:
   * "lineItems": [ { content }, { content } ]
   * This function fixes the format to always be an array of LineItems. So, if there's only one LineItem,
   * the object will be formatted like this:
   * "lineItems": [ { content } ]
   * @return array
   */
  private function fixTransactionsLineItems(array $transactions): array {
    foreach ($transactions as $key => $value) {
      if (!isset($value['lineItems'][0])) {
        $lineItems = $value['lineItems'];
        unset($transactions[$key]['lineItems']);
        $transactions[$key]['lineItems'][0] = $lineItems;
      }
    }

    return $transactions;
  }

  /**
   * @param array $transactions
   * @description Fix transactions lineItems lineTaxes format. The original transactions object is formatted this way:
   * If there's only one LineTax, the object is formatted like this:
   * "lineTaxes": { content }
   * If there's more than one LineTax, the object is formatted like this:
   * "lineTaxes": [ { content }, { content } ]
   * This function fixes the format to always be an array of LineTaxes. So, if there's only one LineTax,
   * the object will be formatted like this:
   * "lineTaxes": [ { content } ]
   * @return array
   */
  private function fixTransactionsLineItemsLineTaxes(array $transactions): array {
    foreach ($transactions as $transactionKey => $transaction) {
      foreach ($transaction['lineItems'] as $lineItemKey => $lineItem) {

        if (!isset($lineItem['lineTaxes'][0]) && isset($lineItem['lineTaxes'])) {
          $lineTaxes = $lineItem['lineTaxes'];
          unset($transactions[$transactionKey]['lineItems'][$lineItemKey]['lineTaxes']);
          $transactions[$transactionKey]['lineItems'][$lineItemKey]['lineTaxes'][0] = $lineTaxes;
        }
      }
    }
    return $transactions;
  }

  /**
   * @description Returns an array that may contain the following keys:
   * accountDaysToBeSynchronized: array of dates to be synchronized by wex account id
   * accountsToBeSynchronizedForTheFirstTime: array of wex account id to be synchronized for the first time
   * @return array
   * @param array $wexAccountIds
   * @throws Exception
   */
  private function getAccountDaysToBeSynchronized(int $wexAccountId): array {
    $beginDate = now()->subMonths(self::AMOUNT_OF_MONTHS_TO_GET_DATA)->startOfDay();
    $endDate = now()->subDays(self::DAYS_TO_SUBTRACT)->endOfDay();

    $yearsToBeSynced = $this->calculateYearsToSync($beginDate, $endDate);

    $alreadySyncedDates = WexTransactionsSyncedDate::where('wex_account_id', $wexAccountId)
      ->whereIn('year', $yearsToBeSynced)
      ->get();

    $alreadySyncedDates = $alreadySyncedDates->filter(
      function ($alreadySyncDate) use ($beginDate, $endDate) {
        $endDateToCompare = Carbon::createFromDate(
          $alreadySyncDate->year,
          $alreadySyncDate->month,
          1
        );
        $startDateToCompare = Carbon::createFromDate(
          $alreadySyncDate->year,
          $alreadySyncDate->month,
          1
        )->addMonth();
        // If begin date is 07/15, we need to include July.
        // In this case, startDateToCompare will be 08/01, so included.
        return $startDateToCompare->greaterThanOrEqualTo($beginDate)
          && $endDateToCompare->lessThanOrEqualTo($endDate);
      }
    );

    $periodToRetrieveData = CarbonPeriod::create($beginDate, $endDate);
    $periodCollection = collect($periodToRetrieveData->toArray());

    $alreadySyncedDatesList = [];
    foreach ($alreadySyncedDates as $alreadySyncedDatesPerMonth) {
      $year = $alreadySyncedDatesPerMonth->year;
      $month = $alreadySyncedDatesPerMonth->month;
      $days = explode(',', $alreadySyncedDatesPerMonth->days);
      foreach ($days as $day) {
        $alreadySyncedDatesList["$year-$month-$day"] = true;
      }
    }

    // Filter the dates that were not synced yet
    $datesToBeSynced = $periodCollection->filter(
      function (Carbon $date) use ($alreadySyncedDatesList) {
        $formattedDate = $date->format('Y-m-d');
        return !isset($alreadySyncedDatesList[$formattedDate]);
      }
    );

    return $datesToBeSynced->toArray();
  }

  /**
   * @description Updates the table wex_transactions_synced_dates merging the new sync dates with the old ones
   * @return void
   * @param array $newSyncDates
   * $syncDates has all the days (Carbon format) that were synchronized
   * @param int $accountId
   * @throws Exception
   */
  private function updateWexTransactionsSyncedDate(int $accountId, $newSyncDate): void {
    $year = $newSyncDate->format('Y');
    $month = $newSyncDate->format('m');
    $day = $newSyncDate->format('d');

    $alreadySyncedDate = WexTransactionsSyncedDate::where('wex_account_id', $accountId)
      ->where('year', $year)
      ->where('month', $month)
      ->first();

    if ($alreadySyncedDate) {
      $alreadySyncDaysArray = explode(',', $alreadySyncedDate->days);

      if (!in_array($day, $alreadySyncDaysArray)) {
        $alreadySyncDaysArray[] = $day;
        sort($alreadySyncDaysArray);
        $alreadySyncedDate->days = implode(',', $alreadySyncDaysArray);
        $alreadySyncedDate->save();
      }
    } else {
      $alreadySyncedDate = new WexTransactionsSyncedDate();
      $alreadySyncedDate->wex_account_id = $accountId;
      $alreadySyncedDate->year = $year;
      $alreadySyncedDate->month = $month;
      $alreadySyncedDate->days = $day;
      $alreadySyncedDate->save();
    }
  }

  /**
   * @description Calculate and get an array of integers representing the years to be checked on db
   * @return array
   * @param Carbon $beginDate
   * @param Carbon $endDate
   * @throws Exception
   */
  private function calculateYearsToSync(Carbon $beginDate, Carbon $endDate): array {
    $interval = \DateInterval::createFromDateString('1 year');
    $period = new \DatePeriod($beginDate, $interval, $endDate);

    $years = [];
    foreach ($period as $dt) {
      $years[] = (int) $dt->format("Y");
    }

    $years[] = (int) $endDate->format("Y");

    return $years;
  }

  /**
   * @description: Get and save transactions for every company that has a Wex account.
   * @param string $beginDate
   * @param string $endDate
   * @return bool
   * @throws Exception
   */
  public function getAndSaveCompaniesTransactions(): void {
    $wexAccounts = WexAccount::all();

    foreach ($wexAccounts as $wexAccount) {
      LoginAndGetTransactionsByWexAccountJob::dispatch(app(WexService::class), $wexAccount);
    }
  }

  /**
   * @description: Get Wex transactions of some specified days (Collection of Carbon dates)
   * @param array $daysToSynchronize // array of Carbon dates
   * @param string $clientId
   * @param int $wexAccountId
   * @return array
   * @throws Exception
   */
  private function synchronizeTransactions(
    array $daysToSynchronize,
    string $clientId,
    int $wexAccountId
  ): void {
    $j = 0;
    foreach ($daysToSynchronize as $dayToSynchronize) {
      if ($j > 0) {
        sleep(1);
      }
      $j++;

      $startOfTheDay = (clone $dayToSynchronize)->startOfDay();
      $endOfTheDay = (clone $dayToSynchronize)->endOfDay();

      $formattedStartOfTheDay = $startOfTheDay->format(config('constant.ISO_8601_date_format'));
      $formattedEndOfTheDay = $endOfTheDay->format(config('constant.ISO_8601_date_format'));

      $result = $this->getTransactions($clientId, $formattedStartOfTheDay, $formattedEndOfTheDay);

      $transactions = [];

      if (!empty($result->value)) {
        $transactions = $result->value;
        $transactions = json_decode(json_encode($transactions), true);

        // If there's only one transaction,
        // the array will be an associative array, so we need to convert it to a numeric array
        if (empty($transactions[0])) {
          $transactions = [$transactions];
        }
      }

      $this->saveTransactionsAndUpdateSyncedDates(
        $wexAccountId,
        $transactions,
        $dayToSynchronize
      );
    }
  }

  /**
   * @description: Get Wex transactions for a specific Wex Account and save on database
   * @param WexAccount $wexAccount
   * @return array
   * @throws Exception
   */
  public function synchronizeTransactionsByWexAccount(WexAccount $wexAccount): void {
    $clientId = $this->wexWebServiceLogin(
      $wexAccount->user_name,
      $wexAccount->password
    );
    $accountDaysToSynchronize = $this
      ->getAccountDaysToBeSynchronized($wexAccount->id);

    if (empty($accountDaysToSynchronize)) {
      return;
    }

    $this->synchronizeTransactions(
      $accountDaysToSynchronize,
      $clientId,
      $wexAccount->id
    );
  }

  /**
   * @description: Get Ifta data
   * @param int $companyId
   * @param string $startDate
   * @param string $endDate
   * @return array
   * @throws Exception
   */
  public function getIftaData(int $companyId, string $startDate, string $endDate): array {
    $companyWexAccounts = WexAccount::select('id')->where('company_id', $companyId)->get();

    if ($companyWexAccounts->isEmpty()) {
      return [];
    }

    $result = [];

    $companyWexAccountIds = $companyWexAccounts->pluck('id')->toArray();

    $transactionLineItems = DB::table('wex_transaction_line_items')
      ->join('wex_transactions', 'wex_transactions.id', '=', 'wex_transaction_line_items.wex_transaction_id')
      ->where('wex_transaction_line_items.use_type', 1)
      ->whereIn('wex_transactions.wex_account_id', $companyWexAccountIds)
      ->whereBetween('wex_transactions.transaction_date', [$startDate, $endDate])
      ->select('wex_transaction_line_items.*', 'wex_transactions.location_state')
      ->get();

    $groupedByStateTransactions = $transactionLineItems->groupBy('location_state');

    $j = 0;
    foreach ($groupedByStateTransactions as $state => $lineItems) {
      $result[$j]['gallonsPaid'] = $lineItems->sum('quantity');
      $result[$j]['stateTaxPaid'] = $lineItems->sum('state_tax');
      $result[$j]['state'] = $state;
      $j++;
    }

    return $result;
  }
}
