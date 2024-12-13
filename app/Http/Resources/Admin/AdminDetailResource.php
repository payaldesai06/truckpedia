<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminDetailResource extends JsonResource
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
            // 'admin_details' => [
            'admin_details_id' => $this->id ?? "",
            'first_name' => $this->first_name ?? "",
            'last_name' => $this->last_name ?? "",
            'profile_image_url' => getImage($this->profile_image, config('constant.s3.admin_profile')) ?? "",
            'profile_image' => $this->profile_image ?? "",
            // ]
        ];
    }
}
