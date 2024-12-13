<?php

namespace App\Http\Resources\FullyCustomized;

use Illuminate\Http\Resources\Json\JsonResource;

class FcMenuResource extends JsonResource {

  public function toArray($request): array {
    return [
        'id' => $this->id ?? '',
        'name' => $this->name ?? '',
        'submenus' => $this->fcSubmenus ? FcSubmenuResource::collection($this->fcSubmenus) : [],
    ];
  }
}
