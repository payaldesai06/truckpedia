<?php

namespace App\Http\Requests\Api\AdminLoadRateConfirmation;

use Illuminate\Foundation\Http\FormRequest;

class CreateAdminLoadRateConfirmationRequest extends FormRequest
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
            'file_name' => 'required',
            'originalFileName' => 'nullable|string|max:255',
        ];
    }
}
