<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadReceiverResource extends JsonResource {
  public function toArray($request): array {
    return [
      'load_receiver_id' => $this->id ?? "",
      'load_id' => $this->load_id ?? "",
      'receiver_name' => $this->receiver_name ?? "",
      'address' => $this->address ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'zip_code' => $this->zip_code ?? '',
      'latitude' => $this->latitude ?? "",
      'longitude' => $this->longitude ?? "",
      'contact_person' => $this->contact_person ?? "",
      'contact_number' => $this->contact_number ?? "",
      'receiver_reference' => $this->receiver_reference ?? "", //receiver_reference is a delivery number from moblie display
      'delivery_date' => $this->delivery_date ?? "",
      'delivery_end_date' => $this->delivery_end_date ?? "",
      'delivery_time' => $this->delivery_time ? $this->delivery_time->format('H:i') : "",
      'delivery_end_time' => $this->delivery_end_time ? $this->delivery_end_time->format('H:i') : "",
      'receiver_note' => $this->receiver_note ?? '',
      'arrived_local_datetime' => $this->arrived_local_datetime ?? '',
      'arrived_latitude' => $this->arrived_latitude ?? '',
      'arrived_longitude' => $this->arrived_longitude ?? '',
      'unloaded_local_datetime' => $this->unloaded_local_datetime ?? '',
      'unloaded_latitude' => $this->unloaded_latitude ?? '',
      'unloaded_longitude' => $this->unloaded_longitude ?? '',
      'order' => $this->order ?? null,
      'stopType' => 'receiver',
      'dropTrailerType' => !empty($this->drop_trailer_type)
        ? config('constant.load.dropHookTrailerType')[$this->drop_trailer_type] : '',
      'dropTrailerId' => $this->drop_trailer_id ?? '',
      'hookTrailerType' => !empty($this->hook_trailer_type)
        ? config('constant.load.dropHookTrailerType')[$this->hook_trailer_type] : '',
      'hookTrailerId' => $this->hook_trailer_id ?? '',
      'containerHere' => $this->container_here ? true : false,
    ];
  }
}
