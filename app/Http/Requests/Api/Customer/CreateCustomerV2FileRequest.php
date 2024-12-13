<?php

namespace App\Http\Requests\Api\Customer;

use Illuminate\Foundation\Http\FormRequest;

class CreateCustomerV2FileRequest extends FormRequest {
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
      'folderId' => 'required|integer|exists:customer_folders,id,company_id,' . getAuthAdminCompanyId(),
      'customerId' => 'required|integer|exists:customers,id,company_id,' . getAuthAdminCompanyId(),
      'files' => 'required|array',
      'files.*.originalFileName' => 'nullable|string|max:255',
      'files.*.fileName' => 'required|string|min:3|max:255'
    ];
  }

  public function messages(): array {
    return [
      'files.*.fileName.required' => 'The files fileName field is required.',
      'files.*.originalFileName.string' => 'The files originalFileName field is supported only string type.',
      'files.*.fileName.string' => 'The files fileName field is supported only string type.',
      'files.*.fileName.min' => 'The files fileName field minimum length is 3.',
      'files.*.originalFileName.max' => 'The files originalFileName field maximum length is 255.',
      'files.*.fileName.max' => 'The files fileName field maximum length is 255.',
    ];
  }
}
