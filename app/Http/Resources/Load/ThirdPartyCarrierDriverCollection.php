<?php

namespace App\Http\Resources\Load;

use App\Http\Resources\Load\ThirdPartyCarrierDriverAssetAssignment;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThirdPartyCarrierDriverCollection extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      $this->merge(new ThirdPartyCarrierDriverAssetAssignment($this))
    ];
  }
}
