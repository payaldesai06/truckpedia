<?php

namespace App\Http\Requests\Api\Trip;

use App\Models\DriverDetail;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateTripRequest extends FormRequest
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
            'trip_start_date' => 'required|date_format:Y-m-d',
            'driver_id' => [
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
