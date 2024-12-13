<?php

namespace App\Http\Resources\DriverLoad;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class DriverLoadCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = DriverLoadResource::class;


    public function toArray($request)
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
