<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class AddColumnSpreadsheetRequest extends FormRequest {
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
      'name' => 'required_with:customType|string|max:255',
      'existingCustomColumnId' => 'nullable|numeric|required_without_all:predefinedColumn,customType',
      'predefinedColumn' =>  'required_without_all:existingCustomColumnId,customType|nullable|string',
      'customType' => 'nullable|string|required_without_all:existingCustomColumnId,predefinedColumn|
       in:' . implode(',', array_keys(config('constant.spreadsheet.customType'))),
    ];
  }
}
