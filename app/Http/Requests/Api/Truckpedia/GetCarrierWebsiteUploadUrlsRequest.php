<?php

namespace App\Http\Requests\Api\Truckpedia;

use Illuminate\Foundation\Http\FormRequest;

class GetCarrierWebsiteUploadUrlsRequest extends FormRequest {
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
      'filles' => 'required|array',
      'filles.*.extension' => 'required|string|min:1|max:10',
    ];
  }

  public function messages(): array {
    return [
      'filles.*.extension.required' => 'The selected extension is required.',
      'filles.*.extension.string' => 'The selected extension only string type allowed.',
      'filles.*.extension.min' => 'The selected extension minimum length 1.',
      'filles.*.extension.max' => 'The selected extension maximum length 10.'
    ];
  }
}