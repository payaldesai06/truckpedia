<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverDetailResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'driver_detail_id' => $this->id ?? "",
            'driver_id' => $this->user_id ?? "",
            'owner_id' => $this->owner_id ?? "",
            'type' => $this->type ?? "",
            'name' => $this->name ?? "",
            'phone_number' => $this->phone_number ?? "",
            'mailing_address' => $this->mailing_address ?? "",
            'driving_license' => $this->driving_license ?? "",
            'issue_state' => $this->issue_state ?? "",
            'medical_expire_date' => $this->medical_expire_date ?? "",
            'driving_license_expire_date' => $this->driving_license_expire_date ?? "",
            'contract_start_date' => $this->contract_start_date ?? "",
            'contract_end_date' => $this->contract_end_date ?? "",
            'driver_pay_types' => $this->driver_pay_types ?? "",
            'per_mail_charges' => $this->per_mail_charges ?? "",
            'pay_per_stop_rate' => $this->pay_per_stop_rate ?? "",
            'pay_per_stop_start_after' => $this->pay_per_stop_start_after ?? "",
            'detention_rate' => $this->detention_rate ?? "",
            'detention_start_after' => $this->detention_start_after ?? "",
            'layover_rate' => $this->layover_rate ?? "",
            'layover_start_after' => $this->layover_start_after ?? "",
            'hourly_rate' => $this->hourly_rate ?? "",
            'load_pay_percentage' => $this->load_pay_percentage ?? "",
            'load_pay_percentage_of' => $this->load_pay_percentage_of ?? "",
            'latitude' => $this->latitude ?? "",
            'longitude' => $this->longitude ?? "",
            'current_truck_id' => $this->current_truck_id ?? '',
            'current_trailer_id' => $this->current_trailer_id ?? '',
        ];
    }
}
