<?php

namespace App\Http\Resources\Planning;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverTimeOffCalendarResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'start' => [
        'date' => $this->start_date ?? "",
        'time' => $this->start_time ?? "",
        'timezone' => $this->start_timezone ?? ""
      ],
      'end' => [
        'date' => $this->end_date ?? "",
        'time' => $this->end_time ?? "",
        'timezone' => $this->end_timezone ?? ""
      ]
    ];
  }
}
