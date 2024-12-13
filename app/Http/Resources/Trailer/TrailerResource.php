<?php

namespace App\Http\Resources\Trailer;

use Illuminate\Http\Resources\Json\JsonResource;

class TrailerResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'trailer_id' => $this->id ?? "",
            'user_id' => $this->user_id ?? "",
            'company_id' => $this->company_id ?? "",
            'trailer_number' => $this->number ?? "",
            'trailer_type' => $this->type ?? "",
            'licence_plate' => $this->licence_plate ?? "",
            'licence_plate_expiry' => !empty($this->licence_plate_expiry) ? $this->getFormattedDate($this->licence_plate_expiry) : "",
            'inspection_expiry' => !empty($this->inspection_expiry) ? $this->getFormattedDate($this->inspection_expiry) : "",
            'status' => $this->status ?? "",
            'ownership' => $this->ownership ?? "",
            'vin' => $this->vin ?? '',
            'make' => $this->make ?? '',
            'year' => $this->year ?? '',
        ];
    }

    private function getFormattedDate($date): string
    {
        return date(config('constant.date_format'), strtotime($date));
    }
}
