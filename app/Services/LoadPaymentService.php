<?php

namespace App\Services;

use App\Mail\LoadPayment\PaymentRequested;
use App\Models\AdminCompanyDetail;
use App\Models\FactoringCompany;
use App\Models\Load;
use App\Models\loadImage;
use App\Services\Logs\LoadLogService;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use App\Services\LoadService;

class LoadPaymentService {
  private $loadStatuses;

  public function __construct() {
    $this->loadStatuses = config('constant.status.load');
  }

  public function loadPaymentRequest() {
    $S3Path = config('constant.s3');
    $adminCompanyDetail = AdminCompanyDetail::findOrFail(auth()->user()->admin_company_detail_id);
    $load = $this->getInvoiceCreatedLoad();
    if ($load->loadboard_integration == 2) {
      $url = 'loads/' . $load->id . '/edi/210';
      try {
        callNodeJsApi('POST', $url);
      } catch (Exception $e) {
        throw new Exception('Sending 210 EDI failed. Do you have any accessorial fees other than detention and TONU?');
      }
    }
    $customer = $load->customer;
    $emailSubject = request('emailSubject') ?? null;
    $invoice = "{$S3Path['load_invoice']}{$load->invoice_file_name}";

    // "{$S3Path['load_file']}{$load->invoice_file_name}"
    // In getLoad(), we only query driver and user uploaded PODs, lumper, and scale.
    // So here pods actually contains both POD, lumper, and scale.
    $pods = $load->adminLoadImages->map(function ($loadImage) use ($S3Path) {
      return [
        'image_name' => $loadImage->image_name,
        'image_alias' => $loadImage->image_alias,
        's3_path' => "{$S3Path['load_file']}{$loadImage->image_name}",
        'order' => array_search($loadImage->image_alias, config('constant.load.image.orderForRequestPayment')),
      ];
    });

    $rateConfirmations = $load->rateConfirmations->map(function ($rateConfirmation) use ($S3Path) {
      return [
        'file_name' => $rateConfirmation->file_name,
        'file_name_alias' => $rateConfirmation->file_name_alias,
        's3_path' => "{$S3Path['load_file']}{$rateConfirmation->file_name}"
      ];
    });

    $fileAttachments = collect([
      'invoice' => $invoice,
      'proof_of_deliveries' => $pods->sortBy('order'),
      'rate_confirmations' => $rateConfirmations
    ]);

    // TODO in future: change this after we allow multiple factoring companies.
    $factoringCompany = null;
    if ($load->payment_option !== 1 && !$customer->no_factoring) {
      $factoringCompany = FactoringCompany::select('id', 'integration_partner', 'integration_settings', 'request_payment_merge_pdfs')
        ->where('company_id', $adminCompanyDetail->id)
        ->first();
    }

    $pdfs = $this->getPdfsForMerge($fileAttachments);
    $mergedPdfFilename = null;
    if (!empty($factoringCompany) && in_array($factoringCompany->integration_partner, [1, 2])) { // Temp code, bad, need someone to fix it.
      // Invoice is not included here, but actually queried in the callee.
      $mergedPdfFilename = $this->mergeLoadDocsAndPushToFtpServer(
        $load,
        $adminCompanyDetail->id,
        $factoringCompany,
        $pdfs,
      );
    }

    // Upload Loads To TAFS
    $integrationPartners = config('constant.factoringCompany.integrationPartners');
    $tafsPartnerId = array_search('tafs', $integrationPartners);
    if (!empty($factoringCompany) && $factoringCompany->integration_partner === $tafsPartnerId) {
      $url = 'loads/' . $load->id . '/factoring/tafs';
      try {
        callNodeJsApi('POST', $url);
      } catch (Exception $e) {
        Log::channel('slack')->emergency('TAFS API call failed ' . '-' . $e->getMessage());
        throw new Exception('TAFS API call failed');
      }
    }

    // Log when change load status to payment request
    (new LoadLogService())->createLoadLog(
      $load->id,
      array_search('requestPayment', config('constant.logs.load'))
    );
    // If a user previously sent the invoice, then makes some modifications and re-send the invoice, the database update is not needed.
    if (
      empty($mergedPdfFilename) && !empty($factoringCompany) &&
      $factoringCompany->request_payment_merge_pdfs
    ) {
      $mergedPdfFilename = 'mffc-' . generateUniqueFileName($adminCompanyDetail->id, 'pdf', $load->id);
      $body = [
        'sourcePdfs' => $pdfs,
        'mergedPdf' => [
          'directory' => config('constant.s3.load_file'),
          'storageFilename' => $mergedPdfFilename,
          'originalFilename' => $load->load_unique_id . '.pdf',
        ],
      ];

      try {
        (new LoadInvoiceService())->performMergeAndUpload($body);
      } catch (Exception $e) {
        $mergedPdfFilename = null;
        Log::error("PDF merger is failed for company " .
          $adminCompanyDetail->business_name . '-' . $e->getMessage());
      }
    }

    Mail::queue(new PaymentRequested(
      $adminCompanyDetail,
      $customer,
      $load,
      $fileAttachments,
      false,
      $emailSubject,
      $mergedPdfFilename
    ));

    if ($load->status != $this->loadStatuses['invoice_sent']) {
      DB::transaction(function () use ($load) {
        $load->update([
          'status' => $this->loadStatuses['invoice_sent'],
        ]);
      });
    }
  }

  private function getPdfsForMerge($fileAttachments) {
    $pdfs = [];
    if ($fileAttachments->has('invoice')) {
      $pdfs[] = [
        'url' => getImage($fileAttachments['invoice'], '') ?? "",
      ];
    }
    if ($fileAttachments->has('rate_confirmations')) {
      foreach ($fileAttachments['rate_confirmations'] as $rateConfirmation) {
        $pdfs[] = [
          'url' => getImage($rateConfirmation['file_name'], config('constant.s3.load_file')) ?? "",
        ];
      }
    }
    if ($fileAttachments->has('proof_of_deliveries')) {
      foreach ($fileAttachments['proof_of_deliveries'] as $pod) {
        $pdfs[] = [
          'url' => getImage($pod['image_name'], config('constant.s3.load_file')) ?? "",
        ];
      }
    }
    return $pdfs;
  }

  /**
   * @param Load $load
   * @param $companyId
   * @param $factoringCompany
   * @param $pdfs
   * @return string|null
   * @throws GuzzleException
   */
  private function mergeLoadDocsAndPushToFtpServer(
    Load $load,
    $companyId,
    $factoringCompany,
    $pdfs
  ) {
    $fileName = null;
    $integrationPartners = config('constant.factoringCompany.integrationPartners');
    $rtsIntegrationPartnerId = array_search('rts', $integrationPartners);
    $wexIntegrationPartnerId = array_search('wex', $integrationPartners);

    if ($factoringCompany->integration_partner === $rtsIntegrationPartnerId) {
      $body = $this->makeBodyForExternalMergeAndUpload(
        $companyId,
        $factoringCompany,
        $load,
        $pdfs
      );

      $fileName =  $this->callExternalMergeAndUpload($body, config('constant.mergeAndUploadUrl'));
    } else if ($factoringCompany->integration_partner === $wexIntegrationPartnerId) {
      if (empty($load->company_internal_reference)) {
        throw new Exception("Please input the Wex-provided reference number into the internal reference field. This is required by Wex.");
      }
      $body = $this->makeBodyForWexFactoringApi(
        $load,
        $pdfs
      );
      $fileName =  $this->callExternalMergeAndUpload($body, config('constant.wexFactoringAPI'));
    }

    return $fileName;
  }

  /**
   * @param $companyId
   * @param $factoringCompany
   * @param $load
   * @param $pdfs
   * @return array|array[]
   */
  private function makeBodyForExternalMergeAndUpload(
    $companyId,
    $factoringCompany,
    $load,
    $pdfs
  ): array {

    $invoiceGeneratedAtInCompanyTimezone = $this->convertLoadInvoiceGeneratedAtToCompanyTimezone($load);
    $invoiceGeneratedAtInCompanyTimezone = $invoiceGeneratedAtInCompanyTimezone->format(
      config('constant.date_format')
    );

    $body = [
      'load' => [
        'pdfs' => $pdfs,
        'id' => $load->id,
        'companyId' => $companyId,
        'factoringCompanyId' => $factoringCompany->id,
        'loadNumber' => $load->load_unique_id,
        'customerName' => $load->customer->company_name ?? '',
        'invoiceDate' => $invoiceGeneratedAtInCompanyTimezone,
        'loadAmount' => $load->total_amount,
      ]
    ];

    $body['load']['invoiceNumber'] = (string) $load->load_unique_id;

    if (!empty($factoringCompany->integration_settings)) {
      $settings = json_decode($factoringCompany->integration_settings, true);
      if (!empty($settings['useLoadReferenceForInvoiceNumber'])) {
        if (!isNullOrEmptyStr($load->refrence_id)) {
          $body['load']['invoiceNumber'] = $load->refrence_id;
        } else {
          throw new Exception("Load reference id is empty.");
        }
      }
    }

    return $body;
  }

  /**
   * @param $load
   * @param $pdfs
   * @return array|array[]
   */
  private function makeBodyForWexFactoringApi(
    $load,
    $pdfs
  ): array {
    $invoiceGeneratedAtInCompanyTimezone = $this->convertLoadInvoiceGeneratedAtToCompanyTimezone($load);
    $invoiceGeneratedAtInCompanyTimezone = $invoiceGeneratedAtInCompanyTimezone->format(
      config('constant.date_time_format')
    );
    $body = [
      'load' => [
        'id' => $load->id,
        'clientReferenceNumber' => $load->company_internal_reference ?? '',
        'invoiceAmount' => round($load->total_amount, 2),
        'customerName' => $load->customer->company_name ?? '',
        'invoiceDate' => $invoiceGeneratedAtInCompanyTimezone,
        'purchaseOrderNumber' => $load->refrence_id ?? '',
        'pdfs' => $pdfs,
      ]
    ];
    $body['load']['invoiceNumber'] = (string) $load->load_unique_id;
    if (!empty($load->tag) && $load->tag->use_tag_for_billing == true) {
      $body['load']['tagId'] = $load->tag_id;
    }
    return $body;
  }

  /**
   * @param $body
   * @param $apiUrl
   * @return string
   * @throws \GuzzleHttp\Exception\GuzzleException
   */
  private function callExternalMergeAndUpload($body, $apiUrl): string {
    $client = new Client();

    if (config('app.env') === 'production') {
      $nodeUrl = config('constant.externalSystems.nodeProject.prodUrl');
    } else {
      $nodeUrl = config('constant.externalSystems.nodeProject.devUrl');
    }

    $mergeAndUploadUrl = $nodeUrl . $apiUrl;
    try {
      $response = $client->request('POST', $mergeAndUploadUrl, [
        'headers' => [
          'Content-Type' => 'application/json',
          'Authorization' => 'Bearer ' . request()->bearerToken(),
        ],
        'json' => $body
      ]);
      $response = json_decode($response->getBody()->getContents(), true);

      if (isset($response['payload']['filename'])) {
        return $response['payload']['filename'];
      }

      throw new Exception("Merge PDFs and upload to FTP server failed.");
    } catch (Exception $e) {
      Log::error($e->getMessage());
      Log::channel('slack')->emergency($e->getMessage());
      throw new Exception("Merge PDFs and upload to FTP server failed.");
    }
  }

  /**
   * @param Load $load
   * @return Carbon
   */
  private function convertLoadInvoiceGeneratedAtToCompanyTimezone(Load $load): Carbon {
    $companyTimezone = getCompanyTimezone($load->admin_company_detail_id);
    return convertUtcTimestampToLocalCarbonObject($load->invoice_generated_at, $companyTimezone);
  }

  public function loadPaymentReceived($request) {
    return tap($this->getPaymentRequestedLoad(), function ($load) use ($request) {
      $updateObj = ['status' => $this->loadStatuses['invoice_paid']];
      if ($request->has('paidAmount')) {
        $updateObj['paid_amount'] = $request->paidAmount;
      }
      $load->update($updateObj);
      (new LoadService())->melioPaymentStatusUpdate(
        $load->id,
        $load->admin_company_detail_id,
        config('constant.melioPayment.status.markAsPaid')
      );
      // Log when change load status to paid status
      (new LoadLogService())->createLoadLog(
        $load->id,
        array_search('loadPaid', config('constant.logs.load'))
      );
    });
  }

  private function getPaymentRequestedLoad() {
    $load = $this->getLoad(
      $this->loadStatuses['delivered'],
      $this->loadStatuses['invoice_created'],
      $this->loadStatuses['invoice_sent']
    );
    if (empty($load)) {
      throw new Exception('Load has to be in delivered, invoice generated, or payment requested status.');
    }
    return $load;
  }

  private function getInvoiceCreatedLoad() {
    $load = $this->getLoad(
      $this->loadStatuses['invoice_created'],
      $this->loadStatuses['invoice_sent']
    );
    if (empty($load)) {
      throw new Exception('Load has to be in invoice generated or payment requested status.');
    }
    return $load;
  }

  // $orStatus is to allow users to modify an already sent invoice and re-send it.
  private function getLoad($status, $orStatus = null, $orStatus2 = null) {
    $id = request('load');
    $adminCompanyDetail = auth()->user()->admin_company_detail_id;

    return Load::with([
      'customer',
      'rateConfirmations',
      'tag',
      'adminLoadImages' => function ($query) {
        $loadImagePurpose = config('constant.load.image.purpose');

        return $query->whereIn('purpose', [
          // Justin said do NOT put BOL in the reqeust payment email.
          // $loadImagePurpose['bol'],
          $loadImagePurpose['lumper'],
          $loadImagePurpose['load_pod'],
          $loadImagePurpose['load_pod_admin'],
          $loadImagePurpose['scale'],
        ]);
      }
    ])
      /*->where([
                'admin_company_detail_id' => $adminCompanyDetail,
                'status' => $status,
            ])*/
      ->where('admin_company_detail_id', $adminCompanyDetail)
      ->where(function ($query) use ($status, $orStatus, $orStatus2) {
        $query->where('status', $status);
        if (!is_null($orStatus)) {
          $query->orWhere('status', $orStatus);
        }
        if (!is_null($orStatus2)) {
          $query->orWhere('status', $orStatus2);
        }
      })
      ->find($id);
  }

  /**
   * Request for mass invoice payment.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function requestMassInvoicePayment($request) {
    $companyId = getAuthAdminCompanyId();
    $adminCompanyDetail = AdminCompanyDetail::findOrFail($companyId);

    $loadIds = $request->loadIds;

    $loads = Load::where('admin_company_detail_id', $companyId)
      ->whereIn('id', $loadIds)->get();

    if (!$loads || count($loads) == 0) {
      throw new Exception("No loads found for payment request.");
    }

    $customerIds = $loads->pluck('customer_id')->toArray();
    if (count(array_unique($customerIds)) !== 1) {
      throw new Exception("Load customers not the same.");
    }

    $tagIds = $loads->pluck('tag_id')->toArray();
    if (count(array_unique($tagIds)) !== 1) {
      throw new Exception("Load tags not the same.");
    }

    $statuses = array_diff(
      $loads->pluck('status')->toArray(),
      [
        $this->loadStatuses['invoice_created'],
        $this->loadStatuses['invoice_sent']
      ]
    );

    if (count($statuses) > 0) {
      throw new Exception("Loads have to be in invoice generated or payment requested status.");
    }

    $fileAttachments = collect();

    $invoicesName = $loads->pluck('invoice_file_name')->toArray();

    $customer = $loads->first()->customer;
    // Check loads invoices
    if ($customer->mass_invoice_use_individual_invoices) {
      $emptyInvoiceLoadNumbers = $loads->whereNull('invoice_file_name')->pluck('load_unique_id')->toArray();
      if (count($emptyInvoiceLoadNumbers)) {
        throw new Exception("This customer requires each load has its own invoice. Please generate invoice for " . implode(', ', $emptyInvoiceLoadNumbers) . ".");
      }
      if ($customer->merge_invoice) {
        $filename = 'mginv'; // mg for merge
        $notMergedInvoiceLoadNumbers = $loads->filter(function ($item) use ($filename) {
          if (!preg_match("/$filename/", $item['invoice_file_name'])) {
            return $item;
          }
        })->pluck('load_unique_id')->toArray();
        if (count($notMergedInvoiceLoadNumbers)) {
          throw new Exception("This customer requires invoices, rate con, and POD merged into one invoice file. Please regenerate invoice for " . implode(', ', $notMergedInvoiceLoadNumbers) . ".");
        }
      }
    } else {
      if (count(array_unique($invoicesName)) !== 1 || !str_starts_with($invoicesName[0], 'mass-invoice')) {
        // Check invoices name are same and starts with mass-invoice.
        throw new Exception("Selected loads do not have the same invoice.");
      }
      $S3Path = config('constant.s3');
      $invoice = "{$S3Path['load_invoice']}{$loads->first()->invoice_file_name}";
      $fileAttachments = collect([
        'invoice' => $invoice
      ]);
    }

    DB::transaction(function () use ($adminCompanyDetail, $customer, $loads, $fileAttachments) {
      Load::whereIn('id', $loads->pluck('id')->toArray())
        ->update([
          'status' => $this->loadStatuses['invoice_sent']
        ]);
      Mail::queue(new PaymentRequested($adminCompanyDetail, $customer, $loads, $fileAttachments, true));
    });
    // TODO: add log for each load
  }


  public function multipleLoadsPaymentReceived($request) {
    $companyId = getAuthAdminCompanyId();
    $loads = Load::select('id', 'status')
      ->where('admin_company_detail_id', $companyId)
      ->whereIn('id', $request->loadIds)
      ->get();

    $statuses = array_diff(
      $loads->pluck('status')->toArray(),
      [
        $this->loadStatuses['invoice_sent']
      ]
    );

    if (count($statuses) > 0) {
      throw new Exception("Loads have to be in payment requested status.");
    }
    // TODO: add log for each load
    $loadsStatusUpdate = Load::where('admin_company_detail_id', $companyId)
      ->whereIn('id', $request->loadIds)
      ->update(['status' => $this->loadStatuses['invoice_paid']]);

    // Melio Payment Update
    (new LoadService())->melioPaymentStatusUpdate(
      $request->loadIds,
      $companyId,
      config('constant.melioPayment.status.markAsPaid')
    );
    return $loadsStatusUpdate;
  }

  /**
   * Delete merged PDF storage files older than last one hour
   * @return void
   */
  public function cronToDeleteMergedPdfFromStorageDirectory() {
    try {
      $files = Storage::disk("public")->allFiles("mergePdf");
      foreach ($files as $file) {
        $time = Storage::disk('public')->lastModified($file);
        $fileModifiedDateTime = Carbon::parse($time);
        // error_log($fileModifiedDateTime);
        if (Carbon::now()->gt($fileModifiedDateTime->addHours(1))) {
          Storage::disk("public")->delete($file);
        }
        //storage symbolic link files not required to delete and still providing here for you reference.
        /*if (File::exists(public_path('storage/' . $file))) {
          File::delete(public_path('storage/' . $file));
        }*/
      }
    } catch (Exception $exception) {
      Log::channel('slack')->critical($exception->getMessage());
      Log::error($exception);
    }
  }
}
