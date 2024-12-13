<?php

namespace App\Http\Resources\LoadDetail;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailMainResource extends JsonResource
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
            'load_id' => $this->id ?? '',
            'load_unique_id' => $this->load_unique_id ?? '',
            'load_reference' => $this->refrence_id ?? '',
            'load_status' => $this->status ?? '',
            'is_private' => $this->is_private ? true : false
        ];
    }
}
