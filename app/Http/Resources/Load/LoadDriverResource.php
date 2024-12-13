<?php

namespace App\Http\Resources\Load;

use App\Http\Resources\Driver\DriverResource;
use App\Http\Resources\Trailer\TrailerResource;
use App\Http\Resources\Truck\TruckResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadDriverResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $data = [
      'load_driver_id' => $this->id ?? "",
      'load_id' => $this->load_id ?? "",
      'truck_id' => $this->truck_id ?? "",
      'trailer_id' => $this->trailer_id ?? "",
      'chassis' => $this->chassis ?? null,
      'externalTrailerNumber' => $this->external_trailer_number ?? null,
      'notes' => $this->notes ?? "",
      'is_final_mile' => $this->is_final_mile ?? "",
      'direction' => $this->direction ?? "",
      'drop_trailer' => $this->drop_trailer ?? "",
      'is_trailer_picked_up' => $this->is_trailer_picked_up ?? "",
      //            'to_notify_driver' => $this->to_notify_driver ?? "",
      // 'driver_ids' => explode(",", $this->driver_ids) ?? "",
      'status' => $this->status ?? "",
      'to_leg' => $this->to_leg ?? '',
      'to_leg_str' => $this->to_leg . '' ?? '',
      'from_leg' => $this->from_leg ?? '',
      'from_leg_str' => $this->from_leg . '' ?? '',
      'drivers' => DriverResource::collection(User::whereIn('id', explode(",", $this->driver_ids))->get()) ?? "",
      'truck' => [
        $this->merge(new TruckResource($this->truck))
      ],
      'trailer' => [
        $this->merge(new TrailerResource($this->trailer))
      ],
      'startLoadUtcDatetime' => $this->start_load_utc_datetime ?? null,
      'endLoadUtcDatetime' => $this->end_load_utc_datetime ?? null,
      'emptyDistance' => $this->empty_distance ?? null,
      'loadedDistance' => $this->loaded_distance ?? null,
    ];

    $startLocation = array_filter([
      'address' => $this->start_location_address ?? null,
      'city' => $this->start_location_city ?? null,
      'state' => $this->start_location_state ?? null,
      'zip_code' => $this->start_location_zip_code ?? null,
      'latitude' => floatval($this->start_location_latitude) ?? null,
      'longitude' => floatval($this->start_location_longitude) ?? null,
      'distance' => floatval($this->start_location_distance) ?? null,
    ]);
    if (!empty($startLocation)) {
      $data['startLocation'] = $startLocation;
    }
    return $data;
  }
}
