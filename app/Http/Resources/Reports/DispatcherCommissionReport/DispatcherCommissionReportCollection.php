<?php

namespace App\Http\Resources\Reports\DispatcherCommissionReport;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class DispatcherCommissionReportCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = DispatcherCommissionReportResource::class;

  public function toArray($request): array
  {
    $collection = ['data' => $this->collection];

    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }

    return $collection;
  }
}
