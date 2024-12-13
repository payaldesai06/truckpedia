<?php

namespace App\Http\Resources\Locate;

use Illuminate\Http\Resources\Json\JsonResource;

class LocateDriverDetailsResource extends JsonResource {

  public function toArray($request) {
    $driverDetail = $this->driverDetail;

    return [
      'driver_id' => $driverDetail->user_id ?? "",
      'name' => $driverDetail->name ?? "",
      'phone_number' => $driverDetail->phone_number ?? "",
      'email' => $this->email ?? "",
      'profile_image' => $driverDetail->profile_image ?? "",
      'latitude' => $driverDetail->latitude ?? '',
      'longitude' => $driverDetail->longitude ?? '',
    ];
  }
}
