<?php

namespace App\Http\Requests\Api\LoadMatching;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTruckReloadDate extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'truck_id' => 'required|numeric',
      'reload_date' => 'required|date_format:Y-m-d'
    ];
  }
}
