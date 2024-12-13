<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class LoadMultiPurposeStopsResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'multiPurposeStopId' => $this->id ?? null,
      'loadId' => $this->load_id ?? null,
      'stopType' => !empty($this->type) ? config('constant.load.multiPurposeStopsType')[$this->type] : '',
      'order' => $this->order ?? null,
      'name' => $this->name ?? '',
      'address' => $this->address ?? '',
      'city' => $this->city ?? '',
      'state' => $this->state ?? '',
      'zipCode' => $this->zip_code ?? '',
      'latitude' => $this->latitude ?? '',
      'longitude' => $this->longitude ?? '',
      'date' => $this->date ?? '',
      'endDate' => $this->end_date ?? '',
      'time' => !empty($this->time) ? Carbon::parse($this->time)
        ->format(config('constant.time_format')) : '',
      'endTime' => !empty($this->end_time) ? Carbon::parse($this->end_time)
        ->format(config('constant.time_format')) : '',
      'contactPerson' => $this->contact_person ?? '',
      'contactNumber' => $this->contact_number ?? '',
      'notes' => $this->notes ?? '',
      'dropTrailerType' => !empty($this->drop_trailer_type)
        ? config('constant.load.dropHookTrailerType')[$this->drop_trailer_type] : '',
      'dropTrailerId' => $this->drop_trailer_id ?? '',
      'hookTrailerType' => !empty($this->hook_trailer_type)
        ? config('constant.load.dropHookTrailerType')[$this->hook_trailer_type] : '',
      'hookTrailerId' => $this->hook_trailer_id ?? '',
      'segmentDistance' => $this->segment_distance ?? null,
      'containerHere' => $this->container_here ? true : false,
    ];
  }
}
