<?php

namespace App\Http\Requests\Api\LoadImage;

use Illuminate\Foundation\Http\FormRequest;

class LoadOtherImageRequest extends FormRequest {
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
  public function rules(): array {
    return [
      'originalFilename' => 'nullable|string|max:255',
      'images' => 'required|array',
      'images.*.imageName' => 'required',
      'type' => 'required|string|in:' . implode(',', config('constant.loadOtherImage')),
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'images.*.imageName.required' => 'The image name field is required.',
      'type.in' =>  'The selected field type is invalid. Allowed types are ' . implode('|', config('constant.loadOtherImage')),
    ];
  }
}
