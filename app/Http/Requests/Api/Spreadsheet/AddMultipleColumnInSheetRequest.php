<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class AddMultipleColumnInSheetRequest extends FormRequest {
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
      'columns' => 'required|array|min:1',
      'columns.*.name' => 'required_with:customType|string|max:255',
      'columns.*.existingCustomColumnId' => 'nullable|numeric',
      'columns.*.predefinedColumn' => 'nullable|string|in:' . implode(',', config('constant.spreadsheet.predefinedColumns.load')),
      'columns.*.customType' => 'nullable|string|in:' .
        implode(',', array_keys(config('constant.spreadsheet.customType'))),
    ];
  }
}
