<?php

namespace App\Http\Requests\Api\Truck;

use Illuminate\Foundation\Http\FormRequest;

class ChangeTruckV2FilesFolderRequest extends FormRequest {
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
      'folderId' => 'required|integer|exists:truck_folders,id,company_id,' . getAuthAdminCompanyId(),
      'files' => 'required|array|min:1',
      'files.*.fileId' => 'required_with:files|integer|exists:truck_files,id'
    ];
  }

  public function messages(): array {
    return [
      'files.*.fileId.required_with' => 'The files fileId is required.',
      'files.*.fileId.integer' => 'The files fileId must be an integer.',
      'files.*.fileId.exists' => 'The files fileId is invalid.',
    ];
  }
}
