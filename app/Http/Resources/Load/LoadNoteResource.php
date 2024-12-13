<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadNoteResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'note' => $this->note ?? '',
      'utcUpdatedAt' => !empty($this->updated_at) ?
        $this->updated_at : '',
      'lastModifiedByUserName' => !empty($this->lastModifiedByUser) ?
        userFullName($this->lastModifiedByUser) : '',
    ];
  }
}
