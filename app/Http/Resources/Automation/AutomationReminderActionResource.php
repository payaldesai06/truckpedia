<?php

namespace App\Http\Resources\Automation;

use Illuminate\Http\Resources\Json\JsonResource;

class AutomationReminderActionResource extends JsonResource {

  public function toArray($request): array {
    $accessDetails = json_decode($this->action_details) ?? null;
    return [
      'actionId' => $this->id ?? null,
      'actionType' => config('constant.automation.action.actionType')[$this->action] ?? null,
      'to' => !empty($accessDetails) ? $accessDetails->to : [],
      'cc' => !empty($accessDetails) ? $accessDetails->cc : [],
      'bcc' => !empty($accessDetails) ? $accessDetails->bcc : [],
      'fromName' => !empty($accessDetails) ? $accessDetails->fromName : '',
      'replyTo' => !empty($accessDetails) ? $accessDetails->replyTo : '',
      'subject' => !empty($accessDetails) ? $accessDetails->subject : '',
      'content' => !empty($accessDetails) ? $accessDetails->content : ''
    ];
  }
}
