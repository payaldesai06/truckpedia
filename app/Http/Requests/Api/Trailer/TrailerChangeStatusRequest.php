<?php

namespace App\Http\Requests\Api\Trailer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TrailerChangeStatusRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'status' => [
                'required',
                Rule::in([
                    config('constant.status.trailer.active'),
                    config('constant.status.trailer.inactive')
                ])
            ]
        ];
    }
}
