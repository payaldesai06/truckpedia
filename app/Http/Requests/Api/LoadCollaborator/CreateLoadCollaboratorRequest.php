<?php

namespace App\Http\Requests\Api\LoadCollaborator;

use Illuminate\Foundation\Http\FormRequest;

class CreateLoadCollaboratorRequest extends FormRequest {
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
  public function rules(): array
  {
    return [
      'load_id' => 'required|numeric',
      'name' => 'nullable|string|max:255',
      'email' => 'required|email|max:255',
    ];
  }

}
