<?php

namespace App\Http\Resources\Company;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class CompanyDetailCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = CompanyDetailResource::class;

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
