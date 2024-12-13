<?php

namespace App\Http\Resources\Load;

use App\Http\Resources\AccessorialDeduction\AccessorialDeductionResource;
use App\Http\Resources\AccessorialFee\AccessorialFeeResource;
use App\Models\AccessorialDeduction;
use App\Models\AccessorialFee;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadChargeResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id' => $this->id ?? "",
            'load_id' => $this->load_id ?? "",
            'hauling_fees' => $this->hauling_fees ?? "",
            'fuel_surcharge' => $this->fuel_surcharge ?? "",
            'hauling_fees_rate' => $this->hauling_fees_rate ?? "",
            'fuel_surcharge_rate' => $this->fuel_surcharge_rate ?? "",
            'hauling_fees_type' => $this->hauling_fees_type ?? "",
            'haulingFeeQty' => $this->hauling_fee_qty ?? null,
            'fuel_surcharge_type' => $this->fuel_surcharge_type ?? "",
            'accessorial_fee' => $this->getAccessorialName(json_decode($this->accessorial_fee), 'accessorial_fee') ?? "",
            'accessorial_deduction' => $this->getAccessorialName(json_decode($this->accessorial_deduction), 'accessorial_deduction') ?? "",
            'fuelSurchargeFormula' => $this->fuel_surcharge_formula ?? null,
            'fuelSurchargeV1' => $this->fuel_surcharge_v1 ?? null,
            'fuelSurchargeV2' => $this->fuel_surcharge_v2 ?? null,
            'fuelSurchargeV3' => $this->fuel_surcharge_v3 ?? null,
        ];
    }
    public function getAccessorialName($accessorial, $key) {
        $accessorialCollection = collect($accessorial);

        return $accessorialCollection->map(function ($accessorial) use ($key) {

            if ($key == "accessorial_fee") {
                $data = AccessorialFee::where('id', $accessorial->id)->first();
            } else {
                $data = AccessorialDeduction::where('id', $accessorial->id)->first();
            }

            return [
                'id' => $accessorial->id,
                'rate' => $accessorial->rate,
                'name' => $data->name,
            ];
        });
    }
}
