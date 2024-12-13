<?php

namespace App\Http\Requests\Api\Shipper;

use Illuminate\Foundation\Http\FormRequest;

class CreateShipperRequest extends FormRequest {
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
      'name' => 'required',
      'address' => 'required',
      'state' => 'required',
      'city' => 'required',
      'zip_code' => 'required',
      'primary_contact' => 'nullable',
      'phone_number' => 'nullable',
      'email' => 'nullable|email',
    ];
  }
}
