<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class GetIncidentFileLinksRequest extends FormRequest {
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
      'files.*.id' => 'required|integer|exists:incident_files,id,incident_id,' . request('incidentId'),
    ];
  }

  public function messages(): array {
    return [
      'files.*.id.required' => 'The files id field is required.',
      'files.*.id.integer' => 'The files id field only supports the integer type.',
      'files.*.id.exists' => 'The files id field is not valid.',
    ];
  }
}
