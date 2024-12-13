<?php

namespace App\Http\Requests\Api\SavedEquipmentTypes;

use Illuminate\Foundation\Http\FormRequest;

class CreateSavedEquipmentTypeRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'equipmentType' => 'required|string|max:255',
      'description' => 'nullable|string|max:255',
      'weight' => 'nullable|numeric|between:0,99999999.9999',
      'weightUnit' => 'nullable|string|in:' . implode(',', config('constant.weight_unit')),
      'qty' => 'nullable|numeric|between:0,99999999.9999',
      'qtyUnit' => 'nullable|string|in:' . implode(',', config('constant.quantity_unit')),
      'length' => 'nullable|string|max:255',
      'width' => 'nullable|string|max:255',
      'height' => 'nullable|string|max:255'
    ];
  }
}
