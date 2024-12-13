<?php

namespace App\Http\Controllers\Api\ExternalLoadBoards;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExternalLoadBoards\Dat\CreateDatServiceAccount;
use App\Http\Requests\Api\ExternalLoadBoards\Dat\CreateDatUserAccount;
use App\Http\Requests\Api\ExternalLoadBoards\Dat\CreateSearchCriteriaRequest;
use App\Http\Requests\Api\ExternalLoadBoards\Dat\GetLoadDetailsRequest;
use App\Services\ExternalLoadBoards\DatService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DatController extends Controller {
  protected $datService;

  public function __construct(DatService $datService) {
    $this->datService = $datService;
  }

  public function getConnectionStatus(): JsonResponse {
    try {
      return $this->respondOK($this->datService->getConnectionStatus());
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Get DAT Details.
   * @return JsonResponse
   * @throws Exception
   */
  public function getDatAccountDetails(): JsonResponse {
    try {
      return $this->respondWithData($this->datService->getDatAccountDetails());
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Create new service account.
   * @param CreateDatServiceAccount $request
   * @return JsonResponse
   * @throws Exception
   */
  public function updateOrCreateServiceAccount(CreateDatServiceAccount $request): JsonResponse {
    try {
      $this->datService->updateOrCreateServiceAccount($request);
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * @param CreateDatUserAccount $request
   * @return JsonResponse
   * @throws Exception
   */
  public function updateOrCreateUserAccount(CreateDatUserAccount $request): JsonResponse {
    try {
      $this->datService->updateOrCreateUserAccount($request);
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }


  /**
   * Remove/Delete DAT Service Account
   * @return JsonResponse
   * @throws Exception
   */
  public function removeServiceAccount(): JsonResponse {
    try {
      $this->datService->removeServiceAccount();
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Remove/Delete DAT User Account
   * @return JsonResponse
   * @throws Exception
   */
  public function removeUserAccount(): JsonResponse {
    try {
      $this->datService->removeUserAccount();
      return $this->respondOk();
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Get All Available matches based on search criteria.
   * @param CreateSearchCriteriaRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function searchLoads(CreateSearchCriteriaRequest $request): JsonResponse {
    try {
      $response = $this->datService->searchLoads($request);
      return $this->respondWithData($response);
    } catch (Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Retrieve the details of a specific match for a specified search Load Details
   * @param GetLoadDetailsRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function getLoadDetails(GetLoadDetailsRequest $request): JsonResponse {
    try {
      $response = $this->datService->getLoadDetails($request);
      return $this->respondWithData($response);
    } catch (\Throwable $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
