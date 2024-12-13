<?php

namespace App\Http\Resources\Load\PipelineList;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineListLoadDriverResource extends JsonResource
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
            'load_driver_id' => $this->id ?? "",
            'driver_details' => PipelineListDriverDetailResource::collection($this->driverAsUsers) ?? "",
            'truck_id' => $this->truck_id ?? "",
            'trailer_id' => $this->trailer_id ?? "",
            'truck' => [
                'truck_id' => $this->truck_id ?? "",
                'truck_number' => $this->truck->number ?? "",
            ],
            'trailer' => [
                'trailer_id' => $this->trailer_id ?? null,
                'trailer_number' => $this->trailer ? $this->trailer->number : ($this->external_trailer_number ?? null),
            ],
        ];
    }
}
