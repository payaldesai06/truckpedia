<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\Dat;

use Illuminate\Foundation\Http\FormRequest;

class CreateDatUserAccount extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'username' => 'required|string|max:255',
    ];
  }
}
