<?php

namespace App\Http\Resources\Load\PipelineList;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineListLoadShipperResource extends JsonResource {
  public function toArray($request): array {
    return [
      'load_shipper_id' => $this->id ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'shipping_date' => $this->shipping_date ?? "",
      'shipping_end_date' => $this->shipping_end_date ?? "",
      'shipping_time' => $this->shipping_time ? $this->shipping_time->format('H:i') : "",
      'shipping_end_time' => $this->shipping_end_time ? $this->shipping_end_time->format('H:i') : "",
      'order' => $this->order ?? null
    ];
  }
}
