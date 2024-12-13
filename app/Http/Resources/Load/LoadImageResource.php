<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadImageResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'load_image_id' => $this->id ?? "",
      'image_name' => $this->image_name ?? "",
      'image_url' => getFile(
        config('constant.s3.load_file'),
        $this->image_name,
        $this->original_file_name
      ) ?? "",
      'image_alias' => $this->image_alias ?? "",
      'purpose' => $this->purpose ?? "",
      // 'odometer_reading' => $this->odometer_reading ?? "",
      'originalFileName' => !empty($this->original_file_name) ? $this->original_file_name : null,
    ];
  }
}
