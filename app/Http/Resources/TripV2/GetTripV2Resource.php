<?php

namespace App\Http\Resources\TripV2;

use Illuminate\Http\Resources\Json\JsonResource;

class GetTripV2Resource extends JsonResource {
  public function toArray($request): array {
    $timezone = $this->timezone ?? null;
    $data = [
      "tripId" => $this->id ?? null,
      "tripNumber" => $this->trip_number ?? null,
      "tripStartDate" => $this->stops_start_date ?? null,
      "tripEndDate" => $this->stops_end_date ?? null,
      "totalLoadedDistance" => $this->total_loaded_distance ?? null,
      "totalPayment" => $this->total_payment ?? null,
      "status" => !empty($this->status) ? config('constant.trip.status.' . $this->status) : '',
      "createdDate" => !empty($this->created_at) ? getDateTimeBasedOnTimezone($this->created_at, $timezone)->format(config('constant.date_format')) : null,
      "approvedDate" => !empty($this->paycheck_approved_utc_datetime) ? getDateTimeBasedOnTimezone($this->paycheck_approved_utc_datetime, $timezone)->format(config('constant.date_format')) : null,
      "approvedByUserName" => !empty($this->paycheckApprovedUser) ? userFullName($this->paycheckApprovedUser) : '',
      "url" => !empty($this->invoice_storage_file_name) ? getImage($this->invoice_storage_file_name, config('constant.s3.tripInvoices')) : null,
    ];
    if (!empty($this->tag_id)) {
      $data['type'] = config('constant.trip.type.ownerOperator');
      $data["ownerOperatorTagId"] = $this->tag_id ?? null;
      $data["ownerOperatorTagName"] = !empty($this->tag) ? $this->tag->business_name : '';
      $data["accountPayableName"] = $data["ownerOperatorTagName"];
    } elseif (!empty($this->truck_id)) {
      $data['type'] = config('constant.trip.type.truck');
      $data["truckId"] = $this->truck_id ?? null;
      $data["truckNumber"] = !empty($this->truck) ? $this->truck->number : '';
      $data["accountPayableName"] = $data["truckNumber"];
    } else {
      $data['type'] = config('constant.trip.type.companyDriver');
      $data["driverUserId"] = $this->user_id ?? null;
      $data["driverName"] = !empty($this->user) ? userFullName($this->user) : '';
      $data["accountPayableName"] = $data["driverName"];
    }
    return $data;
  }
}
