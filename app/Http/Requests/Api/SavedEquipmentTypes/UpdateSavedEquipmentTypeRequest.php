<?php

namespace App\Http\Requests\Api\SavedEquipmentTypes;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSavedEquipmentTypeRequest extends FormRequest {

  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }


  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'id' => 'required|integer|exists:saved_equipment_types,id,company_id,' .
        getAuthAdminCompanyId(),
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
