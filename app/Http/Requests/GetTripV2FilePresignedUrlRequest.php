<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetTripV2FilePresignedUrlRequest extends FormRequest {
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
      'tripId' => ['required', 'integer', 'exists:trips_v2,id'],
      'files' => ['required', 'array'],
      'files.*.extension' => ['required', 'string', 'min:1', 'max:10'],
    ];
  }

  public function messages(): array {
    return [
      'files.*.extension.required' => 'File extension is required',
      'files.*.extension.string' => 'File extension must be a string',
      'files.*.extension.min' => 'File extension must be at least 1 character',
      'files.*.extension.max' => 'File extension must be at most 10 characters',
    ];
  }
}
