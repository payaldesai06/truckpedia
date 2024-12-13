<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadAdditionalFreightDetailsResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'totalWeight' => $this->W ?? null,
      'totalQty' => $this->Q ?? null,
      'details' => !empty($this->a) ? AdditionalFreightDetailsResource::collection($this->a)
        ->toArray($request) : [],
    ];
  }
}
