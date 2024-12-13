<?php

namespace App\Http\Resources\LoadDetail;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadDetailLocationResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'latitude' => $this['latitude'],
      'longitude' => $this['longitude'],
      'formatted_location' => $this['formattedLocation'] ?? 'n/a',
      'error' => $this['error'],
    ];
  }
}
