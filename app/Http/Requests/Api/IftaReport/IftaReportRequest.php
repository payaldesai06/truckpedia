<?php

namespace App\Http\Requests\Api\IftaReport;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class IftaReportRequest extends FormRequest {
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
   * @throws Exception
   */
  public function rules(): array {
    return [
      'year' => 'required|integer|digits:4|gte:2015,lte:2100',
      'quarter' => 'required|integer|in:1,2,3,4',
    ];
  }
}