<?php

namespace App\Http\Resources\Dashboard\TripRevenue;

use Illuminate\Http\Resources\Json\JsonResource;

class TripRevenueResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'name' => $this->name,
            'data' => $this->data,
        ];
    }
}
