<?php

namespace App\Http\Requests\Api\TrailerV2;

use Illuminate\Foundation\Http\FormRequest;

class CreateTrailerV2FileRequest extends FormRequest {
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
      'folderId' => 'required|integer|exists:trailer_folders,id',
      'trailerId' => 'required|integer|exists:trailers,id',
      'files' => 'required|array',
      'files.*.originalFileName' => 'nullable|string|max:255',
      'files.*.fileName' => 'required|string|min:3|max:255'
    ];
  }

  public function messages(): array {
    return [
      'files.*.fileName.required' => 'The files fileName field is required.',
      'files.*.originalFileName.string' => 'The files originalFileName field is supported only string type.',
      'files.*.fileName.string' => 'The files fileName field is supported only string type.',
      'files.*.fileName.min' => 'The files fileName field minimum length is 3.',
      'files.*.originalFileName.max' => 'The files originalFileName field maximum length is 255.',
      'files.*.fileName.max' => 'The files fileName field maximum length is 255.',
    ];
  }
}
