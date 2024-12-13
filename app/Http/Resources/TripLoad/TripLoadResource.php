<?php

namespace App\Http\Resources\TripLoad;

use App\Http\Resources\Load\LoadMainResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TripLoadResource extends JsonResource
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
            $this->merge(new LoadMainResource($this)),
        ];
    }
}
