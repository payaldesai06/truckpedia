<?php

namespace App\Http\Controllers\Api\HomeTab;

use App\Http\Controllers\Controller;
use App\Services\HomeTab\HomeTabService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\HomeTab\GetOverviewRequest;


class HomeTabController extends Controller {

  protected $homeTabService;

  public function __construct(HomeTabService $homeTabService) {
    $this->homeTabService = $homeTabService;
  }

  /**
   * Get Home Tab data list.
   * @param GetOverviewRequest $request
   * @return JsonResponse|mixed
   */
  public function getOverview(GetOverviewRequest $request) {
    try {
      return $this->respondWithData($this->homeTabService->getOverview());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Home Tab Customer Overview.
   * @param GetOverviewRequest $request
   * @return JsonResponse|mixed
   */
  public function customerOverview(GetOverviewRequest $request) {
    try {
      return $this->respondWithData($this->homeTabService->customerOverview());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Home Tab Driver Overview.
   * @param GetOverviewRequest $request
   * @return JsonResponse|mixed
   */
  public function driverOverview(GetOverviewRequest $request) {
    try {
      return $this->respondWithData($this->homeTabService->driverOverview());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Home Tab Truck Overview.
   * @param GetOverviewRequest $request
   * @return JsonResponse|mixed
   */
  public function truckOverview(GetOverviewRequest $request) {
    try {
      return $this->respondWithData($this->homeTabService->truckOverview());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Home Tab Dispatcher Overview.
   * @param GetOverviewRequest $request
   * @return JsonResponse|mixed
   */
  public function dispatcherOverview(GetOverviewRequest $request) {
    try {
      return $this->respondWithData($this->homeTabService->dispatcherOverview());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Home Tab Market Overview.
   * @param GetOverviewRequest $request
   * @return JsonResponse|mixed
   */
  public function marketOverview(GetOverviewRequest $request) {
    try {
      return $this->respondWithData($this->homeTabService->marketOverview());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
