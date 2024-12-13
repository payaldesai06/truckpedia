<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\Dat;

use Illuminate\Foundation\Http\FormRequest;

class GetLoadDetailsRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'searchId' => 'string|min:1',
      'matchId' => 'string|min:1',
    ];
  }
}
