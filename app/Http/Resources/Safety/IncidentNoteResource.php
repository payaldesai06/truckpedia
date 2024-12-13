<?php

namespace App\Http\Resources\Safety;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class IncidentNoteResource extends JsonResource {

  /**
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'noteId' => $this->id,
      'localDate' => $this->local_date ?? null,
      'localTime' => $this->local_time ? Carbon::parse($this->local_time)
        ->format(config('constant.time_format')) : null,
      'contactType' => !empty($this->contact_type) ?
        config('constant.incident.note.contactType')[$this->contact_type] : null,
      'name' => $this->name ?? null,
      'phone' => $this->phone ?? null,
      'email' => $this->email ?? null,
      'note' => $this->note ?? null,
    ];
  }
}
