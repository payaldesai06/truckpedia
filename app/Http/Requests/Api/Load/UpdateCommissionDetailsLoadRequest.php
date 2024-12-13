<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCommissionDetailsLoadRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array
  {
    return [
      'dispatcher_paid' => 'nullable|boolean',
      'override_commission_fractional' => 'nullable|numeric|min:-1|max:1',
      'shared_dispatcher_commission_fractional' => 'nullable|numeric|min:-1|max:1',
      'other_commission_amount' => 'nullable|numeric|min:-999999.99|max:999999.99',
    ];
  }
}
