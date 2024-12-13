<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomFileRequest extends FormRequest {
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
      'files' => ['nullable', 'array'],
      'files.*.originalFileName' => ['nullable', 'string', 'min:1', 'max:255'],
      'files.*.storageFileName' => ['nullable', 'string', 'min:1', 'max:255'],
    ];
  }
}
