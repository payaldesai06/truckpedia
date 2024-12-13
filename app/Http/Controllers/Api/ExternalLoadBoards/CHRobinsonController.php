<?php

namespace App\Http\Controllers\Api\ExternalLoadBoards;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExternalLoadBoards\CHRobinson\CreateCHRobinsonCarrierCodeRequest;
use App\Http\Requests\Api\ExternalLoadBoards\CHRobinson\SearchLoadsRequest;
use App\Services\ExternalLoadBoards\CHRobinsonService;
use Illuminate\Http\JsonResponse;

class CHRobinsonController extends Controller {
  private CHRobinsonService $chrobinsonService;

  public function __construct(CHRobinsonService $chrobinsonService) {
    $this->chrobinsonService = $chrobinsonService;
  }

  public function getCarrierCode(): JsonResponse {
    try {
      return $this->respondWithData($this->chrobinsonService->getCarrierCode());
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function updateOrCreateCarrierCode(CreateCHRobinsonCarrierCodeRequest $request): JsonResponse {
    try {
      $this->chrobinsonService->updateOrCreateCarrierCode($request);
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function removeCarrierCode(): JsonResponse {
    try {
      $this->chrobinsonService->removeCarrierCode();
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function getConnectionStatus(): JsonResponse {
    try {
      $response = $this->chrobinsonService->getConnectionStatus();
      return $this->respondOk($response);
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function searchLoads(SearchLoadsRequest $request): JsonResponse {
    try {
      $response = $this->chrobinsonService->searchLoads($request);
      return $this->respondWithData($response);
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
