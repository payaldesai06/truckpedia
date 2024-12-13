<?php

namespace App\Http\Requests\Api\Safety;

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
    return [
      'showColumns' => 'nullable|array',
      'showColumns.*.c' => [
        'nullable', 'string', 'distinct', Rule::in(
          array_values(config('constant.incident.customization.showColumns'))
        )
      ],
      'showColumns.*.w' => 'nullable|string|max:255',
      'filters' => 'nullable|json'
    ];
  }

  public function messages(): array {
    return [
      'showColumns.*.c.string' => 'The showColumns c field must be a string type.',
      'showColumns.*.c.distinct' => 'The showColumns c field has a duplicate value.',
      'showColumns.*.c.in' => 'The selected showColumns c is invalid. Allowed types are ' .
        implode(', ', config('constant.incident.customization.showColumns')),
      'showColumns.*.w.string' => 'The showColumns w field must be a string type.',
      'showColumns.*.w.max' => 'The showColumns w field must not be greater than 255 characters.',
      'filters.json' => 'The filters field is invalid json.',
    ];
  }
}
