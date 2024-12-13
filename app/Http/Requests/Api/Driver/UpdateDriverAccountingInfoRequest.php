<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDriverAccountingInfoRequest extends FormRequest {
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
    return [
      'id' => 'required|integer|exists:users,id,role,driver',
      'driverPayType' => 'nullable|string|in:' . implode(',', config('constant.driver_pay_type')),
      'perMileCharge' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'payPerStopRate' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'payPerStopStartAfter' => 'nullable|integer|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'detentionRate' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'detentionStartAfter' => 'nullable|integer|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'layoverRate' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'layoverStartAfter' => 'nullable|integer|required_if:driverPayType,' . config('constant.driver_pay_type.per_mile'),
      'hourlyRate' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.hourly'),
      'loadPayPercentage' => 'nullable|numeric|min:0|max:100|required_if:driverPayType,' . config('constant.driver_pay_type.percentage'),
      'loadPayPercentageOf' => 'nullable|string|required_if:driverPayType,' . config('constant.driver_pay_type.percentage') . '|in:' . implode(',', config('constant.load_pay_percentage_of')),
      'flatPayFrequency' => 'nullable|required_if:driverPayType,' . config('constant.driver_pay_type.flat') . '|string|in:' . implode(',', config('constant.flat_pay_frequency')),
      'flatPayRate' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.flat'),
      'paymentMethod' => 'nullable|string|in:' . implode(',', config('constant.payment_method')),
      'financialInstitutionName' => 'nullable|string',
      'accountNumber' => 'nullable|string',
      'routingNumber' => 'nullable|string',
      'taxForm' => 'nullable|string|in:' . implode(',', config('constant.tax_form')),
      'filingStatus' => 'required_if:taxFederalTax,true|nullable|string|in:' . implode(',', config('constant.filing_status')),
      'allowances' => 'nullable|integer|min:0|max:100',
      'withholding' => 'nullable|numeric|min:0',
      'taxMedicare' => 'nullable|boolean',
      'taxAdvanceEarnedIncomeCredit' => 'nullable|boolean',
      'taxSocialSecurity' => 'nullable|boolean',
      'taxFederalTax' => 'nullable|boolean',
      'driverPayTemplate' => 'nullable|required_if:driverPayType,' . config('constant.driver_pay_type.template'),
      'driverPayTemplate.loadDetails' => 'nullable|array',
      'driverPayTemplate.loadDetails.*.detailId' => 'nullable|integer',
      'driverPayTemplate.loadDetails.*.fieldId' => 'required_with:loadDetails|integer',
      'driverPayTemplate.loadDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'driverPayTemplate.loadDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'driverPayTemplate.loadDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'driverPayTemplate.tripDetails' => 'nullable|array',
      'driverPayTemplate.tripDetails.*.detailId' => 'nullable|integer',
      'driverPayTemplate.tripDetails.*.fieldId' => 'required_with:tripDetails|integer',
      'driverPayTemplate.tripDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'driverPayTemplate.tripDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'driverPayTemplate.tripDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'payFrequency' => 'required_if:taxFederalTax,true|nullable|string|in:' . implode(',', config('constant.driver.payFrequency')),
      'taxFederalCredits' => 'nullable|numeric|between:-999999.99,999999.99',
    ];
  }

  public function messages(): array {
    return [
      'driverPayTemplate.loadDetails.*.detailId.required' => 'The loadDetails detailId field is required.',
      'driverPayTemplate.loadDetails.*.detailId.integer' => 'The loadDetails detailId field must be an integer.',
      'driverPayTemplate.loadDetails.*.fieldId.required' => 'The loadDetails fieldId field is required.',
      'driverPayTemplate.loadDetails.*.fieldId.integer' => 'The loadDetails fieldId field must be an integer.',
      'driverPayTemplate.loadDetails.*.rate.numeric' => 'The loadDetails rate field is numeric.',
      'driverPayTemplate.loadDetails.*.rate.between' => 'The loadDetails rate field must be between -999999.99 and 999999.99.',
      'driverPayTemplate.loadDetails.*.percentage.numeric' => 'The loadDetails percentage field is numeric.',
      'driverPayTemplate.loadDetails.*.percentage.between' => 'The loadDetails percentage field must be between -100 and 100.',
      'driverPayTemplate.loadDetails.*.payStartAfter.integer' => 'The loadDetails payStartAfter field is integer.',
      'driverPayTemplate.loadDetails.*.payStartAfter.between' => 'The loadDetails payStartAfter field must be between 0 and 9999.',

      'driverPayTemplate.tripDetails.*.detailId.required' => 'The tripDetails detailId field is required.',
      'driverPayTemplate.tripDetails.*.detailId.integer' => 'The tripDetails detailId field must be an integer.',
      'driverPayTemplate.tripDetails.*.fieldId.required' => 'The tripDetails fieldId field is required.',
      'driverPayTemplate.tripDetails.*.fieldId.integer' => 'The tripDetails fieldId field must be an integer.',
      'driverPayTemplate.tripDetails.*.rate.numeric' => 'The tripDetails rate field is numeric.',
      'driverPayTemplate.tripDetails.*.rate.between' => 'The tripDetails rate field must be between -999999.99 and 999999.99.',
      'driverPayTemplate.tripDetails.*.percentage.numeric' => 'The tripDetails percentage field is numeric.',
      'driverPayTemplate.tripDetails.*.percentage.between' => 'The tripDetails percentage field must be between -100 and 100.',
      'driverPayTemplate.tripDetails.*.payStartAfter.integer' => 'The tripDetails payStartAfter field is integer.',
      'driverPayTemplate.tripDetails.*.payStartAfter.between' => 'The tripDetails payStartAfter field must be between 0 and 9999.',
      'payFrequency.in' => 'The pay frequency field must be in '. implode(',', config('constant.driver.payFrequency')),
      'payFrequency.string' => 'The pay frequency field must be a string.',
      'payFrequency.required_if' => 'The pay frequency field is required when federal tax is turned on.',
      'taxFederalCredits.numeric' => 'The federal tax credits field must be numeric.',
      'taxFederalCredits.between' => 'The federal tax credits field must be between -999999.99 and 999999.99.',
      'taxFederalCredits.required_if' => 'The federal tax credits field is required when federal tax is turned on.',
    ];
  }
}
