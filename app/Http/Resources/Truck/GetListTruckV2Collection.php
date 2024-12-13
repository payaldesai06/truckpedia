<?php

namespace App\Http\Resources\Truck;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetListTruckV2Collection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = GetListTruckV2Resource::class;

  public function toArray($request) {
    $collection = ['data' => $this->collection];

    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }

    return $collection;
  }
}
