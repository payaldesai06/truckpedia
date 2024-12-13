<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLoadDriverStatusRequest extends FormRequest {
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
      'shipper_id' => 'nullable|numeric',
      'receiver_id' => 'nullable|numeric',
      'local_time' => 'required|date_format:Y-m-d H:i:s',
      'local_lat' => 'nullable|numeric',
      'local_lng' => 'nullable|numeric',
    ];
  }
}
