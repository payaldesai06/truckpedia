<?php

namespace App\Http\Resources\Tag;

use Illuminate\Http\Resources\Json\JsonResource;

class TagNameOnlyResource extends JsonResource {

  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'tagId' => $this->id ?? '',
      'tagBusinessName' => $this->business_name ?? ''
    ];
  }
}
