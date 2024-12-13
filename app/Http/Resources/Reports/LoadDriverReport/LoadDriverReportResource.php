<?php

namespace App\Http\Resources\Reports\LoadDriverReport;

use App\Services\DriverPayHelper;
use Exception;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadDriverReportResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   * @throws Exception
   */
  public function toArray($request): array {
    $driverPayAmount = 0;
    $loadDrivers = $this->loadDrivers->pluck('driverAsUsers')->flatten()
      ->pluck('driverDetail') ?? [];

    // Sometimes truckers encounter weird situation that a driver shows up twice.
    // For example driver first handover then do the load again.
    $loadDrivers = $loadDrivers->unique('user_id');

    if (count($loadDrivers) && request()->has('driverId')) {
      $loadDrivers = $loadDrivers->where('user_id', request('driverId'));
    }

    if (!$loadDrivers->isEmpty()) {
      foreach ($loadDrivers as $loadDriver) {
        $driverPayAmount += (new DriverPayHelper())->calculateLoadDriverPaymentFromPercentage($this, $loadDriver);
      }
    }

    return [
      "driver_name" => implode(', ', $loadDrivers->pluck('name')->toArray()) ?? "",
      "load_number" => $this->load_unique_id ?? "",
      "reference_id" => $this->refrence_id ?? "",
      "customer_name" => $this->customer->company_name ?? "",
      "ship_date" => !empty($this->loadShippers) ? ($this->loadShippers->first()->shipping_date ?? "") : "",
      "delivery_date" => !empty($this->loadReceivers) ? ($this->loadReceivers->last()->delivery_date ?? "") : "",
      "freight_weight" => !empty($this->loadShippers) ? ($this->loadShippers->sum('freight_weight') ?? "") : "",
      "freight_qty" => !empty($this->loadShippers) ? ($this->loadShippers->sum('freight_qty') ?? "") : "",
      "total_amount" => $this->total_amount ?? "",
      "driver_pay" => $driverPayAmount
    ];
  }
}
