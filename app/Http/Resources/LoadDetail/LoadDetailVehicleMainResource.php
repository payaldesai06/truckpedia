<?php

namespace App\Http\Resources\LoadDetail;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailVehicleMainResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request) {
    return [
      'truck_id' => $this->truck->id ?? '',
      'truck_number' => $this->truck->number ?? '',
      'trailer_id' => $this->trailer->id ?? '',
      'trailer_number' => $this->trailer->number ?? '',
      'location' => (new LoadDetailLocationResource($this->gps_and_location)) ?? '',
    ];
  }
}
