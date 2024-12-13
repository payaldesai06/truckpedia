<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFcViewRequest extends FormRequest {
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
      'id' => ['required', 'integer', 'exists:fc_views,id'],
      'name' => ['nullable', 'string', 'min:1', 'max:100'],
    ];
  }
}
