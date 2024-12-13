<?php

namespace App\Http\Requests\Api\FuelCard\Wex;

use Illuminate\Foundation\Http\FormRequest;

class GetIftaDataRequest extends FormRequest {

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
      'companyId' => 'required|int|exists:admin_company_details,id',
      'startDate' => 'required|date|date_format:Y-m-d',
      'endDate' => 'required|date|after:startDate|date_format:Y-m-d',
    ];
  }
}
