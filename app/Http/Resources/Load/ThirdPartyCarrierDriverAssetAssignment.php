<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Resources\Json\JsonResource;

class ThirdPartyCarrierDriverAssetAssignment extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? "",
      'loadId' => $this->load_id ?? "",
      'truckNumber' => $this->truck_number ?? "",
      'trailerNumber' => $this->trailer_number ?? "",
      'driverName' => $this->driver_name ?? "",
      'driverPhoneNumber' => $this->driver_phone_number ?? ""
    ];
  }
}
