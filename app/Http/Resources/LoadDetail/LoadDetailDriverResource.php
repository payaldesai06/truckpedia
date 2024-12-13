<?php

namespace App\Http\Resources\LoadDetail;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailDriverResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'driver_id' => $this->id,
            'name' => $this->name ?? '',
            'phone_number' => $this->phone_number ?? '',
            // For outsiders to see driver location via the shared link.
            'latitude' => $this->latitude ? floatval($this->latitude) : null,
            'longitude' => $this->longitude ? floatval($this->longitude) : null,
        ];
    }
}
