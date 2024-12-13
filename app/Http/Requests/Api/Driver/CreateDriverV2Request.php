<?php

namespace App\Http\Requests\Api\Driver;

use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateDriverV2Request extends FormRequest {
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
   * @throws Exception
   */
  public function rules(): array {
    return [
      'firstName' => ['required_without:lastName', 'nullable', 'string', 'max:255'],
      'lastName' => ['required_without:firstName', 'nullable', 'string', 'max:255'],
      'status' => ['required', Rule::in([
        config('constant.status.driver.active'),
        config('constant.status.driver.inactive'),
      ])],
      'phone' => ['nullable', 'string'],
      'driverType' => 'nullable|string|in:' . implode(',', config('constant.driver_type')),
      'isTeamDriver' => ['nullable', 'boolean'],
      'isLocalDriver' => ['nullable', 'boolean'],
      'isRegionalDriver' => 'nullable|boolean',
      'companyEmployeeId' => ['nullable', 'string', 'max:255'],
      'email' => ['required', 'email', 'unique:users,email'],
      'password' => ['required', 'string', 'min:6', 'max:255'],
      'address' => ['nullable', 'string'],
      'ssn' => ['nullable', 'string'],
      'birthDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'gender' => ['nullable', Rule::in([
        config('constant.gender.1'),
        config('constant.gender.2'),
        config('constant.gender.3'),
      ])],
      'maritalStatus' => ['nullable', 'string'],
      'race' => ['nullable', 'string'],
      'originCountry' => ['nullable', 'string'],
      'shirtSize' => ['nullable', 'string'],
      'emergencyContactName' => ['nullable', 'string'],
      'emergencyContactPhone' => ['nullable', 'string'],
      'emergencyContactRelationship' => ['nullable', 'string'],
      'emergencyContactEmail' => ['nullable', 'email'],
      'emergencyContactAddress' => ['nullable', 'string'],
      'cdlNumber' => ['nullable', 'string'],
      'cdlState' => ['nullable', 'string'],
      'originalCdlDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'cdlClass' => 'nullable|string|in:' . implode(',', config('constant.driver.cdlClass')),
      'endorsements' => ['nullable', 'array'],
      'endorsements.*' => ['nullable', 'regex:/^(?:([N H X T])(?!\1))+$/'],
      'cdlExpirationDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'medicalCardExpirationDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'occupationExpirationDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'clearinghouseExpirationDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      // 'occupationalInsuranceStartDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      // 'occupationalInsuranceEndDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'workersCompensationInsuranceStartDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'workersCompensationInsuranceEndDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      // 'iftaAddDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      // 'iftaRemoveDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'offDutyUntil' => ['nullable', 'date_format:' . config('constant.date_format')],
      'offDutyComment' => ['nullable', 'string'],
      'estimatedReturnDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'dateAdded' => ['nullable', 'date_format:' . config('constant.date_format')],
      'dateRemoved' => ['nullable', 'date_format:' . config('constant.date_format')],
      'terminationReason' => ['nullable', 'string'],
      'salaryTarget' => ['nullable', 'string'],
      'recruiter' => ['nullable', 'string'],
      'source' => ['nullable', 'string'],
      'referredBy' => ['nullable', 'string'],
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
      'loadPayPercentageOf' => 'nullable|string|required_if:driverPayType,' . config('constant.driver_pay_type.percentage') . '|in:' . implode(
        ',',
        config('constant.load_pay_percentage_of')
      ),
      'flatPayFrequency' => 'nullable|required_if:driverPayType,' . config('constant.driver_pay_type.flat') . '|string|in:' . implode(
        ',',
        config('constant.flat_pay_frequency')
      ),
      'flatPayRate' => 'nullable|numeric|required_if:driverPayType,' . config('constant.driver_pay_type.flat'),
      'paymentMethod' => 'nullable|string|in:' . implode(',', config('constant.payment_method')),
      'financialInstitutionName' => 'nullable|string|max:255',
      'accountNumber' => 'nullable|string|max:255',
      'routingNumber' => 'nullable|string|max:255',
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
      'driverPayTemplate.loadDetails.*.fieldId' => 'required_with:loadDetails|integer',
      'driverPayTemplate.loadDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'driverPayTemplate.loadDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'driverPayTemplate.loadDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'driverPayTemplate.tripDetails' => 'nullable|array',
      'driverPayTemplate.tripDetails.*.fieldId' => 'required_with:tripDetails|integer',
      'driverPayTemplate.tripDetails.*.rate' => 'nullable|numeric|between:-999999.99,999999.99',
      'driverPayTemplate.tripDetails.*.percentage' => 'nullable|numeric|between:-100,100',
      'driverPayTemplate.tripDetails.*.payStartAfter' => 'nullable|integer|between:0,9999',
      'files' => ['nullable', 'array'],
      'files.*.folderId' => ['required_with:files', 'nullable', 'integer', 'exists:driver_v2_folders,id'],
      'files.*.originalFileName' => ['nullable', 'string', 'max:255'],
      'files.*.fileName' => ['nullable', 'string', 'min:3', 'max:255'],
      'fuelCardNumber' => ['nullable', 'string'],
      'notes' => ['nullable', 'array'],
      'notes.*.note' => ['nullable', 'string'],
      'truckAssignments' => ['nullable', 'array'],
      'truckAssignments.*.truckId' => ['nullable', 'required_with:truckAssignments', 'integer', 'exists:trucks,id'],
      'truckAssignments.*.startDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'truckAssignments.*.endDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'truckAssignments.*.isCurrent' => ['nullable', 'boolean'],
      'trailerAssignments' => ['nullable', 'array'],
      'trailerAssignments.*.trailerId' => [
        'nullable', 'required_with:trailerAssignments', 'integer', 'exists:trailers,id'
      ],
      'trailerAssignments.*.startDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'trailerAssignments.*.endDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'trailerAssignments.*.isCurrent' => ['nullable', 'boolean'],

      'tags' => 'nullable|array',
      'tags.*.id' => 'required_with:tags|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),

      'approvalStatus' => 'nullable|string|in:' . implode(',', config('constant.driver.approvalStatus')),

      'roadTestCompletedDate' => 'nullable|date_format:' . config('constant.date_format'),
      'roadTestCompletedExaminer' => 'nullable|string|max:255',
      'drugPool' => 'nullable|string|in:' . implode(',', config('constant.driver.drugPool')),
      'exceptedInterIntrastateType' => 'nullable|string|in:' . implode(',', config('constant.driver.exceptedInterIntrastateType')),
      'payFrequency' => 'required_if:taxFederalTax,true|nullable|string|in:' . implode(',', config('constant.driver.payFrequency')),
      'taxFederalCredits' => 'nullable|numeric|between:-999999.99,999999.99',
      'ccEmails' => 'nullable|array',
      'ccEmails.*' => 'email|distinct',
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'driverPayTemplate.loadDetails.*.fieldId.required' => 'The loadDetails fieldId field is required.',
      'driverPayTemplate.loadDetails.*.fieldId.integer' => 'The loadDetails fieldId field must be an integer.',
      'driverPayTemplate.loadDetails.*.rate.numeric' => 'The loadDetails rate field is numeric.',
      'driverPayTemplate.loadDetails.*.rate.between' => 'The loadDetails rate field must be between -999999.99 and 999999.99.',
      'driverPayTemplate.loadDetails.*.percentage.numeric' => 'The loadDetails percentage field is numeric.',
      'driverPayTemplate.loadDetails.*.percentage.between' => 'The loadDetails percentage field must be between -100 and 100.',
      'driverPayTemplate.loadDetails.*.payStartAfter.integer' => 'The loadDetails payStartAfter field is integer.',
      'driverPayTemplate.loadDetails.*.payStartAfter.between' => 'The loadDetails payStartAfter field must be between 0 and 9999.',
      'driverPayTemplate.tripDetails.*.fieldId.required' => 'The tripDetails fieldId field is required.',
      'driverPayTemplate.tripDetails.*.fieldId.integer' => 'The tripDetails fieldId field must be an integer.',
      'driverPayTemplate.tripDetails.*.rate.numeric' => 'The tripDetails rate field is numeric.',
      'driverPayTemplate.tripDetails.*.rate.between' => 'The tripDetails rate field must be between -999999.99 and 999999.99.',
      'driverPayTemplate.tripDetails.*.percentage.numeric' => 'The tripDetails percentage field is numeric.',
      'driverPayTemplate.tripDetails.*.percentage.between' => 'The tripDetails percentage field must be between -100 and 100.',
      'driverPayTemplate.tripDetails.*.payStartAfter.integer' => 'The tripDetails payStartAfter field is integer.',
      'driverPayTemplate.tripDetails.*.payStartAfter.between' => 'The tripDetails payStartAfter field must be between 0 and 9999.',
      'truckAssignments.*.truckId.required_with' => 'Please select a truck.',
      'truckAssignments.*.startDate.date_format' => 'The start date should be in Y-m-d format.',
      'truckAssignments.*.endDate.date_format' => 'The end date should be in Y-m-d format.',
      'truckAssignments.*.isCurrent.boolean' => 'The current truck assignment must be a boolean.',
      'trailerAssignments.*.trailerId.required_with' => 'Please select a trailer.',
      'trailerAssignments.*.startDate.date_format' => 'The start date should be in Y-m-d format.',
      'trailerAssignments.*.endDate.date_format' => 'The end date should be in Y-m-d format.',
      'trailerAssignments.*.isCurrent.boolean' => 'The current truck assignment must be a boolean.',
      'tags.*.id.required_with' => 'Tag id is required.',
      'tags.*.id.integer' => 'Tag id must be an integer.',
      'tags.*.id.exists' => 'Tag id is invalid.',
      'files.*.folderId.required_with' => 'Folder id is required.',
      'files.*.folderId.exists' => 'Folder id is not valid.',
      'files.*.originalFileName.string' => 'The originalFileName should be a string.',
      'files.*.fileName.string' => 'The fileName should be a string.',
      'files.*.fileName.min' => 'The fileName should have a minimum of 3 characters.',
      'files.*.originalFileName.max' => 'The originalFileName cannot exceed 255 characters.',
      'files.*.fileName.max' => 'The fileName cannot exceed 255 characters.',
      'drugPool.in' => 'The drug pool field must be in ' . implode(',', config('constant.driver.drugPool')),
      'payFrequency.in' => 'The pay frequency field must be in ' . implode(',', config('constant.driver.payFrequency')),
      'payFrequency.string' => 'The pay frequency field must be a string.',
      'payFrequency.required_if' => 'The pay frequency field is required when federal tax is turned on.',
      'taxFederalCredits.numeric' => 'The federal tax credits field must be numeric.',
      'taxFederalCredits.between' => 'The federal tax credits field must be between -999999.99 and 999999.99.',
      'taxFederalCredits.required_if' => 'The federal tax credits field is required when federal tax is turned on.',
      'ccEmails.*.email' => 'The cc emails must be a valid email address.',
      'ccEmails.*.distinct' => 'The cc emails must be unique email address.',
    ];
  }
}
