<?php

namespace App\Http\Resources\Reports\DropTrailerReport;

use App\Http\Resources\Load\LoadDriverResource;
use App\Http\Resources\Load\LoadMainResource;
use App\Http\Resources\Load\LoadReceiverResource;
use App\Models\LoadReceiver;
use Illuminate\Http\Resources\Json\JsonResource;

class DropTrailerResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            $this->merge(new LoadMainResource($this->loadDetail)),
            'drivers' => new LoadDriverResource($this),
            'receiver' => new LoadReceiverResource($this->getReceiverWithLastDeliveryDate())
        ];
    }

    private function getReceiverWithLastDeliveryDate()
    {
        return $this->loadDetail->loadReceivers->sortByDesc('delivery_date')->first();
    }
}
