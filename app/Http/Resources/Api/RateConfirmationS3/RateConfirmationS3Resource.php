<?php

namespace App\Http\Resources\Api\RateConfirmationS3;

use Illuminate\Http\Resources\Json\JsonResource;

class RateConfirmationS3Resource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'file_name' => $this->file_name,
            'file_url' => getImage($this->file_name, config('constant.s3.load_file')),
        ];
    }
}
