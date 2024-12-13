<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverTruckAssignmentResourceV2 extends JsonResource {
  public static $currentTruckId;

  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'truckId' => $this->truck_id ?? '',
      'startDate' => optional($this->start_date)->format(config('constant.date_format')) ?? '',
      'endDate' => optional($this->end_date)->format(config('constant.date_format')) ?? '',
      'isCurrent' => (int) $this->truck_id === self::$currentTruckId,
    ];
  }

  public static function withCurrentTruck($resource, int $currentTruckId = null) {
    self::$currentTruckId = $currentTruckId;
    return parent::collection($resource);
  }
}
