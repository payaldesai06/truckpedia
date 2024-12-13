<?php

namespace App\Http\Resources\Truck;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetTruckLogListCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = GetTruckLogListResource::class;

  public function toArray($request): array {
    $collection = ['logs' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}
