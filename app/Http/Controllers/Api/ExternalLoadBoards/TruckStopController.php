<?php

namespace App\Http\Controllers\Api\ExternalLoadBoards;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExternalLoadBoards\TruckStop\CreateTruckStopIntegrationIdRequest;
use App\Http\Requests\Api\ExternalLoadBoards\TruckStop\SearchLoadsRequest;
use App\Services\ExternalLoadBoards\TruckStopService;
use Illuminate\Http\JsonResponse;

class TruckStopController extends Controller {
  private TruckStopService $truckStopService;

  public function __construct(TruckStopService $truckStopService) {
    $this->truckStopService = $truckStopService;
  }

  public function getIntegrationId(): JsonResponse {
    try {
      return $this->respondWithData($this->truckStopService->getIntegrationId());
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function updateOrCreateIntegrationId(CreateTruckStopIntegrationIdRequest $request): JsonResponse {
    try {
      $this->truckStopService->updateOrCreateIntegrationId($request);
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function removeIntegrationId(): JsonResponse {
    try {
      $this->truckStopService->removeIntegrationId();
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function getConnectionStatus(): JsonResponse {
    try {
      $response = $this->truckStopService->getConnectionStatus();
      return $this->respondOk($response);
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function searchLoads(SearchLoadsRequest $request): JsonResponse {
    try {
      $response = $this->truckStopService->searchLoads($request);
      return $this->respondWithData($response);
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
