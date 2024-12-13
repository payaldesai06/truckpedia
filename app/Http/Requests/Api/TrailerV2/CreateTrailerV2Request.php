<?php

namespace App\Http\Requests\Api\TrailerV2;

use Illuminate\Foundation\Http\FormRequest;

class CreateTrailerV2Request extends FormRequest {
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
      'status' => 'required|string|in:' . implode(',', config('constant.status.trailer')),
      'trailerType' => 'nullable|string|in:' . implode(',', array_keys(config('constant.load.equipment_type'))),
      'trailerNumber' => 'required|string|max:255',
      'year' => 'nullable|string|max:255',
      'make' => 'nullable|string|max:255',
      'model' => 'nullable|string|max:255',
      'vin' => 'nullable|string|max:255',
      'ride' => 'nullable|string|max:255',
      'width' => 'nullable|string|max:255',
      'licensePlate' => 'nullable|string|max:255',
      'licenseState' => 'nullable|string|min:2|max:2|regex:/[A-Z]/',
      'insuranceValue' => 'nullable|numeric',
      'monthlyInsuranceCost' => 'nullable|numeric',
      'totalInsuranceCost' => 'nullable|numeric',
      'brakeType' => 'nullable|string|in:' . implode(',', config('constant.brakeType')),
      'tireSize' => 'nullable|string',
      'roof' => 'nullable|string',
      'platedWalls' => 'nullable|boolean',
      'vented' => 'nullable|boolean',
      'skirts' => 'nullable|boolean',
      'rentedOut' => 'nullable|boolean',
      'storage' => 'nullable|boolean',
      'annualInspExpireDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'insuranceExpireDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'registrationExpireDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'annualPermitExpireDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'ownershipType' => 'nullable|string|in:company_trailer,owner_operator,leased',
      'dateAcquired' => 'nullable|date|date_format:' . config('constant.date_format'),
      'acquireCost' => 'nullable|numeric',
      'paymentStartDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'paymentEndDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'interestRate' => 'nullable|numeric|between:0,1.0',
      'lender' => 'nullable|string',
      'monthlyPayment' => 'nullable|numeric',
      'contractNumber' => 'nullable|string',
      'priceSold' => 'nullable|numeric',
      'dateSold' => 'nullable|date|date_format:' . config('constant.date_format'),
      'notes' => 'nullable|array',
      'notes.*.note' => 'required|string|max:4000',
      'driverAssignments' => 'nullable|array',
      'driverAssignments.*.userId' => 'required_with:driverAssignments|nullable|integer|exists:driver_details,user_id',
      'driverAssignments.*.startDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'driverAssignments.*.endDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'driverAssignments.*.isCurrent' => 'nullable|boolean',
      'tags' => 'nullable|array',
      'tags.*.id' => 'required_with:tags|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),
      'files' => 'nullable|array',
      'files.*.folderId' => 'required_with:files|integer|exists:trailer_folders,id,company_id,' . getAuthAdminCompanyId(),
      'files.*.originalFileName' => 'nullable|string|max:255',
      'files.*.fileName' => 'nullable|string|min:3|max:255'
    ];
  }

  public function messages(): array {
    return [
      'driverAssignments.*.userId.required' => 'The driverAssignments userId is required.',
      'driverAssignments.*.userId.integer' => 'The driverAssignments userId must be an integer.',
      'driverAssignments.*.userId.exists' => 'The driverAssignments userId is invalid.',
      'driverAssignments.*.startDate.date' => 'The driverAssignments startDate is not a valid date.',
      'driverAssignments.*.startDate.date_format' => 'The driverAssignments startDate does not match the format Y-m-d.',
      'driverAssignments.*.endDate.date' => 'The driverAssignments endDate is not a valid date.',
      'driverAssignments.*.endDate.date_format' => 'The driverAssignments endDate does not match the format Y-m-d..',
      'driverAssignments.*.isCurrent.boolean' => 'The driverAssignments isCurrent must be true or false.',
      'tags.*.id.required_with' => 'Tag id is required.',
      'tags.*.id.integer' => 'Tag id must be an integer.',
      'tags.*.id.exists' => 'Tag id is invalid.',
      'files.*.folderId.required' => 'The files folder id field is required.',
      'files.*.folderId.integer' => 'The files folder id must be an integer.',
      'files.*.folderId.exists' => 'The files folder id is invalid.',
      'files.*.originalFileName.string' => 'The files original file name field is supported only string type.',
      'files.*.originalFileName.max' => 'The files original file name field maximum length is 255.',
      'files.*.fileName.string' => 'The files file name field is supported only string type.',
      'files.*.fileName.min' => 'The files file name field minimum length is 3.',
      'files.*.fileName.max' => 'The files file name field maximum length is 255.'
    ];
  }
}
