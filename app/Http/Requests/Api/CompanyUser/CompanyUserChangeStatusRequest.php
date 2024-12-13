<?php

namespace App\Http\Requests\Api\CompanyUser;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompanyUserChangeStatusRequest extends FormRequest
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
                    config('constant.status.user.active'),
                    config('constant.status.user.inactive')
                ])
            ]
        ];
    }
}
