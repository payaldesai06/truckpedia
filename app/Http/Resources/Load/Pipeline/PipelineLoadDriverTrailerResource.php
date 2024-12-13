<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadDriverTrailerResource extends JsonResource {

  public function toArray($request): array {
    return [
      'trailer_id' => $this->id ?? "",
      'trailer_number' => $this->number ?? "",
    ];
  }
}
