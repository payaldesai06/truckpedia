<?php

namespace App\Traits;

use App\Models\LoadDriver;
use App\Models\LoadDriverUser;
use App\Services\Logs\VehicleLogService;
use Mavinoo\Batch\BatchFacade as Batch;
use Illuminate\Support\Facades\Log;

trait LoadTrait {

  /**
   * This function update load driver
   *
   * @param string $relation add relation
   * @param object $collection add collection to request
   * @param object $modelObject add model obejct
   * @param object $load parent object
   */
  public function updateLoad($relation, $collection, $modelObject, $load) {
    $collection = $collection;
    $dbData = $load->$relation;

    //delete
    $delete = $dbData->whereNotIn('id', $collection->pluck('id'))->values();
    if ($delete->isNotEmpty()) {
      $load->$relation()->whereIn('id', $delete->pluck('id'))->delete();
    }

    //insert
    $insert = $collection->where('id', null)->values();
    if ($insert->isNotEmpty()) {
      $load->$relation()->createMany($insert);
    }

    //update
    $update = $collection->whereIn('id', $dbData->pluck('id'));
    if ($update->isNotEmpty()) {
      $values = json_decode($update, true);
      $index = 'id';
      Batch::update($modelObject, $values, $index);
    }
    return;
  }

  // trip_id column is updated in TripService.php payment request.
  /**
   * This function update load driver
   *
   * @param string $relation add relation
   * @param object $collection add collection to request
   * @param object $modelObject add model obejct
   * @param object $load parent object
   */
  public function updateDriverLoad($relation, $collection, $modelObject, $load) {
    $collection = $collection;
    $dbData = $load->$relation;

    $vehicleLogService = new VehicleLogService();
    $logType = array_search('load', config('constant.logs.truckAndTrailerType'));
    $loadLogType = array_search('adminDispatcherAssignVehicleToLoad', config('constant.logs.load'));

    //delete
    $delete = $dbData->whereNotIn('id', $collection->pluck('id'))->values();
    if ($delete->isNotEmpty()) {
      $load->$relation()->whereIn('id', $delete->pluck('id'))->delete();
      LoadDriverUser::whereIn('load_driver_id', $delete->pluck('id'))->delete();
    }

    //insert
    $insert = $collection->where('id', null)->values();
    if ($insert->isNotEmpty()) {
      $rows = $load->$relation()->createMany($insert);
      foreach ($rows as $row) {
        if (!empty($row->driver_ids)) {
          $userIds = explode(',', $row->driver_ids);
          foreach ($userIds as $userId) {
            LoadDriverUser::create([
              'load_driver_id' => $row->id,
              'user_id' => (int) $userId,
            ]);
          }
        }
        $vehicleLogService->logAssignVehicleToLoad($load->id, $loadLogType, $logType, $row->id, $row->truck_id, $row->trailer_id);
      }
    }

    //update
    $update = $collection->whereIn('id', $dbData->pluck('id'));
    $update->each(function ($item) use ($dbData, $load, $vehicleLogService, $loadLogType, $logType) {
      $driver = LoadDriver::where('id', $item['id'])->first();
      $logTruckId = null;
      $logTrailerId = null;
      if ($item['truck_id'] != $driver->truck_id) {
        $logTruckId = $item['truck_id'];
      }
      if ($item['trailer_id'] != $driver->trailer_id) {
        $logTrailerId = $item['trailer_id'];
      }
      $vehicleLogService->logAssignVehicleToLoad($load->id, $loadLogType, $logType, $driver->id, $logTruckId, $logTrailerId);
      $data = [
        'driver_ids' => $item['driver_ids'],
        'truck_id' => $item['truck_id'],
        'trailer_id' => $item['trailer_id'],
        'external_trailer_number' => $item['external_trailer_number'] ?? null,
        'drop_trailer' => $item['drop_trailer'],
        //        'to_notify_driver' => $item['to_notify_driver'],
        'is_final_mile' => $item['is_final_mile'] ?? 0,
        'direction' => $item['direction'] ?? null,
        'notes' => $item['notes'],
        'from_leg' => $item['from_leg'],
        'to_leg' => $item['to_leg'],
        'loaded_distance' => $item['loaded_distance'] ?? null,
        'empty_distance' => $item['empty_distance'] ?? null,
        'chassis' => $item['chassis'] ?? null,
      ];

      if (array_key_exists('start_location_zip_code', $item)) {
        $data['start_location_address'] = $item['start_location_address'];
        $data['start_location_city'] = $item['start_location_city'];
        $data['start_location_state'] = $item['start_location_state'];
        $data['start_location_zip_code'] = $item['start_location_zip_code'];
        $data['start_location_latitude'] = $item['start_location_latitude'];
        $data['start_location_longitude'] = $item['start_location_longitude'];
        $data['start_location_distance'] = $item['start_location_distance'];
      }

      // driver ids not equal to table driver ids
      // In LoadDetail.vue, we allow to change drivers only in 2 cases:
      // assign and accepted, so this ready_to_handover should
      // not happen anymore. accepted can be deleted in the future.
      if ($driver->driver_ids != $item['driver_ids'] && $driver->driver_ids != null) {
        if (
          $driver->status != config('constant.status.load_driver.assign')
          && $driver->status != config('constant.status.load_driver.accepted')
        ) {
          // I guess only possible case for being here is that after users open
          // the Edit Load page, and before the Submit button is clicked,
          // driver updated the app.
          Log::channel('slack')->critical('LoadTrait.php: ready_to_handover' .
            ' happened for load_driver_id: ' . $driver->id .
            ', status: ' . $driver->status);
        }
        // Only possible status now is assign.
        // driver delete
        LoadDriverUser::where('load_driver_id', $driver->id)->delete();
        $driver->delete();
        //create new driver
        $data['load_id'] = $load->id;
        $data['status'] = config('constant.status.load_driver.assign');
        // If clicked hand over when assign, then cannot modify driver field.
        $loadDriver = LoadDriver::create($data);
        if (!empty($loadDriver->driver_ids)) {
          $userIds = explode(',', $loadDriver->driver_ids);
          foreach ($userIds as $userId) {
            LoadDriverUser::create([
              'load_driver_id' => $loadDriver->id,
              'user_id' => (int) $userId,
            ]);
          }
        }
      } else {
        //normal update
        if ($driver->driver_ids != $item['driver_ids']) {
          // must above the update() line.
          // guaranteed to be $driver->driver_ids == NULL
          if (!empty($item['driver_ids'])) {
            // should be true
            $userIds = explode(',', $item['driver_ids']);
            foreach ($userIds as $userId) {
              LoadDriverUser::create([
                'load_driver_id' => $driver->id,
                'user_id' => (int) $userId,
              ]);
            }
          }
        }
        // Either same driver before and after change or previously no driver.
        if (isset($item['reassign']) && $item['reassign']) {
          $data['status'] = config('constant.status.load_driver.load_started');
        }
        $driver->update($data);
      }
    });
    return;
  }
}
