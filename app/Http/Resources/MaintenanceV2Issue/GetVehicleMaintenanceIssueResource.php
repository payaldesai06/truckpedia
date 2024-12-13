<?php

namespace App\Http\Resources\MaintenanceV2Issue;

use Illuminate\Http\Resources\Json\JsonResource;

class GetVehicleMaintenanceIssueResource extends JsonResource {
  public function toArray($request): array {
    return [
      'id' => $this->id,
      'status' => !empty($this->status) ? config('constant.maintenance.issue.status')[$this->status] : '',
      'issueNumber' => $this->issue_number ?? '',
      'priority' => !empty($this->priority) ? config('constant.maintenance.issue.priority')[$this->priority] : '',
      'notes' => $this->notes ?? '',
      'lastModifiedByUserFullName' => "{$this->lastModifiedUser->first_name} {$this->lastModifiedUser->last_name}" ?? '',
      'serviceLocation' => $this->service_location ?? '',
      'serviceStartTime' => $this->service_start_time ?? '',
      'serviceCompletedTime' => $this->service_completed_time ?? '',
      'finalCost' => $this->final_cost ?? '',
      'serviceType' => $this->service_type ?? ''
    ];
  }
}
