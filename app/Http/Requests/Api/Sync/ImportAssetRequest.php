<?php

namespace App\Http\Requests\Api\Sync;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class ImportAssetRequest extends FormRequest {
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
      'username' => 'required|string|exists:common_key_value_pairs,key',
      'password' => 'required|string|exists:common_key_value_pairs,value,key,' . request('username'),

      'drivers' => 'nullable|array',
      'drivers.*.personalInfo' => 'required',
      'drivers.*.personalInfo.status' => 'required|in:' . implode(',', config('constant.status.driver')),
      'drivers.*.personalInfo.firstName' => 'required|string|max:255',
      'drivers.*.personalInfo.lastName' => 'required|string|max:255',
      'drivers.*.personalInfo.email' => 'required|email',
      'drivers.*.personalInfo.employeeId' => 'required|string|max:255',
      'drivers.*.personalInfo.password' => 'nullable|string|max:255',
      'drivers.*.personalInfo.address' => 'nullable|string|max:255',
      'drivers.*.personalInfo.ssn' => 'nullable|string|max:255',
      'drivers.*.personalInfo.dob' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.personalInfo.gender' => 'nullable|in:' . implode(',', config('constant.gender')),
      'drivers.*.tags' => 'nullable|array',
      'drivers.*.tags.*.tagName' => 'required|string|max:255',
      'drivers.*.emergencyContact' => 'nullable',
      'drivers.*.emergencyContact.name' => 'nullable|string|max:255',
      'drivers.*.emergencyContact.phone' => 'nullable|string|max:255',
      'drivers.*.emergencyContact.relationship' => 'nullable|string|max:255',
      'drivers.*.emergencyContact.email' => 'nullable|email',
      'drivers.*.emergencyContact.address' => 'nullable|string|max:255',
      'drivers.*.compliance' => 'nullable',
      'drivers.*.compliance.cdlNumber' => 'nullable|string|max:255',
      'drivers.*.compliance.cdlState' => 'nullable|string|max:255',
      'drivers.*.compliance.cdlExpirationDate' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.jobInfo' => 'nullable',
      'drivers.*.jobInfo.dateAdded' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.jobInfo.dateRemoved' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.driveAssignments' => 'nullable',
      'drivers.*.driveAssignments.trucks' => 'nullable|array',
      'drivers.*.driveAssignments.trucks.*.truckNumber' => 'required|string|max:255',
      'drivers.*.driveAssignments.trucks.*.startDate' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.driveAssignments.trucks.*.endDate' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.driveAssignments.trucks.*.current' => 'nullable|boolean',
      'drivers.*.driveAssignments.trailers' => 'nullable|array',
      'drivers.*.driveAssignments.trailers.*.trailerNumber' => 'required|string|max:255',
      'drivers.*.driveAssignments.trailers.*.startDate' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.driveAssignments.trailers.*.endDate' => 'nullable|date_format:' . config('constant.date_format'),
      'drivers.*.driveAssignments.trailers.*.current' => 'nullable|boolean',
      'drivers.*.fuelCard' => 'nullable',
      'drivers.*.fuelCard.fuelCardNumber' => 'nullable|string|max:255',

      'trucks' => 'nullable|array',
      'trucks.*.truckInfo' => 'required',
      'trucks.*.truckInfo.truckNumber' => 'required|string|max:255',
      'trucks.*.truckInfo.status' => 'required|in:' . implode(',', config('constant.status.truck')),
      'trucks.*.truckInfo.year' => 'nullable|string|max:255',
      'trucks.*.truckInfo.make' => 'nullable|string|max:255',
      'trucks.*.truckInfo.model' => 'nullable|string|max:255',
      'trucks.*.truckInfo.vin' => 'nullable|string|max:255',
      'trucks.*.truckInfo.licensePlate' => 'nullable|string|max:255',
      'trucks.*.truckInfo.state' => 'nullable|string|min:2|max:2|regex:/^[A-Z]+$/',
      'trucks.*.finance' => 'nullable',
      'trucks.*.finance.ownershipType' => 'nullable|in:' . implode(',', config('constant.syncApi.ownerShipType.truck')),
      'trucks.*.finance.dateAcquired' => 'nullable|date_format:' . config('constant.date_format'),

      'trailers' => 'nullable|array',
      'trailers.*.trailerInfo' => 'required',
      'trailers.*.trailerInfo.trailerNumber' => 'required|string|max:255',
      'trailers.*.trailerInfo.status' => 'required|in:' . implode(',', config('constant.status.trailer')),
      'trailers.*.trailerInfo.year' => 'nullable|string|max:255',
      'trailers.*.trailerInfo.make' => 'nullable|string|max:255',
      'trailers.*.trailerInfo.model' => 'nullable|string|max:255',
      'trailers.*.trailerInfo.vin' => 'nullable|string|max:255',
      'trailers.*.trailerInfo.licensePlate' => 'nullable|string|max:255',
      'trailers.*.trailerInfo.state' => 'nullable|string|min:2|max:2|regex:/^[A-Z]+$/',
      'trailers.*.finance' => 'nullable',
      'trailers.*.finance.ownershipType' => 'nullable|in:' . implode(',', config('constant.syncApi.ownerShipType.trailer')),
      'trailers.*.finance.dateAcquired' => 'nullable|date_format:' . config('constant.date_format'),
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    return [
      'username.exists' => 'Username is invalid.',
      'password.exists' => 'Password is invalid.',

      'drivers.*.personalInfo.required' => 'The drivers personal info field is required.',
      'drivers.*.personalInfo.status.required' => 'The drivers personal info status field is required.',
      'drivers.*.personalInfo.status.in' => 'The drivers personal info status field must be in ' . implode(',', config('constant.status.driver')),
      'drivers.*.personalInfo.firstName.required' => 'The drivers personal info first name field is required.',
      'drivers.*.personalInfo.firstName.string' => 'The drivers personal info first name field must be a string.',
      'drivers.*.personalInfo.firstName.max' => 'The drivers personal info first name field maximum length is 255.',
      'drivers.*.personalInfo.lastName.required' => 'The drivers personal info last name field is required.',
      'drivers.*.personalInfo.lastName.string' => 'The drivers personal info last name field must be a string.',
      'drivers.*.personalInfo.lastName.max' => 'The drivers personal info last name field maximum length is 255.',
      'drivers.*.personalInfo.email.required' => 'The drivers personal info email field is required.',
      'drivers.*.personalInfo.email.email' => 'The drivers personal info email field must be a valid email id.',
      'drivers.*.personalInfo.password.string' => 'The drivers personal info password field must be a string.',
      'drivers.*.personalInfo.password.max' => 'The drivers personal info password field maximum length is 255.',
      'drivers.*.personalInfo.employeeId.required' => 'The drivers personal info employee id field is required.',
      'drivers.*.personalInfo.employeeId.string' => 'The drivers personal info employee id field must be a string.',
      'drivers.*.personalInfo.employeeId.max' => 'The drivers personal info employee id field maximum length is 255.',
      'drivers.*.personalInfo.address.string' => 'The drivers personal info address field must be a string.',
      'drivers.*.personalInfo.address.max' => 'The drivers personal info address field maximum length is 255.',
      'drivers.*.personalInfo.ssn.string' => 'The drivers personal info ssn field must be a string.',
      'drivers.*.personalInfo.ssn.max' => 'The drivers personal info ssn field maximum length is 255.',
      'drivers.*.personalInfo.dob.date_format' => 'The drivers personal info ssn field date format should be like ' . config('constant.date_format'),
      'drivers.*.personalInfo.gender.in' => 'The drivers personal info gender field must be in ' . implode(',', config('constant.gender')),
      'drivers.*.tags.*.tagName.required' => 'The drivers tags tagName field is required.',
      'drivers.*.emergencyContact.name.string' => 'The drivers emergency contact name field must be a string.',
      'drivers.*.emergencyContact.name.max' => 'The drivers emergency contact name field maximum length is 255.',
      'drivers.*.emergencyContact.phone.string' => 'The drivers emergency contact phone field must be a string.',
      'drivers.*.emergencyContact.phone.max' => 'The drivers emergency contact phone field maximum length is 255.',
      'drivers.*.emergencyContact.relationship.string' => 'The drivers emergency contact relationship field must be a string.',
      'drivers.*.emergencyContact.relationship.max' => 'The drivers emergency contact relationship field maximum length is 255.',
      'drivers.*.emergencyContact.email.email' => 'The drivers emergency contact email field must be a valid email id.',
      'drivers.*.emergencyContact.address.string' => 'The drivers emergency contact address field must be a string.',
      'drivers.*.emergencyContact.address.max' => 'The drivers emergency contact address field maximum length is 255.',
      'drivers.*.compliance.cdlNumber.string' => 'The drivers compliance cdl number field must be a string.',
      'drivers.*.compliance.cdlNumber.max' => 'The drivers compliance cdl number field maximum length is 255.',
      'drivers.*.compliance.cdlState.string' => 'The drivers compliance cdl state field must be a string.',
      'drivers.*.compliance.cdlState.max' => 'The drivers compliance cdl state field maximum length is 255.',
      'drivers.*.compliance.cdlExpirationDate.date_format' => 'The drivers compliance cdl expiration date field date format should be like ' . config('constant.date_format'),
      'drivers.*.jobInfo.dateAdded.date_format' => 'The drivers job info cdl date added field date format should be like ' . config('constant.date_format'),
      'drivers.*.jobInfo.dateRemoved.date_format' => 'The drivers job info cdl date removed field date format should be like ' . config('constant.date_format'),
      'drivers.*.driveAssignments.trucks.array' => 'The drivers drive assignments trucks field must be an array.',
      'drivers.*.driveAssignments.trucks.*.truckNumber.required' => 'The drivers drive assignments trucks truck number field is required.',
      'drivers.*.driveAssignments.trucks.*.startDate.date_format' => 'The drivers drive assignments trucks start date field date format should be like ' . config('constant.date_format'),
      'drivers.*.driveAssignments.trucks.*.endDate.date_format' => 'The drivers drive assignments trucks end date field date format should be like ' . config('constant.date_format'),
      'drivers.*.driveAssignments.trucks.*.current.boolean' => 'The drivers drive assignments trucks current field must be boolean.',
      'drivers.*.driveAssignments.trailers.array' => 'The drivers drive assignments trailers field must be an array.',
      'drivers.*.driveAssignments.trailers.*.trailerNumber.required' => 'The drivers drive assignments trailers trailer number field is required.',
      'drivers.*.driveAssignments.trailers.*.startDate.date_format' => 'The drivers drive assignments trailers start date field date format should be like ' . config('constant.date_format'),
      'drivers.*.driveAssignments.trailers.*.endDate.date_format' => 'The drivers drive assignments trailers end date field date format should be like ' . config('constant.date_format'),
      'drivers.*.driveAssignments.trailers.*.current.boolean' => 'The drivers drive assignments trailers current field must be boolean.',
      'drivers.*.fuelCard.fuelCardNumber.string' => 'The drivers fuel card fuel card number field must be a string.',
      'drivers.*.fuelCard.fuelCardNumber.max' => 'The drivers fuel card fuel card number field maximum length is 255.',

      'trucks.*.truckInfo.required' => 'The trucks truck info field is required.',
      'trucks.*.truckInfo.status.required' => 'The trucks truck info status field is required.',
      'trucks.*.truckInfo.status.in' => 'The trucks truck info status field must be in ' . implode(',', config('constant.status.truck')),
      'trucks.*.truckInfo.truckNumber.required' => 'The trucks truck info truck number field is required.',
      'trucks.*.truckInfo.truckNumber.string' => 'The trucks truck info truck number field must be a string.',
      'trucks.*.truckInfo.truckNumber.max' => 'The trucks truck info truck number field maximum length is 255.',
      'trucks.*.truckInfo.year.string' => 'The trucks truck info year field must be a string.',
      'trucks.*.truckInfo.year.max' => 'The trucks truck info year field maximum length is 255.',
      'trucks.*.truckInfo.make.string' => 'The trucks truck info make field must be a string.',
      'trucks.*.truckInfo.make.max' => 'The trucks truck info make field maximum length is 255.',
      'trucks.*.truckInfo.model.string' => 'The trucks truck info model field must be a string.',
      'trucks.*.truckInfo.model.max' => 'The trucks truck info model field maximum length is 255.',
      'trucks.*.truckInfo.vin.string' => 'The trucks truck info vin field must be a string.',
      'trucks.*.truckInfo.vin.max' => 'The trucks truck info vin field maximum length is 255.',
      'trucks.*.truckInfo.licensePlate.string' => 'The trucks truck info license plate field must be a string.',
      'trucks.*.truckInfo.licensePlate.max' => 'The trucks truck info license plate field maximum length is 255.',
      'trucks.*.truckInfo.state.string' => 'The trucks truck info state field must be a string.',
      'trucks.*.truckInfo.state.min' => 'The trucks truck info state field minimum length is 2.',
      'trucks.*.truckInfo.state.max' => 'The trucks truck info state field maximum length is 2.',
      'trucks.*.truckInfo.state.regex' => 'The trucks truck info state field must be capitals.',
      'trucks.*.finance.ownershipType.in' => 'The trucks finance ownership type field must be in ' . implode(',', config('constant.syncApi.ownerShipType.truck')),
      'trucks.*.finance.dateAcquired.date_format' => 'The trucks finance date acquired field date format should be like ' . config('constant.date_format'),

      'trailers.*.trailerInfo.required' => 'The trailers trailer info field is required.',
      'trailers.*.trailerInfo.status.required' => 'The trailers trailer info status field is required.',
      'trailers.*.trailerInfo.status.in' => 'The trailers trailer info status field must be in ' . implode(',', config('constant.status.trailer')),
      'trailers.*.trailerInfo.trailerNumber.required' => 'The trailers trailer info trailer number field is required.',
      'trailers.*.trailerInfo.trailerNumber.string' => 'The trailers trailer info trailer number field must be a string.',
      'trailers.*.trailerInfo.trailerNumber.max' => 'The trailers trailer info trailer number field maximum length is 255.',
      'trailers.*.trailerInfo.year.string' => 'The trailers trailer info year field must be a string.',
      'trailers.*.trailerInfo.year.max' => 'The trailers trailer info year field maximum length is 255.',
      'trailers.*.trailerInfo.make.string' => 'The trailers trailer info make field must be a string.',
      'trailers.*.trailerInfo.make.max' => 'The trailers trailer info make field maximum length is 255.',
      'trailers.*.trailerInfo.model.string' => 'The trailers trailer info model field must be a string.',
      'trailers.*.trailerInfo.model.max' => 'The trailers trailer info model field maximum length is 255.',
      'trailers.*.trailerInfo.vin.string' => 'The trailers trailer info vin field must be a string.',
      'trailers.*.trailerInfo.vin.max' => 'The trailers trailer info vin field maximum length is 255.',
      'trailers.*.trailerInfo.licensePlate.string' => 'The trailers trailer info license plate field must be a string.',
      'trailers.*.trailerInfo.licensePlate.max' => 'The trailers trailer info license plate field maximum length is 255.',
      'trailers.*.trailerInfo.state.string' => 'The trailers trailer info state field must be a string.',
      'trailers.*.trailerInfo.state.min' => 'The trailers trailer info state field minimum length is 2.',
      'trailers.*.trailerInfo.state.max' => 'The trailers trailer info state field maximum length is 2.',
      'trailers.*.trailerInfo.state.regex' => 'The trailers trailer info state field must be capitals.',
      'trailers.*.finance.ownershipType.in' => 'The trailers finance ownership type field must be in ' . implode(',', config('constant.syncApi.ownerShipType.trailer')),
      'trailers.*.finance.dateAcquired.date_format' => 'The trailers finance date acquired field date format should be like ' . config('constant.date_format'),
    ];
  }
}
