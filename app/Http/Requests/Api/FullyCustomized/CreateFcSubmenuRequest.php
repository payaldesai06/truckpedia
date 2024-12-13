<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateFcSubmenuRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    return [
      'menuId' => ['required', 'integer', 'exists:fc_menus,id'],
      'name' => ['required', 'string', 'min:1', 'max:100'],
      'predefinedData' => ['nullable', 'string', 'min:1', 'max:100', Rule::in(array_values(config('constant.fcSubmenus.predefinedData')))],
      'views' => ['required', 'array'],
      'views.*.name' => ['required', 'string', 'min:1', 'max:100'],
      'views.*.type' => ['required', 'string', Rule::in(array_values(config('constant.fcViews.type')))],
    ];
  }

  public function messages() {
    return [
      'predefinedData.in' => 'The selected predefined data value is invalid. Allowed values are ' . implode(', ', config('constant.fcSubmenus.predefinedData')),
      'views.*.type.in' => 'The selected view type is invalid. Allowed types are '. implode(', ', config('constant.fcViews.type')),
      'views.*.name.required' => 'The view name is required.',
      'views.*.type.required' => 'The view type is required.',
      'views.*.name.min' => 'The view name must be at least 1 character.',
      'views.*.name.max' => 'The view name may not be greater than 100 characters.',
    ];
  }
}
