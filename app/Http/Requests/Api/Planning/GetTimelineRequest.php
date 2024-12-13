<?php

namespace App\Http\Requests\Api\Planning;

use Illuminate\Foundation\Http\FormRequest;

class GetTimelineRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    $timelineFor = implode(',', config('constant.planning.timelineFor'));
    return [
      'startDate' => 'required|date_format:' . config('constant.date_format'),
      'endDate' => 'required|date_format:' . config('constant.date_format'),
      'returnData' => 'nullable',
      'returnData.loads' => 'nullable|boolean',
      'returnData.schedules' => 'nullable|boolean',
      'returnData.timeOffCalendars' => 'nullable|boolean',
      'timelineFor' => 'nullable|string|in:' . $timelineFor,
      'filters' => 'nullable',
      'filters.tagIds' => 'nullable|array',
      'filters.tagIds.*' => 'integer|distinct|exists:tags,id',
      'filters.dispatcherIds' => 'nullable|array',
      'filters.dispatcherIds.*' => 'integer|distinct|exists:users,id',
      'filters.loadStatuses' => 'nullable|array',
      'filters.loadStatuses.*' => 'string|distinct|in:' .
        implode(',', array_keys(config('constant.status.loadStatusFrontEnd')))
    ];
  }

  public function messages(): array {
    $timelineFor = implode(', ', config('constant.planning.timelineFor'));
    return [
      'returnData.loads.boolean' => 'The return data loads field must be a boolean.',
      'returnData.schedules.boolean' => 'The return data schedules field must be a boolean.',
      'returnData.timeOffCalendars.boolean' => 'The return data timeOffCalendars field must be a boolean.',
      'timelineFor.string' => 'The timelineFor field must be a string.',
      'timelineFor.in' => 'timelineFor supportes only ' . $timelineFor,
      'filters.tagIds.array' => 'The filters tagIds must be an array.',
      'filters.tagIds.*.integer' => 'The filters tagIds must be an integer.',
      'filters.tagIds.*.distinct' => 'tagId already selected.',
      'filters.tagIds.*.exists' => 'The filters tagIds must be valid.',
      'filters.dispatcherIds.array' => 'The filters dispatcherIds must be an array.',
      'filters.dispatcherIds.*.integer' => 'The filters dispatcherIds must be an integer.',
      'filters.dispatcherIds.*.distinct' => 'dispatcherId already selected.',
      'filters.dispatcherIds.*.exists' => 'The filters dispatcherIds must be valid.',
      'filters.loadStatuses' => 'The filters loadStatuses must be an array.',
      'filters.loadStatuses.*.string' => 'The filters loadStatuses must be a string.',
      'filters.loadStatuses.*.distinct' => 'load status already selected.',
      'filters.loadStatuses.*.in' => 'The filters load statuses must be one of the following types: ' .
        implode(',', array_keys(config('constant.status.loadStatusFrontEnd'))),
    ];
  }
}
