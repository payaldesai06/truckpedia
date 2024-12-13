<?php

namespace App\Http\Requests\Api\CompanyWebsite;

use Illuminate\Foundation\Http\FormRequest;

class GetCompanyWebsiteBlogList extends FormRequest {
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
      'companyId' => 'required|integer|exists:admin_company_details,id'
    ];
  }
}
