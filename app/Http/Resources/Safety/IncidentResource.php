<?php

namespace App\Http\Resources\Safety;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class IncidentResource extends JsonResource {

  /**
   * IncidentResource Resource.
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'incidentId' => $this->id,
      'tagId' => $this->tag_id ?? null,
      'incidentDate' => $this->incident_date ?? null,
      'incidentTime' => $this->incident_time ? Carbon::parse($this->incident_time)
        ->format(config('constant.time_format')) : null,
      'status' => !empty($this->status) ?
        config('constant.incident.status')[$this->status] : null,
      'assigneeUserId' => $this->assignee_user_id ?? null,
      'assigneeUserName' => $this->assigneeUser ? userFullName($this->assigneeUser) : null,
      'followUpDate' => $this->follow_up_date ?? null,
      'closedDate' => $this->closed_date ?? null,
      'notes' => $this->notes ?? null,
      'incidentClaimNumber' => $this->incident_claim_number ?? null,
      'thirdPartyIncidentClaimNumber' => $this->third_party_incident_claim_number ?? null,
      'ncicNumber' => $this->ncic_number ?? null,
      'ncicReport' => $this->incidentFiles->contains('file_label', 1) ? 'yes' : 'no',
      'savedAddressAffected' =>  $this->getYesOrNoValue($this->saved_address_affected),
      'chargeBack' =>  $this->getYesOrNoValue($this->charge_back),
      'chargeBackAmount' => $this->charge_back_amount ?? null,
      'estimates' =>  $this->getYesOrNoValue($this->estimates),
      'estimatesReceived' =>  $this->getYesOrNoValue($this->estimates_received),
      'costIncurred' =>  $this->getYesOrNoValue($this->cost_incurred),
      'costAmount' => $this->cost_amount ?? null,
      'dealWithInsuranceCompanyId' => $this->deal_with_insurance_company_id ?? null,
      'dealWithInsuranceCompanyName' => $this->deal_with_insurance_company_name ?? null,
      'involvedType' => !empty($this->involved_type) ?
        config('constant.incident.involvedType')[$this->involved_type] : null,
      'involvedPersonType' => !empty($this->involved_person_type) ?
        config('constant.incident.involvedPersonType')[$this->involved_person_type] : null,
      'involvedUserId' => $this->involved_user_id ?? null,
      'involvedPersonName' => $this->involved_person_name ?? null,
      'involvedThirdPartyId' => $this->involved_third_party_id ?? null,
      'involvedThirdPartyName' => $this->involved_third_party_name ?? null,
      'correctiveActionApplied' => $this->getYesOrNoValue($this->corrective_action_applied),
      'dotRecordable' => $this->getYesOrNoValue($this->dot_recordable),
      'preventable' => $this->getYesOrNoValue($this->preventable),
      'atFault' => $this->getYesOrNoValue($this->at_fault) ?? null,
      'truckId' => $this->truck_id ?? null,
      'truckNumber' => $this->truck_number ?? null,
      'trailerId' => $this->trailer_id ?? null,
      'trailerNumber' => $this->trailer_number ?? null,
      'locationType' => !empty($this->location_type) ?
        config('constant.incident.locationType')[$this->location_type] : null,
      'address' => $this->address ?? null,
      'savedAddressId' => $this->saved_address_id ?? null,
      'reported' => $this->getYesOrNoValue($this->reported),
      'incidentType' => !empty($this->incident_type) ?
        config('constant.incident.incidentType')[$this->incident_type] : null,
      'jotformReport' => $this->incidentFiles->contains('file_label', 2) ? 'yes' : 'no',
      'description' => $this->description ?? null,
      'files' => !empty($this->incidentFiles) ?
        IncidentFileResource::collection($this->incidentFiles) : [],
      'emails' => !empty($this->incidentEmails) ?
        IncidentEmailResource::collection($this->incidentEmails) : [],
      'notesArray' => !empty($this->incidentNotes) ?
        IncidentNoteResource::collection($this->incidentNotes) : []
    ];
  }

  /**
   * Get Yes Or No Or Unknown Value
   * @params $value
   * @return string|null
   */
  public function getYesOrNoValue($value) {
    return !empty($value) ? config('constant.incident.yesNoUnknown')[$value] : null;
  }
}
