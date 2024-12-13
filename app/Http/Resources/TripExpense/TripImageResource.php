<?php

namespace App\Http\Resources\TripExpense;

use Illuminate\Http\Resources\Json\JsonResource;

class TripImageResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'image_name' => $this->image_name
        ];
    }
}
