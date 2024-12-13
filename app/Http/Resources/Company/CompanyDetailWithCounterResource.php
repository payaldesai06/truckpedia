<?php

namespace App\Http\Resources\Company;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyDetailWithCounterResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      $this->merge(new CompanyDetailResource($this)),
      // 'fmcsaCarrierId' => $this->fmcsaCarrier->id ?? null,
      'admins_count' => $this->admins_count ?? 0,
      'dispatchers_count' => $this->dispatchers_count ?? 0,
      'drivers_count' => $this->drivers_count ?? 0,
      'trucks_count' => $this->trucks_count ?? 0,
      'trailers_count' => $this->trailers_count ?? 0,
      'loads_count' => $this->loads_count ?? 0,
      'active_loads_count' => $this->activeLoads ?? 0,
      'active_trucks_count' => $this->activeTrucks ?? 0,
      'active_drivers_count' => $this->activeDrivers ?? 0
    ];
  }
}
