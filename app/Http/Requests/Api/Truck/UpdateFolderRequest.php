<?php

namespace App\Http\Requests\Api\Truck;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFolderRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'folderId' => 'required|integer|exists:truck_folders,id',
      'folderName' => 'required|string|min:1|max:255'
    ];
  }
}