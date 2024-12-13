<?php

namespace App\Http\Resources\Locate;

use Illuminate\Http\Resources\Json\JsonResource;

class LocateTruckDetailsResource extends JsonResource {

  public function toArray($request) {
    return [
      'truck_id' => $this->id,
      'truck_number' => $this->number,
      'latitude' => $this->gps_and_location['latitude'],
      'longitude' => $this->gps_and_location['longitude'],
      'formatted_location' => $this->gps_and_location['formattedLocation'] ?? 'n/a',
      'error' => $this->gps_and_location['error'],
    ];
  }
}
