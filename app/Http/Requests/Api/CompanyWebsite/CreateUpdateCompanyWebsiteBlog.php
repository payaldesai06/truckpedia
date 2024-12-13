<?php

namespace App\Http\Requests\Api\CompanyWebsite;

use Illuminate\Foundation\Http\FormRequest;

class CreateUpdateCompanyWebsiteBlog extends FormRequest {
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
    $rules = [
      'title' => 'required|string|min:1|max:255',
      'content' => 'required|json'
    ];

    if ($this->method() == 'PATCH') {
      $rules['id'] = 'required|integer|exists:company_website_blogs,id,company_id,' . getAuthAdminCompanyId();
    }
    return $rules;
  }
}
