<?php

namespace App\Http\Resources\Trip;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class TripMainResource extends JsonResource {
  public function toArray($request): array {
    return [
      'trip_id' => $this->id,
      'driver_ids' => $this->driver_ids,
      'trip_start_date' => $this->trip_start_date,
      'trip_start_time' => $this->trip_start_time ? Carbon::parse($this->trip_start_time)->format('H:i') : '',
      'trip_end_date' => $this->trip_end_date,
      'trip_end_time' => $this->trip_end_time ? Carbon::parse($this->trip_end_time)->format('H:i') : '',
      'status' => !empty($this->status) ? ucwords(str_replace('_', ' ', $this->status)) : '',
      'detention' => $this->detention,
      'layover' => $this->layover,
      'reimbursement' => $this->reimbursement,
      'notes' => $this->notes, //driver notes
      'total_hours' => $this->total_hours,
      'number_of_stop' => $this->number_of_stop,
      'total_miles' => $this->total_miles,
      'payment_request_date' => $this->payment_request_date,
      'trip_expenses_count' => $this->trip_expenses_count,
      'co_driver_name' => $this->driverTwo->driverDetail->name ?? "",
      'driver_one_name' => $this->driverOne->driverDetail->name ?? "",
      'driver_two_name' => $this->driverTwo->driverDetail->name ?? "",
      'total_payment' => $this->total_payment ?? ''
    ];
  }
}
