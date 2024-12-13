<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class CreateIncidentEmailRequest extends FormRequest {

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
      'type' => 'required|string|in:' . implode(',', config('constant.incident.email.type')),
      'to' => 'nullable|array',
      'cc' => 'nullable|array',
      'bcc' => 'nullable|array',
      'fromName' => 'nullable|string|max:255',
      'from' => 'nullable|string|max:255',
      'replyTo' => 'nullable|array',
      'replyTo.*' => 'email|distinct',
      'subject' => 'required|string|max:255',
      'content' => 'required|string|max:160000',
    ];
  }

  public function messages(): array {
    return [
      'type.in' => 'Type only supports the following values: ' .
        implode(',', config('constant.incident.email.type')),
      'replyTo.*.email' => 'The replyTo field must have a valid email address.',
      'replyTo.*.distinct' => 'The replyTo field has a duplicate value.',
    ];
  }
}
