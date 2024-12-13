<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePickupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'item_images' => 'array',
            'item_images.*.image_name' => 'required',
            'item_images.*.image_alias' => 'nullable',
        ];
    }
}
