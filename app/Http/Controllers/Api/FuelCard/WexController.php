<?php

namespace App\Http\Controllers\Api\FuelCard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FuelCard\Wex\GetIftaDataRequest;
use App\Http\Requests\Api\FuelCard\Wex\WexRequest;
use App\Services\FuelCard\WexService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class WexController extends Controller {
  protected WexService $wexService;

  public function __construct(WexService $wexService) {
    $this->wexService = $wexService;
  }

  /**
   * Get Wex Account connection status.
   * @return JsonResponse
   */
  public function getConnectionStatus(): JsonResponse {
    try {
      return $this->respondOK($this->wexService->getConnectionStatus());
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Get Wex Account details.
   * @return JsonResponse
   */
  public function getAccountDetails(): JsonResponse {
    try {
      return $this->respondWithData($this->wexService->getDatAccountDetails());
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Create or Update Wex Account using Wex username and password.
   * @param WexRequest $request
   * @return JsonResponse|mixed
   */
  public function updateOrCreateAccount(WexRequest $request) {
    try {
      $this->wexService->updateOrCreateAccount($request);
      return $this->respondOk();
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Delete Account
   * @return JsonResponse|mixed
   */
  public function disconnectAccount() {
    try {
      $this->wexService->disconnectAccount();
      return $this->respondOk();
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Download transactions of every company that has a Wex account and save to the database
   * @return JsonResponse|mixed
   */
  public function getAndSaveTransactions() {
    try {
      //set_time_limit(3000000);
      $this->wexService->getAndSaveCompaniesTransactions();
      return $this->respondOk();
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  // I keep it here but this is not needed.
  /**
   * Get Ifta data
   * @return JsonResponse|mixed
   */
  public function getIftaData(GetIftaDataRequest $request) {
    try {
      return $this->respondWithData($this->wexService->getIftaData(
        $request->companyId,
        $request->startDate,
        $request->endDate
      ));
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
