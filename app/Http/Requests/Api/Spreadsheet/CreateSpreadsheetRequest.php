<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class CreateSpreadsheetRequest extends FormRequest {
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
      // 'name' => 'nullable|string|max:255',
      //      'keyEntity' => 'required',
    ];
  }
}