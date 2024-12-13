<?php

namespace App\Http\Resources\Planning;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class FrequentLaneCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = FrequentLaneResource::class;

  public function toArray($request): array {
    $collection = ['frequentLanes' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}
