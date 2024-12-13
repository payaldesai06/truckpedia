<?php

namespace App\Http\Resources\MaintenanceV2Issue;

use Illuminate\Http\Resources\Json\JsonResource;

class GetMaintenanceV2IssueResource extends JsonResource {
  public function toArray($request): array {
    if (!empty($this->truck)) {
      $unit = $this->truck->number ?? '';
      $year = $this->truck->year ?? '';
      $make = $this->truck->make ?? '';
      $vin = $this->truck->truck_vin ?? '';
    } elseif (!empty($this->trailer)) {
      $unit = $this->trailer->number ?? '';
      $year = $this->trailer->year ?? '';
      $make = $this->trailer->make ?? '';
      $vin = $this->trailer->vin ?? '';
    }

    $lastModifiedByUserFullName = userFullName($this->lastModifiedUser);
    return [
      'id' => $this->id,
      'status' => config('constant.maintenance.issue.status')[$this->status] ?? '',
      'issueNumber' => $this->issue_number ?? '',
      'priority' => config('constant.maintenance.issue.priority')[$this->priority] ?? '',
      'dateReported' => $this->dateReported ?? '',
      'unit' => $unit ?? '',
      'year' => $year ?? '',
      'make' => $make ?? '',
      'vin' => $vin ?? '',
      'notes' => $this->notes ?? '',
      'lastModifiedByUserFullName' => $lastModifiedByUserFullName ?? '',
      'serviceLocation' => $this->service_location ?? '',
      'scheduledStartTime' => $this->scheduled_start_time ?? '',
      'estimatedCompletionTime' => $this->estimated_completion_time ?? '',
      'arrivedForService' => $this->arrived_for_service ?? '',
      'serviceStartTime' => $this->service_start_time ?? '',
      'updatedEstimatedCompletionTime' => $this->updated_estimated_completion_time ?? '',
      'serviceCompletedTime' => $this->service_completed_time ?? ''
    ];
  }
}
