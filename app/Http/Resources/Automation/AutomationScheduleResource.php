<?php

namespace App\Http\Resources\Automation;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class AutomationScheduleResource extends JsonResource {

  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      'freqType' => config('constant.automation.schedule.freqType')[$this->freq_type] ?? null,
      'freqInterval' => $this->freq_interval ?? null,
      'selectedDates' => !is_null($this->selected_dates) ? array_map('intval', explode(',', $this->selected_dates)) : [],
      'startDate' => $this->original_start_date ?? null,
      'startTime' => $this->original_start_time ?? null,
      'actions' => AutomationScheduleActionResource::collection($this->actions)
    ];
  }
}
