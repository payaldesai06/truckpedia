<?php

namespace App\Http\Resources\Reports\DispatcherSalesReport;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class DispatcherSalesRevenueReportCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = DispatcherSalesRevenueReportResource::class;

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
