<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\TruckStop;

use Illuminate\Foundation\Http\FormRequest;

class CreateTruckStopIntegrationIdRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'integrationId' => 'required|numeric',
    ];
  }
}
