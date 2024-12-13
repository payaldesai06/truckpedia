<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverFileResource extends JsonResource
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
            'driver_file_id' => $this->id ?? "",
            'driver_id' => $this->user_id ?? "",
            'file_type' => $this->file_type ?? "",
            'filename' => $this->filename ?? "",
            'filename_url' => getImage($this->filename, config('constant.s3.driver_file')) ?? "",
        ];
    }
}
