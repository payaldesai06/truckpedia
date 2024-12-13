<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverCurrentTruckAndTrailerResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'truck' => [
                'id' => $this->currentTruck->id ?? '',
                'number' => $this->currentTruck->number ?? '',
            ],
            'trailer' => [
                'id' => $this->currentTrailer->id ?? '',
                'number' => $this->currentTrailer->number ?? ''
            ]
        ];
    }
}
