<?php

namespace App\Http\Resources\LoadDetail;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailReceiversResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function toArray($request) {
    return [
      'receiver_id' => $this->id ?? '',
      'receiver_name' => $this->receiver_name ?? '',
      'delivery_date' => $this->delivery_date ?? '',
      'delivery_end_date' => $this->delivery_end_date ?? "",
      'delivery_time' => $this->delivery_time ? $this->delivery_time->format('H:i:s') : '',
      'delivery_end_time' => $this->delivery_end_time ? $this->delivery_end_time->format('H:i:s') : "",
      'city' => $this->city ?? '',
      'state' => $this->state ?? '',
      'latitude' => $this->latitude ?? '',
      'longitude' => $this->longitude ?? '',
    ];
  }
}
