<?php

namespace App\Http\Resources\Trip;

use Illuminate\Http\Resources\Json\JsonResource;

class TripPlaidLoadResource extends JsonResource
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
            'load_id' => $this->id,
            'load_unique_id' => $this->load_unique_id,
            'load_shippers' => $this->loadShippers->first()->city, //load first shipper city name
            'load_receivers' => $this->loadReceivers->first()->city, //load last receiver city name
        ];
    }
}
