<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class CreateUpdateIncidentNoteRequest extends FormRequest {

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
      'incidentId' => 'required|integer|exists:incidents,id,company_id,' . getAuthAdminCompanyId(),
      'localDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'localTime' => 'nullable|date_format:' . config('constant.time_format'),
      'contactType' => 'nullable|string|in:' .
        implode(',', config('constant.incident.note.contactType')),
      'name' => 'nullable|string|max:255',
      'phone' => 'nullable|string|max:255',
      'email' => 'nullable|string|max:255',
      'note' => 'required|string|max:160000'
    ];

    if ($this->method() == 'PATCH') {
      $incidentId = $this->get('incidentId');
      $rules['noteId'] = "required|integer|exists:incident_notes,id,incident_id,{$incidentId}";
    }
    return $rules;
  }
}
