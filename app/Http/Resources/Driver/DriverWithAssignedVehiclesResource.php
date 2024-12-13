<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverWithAssignedVehiclesResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'name' => trim($this->first_name . ' ' . $this->last_name) ?? '',
      'truckId' => $this->driverDetail->assignment_truck_id ?? '',
      'trailerId' => $this->driverDetail->assignment_trailer_id ?? '',
    ];
  }
}
