<?php

namespace App\Http\Resources\Safety;

use Illuminate\Http\Resources\Json\JsonResource;

class IncidentFileResource extends JsonResource {

  /**
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'fileId' => $this->id ?? null,
      'isPrivate' => !empty($this->is_private) ?
        config('constant.incident.folder.type')[$this->is_private] :
        config('constant.incident.folder.defaultType'),
      'fileLabel' => !empty($this->file_label) ?
        config('constant.incident.fileLabel')[$this->file_label] : null,
      'originalFilename' => $this->original_filename ?? null,
      'storageFilename' => $this->storage_filename ?? null,
      'storageFileUrl' => !empty($this->storage_filename) ?
        getImage($this->storage_filename, config('constant.s3.safetyIncidentFiles')) : null,
      'createdAt' =>  !empty($this->created_at) ?
        $this->created_at->format(config('constant.date_time_format')) : null,
    ];
  }
}
