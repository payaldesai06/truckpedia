<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateFcViewRequest extends FormRequest {
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
      'submenuId' => ['required', 'integer', 'exists:fc_submenus,id'],
      'name' => ['required', 'string', 'min:1', 'max:100'],
      'type' => ['required', 'string', Rule::in([
        config('constant.fcViews.type.1'),
        config('constant.fcViews.type.2'),
        config('constant.fcViews.type.3'),
        config('constant.fcViews.type.4'),
      ])],
    ];
  }

  public function messages() {
    return [
      'type.in' => 'The selected type is invalid. Allowed types are list, table, board and gantt.',
    ];
  }
}
