<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineDriverDetailResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'user_id' => $this->driverDetail->user_id ?? "",
      'name' => $this->driverDetail->name ?? "",
    ];
  }
}