<?php

namespace App\Http\Resources\Truck;

use Illuminate\Http\Resources\Json\JsonResource;

class TruckV2DriverAssignmentResource extends JsonResource {

  /**
   * Truck V2 Driver Assignment Resource.
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    $fullName = '';
    if (!empty($this->user)) {
      $fullName = $this->user->first_name;
      if (!empty($this->user->last_name)) {
        $fullName = $fullName . ' ' . $this->user->last_name;
      }
    }
    return [
      'id' => $this->id ?? '',
      'userId' => $this->user_id ?? '',
      'fullName' => $fullName,
      'startDate' => optional($this->start_date)->format(config('constant.date_format')) ?? '',
      'endDate' => optional($this->end_date)->format(config('constant.date_format')) ?? '',
      'isCurrent' => (!empty($this->user->driverDetail->driver_truck_assignment_id) && $this->id == $this->user->driverDetail->driver_truck_assignment_id) ? 1 : 0,
    ];
  }
}
