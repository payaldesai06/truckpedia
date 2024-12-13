<?php

namespace App\Http\Resources\Customization;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomizationResource extends JsonResource {
  public function toArray($request): array {
    return [
      'show_driver_truck_on_pipeline' => $this->show_driver_truck_on_pipeline ?? '',
      'show_qbd_invoice_sync_status_on_list' => $this->show_qbd_invoice_sync_status_on_list ?? '',
      'show_driver_location_on_calendar_map' => $this->show_driver_location_on_calendar_map ?? '',
      'driver_app_variation' => $this->driver_app_variation ?? null,
      'showDriverPayOnMobileApp' => !empty($this->customizations['dpm']) ?
        $this->customizations['dpm'] : false
    ];
  }
}
