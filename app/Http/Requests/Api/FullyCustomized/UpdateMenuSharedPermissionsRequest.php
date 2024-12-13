<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMenuSharedPermissionsRequest extends FormRequest {
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
      'id' => ['required', 'integer', 'exists:fc_menus,id'],
      'sharedPermissions' => ['required', 'array'],
      'sharedPermissions.*.userId' => ['required', 'integer', 'exists:users,id'],
      'sharedPermissions.*.accessLevel' => ['required', 'string', Rule::in(array_values(config('constant.fcSharedPermissions.accessLevel')))],
    ];
  }

  public function messages() {
    return [
      'sharedPermissions.*.userId.required' => 'The user Id is required.',
      'sharedPermissions.*.userId.exists' => 'The user Id does not exist.',
      'sharedPermissions.*.accessLevel.required' => 'The access level is required.',
      'sharedPermissions.*.accessLevel.in' => 'The access level should be one of '. implode(', ', config('constant.fcSharedPermissions.accessLevel')),
    ];
  }
}
