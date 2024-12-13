<?php

namespace App\Http\Requests\Api\Referral;

use Illuminate\Foundation\Http\FormRequest;

class CreateReferralRequest extends FormRequest {
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
      'companyName' => 'nullable|string|max:255',
      'firstName' => 'nullable|string|max:255',
      'lastName' => 'nullable|string|max:255',
      'phone' => 'nullable|string|max:255',
      'email' => 'nullable|string|email',
      'state' => 'nullable|string|min:2|max:2',
      'numberOfTrucks' => 'nullable|string|max:255',
    ];
  }
}
