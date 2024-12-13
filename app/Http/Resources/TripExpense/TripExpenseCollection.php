<?php

namespace App\Http\Resources\TripExpense;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class TripExpenseCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = TripExpenseWithTripExpenseResource::class;

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        $collection['total_expense'] = collect($this->collection)->pluck('cost')->sum();

        return $collection;
    }
}
