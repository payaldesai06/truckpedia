<?php

namespace App\Http\Requests\Api\AuthorizeNet;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AuthorizeNetConnectRequest extends FormRequest {
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
   */
  public function rules(): array {
    return [
      'loginId' => 'required|string|max:255',
      'transactionKey' => 'required|string|max:255',
      'publicClientKey' => 'required|string|max:255',
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   * @return array
   */
  public function messages(): array {
    return [
      'loginId.required' => 'Login ID is required.',
      'loginId.string' => 'Login ID must be a string.',
      'loginId.max' => 'The Login ID must be 255 characters or fewer.',
      'transactionKey.required' => 'Transaction Key is required.',
      'transactionKey.string' => 'Transaction Key must be a string.',
      'transactionKey.max' => 'The Transaction Key must be 255 characters or fewer.',
      'publicClientKey.required' => 'Public Client Key is required.',
      'publicClientKey.string' => 'Public Client Key must be a string.',
      'publicClientKey.max' => 'The Public Client Key must be 255 characters or fewer.'
    ];
  }
}
