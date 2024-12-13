<?php

namespace App\Http\Resources\TrailerV2;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetListTrailerV2Collection extends ResourceCollection {
  use ApiResourceTrait;
  public $collects = GetListTrailerV2Resource::class;
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
