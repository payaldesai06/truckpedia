<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Load\DropTrailerRequest;
use App\Http\Requests\Api\Load\HookTrailerRequest;
use App\Http\Requests\Api\Load\PickupLegLoadRequest;
use App\Http\Requests\Api\Load\UpdateDeliveredRequest;
use App\Http\Requests\Api\Load\UpdatePickupRequest;
use App\Http\Resources\DriverLoad\DriverLoadCollection;
use App\Http\Resources\DriverLoad\DriverLoadResource;
use App\Http\Resources\Load\AvailableLegLoads\AvailableLegLoadsMainResource;
use App\Services\DriverLoadService;
use Exception;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\Load\UpdateLoadDriverStatusRequest;
use App\Http\Requests\Api\Load\GetDriverLoadFileUrlRequest;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\Load\DriverUpdateLoadRequest;
use App\Http\Requests\Api\Load\DriverUpdateTruckTrailerRequest;

class DriverLoadController extends Controller {
  protected $driverLoadService;

  public function __construct(DriverLoadService $driverLoadService) {
    $this->driverLoadService = $driverLoadService;
  }

  public function index() {
    try {
      $driverLoads = $this->driverLoadService->getAllDriverLoad();
      return $this->respondWithData(new DriverLoadCollection($driverLoads));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function accepted() {
    try {
      $this->driverLoadService->accepted();
      return $this->respondWithMessage(config('response.status.driver_load.accepted'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  // UpdateLoadStartedRequest $request
  public function loadStarted() {
    try {
      $driverLoad = $this->driverLoadService->loadStarted();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.load_started')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  // New status for driver load start here.
  public function fromArrived(UpdateLoadDriverStatusRequest $request) {
    try {
      $driverLoad = $this->driverLoadService->fromArrived();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.from_arrived')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function fromLoaded(UpdateLoadDriverStatusRequest $request) {
    try {
      $driverLoad = $this->driverLoadService->fromLoaded();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.from_loaded')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function toArrived(UpdateLoadDriverStatusRequest $request) {
    try {
      $driverLoad = $this->driverLoadService->toArrived();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.to_arrived')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function toUnloaded(UpdateLoadDriverStatusRequest $request) {
    try {
      $driverLoad = $this->driverLoadService->toUnloaded();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.to_unloaded')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
  // End here.

  // Old API to be removed later, starts here.
  public function pickUp(UpdatePickupRequest $request) {
    try {
      $driverLoad = $this->driverLoadService->pickUp();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.pick_up')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function delivered(UpdateDeliveredRequest $request) {
    try {
      $driverLoad = $this->driverLoadService->delivered();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.delivered')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  // Old API to be removed later, ends here.

  // UpdateEndLoadRequest $request
  public function endLoad() {
    try {
      $driverLoad = $this->driverLoadService->endLoad();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.end_load')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function handedOver() {
    try {
      $driverLoad = $this->driverLoadService->handedOver();
      return $this->respondWithMessageAndPayload(
        new DriverLoadResource($driverLoad->loadDetail),
        config('response.status.driver_load.handed_over')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get all available loads where the leg to receiver segment has no driver (but can have truck and trailer).
   * @return JsonResponse
   * @throws Exception
   */
  public function getAvailableLegLoads(): JsonResponse {
    try {
      $legLoads = $this->driverLoadService->getAvailableLegLoads();
      if (count($legLoads) > 0) {
        return $this->respondWithData(AvailableLegLoadsMainResource::collection($legLoads));
      } else {
        return $this->respondWithData($legLoads);
      }
    } catch (Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Pick up leg load for the leg to receiver segment.
   * @param PickupLegLoadRequest $request
   * @return JsonResponse|null
   */
  public function pickupLegLoad(PickupLegLoadRequest $request): ?JsonResponse {
    try {
      $this->driverLoadService->pickupLegLoad($request);
      return $this->respondOk();
    } catch (Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Get driver load file urls.
   * @param GetDriverLoadFileUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function getUploadUrls(GetDriverLoadFileUrlRequest $request): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload($this->driverLoadService->getUploadUrls());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Drop Trailer
   * @param DropTrailerRequest $request
   * @return JsonResponse
   */
  public function dropTrailer(DropTrailerRequest $request): JsonResponse {
    try {
      $this->driverLoadService->dropTrailer($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Hook Trailer
   * @param HookTrailerRequest $request
   * @return JsonResponse
   */
  public function hookTrailer(HookTrailerRequest $request): JsonResponse {
    try {
      $this->driverLoadService->hookTrailer($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Driver update load
   * @param DriverUpdateLoadRequest $request
   * @return JsonResponse
   */
  public function updateLoad(DriverUpdateLoadRequest $request): JsonResponse {
    try {
      $this->driverLoadService->updateLoad($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Driver update truck and/or trailer.
   * @param DriverUpdateTruckTrailerRequest $request
   * @return JsonResponse
   */
  public function updateTruckTrailer(DriverUpdateTruckTrailerRequest $request): JsonResponse {
    try {
      $this->driverLoadService->updateTruckTrailer();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
