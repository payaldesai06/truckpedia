<?php

namespace App\Http\Requests\Api\Truckpedia;

use Illuminate\Foundation\Http\FormRequest;

class GetCarrierWebsiteRequest extends FormRequest {
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
   */
  public function rules(): array {
    return [
      'customDomain' => 'required_without:businessUrl|string|min:3|max:100',
      'businessUrl' => 'required_without:customDomain|string|min:3|max:100'
    ];
  }
}