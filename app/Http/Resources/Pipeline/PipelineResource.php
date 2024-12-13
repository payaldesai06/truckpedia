<?php

namespace App\Http\Resources\Pipeline;

use App\Http\Resources\Load\LoadResource;
use App\Http\Resources\Truck\TruckResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PipelineResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            $this->merge(new LoadResource($this)),
//            'truck' => new TruckResource($this->getTruck())
        ];
    }

    /*
     * Get Truck where is Final mile is 1
     */
    private function getTruck()
    {
        return $this->loadDrivers->first()->truck;
    }
}
