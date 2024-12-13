<?php

namespace App\Http\Resources\Tracking;

use App\Http\Resources\Load\LoadReceiverResource;
use App\Http\Resources\Truck\TruckResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TrackingResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'truck' => new TruckResource($this->getTruck()),
            'receiver' => new LoadReceiverResource($this->getReceiverWithLastDeliveryDate())
        ];
    }

    private function getTruck()
    {
        return $this->loadDrivers->first()->truck ?? null;
    }

    private function getReceiverWithLastDeliveryDate()
    {
        return $this->loadReceivers->sortByDesc('delivery_date')->first();
    }
}
