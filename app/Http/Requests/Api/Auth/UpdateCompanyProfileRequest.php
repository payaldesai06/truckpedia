<?php

namespace App\Http\Requests\Api\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCompanyProfileRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'business_name' => 'required',
      'email' => [
        'required',
        'email',
        Rule::unique('admin_company_details')
          ->ignore($this->user()->admin_company_detail_id)
      ],
      'phone_number' => 'required',
      'address' => 'required',
      'state' => 'required',
      'city' => 'required',
      'zipcode' => 'required',
      'billing_cc_emails' => 'nullable|array',
      'removedImage' => 'nullable|boolean',
    ];
  }
}
