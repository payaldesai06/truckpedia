<?php

namespace App\Http\Requests\Api\MaintenanceV2Issue;

use Illuminate\Foundation\Http\FormRequest;

class GetVehicleMaintenanceIssueRequest extends FormRequest {
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
      'type' => 'required|string|in:' . implode(',', config('constant.maintenance.asset_type_int')),
      'vehicleId' => 'required|integer',
      'pageSize' => 'nullable|integer|min:1'
    ];
  }
}
