<?php

namespace App\Http\Resources\TripV2;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class GetTripSheetResource extends JsonResource {
  public function toArray($request): array {
    return [
      'sheetId' => $this->id,
      'startDate' => $this->start_date ?? null,
      'startTime' => $this->start_time ? Carbon::parse($this->start_time)
        ->format(config('constant.time_format')) : null,
      'endDate' => $this->end_date ?? null,
      'endTime' => $this->end_time ? Carbon::parse($this->end_time)
        ->format(config('constant.time_format')) : null,
      'totalHours' => $this->total_hours ?? null,
      'startOdometer' => $this->start_odometer ?? null,
      'endOdometer' => $this->end_odometer ?? null,
      'notes' => $this->notes ?? null,
      'status' => $this->status ? config('constant.status.trip_sheets')[$this->status] : null,
    ];
  }
}
