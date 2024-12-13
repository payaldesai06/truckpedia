<?php

namespace App\Http\Requests\Api\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Exception;

class GetCompanyFileUploadUrlRequest extends FormRequest {
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
    return [
      'companyId' => 'required|integer|exists:users,id,admin_company_detail_id,'
        . getAuthAdminCompanyId(),
      'extension' => 'required|string|min:1|max:10',
      'type' => 'required|string|in:' . config('constant.uploadFileType.logo'),
    ];
  }
}
