<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDriverV2Request extends FormRequest {
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
      'id' => ['required', 'integer', 'exists:users,id'],
      'firstName' => ['required_without:lastName', 'nullable', 'string', 'max:255'],
      'lastName' => ['required_without:firstName', 'nullable', 'string', 'max:255'],
      'status' => [
        'required', Rule::in([
          config('constant.status.driver.active'),
          config('constant.status.driver.inactive'),
        ])
      ],
      'phone' => ['nullable', 'string'],
      'driverType' => 'nullable|string|in:' . implode(',', config('constant.driver_type')),
      'isTeamDriver' => ['nullable', 'boolean'],
      'isLocalDriver' => ['nullable', 'boolean'],
      'isRegionalDriver' => 'nullable|boolean',
      'companyEmployeeId' => ['nullable', 'string', 'max:255'],
      'email' => ['required', 'email', Rule::unique('users')->ignore($this->id)],
      'password' => ['nullable', 'string', 'min:6', 'max:255'],
      'address' => ['nullable', 'string'],
      'ssn' => ['nullable', 'string'],
      'birthDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'gender' => [
        'nullable', Rule::in([
          config('constant.gender.1'),
          config('constant.gender.2'),
          config('constant.gender.3'),
        ])
      ],
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
      'fuelCardNumber' => ['nullable', 'string'],
      'notes' => ['nullable', 'array'],
      'notes.*.id' => ['nullable', 'integer', 'exists:driver_notes,id'],
      'notes.*.note' => ['nullable', 'string'],
      'truckAssignments' => ['nullable', 'array'],
      'truckAssignments.*.id' => ['nullable', 'integer', 'exists:driver_truck_assignments,id'],
      'truckAssignments.*.truckId' => ['nullable', 'required_with:truckAssignments', 'integer', 'exists:trucks,id'],
      'truckAssignments.*.startDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'truckAssignments.*.endDate' => ['nullable', 'date_format:' . config('constant.date_format')],
      'truckAssignments.*.isCurrent' => ['nullable', 'boolean'],
      'trailerAssignments' => ['nullable', 'array'],
      'trailerAssignments.*.id' => ['nullable', 'integer', 'exists:driver_trailer_assignments,id'],
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
      'truckAssignments.*.truckId.required_with' => 'Please select a truck.',
      'truckAssignments.*.startDate.date_format' => 'The start date should be in Y-m-d format.',
      'truckAssignments.*.endDate.date_format' => 'The end date should be in Y-m-d format.',
      'truckAssignments.*.isCurrent.boolean' => 'The current truck assignment must be a boolean.',

      'trailerAssignments.*.trailerId.required_with' => 'Please select a trailer.',
      'trailerAssignments.*.id.exists' => 'The selected truck assignment does not exists.',
      'trailerAssignments.*.startDate.date_format' => 'The start date should be in Y-m-d format.',
      'trailerAssignments.*.endDate.date_format' => 'The end date should be in Y-m-d format.',
      'trailerAssignments.*.isCurrent.boolean' => 'The current truck assignment must be a boolean.',

      'tags.*.id.required_with' => 'Tag id is required.',
      'tags.*.id.integer' => 'Tag id must be an integer.',
      'tags.*.id.exists' => 'Tag id is invalid.',

      'drugPool.in' => 'The drug pool field must be in ' . implode(',', config('constant.driver.drugPool')),
      'ccEmails.*.email' => 'The cc emails must be a valid email address.',
      'ccEmails.*.distinct' => 'The cc emails must be unique email address.',
    ];
  }
}
