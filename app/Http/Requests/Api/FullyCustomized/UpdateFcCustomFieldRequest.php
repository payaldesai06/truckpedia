<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateFcCustomFieldRequest extends FormRequest {
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
      'id' => 'required|integer|exists:fc_custom_fields,id',
      'name' => ['required', 'string', 'min:1', 'max:100'],
      'level' => ['nullable', 'string', Rule::in(array_values(config('constant.customField.level')))],
    ];
  }

  public function messages() {
    return [
      'level.in' => 'The selected level is invalid. Allowed levels are '. implode(', ', config('constant.customField.level')),
    ];
  }
}
