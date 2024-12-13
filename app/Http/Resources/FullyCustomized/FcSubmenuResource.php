<?php

namespace App\Http\Resources\FullyCustomized;

use Illuminate\Http\Resources\Json\JsonResource;

class FcSubmenuResource extends JsonResource {

  public function toArray($request): array {
    return [
        'id' => $this->id ?? '',
        'name' => $this->name ?? '',
    ];
  }
}
