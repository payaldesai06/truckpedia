<?php

namespace App\Http\Resources\LoadRateConfirmation;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadRateConfirmationResource extends JsonResource {
  public function toArray($request) {
    return [
      'load_rate_confirmation_id' => $this->id,
      'file_name' => $this->file_name,
      'file_name_alias' => $this->file_name_alias,
      'file_url' => getFile(
        config('constant.s3.load_file'),
        $this->file_name,
        $this->original_file_name
      ) ?? "",
      'originalFileName' => !empty($this->original_file_name) ? $this->original_file_name : null,
    ];
  }
}
