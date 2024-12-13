<?php

namespace App\Http\Resources\Truck;

use Illuminate\Http\Resources\Json\JsonResource;

class TruckResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'truck_id' => $this->id ?? "",
            'user_id' => $this->user_id ?? "",
            'company_id' => $this->company_id ?? "",
            'truck_number' => $this->number ?? "",
            'truck_type' => $this->type ?? "",
            'licence_plate' => $this->licence_plate ?? "",
            'licence_plate_expiry' => !empty($this->licence_plate_expiry) ? $this->getFormattedDate($this->licence_plate_expiry) : "",
            'inspection_expiry' => !empty($this->inspection_expiry) ? $this->getFormattedDate($this->inspection_expiry) : "",
            'status' => $this->status ?? "",
            'ownership' => $this->ownership ?? "",
            'truck_vin' => $this->truck_vin ?? '',
            'make' => $this->make ?? '',
            'year' => $this->year ?? '',
        ];
    }

    private function getFormattedDate($date)
    {
        return date(config('constant.date_format'), strtotime($date));
    }
}
