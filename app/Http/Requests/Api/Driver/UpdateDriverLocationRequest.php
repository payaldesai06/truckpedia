<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDriverLocationRequest extends FormRequest {
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
   */
  public function rules() {
    return [
      'latitude' => 'required',
      'longitude' => 'required',
      'localTime' => 'nullable|date_format:' . config('constant.date_time_format'),
      'localTimezone' => 'nullable|string',
      'platform' => 'nullable|string|in:' . implode(',', config('constant.mobileApps.platform')),
    ];
  }
}
