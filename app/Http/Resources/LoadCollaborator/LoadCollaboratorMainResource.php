<?php

namespace App\Http\Resources\LoadCollaborator;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadCollaboratorMainResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'load_id' => $this->load_id ?? '',
      'name' => $this->name ?? '',
      'email' => $this->email ?? '',
    ];
  }
}
