<?php

namespace App\Http\Requests\Api\LoadMatching;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTruckReloadDestination extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'truck_id' => 'required|numeric',
      'reload_city' => 'string|min:1',
      'reload_state' => 'string|size:2',
      'reload_states' => 'nullable|array',
      'reload_states.*' => 'string|size:2',
      'reload_city_latitude' => 'required_with:reload_city|numeric',
      'reload_city_longitude' => 'required_with:reload_city|numeric',
    ];
  }
}
