<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadDriverResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    if ($this->external_trailer_number) {
      $trailer = ["trailer_number" => $this->external_trailer_number];
    } else if ($this->trailer_id) {
      $trailer = new PipelineLoadDriverTrailerResource($this->trailer);
    } else {
      $trailer = null;
    }
    return [
      'load_driver_id' => $this->id ?? "",
      'driver_details' => PipelineDriverDetailResource::collection($this->driverAsUsers) ?? "",
      'truck_id' => $this->truck_id ?? "",
      'truck' => $this->truck_id ? new PipelineLoadDriverTruckResource($this->truck) : null,
      'trailer_id' => $this->trailer_id ?? "",
      'trailer' => $trailer,
    ];
  }
}
