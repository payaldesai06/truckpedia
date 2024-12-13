<?php

namespace App\Http\Requests\Api\Auth;

use Illuminate\Foundation\Http\FormRequest;

class OneStepUserRegistrationRequest extends FormRequest {
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'first_name' => 'required',
      'last_name' => 'required',
      'email' => 'required|email|unique:users',
      'password' => 'nullable|min:6',
      'business_name' => 'required',
      'usdot_number' => 'nullable',
      'load_unique_id_started_from' => 'nullable|numeric',
      'business_email' => 'nullable|email',
      'address' => 'nullable',
      'city' => 'nullable',
      'state' => 'nullable',
      'zipcode' => 'nullable',
      'phone_number' => 'nullable',
      'timezone' => 'required',
      'business_url' => 'nullable|string|max:100|min:3',
      'customDomain' => 'nullable|string|max:100|min:3',
      'fax_number' => 'nullable'
    ];
  }
}
