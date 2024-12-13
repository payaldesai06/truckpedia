<?php

namespace App\Http\Resources\Load;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadLogResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'type' => $this->type ? config('constant.logs.load')[$this->type] : null,
      'modifiedByUser' => $this->modifiedByUser ?
        [
          'id' => $this->modifiedByUser->id,
          'name' => userFullName($this->modifiedByUser),
          'role' => $this->modifiedByUser->role
        ] : null,
      'utcTime' => $this->created_at ?? null,
      'truck' => $this->truck ?
        [
          'id' => $this->truck->id,
          'number' => $this->truck->number ?? null
        ] : null,
      'trailer' => $this->trailer ?
        [
          'id' => $this->trailer->id,
          'number' => $this->trailer->number ?? null
        ] : null,
    ];
  }
}
