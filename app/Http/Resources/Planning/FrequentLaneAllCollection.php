<?php

namespace App\Http\Resources\Planning;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class FrequentLaneAllCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = FrequentLaneResource::class;

  public function toArray($request): array {
    return ['frequentLanes' => $this->collection];
  }
}
