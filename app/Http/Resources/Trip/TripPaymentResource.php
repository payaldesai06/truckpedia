<?php

namespace App\Http\Resources\Trip;

use Illuminate\Http\Resources\Json\JsonResource;

class TripPaymentResource extends JsonResource
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

            'total_payment' => $this->total_payment ?? "0.00",
            'load_payment' => $this->load_payment ?? "0.00",
            'reimbursement' => $this->reimbursement ?? "0.00",
            // 'notes' => $this->notes ?? "",
            'detention_charge' => $this->detention_charge ?? "0.00",
            'layover_charge' => $this->layover_charge ?? "0.00",
            'stop_charge' => $this->stop_charge ?? "0.00",
            'driver_pay_types' => $this->driver_pay_types,
            'per_mile_charges' => $this->per_mile_charges ?? "0.00",
            'pay_per_stop_rate' => $this->pay_per_stop_rate ?? "0.00",
            'pay_per_stop_start_after' => $this->pay_per_stop_start_after ?? "0.00",
            'detention_rate' => $this->detention_rate ?? "0.00",
            'detention_start_after' => $this->detention_start_after ?? "0.00",
            'layover_rate' => $this->layover_rate ?? "0.00",
            'layover_start_after' => $this->layover_start_after ?? "0.00",
            'hourly_rate' => $this->hourly_rate ?? "0.00",
            'load_pay_percentage' => $this->load_pay_percentage ?? "0.00",
            'load_pay_percentage_of' => $this->load_pay_percentage_of ?? "",

            // $this->mergeWhen(
            //     ($this->driver_pay_types === config('constant.driver_pay_type.percentage')),
            //     [
            //         'load_payment' => $this->load_payment,
            //         'reimbursement' => $this->reimbursement,
            //         'notes' => $this->notes,

            //     ]
            // ),

            // $this->mergeWhen(
            //     ($this->driver_pay_types === config('constant.driver_pay_type.per_mile')),
            //     [
            //         'load_payment' => $this->load_payment,
            //         'reimbursement' => $this->reimbursement,
            //         'notes' => $this->notes,
            //         'detention_charge' => $this->detention_charge,
            //         'layover_charge' => $this->layover_charge,
            //         'stop_charge' => $this->stop_charge
            //     ]
            // ),

            // $this->mergeWhen(
            //     ($this->driver_pay_types === config('constant.driver_pay_type.hourly')),
            //     [
            //         'load_payment' => $this->load_payment,
            //         'reimbursement' => $this->reimbursement,
            //         'notes' => $this->notes,
            //     ]
            // ),

        ];
    }
}
