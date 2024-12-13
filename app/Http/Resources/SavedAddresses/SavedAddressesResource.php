<?php

namespace App\Http\Resources\SavedAddresses;

use Illuminate\Http\Resources\Json\JsonResource;

class SavedAddressesResource extends JsonResource {

  /**
   * Transform the resource into an array.
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? "",
      'company_id' => $this->company_id ?? "",
      'name' => $this->name ?? "",
      'address' => $this->address ?? "",
      'state' => $this->state ?? "",
      'city' => $this->city ?? "",
      'zip_code' => $this->zip_code ?? "",
      'contact' => $this->contact ?? "",
      'phone' => $this->phone ?? "",
      'email' => $this->email ?? "",
      'latitude' => (float) $this->latitude,
      'longitude' => (float) $this->longitude,
      'taggedCustomerId' => $this->tagged_customer_id ?? null,
      'taggedCustomerName' => !empty($this->taggedCustomer) ? $this->taggedCustomer->company_name : "",
      'taggedCustomerBillToCode' => $this->tagged_customer_bill_to_code ?? "",
      'zone' => $this->zone ?? null,
      'trailerRecoveryFee' => $this->trailer_recovery_fee ?? null,
    ];
  }
}
