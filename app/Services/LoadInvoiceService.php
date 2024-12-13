<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\Load;
use App\Models\MelioAccount;
use App\Services\Logs\LoadLogService;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class LoadInvoiceService {
  private $quickbooksAuthService;
  private $qbdService;

  public function __construct() {
    $this->quickbooksAuthService = new QuickbooksAuthService();
    $this->qbdService = new QbdService();
  }

  /**
   * @throws GuzzleException
   */
  public function generateInvoice($request) {
    $load = $this->getLoad();
    $skipFactoring = false;
    if ($request->has('skipFactoring')) {
      if ($request->skipFactoring) {
        $skipFactoring = true;
      }
    } else {
      if ($load->payment_option == 1) {
        $skipFactoring = true;
      }
    }
    $admin = Auth::user();
    $companyId = $admin->admin_company_detail_id;
    $adminCompanyDetail = AdminCompanyDetail::findOrFail(
      $companyId
    );
    $factoringCompany = null;
    if (!$skipFactoring && is_null($load->customer->no_factoring)) {
      $factoringCompany = $adminCompanyDetail->factoringCompanies->first();
    }
    $tag = $load->tag;
    $canUseMelio = true; // Only bill by parent and no factoring can use Melio.

    if (!empty($tag) && $tag->use_tag_for_billing) {
      $businessEmail = $tag->email;
      $businessName = $tag->business_name;
      $address = $tag->address;
      $city = $tag->city;
      $state = $tag->state;
      $zipCode = $tag->zipcode;
      $phoneNumber = $tag->phone_number;
      $companyImage = $tag->logo_image_storage_file_name;
      $canUseMelio = false;
    } else {
      $businessEmail = $adminCompanyDetail->email;
      $businessName = $adminCompanyDetail->business_name;
      $address = $adminCompanyDetail->address;
      $city = $adminCompanyDetail->city;
      $state = $adminCompanyDetail->state;
      $zipCode = $adminCompanyDetail->zipcode;
      $phoneNumber = $adminCompanyDetail->phone_number;
      $companyImage = $adminCompanyDetail->company_image;
    }

    if (!empty($factoringCompany)) {
      // PDF blade file uses this to detect if to show factoring.
      $carrierName = $businessName;

      $integrationPartner = $factoringCompany->integration_partner;
      $businessEmail = $factoringCompany->billing_email;
      $businessName = $factoringCompany->name;
      $address = $factoringCompany->address;
      $city = $factoringCompany->city;
      $state = $factoringCompany->state;
      $zipCode = $factoringCompany->zip_code;
      $phoneNumber = $factoringCompany->phone_number;
      $canUseMelio = false;
    }

    $totalAmount = $load->total_amount;
    $subTotal = $load->sub_total;

    // if show dispatcher fee on invoice is enabled
    if ($adminCompanyDetail->show_dispatcher_fee_on_invoice && $load->dispatcher_id) {
      $accessorialCache = $this->updateLoadWithCommissionableAccessorials($load);
      $totalDispatcherCommisions = DispatcherCommissionHelper
        ::calculateCommissions($load, $accessorialCache)->total_commission ?? 0;
      $totalAmount = $totalAmount - $totalDispatcherCommisions;
      $subTotal = $subTotal - $totalDispatcherCommisions;
    }

    // if show factoring fee on invoice is enabled
    if (
      $adminCompanyDetail->show_factoring_fee_on_invoice &&
      $factoringCompany
    ) {
      $factoringFee = round($load->total_amount *
        $factoringCompany->factoring_fee_fractional, 2) ?? 0;
      $totalAmount = $totalAmount - $factoringFee;
      $subTotal = $subTotal - $factoringFee;
    }

    $loadCharges = LoadChargeHelper::generateLoadCharges($load);

    $S3Folder = config('constant.s3.load_invoice');
    /*
    if (!is_null($load->invoice_file_name) && $load->invoice_file_name != '') {
      $pdfFilename = $load->invoice_file_name;
    } else {
    */
    $ids = $companyId . '-' . $load->id;
    $pdfFilename = 'invoice-' . generateUniqueFileName($ids, 'pdf');
    //}
    $InvoiceFilePath = "{$S3Folder}{$pdfFilename}";

    $remitToCompany = null;
    $iccRegulations = null;
    $driverNames = null;
    $truckNumbers = null;
    $trailerNumbers = null;
    $customization = config('user_customization')[$adminCompanyDetail->id] ?? null;
    if (!empty($customization)) {
      $remitToCompany = $customization['remitToCompany'] ?? null;
      $iccRegulations = $customization['iccRegulations'] ?? null;
    }
    $hideDriverTruckTrailer = in_array(
      $companyId,
      config('user_customization.hideDriverTruckTrailerInLoadInvoicePdf')
    );
    if ($load->loadDrivers->isNotEmpty() && !$hideDriverTruckTrailer) {
      $truckNumberArr = [];
      $trailerNumberArr = [];
      $loadDriverUsers = [];
      foreach ($load->loadDrivers as $driver) {
        if ($driver->truck && $driver->truck->number) {
          $truckNumberArr[] = $driver->truck->number;
        }
        if ($driver->trailer && $driver->trailer->number) {
          $trailerNumberArr[] = $driver->trailer->number;
        }
        if ($driver->loadDriverUsers) {
          $loadDriverUsers = array_merge(
            $loadDriverUsers,
            $driver->loadDriverUsers->pluck('user')->flatten()->map(function ($item) {
              return userFullName($item);
            })->toArray()
          );
        }
      }
      $truckNumbers = implode(', ', array_unique($truckNumberArr));
      $trailerNumbers = implode(', ', array_unique($trailerNumberArr));
      $hideDriverInLoadInvoicePdf = in_array(
        $companyId,
        config('user_customization.hideDriverInLoadInvoicePdf')
      );
      if (!$hideDriverInLoadInvoicePdf) {
        $driverNames = implode(', ', array_unique($loadDriverUsers));
      }
    }
    $companyImageUrl = getImage($companyImage, config('constant.s3.admin_company_image')) ?? "";

    $melioPayment = null;
    if ($canUseMelio) {
      try {
        $melioAccount = MelioAccount::where('company_id', $companyId)->whereNotNull('onboarded_at')->first();
        if ($melioAccount) {
          $result = callNodeJsApi('POST', 'melio/paymentRequests/loads/' . $load->id, []);
          if ($result['result'] && $result['payload'] && $result['payload']['url']) {
            $melioPayment = [
              'url' => $result['payload']['url'],
              'qrCode' => $result['payload']['qrCode']
            ];
          }
        }
      } catch (Exception $e) {
        Log::channel('slack')->emergency('Failed to call Melio API: ' . $e->getMessage());
      }
    }

    foreach ($load->loadShippers as $shipper) {
      $totalQty = 0;
      $totalWeight = 0;
      $totalQty += !empty($shipper['freight_qty']) ? (float) ($shipper['freight_qty']) : 0;
      $totalWeight += !empty($shipper['freight_weight']) ? (float) ($shipper['freight_weight']) : 0;

      if (
        !empty($shipper->additional_freight_details)
        && !empty(json_decode($shipper->additional_freight_details)->a)
      ) {
        foreach (json_decode($shipper->additional_freight_details)->a as $detail) {
          $totalQty += !empty($detail->q) ? (float) ($detail->q) : 0;
          $totalWeight += !empty($detail->e) ? (float) ($detail->e) : 0;
        }
      }

      $shipper->i_totalQty = $totalQty;
      $shipper->i_totalWeight = $totalWeight;
    }

    $laneCode = $load->lane_code;
    $pdf = PDF::loadView('pdf.load-invoice', [
      'dollarSign' => '$',
      'admin' => $admin,
      'invoiceDate' => Carbon::now('America/Los_Angeles')->toDateString(),
      'loadUniqueId' => $load->load_unique_id,
      'loadReferenceId' => $load->refrence_id,
      'customer' => $load->customer,
      'charges' => $this->getLoadCharges($load, $loadCharges),
      'subTotal' => $subTotal,
      'discount' => $load->discount,
      'totalAmount' => $totalAmount,
      'shippers' => $load->loadShippers,
      'receivers' => $load->loadReceivers,
      'business_name' => $businessName,
      'address' => $address,
      'city' => $city,
      'state' => $state,
      'phone_number' => $phoneNumber,
      'zipcode' => $zipCode,
      'business_email' => $businessEmail,
      'carrier_name' => $carrierName ?? '',
      'showDispatcherFeeOnInvoice' => $adminCompanyDetail
        ->show_dispatcher_fee_on_invoice,
      'dispactherCommissions' => $totalDispatcherCommisions ?? 0,
      'showFactoringFeeOnInvoice' => $adminCompanyDetail
        ->show_factoring_fee_on_invoice,
      'factoringFee' => $factoringFee ?? 0,
      'remitToCompany' => $remitToCompany,
      'iccRegulations' => $iccRegulations,
      'driver' => $driverNames,
      'truckNumber' => $truckNumbers,
      'trailerNumber' => $trailerNumbers,
      'companyImageUrl' => $companyImageUrl,
      'integrationPartner' => $integrationPartner ?? null,
      'laneCode' => $laneCode,
      'melioPayment' => $melioPayment,
    ]);

    Storage::disk('s3')->put($InvoiceFilePath, $pdf->output());
    $originalFilename = $load->load_unique_id . '.pdf';

    if ((!$factoringCompany || $load->customer->no_factoring) && $load->customer->merge_invoice) {
      $rateConfirmations = $this->mapRateConfirmations($load->rateConfirmations);
      $pods = $this->mapPods($load->adminLoadImages);
      $pdfFilename = $this->mergeAndUploadPdf($pdfFilename, $rateConfirmations, $pods, $originalFilename);
    }

    $ret = tap($load, function ($load) use ($pdfFilename, $originalFilename, $skipFactoring) {
      $currentTime = Carbon::now();
      $updateObj = [
        'status' => config('constant.status.load.invoice_created'),
        'invoice_file_name' => $pdfFilename,
        'invoice_original_file_name' => $originalFilename,
        'invoice_generated_at' => $currentTime,
      ];
      if ($skipFactoring) {
        $updateObj['payment_option'] = array_search('skipFactoring', config('constant.load.paymentOption'));
      } else {
        $updateObj['payment_option'] = null; // In the future, if we need to support other options, we may need to change here.
      }
      $load->update($updateObj);

      // TODO(zbu): on another hand, I think we shall move this to request payment.
      if (!is_null($load->synced_load_id) && is_null($load->third_party_carrier_as_customer_id)) {
        $syncLoad = Load::where('id', $load->synced_load_id)
          ->where('synced_load_id', $load->id)
          ->whereNotNull('third_party_carrier_as_customer_id')
          ->select('id', 'customer_id')
          ->first();
        if ($syncLoad) {
          // TODO(zbu): We need to think more about the invoice columns.
          $updateArray = [
            'third_party_carrier_invoice_original_file_name' => $load->load_unique_id . '-3rd Party Carrier Invoice.pdf',
            'third_party_carrier_invoice_storage_file_name' => $pdfFilename,
          ];
          if (empty($syncLoad->customer_id)) {
            $updateArray['status'] = config('constant.status.load.invoice_sent');
            $updateArray['invoice_file_name'] = $pdfFilename;
            $updateArray['invoice_original_file_name'] = null;
            $updateArray['invoice_generated_at'] = $currentTime;
          }
          $syncLoad->update($updateArray);
        }
      }
    });
    (new LoadLogService())->createLoadLog(
      $load->id,
      array_search('generateInvoice', config('constant.logs.load'))
    );

    if (
      $this->quickbooksAuthService->connectionStatusCascade($load->tag_id) ==
      'Connected'
    ) {
      $this->quickbooksAuthService->syncToQuickbooksWithLoadAndCharge(
        $load,
        $loadCharges
      );
    }
    if (
      $this->qbdService->connectionStatusCascade($load->tag_id) !=
      'Not connected'
    ) {
      $this->qbdService->syncToQbdWithLoadAndCharge(
        $load,
        $loadCharges,
        $companyId,
        true
      );
    }

    return $ret;
  }

  /**
   * Get Load Charges
   * @param $load
   * @param $loadCharges
   * @return array
   */
  private function getLoadCharges($load, $loadCharges) {
    $charges = [];
    if ($load->loadCharge && $load->loadCharge->hauling_fees_type == 'qty_var_rate') {
      foreach ($load->loadShippers as $shipper) {
        $charges[] = [
          'name' => 'Hauling Fee',
          'description' => $shipper['freight_description'] ?? '',
          'qty' => !empty($shipper['freight_qty']) ? removeTrailerZero($shipper['freight_qty']) : 0,
          'rate' => getCurrencyInNumberFormatWithDollarPrefixV2($shipper['qty_rate'], 6),
          'amount' => getCurrencyInNumberFormatWithDollarPrefix(
            ((float)($shipper['freight_qty'] ?? 0) * (float)$shipper['qty_rate'])
          )
        ];
        if (
          !empty($shipper->additional_freight_details) &&
          !empty(json_decode($shipper->additional_freight_details)->a)
        ) {
          foreach (json_decode($shipper->additional_freight_details)->a as $detail) {
            $charges[] = [
              'name' => 'Hauling Fee',
              'description' => $detail->d ?? '',
              'qty' => !empty($detail->q) ? removeTrailerZero($detail->q) : 0,
              'rate' => getCurrencyInNumberFormatWithDollarPrefixV2($detail->y, 6),
              'amount' => getCurrencyInNumberFormatWithDollarPrefix(
                (float)($detail->q ?? 0) * (float)$detail->y
              )
            ];
          }
        }
      }
    } else {
      $qty = 0;
      if ($load->loadCharge->hauling_fees_type == 'flat_fee') {
        $qty = 1;
      } else if ($load->loadCharge->hauling_fees_type == 'weight') {
        foreach ($load->loadShippers as $shipper) {
          $qty += $shipper->i_totalWeight;
        }
      } else if ($load->loadCharge->hauling_fees_type == 'qty') {
        foreach ($load->loadShippers as $shipper) {
          $qty += $shipper->i_totalQty;
        }
      } else if ($load->loadCharge->hauling_fees_type == 'truck_hour') {
        $qty = !empty($load->loadCharge->hauling_fee_qty) ? removeTrailerZero($load->loadCharge->hauling_fee_qty) : 0;
      } else if ($load->loadCharge->hauling_fees_type == 'per_mile') {
        $qty = removeTrailerZero($load->total_miles);
      }
      $charges[] = [
        'name' => 'Hauling Fee',
        'description' => $loadCharges['hauling_fees_type'],
        'qty' => $qty,
        'rate' => getCurrencyInNumberFormatWithDollarPrefixV2($loadCharges['hauling_fees_rate'], 6),
        'amount' => getCurrencyInNumberFormatWithDollarPrefix($loadCharges['hauling_fees'])
      ];
    }

    if (!empty($loadCharges['fuel_surcharge']) && (float) $loadCharges['fuel_surcharge']) {
      $charges[] = [
        'name' => 'Fuel Surcharge Fee',
        'description' => $loadCharges['fuel_surcharge_type'],
        'qty' => in_array(
          $load->loadCharge->fuel_surcharge_type,
          [
            config('constant.fuel_surcharge_type.flat_fee'),
            config('constant.fuel_surcharge_type.percentage')
          ]
        ) ? 1 : removeTrailerZero($load->total_miles),
        'rate' => $load->loadCharge->fuel_surcharge_type == config('constant.fuel_surcharge_type.percentage') ?
          $loadCharges['fuel_surcharge_rate'] . '%' : getCurrencyInNumberFormatWithDollarPrefix($loadCharges['fuel_surcharge_rate']),
        'amount' => getCurrencyInNumberFormatWithDollarPrefix($loadCharges['fuel_surcharge'])
      ];
    }

    if (!empty($loadCharges['accessorial_fees'])) {
      foreach ($loadCharges['accessorial_fees'] as $accessorialFee) {
        $charges[] = [
          'name' => 'Accessorial Fee',
          'description' => $accessorialFee['accessorial_fee_type'],
          'qty' => 1,
          'rate' => getCurrencyInNumberFormatWithDollarPrefix($accessorialFee['accessorial_fee_rate']),
          'amount' => getCurrencyInNumberFormatWithDollarPrefix($accessorialFee["accessorial_fee_rate"])
        ];
      }
    }

    if (!empty($loadCharges['accessorial_deduction'])) {
      foreach ($loadCharges['accessorial_deduction'] as $deductionFee) {
        $charges[] = [
          'name' => 'Accessorial Deduction',
          'description' => $deductionFee['accessorial_deduction_fee_type'],
          'qty' => 1,
          'rate' => getCurrencyInNumberFormatWithDollarPrefix($deductionFee['accessorial_deduction_fee_rate']),
          'amount' => getCurrencyInNumberFormatWithDollarPrefix($deductionFee['accessorial_deduction_fee_rate'])
        ];
      }
    }

    if (!empty($load->discount)) {
      $charges[] = [
        'name' => 'Discount',
        'description' => '',
        'qty' => 1,
        'rate' => getCurrencyInNumberFormatWithDollarPrefix(-1 * $load->discount),
        'amount' => getCurrencyInNumberFormatWithDollarPrefix(-1 * $load->discount),
      ];
    }
    return $charges;
  }

  /**
   * Maps rate confirmations data for processing.
   *
   * @param $rateConfirmations
   * @return mixed
   */
  private function mapRateConfirmations($rateConfirmations) {
    return $rateConfirmations->map(function ($rateConfirmation) {
      return ['url' => getImage($rateConfirmation->file_name, config('constant.s3.load_file')) ?? null];
    })->toArray();
  }

  /**
   * Maps rate confirmations data for processing.
   *
   * @param $adminLoadImages
   * @return mixed
   */
  private function mapPods($adminLoadImages) {
    $loadImagePurpose = config('constant.load.image.purpose');
    return $adminLoadImages->whereIn('purpose', [
      $loadImagePurpose['lumper'],
      $loadImagePurpose['load_pod'],
      $loadImagePurpose['load_pod_admin'],
    ])->map(function ($loadImage) {
      return [
        'url' => getImage($loadImage['image_name'], config('constant.s3.load_file')) ?? null
      ];
    })->toArray();
  }

  /**
   * Merge invoice, rate con, and POD into one PDF.
   *
   * @param $generatedInvoice
   * @param $rateConfirmations
   * @param $pods
   * @param $originalFilename
   * @return string
   * @throws Exception|GuzzleException
   */
  private function mergeAndUploadPdf($generatedInvoice, $rateConfirmations, $pods, $originalFilename): string {
    $storageFilename = 'mg' . $generatedInvoice; // mg for merge

    $pdfs = [
      ['url' => getImage($generatedInvoice, config('constant.s3.load_invoice')) ?? null]
    ];
    $pdfs = array_merge($pdfs, $rateConfirmations);
    $pdfs = array_merge($pdfs, $pods);

    $body = [
      'sourcePdfs' => $pdfs,
      'mergedPdf' => [
        'directory' => config('constant.s3.load_invoice'),
        'storageFilename' => $storageFilename,
        'originalFilename' => $originalFilename,
      ],
    ];
    $this->performMergeAndUpload($body);
    return $storageFilename;
  }


  /**
   * Performs the merge and upload operation by sending a request to the external Node.js project.
   *
   * @param array $body The data required for merging and uploading, typically prepared by prepareBodyForMergeAndUpload.
   *
   * @throws Exception|GuzzleException if the merge and upload operation fails.
   */
  public function performMergeAndUpload($body) {
    $client = new Client();
    $nodeUrl = config('app.env') === 'production'
      ? config('constant.externalSystems.nodeProject.prodUrl')
      : config('constant.externalSystems.nodeProject.devUrl');

    $mergeAndUploadUrl = $nodeUrl . config('constant.mergePdfAndUpload');

    try {
      $response = $client->request('POST', $mergeAndUploadUrl, [
        'headers' => [
          'Content-Type' => 'application/json',
          'Authorization' => 'Bearer ' . request()->bearerToken(),
        ],
        'json' => $body
      ]);

      $response = json_decode($response->getBody()->getContents(), true);
      if (!$response['result']) {
        throw new Exception("Merge PDFs and upload failed.");
      }
    } catch (Exception $e) {
      Log::error($e->getMessage());
      Log::channel('slack')->emergency($e->getMessage());
      throw new Exception("Merge PDFs and upload failed.");
    }
  }

  /**
   * Multiple status is to allow users to modify an already sent invoice and re-send it.
   * @return mixed
   * @throws Exception
   */
  private function getLoad() {
    return Load::where([
      'id' => request('load'),
      'admin_company_detail_id' => getAuthAdminCompanyId()
    ])->with([
      'customer',
      'loadCharge',
      'thirdPartyCarrierCharge',
      'tag',
      'loadDrivers:id,load_id,truck_id,trailer_id',
      'loadDrivers.truck:id,number',
      'loadDrivers.trailer:id,number',
      'loadDrivers.loadDriverUsers:load_driver_id,user_id',
      'loadDrivers.loadDriverUsers.user:id,first_name,last_name'
    ])->firstOrFail();
  }

  public function generateMassInvoice($request) {
    $companyId = getAuthAdminCompanyId();
    $invoiceNumber = $request->invoiceNumber;
    $loadIds = $request->loadIds;

    $loads = Load::where('admin_company_detail_id', $companyId)
      ->whereIn('id', $loadIds)
      // Removed tag and customer from eager loading because they are the same.
      ->with(['loadShippers'])
      ->get();

    if (!$loads || count($loads) == 0) {
      throw new Exception("No loads found for invoice generation");
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
        config('constant.status.load.delivered'),
        config('constant.status.load.invoice_created')
      ]
    );
    if (count($statuses) > 0) {
      throw new Exception("Loads have to be in delivered or invoice generated status.");
    }

    $this->generateLoadsMassInvoice($loads, $invoiceNumber, $companyId, $loadIds);

    if (
      $this->qbdService->connectionStatusCascade($loads->first()->tag_id) !=
      'Not connected'
    ) {
      $this->qbdService->syncMassInvoiceToQbd($request);
    }
  }

  private function generateLoadsMassInvoice($loads, $invoiceNumber, $companyId, $loadIds) {
    $admin = Auth::user();
    $adminCompanyDetail = AdminCompanyDetail::findOrFail($companyId);
    $customer = $loads->first()->customer;
    $factoringCompany = null;
    if (is_null($customer->no_factoring)) {
      $factoringCompany = $adminCompanyDetail->factoringCompanies->first();
    }
    $tag = $loads->first()->tag ?? "";
    $tagId = null;

    if (!empty($tag) && $tag->use_tag_for_billing) {
      $tagId = $tag->id;
      $businessEmail = $tag->email ?? '';
      $businessName = $tag->business_name ?? '';
      $address = $tag->address ?? "";
      $city = $tag->city ?? "";
      $state = $tag->state ?? "";
      $zipCode = $tag->zipcode ?? "";
      $phoneNumber = $tag->phone_number ?? "";
    } else {
      $businessEmail = $adminCompanyDetail->email;
      $businessName = $adminCompanyDetail->business_name;
      $address = $adminCompanyDetail->address;
      $city = $adminCompanyDetail->city;
      $state = $adminCompanyDetail->state;
      $zipCode = $adminCompanyDetail->zipcode;
      $phoneNumber = $adminCompanyDetail->phone_number;
    }

    if (!empty($factoringCompany)) {
      $carrierName = $businessName;
      $businessEmail = $factoringCompany->billing_email;
      $businessName = $factoringCompany->name;
      $address = $factoringCompany->address;
      $city = $factoringCompany->city;
      $state = $factoringCompany->state;
      $zipCode = $factoringCompany->zip_code;
      $phoneNumber = $factoringCompany->phone_number;
    }

    $S3Folder = config('constant.s3.load_invoice');

    $carbonNow = Carbon::now();
    $pdfFilename = "mass-invoice-" . $companyId . '-';
    if ($tagId) {
      $pdfFilename .= 't' . $tagId . '-';
    }
    $pdfFilename .= $invoiceNumber . '-' . min($loadIds) . '-' . max($loadIds)
      . '-' . $carbonNow->toDateTimeLocalString() . ".pdf";

    $InvoiceFilePath = "{$S3Folder}{$pdfFilename}";
    $pdf = PDF::loadView('pdf.load-mass-invoice', [
      'dollarSign' => '$',
      'invoiceNumber' => $invoiceNumber,
      'admin' => $admin,
      'invoiceDate' => Carbon::now('America/Los_Angeles')->toDateString(),
      'loads' => $loads,
      'business_name' => $businessName,
      'address' => $address,
      'customer' => $customer,
      'city' => $city,
      'state' => $state,
      'phone_number' => $phoneNumber,
      'zipcode' => $zipCode,
      'business_email' => $businessEmail,
      'carrier_name' => $carrierName ?? '',
    ]);

    Storage::disk('s3')->put($InvoiceFilePath, $pdf->output());
    // TODO: log each load.

    return Load::whereIn('id', $loads->pluck('id')->toArray())
      ->update([
        'status' => config('constant.status.load.invoice_created'),
        'invoice_file_name' => $pdfFilename,
        'invoice_original_file_name' => null,
        'invoice_generated_at' => $carbonNow,
      ]);
  }

  public function updateLoadWithCommissionableAccessorials(&$load) {
    $loadAccessorialFeeIds = [];
    $loadAccessorialDeductionIds = [];

    $loadAccessorialFees = $load->loadCharge && $load->loadCharge->accessorial_fee ?
      json_decode($load->loadCharge->accessorial_fee, true) : [];
    $thirdPartyAccessorialFees = $load->thirdPartyCarrierCharge && $load->thirdPartyCarrierCharge->accessorial_fee ?
      json_decode($load->thirdPartyCarrierCharge->accessorial_fee, true) : [];

    $loadAccessorialDeductions = $load->loadCharge && $load->loadCharge->accessorial_deduction ?
      json_decode($load->loadCharge->accessorial_deduction, true) : [];
    $thirdPartyAccessorialDeductions = $load->thirdPartyCarrierCharge && $load->thirdPartyCarrierCharge->accessorial_deduction ?
      json_decode($load->thirdPartyCarrierCharge->accessorial_deduction, true) : [];

    $loadInternalArr = [
      '_fees' => $loadAccessorialFees,
      '_3rdPartyFees' => $thirdPartyAccessorialFees,
      '_deductions' => $loadAccessorialDeductions,
      '_3rdPartyDeductions' => $thirdPartyAccessorialDeductions,
      '_feesAmount' => array_sum(array_column($loadAccessorialFees, 'rate')),
      '_3rdPartyFeesAmount' => array_sum(array_column($thirdPartyAccessorialFees, 'rate')),
      '_deductionsAmount' => array_sum(array_column($loadAccessorialDeductions, 'rate')),
      '_3rdPartyDeductionsAmount' => array_sum(array_column($thirdPartyAccessorialDeductions, 'rate')),
    ];

    $this->appendNewFeeIds($loadAccessorialFeeIds, $loadAccessorialFees);
    $this->appendNewFeeIds($loadAccessorialFeeIds, $thirdPartyAccessorialFees);
    $this->appendNewFeeIds($loadAccessorialDeductionIds, $loadAccessorialDeductions);
    $this->appendNewFeeIds($loadAccessorialDeductionIds, $thirdPartyAccessorialDeductions);

    $nonCommissionableFees = getAccessorialsByIds('fee', $loadAccessorialFeeIds, false);
    $nonCommissionableDeductions = getAccessorialsByIds('deduction', $loadAccessorialDeductionIds, false);

    $loadInternalArr['_nonCommissionableFees']
      = array_filter($loadInternalArr['_fees'], fn ($fee) => $nonCommissionableFees->has($fee['id']));
    $loadInternalArr['_nonCommissionable3rdPartyFees']
      = array_filter($loadInternalArr['_3rdPartyFees'], fn ($fee) => $nonCommissionableFees->has($fee['id']));

    $loadInternalArr['_nonCommissionableDeductions']
      = array_filter($loadInternalArr['_deductions'], fn ($fee) => $nonCommissionableDeductions->has($fee['id']));
    $loadInternalArr['_nonCommissionable3rdPartyDeductions']
      = array_filter($loadInternalArr['_3rdPartyDeductions'], fn ($fee) => $nonCommissionableDeductions->has($fee['id']));

    $loadInternalArr['_nonCommissionableFeesAmount'] = array_sum(array_column($loadInternalArr['_nonCommissionableFees'], 'rate'));
    $loadInternalArr['_nonCommissionable3rdPartyFeesAmount'] = array_sum(array_column($loadInternalArr['_nonCommissionable3rdPartyFees'], 'rate'));
    $loadInternalArr['_nonCommissionableDeductionsAmount'] = array_sum(array_column($loadInternalArr['_nonCommissionableDeductions'], 'rate'));
    $loadInternalArr['_nonCommissionable3rdPartyDeductionsAmount'] = array_sum(array_column($loadInternalArr['_nonCommissionable3rdPartyDeductions'], 'rate'));

    return $loadInternalArr;
  }

  private function appendNewFeeIds(&$ids, $fees) {
    if (!empty($fees)) {
      foreach ($fees as $fee) {
        if (!in_array($fee['id'], $ids)) {
          $ids[] = $fee['id'];
        }
      }
    }
  }
}
