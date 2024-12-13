<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminChangeProfileResource extends JsonResource
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
            $this->merge(new AdminResource($this)),
            'admin_details' => [
                $this->merge(new AdminDetailResource($this->adminDetail)),
            ],
        ];
    }
}
