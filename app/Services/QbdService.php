<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\Load;
use App\Models\QbdAccount;
use App\Models\QbdConnection;
use App\Models\QbdCustomer;
use App\Models\QbdInvoice;
use App\Models\QbdInvoiceItem;
use App\Models\QbdInvoiceLoad;
use App\Models\QbdItem;
use App\Models\QbdResyncInvoiceJob;
use App\Models\QbdStandardTerms;
use App\Models\Tag;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use QuickBooks_Utilities;
use QuickBooks_WebConnector_Queue;
use QuickBooks_WebConnector_QWC;

class QbdService {
  private $config;
  private $db_conn_def;
  private $tryAgainWarning = " to be synced before invoice can be synced. We will try to re-sync it tonight. No further actions are needed.";

  public function __construct() {
    $this->config = config('quickbooks_desktop');
    $this->db_conn_def = $this->config['qbd_db_conn_def'];
    if (!$this->config['qbd_db_conn_def']) {
      $dbconf = config('database');
      $db = $dbconf['connections'][$dbconf['default']];

      if ($db['driver'] == 'mysql') {
        $db['driver'] = 'mysqli';
      }
      $this->db_conn_def = $db['driver'] . '://' . $db['username'] . ':' . $db['password'] . '@' . $db['host'] . ':' . $db['port'] . '/' . $db['database'];
    }
  }

  private function createUser() {
    $qbdConnection = $this->getQbdConnection();

    if (is_null($qbdConnection)) {
      $companyId = $this->getAdminCompanyDetailId();
      $tagId = request('tag_id');

      $qbd_username = $companyId . 't';
      if (!empty($tagId)) {
        $qbd_username = $qbd_username . $tagId;
      }
      $date = Carbon::now();
      $qbd_username = $qbd_username . 't' . $date->toDateString() . Str::random(6);
      $qbd_password = Str::random(10);
      // This creates a username and password which is used by the Web Connector to authenticate
      QuickBooks_Utilities::createUser($this->db_conn_def, $qbd_username, $qbd_password);
      $qbdConnection = QbdConnection::create([
        'company_id' => $companyId,
        'tag_id' => $tagId,
        'qbd_username' => $qbd_username,
        'qbd_password' => $qbd_password,
      ]);
    }
    return ['qbd_username' => $qbdConnection->qbd_username, 'qbd_password' => $qbdConnection->qbd_password];
  }

  // Generate and return a .QWC Web Connector configuration file
  // Should call createUser() before.
  public function generateQWC() {
    $userNameAndPassword = $this->createUser();

    $name = config('app.name'); // A name for your server (make it whatever you want)
    $descrip = config('app.name') . ' - Capacity solutions platform designed to automate your operations with AI'; // A description of your server
    $appurl = 'https://' . $_SERVER['HTTP_HOST'] . '/qbd/qbwc';
    // dirname($_SERVER['REQUEST_URI'])
    // This *must* be httpS:// (path to your QuickBooks SOAP server)
    $appsupport = 'https://' . $_SERVER['HTTP_HOST']; // This *must* be httpS:// and the domain name must match the domain name above
    // TODO changed to fixed value
    $fileid = QuickBooks_WebConnector_QWC::fileID(); // Just make this up, but make sure it keeps that format
    // TODO changed to fixed value
    $ownerid = '{58f3550b-8e89-4a64-ad2f-5bade03dc902}';
    // QuickBooks_WebConnector_QWC::ownerID(); // Just make this up, but make sure it keeps that format
    $qbtype = QUICKBOOKS_TYPE_QBFS; // You can leave this as-is unless you're using QuickBooks POS
    $readonly = false; // No, we want to write data to QuickBooks
    $run_every_n_seconds = 900; // Run every 900 seconds (15 minutes)
    // $this->createUser($qbd_username);
    // Generate the XML file
    $QWC = new QuickBooks_WebConnector_QWC($name, $descrip, $appurl, $appsupport, $userNameAndPassword['qbd_username'], $fileid, $ownerid, $qbtype, $readonly, $run_every_n_seconds);
    $userNameAndPassword['xml'] = $QWC->generate();

    return $userNameAndPassword;
  }

  public function disconnect() {
    $qbdConnection = $this->getQbdConnection();
    //  || empty($qbdConnection->quickbooks_listid)
    if (is_null($qbdConnection)) {
      throw new Exception('QuickBooks Desktop is not connected');
    }
    $qbdConnection->delete();
  }

  private function getQbdConnection($tagId = null, $checkRequest = true) {
    $companyId = $this->getAdminCompanyDetailId();
    if (empty($tagId) && $checkRequest) {
      $tagId = request('tag_id');
    }

    $ret = QbdConnection::where([
      'company_id' => $companyId,
      'tag_id' => $tagId
    ])->first();
    return $ret;
  }

  private function getAdminCompanyDetailId() {
    return Auth::user()->admin_company_detail_id;
  }

  public function connectionStatus($tagId = null, $checkRequest = true) {
    $qbdConnection = $this->getQbdConnection($tagId, $checkRequest);
    //  || empty($qbdConnection->quickbooks_listid)
    return $this->connectionStatusHelper($qbdConnection);
  }

  private function connectionStatusHelper($qbdConnection) {
    if (is_null($qbdConnection)) {
      return config('constant.integration_status.not_connected');
    }
    $qbdItem = QbdItem::where(['qbd_connection_id' => $qbdConnection->id])->first();
    if (empty($qbdItem) or empty($qbdItem->quickbooks_listid)) {
      return 'Connection initiated, but is still in process of initial set-up.';
    }
    return config('constant.integration_status.connected');
  }

  public function connectionStatusCascade($tagId) {
    if (!empty($tagId)) {
      $ret = $this->connectionStatus($tagId, false);
      if ($ret != config('constant.integration_status.not_connected')) {
        return $ret;
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
   * Get QBD connection status of all tags and parent company.
   * @return array
   */
  public function connectionStatusAll(): array {
    $companyId = $this->getAdminCompanyDetailId();

    $adminCompanyDetail = AdminCompanyDetail::select('id')
      ->where('id', $companyId)
      ->with([
        'tags:id,company_id',
      ])->first();

    $qbdConnections = QbdConnection::where('company_id', $companyId)->get();
    $parentStatus = $this->connectionStatusHelper(
      $qbdConnections->whereNull('tag_id')->first()
    );

    $TagsWithQbdStatus = $adminCompanyDetail->tags->map(
      function ($tag) use ($qbdConnections) {
        $oneTagStatus = $this->connectionStatusHelper(
          $qbdConnections->where('tag_id', $tag->id)->first()
        );
        return [
          "tagId" => $tag->id,
          "status" => $oneTagStatus,
        ];
      }
    );
    return [
      "parentStatus" => $parentStatus,
      "tags" => $TagsWithQbdStatus,
    ];
  }

  // Only used in the two sync to QBD functions.
  private function getQbdConnectionCascade($tagId, $companyId) {
    if (!empty($tagId)) {
      $ret = QbdConnection::where('tag_id', $tagId)->first();
      if (!is_null($ret)) {
        return $ret;
      }
      $invoiceSyncCascade = Tag::find($tagId)->invoice_sync_cascade;
      // When invoice_sync_cascade is true, it means we will use parent company's QB when tag itself is not connected to QB.
      if (!$invoiceSyncCascade) {
        return null;
      }
    }

    return QbdConnection::where('company_id', $companyId)
      ->whereNull('tag_id')->first();
  }

  private function throwResyncException(
    $byUser,
    $whichIsPending,
    $qbdConnectionId,
    $loadId,
    $massInvoiceNumber = null,
    $massInvoiceLoadIds = []
  ) {
    if ($byUser) {
      if ($loadId) {
        QbdResyncInvoiceJob::updateOrCreate(
          ['qbd_connection_id' => $qbdConnectionId, 'load_id' => $loadId],
          []
        );
      } else {
        QbdResyncInvoiceJob::updateOrCreate(
          [
            'qbd_connection_id' => $qbdConnectionId,
            'mass_invoice_number' => $massInvoiceNumber
          ],
          ['mass_invoice_load_ids' => implode(',', $massInvoiceLoadIds)]
        );
      }
    }

    throw new Exception(
      'Waiting for ' . $whichIsPending . $this->tryAgainWarning
    );
  }

  private function syncToQbdByCron($qbdResyncInvoiceJob) {
    $qbdConnection = $qbdResyncInvoiceJob->qbdConnection;
    if (!$qbdConnection) {
      throw new Exception('qbdConnection is no longer valid');
    }

    $loadId = $qbdResyncInvoiceJob->load_id;
    $companyId = $qbdConnection->company_id;

    return $this->syncToQbdHelper($loadId, $companyId, false);
  }

  public function syncToQbd() {
    $loadId = request('load');
    $companyId = $this->getAdminCompanyDetailId();

    $this->syncToQbdHelper($loadId, $companyId, true);
  }

  private function syncToQbdHelper($loadId, $companyId, $byUser) {
    $load = Load::with(['customer', 'loadCharge', 'thirdPartyCarrierCharge'])
      ->where([
        'id' => $loadId,
        'admin_company_detail_id' => $companyId,
      ])
      ->firstOrFail();
    $loadCharges = LoadChargeHelper::generateLoadCharges($load);

    $this->syncToQbdWithLoadAndCharge($load, $loadCharges, $companyId, $byUser);
  }

  // This function is also called in LoadInvoiceService.php.
  public function syncToQbdWithLoadAndCharge(
    $load,
    $loadCharges,
    $companyId,
    $byUser
  ) {
    if (is_null($load)) {
      throw new Exception('load is null');
    }
    if (is_null($loadCharges)) {
      throw new Exception('loadCharges is null');
    }
    if (!$companyId) {
      throw new Exception('companyId is null');
    }

    $tagId = $load->tag_id;
    $qbdConnection = $this->getQbdConnectionCascade($tagId, $companyId);
    if (is_null($qbdConnection)) {
      // return $this->respondBadRequest("Quickbooks not connected!");
      throw new Exception('QuickBooks Desktop not connected');
    }

    // Second argument is username.
    // https://github.com/consolibyte/quickbooks-php/blob/b0834b79fee4509261a932b26b11bf2807cc4b29/QuickBooks/WebConnector/Queue/Singleton.php
    $queue = new QuickBooks_WebConnector_Queue($this->db_conn_def, $qbdConnection->qbd_username);

    // DB::beginTransaction();
    $syncCustomerLater = false;
    $syncStandardTermsLater = false;
    $syncAccountLater = false;

    $customer = $load->customer;
    $qbdCustomer = QbdCustomer::where(['qbd_connection_id' => $qbdConnection->id, 'customer_id' => $customer->id])->first();
    if (is_null($qbdCustomer)) {
      $qbdCustomer = QbdCustomer::create(['qbd_connection_id' => $qbdConnection->id, 'customer_id' => $customer->id]);
      // TODO: this is a temporary solution. Needs to change it later.
      $queue->enqueue(QUICKBOOKS_ADD_CUSTOMER, $qbdCustomer->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_CUSTOMER, $qbdCustomer->id, 3);
      $syncCustomerLater = true;
    } else if (empty($qbdCustomer->quickbooks_listid)) {
      $queue->enqueue(QUICKBOOKS_ADD_CUSTOMER, $qbdCustomer->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_CUSTOMER, $qbdCustomer->id, 3);
      $syncCustomerLater = true;
    }

    $qbdStandardTerms = QbdStandardTerms::where(['qbd_connection_id' => $qbdConnection->id, 'days' => $customer->payment_terms_day])->first();
    if (is_null($qbdStandardTerms)) {
      $qbdStandardTerms = QbdStandardTerms::create(['qbd_connection_id' => $qbdConnection->id, 'name' => $customer->payment_terms_day . " days net", 'days' => $customer->payment_terms_day]);
      $queue->enqueue(QUICKBOOKS_ADD_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $syncStandardTermsLater = true;
    } else if (empty($qbdStandardTerms->quickbooks_listid)) {
      $queue->enqueue(QUICKBOOKS_ADD_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $syncStandardTermsLater = true;
    }

    $syncItemLater = false;
    $qbdAccount = QbdAccount::where(['qbd_connection_id' => $qbdConnection->id])->first();
    if (is_null($qbdAccount)) {
      $qbdAccount = QbdAccount::create(['qbd_connection_id' => $qbdConnection->id, 'name' => 'Services', 'type' => 'Income']);
      $queue->enqueue(QUICKBOOKS_ADD_ACCOUNT, $qbdAccount->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_ACCOUNT, $qbdAccount->id, 3);
      $syncAccountLater = true;
      $syncItemLater = true;
    } else if (empty($qbdAccount->quickbooks_listid)) {
      $queue->enqueue(QUICKBOOKS_ADD_ACCOUNT, $qbdAccount->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_ACCOUNT, $qbdAccount->id, 3);
      $syncAccountLater = true;
      $syncItemLater = true;
    }

    $adminCompanyDetail = $this->getAdminCompanyDetail($companyId);
    if (!$syncItemLater) {
      // If we ever need to change item names here, please also modify Qbd/Item.php!!!
      $itemNames = ['Hauling Fee', 'Fuel Surcharge', 'Accessorial Fee', 'Accessorial Deduction', 'Discount'];
      if ($adminCompanyDetail->use_truck_number_as_accounting_item) {
        $truckNumbers = $load->loadDrivers->pluck('truck.number')->filter()->unique()->toArray();
        sort($truckNumbers);
        if (count($truckNumbers) == 0) {
          throw new Exception('Load ' . $load->load_unique_id . ' has no truck assigned.');
        }
        $oneLoadTrucks = implode(', ', $truckNumbers);
        $itemNames = [$oneLoadTrucks];
      }
      foreach ($itemNames as $oneName) {
        $qbdItem = QbdItem::where(['qbd_connection_id' => $qbdConnection->id, 'name' => $oneName])->first();
        if (is_null($qbdItem)) {
          $qbdItem = QbdItem::create(['qbd_connection_id' => $qbdConnection->id, 'name' => $oneName]);
          $queue->enqueue(QUICKBOOKS_ADD_SERVICEITEM, $qbdItem->id, 2);
          $queue->enqueue(QUICKBOOKS_QUERY_SERVICEITEM, $qbdItem->id, 2);
          $syncItemLater = true;
        } else if (empty($qbdItem->quickbooks_listid)) {
          $queue->enqueue(QUICKBOOKS_ADD_SERVICEITEM, $qbdItem->id, 2);
          $queue->enqueue(QUICKBOOKS_QUERY_SERVICEITEM, $qbdItem->id, 2);
          $syncItemLater = true;
        }
      }
    }

    if ($syncCustomerLater) {
      $this->throwResyncException(
        $byUser,
        'customer',
        $qbdConnection->id,
        $load->id
      );
    }

    if ($syncStandardTermsLater) {
      $this->throwResyncException(
        $byUser,
        'standard terms',
        $qbdConnection->id,
        $load->id
      );
    }

    if ($syncAccountLater) {
      $this->throwResyncException(
        $byUser,
        'account',
        $qbdConnection->id,
        $load->id
      );
    }

    if ($syncItemLater) {
      if ($adminCompanyDetail->use_truck_number_as_accounting_item) {
        $this->throwResyncException(
          $byUser,
          'truck item ' . $oneLoadTrucks,
          $qbdConnection->id,
          $load->id
        );
      } else {
        $this->throwResyncException(
          $byUser,
          'items',
          $qbdConnection->id,
          $load->id
        );
      }
    }

    $invoice = $existingInvoice = QbdInvoice::where(['qbd_connection_id' => $qbdConnection->id, 'load_id' => $load->id])->first();
    if (is_null($invoice)) {
      // 'invoice_number' => $load->load_unique_id, 'reference_number' => $load->refrence_id
      $invoice = QbdInvoice::create(['qbd_connection_id' => $qbdConnection->id, 'load_id' => $load->id]);
    } else if (empty($invoice->quickbooks_txnid)) {
      $existingInvoice = null;
      // Commented out since it won't allow us to sync if sth is wrong.
      // throw new Exception('Invoice was synced previously, but Ezpapel has not yet received previous invoice sync result from QuickBooks Desktop. Please make sure QuickBooks Desktop and web connector are running and try again a few hours later.');
    }

    if ($adminCompanyDetail->use_truck_number_as_accounting_item) {
      $this->addOneItem(
        $invoice->id,
        $oneLoadTrucks,
        'Load #: ' . $load->load_unique_id . ', Ref #: ' . $load->refrence_id,
        $load->total_amount,
        $qbdConnection->id
      );
    } else {
      if (!is_null($loadCharges['hauling_fees'])) {
        $this->addOneItem($invoice->id, 'Hauling Fee', $loadCharges['hauling_fees_type'], $loadCharges['hauling_fees'], $qbdConnection->id);
      } else {
        // $this->removeOneDeletedItem($invoice->id, 'Hauling Fee', $qbdConnection->id);
        $this->addOneItem($invoice->id, 'Hauling Fee', 'No hauling fee', 0, $qbdConnection->id);
      }

      if (!is_null($loadCharges['fuel_surcharge']) && $loadCharges['fuel_surcharge'] != 0) {
        $this->addOneItem($invoice->id, 'Fuel Surcharge', $loadCharges['fuel_surcharge_type'], $loadCharges['fuel_surcharge'], $qbdConnection->id);
      } else {
        // $this->removeOneDeletedItem($invoice->id, 'Fuel Surcharge', $qbdConnection->id);
        $this->addOneItem($invoice->id, 'Fuel Surcharge', 'No fuel surcharge', 0, $qbdConnection->id);
      }

      $accessorialFeesAmount = 0.0;
      $accessorialFeesDesc = '';
      foreach ($loadCharges['accessorial_fees'] as $oneFee) {
        if ($oneFee['accessorial_fee_rate'] != 0) {
          $accessorialFeesAmount += $oneFee['accessorial_fee_rate'];
          if (!empty($accessorialFeesDesc)) {
            $accessorialFeesDesc .= ', ';
          }
          $accessorialFeesDesc .= $oneFee['accessorial_fee_type'];
        }
      }
      if ($accessorialFeesAmount != 0) {
        $this->addOneItem($invoice->id, 'Accessorial Fee', $accessorialFeesDesc, $accessorialFeesAmount, $qbdConnection->id);
      } else {
        $this->addOneItem($invoice->id, 'Accessorial Fee', 'No accessorial fee', 0, $qbdConnection->id);
      }

      $accessorialDeductionAmount = 0.0;
      $accessorialDeductionDesc = '';
      foreach ($loadCharges['accessorial_deduction'] as $oneFee) {
        if ($oneFee['accessorial_deduction_fee_rate'] != 0) {
          $accessorialDeductionAmount += $oneFee['accessorial_deduction_fee_rate'];
          if (!empty($accessorialDeductionDesc)) {
            $accessorialDeductionDesc .= ', ';
          }
          $accessorialDeductionDesc .= $oneFee['accessorial_deduction_fee_type'];
        }
      }

      if ($adminCompanyDetail->show_dispatcher_fee_on_invoice && $load->dispatcher_id) {
        $accessorialCache = (new LoadInvoiceService())->updateLoadWithCommissionableAccessorials($load);
        $totalDispatcherCommisions = DispatcherCommissionHelper::calculateCommissions($load, $accessorialCache)->total_commission ?? 0;
        if ($totalDispatcherCommisions != 0) {
          $accessorialDeductionAmount += -$totalDispatcherCommisions;
          if (!empty($accessorialDeductionDesc)) {
            $accessorialDeductionDesc .= ', ';
          }
          $accessorialDeductionDesc .= 'dispatcher fee';
        }
      }
      if ($adminCompanyDetail->show_factoring_fee_on_invoice) {
        $factoringCompany = null;
        if (is_null($load->customer->no_factoring)) {
          $factoringCompany = $adminCompanyDetail->factoringCompanies->first();
        }
        if ($factoringCompany) {
          $factoringFee = round($load->total_amount * $factoringCompany->factoring_fee_fractional, 2) ?? 0;
          if ($factoringFee != 0) {
            $accessorialDeductionAmount += -$factoringFee;
            if (!empty($accessorialDeductionDesc)) {
              $accessorialDeductionDesc .= ', ';
            }
            $accessorialDeductionDesc .= 'factoring fee';
          }
        }
      }

      if ($accessorialDeductionAmount != 0) {
        $this->addOneItem($invoice->id, 'Accessorial Deduction', $accessorialDeductionDesc, $accessorialDeductionAmount, $qbdConnection->id);
      } else {
        $this->addOneItem($invoice->id, 'Accessorial Deduction', 'No accessorial deduction', 0, $qbdConnection->id);
      }

      if (!is_null($load->discount) && $load->discount != 0) {
        $negativeDiscount = $load->discount;
        if ($negativeDiscount > 0) {
          $negativeDiscount = -$negativeDiscount;
        }
        $this->addOneItem($invoice->id, 'Discount', 'Discount', $negativeDiscount, $qbdConnection->id);
      } else {
        // $this->removeOneDeletedItem($invoice->id, 'Discount', $qbdConnection->id);
        $this->addOneItem($invoice->id, 'Discount', 'No discount', 0, $qbdConnection->id);
      }
    }

    if ($existingInvoice) {
      $queue->enqueue(QUICKBOOKS_MOD_INVOICE, $invoice->id, 1);
    } else {
      $queue->enqueue(QUICKBOOKS_ADD_INVOICE, $invoice->id, 1);
    }
  }

  private function addOneItem($invoiceId, $itemName, $itemDescription, $itemAmount, $qbdConnectionId) {
    $qbdItem = QbdItem::where(['qbd_connection_id' => $qbdConnectionId, 'name' => $itemName])->first();
    if (is_null($qbdItem) or empty($qbdItem->quickbooks_listid)) {
      throw new Exception('Error. Item was not synced.');
    }
    $qbdInvoiceItem = QbdInvoiceItem::where(['qbd_invoice_id' => $invoiceId, 'qbd_item_id' => $qbdItem->id])->first();
    if (is_null($qbdInvoiceItem)) {
      $qbdInvoiceItem = QbdInvoiceItem::create([
        'qbd_invoice_id' => $invoiceId, 'qbd_item_id' => $qbdItem->id,
        'description' => $itemDescription, 'amount' => $itemAmount
      ]);
    } else {
      $qbdInvoiceItem->description = $itemDescription;
      $qbdInvoiceItem->amount = $itemAmount;
      $qbdInvoiceItem->save();
    }
    return $qbdInvoiceItem;
  }

  // Only used by sync to QBD function.
  private function getAdminCompanyDetail($companyId) {
    return AdminCompanyDetail::select(
      'use_truck_number_as_accounting_item',
      'show_dispatcher_fee_on_invoice',
      'show_factoring_fee_on_invoice'
    )->findOrFail($companyId);
  }

  public function syncMassInvoiceToQbd($request) {
    $companyId = getAuthAdminCompanyId();
    $invoiceNumber = $request->invoiceNumber;
    $loadIds = $request->loadIds;

    return $this->syncMassInvoiceToQbdHelper(
      $invoiceNumber,
      $loadIds,
      $companyId,
      true
    );
  }

  private function syncMassInvoiceToQbdByCron($qbdResyncInvoiceJob) {
    $qbdConnection = $qbdResyncInvoiceJob->qbdConnection;
    if (!$qbdConnection) {
      throw new Exception('qbdConnection is no longer valid');
    }

    $companyId = $qbdConnection->company_id;
    $invoiceNumber = $qbdResyncInvoiceJob->mass_invoice_number;
    $loadIds = explode(',', $qbdResyncInvoiceJob->mass_invoice_load_ids);

    return $this->syncMassInvoiceToQbdHelper(
      $invoiceNumber,
      $loadIds,
      $companyId,
      false
    );
  }

  private function syncMassInvoiceToQbdHelper(
    $invoiceNumber,
    $loadIds,
    $companyId,
    $byUser
  ) {
    $loads = Load::where('admin_company_detail_id', $companyId)
      ->whereIn('id', $loadIds)
      ->with([
        'loadDrivers:id,load_id,truck_id',
        'loadDrivers.truck:id,number',
      ])
      ->get();

    if (!$loads || count($loads) == 0) {
      throw new Exception("No loads found for QuickBooks Desktop synchronization.");
    }

    $customerIds = $loads->pluck('customer_id')->toArray();
    if (count(array_unique($customerIds)) !== 1) {
      throw new Exception("Load customers not the same.");
    }

    $tagIds = $loads->pluck('tag_id')->toArray();
    if (count(array_unique($tagIds)) !== 1) {
      throw new Exception("Load tags not the same.");
    }

    $this->syncMassInvoiceToQbdWithLoads(
      $loads,
      $invoiceNumber,
      $companyId,
      $byUser
    );
  }

  private function syncMassInvoiceToQbdWithLoads(
    $loads,
    $invoiceNumber,
    $companyId,
    $byUser
  ) {
    $tagId = $loads->first()->tag_id;
    $qbdConnection = $this->getQbdConnectionCascade($tagId, $companyId);
    if (is_null($qbdConnection)) {
      throw new Exception('QuickBooks Desktop not connected');
    }

    // Second argument is username.
    // https://github.com/consolibyte/quickbooks-php/blob/b0834b79fee4509261a932b26b11bf2807cc4b29/QuickBooks/WebConnector/Queue/Singleton.php
    $queue = new QuickBooks_WebConnector_Queue($this->db_conn_def, $qbdConnection->qbd_username);

    // DB::beginTransaction();
    $syncCustomerLater = false;
    $syncStandardTermsLater = false;
    $syncAccountLater = false;

    $customer = $loads->first()->customer;
    $qbdCustomer = QbdCustomer::where(['qbd_connection_id' => $qbdConnection->id, 'customer_id' => $customer->id])->first();
    if (is_null($qbdCustomer)) {
      $qbdCustomer = QbdCustomer::create(['qbd_connection_id' => $qbdConnection->id, 'customer_id' => $customer->id]);
      // TODO: this is a temporary solution. Needs to change it later.
      $queue->enqueue(QUICKBOOKS_ADD_CUSTOMER, $qbdCustomer->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_CUSTOMER, $qbdCustomer->id, 3);
      $syncCustomerLater = true;
    } else if (empty($qbdCustomer->quickbooks_listid)) {
      $queue->enqueue(QUICKBOOKS_ADD_CUSTOMER, $qbdCustomer->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_CUSTOMER, $qbdCustomer->id, 3);
      $syncCustomerLater = true;
    }

    $qbdStandardTerms = QbdStandardTerms::where(['qbd_connection_id' => $qbdConnection->id, 'days' => $customer->payment_terms_day])->first();
    if (is_null($qbdStandardTerms)) {
      $qbdStandardTerms = QbdStandardTerms::create(['qbd_connection_id' => $qbdConnection->id, 'name' => $customer->payment_terms_day . " days net", 'days' => $customer->payment_terms_day]);
      $queue->enqueue(QUICKBOOKS_ADD_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $syncStandardTermsLater = true;
    } else if (empty($qbdStandardTerms->quickbooks_listid)) {
      $queue->enqueue(QUICKBOOKS_ADD_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_STANDARDTERMS, $qbdStandardTerms->id, 3);
      $syncStandardTermsLater = true;
    }

    $syncItemLater = false;
    $qbdAccount = QbdAccount::where(['qbd_connection_id' => $qbdConnection->id])->first();
    if (is_null($qbdAccount)) {
      $qbdAccount = QbdAccount::create(['qbd_connection_id' => $qbdConnection->id, 'name' => 'Services', 'type' => 'Income']);
      $queue->enqueue(QUICKBOOKS_ADD_ACCOUNT, $qbdAccount->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_ACCOUNT, $qbdAccount->id, 3);
      $syncAccountLater = true;
      $syncItemLater = true;
    } else if (empty($qbdAccount->quickbooks_listid)) {
      $queue->enqueue(QUICKBOOKS_ADD_ACCOUNT, $qbdAccount->id, 3);
      $queue->enqueue(QUICKBOOKS_QUERY_ACCOUNT, $qbdAccount->id, 3);
      $syncAccountLater = true;
      $syncItemLater = true;
    }

    if (!$syncItemLater) {
      $trucksNumbersPerLoad = $loads->map(function ($load) {
        $truckNumbers = $load->loadDrivers->pluck('truck.number')->filter()->unique()->toArray();
        sort($truckNumbers);
        if (count($truckNumbers) == 0) {
          throw new Exception('Load ' . $load->load_unique_id . ' has no truck assigned.');
        }
        return implode(', ', $truckNumbers);
      })->toArray();

      $truckItemsPending = [];
      foreach ($trucksNumbersPerLoad as $oneLoadTrucks) {
        $qbdItem = QbdItem::where(['qbd_connection_id' => $qbdConnection->id, 'name' => $oneLoadTrucks])->first();
        if (is_null($qbdItem)) {
          $qbdItem = QbdItem::create(['qbd_connection_id' => $qbdConnection->id, 'name' => $oneLoadTrucks]);
          $queue->enqueue(QUICKBOOKS_ADD_SERVICEITEM, $qbdItem->id, 2);
          $queue->enqueue(QUICKBOOKS_QUERY_SERVICEITEM, $qbdItem->id, 2);
          $truckItemsPending[] = $oneLoadTrucks;
          $syncItemLater = true;
        } else if (empty($qbdItem->quickbooks_listid)) {
          $queue->enqueue(QUICKBOOKS_ADD_SERVICEITEM, $qbdItem->id, 2);
          $queue->enqueue(QUICKBOOKS_QUERY_SERVICEITEM, $qbdItem->id, 2);
          $truckItemsPending[] = $oneLoadTrucks;
          $syncItemLater = true;
        }
      }
    }

    $sortedLoadIds = $loads->pluck('id')->toArray();
    sort($sortedLoadIds);

    if ($syncCustomerLater) {
      $this->throwResyncException(
        $byUser,
        'customer',
        $qbdConnection->id,
        null,
        $invoiceNumber,
        $sortedLoadIds
      );
    }

    if ($syncStandardTermsLater) {
      $this->throwResyncException(
        $byUser,
        'standard terms',
        $qbdConnection->id,
        null,
        $invoiceNumber,
        $sortedLoadIds
      );
    }

    if ($syncAccountLater) {
      $this->throwResyncException(
        $byUser,
        'account',
        $qbdConnection->id,
        null,
        $invoiceNumber,
        $sortedLoadIds
      );
    }

    $truckItemsPending = array_unique($truckItemsPending);
    if ($syncItemLater) {
      $this->throwResyncException(
        $byUser,
        'truck items [' .
          implode(',', $truckItemsPending) .
          ']',
        $qbdConnection->id,
        null,
        $invoiceNumber,
        $sortedLoadIds
      );
    }

    $invoice = $existingInvoice = QbdInvoice::where(['qbd_connection_id' => $qbdConnection->id, 'mass_invoice_number' => $invoiceNumber])->first();
    if (is_null($invoice)) {
      $invoice = QbdInvoice::create([
        'qbd_connection_id' => $qbdConnection->id,
        'mass_invoice_number' => $invoiceNumber,
        'mass_invoice_load_ids' => implode(',', $sortedLoadIds)
      ]);
    } else {
      if (empty($invoice->quickbooks_txnid)) {
        $existingInvoice = null;
        // Commented out since it won't allow us to sync if sth is wrong.
        // throw new Exception('Invoice was synced previously, but Ezpapel has not yet received previous invoice sync result from QuickBooks Desktop. Please make sure QuickBooks Desktop and web connector are running and try again a few hours later.');
      }
      $invoice->mass_invoice_load_ids = implode(',', $sortedLoadIds);
      $invoice->save();
    }

    $noDuplicateItems = [];
    foreach ($loads as $oneLoad) {
      $truckNumbers = $oneLoad->loadDrivers->pluck('truck.number')->filter()->unique()->toArray();
      sort($truckNumbers);
      $itemName = implode(', ', $truckNumbers);
      if (array_key_exists($itemName, $noDuplicateItems)) {
        $noDuplicateItems[$itemName]['desc'] .= '; Load #: ' . $oneLoad->load_unique_id . ', Ref #: ' . $oneLoad->refrence_id;
        $noDuplicateItems[$itemName]['amount'] += $oneLoad->total_amount;
      } else {
        $noDuplicateItems[$itemName] = [
          'desc' => 'Load #: ' . $oneLoad->load_unique_id . ', Ref #: ' . $oneLoad->refrence_id,
          'amount' => $oneLoad->total_amount,
        ];
      }
      // current db design does not support multiple same items.
    }

    $latestQbdInvoiceItemIds = [];
    foreach ($noDuplicateItems as $key => $value) {
      $qbdInvoiceItem = $this->addOneItem(
        $invoice->id,
        $key,
        $value['desc'],
        $value['amount'],
        $qbdConnection->id
      );
      $latestQbdInvoiceItemIds[] = $qbdInvoiceItem->id;
    }

    QbdInvoiceItem::where(['qbd_invoice_id' => $invoice->id])
      ->whereNotIn('id', $latestQbdInvoiceItemIds)->delete();

    QbdInvoiceLoad::where('qbd_invoice_id', $invoice->id)->whereNotIn('load_id', $sortedLoadIds)->delete();
    $storedQbdInvoiceLoads = QbdInvoiceLoad::select('load_id')
      ->where('qbd_invoice_id', $invoice->id)->get();
    $storedQbdInvoiceLoadIds =  $storedQbdInvoiceLoads->pluck('load_id')
      ->toArray();
    $newLoadIds = array_diff($sortedLoadIds, $storedQbdInvoiceLoadIds);
    foreach ($newLoadIds as $oneNewLoadId) {
      QbdInvoiceLoad::create([
        'qbd_invoice_id' => $invoice->id,
        'load_id' => $oneNewLoadId,
      ]);
    }

    if ($existingInvoice) {
      $queue->enqueue(QUICKBOOKS_MOD_INVOICE, $invoice->id, 1);
    } else {
      $queue->enqueue(QUICKBOOKS_ADD_INVOICE, $invoice->id, 1);
    }
  }

  private function cronResyncOneInvoice($oneJob) {
    try {
      if ($oneJob->load_id) {
        $this->syncToQbdByCron($oneJob);
      } else {
        $this->syncMassInvoiceToQbdByCron($oneJob);
      }
      $oneJob->update([
        'result' => 's',
        'last_tried_at' => Carbon::now(),
      ]);
      $oneJob->delete();
    } catch (Exception $e) {
      $oneJob->update([
        'result' => $e->getMessage(),
        'last_tried_at' => Carbon::now(),
      ]);
    }
  }

  /**
   * Daily resync invoices.
   * @return void
   */
  public function cronResyncInvoices() {
    try {
      $retryLimit = Carbon::now()->subDays(10);
      QbdResyncInvoiceJob::get()->map(function ($oneJob) use ($retryLimit) {
        /*$qbdInvoice = QbdInvoice::where(
          'qbd_connection_id',
          $oneJob->qbd_connection_id
        )
          ->where('load_id', $oneJob->load_id)
          ->where('mass_invoice_number', $oneJob->mass_invoice_number)
          ->first();
        if ($qbdInvoice->quickbooks_txnid) {
          $oneJob->delete();
        } else {*/
        // One particular case is that a load was synced successfully, but users want to make some changes that involves new items/customers to be asynced first.
        if ($oneJob->created_at <= $retryLimit) {
          $oneJob->delete();
        } else {
          $this->cronResyncOneInvoice($oneJob);
        }
        //}
      });
    } catch (Exception $e) {
      Log::channel('slack')->critical($e->getMessage());
    }
  }
}
