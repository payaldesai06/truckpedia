<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class DeleteIncidentNoteRequest extends FormRequest {
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
      'noteId' => 'required|integer|exists:incident_notes,id,incident_id,' . request('incidentId'),
      'incidentId' => 'required|integer|exists:incidents,id,company_id,' . getAuthAdminCompanyId()
    ];
  }
}
