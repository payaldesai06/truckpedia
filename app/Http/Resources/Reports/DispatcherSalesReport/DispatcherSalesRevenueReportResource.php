<?php

namespace App\Http\Resources\Reports\DispatcherSalesReport;

use App\Http\Resources\Customer\CustomerResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DispatcherSalesRevenueReportResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'total_revenue' => $this->total_revenue,
            'load_total_miles' => $this->load_total_miles,
            'revenue_per_mile' => $this->revenue_per_mile,
            'number_of_loads' => $this->number_of_loads,
            'percentage_of_revenue' => $this->percentage_of_revenue,
            'customer' => new CustomerResource($this->customer)
        ];
    }
}
