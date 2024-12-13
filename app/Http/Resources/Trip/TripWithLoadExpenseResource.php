<?php

namespace App\Http\Resources\Trip;

use App\Http\Resources\Driver\DriverResource;
use App\Http\Resources\Load\LoadwithFirstResiverShipperResource;
use App\Http\Resources\TripExpense\TripExpenseResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TripWithLoadExpenseResource extends JsonResource
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
            $this->merge(new TripMainResource($this)),
            'tripExpenses' => TripExpenseResource::collection($this->tripExpenses) ?? "",
            'driver_one' => new DriverResource($this->driverOne) ?? "",
            'driver_two' => new DriverResource($this->driverTwo) ?? "",
            'loads' => LoadwithFirstResiverShipperResource::collection($this->loads) ?? "",
        ];
    }
}
