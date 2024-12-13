<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class CreateTripSheetRequest extends FormRequest {
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
    return [
      'startDate' => 'required|date_format:' . config('constant.date_format'),
      'startTime' => 'required|date_format:' . config('constant.time_format'),
      'startOdometer' => 'nullable|numeric',
      'notes' => 'nullable|string|max:2000'
    ];
  }
}
