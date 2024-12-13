<?php

namespace App\Http\Resources\FullyCustomized;

use Illuminate\Http\Resources\Json\JsonResource;

class FcCustomFieldSelectOptionResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'optionName' => $this->name,
      'optionId' => $this->id,
      'color' => $this->color,
    ];
  }
}
