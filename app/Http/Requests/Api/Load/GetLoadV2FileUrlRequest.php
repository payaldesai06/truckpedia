<?php

namespace App\Http\Requests\Api\Load;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class GetLoadV2FileUrlRequest extends FormRequest {
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
   * @throws Exception
   */
  public function rules(): array {
    return [
      'loadId' => 'required_unless:type,' . config('constant.uploadFileType.rc') . '|nullable|integer|exists:loads,id,admin_company_detail_id,' . getAuthAdminCompanyId(),
      'files' => 'required|array',
      'files.*.extension' => 'required|string|min:1|max:10',
      'type' => 'required|string|in:' . implode(',', config('constant.uploadFileType')),
    ];
  }

  public function messages(): array {
    return [
      'files.*.extension.required' => 'The files extension field is required.',
      'files.*.extension.string' => 'The files extension field must be a string.',
      'files.*.extension.max' => 'The files extension field maximum length is 10.',
      'type.in' => 'Type field must be in ' . implode('|', config('constant.uploadFileType')) . '.',
    ];
  }
}
