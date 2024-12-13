<?php

namespace App\Http\Requests\Api\TrailerV2;

use Illuminate\Foundation\Http\FormRequest;

class GetLogListTrailerV2Request extends FormRequest {
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
      'filter' => 'nullable',
      'pageSize' => 'nullable|integer'
    ];
  }
}
