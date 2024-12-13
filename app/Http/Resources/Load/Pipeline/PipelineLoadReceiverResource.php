<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadReceiverResource extends JsonResource {

  public function toArray($request): array {
    return [
      'load_receiver_id' => $this->id ?? "",
      'receiverName' => $this->receiver_name ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'delivery_date' => $this->delivery_date ?? "",
      'delivery_end_date' => $this->delivery_end_date ?? "",
      'delivery_time' => $this->delivery_time
        ? $this->delivery_time->format(config('constant.time_format')) : "",
      'delivery_end_time' => $this->delivery_end_time
        ? $this->delivery_end_time->format(config('constant.time_format')) : "",
      'order' => $this->order ?? null
    ];
  }
}
