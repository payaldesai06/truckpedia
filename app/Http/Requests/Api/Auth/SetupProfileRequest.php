<?php

namespace App\Http\Requests\Api\Auth;

use Illuminate\Foundation\Http\FormRequest;

class SetupProfileRequest extends FormRequest {
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
      'business_name' => 'required',
      'usdot_number' => 'nullable',
      'email' => ['required', 'email', 'unique:admin_company_details,email'],
      'load_unique_id_started_from' => 'nullable|numeric',
      'address' => 'nullable',
      'city' => 'nullable',
      'state' => 'nullable',
      'zipcode' => 'nullable',
      'phone_number' => 'nullable',
      'fax_number' => 'nullable',
      'timezone' => 'required',
      'companyType' => 'nullable|in:' . implode(',', config('constant.companyType')),
      'referralCode' => 'nullable|string',
    ];
  }
}
