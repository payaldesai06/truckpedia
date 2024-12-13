<?php

namespace App\Http\Resources\Safety;

use Illuminate\Http\Resources\Json\JsonResource;

class IncidentEmailResource extends JsonResource {

  /**
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'emailId' => $this->id ?? null,
      'type' => !empty($this->type) ?
        config('constant.incident.email.type')[$this->type] : null,
      'to' => !empty($this->to) ? explode(',', $this->to) :  null,
      'cc' => !empty($this->cc) ? explode(',', $this->cc) :  null,
      'bcc' => !empty($this->bcc) ? explode(',', $this->bcc) :  null,
      'fromName' => $this->fromName ?? null,
      'from' => $this->from ?? null,
      'replyTo' => !empty($this->replyTo) ? explode(',', $this->replyTo) : null,
      'subject' => $this->subject ?? null,
      'content' => $this->content ?? null,
      'createdAt' =>  !empty($this->created_at) ?
        $this->created_at->format(config('constant.date_time_format')) : null,
    ];
  }
}
