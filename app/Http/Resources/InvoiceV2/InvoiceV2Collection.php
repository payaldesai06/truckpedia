<?php

namespace App\Http\Resources\InvoiceV2;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class InvoiceV2Collection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = InvoiceV2Resource::class;

  public function toArray($request): array {
    $collection = ['invoices' => $this->collection];
    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }
    return $collection;
  }
}
