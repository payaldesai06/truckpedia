<?php

namespace App\Http\Resources\Truck;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class GetTruckLogListResource extends JsonResource {
  public function toArray($request): array {
    if (!empty($this->type) && $this->type == array_search('load', config('constant.logs.truckAndTrailerType'))) {
      $category = 'load';
      $status = 'inOperation';
      $location = !empty($this->loadLogs) ? $this->loadLogs->truck_location : '';
      $shipper = $this->loadLogs->loadDetail->loadShippers->first() ?? null;
      $receiver = $this->loadLogs->loadDetail->loadReceivers->last() ?? null;
      $modifiedByUserFullName = !empty($this->loadLogs->modifiedByUser) ? "{$this->loadLogs->modifiedByUser->first_name} {$this->loadLogs->modifiedByUser->last_name}" : '';
      $loadDriverName = $this->loadLogs->loadDetail->loadDrivers->pluck('loadDriverUsers')->flatten()->pluck('user')->map(function ($user) {
        return trim("{$user->first_name} {$user->last_name}");
      })->filter()->implode(', ') ?? '';
    } elseif (!empty($this->type) && $this->type == array_search('maintenance', config('constant.logs.truckAndTrailerType'))) {
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
      'truckNumber' => $this->truck->number ?? '',
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
