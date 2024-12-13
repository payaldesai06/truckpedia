<?php

namespace App\Http\Requests\Api\Load\Lists;

use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SetCustomizationRequest extends FormRequest {
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
    $hideColumns = array_values(
      config('constant.listCustomization.hideColumn')
    );
    $rules = [
      'hideColumns' => 'nullable',
      'filters' => 'nullable|json',
    ];

    foreach ($hideColumns as $field) {
      $rules["hideColumns." . $field] = 'nullable|boolean';
    }
    return $rules;
  }

  public function messages(): array {
    $hideColumns = array_values(
      config('constant.listCustomization.hideColumn')
    );

    $messages = [];

    foreach ($hideColumns as $field) {
      $messages["hideColumns." . $field . ".boolean"] = "The hideColumns " .
        $field . " field should be boolean type";
    }

    return $messages;
  }
}
