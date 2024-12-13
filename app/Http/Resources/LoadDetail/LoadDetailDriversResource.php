<?php

namespace App\Http\Resources\LoadDetail;

use App\Models\DriverDetail;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailDriversResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->merge(
            LoadDetailDriverResource::collection(DriverDetail::whereIn('user_id', explode(",", $this->driver_ids))->get()),
        );
    }
}
