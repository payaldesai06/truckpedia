<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDriverFolderV2Request extends FormRequest {
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
      'folderId' => ['required', 'integer', 'exists:driver_v2_folders,id'],
      'folderName' => ['required', 'string', 'min:1', 'max:255'],
    ];
  }
}
