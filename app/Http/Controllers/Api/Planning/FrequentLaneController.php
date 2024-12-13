<?php

namespace App\Http\Controllers\Api\Planning;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Planning\CreateFrequentLaneRequest;
use App\Http\Requests\Api\Planning\UpdateFrequentLaneRequest;
use App\Http\Resources\Planning\FrequentLaneAllCollection;
use App\Http\Resources\Planning\FrequentLaneCollection;
use App\Services\Planning\FrequentLaneService;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class FrequentLaneController extends Controller {
  protected $frequentLaneService;

  public function __construct(FrequentLaneService $frequentLaneService) {
    $this->frequentLaneService = $frequentLaneService;
  }

  /**
   * Create frequent lane.
   * @param CreateFrequentLaneRequest $request
   * @return JsonResponse|mixed
   */
  public function createFrequentLane(CreateFrequentLaneRequest $request) {
    try {
      return $this->respondWithData($this->frequentLaneService->createFrequentLane());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }


  /**
   * Get frequent lane by id
   * @return JsonResponse|mixed
   */
  public function getFrequentLane() {
    try {
      return $this->respondWithData($this->frequentLaneService->getFrequentLane());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update frequent lane.
   * @param UpdateFrequentLaneRequest $request
   * @return JsonResponse|mixed
   */
  public function updateFrequentLane(UpdateFrequentLaneRequest $request) {
    try {
      $isUpdated = $this->frequentLaneService->updateFrequentLane();
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get all frequent lane
   * @return JsonResponse|mixed
   */
  public function getFrequentLaneAll() {
    try {
      return $this->respondWithData(new FrequentLaneAllCollection($this->frequentLaneService->getFrequentLaneAll()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get the list of frequent lane
   * @return JsonResponse|mixed
   */
  public function getFrequentLaneList() {
    try {
      return $this->respondWithData(new FrequentLaneCollection($this->frequentLaneService->getFrequentLaneList()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
