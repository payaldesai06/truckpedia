<?php

namespace App\Http\Requests\Api\Truckpedia;

use Illuminate\Foundation\Http\FormRequest;

class TrackCarrierTrucksRequest extends FormRequest {
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
      'loads' => 'nullable|array',
      'loads.*.loadId' => 'nullable|integer|exists:loads,id',
    ];
  }

  public function messages(): array {
    return [
      'loads.*.loadId.number' => 'The loads loadId field must be a number.',
      'loads.*.loadId.exists' => 'The loads loadId field is invalid',
    ];
  }
}