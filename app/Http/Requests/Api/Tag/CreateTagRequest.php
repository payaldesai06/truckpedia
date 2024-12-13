<?php

namespace App\Http\Requests\Api\Tag;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateTagRequest extends FormRequest {
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
      'business_name' => 'required|string|max:255',
      'email' => 'required|email|max:255',
      'address' => 'required|string|max:255',
      'city' => 'required|string|max:255',
      'state' => 'required|string|max:255',
      'zipcode' => 'required|string|max:255',
      'phone_number' => 'nullable|string|max:255',
      'usdot_number' => 'nullable|string|max:255',
      'load_unique_id_started_from' => 'required|numeric',
      'use_tag_for_billing' => 'required|boolean',
      'invoice_sync_cascade' => 'required|boolean',
      'billing_cc_emails' => 'nullable|array',
      'type' => 'nullable|string|in:' . implode(',', config('constant.tags.type')),
      'pay_to_code' => 'nullable|string|max:255',
      'driverPayTemplate' => 'nullable',
      'driverPayTemplate.loadDetails' => 'nullable|array',
      'driverPayTemplate.loadDetails.*.fieldId' => 'required_with:loadDetails|integer',
      'driverPayTemplate.loadDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'driverPayTemplate.loadDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'driverPayTemplate.loadDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'driverPayTemplate.tripDetails' => 'nullable|array',
      'driverPayTemplate.tripDetails.*.fieldId' => 'required_with:tripDetails|integer',
      'driverPayTemplate.tripDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'driverPayTemplate.tripDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'driverPayTemplate.tripDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'logoImageStorageFileName' => 'nullable|string|max:255',
      'numberPrefix' => 'nullable|string|max:255',
      // 'trailers_id' => 'nullable|array',
      // 'truck_ids' => 'nullable|array',
      // 'drivers_id' => 'nullable|array',
    ];
  }

  public function messages(): array {
    return [
      'driverPayTemplate.loadDetails.*.fieldId.required' => 'The loadDetails fieldId field is required.',
      'driverPayTemplate.loadDetails.*.fieldId.integer' => 'The loadDetails fieldId field must be an integer.',
      'driverPayTemplate.loadDetails.*.rate.numeric' => 'The loadDetails rate field is numeric.',
      'driverPayTemplate.loadDetails.*.rate.between' => 'The loadDetails rate field must be between -999999.99 and 999999.99.',
      'driverPayTemplate.loadDetails.*.percentage.numeric' => 'The loadDetails percentage field is numeric.',
      'driverPayTemplate.loadDetails.*.percentage.between' => 'The loadDetails percentage field must be between -100 and 100.',
      'driverPayTemplate.loadDetails.*.payStartAfter.integer' => 'The loadDetails payStartAfter field is integer.',
      'driverPayTemplate.loadDetails.*.payStartAfter.between' => 'The loadDetails payStartAfter field must be between 0 and 9999.',

      'driverPayTemplate.tripDetails.*.fieldId.required' => 'The tripDetails fieldId field is required.',
      'driverPayTemplate.tripDetails.*.fieldId.integer' => 'The tripDetails fieldId field must be an integer.',
      'driverPayTemplate.tripDetails.*.rate.numeric' => 'The tripDetails rate field is numeric.',
      'driverPayTemplate.tripDetails.*.rate.between' => 'The tripDetails rate field must be between -999999.99 and 999999.99.',
      'driverPayTemplate.tripDetails.*.percentage.numeric' => 'The tripDetails percentage field is numeric.',
      'driverPayTemplate.tripDetails.*.percentage.between' => 'The tripDetails percentage field must be between -100 and 100.',
      'driverPayTemplate.tripDetails.*.payStartAfter.integer' => 'The tripDetails payStartAfter field is integer.',
      'driverPayTemplate.tripDetails.*.payStartAfter.between' => 'The tripDetails payStartAfter field must be between 0 and 9999.',
    ];
  }
}
