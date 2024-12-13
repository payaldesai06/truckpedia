<?php

namespace App\Http\Requests\Api\Sync;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class ExportDriverPayRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
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
      'username' => 'required|string|exists:common_key_value_pairs,key',
      'password' => 'required|string|exists:common_key_value_pairs,value,key,' . request('username'),
      'startDate' => 'required|date_format:' . config('constant.date_format'),
      'endDate' => 'required|date_format:' . config('constant.date_format'),
    ];
  }
}
