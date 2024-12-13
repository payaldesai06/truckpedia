<?php

namespace App\Http\Resources\Truck;

use Illuminate\Http\Resources\Json\JsonResource;

class FolderResource extends JsonResource {
  public function toArray($request): array {
    return [
      'id' => $this->id ?? '',
      'folderName' =>  $this->folder_name ?? '',
    ];
  }
}
