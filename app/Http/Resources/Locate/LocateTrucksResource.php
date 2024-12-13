<?php

namespace App\Http\Resources\Locate;

use App\Models\Truck;
use App\Services\ExternalTrackingService;
use Illuminate\Http\Resources\Json\JsonResource;

class LocateTrucksResource extends JsonResource {

  public function toArray($request) {
    $trucks = Truck::select('id', 'number')
      ->where('company_id', $this->id)->get();

    $externalTrackingService = new ExternalTrackingService();
    $locations = $externalTrackingService->getTrucksLocation(
      $this->id,
      $trucks->pluck('id')->toArray()
    );

    $trucks_and_locations = $trucks->map(function ($truck) use ($locations) {
      $truck->gps_and_location = $locations[$truck->id];
      return $truck;
    });

    return [
      'trucks' => LocateTruckDetailsResource::collection($trucks_and_locations),
    ];
  }
}
