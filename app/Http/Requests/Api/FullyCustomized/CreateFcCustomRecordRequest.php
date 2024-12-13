<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;

class CreateFcCustomRecordRequest extends FormRequest {
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
   *
   * @return array
   */
  public function rules(): array {
    return [
      'submenuId' => ['required', 'integer', 'exists:fc_submenus,id'],
      'newValues' => ['required', 'array'],
      'newValues.*.fieldId' => ['required', 'integer', 'exists:fc_custom_fields,id', 'distinct'],
      'newValues.*.textValue' => ['nullable', 'string'],
      'newValues.*.userValue' => ['nullable', 'array'],
      'newValues.*.userValue.*.userId' => ['required_with:newValues.*.userValue', 'integer', 'exists:users,id'],
      'newValues.*.singleSelectValue' => ['nullable', 'integer', 'exists:fc_custom_fields_select_options,id'],
      'newValues.*.dateValue' => ['nullable'],
      'newValues.*.dateValue.utcDateOnly' => ['required_with:newValues.*.dateValue', 'date_format:' . config('constant.date_format')],
      'newValues.*.dateValue.utcTimeOnly' => ['nullable', 'date_format:' . config('constant.time_format')],
      'newValues.*.dateNoTzValue' => ['nullable'],
      'newValues.*.dateNoTzValue.localDateOnly' => ['nullable', 'date_format:' . config('constant.date_format')],
      'newValues.*.dateNoTzValue.localTimeOnly' => ['nullable', 'date_format:' . config('constant.time_format')],
    ];
  }
}
