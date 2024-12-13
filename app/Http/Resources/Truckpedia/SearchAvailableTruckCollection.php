<?php

namespace App\Http\Resources\Truckpedia;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class SearchAvailableTruckCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = SearchAvailableTruckResource::class;

  public function toArray($request) {
    $collection = ['availableTrucks' => $this->collection];

    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }

    return $collection;
  }
}
