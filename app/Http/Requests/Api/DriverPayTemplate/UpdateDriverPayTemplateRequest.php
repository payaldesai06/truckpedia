<?php

namespace App\Http\Requests\Api\DriverPayTemplate;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDriverPayTemplateRequest extends FormRequest {
  
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
   * @throws Exception
   */
  public function rules(): array {
    $rules = [
      'id' => 'required|integer|exists:driver_pay_templates,id',
      'name' => 'required|string|max:255',
      'loadDetails' => 'nullable|array',
      'loadDetails.*.detailId' => 'nullable|integer|exists:driver_pay_template_details,id',
      'loadDetails.*.fieldId' => 'required_with:loadDetails|string|max:255',
      'loadDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'loadDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'loadDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'tripDetails' => 'nullable|array',
      'tripDetails.*.detailId' => 'nullable|integer|exists:driver_pay_template_details,id',
      'tripDetails.*.fieldId' => 'required_with:tripDetails|string|max:255',
      'tripDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'tripDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'tripDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
    ];
    return $rules;
  }

  public function messages(): array {
    return [
      'loadDetails.*.detailId.required' => 'The loadDetails detailId field is required.',
      'loadDetails.*.detailId.integer' => 'The loadDetails detailId field must be a integer.',

      'loadDetails.*.fieldId.required' => 'The loadDetails fieldId field is required.',
      'loadDetails.*.fieldId.string' => 'The loadDetails fieldId field must be a string.',

      'loadDetails.*.rate.numeric' => 'The loadDetails rate field is numeric.',
      'loadDetails.*.rate.between' => 'The loadDetails rate field must be between -999999.99 and 999999.99.',

      'loadDetails.*.percentage.numeric' => 'The loadDetails percentage field is numeric.',
      'loadDetails.*.percentage.between' => 'The loadDetails percentage field must be between -100 and 100.',

      'loadDetails.*.payStartAfter.integer' => 'The loadDetails payStartAfter field is integer.',
      'loadDetails.*.payStartAfter.between' => 'The loadDetails payStartAfter field must be between 0 and 9999.',


      'tripDetails.*.detailId.required' => 'The tripDetails detailId field is required.',
      'tripDetails.*.detailId.integer' => 'The tripDetails detailId field must be a integer.',
      
      'tripDetails.*.fieldId.required' => 'The tripDetails fieldId field is required.',
      'tripDetails.*.fieldId.string' => 'The tripDetails fieldId field must be a string.',

      'tripDetails.*.rate.numeric' => 'The tripDetails rate field is numeric.',
      'tripDetails.*.rate.between' => 'The tripDetails rate field must be between -999999.99 and 999999.99.',

      'tripDetails.*.percentage.numeric' => 'The tripDetails percentage field is numeric.',
      'tripDetails.*.percentage.between' => 'The tripDetails percentage field must be between -100 and 100.',

      'tripDetails.*.payStartAfter.integer' => 'The tripDetails payStartAfter field is integer.',
      'tripDetails.*.payStartAfter.between' => 'The tripDetails payStartAfter field must be between 0 and 9999.',
    ];
  }
}
