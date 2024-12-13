<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\CHRobinson;

use Illuminate\Foundation\Http\FormRequest;

class CreateCHRobinsonCarrierCodeRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'carrierCode' => 'required|string|min:1',
    ];
  }
}
