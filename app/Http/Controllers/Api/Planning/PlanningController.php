<?php

namespace App\Http\Controllers\Api\Planning;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Planning\Timeline\SetCustomizationRequest;
use App\Services\Planning\PlanningService;
use App\Services\UserCustomization\UserCustomizationService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\Planning\GetTimelineRequest;

class PlanningController extends Controller {

  protected $planningService;

  public function __construct(PlanningService $planningService) {
    $this->planningService = $planningService;
  }

  /**
   * Get timeline list.
   * @param GetTimelineRequest $request
   * @return JsonResponse|mixed
   */
  public function getTimeline(GetTimelineRequest $request) {
    try {
      return $this->respondWithData($this->planningService->getTimeline($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Set user customization related to Dispatch->Calendar view.
   * @param SetCustomizationRequest $request
   * @return JsonResponse|mixed
   */
  public function setCustomization(SetCustomizationRequest $request) {
    try {
      UserCustomizationService::saveOrUpdate($request->all(), "dispatchCalendar");
      return $this->respondOK();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
