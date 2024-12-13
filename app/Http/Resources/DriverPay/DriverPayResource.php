<?php

namespace App\Http\Resources\DriverPay;

use App\Http\Resources\Driver\DriverResource;
use App\Http\Resources\Load\LoadResource;
use App\Http\Resources\Trip\TripResource;
use App\Http\Resources\TripExpense\TripExpenseResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverPayResource extends JsonResource
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
            $this->merge(new TripResource($this)),
            // 'trip_expenses_count' => $this->trip_expenses_count,
            // 'trip_expenses' => TripExpenseResource::collection($this->tripExpenses),
            // 'drivers' => DriverResource::collection(User::whereIn('id', explode(",", $this->driver_ids))->get()) ?? "",
        ];
    }
}
