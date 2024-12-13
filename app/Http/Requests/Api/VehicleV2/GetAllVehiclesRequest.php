<?php

namespace App\Http\Requests\Api\VehicleV2;

use Illuminate\Foundation\Http\FormRequest;

class GetAllVehiclesRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'extraAttributes' => 'nullable|array',
      'extraAttributes.*' => 'string|in:vin,make,year',
    ];
  }

  public function messages(): array {
    return [
      'extraAttributes.*.string' => 'The extraAttributes must be a string.'
    ];
  }
}
