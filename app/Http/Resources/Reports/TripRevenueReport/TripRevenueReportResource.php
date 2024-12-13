<?php

namespace App\Http\Resources\Reports\TripRevenueReport;

use Illuminate\Http\Resources\Json\JsonResource;

class TripRevenueReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'trip_id' => $this->id,
            'truck_numbers' => $this->truck_numbers,
            'total_miles' => $this->total_miles,
            'total_income' => $this->total_income,
            'rate_per_mile' => $this->rate_per_mile,
            'total_expenses' => $this->total_expenses,
            'cost_per_mile' => $this->cost_per_mile,
            'driver_pay' => $this->driver_pay,
            'profit_per_mile' => $this->profit_per_mile,
        ];
    }
}
