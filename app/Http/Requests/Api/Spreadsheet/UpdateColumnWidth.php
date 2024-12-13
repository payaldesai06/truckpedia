<?php

namespace App\Http\Requests\Api\Spreadsheet;

use Illuminate\Foundation\Http\FormRequest;

class UpdateColumnWidth extends FormRequest {
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
      'columnId' => 'required|numeric',
      'columnWidth' => 'required|string',
    ];
  }
}
