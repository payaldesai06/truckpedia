<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThirdPartyCarrierResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    $carrierCharge = $this->thirdPartyCarrierCharge;
    $rateConOriginalFileName = $this->third_party_carrier_rate_con_storage_file_name ?
      $this->load_unique_id . '-RC.pdf' : null;
    $bolOriginalFileName = $this->third_party_carrier_bol_storage_file_name ?
      $this->load_unique_id . '-BOL.pdf' : null;
    return [
      'carrierAsCustomerId' => $this->third_party_carrier_as_customer_id ?? null,
      'instructions' => $this->third_party_carrier_instructions ?? null,
      'subTotal' => $this->third_party_carrier_sub_total ?? 0,
      'discount' => $this->third_party_carrier_discount ?? 0,
      'totalAmount' => $this->third_party_carrier_total_amount ?? 0,
      'driverAssetAssignments' => ThirdPartyCarrierDriverCollection::collection($this->carrierDriverAssetAssignments) ?? "",
      'charges' => !empty($carrierCharge) ? [
        $this->merge(new ThirdPartyCarrierChargeResource($this->thirdPartyCarrierCharge))
      ] : '',
      "rateConType" => $this->third_party_carrier_rate_con_type ? config('constant.load.rateConType')[$this->third_party_carrier_rate_con_type] : null,
      'ccEmails' => !empty($this->third_party_carrier_cc_emails) ?
        explode(',', $this->third_party_carrier_cc_emails) : [],
      'rateConOriginalFileName' => $rateConOriginalFileName,
      'rateConStorageFileName' => $this->third_party_carrier_rate_con_storage_file_name ?? null,
      'rateConUrl' => getFile(
        config('constant.s3.load_file'),
        $this->third_party_carrier_rate_con_storage_file_name,
        $rateConOriginalFileName
      ) ?? null,
      'bolOriginalFileName' => $bolOriginalFileName,
      'bolStorageFileName' => $this->third_party_carrier_bol_storage_file_name ?? null,
      'bolUrl' => getFile(
        config('constant.s3.load_file'),
        $this->third_party_carrier_bol_storage_file_name,
        $bolOriginalFileName
      ) ?? null,
      'invoiceOriginalFileName' => $this->third_party_carrier_invoice_original_file_name ?? null,
      'invoiceStorageFileName' => $this->third_party_carrier_invoice_storage_file_name ?? null,
      'invoiceUrl' => getFile(
        config('constant.s3.load_invoice'),
        $this->third_party_carrier_invoice_storage_file_name,
        $this->third_party_carrier_invoice_original_file_name
      ) ?? null,
      "invoiceStatus" => !empty($this->third_party_carrier_invoice_status) ?
        config('constant.load.thirdPartyCarrier.status')[$this->third_party_carrier_invoice_status]
        : null,
    ];
  }
}
