<?php

namespace App\Http\Requests\Api\SavedEquipmentTypes;

use Illuminate\Foundation\Http\FormRequest;

class GetListSavedEquipmentTypesRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'filters' => 'nullable',
      'filters.equipmentType' => 'nullable|string|max:255',
    ];
  }


  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'filters.equipmentType.string' => 'The filters equipmentType field must be a string type.',
      'filters.equipmentType.max' => 'The filters equipmentType field maximum length is 255.',
    ];
  }
}
