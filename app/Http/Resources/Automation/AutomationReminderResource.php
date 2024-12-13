<?php

namespace App\Http\Resources\Automation;

use Illuminate\Http\Resources\Json\JsonResource;

class AutomationReminderResource extends JsonResource {

  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'category' => config('constant.automation.reminder.category')[$this->category] ?? null,
      'freqType' => config('constant.automation.reminder.freqType')[$this->freq_type] ?? null,
      'freqInterval' => $this->freq_interval ?? null,
      'inAdvance' => $this->in_advance ?? null,
      'assets' => AutomationReminderAssetResource::collection($this->assets),
      'actions' => AutomationReminderActionResource::collection($this->actions),
    ];
  }
}
