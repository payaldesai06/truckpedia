<?php

namespace App\Http\Requests\Api\Customer;

use Illuminate\Foundation\Http\FormRequest;

class GetCustomerV2FileUrlRequest extends FormRequest {
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
      'files' => 'required|array',
      'files.*.extension' => 'required|string|min:1|max:10'
    ];
  }

  public function messages(): array {
    return [
      'files.*.extension.required' => 'The files extension field is required.',
      'files.*.extension.string' => 'The files extension field is supported only string type.',
      'files.*.extension.max' => 'The files extension field maximum length is 10.',
    ];
  }
}