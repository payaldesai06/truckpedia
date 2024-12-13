<?php

namespace App\Http\Requests\Api\MaintenanceV2ServiceType;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrUpdateMaintenanceV2ServiceRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   */
  public function rules(): array {
    return [
      'serviceType' => 'required|string|max:255',
    ];
  }
}
