<?php

namespace App\Http\Resources\SavedEquipmentTypes;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class GetListSavedEquipmentTypesCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = GetListSavedEquipmentTypesResource::class;

  public function toArray($request): array {
    $collection = ['savedEquipmentTypes' => $this->collection];

    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }

    return $collection;
  }
}
