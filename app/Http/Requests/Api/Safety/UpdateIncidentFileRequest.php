<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class UpdateIncidentFileRequest extends FormRequest {
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
      'files.*.fileId' => 'required|integer|exists:incident_files,id,incident_id,' . request('incidentId'),
      'files.*.isPrivate' => 'nullable|string|in:' . implode(',', config('constant.incident.folder.type')),
      'files.*.fileLabel' => 'nullable|string|in:' . implode(',', config('constant.incident.fileLabel')),
    ];
  }

  public function messages(): array {
    return [
      'files.*.fileId.required' => 'The files fileId field is required.',
      'files.*.fileId.integer' => 'The files fileId field only supports the integer type.',
      'files.*.fileId.exists' => 'The files fileId field is not valid.',
      'files.*.isPrivate.string' => 'The files isPrivate field only supports the string type.',
      'files.*.isPrivate.in' => 'The isPrivate field only supports the following values: ' .
        implode(',', config('constant.incident.folder.type')),
      'files.*.fileLabel.string' => 'The files fileLabel field only supports the string type.',
      'files.*.fileLabel.in' => 'The fileLabel field only supports the following values: ' .
        implode(', ', config('constant.incident.fileLabel')),
    ];
  }
}
