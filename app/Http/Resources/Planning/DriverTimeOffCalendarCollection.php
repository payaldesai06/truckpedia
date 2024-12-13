<?php

namespace App\Http\Resources\Planning;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class DriverTimeOffCalendarCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = DriverTimeOffCalendarResource::class;

  public function toArray($request): array {
    $collection = ['timeOffCalendars' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}
