<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadLegResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? '',
      'load_id' => $this->load_id ?? '',
      'location_name' => $this->location_name ?? '',
      'address' => $this->address ?? '',
      'city' => $this->city ?? '',
      'state' => $this->state ?? '',
      'zip_code' => $this->zip_code ?? '',
      'latitude' => $this->latitude ?? '',
      'longitude' => $this->longitude ?? '',
      'date' => $this->date ?? '',
      'end_date' => $this->end_date ?? '',
      'time' => !empty($this->time) ? $this->time->format('H:i') : '',
      'end_time' => !empty($this->end_time) ? $this->end_time->format('H:i') : '',
      'contact_person' => $this->contact_person ?? '',
      'contact_number' => $this->contact_number ?? '',
      'leg_order' => $this->leg_order ?? '',
      'note' => $this->note ?? '',
      'to_arrived_local_datetime' => $this->to_arrived_local_datetime ?? '',
      'to_arrived_latitude' => $this->to_arrived_latitude ?? '',
      'to_arrived_longitude' => $this->to_arrived_longitude ?? '',
      'to_departed_local_datetime' => $this->to_departed_local_datetime ?? '',
      'to_departed_latitude' => $this->to_departed_latitude ?? '',
      'to_departed_longitude' => $this->to_departed_longitude ?? '',
      'from_arrived_local_datetime' => $this->from_arrived_local_datetime ?? '',
      'from_arrived_latitude' => $this->from_arrived_latitude ?? '',
      'from_arrived_longitude' => $this->from_arrived_longitude ?? '',
      'from_departed_local_datetime' => $this->from_departed_local_datetime ?? '',
      'from_departed_latitude' => $this->from_departed_latitude ?? '',
      'from_departed_longitude' => $this->from_departed_longitude ?? '',
      'order' => $this->order ?? null,
      'stopType' => 'leg',
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
