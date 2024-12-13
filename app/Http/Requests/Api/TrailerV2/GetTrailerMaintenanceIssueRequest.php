<?php

namespace App\Http\Requests\Api\TrailerV2;

use Illuminate\Foundation\Http\FormRequest;

class GetTrailerMaintenanceIssueRequest extends FormRequest {
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
      'id' => 'required|integer|exists:trailers,id',
      'pageSize' => 'nullable|integer|min:1'
    ];
  }
}
