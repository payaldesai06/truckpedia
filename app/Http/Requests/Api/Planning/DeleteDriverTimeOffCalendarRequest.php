<?php

namespace App\Http\Requests\Api\Planning;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class DeleteDriverTimeOffCalendarRequest extends FormRequest {
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
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $rules = [
      'id' => 'required|integer|exists:driver_time_off_calendar,id'
    ];
    return $rules;
  }
}
