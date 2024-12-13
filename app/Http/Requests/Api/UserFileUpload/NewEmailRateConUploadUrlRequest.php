<?php

namespace App\Http\Requests\Api\UserFileUpload;

use Illuminate\Foundation\Http\FormRequest;

class NewEmailRateConUploadUrlRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'key' => 'required|string|max:255',
      'company' => 'required|string|max:255',
      'extension' => 'nullable|string|max:10'
    ];
  }
}
