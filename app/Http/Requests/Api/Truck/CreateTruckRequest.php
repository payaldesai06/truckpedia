<?php

namespace App\Http\Requests\Api\Truck;

use Illuminate\Foundation\Http\FormRequest;

class CreateTruckRequest extends FormRequest
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
            'truck_number' => 'required',
            'truck_type' => 'nullable',
            'licence_plate' => 'nullable',
            'licence_plate_expiry' => ['nullable', 'date_format:Y-m-d'],
            'inspection_expiry' => ['nullable', 'date_format:Y-m-d'],
            'status' => ['nullable', 'in:active,inactive'],
            'ownership' => ['nullable', 'in:company_truck,owner_operator,leased'],
            'make' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:255',
        ];
    }
}
