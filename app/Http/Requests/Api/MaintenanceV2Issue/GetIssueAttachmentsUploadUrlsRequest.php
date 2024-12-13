<?php

namespace App\Http\Requests\Api\MaintenanceV2Issue;

use Illuminate\Foundation\Http\FormRequest;

class GetIssueAttachmentsUploadUrlsRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   */
  public function rules(): array {
    return [
      'issueAttachments' => 'required|array',
      'issueAttachments.*.extension' => 'required|string|min:1|max:10'
    ];
  }

  public function messages(): array {
    return [
      'issueAttachments.*.extension.required' => 'The issueAttachments extension field is required.',
      'issueAttachments.*.extension.string' => 'The issueAttachments extension field is supported only string type.',
      'issueAttachments.*.extension.min' => 'The issueAttachments extension field minimum length is 1.',
      'issueAttachments.*.extension.max' => 'The issueAttachments extension field maximum length is 10.'
    ];
  }

}
