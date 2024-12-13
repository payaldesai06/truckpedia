<?php

namespace App\Http\Resources\Reports\EquipmentListReport;

use Illuminate\Http\Resources\Json\JsonResource;

class EquipmentListReportResource extends JsonResource
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
            'number' => $this->number,
            'type' => $this->type,
            'licence_plate' => $this->licence_plate,
            'licence_plate_expiry' => $this->licence_plate_expiry->format(config('constant.date_format')),
            'inspection_expiry' => $this->inspection_expiry->format(config('constant.date_format')),
            'status' => $this->status,
            'ownership' => $this->ownership
        ];
    }
}
