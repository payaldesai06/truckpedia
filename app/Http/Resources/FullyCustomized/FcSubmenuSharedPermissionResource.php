<?php

namespace App\Http\Resources\FullyCustomized;

use Illuminate\Http\Resources\Json\JsonResource;

class FcSubmenuSharedPermissionResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
        'userId' => $this->user_id ?? '',
        'accessLevel' => $this->access_level ? config('constant.fcSharedPermissions.accessLevel')[$this->access_level] : '',
    ];
  }
}
