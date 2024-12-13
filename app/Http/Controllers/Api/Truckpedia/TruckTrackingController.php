<?php

namespace App\Http\Controllers\Api\Truckpedia;

use App\Http\Controllers\Controller;

use App\Http\Requests\Api\Truckpedia\TrackCarrierTrucksRequest;
use App\Services\Truckpedia\TruckTrackingService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class TruckTrackingController extends Controller {

  protected $truckTrackingService;

  public function __construct(TruckTrackingService $truckTrackingService) {
    $this->truckTrackingService = $truckTrackingService;
  }

  /**
   * Track carrier truck on map
   * @param TrackCarrierTrucksRequest $request
   * @return JsonResponse|mixed
   */
  public function trackCarrierTrucks(TrackCarrierTrucksRequest $request) {
    try {
      return $this->respondWithData($this->truckTrackingService
        ->trackCarrierTrucks($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
