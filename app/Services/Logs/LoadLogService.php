<?php

namespace App\Services\Logs;

use App\Models\Logs\LoadLog;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LoadLogService {
  /**
   * Create Load Logs.
   * @param $loadId
   * @param $type
   * @param $loadDriverId
   * @param $truckId
   * @param $trailerId
   * @return mixed
   */
  public function createLoadLog(
    $loadId,
    $type,
    $loadDriverId = null,
    $truckId = null,
    $trailerId = null,
    $stopLocation = null
  ) {
    try {
      $data = array_filter([
        'load_id' => $loadId,
        'type' => $type,
        'load_driver_id' => $loadDriverId,
        'truck_id' => $truckId,
        'trailer_id' => $trailerId,
        'modified_by_user_id' => Auth::id() ?? null,
        'created_at' => Carbon::now(),
      ], function ($item) {
        return !is_null($item) && $item !== '';
      });
      if (!empty($stopLocation)){
        $data['trailer_location'] = $stopLocation;
      }
      return LoadLog::create($data)->id;
    } catch (Exception $exception) {
      Log::error($exception);
      return;
    }
  }
}
