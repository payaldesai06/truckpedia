<?php

namespace App\Http\Requests\Api\WaitingList;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateWaitingListRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'company_name' => 'required',
            'email' => ['required', 'email', Rule::unique('waiting_lists')],
            'phone_number' => 'required',
            'number_of_trucks' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'email.unique' => 'you\'re already added to our waiting list.'
        ];
    }
}
