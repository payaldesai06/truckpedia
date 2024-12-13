<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class GetDriverPayRequest extends FormRequest {
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
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $companyId = getAuthAdminCompanyId();
    return [
      'loadId' => 'required|integer|exists:loads,id,admin_company_detail_id,' . $companyId,
      'drivers' => 'required|array|min:0',
      'drivers.*.userId' => 'nullable|integer|exists:users,id,role,' .
        config('constant.roles.driver') . ',admin_company_detail_id,' .
        $companyId,
    ];
  }

  public function messages(): array {
    return [
      'drivers.*.userId.integer' => 'The drivers userId field must be an integer value.',
      'drivers.*.userId.exists' => 'The drivers userId field is having invalid values.'
    ];
  }
}
