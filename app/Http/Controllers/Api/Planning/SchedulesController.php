<?php

namespace App\Http\Controllers\Api\Planning;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Planning\CreateScheduleRequest;
use App\Http\Requests\Api\Planning\DestroyScheduleRequest;
use App\Http\Requests\Api\Planning\UpdateBatchScheduleRequest;
use App\Http\Requests\Api\Planning\UpdateScheduleRequest;
use App\Services\Planning\ScheduleService;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class SchedulesController extends Controller {
  protected $scheduleService;

  public function __construct(ScheduleService $scheduleService) {
    $this->scheduleService = $scheduleService;
  }

  /**
   * Created Schedule
   * @return JsonResponse|mixed
   */
  public function create(CreateScheduleRequest $request) {
    try {
      $isCreated = $this->scheduleService->create($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Schedule
   * @return JsonResponse|mixed
   */
  public function edit(UpdateScheduleRequest $request) {
    try {
      $isUpdated = $this->scheduleService->edit($request);
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
   * Delete Schedule
   * @param DestroyScheduleRequest $request
   * @return JsonResponse|mixed
   */
  public function destroy(DestroyScheduleRequest $request) {
    try {
      $isDeleted = $this->scheduleService->destroy($request);
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function batchUpdate(UpdateBatchScheduleRequest $request) {
    try {
      $isUpdated = $this->scheduleService->batchUpdate($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
