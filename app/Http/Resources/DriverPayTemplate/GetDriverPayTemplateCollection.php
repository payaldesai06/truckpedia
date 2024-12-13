<?php

namespace App\Http\Resources\DriverPayTemplate;

use App\Http\Resources\DriverPayTemplate\GetDriverPayTemplateResource;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetDriverPayTemplateCollection extends ResourceCollection {

  use ApiResourceTrait;

  public $collects = GetDriverPayTemplateResource::class;

  public function toArray($request): array {
    $collection = ['templates' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}