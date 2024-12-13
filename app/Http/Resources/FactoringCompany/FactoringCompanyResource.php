<?php

namespace App\Http\Resources\FactoringCompany;

use Illuminate\Http\Resources\Json\JsonResource;

class FactoringCompanyResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'company_id' => $this->company_id ?? '',
      'name' => $this->name ?? '',
      'billing_email' => $this->billing_email ?? '',
      'address' => $this->address ?? '',
      'city' => $this->city ?? '',
      'state' => $this->state ?? '',
      'zip_code' => $this->zip_code ?? '',
      'phone_number' => $this->phone_number ?? '',
      'factoring_fee_fractional' => $this->factoring_fee_fractional ?? '',
      'request_payment_merge_pdfs' => $this->request_payment_merge_pdfs ?? '',
      'integrationPartner' => $this->integration_partner ?
        config('constant.factoringCompany.integrationPartners')[$this->integration_partner] : null,
    ];
  }
}
