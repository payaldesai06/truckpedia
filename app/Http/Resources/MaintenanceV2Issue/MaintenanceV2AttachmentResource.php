<?php

namespace App\Http\Resources\MaintenanceV2Issue;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MaintenanceV2AttachmentResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'fileName' => $this->filename ?? null,
      'originalFileName' => $this->original_filename ?? "",
      'url' => getImage($this->filename, config('constant.s3.maintenanceV2.issue')) ?? ""
    ];
  }
}
