<?php

namespace App\Http\Resources\TrailerV2;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetTrailerLogListCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = GetTrailerLogListResource::class;

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
