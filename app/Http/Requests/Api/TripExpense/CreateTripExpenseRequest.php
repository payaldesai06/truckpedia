<?php

namespace App\Http\Requests\Api\TripExpense;

use Illuminate\Foundation\Http\FormRequest;

class CreateTripExpenseRequest extends FormRequest
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
            'expense_type_id' => ['required', 'exists:App\Models\ExpenseType,id'],
            'trip_id' => ['required', 'exists:App\Models\Trip,id'],
            'date' => ['required', 'date_format:Y-m-d'],
            'quantity_description' => 'required',
            'cost' => 'required',
            'vendor_address' => 'required',
            'reimbursed' => ['required', "in:0,1"],
            'state'=>'required|string',
            'zip_code'=>'required',
            'diesel_gallons'=>'numeric',
            'diesel_price'=>'numeric',
            'def_gallons'=>'numeric',
            'def_price'=>'numeric',
            'item_images' => 'array',
            'item_images.*.image_name' => 'required',
        ];
    }
}
