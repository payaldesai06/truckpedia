<?php

namespace App\Http\Resources\TripV2;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetTripSheetListCollection extends ResourceCollection {
  use ApiResourceTrait;
  public $collects = GetTripSheetResource::class;

  public function toArray($request): array {
    $collection = ['sheets' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}
