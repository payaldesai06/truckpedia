<?php

namespace App\Http\Controllers\Api\Planning;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Planning\CreateDriverTimeOffCalendarRequest;
use App\Http\Requests\Api\Planning\UpdateDriverTimeOffCalendarRequest;
use App\Http\Requests\Api\Planning\DeleteDriverTimeOffCalendarRequest;
use App\Http\Resources\Planning\DriverTimeOffCalendarCollection;
use App\Services\Planning\DriverTimeOffCalendarService;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class DriverTimeOffCalendarController extends Controller {
  protected $driverTimeOffCalendarService;

  public function __construct(DriverTimeOffCalendarService $driverTimeOffCalendarService) {
    $this->driverTimeOffCalendarService = $driverTimeOffCalendarService;
  }

  /**
   * Create driver time off calendar.
   * @param CreateDriverTimeOffCalendarRequest $request
   * @return JsonResponse|mixed
   */
  public function createDriverTimeOffCalendar(CreateDriverTimeOffCalendarRequest $request) {
    try {
      return $this->respondWithData($this->driverTimeOffCalendarService->createDriverTimeOffCalendar());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update driver time off calendar.
   * @param UpdateDriverTimeOffCalendarRequest $request
   * @return JsonResponse|mixed
   */
  public function updateDriverTimeOffCalendar(UpdateDriverTimeOffCalendarRequest $request) {
    try {
      $isUpdated = $this->driverTimeOffCalendarService->updateDriverTimeOffCalendar();
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
   * Delete driver time off calendar by id
   * @param DeleteDriverTimeOffCalendarRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteDriverTimeOffCalendar(DeleteDriverTimeOffCalendarRequest $request) {
    try {
      $isDeleted = $this->driverTimeOffCalendarService->deleteDriverTimeOffCalendar();
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get the list of driver time off calendar
   * @return JsonResponse|mixed
   */
  public function getDriverTimeOffCalendarList() {
    try {
      return $this->respondWithData(new DriverTimeOffCalendarCollection($this->driverTimeOffCalendarService->getDriverTimeOffCalendarList()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
