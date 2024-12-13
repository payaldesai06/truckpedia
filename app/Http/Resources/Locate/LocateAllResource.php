<?php

namespace App\Http\Resources\Locate;

use App\Models\User;
use App\Models\Truck;
use App\Services\ExternalTrackingService;
use Illuminate\Http\Resources\Json\JsonResource;

class LocateAllResource extends JsonResource {

  public function toArray($request) {
    $users = User::select('id', 'email')
      ->with(['driverDetail:id,user_id,name,phone_number,profile_image,latitude,longitude'])
      ->where('admin_company_detail_id', $this->id)
      ->where('role', config('constant.roles.driver'))->get();

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

    $ret = [
      'drivers' => LocateDriverDetailsResource::collection($users),
      'trucks' => LocateTruckDetailsResource::collection($trucks_and_locations),
    ];
    return $ret;
  }
}
