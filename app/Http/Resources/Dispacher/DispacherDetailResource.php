<?php

namespace App\Http\Resources\Dispacher;

use Illuminate\Http\Resources\Json\JsonResource;

class DispacherDetailResource extends JsonResource
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
            'dispacher_details_id' => $this->id ?? "",
            'first_name' => $this->first_name ?? "",
            'last_name' => $this->last_name ?? "",
            'profile_image' => getImage($this->profile_image, config('constant.s3.admin_profile')) ?? "",
            'image' => $this->profile_image ?? "",
        ];
    }
}
