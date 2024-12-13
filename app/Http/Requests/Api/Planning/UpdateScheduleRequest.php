<?php

namespace App\Http\Requests\Api\Planning;

use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateScheduleRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $rules = [
      'truckAvalRptSchedId' => 'required_if:frequentType,weekly|integer|exists:truck_aval_rpt_scheds,id',
      'truckAvalOnceSchedId' => 'required_if:frequentType,once|integer|exists:truck_aval_once_scheds,id',
      'frequentType' => 'required|string|in:' . implode(',', config('constant.planning.schedule.frequentType')),
      'weeklySelectedDays' => 'required_if:frequentType,weekly|array',
      'weeklySelectedDays.*' => 'in:' . implode(',', array_keys(config('constant.planning.schedule.weeklySelectedDays'))),
      'onceTimeRange' => 'required_if:frequentType,once',
      'onceTimeRange.startDate' => 'required_if:frequentType,once|date|date_format:' . config('constant.date_format'),
      'onceTimeRange.endDate' => 'required_if:frequentType,once|date|date_format:' . config('constant.date_format'),
      'startTime' => 'nullable|required_with:endTime|date_format:' . config('constant.time_format'),
      'endTime' => 'nullable|required_with:startTime|date_format:' . config('constant.time_format'),
      'manualLanes' => 'nullable|array|min:1',
      'manualLanes.*.truckAvalManualLaneId' => 'nullable|integer|exists:truck_aval_manual_lanes,id,deleted_at,NULL',
      'manualLanes.*.origin' => 'required',
      'manualLanes.*.origin.streetAddress' => 'nullable|string|max:255',
      'manualLanes.*.origin.city' => 'required_without:manualLanes.*.origin.statesArray|string|max:255',
      'manualLanes.*.origin.state' => 'required_without:manualLanes.*.origin.statesArray|string|max:255',
      'manualLanes.*.origin.zipCode' => 'nullable|string|max:255',
      'manualLanes.*.origin.latitude' => 'required_without:manualLanes.*.origin.statesArray|numeric',
      'manualLanes.*.origin.longitude' => 'required_without:manualLanes.*.origin.statesArray|numeric',
      'manualLanes.*.origin.deadhead' => 'required_without:manualLanes.*.origin.statesArray|integer|between:0,1000',
      'manualLanes.*.origin.statesArray' => 'nullable|array|min:1',
      'manualLanes.*.origin.statesArray.*' => 'string|size:2|distinct|regex:/^[A-Z]{2}$/|in:' . implode(',', config('constant.usStatesIntMapping')),

      'manualLanes.*.destination' => 'required',
      'manualLanes.*.destination.streetAddress' => 'nullable|string|max:255',
      'manualLanes.*.destination.city' => 'required_without:manualLanes.*.destination.statesArray|string|max:255',
      'manualLanes.*.destination.state' => 'required_without:manualLanes.*.destination.statesArray|string|max:255',
      'manualLanes.*.destination.zipCode' => 'nullable|string|max:255',
      'manualLanes.*.destination.latitude' => 'required_without:manualLanes.*.destination.statesArray|numeric',
      'manualLanes.*.destination.longitude' => 'required_without:manualLanes.*.destination.statesArray|numeric',
      'manualLanes.*.destination.deadhead' => 'required_without:manualLanes.*.destination.statesArray|integer|between:0,1000',
      'manualLanes.*.destination.statesArray' => 'nullable|array|min:1',
      'manualLanes.*.destination.statesArray.*' => 'string|size:2|distinct|regex:/^[A-Z]{2}$/|in:' . implode(',', config('constant.usStatesIntMapping')),
      'manualLanes.*.targetPrice' => 'required_without:manualLanes.*.targetRpm|nullable|numeric|between:0,999999.99',
      'manualLanes.*.targetRpm' => 'required_without:manualLanes.*.targetPrice|nullable|numeric|between:0,99.9999',
      'manualLanes.*.targetWeight' => 'required|integer|between:0,999999',
      'manualLanes.*.targetMinRate' => 'nullable|numeric|between:0,999999.99',
    ];
    $rules['quoteValidUntil'] = [
      'nullable',
      'date',
      'date_format:'. config('constant.date_format'),
      function ($attr, $value, $fail) {
        if (request('frequentType') != 'weekly' && !empty(request('quoteValidUntil'))) {
          $fail('The quoteValidUntil is required only when frequentType selected weekly option.');
        }
      }
    ];
    $manualLanes = request('manualLanes') ?? [];
    if (!empty($manualLanes)) {
      foreach ($manualLanes as $i => $manualLane) {
        $rules['manualLanes.' . $i . '.origin.statesArray'] = [
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
        $rules['manualLanes.' . $i . '.destination.statesArray'] = [
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
    return $rules;
  }

  public function messages(): array {
    return [
      'frequentType.in' => 'frequentType is supported only ' . implode(', ', config('constant.planning.schedule.frequentType')),
      'weeklySelectedDays.*.in' => 'weeklySelectedDays is supported only ' . implode(',', array_keys(config('constant.planning.schedule.weeklySelectedDays'))),
      'onceTimeRange.startDate.required_if' => 'The onceTimeRange startDate field is required',
      'onceTimeRange.endDate.required_if' => 'The onceTimeRange endDate field is required',
      'onceTimeRange.startDate.date_format' => 'Start date does not match the format ' . config('constant.date_format'),
      'onceTimeRange.endDate.date_format' => 'Start date does not match the format ' . config('constant.date_format'),
      'manualLanes.*.truckAvalManualLaneId.integer' => 'The manualLanes truckAvalManualLaneId field must be an integer.',
      'manualLanes.*.truckAvalManualLaneId.exists' => 'The manualLanes truckAvalManualLaneId field is invalid.',
      'manualLanes.*.origin.streetAddress.string' => 'The origin streetAddress field must be a string.',
      'manualLanes.*.origin.streetAddress.max' => 'The origin streetAddress field maximum length is 255.',
      'manualLanes.*.origin.city.required_without' => 'The origin city field is required when statesArray is not present.',
      'manualLanes.*.origin.city.string' => 'The origin city field must be a string.',
      'manualLanes.*.origin.city.max' => 'The origin city field maximum length is 255.',
      'manualLanes.*.origin.state.required_without' => 'The origin state field is required when statesArray is not present.',
      'manualLanes.*.origin.state.string' => 'The origin state field must be a string.',
      'manualLanes.*.origin.state.max' => 'The origin state field maximum length is 255.',
      'manualLanes.*.origin.zipCode.string' => 'The origin zipCode field must be a string.',
      'manualLanes.*.origin.zipCode.max' => 'The origin zipCode field maximum length is 255.',
      'manualLanes.*.origin.latitude.required_without' => 'The origin latitude field is required when statesArray is not present.',
      'manualLanes.*.origin.latitude.numeric' => 'The origin latitude field must be an numeric.',
      'manualLanes.*.origin.longitude.required_without' => 'The origin longitude field is required when statesArray is not present.',
      'manualLanes.*.origin.longitude.numeric' => 'The origin longitude field must be an numeric.',
      'manualLanes.*.origin.deadhead.required_without' => 'The origin deadhead field is required when statesArray is not present.',
      'manualLanes.*.origin.deadhead.integer' => 'The origin deadhead field must be an integer.',
      'manualLanes.*.origin.deadhead.between' => 'The origin deadhead field must be between 0 and 1000',
      'manualLanes.*.origin.statesArray.array' => 'The origin statesArray field must be an array.',
      'manualLanes.*.origin.statesArray.min' => 'The origin statesArray field must have a minimum of one state.',
      'manualLanes.*.origin.statesArray.*.string' => 'The origin statesArray value field must be a string.',
      'manualLanes.*.origin.statesArray.*.size' => 'The origin statesArray value field must be of size 2.',
      'manualLanes.*.origin.statesArray.*.distinct' => 'The origin statesArray value field has a duplicate value',
      'manualLanes.*.origin.statesArray.*.regex' => 'The origin statesArray value field must be an upper case value',
      'manualLanes.*.origin.statesArray.*.in' => 'The origin statesArray value field is supported only ' . implode(', ', config('constant.usStatesIntMapping')),

      'manualLanes.*.destination.streetAddress.string' => 'The destination streetAddress field must be a string.',
      'manualLanes.*.destination.streetAddress.max' => 'The destination streetAddress field maximum length is 255.',
      'manualLanes.*.destination.city.required_without' => 'The destination city field is required when statesArray is not present.',
      'manualLanes.*.destination.city.string' => 'The destination city field must be a string.',
      'manualLanes.*.destination.city.max' => 'The destination city field maximum length is 255.',
      'manualLanes.*.destination.state.required_without' => 'The destination state field is required when statesArray is not present.',
      'manualLanes.*.destination.state.string' => 'The destination state field must be a string.',
      'manualLanes.*.destination.state.max' => 'The destination state field maximum length is 255.',
      'manualLanes.*.destination.zipCode.string' => 'The destination zipCode field must be a string.',
      'manualLanes.*.destination.zipCode.max' => 'The destination zipCode field maximum length is 255.',
      'manualLanes.*.destination.latitude.required_without' => 'The destination latitude field is required when statesArray is not present.',
      'manualLanes.*.destination.latitude.numeric' => 'The destination latitude field must be an numeric.',
      'manualLanes.*.destination.longitude.required_without' => 'The destination longitude field is required when statesArray is not present.',
      'manualLanes.*.destination.longitude.numeric' => 'The destination longitude field must be an numeric.',
      'manualLanes.*.destination.deadhead.required_without' => 'The destination deadhead field is required when statesArray is not present.',
      'manualLanes.*.destination.deadhead.integer' => 'The destination deadhead field must be an integer.',
      'manualLanes.*.destination.deadhead.between' => 'The destination deadhead field must be between 0 and 1000',
      'manualLanes.*.destination.statesArray.array' => 'The destination statesArray field must be an array.',
      'manualLanes.*.destination.statesArray.min' => 'The destination statesArray field must have a minimum of one state.',
      'manualLanes.*.destination.statesArray.*.string' => 'The destination statesArray value field must be a string.',
      'manualLanes.*.destination.statesArray.*.size' => 'The destination statesArray value field must be of size 2.',
      'manualLanes.*.destination.statesArray.*.distinct' => 'The destination statesArray value field has a duplicate value',
      'manualLanes.*.destination.statesArray.*.regex' => 'The destination statesArray value field must be an upper case value',
      'manualLanes.*.destination.statesArray.*.in' => 'The destination statesArray value field is supported only ' . implode(', ', config('constant.usStatesIntMapping')),

      'manualLanes.*.targetPrice.between' => 'The targetPrice field must be between 0 and 999999.99',
      'manualLanes.*.targetRpm.between' => 'The targetRpm field must be between 0 and 99.9999',
      'manualLanes.*.targetWeight.between' => 'The targetWeight field must be between 0 and 999999',
      'manualLanes.*.targetMinRate.numeric' => 'The targetMinRate field must be numeric.',
      'manualLanes.*.targetMinRate.between' =>  'The targetMinRate field must be between 0 and 999999.99',
    ];
  }
}
