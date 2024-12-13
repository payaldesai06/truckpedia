<?php

namespace App\Http\Resources\Reports\TripRevenueReport;

use App\Traits\ApiResourceTrait;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class TripRevenueReportCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = TripRevenueReportResource::class;

    private Collection $trips;

    public function __construct($resource, Collection $trips)
    {
        parent::__construct($resource);

        $this->trips = $trips;
    }

    public function toArray($request): array
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();

            $collection['extras']['total_rate_per_mile_avg'] = $this->getTotalRatePerMileAverage($this->trips);
            $collection['extras']['total_cost_per_mile_avg'] = $this->getTotalCostPerMileAverage($this->trips);
            $collection['extras']['total_profit_per_mile_avg'] = $this->getTotalProfitPerMileAverage($this->trips);

            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    private function getTotalRatePerMileAverage(Collection $trips): string
    {
        return number_format($trips->average('rate_per_mile'), 2);
    }

    private function getTotalCostPerMileAverage(Collection $trips): string
    {
        return number_format($trips->average('cost_per_mile'), 2);
    }

    private function getTotalProfitPerMileAverage(Collection $trips): string
    {
        return number_format($trips->average('profit_per_mile'), 2);
    }
}
