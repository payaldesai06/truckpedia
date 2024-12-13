<?php

namespace App\Http\Requests\Api\Planning;

use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBatchScheduleRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $rules = [
      'updates' => ['nullable', 'array'],
      'updates.*.truckAvalRptSchedId' => 'required_if:frequentType,weekly|integer|exists:truck_aval_rpt_scheds,id',
      'updates.*.truckAvalOnceSchedId' => 'required_if:frequentType,once|integer|exists:truck_aval_once_scheds,id',
      'updates.*.frequentType' => 'required|string|in:' . implode(',', config('constant.planning.schedule.frequentType')),
      'updates.*.weeklySelectedDays' => 'required_if:frequentType,weekly|array',
      'updates.*.weeklySelectedDays.*' => 'in:' . implode(',', array_keys(config('constant.planning.schedule.weeklySelectedDays'))),
      'updates.*.onceTimeRange' => 'required_if:frequentType,once',
      'updates.*.onceTimeRange.startDate' => 'required_if:frequentType,once|date|date_format:' . config('constant.date_format'),
      'updates.*.onceTimeRange.endDate' => 'required_if:frequentType,once|date|date_format:' . config('constant.date_format'),
      'updates.*.startTime' => 'nullable|required_with:updates.*.endTime|date_format:' . config('constant.time_format'),
      'updates.*.endTime' => 'nullable|required_with:updates.*.startTime|date_format:' . config('constant.time_format'),
      'updates.*.equipmentTypes' => 'required|array|min:1',
      // Cannot use distainct here, cause Laravel is enforcing distinct for ALL schedules in the payload at the same time.
      'updates.*.equipmentTypes.*' => 'string|in:' .
        implode(',', config('constant.planning.schedule.equipmentTypes')),
      'updates.*.manualLanes' => 'nullable|array|min:1',
      'updates.*.manualLanes.*.truckAvalManualLaneId' => 'nullable|integer|exists:truck_aval_manual_lanes,id,deleted_at,NULL',
      'updates.*.manualLanes.*.origin' => 'required',
      'updates.*.manualLanes.*.origin.streetAddress' => 'nullable|string|max:255',
      'updates.*.manualLanes.*.origin.city' => 'required_without:updates.*.manualLanes.*.origin.statesArray|string|max:255',
      'updates.*.manualLanes.*.origin.state' => 'required_without:updates.*.manualLanes.*.origin.statesArray|string|max:255',
      'updates.*.manualLanes.*.origin.zipCode' => 'nullable|string|max:255',
      'updates.*.manualLanes.*.origin.latitude' => 'required_without:updates.*.manualLanes.*.origin.statesArray|numeric',
      'updates.*.manualLanes.*.origin.longitude' => 'required_without:updates.*.manualLanes.*.origin.statesArray|numeric',
      'updates.*.manualLanes.*.origin.deadhead' => 'required_without:updates.*.manualLanes.*.origin.statesArray|integer|between:0,1000',
      // Cannot use distainct here, cause Laravel is enforcing distinct for ALL schedules in the payload at the same time.
      'updates.*.manualLanes.*.origin.statesArray.*' => 'string|size:2|regex:/^[A-Z]{2}$/|in:' . implode(',', config('constant.usStatesIntMapping')),

      'updates.*.manualLanes.*.destination' => 'required',
      'updates.*.manualLanes.*.destination.streetAddress' => 'nullable|string|max:255',
      'updates.*.manualLanes.*.destination.city' => 'required_without:updates.*.manualLanes.*.destination.statesArray|string|max:255',
      'updates.*.manualLanes.*.destination.state' => 'required_without:updates.*.manualLanes.*.destination.statesArray|string|max:255',
      'updates.*.manualLanes.*.destination.zipCode' => 'nullable|string|max:255',
      'updates.*.manualLanes.*.destination.latitude' => 'required_without:updates.*.manualLanes.*.destination.statesArray|numeric',
      'updates.*.manualLanes.*.destination.longitude' => 'required_without:updates.*.manualLanes.*.destination.statesArray|numeric',
      'updates.*.manualLanes.*.destination.deadhead' => 'required_without:updates.*.manualLanes.*.destination.statesArray|integer|between:0,1000',
      // Cannot use distainct here, cause Laravel is enforcing distinct for ALL schedules in the payload at the same time.
      'updates.*.manualLanes.*.destination.statesArray.*' => 'string|size:2|regex:/^[A-Z]{2}$/|in:' . implode(',', config('constant.usStatesIntMapping')),

      'updates.*.manualLanes.*.targetPrice' => 'required_without:updates.*.manualLanes.*.targetRpm|nullable|numeric|between:0,999999.99',
      'updates.*.manualLanes.*.targetRpm' => 'required_without:updates.*.manualLanes.*.targetPrice|nullable|numeric|between:0,99.9999',
      'updates.*.manualLanes.*.targetWeight' => 'required|integer|between:0,999999',
      'updates.*.manualLanes.*.targetMinRate' => 'nullable|numeric|between:0,999999.99',
    ];
    $updates = request('updates') ?? [];
    if (!empty($updates)) {
      foreach ($updates as $j => $update) {
        $rules['updates.' . $j . '.quoteValidUntil'] = [
          'nullable',
          'date',
          'date_format:' . config('constant.date_format'),
          function ($attr, $value, $fail) use ($update) {
            if ($update['frequentType'] != 'weekly' && !empty($update['quoteValidUntil'])) {
              $fail('The quoteValidUntil is required only when frequentType selected weekly option.');
            }
          }
        ];
        $manualLanes = $update['manualLanes'] ?? [];
        if (!empty($manualLanes)) {
          foreach ($manualLanes as $i => $manualLane) {
            $rules['updates.' . $j . '.manualLanes.' . $i . '.origin.statesArray'] = [
              'nullable',
              'array',
              'min:1',
              function ($attr, $value, $fail) use ($manualLane) {
                if (
                  $manualLane['origin']['statesArray'] &&
                  (!empty($manualLane['origin']['streetAddress']) ||
                    !empty($manualLane['origin']['city']) ||
                    !empty($manualLane['origin']['state']) ||
                    !empty($manualLane['origin']['zipCode']) ||
                    !empty($manualLane['origin']['latitude']) ||
                    !empty($manualLane['origin']['longitude']) ||
                    !empty($manualLane['origin']['deadhead']))
                ) {
                  $fail('Can not have both statesArray and other origin fields at the same time.');
                }
              }
            ];
            $rules['updates.' . $j . '.manualLanes.' . $i . '.destination.statesArray'] = [
              'nullable',
              'array',
              'min:1',
              function ($attr, $value, $fail) use ($manualLane) {
                if (
                  $manualLane['destination']['statesArray'] &&
                  (!empty($manualLane['destination']['streetAddress']) ||
                    !empty($manualLane['destination']['city']) ||
                    !empty($manualLane['destination']['state']) ||
                    !empty($manualLane['destination']['zipCode']) ||
                    !empty($manualLane['destination']['latitude']) ||
                    !empty($manualLane['destination']['longitude']) ||
                    !empty($manualLane['destination']['deadhead']))
                ) {
                  $fail('Can not have both statesArray and other destination fields at the same time.');
                }
              }
            ];
          }
        }
      }
    }
    return $rules;
  }

  public function messages(): array {
    return [
      'updates.*.frequentType.in' => 'frequentType is supported only ' . implode(', ', config('constant.planning.schedule.frequentType')),
      'updates.*.weeklySelectedDays.*.in' => 'weeklySelectedDays is supported only ' . implode(',', array_keys(config('constant.planning.schedule.weeklySelectedDays'))),
      'updates.*.onceTimeRange.startDate.required_if' => 'The onceTimeRange startDate field is required',
      'updates.*.onceTimeRange.endDate.required_if' => 'The onceTimeRange endDate field is required',
      'updates.*.startTime.date_format' => 'The startTime does not match the format ' . config('constant.time_format'),
      'updates.*.endTime.date_format' =>  'The endTime does not match the format ' . config('constant.time_format'),
      'updates.*.startTime.required_with' => 'The startTime is required when endTime is present.',
      'updates.*.endTime.required_with' => 'The endTime is required when startTime is present.',
      'updates.*.quoteValidUntil.date_format' =>  'The quoteValidUntil does not match the format ' . config('constant.date_format'),
      'updates.*.onceTimeRange.startDate.date_format' => 'Start date does not match the format ' . config('constant.date_format'),
      'updates.*.onceTimeRange.endDate.date_format' => 'Start date does not match the format ' . config('constant.date_format'),
      'updates.*.equipmentTypes.*.in' => 'The equipmentTypes is supported only ' .
        implode(',', config('constant.planning.schedule.equipmentTypes')),
      'updates.*.equipmentTypes.*.distinct' => 'The equipmentTypes value field has a duplicate value.',
      'updates.*.equipmentTypes.*.string' => 'The equipmentTypes value field must be a string.',
      'updates.*.manualLanes.*.truckAvalManualLaneId.integer' => 'The manualLanes truckAvalManualLaneId field must be an integer.',
      'updates.*.manualLanes.*.truckAvalManualLaneId.exists' => 'The manualLanes truckAvalManualLaneId field is invalid.',
      'updates.*.manualLanes.*.origin.streetAddress.string' => 'The origin streetAddress field must be a string.',
      'updates.*.manualLanes.*.origin.streetAddress.max' => 'The origin streetAddress field maximum length is 255.',
      'updates.*.manualLanes.*.origin.city.required_without' => 'The origin city field is required when statesArray is not present.',
      'updates.*.manualLanes.*.origin.city.string' => 'The origin city field must be a string.',
      'updates.*.manualLanes.*.origin.city.max' => 'The origin city field maximum length is 255.',
      'updates.*.manualLanes.*.origin.state.required_without' => 'The origin state field is required when statesArray is not present.',
      'updates.*.manualLanes.*.origin.state.string' => 'The origin state field must be a string.',
      'updates.*.manualLanes.*.origin.state.max' => 'The origin state field maximum length is 255.',
      'updates.*.manualLanes.*.origin.zipCode.string' => 'The origin zipCode field must be a string.',
      'updates.*.manualLanes.*.origin.zipCode.max' => 'The origin zipCode field maximum length is 255.',
      'updates.*.manualLanes.*.origin.latitude.required_without' => 'The origin latitude field is required when statesArray is not present.',
      'updates.*.manualLanes.*.origin.latitude.numeric' => 'The origin latitude field must be an numeric.',
      'updates.*.manualLanes.*.origin.longitude.required_without' => 'The origin longitude field is required when statesArray is not present.',
      'updates.*.manualLanes.*.origin.longitude.numeric' => 'The origin longitude field must be an numeric.',
      'updates.*.manualLanes.*.origin.deadhead.required_without' => 'The origin deadhead field is required when statesArray is not present.',
      'updates.*.manualLanes.*.origin.deadhead.integer' => 'The origin deadhead field must be an integer.',
      'updates.*.manualLanes.*.origin.deadhead.between' => 'The origin deadhead field must be between 0 and 1000',
      'updates.*.manualLanes.*.origin.statesArray.array' => 'The origin statesArray field must be an array.',
      'updates.*.manualLanes.*.origin.statesArray.min' => 'The origin statesArray field must have a minimum of one state.',
      'updates.*.manualLanes.*.origin.statesArray.*.string' => 'The origin statesArray value field must be a string.',
      'updates.*.manualLanes.*.origin.statesArray.*.size' => 'The origin statesArray value field must be of size 2.',
      'updates.*.manualLanes.*.origin.statesArray.*.distinct' => 'The origin statesArray value field has a duplicate value',
      'updates.*.manualLanes.*.origin.statesArray.*.regex' => 'The origin statesArray value field must be an upper case value',
      'updates.*.manualLanes.*.origin.statesArray.*.in' => 'The origin statesArray value field is supported only ' . implode(', ', config('constant.usStatesIntMapping')),

      'updates.*.manualLanes.*.destination.streetAddress.string' => 'The destination streetAddress field must be a string.',
      'updates.*.manualLanes.*.destination.streetAddress.max' => 'The destination streetAddress field maximum length is 255.',
      'updates.*.manualLanes.*.destination.city.required_without' => 'The destination city field is required when statesArray is not present.',
      'updates.*.manualLanes.*.destination.city.string' => 'The destination city field must be a string.',
      'updates.*.manualLanes.*.destination.city.max' => 'The destination city field maximum length is 255.',
      'updates.*.manualLanes.*.destination.state.required_without' => 'The destination state field is required when statesArray is not present.',
      'updates.*.manualLanes.*.destination.state.string' => 'The destination state field must be a string.',
      'updates.*.manualLanes.*.destination.state.max' => 'The destination state field maximum length is 255.',
      'updates.*.manualLanes.*.destination.zipCode.string' => 'The destination zipCode field must be a string.',
      'updates.*.manualLanes.*.destination.zipCode.max' => 'The destination zipCode field maximum length is 255.',
      'updates.*.manualLanes.*.destination.latitude.required_without' => 'The destination latitude field is required when statesArray is not present.',
      'updates.*.manualLanes.*.destination.latitude.numeric' => 'The destination latitude field must be an numeric.',
      'updates.*.manualLanes.*.destination.longitude.required_without' => 'The destination longitude field is required when statesArray is not present.',
      'updates.*.manualLanes.*.destination.longitude.numeric' => 'The destination longitude field must be an numeric.',
      'updates.*.manualLanes.*.destination.deadhead.required_without' => 'The destination deadhead field is required when statesArray is not present.',
      'updates.*.manualLanes.*.destination.deadhead.integer' => 'The destination deadhead field must be an integer.',
      'updates.*.manualLanes.*.destination.deadhead.between' => 'The destination deadhead field must be between 0 and 1000',
      'updates.*.manualLanes.*.destination.statesArray.array' => 'The destination statesArray field must be an array.',
      'updates.*.manualLanes.*.destination.statesArray.min' => 'The destination statesArray field must have a minimum of one state.',
      'updates.*.manualLanes.*.destination.statesArray.*.string' => 'The destination statesArray value field must be a string.',
      'updates.*.manualLanes.*.destination.statesArray.*.size' => 'The destination statesArray value field must be of size 2.',
      'updates.*.manualLanes.*.destination.statesArray.*.distinct' => 'The destination statesArray value field has a duplicate value',
      'updates.*.manualLanes.*.destination.statesArray.*.regex' => 'The destination statesArray value field must be an upper case value',
      'updates.*.manualLanes.*.destination.statesArray.*.in' => 'The destination statesArray value field is supported only ' . implode(', ', config('constant.usStatesIntMapping')),

      'updates.*.manualLanes.*.targetPrice.numeric' => 'The targetPrice field must be numeric.',
      'updates.*.manualLanes.*.targetPrice.between' => 'The targetPrice field must be between 0 and 999999.99',
      'updates.*.manualLanes.*.targetRpm.numeric' => 'The targetRpm field must be numeric.',
      'updates.*.manualLanes.*.targetRpm.between' => 'The targetRpm field must be between 0 and 99.9999',
      'updates.*.manualLanes.*.targetWeight.numeric' => 'The targetWeight field must be an integer.',
      'updates.*.manualLanes.*.targetWeight.between' => 'The targetWeight field must be between 0 and 999999',
      'updates.*.manualLanes.*.targetMinRate.numeric' => 'The targetMinRate field must be numeric.',
      'updates.*.manualLanes.*.targetMinRate.between' =>  'The targetMinRate field must be between 0 and 999999.99',
    ];
  }
}
