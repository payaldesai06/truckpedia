<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      $this->merge(new PipelineLoadMainResource($this)),
      'shippers' => PipelineLoadShipperResource::collection($this->loadShippers) ?? "",
      'receivers' => PipelineLoadReceiverResource::collection($this->loadReceivers) ?? "",
      'drivers' => PipelineLoadDriverResource::collection($this->loadDrivers) ?? "",
      'customer' => [
        'customer_id' => $this->customer->id ?? '',
        'company_name' => $this->customer->company_name ?? '',
        'billing_email' => $this->customer->billing_email ?? '',
        'noFactoring' => $this->customer->no_factoring ?? null,
      ],
    ];
  }
}
