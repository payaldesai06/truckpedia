<?php

namespace App\Http\Requests\Api\RateConfirmationS3;

use Illuminate\Foundation\Http\FormRequest;
use phpDocumentor\Reflection\DocBlock\Tags\Param;

class RateConfirmationS3Request extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'file_name' => ['required', 'string']
        ];
    }
}
