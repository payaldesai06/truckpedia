<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeleteTripV2FileRequest extends FormRequest {
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
      'files.*.fileId' => ['required', 'integer', 'exists:trips_v2_files,id'],
    ];
  }

  public function messages(): array {
    return [
      'files.*.fileId.required' => 'File id is required',
      'files.*.fileId.exists' => 'File id does not exist',
    ];
  }
}
