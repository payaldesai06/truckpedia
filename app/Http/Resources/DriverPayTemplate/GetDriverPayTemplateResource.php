<?php

namespace App\Http\Resources\DriverPayTemplate;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GetDriverPayTemplateResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'name' => $this->name ?? null
    ];
  }
}
