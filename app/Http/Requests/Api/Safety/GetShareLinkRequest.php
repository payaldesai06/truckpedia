<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class GetShareLinkRequest extends FormRequest {
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
      'type' => 'required|string|in:' . config('constant.incident.share.LinkType'),
    ];
  }
}
