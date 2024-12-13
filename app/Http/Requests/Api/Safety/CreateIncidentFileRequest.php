<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class CreateIncidentFileRequest extends FormRequest {
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
      'incidentId' => 'required|integer|exists:incidents,id,company_id,' . getAuthAdminCompanyId(),
      'files' => 'required|array',
      'files.*.isPrivate' => 'nullable|string|in:' . implode(',', config('constant.incident.folder.type')),
      'files.*.fileLabel' => 'nullable|string|in:' . implode(',', config('constant.incident.fileLabel')),
      'files.*.originalFilename' => 'required|string|min:3|max:255',
      'files.*.storageFilename' => 'required|string|min:3|max:255'
    ];
  }

  public function messages(): array {
    return [
      'files.*.isPrivate.string' => 'The files isPrivate field only supports the string type.',
      'files.*.isPrivate.in' => 'The isPrivate field only supports the following values: ' .
        implode(',', config('constant.incident.folder.type')),
      'files.*.fileLabel.string' => 'The files fileLabel field only supports the string type.',
      'files.*.fileLabel.in' => 'The fileLabel field only supports the following values: ' .
        implode(', ', config('constant.incident.fileLabel')),
      'files.*.originalFilename.string' => 'The files originalFilename field only supports the string type.',
      'files.*.originalFilename.min' => 'The files originalFilename field minimum length is 3.',
      'files.*.originalFilename.max' => 'The files originalFilename field maximum length is 255.',
      'files.*.storageFilename.required' => 'The files storageFilename field is required.',
      'files.*.storageFilename.string' => 'The files storageFilename field only supports the string type.',
      'files.*.storageFilename.min' => 'The files storageFilename field minimum length is 3.',
      'files.*.storageFilename.max' => 'The files storageFilename field maximum length is 255.',
    ];
  }
}
