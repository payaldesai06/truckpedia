<?php

namespace App\Http\Resources\Load\PipelineList;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineListLoadReceiverResource extends JsonResource {
  public function toArray($request): array {
    return [
      'load_receiver_id' => $this->id ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'delivery_date' => $this->delivery_date ?? "",
      'delivery_end_date' => $this->delivery_end_date ?? "",
      'delivery_time' => $this->delivery_time ? $this->delivery_time->format('H:i') : "",
      'delivery_end_time' => $this->delivery_end_time ? $this->delivery_end_time->format('H:i') : "",
      'order' => $this->order ?? null
    ];
  }
}
