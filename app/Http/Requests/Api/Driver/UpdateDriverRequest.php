<?php

namespace App\Http\Requests\Api\Driver;

use App\Models\DriverDetail;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDriverRequest extends FormRequest
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
            'type' => ['nullable', "in:" . config('constant.driver_type.employee') . "," . config('constant.driver_type.contractor')],
            'name' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'phone_number' => ['nullable', 'digits:10'],
            'email' => 'required|email|unique:users,email,' . request('driver'),
            'mailing_address' => 'nullable',
            'driving_license' => 'nullable',
            'issue_state' => 'nullable',
            'password' => 'min:6',
            'medical_expire_date' => ['nullable', 'date_format:Y-m-d'],
            'driving_license_expire_date' => ['nullable', 'date_format:Y-m-d'],
            'contract_start_date' => ['nullable', 'date_format:Y-m-d'],
            'contract_end_date' => ['nullable', 'date_format:Y-m-d'],
            'status' => [
                'required',
                "in:" . config('constant.status.driver.active') . "," . config('constant.status.driver.inactive')
            ],
            'driver_pay_types' => [
                'nullable',
                "in:" . config('constant.driver_pay_type.per_mile') . "," . config('constant.driver_pay_type.hourly') . "," . config('constant.driver_pay_type.percentage')
            ],

            'per_mail_charges' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
            'pay_per_stop_rate' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
            'pay_per_stop_start_after' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
            'detention_rate' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
            'detention_start_after' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
            'layover_rate' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
            'layover_start_after' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
                'numeric'
            ],
//            'reimbursement' => [
//                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.per_mile')),
//                'numeric'
//            ],

            'hourly_rate' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.hourly')),
                'numeric'
            ],

            'load_pay_percentage' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.percentage')),
                'numeric'
            ],
            'load_pay_percentage_of' => [
                Rule::requiredIf(request('driver_pay_types') == config('constant.driver_pay_type.percentage')),
                "in:" . config('constant.load_pay_percentage_of.hauling_fees') . "," . config('constant.load_pay_percentage_of.total_income') . "," . config('constant.load_pay_percentage_of.hauling_plus_fuel_surcharge')
            ],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'type.required' => 'Please select driver type.',
            'type.in' => 'The selected driver type is invalid.',
            'per_mail_charges.required' => 'The per mile charges field is required.',
        ];
    }
}
