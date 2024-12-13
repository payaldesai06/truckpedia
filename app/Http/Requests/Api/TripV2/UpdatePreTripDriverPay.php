<?php

namespace App\Http\Requests\Api\TripV2;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\TripsV2LoadTemplatePayDetails;

class UpdatePreTripDriverPay extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    $companyId = getAuthAdminCompanyId();
    $loadId = request('loadId');
    $drivers = request('drivers');
    return [
      'loadId' => 'required|integer|exists:loads,id,admin_company_detail_id,' . $companyId,
      'drivers' => 'required|array',
      'drivers.*.userId' => 'required|integer|exists:users,id,admin_company_detail_id,' . $companyId,
      'drivers.*.preTripPayTemplateDetails' => 'required',
      'drivers.*.preTripPayTemplateDetails.loadDetails' => 'nullable|array',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.loadTemplatePayDetailId' =>
      [
        'nullable',
        'integer',
        function ($attr, $value, $fail) use ($loadId, $drivers) {
          $currentIndex = explode('.', $attr)[1];
          $userId = $drivers[$currentIndex]['userId'] ?? null;
          if (!$userId) {
            $fail('The drivers userId field is required.');
          }
          $validateDetail = TripsV2LoadTemplatePayDetails::where('id', $value)
            ->where('load_id', $loadId)
            ->where('user_id', $userId)
            ->exists();
          if (!$validateDetail) {
            $fail('The userId or loadId of the drivers is invalid for this loadTemplatePayDetailId.');
          }
        }
      ],

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.fieldId' =>
      'required|integer|exists:driver_pay_template_custom_fields,id,company_id,' . $companyId,

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.comment' =>
      'nullable|string|max:255',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payment' =>
      'required|numeric|between:-999999.99,999999.99',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.qty' =>
      'required|numeric|between:-999999.9999,999999.9999',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.rate' =>
      'required_without:drivers.*.preTripPayTemplateDetails.loadDetails.*.percentage|numeric|between:-999999.99,999999.99',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.percentage' =>
      'required_without:drivers.*.preTripPayTemplateDetails.loadDetails.*.rate|numeric|between:-100,100',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payStartAfter' =>
      'nullable|integer|between:0,9999',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v1' =>
      'nullable|numeric|between:-99.9999,99.9999',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v2' =>
      'nullable|numeric|between:-99.9999,99.9999',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v3' =>
      'nullable|numeric|between:-99.9999,99.9999',

    ];
  }

  public function messages(): array {
    return [
      'loadId' => 'The loadId field is required.',
      'loadId.exists' => 'The loadId field is invalid.',

      'drivers' => 'The drivers field is required.',
      'drivers.*.userId.required' => 'The drivers userId field is required.',
      'drivers.*.userId.integer' => 'The drivers userId field must be an integer.',
      'drivers.*.userId.exists' => 'The drivers userId field is invalid.',

      'drivers.*.preTripPayTemplateDetails.loadDetails.array' => 'The drivers preTripPayTemplateDetails loadDetails must be an array.',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.loadTemplatePayDetailId.integer' => 'The drivers preTripPayTemplateDetails loadDetails loadTemplatePayDetailId must be an integer.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.loadTemplatePayDetailId.exists' => 'The drivers preTripPayTemplateDetails loadDetails loadTemplatePayDetailId is invalid.',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.fieldId.required' => 'The drivers preTripPayTemplateDetails loadDetails fieldId is required.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.fieldId.integer' => 'The drivers preTripPayTemplateDetails loadDetails field must be an integer.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.fieldId.exists' => 'The drivers preTripPayTemplateDetails loadDetails field is invalid.',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.comment.string' => 'The drivers preTripPayTemplateDetails loadDetails comment must be a string.',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payment.required' => 'The drivers preTripPayTemplateDetails loadDetails payment field is required.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payment.numeric' => 'The drivers preTripPayTemplateDetails loadDetails payment field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payment.between' => 'The drivers preTripPayTemplateDetails loadDetails payment field must be between -999999.99 and 999999.99',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.qty.required' => 'The drivers preTripPayTemplateDetails loadDetails qty field is required.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.qty.numeric' => 'The drivers preTripPayTemplateDetails loadDetails qty field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.qty.between' => 'The drivers preTripPayTemplateDetails loadDetails qty field must be between -999999.9999 and 999999.9999',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.rate.required' => 'The drivers preTripPayTemplateDetails loadDetails rate field is required.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.rate.numeric' => 'The drivers preTripPayTemplateDetails loadDetails rate field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.rate.between' => 'The drivers preTripPayTemplateDetails loadDetails rate field must be between -999999.99 and 999999.99',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.percentage.required' => 'The drivers preTripPayTemplateDetails loadDetails percentage field is required.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.percentage.numeric' => 'The drivers preTripPayTemplateDetails loadDetails percentage field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.percentage.between' => 'The drivers preTripPayTemplateDetails loadDetails percentage field must be between -100 and 100',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payStartAfter.integer' => 'The drivers preTripPayTemplateDetails loadDetails payStartAfter field must be a integer.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.payStartAfter.between' => 'The drivers preTripPayTemplateDetails loadDetails payStartAfter field must be between -0 and 9999',

      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v1.numeric' => 'The drivers preTripPayTemplateDetails loadDetails v1 field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v1.between' => 'The drivers preTripPayTemplateDetails loadDetails v1 field must be between -99.9999 and 99.9999.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v2.numeric' => 'The drivers preTripPayTemplateDetails loadDetails v2 field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v2.between' => 'The drivers preTripPayTemplateDetails loadDetails v2 field must be between -99.9999 and 99.9999.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v3.numeric' => 'The drivers preTripPayTemplateDetails loadDetails v3 field must be a number.',
      'drivers.*.preTripPayTemplateDetails.loadDetails.*.v3.between' => 'The drivers preTripPayTemplateDetails loadDetails v3 field must be between -99.9999 and 99.9999.',
    ];
  }
}
