<?php

namespace App\Http\Resources\Tracking;

use Illuminate\Http\Resources\Json\JsonResource;

class ShareImageResource extends JsonResource
{
    protected $image;

    public function __construct($image)
    {
        parent::__construct($image);

        $this->image = $image;
    }

    public function toArray($request): array
    {
        return [
            'image_url' => $this->image
        ];
    }
}
