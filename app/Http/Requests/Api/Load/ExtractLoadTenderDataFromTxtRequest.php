<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class ExtractLoadTenderDataFromTxtRequest extends FormRequest {

  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'rawText' => 'required|string',
    ];
  }
}
