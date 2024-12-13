<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CreateFcCustomFieldRequest extends FormRequest {
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
      'submenuId' => 'required|integer|exists:fc_submenus,id',
      'fields' => ['required', 'array'],
      'fields.*.name' => ['required_with:fields', 'string', 'min:1', 'max:100'],
      'fields.*.level' => ['nullable', 'string', Rule::in(array_values(config('constant.customField.level')))],
      'fields.*.type' => ['required_with:fields', 'string', Rule::in(array_values(config('constant.customField.custom_type')))],
      'fields.*.singleSelectOptions' => ['nullable', 'required_if:fields.*.type,singleSelect', 'array'],
      'fields.*.singleSelectOptions.*.optionName' => ['required_with:fields.*.singleSelectOptions', 'string', 'min:1', 'max:100', 'nullable'],
      'fields.*.multiSelectOptions' => ['nullable', 'required_if:fields.*.type,multiSelect', 'array'],
      'fields.*.multiSelectOptions.*.optionName' => ['required_with:fields.*.multiSelectOptions', 'string', 'min:1', 'max:100', 'nullable'],
    ];
  }

  public function messages(): array {
    return [
      'fields.*.name.required' => 'The fields name field is required.',
      'fields.*.name.string' => 'The fields name field is supported only string type.',
      'fields.*.name.min' => 'The fields name field minimum length is 1.',
      'fields.*.name.max' => 'The fields name field maximum length is 100.',
      'fields.*.level.in' => 'The selected level is invalid. Allowed levels are '. implode(', ', config('constant.customField.level')),
      'fields.*.type.in' => 'The selected field type is invalid. Allowed types are ' . implode(', ', config('constant.customField.custom_type')),
      'fields.*.type.string' => 'The fields type must be a string.',
      'fields.*.singleSelectOptions.required_if' => 'The single select options field is required when field type is singleSelect.',
      'fields.*.singleSelectOptions.array' => 'The single select options field must be an array.',
      'fields.*.singleSelectOptions.*.optionName.required_with' => 'The option name field is required for every single select option.',
      'fields.*.multiSelectOptions.required_if' => 'The multi select options field is required when field type is singleSelect.',
      'fields.*.multiSelectOptions.array' => 'The multi select options field must be an array.',
      'fields.*.multiSelectOptions.*.optionName.required_with' => 'The option name field is required for every multi select option.',
    ];
  }
}
