<?php

namespace App\Http\Resources\Load\PipelineList;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineListLoadResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $ret = [
      $this->merge(new PipelineListLoadMainResource($this)),
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
    ];
    return $ret;
  }
}
