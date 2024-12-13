<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverResourceV2 extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $driver = $this->driverDetail;
    $tags = [];
    if (!empty($this->tags)) {
      $tags = $this->tags->toArray();
      $tags = array_map(function ($tag) {
        return ['id' => $tag['id']];
      }, $tags);
    }
    return [
      'id' => $this->id,
      'firstName' => $this->first_name ?? '',
      'lastName' => $this->last_name ?? '',
      'email' => $this->email ?? '',
      'status' => $this->status ?? '',
      'phone' => $driver->phone_number ?? '',
      'driverType' => $driver->type ?? '',
      'isLocalDriver' => (bool) $driver->local_driver,
      'isRegionalDriver' => (bool) $driver->regional_driver,
      'companyEmployeeId' => $driver->company_employee_id ?? '',
      'isTeamDriver' => (bool) $driver->team_driver,
      'address' => $driver->mailing_address ?? '',
      'ssn' => $driver->ssn ?? '',
      'birthDate' => optional($driver->birth_date)->format(config('constant.date_format')) ?? '',
      'gender' => $driver->gender ? optional(config('constant.gender'))[$driver->gender] : '',
      'maritalStatus' => $driver->marital_status ?? '',
      'race' => $driver->race ?? '',
      'originCountry' => $driver->origin_country ?? '',
      'shirtSize' => $driver->shirt_size ?? '',
      'emergencyContactName' => $driver->emgy_contact_name ?? '',
      'emergencyContactPhone' => $driver->emgy_contact_phone ?? '',
      'emergencyContactRelationship' => $driver->emgy_contact_relationship ?? '',
      'emergencyContactEmail' => $driver->emgy_contact_email ?? '',
      'emergencyContactAddress' => $driver->emgy_contact_address ?? '',
      'cdlNumber' => $driver->driving_license ?? '',
      'cdlState' => $driver->issue_state ?? '',
      'originalCdlDate' => optional($driver->original_driver_license_date)->format(config('constant.date_format')) ?? '',
      'cdlClass' => !empty($driver->driver_license_class) ?
        config('constant.driver.cdlClass')[$driver->driver_license_class] : null,
      'endorsements' => $driver->endorsements ? str_split($driver->endorsements) : [],
      'cdlExpirationDate' => optional($driver->driving_license_expire_date)->format(config('constant.date_format')) ?? '',
      'medicalCardExpirationDate' => optional($driver->medical_expire_date)->format(config('constant.date_format')) ?? '',
      'occupationExpirationDate' => optional($driver->occupation_expire_date)->format(config('constant.date_format')) ?? '',
      'clearinghouseExpirationDate' => optional($driver->clearinghouse_expire_date)->format(config('constant.date_format')) ?? '',
      // 'occupationalInsuranceStartDate' => optional($driver->occ_ins_start_date)->format(config('constant.date_format')) ?? '',
      // 'occupationalInsuranceEndDate' => optional($driver->occ_ins_end_date)->format(config('constant.date_format')) ?? '',
      'drugPool' => $driver->drug_pool ? config('constant.driver.drugPool')[$driver->drug_pool] : null,
      'exceptedInterIntrastateType' => !empty($driver->excepted_inter_intrastate_type) ?
        config('constant.driver.exceptedInterIntrastateType')[$driver->excepted_inter_intrastate_type]
        : null,
      'workersCompensationInsuranceStartDate' => optional($driver->wc_ins_start_date)->format(config('constant.date_format')) ?? '',
      'workersCompensationInsuranceEndDate' => optional($driver->wc_ins_end_date)->format(config('constant.date_format')) ?? '',
      // 'iftaAddDate' => optional($driver->ifta_add_date)->format(config('constant.date_format')) ?? '',
      // 'iftaRemoveDate' => optional($driver->ifta_remove_date)->format(config('constant.date_format')) ?? '',
      'offDutyUntil' => optional($driver->off_duty_until)->format(config('constant.date_format')) ?? '',
      'offDutyComment' => $driver->off_duty_comment ?? '',
      'estimatedReturnDate' => optional($driver->estimated_return_date)->format(config('constant.date_format')) ?? '',
      'dateAdded' => optional($driver->date_added)->format(config('constant.date_format')) ?? '',
      'dateRemoved' => optional($driver->date_removed)->format(config('constant.date_format')) ?? '',
      'terminationReason' => $driver->termination_reason ?? '',
      'salaryTarget' => $driver->salary_target ?? '',
      'recruiter' => $driver->recruiter ?? '',
      'source' => $driver->source ?? '',
      'referredBy' => $driver->referred_by ?? '',
      'fuelCardNumber' => $driver->fuel_card_number ?? '',
      'notes' => $this->driverNotes ? DriverNoteResourceV2::collection($this->driverNotes) : [],
      'trailerAssignments' => $this->driverTrailerAssignments ? DriverTrailerAssignmentResourceV2::withCurrentTrailer($this->driverTrailerAssignments, $driver->assignment_trailer_id) : [],
      'truckAssignments' => $this->driverTruckAssignments ?
        DriverTruckAssignmentResourceV2::withCurrentTruck($this->driverTruckAssignments, $driver->assignment_truck_id) : [],
      'tags' => $tags,
      'approvalStatus' => !empty($driver->approval_status) ? config('constant.driver.approvalStatus')[$driver->approval_status] : '',
      'roadTestCompletedDate' => optional($driver->road_test_completed_date)->format(config('constant.date_format')) ?? '',
      'roadTestCompletedExaminer' => $driver->road_test_completed_examiner ?? '',
      'payFrequency' => $driver->pay_frequency ? config('constant.driver.payFrequency')[$driver->pay_frequency] : null,
      'taxFederalCredits' => $driver->tax_federal_credits ?? null,
      'ccEmails' => !empty($driver->cc_emails) ? explode(',', $driver->cc_emails) : [],
    ];
  }
}
