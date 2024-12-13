<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSelectFieldsRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    return [
      'showRateConToDriver' => 'nullable|boolean',
      'loadId' => 'required|integer|exists:loads,id,admin_company_detail_id,' . getAuthAdminCompanyId(),
    ];
  }
}
