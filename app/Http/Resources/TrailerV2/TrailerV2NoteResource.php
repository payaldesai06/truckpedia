<?php

namespace App\Http\Resources\TrailerV2;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class TrailerV2NoteResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'note' => $this->note ?? null,
      'utcUpdatedAt' => Carbon::parse($this->updated_at)->format('Y-m-d H:i:s') ?? null
    ];
  }
}
