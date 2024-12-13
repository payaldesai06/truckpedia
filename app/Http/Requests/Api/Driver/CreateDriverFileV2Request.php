<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Foundation\Http\FormRequest;

class CreateDriverFileV2Request extends FormRequest {
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
      'folderId' => ['required', 'integer', 'exists:driver_v2_folders,id'],
      'userId' => ['required', 'integer', 'exists:users,id'],
      'files' => ['required', 'array'],
      'files.*.originalFileName' => ['nullable', 'string', 'max:255'],
      'files.*.fileName' => ['required', 'string', 'min:3', 'max:255']
    ];
  }

  public function messages() {
    return [
      'files.*.fileName.required' => 'The fileName is required.',
      'files.*.originalFileName.string' => 'The originalFileName should be a string.',
      'files.*.fileName.string' => 'The fileName should be a string.',
      'files.*.fileName.min' => 'The fileName should have a minimum of 3 characters.',
      'files.*.originalFileName.max' => 'The originalFileName cannot exceed 255 characters.',
      'files.*.fileName.max' => 'The fileName cannot exceed 255 characters.',
    ];
  }
}
