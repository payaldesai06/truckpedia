<?php

namespace App\Http\Resources\LoadDetail;

use App\Services\ExternalTrackingService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request)
  {
    $externalTrackingService = new ExternalTrackingService();

    $truckIds = collect($this->loadDrivers)->pluck('truck_id')
      ->unique()->toArray() ?? [];
    $locations = $externalTrackingService->getTrucksLocation(
      $this->admin_company_detail_id,
      $truckIds
    );

    $trucks_and_locations = $this->loadDrivers->map(function ($row)
    use ($locations) {
      if ($row->truck_id) {
        $row->gps_and_location = $locations[$row->truck_id];
        return $row;
      }
    })->filter()->unique('truck_id');

    return [
      $this->merge(new LoadDetailMainResource($this)),
      'shippers' => LoadDetailShippersResource::collection($this
        ->loadShippers) ?? "",
      'receivers' => LoadDetailReceiversResource::collection($this
        ->loadReceivers) ?? "",
      'drivers' => collect(LoadDetailDriversResource::collection($this
        ->loadDrivers))->unique() ?? '',
      'vehicles' => LoadDetailVehicleMainResource::collection($trucks_and_locations) ?? '',
    ];
  }
}
