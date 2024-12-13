<?php

namespace App\Http\Requests\Api\Trip;

use App\Models\DriverDetail;
use App\Models\Trip;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateTripRequest extends FormRequest
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
            'driver_id' => [
                function ($attribute, $value, $fail) {
                    $trip = Trip::findOrFail($this->trip);
                    if ($trip->status == config('constant.status.trip.payment_request')) {
                        $fail("you can not change co-driver after submitting payment request.");
                    }
                },
                function ($attribute, $value, $fail) {
                    $driverDetails = DriverDetail::whereIn('user_id', [Auth::id(), $value])->get();
                    $plucked = $driverDetails->pluck('driver_pay_types');
                    if (count($plucked) == 2) {
                        if ($plucked[0] != $plucked[1]) {
                            $fail("driver pay type are not match.");
                        }
                    }
                },
            ],
        ];
    }
}
