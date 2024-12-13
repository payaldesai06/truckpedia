<?php

namespace App\Http\Requests\Api\SuperAdmin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyFeatureAccessRequest extends FormRequest {
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
      'featureAccess' => 'nullable|array',
      'featureAccess.*' => 'required|distinct|in:' . implode(',', config('constant.company.features')),
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'featureAccess.*.required' => 'The feature access field is required.',
      'featureAccess.*.distinct' => 'The feature access field must be unique.',
      'featureAccess.*.in' => 'The feature access field must be in ' .
        implode(',', config('constant.company.features')),
    ];
  }
}
