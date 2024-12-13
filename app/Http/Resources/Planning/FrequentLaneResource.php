<?php

namespace App\Http\Resources\Planning;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FrequentLaneResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'origin' => [
        'streetAddress' => $this->origin_street_address,
        'city' => $this->origin_city,
        'state' => $this->origin_state
      ],
      'destination' => [
        'streetAddress' => $this->dest_street_address,
        'city' => $this->dest_city,
        'state' => $this->dest_state
      ]
    ];
  }
}
