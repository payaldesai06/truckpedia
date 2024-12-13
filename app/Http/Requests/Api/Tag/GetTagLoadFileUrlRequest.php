<?php

namespace App\Http\Requests\Api\Tag;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class GetTagLoadFileUrlRequest extends FormRequest {
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
      'tagId' => 'nullable|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),
      'extension' => 'required|string|min:1|max:10',
      'type' => 'required|string|in:' . config('constant.uploadFileType.logo'),
    ];
  }

}
