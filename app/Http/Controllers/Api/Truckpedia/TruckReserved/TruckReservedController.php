<?php

namespace App\Http\Controllers\Api\Truckpedia\TruckReserved;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Truckpedia\TruckReserved\TruckReserveByLoad;
use App\Http\Requests\Api\Truckpedia\TruckReserved\ReserveRequestFromCarrierWebsite;
use App\Http\Requests\Api\Truckpedia\TruckReserved\CreateTruckReservedRequest;
use App\Services\Truckpedia\TruckReserved\TruckReservedService;
use Exception;
use Illuminate\Support\Facades\Log;

class TruckReservedController extends Controller {

  protected TruckReservedService $truckReservedService;

  public function __construct(TruckReservedService $truckReservedService) {
    $this->truckReservedService = $truckReservedService;
  }

  public function reserveTruck(CreateTruckReservedRequest $createTruckReservedRequest) {
    try {
      $this->truckReservedService->reserveTruck($createTruckReservedRequest);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function reserveByLoad(TruckReserveByLoad $request) {
    try {
      $this->truckReservedService->reserveByLoad($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Send Reserve Request Mail From Carrier Website
   * @param ReserveRequestFromCarrierWebsite $request
   * @return JsonResponse|mixed
   */
  public function reserveRequestFromCarrierWebsite(ReserveRequestFromCarrierWebsite $request) {
    try {
      $this->truckReservedService->reserveRequestFromCarrierWebsite($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}