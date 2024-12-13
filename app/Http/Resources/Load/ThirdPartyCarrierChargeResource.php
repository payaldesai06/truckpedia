<?php

namespace App\Http\Resources\Load;

use App\Models\AccessorialDeduction;
use App\Models\AccessorialFee;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class ThirdPartyCarrierChargeResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? "",
      'load_id' => $this->load_id ?? "",
      'hauling_fee' => $this->hauling_fee ?? null,
      'fuel_surcharge' => $this->fuel_surcharge ?? null,
      'hauling_fee_rate' => $this->hauling_fee_rate ?? null,
      'fuel_surcharge_rate' => $this->fuel_surcharge_rate ?? null,
      'hauling_fee_type' => $this->hauling_fee_type ? config('constant.haulingFeeType')[$this->hauling_fee_type] : null,
      'haulingFeeQty' => $this->hauling_fee_qty ?? null,
      'fuel_surcharge_type' => $this->fuel_surcharge_type ? config('constant.fuelSurchargeType')[$this->fuel_surcharge_type] : null,
      'accessorial_fee' => $this->getAccessorialName(json_decode($this->accessorial_fee), 'accessorial_fee') ?? [],
      'accessorial_deduction' => $this->getAccessorialName(json_decode($this->accessorial_deduction), 'accessorial_deduction') ?? [],
    ];
  }

  public function getAccessorialName($accessorial, $key): Collection {
    $accessorialCollection = collect($accessorial);

    return $accessorialCollection->map(function ($accessorial) use ($key) {

      if ($key == "accessorial_fee") {
        $data = AccessorialFee::where('id', $accessorial->id)->first();
      } else {
        $data = AccessorialDeduction::where('id', $accessorial->id)->first();
      }
      if (empty($data)) {
        return null;
      }

      return [
        'id' => $accessorial->id,
        'rate' => $accessorial->rate,
        'name' => $data->name,
      ];
    })->filter();
  }
}
