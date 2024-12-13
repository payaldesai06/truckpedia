<?php

namespace App\Http\Resources\Reports\DriverPaymentReport;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverPaymentReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'driver_name' => $this->driver->driverDetail->name ?? '',
            'trip_number' => $this->trip_id ?? '',
            'driver_pay_types' => !empty($this->driver_pay_types) ? ucwords(str_replace('_', ' ', $this->driver_pay_types)) : '',
            'amount' => $this->total_payment ?? 0,
        ];
    }
}
