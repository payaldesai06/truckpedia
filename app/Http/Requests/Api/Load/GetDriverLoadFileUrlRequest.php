<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class GetDriverLoadFileUrlRequest extends FormRequest {
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
    $rules = [
      'driverLoadId' => 'required|integer|exists:load_drivers,id',
      'files' => 'required|array|min:1',
      'files.*.extension' => 'required|string|min:1|max:10',
      'files.*.type' => 'required|string|in:' . implode(',', config('constant.load.imageType')),
    ];
    return $rules;
  }

  public function messages(): array {
    return [
      'files.*.extension.required' => 'The files extension field is required.',
      'files.*.extension.string' => 'The files extension field is supported only string type.',
      'files.*.extension.max' => 'The files extension field maximum length is 10.',
      'files.*.type.required' => 'The files type field is required.',
      'files.*.type.string' => 'The files type field is supported only string type.',
      'files.*.type.in' => 'The files type field must be in ' . implode(',', config('constant.load.imageType')) . '.',
    ];
  }
}
