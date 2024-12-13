<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class GetListIncidentRequest extends FormRequest {
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
    return [
      'filters.tagId' => 'nullable|integer|exists:tags,id',
      'filters.incidentDate.startDate' => 'required_with:filters.incidentDate|nullable|date|date_format:' . config('constant.date_format'),
      'filters.incidentDate.endDate' => 'required_with:filters.incidentDate|date|date_format:' . config('constant.date_format'),
      'filters.incidentYear' => 'nullable|integer|digits:4',
      'filters.status' => 'nullable|string|in:' . implode(',', config('constant.incident.status')),
      'filters.assigneeUserName' => 'nullable|string|max:255',
      'filters.followUpDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filters.closedDate.startDate' => 'required_with:filters.closedDate|date|date_format:' . config('constant.date_format'),
      'filters.closedDate.endDate' => 'required_with:filters.closedDate|date|date_format:' . config('constant.date_format'),
      'filters.incidentClaimNumber' => 'nullable|string|max:255',
      'filters.thirdPartyIncidentClaimNumber' => 'nullable|string|max:255',
      'filters.ncicNumber' => 'nullable|string|max:255',
      'filters.ncicReport' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.savedAddressAffected' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.chargeBack' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.chargeBackAmount' => 'nullable|numeric|between:-999999.99,999999.99',
      'filters.estimates' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.estimatesReceived' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.costIncurred' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.costAmount' => 'nullable|numeric|between:-999999.99,999999.99',
      'filters.insuranceCompanyName' => 'nullable|string',
      'filters.involvedType' => 'nullable|string|in:' . implode(',', config('constant.incident.involvedType')),
      'filters.involvedPersonType' => 'nullable|string|in:' . implode(',', config('constant.incident.involvedPersonType')),
      'filters.involvedUserName' => 'nullable|string',
      'filters.involvedThirdPartyName' => 'nullable|string',
      'filters.involvedThirdPartyPersonName' => 'nullable|string|max:255',
      'filters.correctiveActionApplied' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.dotRecordable' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.preventable' => 'nullable|string|in:' . $yesNoUnknownRule,
      'filters.atFault' => 'nullable|string|in:' . $yesNoUnknownRule,
      'filters.truckNumber' => 'nullable|string',
      'filters.trailerNumber' => 'nullable|string',
      'filters.thirdPartyTruck' => 'nullable|string',
      'filters.thirdPartyTrailer' => 'nullable|string',
      'filters.locationType' => 'nullable|string|in:' . implode(',', config('constant.incident.locationType')),
      'filters.address' => 'nullable|string|max:255',
      'filters.incidentType' => 'nullable|string|in:' . implode(',', config('constant.incident.incidentType')),
      'filters.jotformReport' => 'nullable|string|in:' . $yesOrNoRule,
      'filters.description' => 'nullable|string|max:4000',

      'sortBy.field' => 'required_with:sortBy|string|in:' . implode(',', config('constant.incident.sortByField')),
      'sortBy.order' => 'required_with:sortBy|string|in:' . implode(',', config('constant.defaultSortByOrder')),

      'toDownload' => 'nullable|boolean',
    ];
  }

  public function messages(): array {
    $yesOrNoRule = implode('|', config('constant.incident.yesNo'));
    $yesNoUnknownRule = implode(',', config('constant.incident.yesNoUnknown'));
    return [
      'filters.tagId.integer' => 'The filters selected tag must be an integer',
      'filters.tagId.exists' => 'The filters selected tag field is invalid.',

      'filters.incidentDate.startDate.date_format' => 'The filters incidentDate startDate is supported date format ' . config('constant.date_format'),
      'filters.incidentDate.startDate.required_with' => 'The filters incidentDate startDate field is required when incidentDate is present.',
      'filters.incidentDate.endDate.date_format' => 'The filters incidentDate endDate is supported date format ' . config('constant.date_format'),
      'filters.incidentDate.endDate.required_with' => 'The filters incidentDate endDate field is required when incidentDate is present.',

      'filters.incidentYear.integer' => 'The filters incidentYear field must be an integer.',
      'filters.incidentYear.digits' => 'The filters incidentYear field should be a valid year.',

      'filters.status.string' => 'The filters status field should be a string.',
      'filters.status.in' => 'The filters status field is supported only ' . implode('|', config('constant.incident.status')),

      'filters.assigneeUserName.string' => 'The filters assigneeUserName field should be a string.',
      'filters.assigneeUserName.max' => 'The filters assigneeUserName field maximum length is 255.',

      'filters.followUpDate.date_format' => 'The filters followUpDate is supported date format ' . config('constant.date_format'),

      'filters.closedDate.startDate.date_format' => 'The filters closedDate startDate is supported date format ' . config('constant.date_format'),
      'filters.closedDate.startDate.required_with' => 'The filters closedDate startDate field is required when closedDate is present.',
      'filters.closedDate.endDate.date_format' => 'The filters closedDate endDate is supported date format ' . config('constant.date_format'),
      'filters.closedDate.endDate.required_with' => 'The filters closedDate endDate field is required when closedDate is present.',

      'filters.notes.string' => 'The filters notes field should be a string.',
      'filters.notes.max' => 'The filters notes field maximum length is 4000.',

      'filters.incidentClaimNumber.string' => 'The filters incidentClaimNumber field should be a string.',
      'filters.thirdPartyIncidentClaimNumber.string' => 'The filters thirdPartyIncidentClaimNumber field should be a string.',

      'filters.ncicNumber.string' => 'The filters ncicNumber field should be a string.',
      'filters.ncicNumber.max' => 'The filters ncicNumber field maximum length is 255.',

      'filters.ncicReport.string' => 'The filters ncicReport field should be a string.',
      'filters.ncicReport.in' => 'The filters ncicReport field is supported only ' . $yesOrNoRule,

      'filters.savedAddressAffected.string' => 'The filters savedAddressAffected field should be a string.',
      'filters.savedAddressAffected.in' => 'The filters savedAddressAffected field is supported only ' . $yesOrNoRule,

      'filters.chargeBack.string' => 'The filters chargeBack field should be a string.',
      'filters.chargeBack.in' => 'The filters chargeBack field is supported only ' . $yesOrNoRule,

      'filters.chargeBackAmount.numeric' => 'The filters chargeBackAmount field should be a numeric.',
      'filters.chargeBackAmount.between' => 'The filter chargeBackAmount field should be between -999999.99, 999999.99.',

      'filters.estimates.string' => 'The filters estimates field should be a string.',
      'filters.estimates.in' => 'The filters estimates field is supported only ' . $yesOrNoRule,

      'filters.estimatesReceived.string' => 'The filters estimatesReceived field should be a string.',
      'filters.estimatesReceived.in' => 'The filters estimatesReceived field is supported only '
        . $yesOrNoRule,

      'filters.costIncurred.string' => 'The filters costIncurred field should be a string.',
      'filters.costIncurred.in' => 'The filters costIncurred field is supported only ' . $yesOrNoRule,

      'filters.costAmount.numeric' => 'The filters costAmount field should be a numeric.',
      'filters.costAmount.between' => 'The filter costAmount field should be between -999999.99, 999999.99.',

      'filters.insuranceCompanyName.string' => 'The filters insuranceCompanyName field should be a string.',
      'filters.insuranceCompanyName.max' => 'The filters insuranceCompanyName field maximum length is 255.',

      'filters.involvedType.string' => 'The filters involvedType field should be a string.',
      'filters.involvedType.in' => 'The filters involvedType field is supported only ' . implode('|', config('constant.incident.involvedType')),

      'filters.involvedPersonType.string' => 'The filters involvedPersonType field should be a string.',
      'filters.involvedPersonType.in' => 'The filters involvedPersonType field is supported only ' . implode('|', config('constant.incident.involvedPersonType')),

      'filters.involvedUserName.string' => 'The filters involvedUserName field should be a string.',
      'filters.involvedThirdPartyName.string' => 'The filters involvedThirdPartyName field should be a string.',
      'filters.involvedThirdPartyPersonName.string' => 'The filters involvedThirdPartyPersonName field should be a string.',

      'filters.correctiveActionApplied.string' => 'The filters correctiveActionApplied field should be a string.',
      'filters.correctiveActionApplied.in' => 'The filters correctiveActionApplied field is supported only ' . $yesOrNoRule,

      'filters.dotRecordable.string' => 'The filters dotRecordable field should be a string.',
      'filters.dotRecordable.in' => 'The filters dotRecordable field is supported only ' . $yesOrNoRule,

      'filters.preventable.string' => 'The filters preventable field should be a string.',
      'filters.preventable.in' => 'The filters preventable field is supported only ' . $yesNoUnknownRule,

      'filters.atFault.string' => 'The filters atFault field should be a string.',
      'filters.atFault.in' => 'The filters atFault field is supported only ' . $yesNoUnknownRule,

      'filters.truckNumber.string' => 'The filters truckNumber field should be a string.',
      'filters.trailerNumber.string' => 'The filters trailerNumber field should be a string.',

      'filters.thirdPartyTruck.string' => 'The filters thirdPartyTruck field should be a string.',
      'filters.thirdPartyTrailer.string' => 'The filters thirdPartyTrailer field should be a string.',

      'filters.locationType.string' => 'The filters locationType field should be a string.',
      'filters.locationType.in' => 'The filters locationType field is supported only ' . implode('|', config('constant.incident.locationType')),

      'filters.address.string' => 'The filters address field should be a string.',
      'filters.address.max' => 'The filters address field maximum length is 255.',

      'filters.incidentType.string' => 'The filters incidentType field should be a string.',
      'filters.incidentType.in' => 'The filters incidentType field is supported only ' . implode('|', config('constant.incident.incidentType')),

      'filters.jotformReport.string' => 'The filters jotformReport field should be a string.',
      'filters.jotformReport.in' => 'The filters jotformReport field is supported only ' . $yesOrNoRule,

      'filters.description.string' => 'The filters description field should be a string.',
      'filters.description.max' => 'The filters description field maximum length is 4000.',

      'sortBy.field.required_with' => 'The sortBy field is required when sortBy is present.',
      'sortBy.field.string' => 'The sortBy field should be a string.',
      'sortBy.field.in' => 'The selected sortBy field is supported only ' . implode('|', config('constant.incident.sortByField')),

      'sortBy.order.required_with' => 'The sortBy order field is required when sortBy is present.',
      'sortBy.order.string' => 'The sortBy order should be a string.',
      'sortBy.order.in' => 'The selected sortBy order is supported only ' . implode('|', config('constant.defaultSortByOrder')),
    ];
  }
}
