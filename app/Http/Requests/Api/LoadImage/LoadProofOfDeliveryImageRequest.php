<?php

namespace App\Http\Requests\Api\LoadImage;

use Illuminate\Foundation\Http\FormRequest;

class LoadProofOfDeliveryImageRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'originalFilename' => 'nullable|string|max:255',
      'pod_images' => ['required', 'array'],
      'pod_images.*.image_name' => 'required',
    ];
  }
}
