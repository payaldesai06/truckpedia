<?php

namespace App\Http\Requests\Api\LoadImage;

use Illuminate\Foundation\Http\FormRequest;

class LoadDeliveredImageRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'images' => ['required', 'array'],
      'images.*.image_name' => 'required',
      'images.*.image_alias' => 'nullable',
      'images.*.originalFilename' => 'nullable|string|max:255',
    ];
  }
}
