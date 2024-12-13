<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PipelineLoadCollection extends ResourceCollection {

  public $collects = PipelineLoadResource::class;

  public function toArray($request): array {
    return ['loads' => $this->collection];
  }
}
