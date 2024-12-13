<?php

namespace App\Http\Resources\Dashboard\TripStat;

use Illuminate\Http\Resources\Json\JsonResource;

class TripStatResource extends JsonResource {
  public function toArray($request): array
  {
    return [
      'total_loads' => $this->total_loads,
      'total_revenue' => $this->total_revenue,
      'total_driver_payment' => $this->total_driver_payment,
      'total_rate_per_mile' => $this->total_rate_per_mile,
    ];
  }
}