<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDeliveredRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'item_images' => 'array',
            'item_images.*.image_name' => 'required',
            'item_images.*.image_alias' => 'nullable',

            'pod_images' => 'array',
            'pod_images.*.image_name' => 'required',
        ];
    }
}
