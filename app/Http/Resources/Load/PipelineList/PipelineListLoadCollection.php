<?php

namespace App\Http\Resources\Load\PipelineList;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class PipelineListLoadCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = PipelineListLoadResource::class;

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
