<?php

namespace App\Http\Resources\Dashboard\TripRevenue;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class TripRevenueCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = TripRevenueResource::class;

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
