<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\VehicleV2Service;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\VehicleV2\GetAllVehiclesRequest;


class VehicleV2Controller extends Controller {

  protected $vehicleService;

  public function __construct(VehicleV2Service $vehicleService) {
    $this->vehicleService = $vehicleService;
  }

  /**
   * Get All Vehicles(trucks and trailers) list.
   * @return JsonResponse|mixed
   */
  public function getAllVehicles() {
    try {
      return $this->respondWithData($this->vehicleService->getAllVehicles());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get All Vehicles(trucks and trailers) list.
   * @param GetAllVehiclesRequest $request
   * @return JsonResponse|mixed
   */
  public function getAllVehiclesV2(GetAllVehiclesRequest $request) {
    try {
      return $this->respondWithData($this->vehicleService->getAllVehiclesV2());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
