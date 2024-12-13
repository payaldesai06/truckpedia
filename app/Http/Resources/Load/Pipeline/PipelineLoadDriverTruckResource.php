<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadDriverTruckResource extends JsonResource {

  public function toArray($request): array {
    return [
      'truck_id' => $this->id ?? "",
      'truck_number' => $this->number ?? "",
    ];
  }
}
