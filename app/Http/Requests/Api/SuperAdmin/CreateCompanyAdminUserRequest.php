<?php

namespace App\Http\Requests\Api\SuperAdmin;

use Illuminate\Foundation\Http\FormRequest;

class CreateCompanyAdminUserRequest extends FormRequest {
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
      'email' => 'required|email|regex:/(.+)@truckpedia.io$/|unique:users',
      'password' => 'required|min:6|max:255',
      'firstName' => 'required|min:1|max:255',
      'lastName' => 'required|min:1|max:255',
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'email.regex' => 'The email must be a truckpedia.io email.',
    ];
  }
}
