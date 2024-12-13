<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\DispacherDetail;
use App\Models\Load;
use App\Models\QuickbooksAuth;
use App\Models\QuickbooksSyncedLoads;
use App\Models\Tag;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use QuickBooksOnline\API\Core\OAuth\OAuth2\OAuth2LoginHelper;
use QuickBooksOnline\API\DataService\DataService;
use QuickBooksOnline\API\Facades\Account;
use QuickBooksOnline\API\Facades\Customer;
use QuickBooksOnline\API\Facades\Invoice;
use QuickBooksOnline\API\Facades\Item;

const INCOME_ACCOUNT_TYPE = "Income";
const INCOME_ACCOUNT_SUBTYPE = "SalesOfProductIncome";
const EXPENSE_ACCOUNT_TYPE = "Cost of Goods Sold";

class QuickbooksAuthService {
  private $clientId;
  private $clientSecret;
  private $redirectUri;
  private $baseUrl;

  public function __construct() {
    if (app()->environment('production')) {
      $this->clientId = config('constant.quickbooks_key.prod.client_id');
      $this->clientSecret = config('constant.quickbooks_key.prod.client_secret');
      $this->redirectUri = config('constant.quickbooks_key.prod.redirect_uri');
      $this->baseUrl = 'Production';
    } else {
      $this->clientId = config('constant.quickbooks_key.dev.client_id');
      $this->clientSecret = config('constant.quickbooks_key.dev.client_secret');
      $this->redirectUri = config('constant.quickbooks_key.dev.redirect_uri');
      $this->baseUrl = 'Development';
    }
  }

  public function connectToQuickbooks() {
    if ($this->connectionStatus() == 'Connected') {
      throw new \Exception('QuickBooks Online is already connected, please disconnect first.');
    }

    $tagId = request('tag_id');
    $quickbooksAuth = $this->getOrCreateQuickbooksAuth($tagId);

    $state = $quickbooksAuth->csrf_state . $quickbooksAuth->company_id . ',';
    if (!empty($tagId)) {
      $state = $state . $tagId;
    }
    $state = $state . ',END';

    $dataService = DataService::Configure(array(
      'auth_mode' => 'oauth2',
      'ClientID' => $this->clientId,
      'ClientSecret' => $this->clientSecret,
      'RedirectURI' => $this->redirectUri,
      'scope' => 'com.intuit.quickbooks.accounting',
      'baseUrl' => $this->baseUrl,
      'state' => $state,
    ));
    $dataService->throwExceptionOnError(true);

    $OAuth2LoginHelper = $dataService->getOAuth2LoginHelper();
    $authorizationUrl = $OAuth2LoginHelper->getAuthorizationCodeURL();

    return $authorizationUrl; //redirect()->to($authorizationUrl)->send();
  }

  public function disconnectToQuickbooks() {
    $tagId = request('tag_id');
    $quickbooksAuth = $this->getQuickbooksAuth($tagId);
    if (is_null($quickbooksAuth)) {
      // return $this->respondBadRequest("No auth record!");
      throw new \Exception('QuickBooks Online is not connected');
    }
    $refreshToken = $quickbooksAuth->refresh_token;
    $quickbooksAuth->delete();

    $oauth2LoginHelper = new OAuth2LoginHelper($this->clientId, $this->clientSecret);
    $revokeResult = $oauth2LoginHelper->revokeToken($refreshToken);
  }

  public function connectionStatus($tagId = null, $checkRequest = true) {
    if (empty($tagId) && $checkRequest) {
      $tagId = request('tag_id');
    }
    $quickbooksAuth = $this->getQuickbooksAuth($tagId);
    return $this->connectionStatusHelper($quickbooksAuth);
  }

  private function connectionStatusHelper($quickbooksAuth) {
    if ($quickbooksAuth && $quickbooksAuth->refresh_token) {
      return config('constant.integration_status.connected');
    } else {
      return config('constant.integration_status.not_connected');
    }
  }

  public function connectionStatusCascade($tagId) {
    if (!empty($tagId)) {
      $ret = QuickbooksAuth::where('tag_id', $tagId)->first();
      if ($ret && $ret->refresh_token) {
        return config('constant.integration_status.connected');
      }
      $invoiceSyncCascade = Tag::find($tagId)->invoice_sync_cascade;
      // When invoice_sync_cascade is true, it means we will use parent company's QB when tag itself is not connected to QB.
      if (!$invoiceSyncCascade) {
        return config('constant.integration_status.not_connected');
      }
    }
    return $this->connectionStatus(null, false);
  }

  /**
   * Returns the connection status of all tags and parent company.
   * @return array
   */
  public function connectionStatusAll(): array {
    $companyId = $this->getAdminCompanyDetailId();

    $adminCompanyDetail = AdminCompanyDetail::select('id')
      ->where('id', $companyId)
      ->with([
        'tags:id,company_id',
        'allQuickbooksAuths:id,company_id,tag_id,refresh_token',
      ])->first();
    $allQuickbooksAuths = $adminCompanyDetail->allQuickbooksAuths;
    $parentStatus = $this->connectionStatusHelper(
      $allQuickbooksAuths->whereNull('tag_id')->first()
    );

    $TagsWithQboStatus = $adminCompanyDetail->tags->map(
      function ($tag) use ($allQuickbooksAuths) {
        $oneTagStatus = $this->connectionStatusHelper(
          $allQuickbooksAuths->where('tag_id', $tag->id)->first()
        );
        return [
          "tagId" => $tag->id,
          "status" => $oneTagStatus,
        ];
      }
    )->values();

    return [
      "parentStatus" => $parentStatus,
      "tags" => $TagsWithQboStatus,
    ];
  }

  /*
  The state variable now contains tag id: 40 random bytes + 'company_id,tag_id,END'.
  END is to make sure we get the correct ids.
   */
  public function processQuickbooksResponse(Request $request) {
    $parsedUrl = parse_url($request->header('referer'));
    parse_str($parsedUrl['query'], $parsedQueryParams);
    $error = $parsedQueryParams['error'] ?? null;
    if (!is_null($error)) {
      // return $this->respondWithError('Error in connecting to Quickbooks: ' . $error);
      throw new \Exception('Error in connecting to Quickbooks');
    }
    $code = $parsedQueryParams['code'];
    $realmId = $parsedQueryParams['realmId'];
    $state = $parsedQueryParams['state'];

    if (Str::length($state) > 40) {
      $stateCompanyIdTagIdEnd = explode(',', Str::substr($state, 40, Str::length($state) - 40));
      $stateCsrfState = Str::substr($state, 0, 40);
      if (
        count($stateCompanyIdTagIdEnd) != 3 || $stateCompanyIdTagIdEnd[2] != 'END' ||
        $stateCompanyIdTagIdEnd[0] != $this->getAdminCompanyDetailId()
      ) {
        // return $this->respondBadRequest("csrf id error!");
        throw new \Exception('csrf id error');
      }
      $tagId = $stateCompanyIdTagIdEnd[1];
      $quickbooksAuth = $this->getQuickbooksAuth($tagId);
      if (is_null($quickbooksAuth)) {
        // return $this->respondBadRequest("No auth record!");
        throw new \Exception('No auth record');
      }
      if ($stateCsrfState != $quickbooksAuth->csrf_state) {
        // return $this->respondBadRequest("csrf error!");
        throw new \Exception('csrf error');
      }

      //  && $quickbooksAuth->realm_id != $realmId
      if (!is_null($quickbooksAuth->realm_id)) {
        // Makes sure if connected to another qb account previously, we do remove previous records.
        // QuickbooksSyncedLoads::where('company_id', $this->getAdminCompanyDetailId())->delete();

        // Given the new connection status check at the beginning of the connectToQuickbooks(),
        // we should never reach here, unless users manually go to this website.
        throw new \Exception('QuickBooks Online is already connected, please disconnect first.');
      }
      $quickbooksAuth->code = $code;
      $quickbooksAuth->realm_id = $realmId;

      $dataService = DataService::Configure(array(
        'auth_mode' => 'oauth2',
        'ClientID' => $this->clientId,
        'ClientSecret' => $this->clientSecret,
        'RedirectURI' => $this->redirectUri,
        'scope' => 'com.intuit.quickbooks.accounting',
        'baseUrl' => $this->baseUrl,
        'state' => $state,
      ));
      $dataService->throwExceptionOnError(true);

      $OAuth2LoginHelper = $dataService->getOAuth2LoginHelper();
      $accessTokenObj = $OAuth2LoginHelper->exchangeAuthorizationCodeForToken($code, $realmId);
      $this->saveQuickbooksAuth($quickbooksAuth, $accessTokenObj);
    }
  }

  public function syncToQuickbooks() {
    $load_id = request('load');
    $load = Load::with(['customer', 'loadCharge', 'thirdPartyCarrierCharge'])
      ->where([
        'id' => $load_id,
        'admin_company_detail_id' => $this->getAdminCompanyDetailId(),
      ])
      ->firstOrFail();
    $loadCharges = LoadChargeHelper::generateLoadCharges($load);

    $this->syncToQuickbooksWithLoadAndCharge($load, $loadCharges);
  }

  public function syncToQuickbooksWithLoadAndCharge($load, $loadCharges) {
    if (is_null($load)) {
      throw new \Exception('load is null');
    }
    if (is_null($loadCharges)) {
      throw new \Exception('loadCharges is null');
    }

    // Make sure to use the same $tagId variable for both $quickbooksAuth
    // and $quickbooksSyncedLoad!!!
    $tagId = $load->tag_id;
    $quickbooksAuth = $this->getQuickbooksAuthCascade($tagId);
    if (is_null($quickbooksAuth) || !$quickbooksAuth->refresh_token) {
      // return $this->respondBadRequest("Quickbooks not connected!");
      throw new \Exception('QuickBooks Online not connected');
    }
    $accessTokenExpiresAt = CarbonImmutable::parse($quickbooksAuth->access_token_expires_at);
    $currentTimeAdd5Min = Carbon::now()->addMinutes(5);
    // We need to refresh token.
    if ($currentTimeAdd5Min->greaterThanOrEqualTo($accessTokenExpiresAt)) {
      $oauth2LoginHelper = new OAuth2LoginHelper($this->clientId, $this->clientSecret);
      $accessTokenObj = $oauth2LoginHelper->refreshAccessTokenWithRefreshToken($quickbooksAuth->refresh_token);
      $this->saveQuickbooksAuth($quickbooksAuth, $accessTokenObj);
    }
    $dataService = DataService::Configure(array(
      'auth_mode' => 'oauth2',
      'ClientID' => $this->clientId,
      'ClientSecret' => $this->clientSecret,
      'accessTokenKey' => $quickbooksAuth->access_token,
      'refreshTokenKey' => $quickbooksAuth->refresh_token,
      'QBORealmID' => $quickbooksAuth->realm_id,
      'baseUrl' => $this->baseUrl,
    ));
    $dataService->throwExceptionOnError(true);

    $customer = $load->customer;
    $customerRef = $this->getCustomerObj($dataService, $customer);

    if (is_null($customerRef)) {
      // return $this->respondWithError('Error in Quickbooks response');
      throw new \Exception('Error in Quickbooks response');
    }
    // Create the invoice.
    $invoiceCreateArray = [
      "CustomerRef" => [
        "value" => $customerRef->Id,
      ],
      'Line' => [],
    ];

    $adminCompanyDetail = $this->getAdminCompanyDetail();
    $companyState = $adminCompanyDetail->state;
    $canadaTaxCode = null;
    if (in_array($companyState, config('constant.states.canada'))) {
      $canadaTaxCode = $this->getCanadaTaxCode($dataService);
    }

    if (!is_null($loadCharges['hauling_fees'])) {
      $this->addOneItem($dataService, $invoiceCreateArray, 'Hauling Fee', $loadCharges['hauling_fees_type'], $loadCharges['hauling_fees'], $canadaTaxCode);
    }
    if (!is_null($loadCharges['fuel_surcharge']) && $loadCharges['fuel_surcharge'] != 0) {
      $this->addOneItem($dataService, $invoiceCreateArray, 'Fuel Surcharge', $loadCharges['fuel_surcharge_type'], $loadCharges['fuel_surcharge'], $canadaTaxCode);
    }
    foreach ($loadCharges['accessorial_fees'] as $oneFee) {
      if ($oneFee['accessorial_fee_rate'] != 0) {
        $this->addOneItem($dataService, $invoiceCreateArray, 'Accessorial Fee', $oneFee['accessorial_fee_type'], $oneFee['accessorial_fee_rate'], $canadaTaxCode);
      }
    }
    foreach ($loadCharges['accessorial_deduction'] as $oneFee) {
      if ($oneFee['accessorial_deduction_fee_rate'] != 0) {
        $this->addOneItem($dataService, $invoiceCreateArray, 'Accessorial Deduction', $oneFee['accessorial_deduction_fee_type'], $oneFee['accessorial_deduction_fee_rate'], $canadaTaxCode);
      }
    }

    if ($adminCompanyDetail->show_dispatcher_fee_on_invoice && $load->dispatcher_id) {
      $accessorialCache = (new LoadInvoiceService())->updateLoadWithCommissionableAccessorials($load);
      $totalDispatcherCommisions = DispatcherCommissionHelper::calculateCommissions($load, $accessorialCache)->total_commission ?? 0;
      $this->addOneItem($dataService, $invoiceCreateArray, 'Accessorial Deduction', "dispatcher fee", -$totalDispatcherCommisions, $canadaTaxCode);
    }

    if ($adminCompanyDetail->show_factoring_fee_on_invoice) {
      $factoringCompany = null;
      if (is_null($load->customer->no_factoring)) {
        $factoringCompany = $adminCompanyDetail->factoringCompanies->first();
      }
      if ($factoringCompany) {
        $factoringFee = round($load->total_amount * $factoringCompany->factoring_fee_fractional, 2) ?? 0;
        $this->addOneItem($dataService, $invoiceCreateArray, 'Accessorial Deduction', "factoring fee", -$factoringFee, $canadaTaxCode);
      }
    }

    if (!is_null($load->discount) && $load->discount != 0) {
      $this->addDiscount($invoiceCreateArray, $load->discount);
    }

    if (!is_null($customer->billing_email) && Str::length($customer->billing_email) > 1) {
      $invoiceCreateArray["BillEmail"] = [
        "Address" => $customer->billing_email,
      ];
    }

    $dispatcherName = $this->getDispatcherName($load->dispatcher_id);
    $invoiceCreateArray['PrivateNote'] = 'Reference number: ' . $load->refrence_id . ', ' . config('app.name') . ' load number: ' . $load->load_unique_id . ', Dispatcher: ' . $dispatcherName;
    $invoiceCreateArray['DocNumber'] = (string) $load->load_unique_id;
    $invoiceCreateArray['CustomerMemo'] = [
      'value' => 'Load reference: ' . $load->refrence_id,
    ];

    $this->addDispatcherAndReference($dataService, $invoiceCreateArray, $dispatcherName, $load->refrence_id);

    $quickbooksSyncedLoad = QuickbooksSyncedLoads::where('load_id', $load->id)
      ->where('quickbooks_auth_id', $quickbooksAuth->id)->first();
    // First time syncing this load.
    if (is_null($quickbooksSyncedLoad)) {
      $invoiceObj = Invoice::create($invoiceCreateArray);
      $resultingInvoiceObj = $dataService->Add($invoiceObj);
      // This needs to be stored in the database in the future.
      $invoiceId = $resultingInvoiceObj->Id;
      if (!is_null($invoiceId)) {
        $quickbooksSyncedLoad = new QuickbooksSyncedLoads;
        $quickbooksSyncedLoad->quickbooks_auth_id = $quickbooksAuth->id;
        $quickbooksSyncedLoad->load_id = $load->id;
        $quickbooksSyncedLoad->qb_invoice_id = strval($invoiceId);
        $quickbooksSyncedLoad->save();
      }
    } else {
      // Load previously synced.
      $invoiceCreateArray['sparse'] = 'true';
      $entities = $dataService->Query("SELECT * FROM Invoice where Id='" . $quickbooksSyncedLoad->qb_invoice_id . "'");
      $error = $dataService->getLastError();
      if ($error) {
        /*
        error_log("The Status code is: " . $error->getHttpStatusCode());
        error_log("The Helper message is: " . $error->getOAuthHelperError());
        error_log("The Response message is: " . $error->getResponseBody());
         */
        throw new \Exception('Error connecting Quickbooks.');
      }

      // User deleted synced invoice on QuickBooks Online.
      if (empty($entities)) {
        $invoiceObj = Invoice::create($invoiceCreateArray);
        $resultingInvoiceObj = $dataService->Add($invoiceObj);
        $invoiceId = $resultingInvoiceObj->Id;
        $quickbooksSyncedLoad->qb_invoice_id = strval($invoiceId);
        $quickbooksSyncedLoad->save();
      } else {
        $theInvoice = reset($entities);
        $invoiceObj = Invoice::update($theInvoice, $invoiceCreateArray);
        $resultingInvoiceObj = $dataService->Update($invoiceObj);
      }
    }
  }

  private function saveQuickbooksAuth($quickbooksAuth, $accessTokenObj) {
    $accessTokenValue = $accessTokenObj->getAccessToken();
    $accessTokenExpiresIn = $accessTokenObj->getAccessTokenValidationPeriodInSeconds();

    $refreshTokenValue = $accessTokenObj->getRefreshToken();
    $refreshTokenExpiresIn = $accessTokenObj->getRefreshTokenValidationPeriodInSeconds();

    $currentTime = CarbonImmutable::now();
    $accessTokenExpiresAt = $currentTime->addSeconds($accessTokenExpiresIn); //->timestamp;
    $refreshTokenExpiresAt = $currentTime->addSeconds($refreshTokenExpiresIn); //->timestamp;

    $quickbooksAuth->access_token = $accessTokenValue;
    $quickbooksAuth->access_token_expires_at = $accessTokenExpiresAt;
    $quickbooksAuth->refresh_token = $refreshTokenValue;
    $quickbooksAuth->refresh_token_expires_at = $refreshTokenExpiresAt;
    $quickbooksAuth->save();
  }

  private function getAuthUser() {
    return Auth::user();
  }

  private function getAdminCompanyDetailId() {
    return $this->getAuthUser()->admin_company_detail_id;
  }

  private function getOrCreateQuickbooksAuth($tagId) {
    $companyId = $this->getAdminCompanyDetailId();
    if (!empty($tagId)) {
      $quickbooksAuth = QuickbooksAuth::where('tag_id', $tagId)->first();
    } else {
      $quickbooksAuth = QuickbooksAuth::where('company_id', $companyId)->whereNull('tag_id')->first();
    }

    if (is_null($quickbooksAuth)) {
      $quickbooksAuth = new QuickbooksAuth;
      $quickbooksAuth->company_id = $companyId;
      if (!empty($tagId)) {
        $quickbooksAuth->tag_id = $tagId;
      }
      $quickbooksAuth->csrf_state = Str::random(40);
      $quickbooksAuth->save();
    }
    return $quickbooksAuth;
  }

  private function getQuickbooksAuth($tagId) {
    if (!empty($tagId)) {
      return QuickbooksAuth::where('tag_id', $tagId)->first();
    }
    return $this->getAdminCompanyDetail()->quickbooksAuth;
  }

  private function getQuickbooksAuthCascade($tagId) {
    if (!empty($tagId)) {
      $ret = QuickbooksAuth::where('tag_id', $tagId)->first();
      if (!is_null($ret) && !is_null($ret->access_token) && !is_null($ret->refresh_token)) {
        return $ret;
      }
      $invoiceSyncCascade = Tag::find($tagId)->invoice_sync_cascade;
      // When invoice_sync_cascade is true, it means we will use parent company's QB when tag itself is not connected to QB.
      if (!$invoiceSyncCascade) {
        return null;
      }
    }
    return $this->getAdminCompanyDetail()->quickbooksAuth;
  }

  private function getAdminCompanyDetail() {
    return $this->getAuthUser()->adminCompanyDetail;
  }

  private function getDispatcherName($dispatcherId) {
    $dispatcherDetail = User::find($dispatcherId)->dispacherDetail ?? null;
    if (!is_null($dispatcherDetail)) {
      return $dispatcherDetail->first_name . ' ' . $dispatcherDetail->last_name;
    }
    return '';
  }

  private function addDispatcherAndReference($dataService, &$invoiceCreateArray, $dispatcherName, $referenceId) {
    $companyPreference = $dataService->getCompanyPreferences();
    $customerField = $companyPreference->SalesFormsPrefs->CustomField;
    //If size is 2, indicate CustomerField is enabled. The first CustomerField defintion is structure, the second one is the actual value.
    if (!is_array($customerField) || sizeof($customerField) < 2) {
      // Not an array if custom field is not set by user. Their SDK and online docs are different.
      //echo "CustomerField is enabled.\n";
      return;
    }

    $dispatcherFieldId = '';
    $referenceFieldId = '';
    $actualCustomerField = end($customerField)->CustomField;

    //Find the name of each field
    if (!is_array($actualCustomerField)) {
      // If only one custom field is set by user, then not an array.
      $actualCustomerField = [$actualCustomerField];
    }
    foreach ($actualCustomerField as $field) {
      $name = $field->StringValue;
      if ($dispatcherFieldId == '' && Str::contains(Str::lower($name), 'dispatcher')) {
        $dispatcherFieldId = substr($field->Name, -1);
      } else if ($referenceFieldId == '' && Str::contains(Str::lower($name), 'reference')) {
        $referenceFieldId = substr($field->Name, -1);
      }
    }

    if ($dispatcherFieldId != '') {
      $invoiceCreateArray['CustomField'][] = [
        'DefinitionId' => $dispatcherFieldId,
        'StringValue' => $dispatcherName,
        'Type' => 'StringType',
      ];
    }
    if ($referenceFieldId != '') {
      $invoiceCreateArray['CustomField'][] = [
        'DefinitionId' => $referenceFieldId,
        'StringValue' => (string) $referenceId,
        'Type' => 'StringType',
      ];
    }
  }

  private function addOneItem($dataService, &$invoiceCreateArray, $itemName, $itemDesc, $itemAmount, $canadaTaxCode) {
    $itemRef = $this->getItemObj($dataService, $itemName);
    if (is_null($itemRef)) {
      // return $this->respondWithError('Error in Quickbooks response');
      throw new \Exception('Error in Quickbooks response');
    }
    $item = [
      "Amount" => $itemAmount,
      "DetailType" => "SalesItemLineDetail",
      "Description" => (string) $itemDesc,
      "SalesItemLineDetail" => [
        "UnitPrice" => $itemAmount,
        "ItemRef" => [
          "value" => $itemRef->Id,
        ],
      ],
    ];
    if ($canadaTaxCode) {
      $item['SalesItemLineDetail']['TaxCodeRef'] = $canadaTaxCode;
    }
    array_push($invoiceCreateArray['Line'], $item);
  }

  private function addDiscount(&$invoiceCreateArray, $itemAmount) {
    array_push($invoiceCreateArray['Line'], [
      "Amount" => $itemAmount,
      "DetailType" => "DiscountLineDetail",
      "DiscountLineDetail" => [
        "PercentBased" => false,
      ],
    ]);
  }

  /**
   * Find if a customer with customerName, if not, create one and return
   */
  private function getCustomerObj($dataService, $customer) {
    $customerName = $customer->company_name;

    $customerArray = $dataService->Query("select * from Customer where DisplayName='" . addslashes($customerName) . "'");
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getCustomerObj');
    } else {
      if (is_array($customerArray) && sizeof($customerArray) > 0) {
        return current($customerArray);
      }
    }

    // Create Customer
    $customerCreateArray = [
      "DisplayName" => $customerName,
      "CompanyName" => $customerName,
    ];
    if (!is_null($customer->billing_email) && Str::length($customer->billing_email) > 1) {
      $customerCreateArray["PrimaryEmailAddr"] = [
        "Address" => $customer->billing_email,
      ];
    }
    if (!is_null($customer->billing_phone_number) && Str::length($customer->billing_phone_number) > 1) {
      $customerCreateArray["PrimaryPhone"] = [
        "FreeFormNumber" => $customer->billing_phone_number,
      ];
    }
    if (!is_null($customer->billing_address) && Str::length($customer->billing_address) > 1) {
      $customerCreateArray["BillAddr"] = [
        "Line1" => $customer->billing_address,
        "City" => $customer->billing_city ?? "",
        "PostalCode" => $customer->billing_zip_code ?? "",
        "CountrySubDivisionCode" => $customer->billing_state ?? "",
      ];
    }
    if (!is_null($customer->address) && Str::length($customer->address) > 1) {
      $customerCreateArray["ShipAddr"] = [
        "Line1" => $customer->address,
        "City" => $customer->city ?? "",
        "PostalCode" => $customer->zip_code ?? "",
        "CountrySubDivisionCode" => $customer->state ?? "",
      ];
    }
    $customerRequestObj = Customer::create($customerCreateArray);
    $customerResponseObj = $dataService->Add($customerRequestObj);
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getCustomerObj');
    } else {
      return $customerResponseObj;
    }
    return null;
  }

  /**
   * Find if an Item is present , if not create new Item
   */
  // Item description like type of each fee
  // some fees are in array.
  private function getItemObj($dataService, $itemName) {
    $itemArray = $dataService->Query("select * from Item WHERE Name='" . addslashes($itemName) . "'");
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getItemObj');
    } else {
      if (is_array($itemArray) && sizeof($itemArray) > 0) {
        return current($itemArray);
      }
    }
    // Fetch IncomeAccount and ExoenseAccount needed to create an Item
    $incomeAccount = $this->getIncomeAccountObj($dataService);
    $expenseAccount = $this->getExpenseAccountObj($dataService);
    if (is_null($incomeAccount) || is_null($expenseAccount)) {
      return null;
    }

    // Create Item
    $ItemObj = Item::create([
      "Name" => $itemName,
      "Active" => true,
      "Type" => "Service",
      "IncomeAccountRef" => [
        "value" => $incomeAccount->Id,
      ],
      "ExpenseAccountRef" => [
        "value" => $expenseAccount->Id,
      ],
    ]);

    $resultingItemObj = $dataService->Add($ItemObj);
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getItemObj');
    } else {
      return $resultingItemObj;
    }
    return null;
  }

  /**
   * Find if an account of Income type exists, if not, create one
   */
  private function getIncomeAccountObj($dataService) {
    $accountArray = $dataService->Query("select * from Account where AccountType='" . INCOME_ACCOUNT_TYPE . "' and AccountSubType='" . INCOME_ACCOUNT_SUBTYPE . "'");
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getIncomeAccountObj');
    } else {
      if (is_array($accountArray) && sizeof($accountArray) > 0) {
        return current($accountArray);
      }
    }
    // Create Income Account
    $incomeAccountRequestObj = Account::create([
      "AccountType" => INCOME_ACCOUNT_TYPE,
      "AccountSubType" => INCOME_ACCOUNT_SUBTYPE,
      "Name" => "IncomeAccount",
    ]);
    $incomeAccountObject = $dataService->Add($incomeAccountRequestObj);
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getIncomeAccountObj');
    } else {
      return $incomeAccountObject;
    }
    return null;
  }

  /**
   * Find if an account of "Cost of Goods Sold" type exists, if not, create one
   */
  private function getExpenseAccountObj($dataService) {
    $accountArray = $dataService->Query("select * from Account where AccountType='" . EXPENSE_ACCOUNT_TYPE . "'");
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getExpenseAccountObj');
    } else {
      if (is_array($accountArray) && sizeof($accountArray) > 0) {
        return current($accountArray);
      }
    }

    // Create Expense Account
    $expenseAccountRequestObj = Account::create([
      "AccountType" => EXPENSE_ACCOUNT_TYPE,
      "Name" => "ExpenseAccount",
    ]);
    $expenseAccountObj = $dataService->Add($expenseAccountRequestObj);
    $error = $dataService->getLastError();
    if ($error) {
      // Log::error($error);
      throw new \Exception('Error in getExpenseAccountObj');
    } else {
      return $expenseAccountObj;
    }
    return null;
  }

  private function getCanadaTaxCode($dataService) {
    $taxCode = $dataService->Query("select * from TaxCode where Name='E'");
    $error = $dataService->getLastError();
    if ($error) {
      throw new \Exception('Error in getCanadaTaxCode');
    }

    return $taxCode[0]->Id;
  }

  /**
   * Get Current Company QBO
   * @param $companyId
   * @param $tagId
   * @return object
   * @throws Exception
   */
  public function getCurrentCompanyQuickbooksAuth($companyId, $tagId = null) {
    $getQboAuth = QuickbooksAuth::where('company_id', $companyId)
      ->where('tag_id', $tagId)
      ->whereNotNull('realm_id')
      ->whereNotNull('access_token')
      ->first();

    if (!$getQboAuth) {
      throw new \Exception('QuickBook Online is not connected.');
    }
    return $getQboAuth;
  }

  /**
   * Connect With QBO & Get Data Service
   * @param object $quickbooksAuth
   * @return mix
   */
  public function getDataService($quickbooksAuth) {

    $accessTokenExpiresAt = CarbonImmutable::parse($quickbooksAuth->access_token_expires_at);
    $currentTimeAdd5Min = Carbon::now()->addMinutes(5);
    // Check If We need to refresh token.
    if ($currentTimeAdd5Min->greaterThanOrEqualTo($accessTokenExpiresAt)) {
      $oauth2LoginHelper = new OAuth2LoginHelper($this->clientId, $this->clientSecret);
      $accessTokenObj = $oauth2LoginHelper->refreshAccessTokenWithRefreshToken($quickbooksAuth->refresh_token);
      $this->saveQuickbooksAuth($quickbooksAuth, $accessTokenObj);
      $quickbooksAuth->refresh();
    }

    $dataService = DataService::Configure(array(
      'auth_mode' => 'oauth2',
      'ClientID' => $this->clientId,
      'ClientSecret' => $this->clientSecret,
      'accessTokenKey' => $quickbooksAuth->access_token,
      'refreshTokenKey' => $quickbooksAuth->refresh_token,
      'QBORealmID' => $quickbooksAuth->realm_id,
      'baseUrl' => $this->baseUrl,
    ));
    return $dataService->throwExceptionOnError(true);
  }

  /**
   * Create Account
   * @param object $dataService
   * @param array $accountDetail
   * @return mix
   */
  public function createAccount($dataService, $accountDetail) {
    try {
      $accountCreateObj = Account::create($accountDetail);
      $resultingObj = $dataService->Add($accountCreateObj);
      return $resultingObj;
    } catch (\Exception $exception) {
      $errorMessage = $this->extractErrorDetail($exception->getMessage());
      if (empty($errorMessage)) {
        $errorMessage = 'Error in create an account in QBO.';
      }
      throw new \Exception($errorMessage . ' : ' . $accountDetail['Name']);
    }
  }

  /**
   * Update Account
   * @param object $dataService
   * @param array $accountDetail
   * @param int $qboId
   * @return object
   * @throws Exception
   */
  public function updateAccount($dataService, $accountDetail, $qboId) {
    try {
      $account = $dataService->FindbyId('account', $qboId);
      $accountUpdateObj = Account::update($account, $accountDetail);
      $resultingObj = $dataService->Update($accountUpdateObj);
      return $resultingObj;
    } catch (\Exception $exception) {
      $errorMessage = $this->extractErrorDetail($exception->getMessage());
      if (empty($errorMessage)) {
        $errorMessage = 'Error in updating an account in QBO.';
      }
      throw new \Exception($errorMessage . ' : ' . $accountDetail['Name']);
    }
  }

  /**
   * Extract Error Message For QBO
   * Description : We are using this function for extract <Detail> error message from below example response.
   * Request is not made successful. Response Code:[400] with body:
   * [<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
   * <IntuitResponse xmlns="http://schema.intuit.com/finance/v3" time="2023-12-19T22:05:09.234-08:00">
   *  <Fault type="ValidationFault">
   *    <Error code="6240" element="">
   *     <Message>Duplicate Name Exists Error</Message>
   *     <Detail>The name supplied already exists. : Another account is already using this name.  Please use a different name.</Detail>
   *    </Error>
   *  </Fault>
   * </IntuitResponse>]
   * @param string $exceptionMessage
   * @return string|null
   */
  protected function extractErrorDetail($exceptionMessage) {
    $errorMessage = null;
    preg_match('/<Detail>(.*?)<\/Detail>/', $exceptionMessage, $matches);
    if (count($matches) == 2) {
      $errorMessage = $matches[1] ?? null;
    }
    return $errorMessage;
  }

  /**
   * Get All Current Company Accounts List From QBO
   * @param object $dataService
   * @return array
   * @throws Exception
   */
  public function getQboAccounts($dataService) {
    $getAccountList = $dataService->Query("select * from Account");
    $error = $dataService->getLastError();
    if ($error) {
      throw new \Exception('Error in get accounts from QBO.');
    }
    $accountsDetails = [];
    foreach ($getAccountList as $account) {
      $accountsDetails[] = [
        'qboId' => $account->Id,
        'name' => $account->Name,
        'isActive' => (bool) $account->Active,
        'type' => $account->AccountType,
        'subType' => $account->AccountSubType,
        'description' => $account->Description,
        'parentRef' => $account->ParentRef
      ];
    }
    return $accountsDetails;
  }

  /**
   * Get All Current Account Items List From QBO.
   * @param object $dataService
   * @return array
   * @throws Exception
   */
  public function getQboAccountItems($dataService) {
    $getItemList = $dataService->Query("select * from Item where Active=true");
    $error = $dataService->getLastError();
    if ($error) {
      throw new \Exception('Error in get Items.');
    }
    $itemsDetails = [];
    foreach ($getItemList as $item) {
      $itemsDetails[] = [
        'qboId' => $item->Id,
        'name' => $item->Name,
        'type' => $item->Type,
        'incomeDescription' => $item->Description ?? null,
        'expenseDescription' => $item->PurchaseDesc ?? null,
        'incomeAccountId' => $item->IncomeAccountRef ?? null,
        'expenseAccountId' => $item->ExpenseAccountRef ?? null,
      ];
    }
    return $itemsDetails;
  }
}
