<?php

namespace App\Http\Resources\TripV2;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetTripV2Collection extends ResourceCollection {
  use ApiResourceTrait;
  public $collects = GetTripV2Resource::class;

  public function toArray($request): array {
    $collection = ['trips' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}
