<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class CreateTripV2CustomPaymentFieldRequest extends FormRequest {
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
      'name' => 'required|string|min:1|max:100',
      'description' => 'nullable|string|max:255'
    ];
  }
}