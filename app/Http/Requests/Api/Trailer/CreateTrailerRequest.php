<?php

namespace App\Http\Requests\Api\Trailer;

use Illuminate\Foundation\Http\FormRequest;

class CreateTrailerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'trailer_number' => 'required',
            'trailer_type' => 'nullable',
            'licence_plate' => 'nullable',
            'licence_plate_expiry' => ['nullable', 'date_format:Y-m-d'],
            'inspection_expiry' => ['nullable', 'date_format:Y-m-d'],
            'status' => ['nullable', 'in:active,inactive'],
            'ownership' => ['nullable', 'in:company_trailer,owner_operator,leased'],
            'vin'=> 'nullable|string|max:255',
            'make' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:255',
        ];
    }
}
