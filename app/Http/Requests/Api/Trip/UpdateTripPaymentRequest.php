<?php

namespace App\Http\Requests\Api\Trip;

use App\Models\DriverDetail;
use App\Models\Trip;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateTripPaymentRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    $payType = DriverDetail::where('user_id', '=', $this->user()->id)->first();
    return [
      'notes' => [
        function ($attribute, $value, $fail) {
          $trip = Trip::findOrFail($this->trip);
          if ($trip->status == config('constant.status.trip.payment_request')) {
            $fail("You already submitted payment request.");
          }
        },
        '',
      ],

      'trip_start_time' => [
        /*Rule::requiredIf(
        $payType->driver_pay_types == config('constant.driver_pay_type.hourly') || $payType->driver_pay_types == config('constant.driver_pay_type.percentage')
        ), */
        'date_format:' . config('constant.time_format'), 'before:trip_end_time',
      ],

      'trip_end_time' => [
        /*Rule::requiredIf(
        $payType->driver_pay_types == config('constant.driver_pay_type.hourly') || $payType->driver_pay_types == config('constant.driver_pay_type.percentage')
        ), */
        'date_format:' . config('constant.time_format'),
        'after:trip_start_time',
      ],

      'total_miles' => [
        Rule::requiredIf(
          $payType->driver_pay_types == config('constant.driver_pay_type.per_mile')
        ),
      ],
      'load_ids' => 'required',
      // 'number_of_stop' => [
      //     Rule::requiredIf(
      //         $payType->driver_pay_types == config('constant.driver_pay_type.per_mile')
      //     )
      // ],
    ];
  }
}