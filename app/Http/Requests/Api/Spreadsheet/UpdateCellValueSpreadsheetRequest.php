<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCellValueSpreadsheetRequest extends FormRequest {
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
      'keyId' => 'required|numeric',
      'customColumnId' => 'required|numeric',
      'value' => 'nullable|string|max:2000',
      // I have to make this change because FE is sending string...
      //'numberValue' => 'nullable|numeric',
      //'currencyValue' => 'nullable|numeric|between:-999999999999999.9999,999999999999999.9999',
    ];
  }
}
