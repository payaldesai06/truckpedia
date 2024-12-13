<?php

namespace App\Http\Requests\Api\SuperAdmin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMonthlyFeesRequest extends FormRequest {
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
      'monthly_fee' => 'required|numeric|gt:0',
      'monthly_fee_per_unit' => 'nullable|numeric|lte:monthly_fee|gt:0',
      'subscriptionRenewFrequency' => 'nullable|integer',
    ];
  }
}
