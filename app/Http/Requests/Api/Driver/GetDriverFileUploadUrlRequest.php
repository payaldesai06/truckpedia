<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Foundation\Http\FormRequest;

class GetDriverFileUploadUrlRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    return [
      'files' => ['required', 'array'],
      'files.*.extension' => ['required', 'string', 'min:1', 'max:10']
    ];
  }

  public function messages() {
    return [
      'files.*.extension.required' => 'The file extension is required.',
      'files.*.extension.string' => 'The file extension should be a string.',
      'files.*.extension.min' => 'The file extension should have at least 1 character.',
      'files.*.extension.max' => 'The file extension should not exceed 10 characters.',
    ];
  }
}
