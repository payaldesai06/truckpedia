<?php

namespace App\Http\Resources\TrailerV2;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class GetTrailerLogListResource extends JsonResource {
  public function toArray($request): array {
    /* TODO: for hook / drop trailer, change "inOperation" to
    dropEmptyTrailer (Drop Empty Trailer on FE and exported trailer files)
    do the same for other 4 types.
    */
    $truckAndTrailerType = config('constant.logs.truckAndTrailerType');
    if (!empty($this->type) && $this->type != array_search('maintenance', $truckAndTrailerType)) {
      $category = 'load';
      $status = config('constant.logs.truckAndTrailerTypeStatus')[$this->type];
      $location = !empty($this->loadLogs) ? $this->loadLogs->trailer_location : '';
      $shipper = $this->loadLogs->loadDetail->loadShippers->first() ?? null;
      $receiver = $this->loadLogs->loadDetail->loadReceivers->last() ?? null;
      $modifiedByUserFullName = !empty($this->loadLogs->modifiedByUser) ? "{$this->loadLogs->modifiedByUser->first_name} {$this->loadLogs->modifiedByUser->last_name}" : '';
      $loadDriverName = $this->loadLogs->loadDetail->loadDrivers->pluck('loadDriverUsers')->flatten()->pluck('user')->map(function ($user) {
        return trim("{$user->first_name} {$user->last_name}");
      })->filter()->implode(', ') ?? '';
    } elseif (!empty($this->type) && $this->type == array_search('maintenance', $truckAndTrailerType)) {
      $category = 'maintenanceIssue';
      $status = !empty($this->maintenanceIssueLog->new_status) ? config('constant.logs.maintenanceIssueStatus')[$this->maintenanceIssueLog->new_status] : '';
      $location = !empty($this->maintenanceIssueLog->vehicle_location) ? $this->maintenanceIssueLog->vehicle_location : (!empty($this->maintenanceIssueLog->maintenanceIssue) ? $this->maintenanceIssueLog->maintenanceIssue->service_location : '');
      $modifiedByUserFullName = !empty($this->maintenanceIssueLog->modifiedByUser) ? "{$this->maintenanceIssueLog->modifiedByUser->first_name} {$this->maintenanceIssueLog->modifiedByUser->last_name}" : '';
    }
    $loadShipper = $loadReceiver = '';
    if (!empty($shipper)) {
      $loadShipper = $shipper->shipper_name . ', ' . $shipper->city . ', ' . $shipper->state;
    }
    if (!empty($receiver)) {
      $loadReceiver = $receiver->receiver_name .  ', ' . $receiver->city . ', ' . $receiver->state;
    }
    return [
      'category' => $category ?? '',
      'trailerNumber' => $this->trailer->number ?? '',
      'status' => $status ?? '',
      'utcDateTime' => $this->created_at ?? '',
      'location' => $location ?? '',
      'loadNumber' => !empty($this->loadLogs->loadDetail->load_unique_id) ? $this->loadLogs->loadDetail->load_unique_id : '',
      'loadReference' => !empty($this->loadLogs->loadDetail->refrence_id) ? $this->loadLogs->loadDetail->refrence_id : '',
      'loadShipper' => $loadShipper,
      'loadReceiver' => $loadReceiver,
      'loadDriverName' => $loadDriverName ?? '',
      'modifiedByUserName' => $modifiedByUserFullName ?? ''
    ];
  }
}
