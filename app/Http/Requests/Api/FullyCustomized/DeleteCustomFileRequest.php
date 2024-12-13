<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;

class DeleteCustomFileRequest extends FormRequest {
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
      'recordId' => ['required', 'integer', 'exists:fc_custom_records,id,submenu_id,' . $this->submenuId],
      'fieldId' => ['required', 'integer', 'exists:fc_custom_fields,id,submenu_id,' . $this->submenuId],
      'files' => ['required', 'array'],
      'files.*.id' => ['required', 'integer', 'exists:fc_custom_data_type_files,id'],
    ];
  }

  public function messages() {
    return [
      'files.*.id.required' => 'File id is required',
      'files.*.id.exists' => 'File id does not exist',
    ];
  }
}
