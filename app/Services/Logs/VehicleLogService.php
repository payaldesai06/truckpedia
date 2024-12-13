<?php

namespace App\Services\Logs;

use App\Models\Logs\TrailerLog;
use App\Models\Logs\TruckLog;
use App\Services\ExternalTrackingService;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Log;

class VehicleLogService {
  /**
   * Get Asset Log List Helper.
   * @param $vehicleId, $perPage, $isTruck
   * @return mixed
   */
  public function getAssetLogListHelper($vehicleId, $perPage, $isTruck = false) {
    if ($isTruck) {
      $query = TruckLog::select(
        'id',
        'truck_id',
        'type',
        'load_log_id',
        'maintenance_issue_log_id',
        'created_at'
      )
        ->where('truck_id', $vehicleId)
        ->with('truck:id,number');
    } else {
      $query = TrailerLog::select(
        'id',
        'trailer_id',
        'type',
        'load_log_id',
        'maintenance_issue_log_id',
        'created_at'
      )
        ->where('trailer_id', $vehicleId)
        ->with('trailer:id,number');
    }
    $ret = $query->with([
      'loadLogs:id,load_id,type,truck_location,trailer_location,modified_by_user_id',
      'loadLogs.modifiedByUser:id,first_name,last_name',
      'loadLogs.loadDetail:id,load_unique_id,refrence_id',
      'loadLogs.loadDetail.loadShippers:id,load_id,shipper_name,city,state,order',
      'loadLogs.loadDetail.loadReceivers:id,load_id,receiver_name,city,state,order',
      'loadLogs.loadDetail.loadDrivers:id,load_id,driver_ids',
      'loadLogs.loadDetail.loadDrivers.loadDriverUsers:load_driver_id,user_id',
      'loadLogs.loadDetail.loadDrivers.loadDriverUsers.user:id,first_name,last_name',
      'maintenanceIssueLog:id,issue_id,new_status,modified_by_user_id,vehicle_location',
      'maintenanceIssueLog.modifiedByUser:id,first_name,last_name',
      'maintenanceIssueLog.maintenanceIssue:id,service_location'
    ])
      ->where(function ($q) {
        $q->whereHas('loadLogs.loadDetail')
          ->orWhereHas('maintenanceIssueLog');
      })
      ->orderByDesc('id')
      ->paginate($perPage);

    return $ret;
  }

  /**
   * Log Assign Vehicle To Load.
   * @param $loadId
   * @param $loadLogType
   * @param $truckTrailerType
   * @param $loadDriverId
   * @param $truckId
   * @param $trailerId
   * @param $stopLocation
   * @return void
   */
  public function logAssignVehicleToLoad(
    $loadId,
    $loadLogType,
    $truckTrailerType,
    $loadDriverId,
    $truckId,
    $trailerId,
    $stopLocation = null
  ) {
    try {
      if (empty($truckId) && empty($trailerId)) {
        return;
      }
      $loadLogId = (new LoadLogService())->createLoadLog(
        $loadId,
        $loadLogType,
        $loadDriverId,
        $truckId,
        $trailerId,
        $stopLocation
      ) ?? null;
      $this->createTruckLog($truckId, $truckTrailerType, $loadLogId);
      $this->createTrailerLog($trailerId, $truckTrailerType, $loadLogId);
      if (empty($stopLocation)) {
        (new ExternalTrackingService())->getAndLogTruckTrailerLocation(
          getAuthAdminCompanyId(),
          $truckId,
          $trailerId,
          $loadLogId
        );
      }
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  /**
   * Create Truck Logs.
   * @param $truckId
   * @param $type
   * @param $loadLogId
   * @return void
   */
  private function createTruckLog($truckId, $type, $loadLogId) {
    if (empty($truckId)) {
      return;
    }
    try {
      TruckLog::create([
        'truck_id' => $truckId,
        'type' => $type,
        'load_log_id' => $loadLogId,
        'created_at' => Carbon::now()
      ]);
    } catch (Exception $exception) {
      Log::error($exception);
      return;
    }
  }

  /**
   * Create Trailer Logs.
   * @param $trailerId
   * @param $type
   * @param $loadLogId
   * @return void
   */
  private function createTrailerLog($trailerId, $type, $loadLogId) {
    if (empty($trailerId)) {
      return;
    }
    try {
      TrailerLog::create([
        'trailer_id' => $trailerId,
        'type' => $type,
        'load_log_id' => $loadLogId,
        'created_at' => Carbon::now()
      ]);
    } catch (Exception $exception) {
      Log::error($exception);
      return;
    }
  }
}
