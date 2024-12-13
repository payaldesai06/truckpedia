<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class EndTripSheetRequest extends FormRequest {
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
      'sheetId' => 'required|integer|exists:trips_v2_sheets,id,user_id,' . auth()->id(),
      'startDate' => 'required|date_format:' . config('constant.date_format'),
      'startTime' => 'required|date_format:' . config('constant.time_format'),
      'endDate' => 'required|date_format:' . config('constant.date_format'),
      'endTime' => 'required|date_format:' . config('constant.time_format'),
      'totalHours' => 'required|numeric|min:0|max:9999.99',
      'startOdometer' => 'nullable|numeric',
      'endOdometer' => 'nullable|numeric',
      'notes' => 'nullable|string|max:2000'
    ];
  }
}
