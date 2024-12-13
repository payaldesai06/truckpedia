<?php

namespace App\Http\Resources\MaintenanceV2Issue;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MaintenanceV2IssueDetailResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? '',
      'reportedByUserFullName' => !empty($this->reportedByUserFullName) ? $this->reportedByUserFullName : null,
      'vehicleNumber' => !empty($this->vehicleNumber) ? $this->vehicleNumber : null,
      'vin' => $this->vin ?? '',
      'make' => $this->make ?? '',
      'year' => $this->year ?? '',
      'status' => !is_null($this->status) ? config('constant.maintenance.issue.status')[$this->status] : "",
      'reportedByUserId' => $this->reported_by_user_id ?? null,
      'vehicleId' => !empty($this->truck_id) ? $this->truck_id : (!empty($this->trailer_id) ? $this->trailer_id : null),
      'vehicleType' => !empty($this->truck_id) ? 'truck' : (!empty($this->trailer_id) ? 'trailer' : null),
      'serviceType' => !empty($this->serviceType) ? $this->serviceType->service_type : $this->service_type,
      'priority' => !is_null($this->priority) ? config('constant.maintenance.issue.priority')[$this->priority] : null,
      'notes' => $this->notes ?? null,
      'serviceLocation' => $this->service_location ?? null,
      'scheduledStartTime' => $this->scheduled_start_time ?? null,
      'estimatedCompletionTime' => $this->estimated_completion_time ?? null,
      'estimatedCost' => $this->estimated_cost ?? null,
      'arrivedForService' => $this->arrived_for_service ?? null,
      'serviceStartTime' => $this->service_start_time ?? null,
      'updatedEstimatedCompletionTime' => $this->updated_estimated_completion_time ?? null,
      'serviceCompletedTime' => $this->service_completed_time ?? null,
      'timeInService' => $this->time_in_service ?? null,
      'finalCost' => $this->final_cost ?? null,
      'odometer' => $this->odometer ?? null,
      'attachments' => MaintenanceV2AttachmentResource::collection($this->attachments) ?? []
    ];
  }
}
