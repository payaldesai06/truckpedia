<?php

namespace App\Http\Requests\Api\SavedAddresses;

use Illuminate\Foundation\Http\FormRequest;

class CreateSavedAddressesRequest extends FormRequest {
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
      'name' => 'required|string|max:255',
      'address' => 'required|string|max:255',
      'state' => 'required|string|max:255',
      'city' => 'required|string|max:255',
      'zip_code' => 'required|max:255',
      'contact' => 'nullable',
      'phone' => 'nullable',
      'email' => 'nullable|email',
      'latitude' => 'required|numeric',
      'longitude' => 'required|numeric',
      'taggedCustomerId' => 'nullable|integer|exists:customers,id,company_id,' . getAuthAdminCompanyId(),
      'taggedCustomerBillToCode' => 'nullable|string|max:255',
      'zone' => 'nullable|string|max:255',
      'trailerRecoveryFee' => 'nullable|numeric|between:0,999999.99',
    ];
  }
}
