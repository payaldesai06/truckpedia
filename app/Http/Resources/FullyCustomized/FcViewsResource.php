<?php

namespace App\Http\Resources\FullyCustomized;

use Illuminate\Http\Resources\Json\JsonResource;

class FcViewsResource extends JsonResource {

  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'name' => $this->name ?? '',
      'type' => $this->ui_type ? config('constant.fcViews.type')[$this->ui_type] : '',
    ];
  }
}
