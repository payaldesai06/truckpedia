<?php

namespace App\Http\Requests\Api\FactoringCompany;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateFactoringCompanyRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    return [
      'name' => 'required|string|max:255',
      'billing_email' => 'required|email|max:255',
      'address' => 'required|string|max:255',
      'city' => 'required|string|max:255',
      'state' => 'required|string|max:255',
      'zip_code' => 'required|string|max:255',
      'phone_number' => 'required|string|max:255',
      'factoring_fee_fractional' => 'nullable|numeric|min:0|max:1',
      'request_payment_merge_pdfs' => 'nullable',
      'integrationPartner' => 'nullable|string|in:' . implode(',', array_values(config('constant.factoringCompany.integrationPartners'))),
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'integrationPartner.in' => 'The integrationPartner field must be in ' . implode(', ', config('constant.factoringCompany.integrationPartners')) . '.',
    ];
  }
}
