<?php

namespace App\Http\Requests\Api\Planning;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDriverTimeOffCalendarRequest extends FormRequest {
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
      'id' => 'required|integer|exists:driver_time_off_calendar,id',
      'start.date' => 'required|date|date_format:' . config('constant.date_format'),
      'start.time' => 'nullable|date_format:' . config('constant.time_format'),
      'start.timezone' => 'nullable|string|max:255',
      'end.date' => 'required|date|date_format:' . config('constant.date_format'),
      'end.time' => 'nullable|date_format:' . config('constant.time_format'),
      'end.timezone' => 'nullable|string|max:255',
    ];
  }

  public function messages(): array {
    return [
      'start.date.required' => 'The start date field is required.',
      'start.date.date' => 'The start date field must be a date.',
      'start.date.date_format' => 'The start date field does not match the format Y-m-d.',
      'start.time.date_format' => 'The start time field does not match the format H:i.',
      'start.timezone.string' => 'The start timezone field must be a string.',
      'start.timezone.max' => 'The start timezone field maximum length is 255.',
      'end.date.required' => 'The end date field is required.',
      'end.date.date' => 'The end date field must be a date.',
      'end.date.date_format' => 'The end date field does not match the format Y-m-d.',
      'end.time.date_format' => 'The end time field does not match the format H:i.',
      'end.timezone.string' => 'The end timezone field must be a string.',
      'end.timezone.max' => 'The end timezone field maximum length is 255.',
    ];
  }
}
