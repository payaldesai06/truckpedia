<?php

namespace App\Http\Resources\ExternalRouting;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PcMilerResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'apiKey' => $this->api_key ?? null,
      'dataVersion' => $this->data_version ?? null,
    ];
  }
}
