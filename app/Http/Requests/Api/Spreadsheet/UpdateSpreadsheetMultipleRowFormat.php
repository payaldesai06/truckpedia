<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSpreadsheetMultipleRowFormat  extends FormRequest {
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
      'sheetId' => 'required|numeric',
      'rows' => 'array',
      'rows.*.keyId' => 'required|numeric',
      'rows.*.format' => 'nullable',
    ];
  }

  public function messages(): array {
    return [
      'rows.*.keyId.required' => 'Key id is required.',
      'rows.*.keyId.numeric' => 'Key id is only numeric type.'
    ];
  }
}
