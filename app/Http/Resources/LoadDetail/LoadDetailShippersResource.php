<?php

namespace App\Http\Resources\LoadDetail;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailShippersResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function toArray($request) {
    return [
      'shipper_id' => $this->id ?? '',
      'shipper_name' => $this->shipper_name ?? '',
      'shipping_date' => $this->shipping_date ?? '',
      'shipping_end_date' => $this->shipping_end_date ?? "",
      'shipping_time' => $this->shipping_time ? $this->shipping_time->format('H:i:s') : '',
      'shipping_end_time' => $this->shipping_end_time ? $this->shipping_end_time->format('H:i:s') : "",
      'city' => $this->city ?? '',
      'state' => $this->state ?? '',
      'latitude' => $this->latitude ?? '',
      'longitude' => $this->longitude ?? '',
    ];
  }
}
