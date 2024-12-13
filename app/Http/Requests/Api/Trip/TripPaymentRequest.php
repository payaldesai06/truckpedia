<?php

namespace App\Http\Requests\Api\Trip;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class TripPaymentRequest extends FormRequest
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
            'trip_payments.*.driver_id' => ['required', 'exists:users,id'],
            'trip_payments.*.trip_id' => ['required', 'exists:trips,id'],
            'trip_payments.*.reimbursement' => 'required',
            'trip_payments.*.total_payment' => 'required',
            'trip_payments.*.load_payment' => 'required',

            'trip_payments.*.stop_charge' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            'trip_payments.*.detention_charge' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            'trip_payments.*.layover_charge' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),

            'trip_payments.*.driver_pay_types' => ['required', "in:" . config('constant.driver_pay_type.per_mile') . "," . config('constant.driver_pay_type.hourly') . "," . config('constant.driver_pay_type.percentage')],

            // 'trip_payments.*.per_mail_charges' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.pay_per_stop_rate' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.pay_per_stop_start_after' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.detention_rate' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.detention_start_after' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.layover_rate' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.layover_start_after' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
            // 'trip_payments.*.reimbursement' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),

            // 'trip_payments.*.hourly_rate' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.hourly')),

            // 'trip_payments.*.load_pay_percentage' => Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.percentage')),
            // 'trip_payments.*.load_pay_percentage_of' => [
            //     Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.percentage')),
            //     "in:" . config('constant.load_pay_percentage_of.hauling_fees') . "," . config('constant.load_pay_percentage_of.total_income') . "," . config('constant.load_pay_percentage_of.hauling_plus_fuel_surcharge')
            // ],

            'trip_expenses.*.id' => ['required', 'exists:trip_expenses,id'],
            'trip_expenses.*.approve_quantity_description' => 'required',
            'trip_expenses.*.approve_cost' => 'required',
        ];
    }
}
