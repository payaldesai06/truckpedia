<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadShipperResource extends JsonResource {
  public function toArray($request): array {
    return [
      'load_shipper_id' => $this->id ?? "",
      'shipperName' => $this->shipper_name ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'shipping_date' => $this->shipping_date ?? "",
      'shipping_end_date' => $this->shipping_end_date ?? "",
      'shipping_time' => $this->shipping_time
        ? $this->shipping_time->format(config('constant.time_format')) : "",
      'shipping_end_time' => $this->shipping_end_time
        ? $this->shipping_end_time->format(config('constant.time_format')) : "",
      'order' => $this->order ?? null,
      'shipperFreightEquipmentNumber' => $this->freight_equipment_type ?? "",
      'shipperFreightDescription' => $this->freight_description ?? ""
    ];
  }
}
