<?php

namespace App\Http\Requests\Api\Truckpedia;

use Illuminate\Foundation\Http\FormRequest;

class SearchAvailableTruckByLoadRequest extends FormRequest {
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
   * @return array
   */
  public function rules(): array {
    return [
      'loadId' => 'required|integer|exists:loads,id,admin_company_detail_id,' . getAuthAdminCompanyId()
    ];
  }
}
