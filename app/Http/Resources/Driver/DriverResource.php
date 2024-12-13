<?php

namespace App\Http\Resources\Driver;

use App\Http\Resources\Admin\AdminResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverResource extends JsonResource
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
            'driver_id' => $this->id ?? "",
            $this->merge(new AdminResource($this)),
            'driver_details' =>  [
                $this->merge(new DriverDetailResource($this->driverDetail)),
            ],
            'driver_files' => DriverFileResource::collection($this->driverFiles) ?? "",
        ];
    }
}
