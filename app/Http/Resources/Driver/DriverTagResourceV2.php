<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverTagResourceV2 extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'tagId' => $this->id ?? '',
      'tagBusinessName' => $this->business_name ?? ''
    ];
  }
}
