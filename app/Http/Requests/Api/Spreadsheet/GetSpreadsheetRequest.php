<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class GetSpreadsheetRequest extends FormRequest {
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
      'id' => 'required|numeric',
      'startDate' => 'required|date',
      'endDate' => 'required|date',
      'sheets' => 'nullable|array',
      'sheets.*.id' => 'nullable|numeric',
      'sheets.*.filter' => 'nullable',
    ];
  }

  public function messages(): array {
    return [
      'sheets.*.id.numeric' => 'The sheet id must be a numeric.',
    ];
  }
}
