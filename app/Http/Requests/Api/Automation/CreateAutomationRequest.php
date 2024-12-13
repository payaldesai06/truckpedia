<?php

namespace App\Http\Requests\Api\Automation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateAutomationRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   */
  public function rules(): array {
    $rules = [
      'schedule' => 'required_without:reminder|array',
      'schedule.freqType' => 'required_with:schedule|in:' . implode(',', config('constant.automation.schedule.freqType')),
      //'schedule.freqInterval' => [Rule::requiredIf(request('schedule.freqType') != 'once')],
      'schedule.freqInterval' => 'required_with:schedule|numeric|min:1|required_if:schedule.freqType,!=,once',
      'schedule.selectedDates' => 'required_if:schedule.freqType,week,month|array',
      //   'schedule.selectedDates' => [
      //     Rule::requiredIf(request('schedule.freqType') == 'week'),
      //     Rule::requiredIf(request('schedule.freqType') == 'month')
      //   ],
      'schedule.startDate' => 'required_with:schedule|date_format:Y-m-d',
      'schedule.startTime' => 'required_with:schedule|date_format:H:i',
      'schedule.actions' => 'required_with:schedule|array|min:1',

      'schedule.actions.*.actionType' => 'required|in:' . implode(',', config('constant.automation.action.actionType')),
      'schedule.actions.*.to' => 'required_without_all:schedule.actions.*.cc,schedule.actions.*.bcc|array',
      'schedule.actions.*.cc' => 'required_without_all:schedule.actions.*.to,schedule.actions.*.bcc|array',
      'schedule.actions.*.bcc' => 'required_without_all:schedule.actions.*.to,schedule.actions.*.cc|array',
      'schedule.actions.*.fromName' => 'required|string',
      'schedule.actions.*.replyTo' => 'nullable',
      'schedule.actions.*.subject' => 'required_if:schedule.actions.*.actionType,email,emailAvailableTrucks',
      'schedule.actions.*.content' => 'required_if:schedule.actions.*.actionType,email,emailAvailableTrucks',

      'reminder' => 'required_without:schedule|array',
      'reminder.category' => 'required_with:reminder|string|in:' . implode(',', config('constant.automation.reminder.category')),
      'reminder.freqType' => 'required_with:reminder|string|in:' . implode(',', config('constant.automation.reminder.freqType')),
      'reminder.inAdvance' => 'required_with:reminder|array|min:1',
      'reminder.inAdvance.*' => 'numeric|gt:0|distinct',
      'reminder.freqInterval' => 'required_if:reminder.freqType,day|nullable|numeric|max:750|gt:' . (is_array(request('reminder.inAdvance')) ? max(request('reminder.inAdvance')) : 1),
      'reminder.actions' => 'required_with:reminder|array|min:1',
      'reminder.actions.*.actionType' => 'required|in:' . implode(',', config('constant.automation.action.actionType')),
      'reminder.actions.*.to' => 'required_without_all:reminder.actions.*.cc,reminder.actions.*.bcc|array',
      'reminder.actions.*.cc' => 'required_without_all:reminder.actions.*.to,reminder.actions.*.bcc|array',
      'reminder.actions.*.bcc' => 'required_without_all:reminder.actions.*.to,reminder.actions.*.cc|array',
      'reminder.actions.*.fromName' => 'required|string',
      'reminder.actions.*.replyTo' => 'nullable',
      'reminder.actions.*.subject' => 'required_if:reminder.actions.*.actionType,email',
      'reminder.actions.*.content' => 'required_if:reminder.actions.*.actionType,email',
      'reminder.assets' => 'required_with:reminder|array|min:1',
      'reminder.assets.*.type' => 'required|string|in:' . implode(',', config('constant.automation.reminder.asset.assetType')),
      'reminder.assets.*.originalAssetId' => 'required|integer',
      'reminder.assets.*.nextServiceAt' => 'required_if:reminder.category,maintenance|nullable|date_format:Y-m-d',
      'reminder.assets.*.fieldsToCheck' => 'required_if:reminder.category,expiration|array'
    ];
    if (!empty(request('reminder'))) {
      foreach (request('reminder.assets') as $key => $asset) {
        if (!empty($asset['fieldsToCheck'])) {
          foreach ($asset['fieldsToCheck'] as $fkey => $val) {
            $rules['reminder.assets.' . $key . '.fieldsToCheck.' . $fkey] = 'string|in:' . implode(',', config('constant.automation.reminder.asset.fieldsToCheck.' . $asset['type'] . '.values'));
          }
        }
      }
    }
    return $rules;
  }

  /**
   * Get the error messages for the defined validation rules.
   * @return array
   */
  public function messages(): array {
    return [
      'schedule.freqType.required' => 'Schedule freq type is required.',
      'schedule.startDate.required' => 'Schedule start date is required.',
      'schedule.startDate.date_format' => 'Start date does not match the format Y-m-d.',
      'schedule.startTime.required' => 'Schedule start time is required.',
      'schedule.startTime.date_format' => 'Start time does not match the format H:i.',
      'schedule.actions.*.actionType.required' => 'Action type is required.',
      'schedule.actions.*.to.required_without_all' => 'To required when cc and bcc are not present.',
      'schedule.actions.*.cc.required_without_all' => 'CC required when to and bcc are not present.',
      'schedule.actions.*.bcc.required_without_all' => 'BCC required when to and cc are not present.',
      'schedule.actions.*.subject.required' => 'Subject required when action type is email.',
      'schedule.actions.*.content.required' => 'Content required when action type is email.',

      'reminder.category.required' => 'Reminder category is required.',
      'reminder.freqType.required' => 'Reminder freq type is required.',
      'reminder.inAdvance.required' => 'Reminder in advance is required.',
      'reminder.actions.*.actionType.required' => 'Action type is required.',
      'reminder.actions.*.to.required_without_all' => 'To required when cc and bcc are not present.',
      'reminder.actions.*.cc.required_without_all' => 'CC required when to and bcc are not present.',
      'reminder.actions.*.bcc.required_without_all' => 'BCC required when to and cc are not present.',
      'reminder.actions.*.subject.required' => 'Subject required when action type is email.',
      'reminder.actions.*.content.required' => 'Content required when action type is email.',
      'reminder.assets.*.type.required' => 'Asset type is required.',
      'reminder.assets.*.originalAssetId.required' => 'Original asset id is required.',
      'reminder.assets.*.nextServiceAt.required_if' => 'Asset next service at is required.',
      'reminder.assets.*.fieldsToCheck.required_if' => 'Asset fields to check is required.',
      'reminder.assets.*.fieldsToCheck.*.string' => 'Asset fields to check must have string values.',
      'reminder.assets.*.fieldsToCheck.*.in' => 'Asset fields to check is invalid.'
    ];
  }
}
