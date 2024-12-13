<?php

namespace App\Http\Requests\Api\ExternalRouting;

use Illuminate\Foundation\Http\FormRequest;

class PcMilerRequest extends FormRequest {
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
      'apiKey' => 'nullable|string|max:255',
      'dataVersion' => 'nullable|string|max:255'
    ];
  }
}
