<?php

namespace App\Http\Requests\Api\Truck;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTruckV2Request extends FormRequest {
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
    return [
      'id' => 'required|integer|exists:trucks,id',
      'status' => ['required', 'string', 'in:' . implode(',', config('constant.status.truck'))],
      'truckNumber' => 'required|string',
      'year' => 'nullable|string|max:255',
      'make' => 'nullable|string|max:255',
      'model' => 'nullable|string|max:255',
      'color' => 'nullable|string|max:255',
      'vin' => 'nullable|string|max:255',
      'licensePlate' => 'nullable|string|max:255',
      'licenseState' => 'nullable|string|min:2|max:2|regex:/[A-Z]/',
      'hourlyCost' => 'nullable|numeric|between:-9999.99,9999.99',
      'insuranceValue' => 'nullable|numeric',
      'monthlyInsuranceCost' => 'nullable|numeric',
      'totalInsuranceCost' => 'nullable|numeric',
      'odometerAtPurchase' => 'nullable|integer|between:0,8388607',
      'brakeTypeFront' => ['nullable', 'string', 'in:' . implode(',', config('constant.brakeType'))],
      'brakeTypeRear' => ['nullable', 'string', 'in:' . implode(',', config('constant.brakeType'))],
      'speedLimitPedal' => 'nullable|string|max:255',
      'speedLimitCruise' => 'nullable|string|max:255',
      'fuelTankCapacity' => 'nullable|string|max:255',
      'apuUnit' => 'nullable|string|max:255',
      'tireSize' => 'nullable|string|max:255',
      'idleShutoff' => 'nullable|boolean',
      'irpExpirationDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'annualInspExpireDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'insuranceExpireDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'registrationExpireDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'annualPermitExpireDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'iftaDecalNumber' => 'nullable|string|max:255',
      'ownershipType' => ['nullable', 'in:' . implode(',', config('constant.ownership.truck'))],
      'dateAcquired' => ['nullable', 'date_format:' . config('constant.date_format')],
      'acquireCost' => 'nullable|numeric',
      'paymentStartDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'paymentEndDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'interestRate' => 'nullable|numeric|between:0,1.0',
      'lender' => 'nullable|string|max:255',
      'monthlyPayment' => 'nullable|numeric',
      'contractNumber' => 'nullable|string',
      'priceSold' => 'nullable|numeric',
      'dateSold' => ['nullable', 'date_format:' . config('constant.date_format')],
      'notes' => 'nullable|array',
      'notes.*.note' => 'nullable|string|max:4000',
      'notes.*.id' => 'nullable|numeric',
      'driverAssignments' => 'nullable|array',
      'driverAssignments.*.userId' => 'required_with:driverAssignments|nullable|integer|exists:driver_details,user_id',
      'driverAssignments.*.id' => 'nullable|integer|exists:driver_truck_assignments,id',
      'driverAssignments.*.startDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'driverAssignments.*.endDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'driverAssignments.*.isCurrent' => 'nullable|boolean',
      'tags' => 'nullable|array',
      'tags.*.id' => 'required_with:tags|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),
      'truckTypes' => 'nullable|array',
      'truckTypes.*' => ['nullable', 'string', Rule::in(array_values(config('constant.truck_types')))],
    ];
  }

  public function messages(): array {
    return [
      'driverAssignments.*.userId.required' => 'The driverAssignments userId is required.',
      'driverAssignments.*.userId.integer' => 'The driverAssignments userId must be an integer.',
      'driverAssignments.*.userId.exists' => 'The driverAssignments userId is invalid.',
      'driverAssignments.*.id.integer' => 'The driverAssignments id must be an integer.',
      'driverAssignments.*.id.exists' => 'The driverAssignments id is invalid.',
      'driverAssignments.*.startDate.date' => 'The driverAssignments startDate is not a valid date.',
      'driverAssignments.*.startDate.date_format' => 'The driverAssignments startDate does not match the format Y-m-d.',
      'driverAssignments.*.endDate.date' => 'The driverAssignments endDate is not a valid date.',
      'driverAssignments.*.endDate.date_format' => 'The driverAssignments endDate does not match the format Y-m-d..',
      'driverAssignments.*.isCurrent.boolean' => 'The driverAssignments isCurrent must be true or false.',
      'tags.*.id.required_with' => 'Tag id is required.',
      'tags.*.id.integer' => 'Tag id must be an integer.',
      'tags.*.id.exists' => 'Tag id is invalid.',
      'truckTypes.*.in' => 'The truck types must be one of the following types: ' . implode(', ', array_values(config('constant.truck_types'))),
    ];
  }
}
