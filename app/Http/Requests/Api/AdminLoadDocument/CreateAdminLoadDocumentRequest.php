<?php

namespace App\Http\Requests\Api\AdminLoadDocument;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateAdminLoadDocumentRequest extends FormRequest {
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
      'document_type' => 'required|in:' . implode(',', config('constant.load.documentType')),
      'image_name' => 'required',
      'originalFileName' => 'nullable|string|max:255',
    ];
  }
}
