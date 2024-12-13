<?php

namespace App\Http\Requests\Api\LoadMatching;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTruckMaxWeight extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array
  {
    return [
      'truck_id' => 'required|numeric',
      'matching_max_weight' => 'nullable|numeric',
    ];
  }
}