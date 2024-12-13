<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCustomizationResource extends JsonResource {

  public function toArray($request): array {
    $ret = [];
    $dispatchPipelineId = array_search(
      'dispatchPipeline',
      config('constant.userCustomizationModule')
    );
    $dispatchListId = array_search(
      'dispatchList',
      config('constant.userCustomizationModule')
    );
    $safetyIncidentId = array_search(
      'safetyIncidents',
      config('constant.userCustomizationModule')
    );
    $dispatchCalendarId = array_search(
      'dispatchCalendar',
      config('constant.userCustomizationModule')
    );
    $loadPipeline = $this->where('applied_module', $dispatchPipelineId)->first();
    $ret['loadPipeline'] = [
      'show' => $loadPipeline->show ?? null,
      'filters' => $loadPipeline->filters ?? null,
    ];

    $loadList = $this->where('applied_module', $dispatchListId)->first();
    $ret['loadList'] = [
      'show' => $loadList->show ?? null,
      'filters' => $loadList->filters ?? null,
    ];

    $safetyIncidents = $this->where('applied_module', $safetyIncidentId)->first();
    $ret['safetyIncidents'] = $safetyIncidents->show ?? null;
    $ret['safetyIncidents']['filters'] = $safetyIncidents->filters ?? null;

    $dispatchCalendar = $this->where('applied_module', $dispatchCalendarId)->first();
    // Please note that all fields within show are under show field.
    // But DB column shall not be saved as {show:{...}}
    $ret['dispatchCalendar']['show'] = $dispatchCalendar->show ?? null;
    $ret['dispatchCalendar']['filters'] = $dispatchCalendar->filters ?? null;
    return $ret;
  }
}
