<?php

namespace App\Services;

use App\Jobs\GetVehicleLocation;
use App\Models\Logs\LoadLog;
use App\Services\KeepTruckin\KeepTruckinService;
use App\Services\Samsara\SamsaraService;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

class ExternalTrackingService {

  /**
   * Get all trucks location by truck id's.
   * @param $companyId
   * @param $truckIds
   * @return array
   * @throws Exception
   */
  public function getTrucksLocation($companyId, $truckIds): array {
    if (!is_array($truckIds)) {
      throw new Exception('Internal error while getting truck location');
    }
    if (count($truckIds) == 0) {
      return [];
    }

    $samsaraService = new SamsaraService($companyId);
    if ($samsaraService->connectionStatus() == 'Connected') {
      try {
        return $samsaraService->getVehiclesLocation($truckIds);
      } catch (GuzzleException $e) {
        throw new Exception($e);
      }
    } else {
      $keepTruckinService = new KeepTruckinService($companyId);
      if ($keepTruckinService->connectionStatus() == 'Connected') {
        try {
          return $keepTruckinService->getVehiclesLocation($truckIds);
        } catch (GuzzleException $e) {
          throw new Exception($e);
        }
      }
    }

    $result = [];
    foreach ($truckIds as $truckId) {
      $result[$truckId] = [
        "latitude" => null,
        "longitude" => null,
        "formattedLocation" => null,
        "error" => null,
      ];
    }
    return $result;
  }

  /**
   * @param $companyId
   * @param $truckId
   * @param $trailerId
   * @param $loadLogId
   * @return void
   */
  public function getAndLogTruckTrailerLocation($companyId, $truckId, $trailerId, $loadLogId) {
    $samsaraService = new SamsaraService($companyId);
    if ($samsaraService->connectionStatus() == 'Connected') {
      GetVehicleLocation::dispatch($companyId, 'samsara', $loadLogId, $truckId, $trailerId);
    } else {
      /* samasara is not connect or not exist*/
    }
  }

  /**
   * @param $companyId
   * @param $truckId
   * @param $trailerId
   * @return string|mixed
   */
  public function getTruckTrailerLocation($companyId, $truckId, $trailerId) {
    $samsaraService = new SamsaraService($companyId);
    if ($samsaraService->connectionStatus() == 'Connected') {
      try {
        if ($truckId) {
          return $samsaraService->getOneTruckLocationV2($truckId);
        } else if ($trailerId) {
          return $samsaraService->getOneTrailerLocationV2($trailerId);
        }
      } catch (GuzzleException $exception) {
        Log::error($exception);
      }
    }
    return null;
  }
}
