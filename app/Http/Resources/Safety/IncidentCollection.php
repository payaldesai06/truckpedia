<?php

namespace App\Http\Resources\Safety;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class IncidentCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = IncidentResource::class;

  public function toArray($request): array {
    $collection = ['incidents' => $this->collection];

    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }

    return $collection;
  }
}
