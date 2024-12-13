<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\MaintenanceV2ServiceType\CreateOrUpdateMaintenanceV2ServiceRequest;
use App\Services\MaintenanceV2ServiceTypeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Exception;

class MaintenanceV2ServiceTypeController extends Controller {
  protected $maintenanceV2ServiceTypeService;

  public function __construct(MaintenanceV2ServiceTypeService $maintenanceV2ServiceTypeService) {
    $this->maintenanceV2ServiceTypeService = $maintenanceV2ServiceTypeService;
  }

  /**
   * Create a new service type
   * @param CreateOrUpdateMaintenanceV2ServiceRequest $request
   * @return JsonResponse|mixed
   */
  public function create(CreateOrUpdateMaintenanceV2ServiceRequest $request) {
    try {
      $data = $this->maintenanceV2ServiceTypeService->create($request->serviceType);
      return $this->respondWithData($data);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get service type list
   * @return JsonResponse|mixed
   */
  public function index() {
    try {
      $data = $this->maintenanceV2ServiceTypeService->getServiceTypes();
      return $this->respondWithData($data);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
