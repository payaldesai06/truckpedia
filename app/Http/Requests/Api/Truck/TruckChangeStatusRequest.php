<?php

namespace App\Http\Requests\Api\Truck;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TruckChangeStatusRequest extends FormRequest
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
                    config('constant.status.truck.active'),
                    config('constant.status.truck.inactive')
                ])
            ]
        ];
    }
}
