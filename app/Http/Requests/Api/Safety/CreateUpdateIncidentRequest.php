<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class CreateUpdateIncidentRequest extends FormRequest {
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
    $yesOrNoRule = implode(',', config('constant.incident.yesNo'));
    $yesNoUnknownRule = implode(',', config('constant.incident.yesNoUnknown'));
    $companyId = getAuthAdminCompanyId();
    $rules = [
      // For FKs like tag, truck, user, trailer, etc, why you are not checking they belong to current company?
      'tagId' => 'nullable|integer|exists:tags,id,company_id,' . $companyId,
      'incidentDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'incidentTime' => 'nullable|date_format:' . config('constant.time_format'),
      'status' => 'nullable|string|in:' . implode(',', config('constant.incident.status')),
      'closedDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'assigneeUserId' => 'nullable|integer|exists:users,id,admin_company_detail_id,' . $companyId,
      'followUpDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'notes' => 'nullable|string|max:4000',
      'incidentClaimNumber' => 'nullable|string|max:255',
      'thirdPartyIncidentClaimNumber' => 'nullable|string|max:255',
      'ncicNumber' => 'nullable|string|max:255',
      'savedAddressAffected' => 'nullable|string|in:' . $yesOrNoRule,
      'chargeBack' => 'nullable|string|in:' . $yesOrNoRule,
      'chargeBackAmount' => 'nullable|numeric|min:0|max:999999.99',
      'estimates' => 'nullable|string|in:' . $yesOrNoRule,
      'estimatesReceived' => 'nullable|string|in:' . $yesOrNoRule,
      'costIncurred' => 'nullable|string|in:' . $yesOrNoRule,
      'costAmount' => 'nullable|numeric|min:0|max:999999.99',
      'dealWithInsuranceCompanyId' => 'nullable|integer|exists:customers,id,company_id,' . $companyId,
      'dealWithInsuranceCompanyName' => 'nullable|string|max:255',
      'involvedType' => 'nullable|string|in:' . implode(',', config('constant.incident.involvedType')),
      'involvedPersonType' => 'nullable|string|in:' . implode(',', config('constant.incident.involvedPersonType')),
      'involvedUserId' => 'nullable|integer|exists:users,id,admin_company_detail_id,' . $companyId,
      'involvedPersonName' => 'nullable|string|max:255',
      'involvedThirdPartyId' => 'nullable|integer|exists:customers,id,company_id,' . $companyId,
      'involvedThirdPartyName' => 'nullable|string|max:255',
      'correctiveActionApplied' => 'nullable|string|in:' . $yesOrNoRule,
      'dotRecordable' => 'nullable|string|in:' . $yesOrNoRule,
      'preventable' => 'nullable|string|in:' . $yesNoUnknownRule,
      'atFault' => 'nullable|string|in:' . $yesNoUnknownRule,
      'truckId' => 'nullable|integer|exists:trucks,id,company_id,' . $companyId,
      'truckNumber' => 'nullable|string|max:255',
      'trailerId' => 'nullable|integer|exists:trailers,id,company_id,' . $companyId,
      'trailerNumber' => 'nullable|string|max:255',
      'locationType' => 'nullable|string|in:' . implode(',', config('constant.incident.locationType')),
      'address' => 'nullable|string|max:255',
      'savedAddressId' => 'nullable|integer|exists:saved_addresses,id,company_id,' . $companyId,
      'reported' => 'nullable|string|in:' . $yesOrNoRule,
      'incidentType' => 'nullable|string|in:' . implode(',', config('constant.incident.incidentType')),
      'description' => 'nullable|string|max:4000',
      'files' => 'nullable|array',
      'files.*.isPrivate' => 'nullable|string|in:' . implode(',', config('constant.incident.folder.type')),
      'files.*.fileLabel' => 'nullable|string|in:' . implode(',', config('constant.incident.fileLabel')),
      'files.*.originalFilename' => 'required|string|min:3|max:255',
      'files.*.storageFilename' => 'required|string|min:3|max:255',
      'notesArray' => 'nullable|array',
      'notesArray.*.localDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'notesArray.*.localTime' => 'nullable|date_format:' . config('constant.time_format'),
      'notesArray.*.contactType' => 'nullable|string|in:' .
        implode(',', config('constant.incident.note.contactType')),
      'notesArray.*.name' => 'nullable|string|max:255',
      'notesArray.*.phone' => 'nullable|string|max:255',
      'notesArray.*.email' => 'nullable|string|max:255',
      'notesArray.*.note' => 'required|string|max:160000'
    ];

    if ($this->method() == 'PATCH') {
      $rules['incidentId'] = 'required|integer|exists:incidents,id,company_id,' . getAuthAdminCompanyId();
    }
    return $rules;
  }

  public function messages(): array {
    return [
      'files.*.isPrivate.string' => 'The files isPrivate field only supports the string type.',
      'files.*.isPrivate.in' => 'The isPrivate field only supports the following values: ' .
        implode(',', config('constant.incident.folder.type')),
      'files.*.fileLabel.string' => 'The files fileLabel field only supports the string type.',
      'files.*.fileLabel.in' => 'The fileLabel field only supports the following values: ' .
        implode(',', config('constant.incident.fileLabel')),
      'files.*.originalFilename.string' => 'The files originalFilename field only supports the string type.',
      'files.*.originalFilename.min' => 'The files originalFilename field minimum length is 3.',
      'files.*.originalFilename.max' => 'The files originalFilename field maximum length is 255.',
      'files.*.storageFilename.required' => 'The files storageFilename field is required.',
      'files.*.storageFilename.string' => 'The files storageFilename field only supports the string type.',
      'files.*.storageFilename.min' => 'The files storageFilename field minimum length is 3.',
      'files.*.storageFilename.max' => 'The files storageFilename field maximum length is 255.',
      'notesArray.*.localDate.date_format' => 'The incidentNotes localDate field is supported date format ' . config('constant.date_format'),
      'notesArray.*.localTime.date_format' => 'The incidentNotes localTime field is supported time format ' . config('constant.time_format'),
      'notesArray.*.contactType.string' => 'The incidentNotes contactType field is invalid.',
      'notesArray.*.contactType.in' => 'The incidentNotes contactType field only supports the following values: ' .
        implode(',', config('constant.incident.note.contactType')),
      'notesArray.*.name.string' => 'The incidentNotes name field is invalid.',
      'notesArray.*.name.max' => 'The incidentNotes name field maximum length is 255.',
      'notesArray.*.phone.string' => 'The incidentNotes phone field is invalid.',
      'notesArray.*.phone.max' => 'The incidentNotes phone field maximum length is 255.',
      'notesArray.*.email.string' => 'The incidentNotes email field is invalid.',
      'notesArray.*.email.max' => 'The incidentNotes email field maximum length is 255.',
      'notesArray.*.note.string' => 'The incidentNotes note field is invalid.',
      'notesArray.*.note.max' => 'The incidentNotes note field maximum length is 4000.',
      'notesArray.*.note.required' => 'The incidentNotes note field is required.',
    ];
  }
}
