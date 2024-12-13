<?php

namespace App\Http\Resources\Load\AvailableLegLoads;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AvailableLegLoadsMainResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      "legName" => $this['legName'] ?? "",
      "loads" => AvailableLegLoadDetailResource::collection($this['loads'] ?? [])
    ];
  }
}
