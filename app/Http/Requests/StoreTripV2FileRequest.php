<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTripV2FileRequest extends FormRequest {
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
      'files' => ['nullable', 'array'],
      'files.*.originalFileName' => ['nullable', 'string', 'min:1', 'max:255'],
      'files.*.storageFileName' => ['required', 'min:1', 'max:255'],
    ];
  }

  public function messages(): array {
    return [
      'files.*.originalFileName.string' => 'Original file name must be a string',
      'files.*.originalFileName.min' => 'Original file name must be at least 1 character',
      'files.*.originalFileName.max' => 'Original file name must be at most 255 characters',
      'files.*.storageFileName.required' => 'Storage file name is required',
      'files.*.storageFileName.string' => 'Storage file name must be a string',
      'files.*.storageFileName.min' => 'Storage file name must be at least 1 character',
      'files.*.storageFileName.max' => 'Storage file name must be at most 255 characters',
    ];
  }
}
