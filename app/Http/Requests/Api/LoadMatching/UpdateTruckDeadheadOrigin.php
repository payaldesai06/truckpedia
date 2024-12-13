<?php

namespace App\Http\Requests\Api\LoadMatching;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTruckDeadheadOrigin extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'truck_id' => 'required|numeric',
      'dh_origin' => 'required|numeric',
    ];
  }
}