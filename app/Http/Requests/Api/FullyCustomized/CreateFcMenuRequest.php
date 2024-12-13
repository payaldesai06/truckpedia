<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateFcMenuRequest extends FormRequest {
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
      'name' => ['required', 'string', 'min:1', 'max:100'],
      'color' => ['nullable', 'string', 'min:1', 'max:100'],
      'sharedPermissions' => ['nullable', 'array'],
      'sharedPermissions.*.userId' => ['required_with:sharedPermissions', 'integer', 'exists:users,id'],
      'sharedPermissions.*.accessLevel' => ['required_with:sharedPermissions', 'string', Rule::in(array_values(config('constant.fcSharedPermissions.accessLevel')))],
      'submenus' => ['required', 'array'],
      'submenus.*.name' => ['required', 'string', 'min:1', 'max:100'],
      'submenus.*.predefinedData' => ['nullable', 'string', 'min:1', 'max:100', Rule::in(array_values(config('constant.fcSubmenus.predefinedData')))],
      'submenus.*.views' => ['required', 'array'],
      'submenus.*.views.*.name' => ['required', 'string', 'min:1', 'max:100'],
      'submenus.*.views.*.type' => ['required', 'string', Rule::in(array_values(config('constant.fcViews.type')))],
    ];
  }

  public function messages() {
    return [
      'sharedPermissions.*.userId.required_with' => 'The user Id is required.',
      'sharedPermissions.*.userId.integer' => 'The user Id must be an integer.',
      'sharedPermissions.*.userId.exists' => 'The user Id does not exist.',
      'sharedPermissions.*.accessLevel.required_with' => 'The access level is required.',
      'submenus.*.predefinedData.in' => 'The selected predefined data value is invalid. Allowed values are ' . implode(', ', config('constant.fcSubmenus.predefinedData')),
      'submenus.*.views.*.name.min' => 'The view name must be at least 1 character.',
      'submenus.*.views.*.name.max' => 'The view name may not be greater than 100 characters.',
      'submenus.*.views.*.name.required' => 'The view name is required.',
      'submenus.*.views.*.type.required' => 'The view type is required.',
      'submenus.*.views.*.type.in' => 'The selected view type is invalid. Allowed types are '. implode(', ', config('constant.fcViews.type')),
      'submenus.*.views.required' => 'The views field is required for every submenu item.',
      'submenus.*.views.*.array' => 'The views field should be an array.',
    ];
  }
}
