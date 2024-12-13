<?php

namespace App\Http\Resources\Load\PipelineList;

use Illuminate\Http\Resources\Json\JsonResource;

class ListLoadResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $pickupNumber = trim(implode(' ',$this->loadShippers->pluck('shipper_reference')->toArray()));
    $deliveryNumber = trim(implode(' ',$this->loadReceivers->pluck('receiver_reference')
      ->toArray()));

    $ret = [
      $this->merge(new ListLoadMainResource($this)),
      /*
      // May be used in the future.
      'tag' => [
      'tag_id' => $this->tag->id ?? "",
      'business_name' => $this->tag->business_name ?? "",
      ],
       */
      'shippers' => PipelineListLoadShipperResource::collection($this->loadShippers) ?? "",
      'receivers' => PipelineListLoadReceiverResource::collection($this->loadReceivers) ?? "",
      'drivers' => PipelineListLoadDriverResource::collection($this->loadDrivers) ?? "",
      'customer' => [
        'customer_id' => $this->customer->id ?? '',
        'company_name' => $this->customer->company_name ?? '',
        'billing_email' => $this->customer->billing_email ?? '',
        'noFactoring' => $this->customer->no_factoring ?? null,
      ],
      'dispatcher' => [
        'fullName' => !empty($this->dispatcher) ? userFullName($this->dispatcher) : null,
      ],
      'pickupNumber' => $pickupNumber,
      'deliveryNumber' => $deliveryNumber,
    ];
    return $ret;
  }
}
