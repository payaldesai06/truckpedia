<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Automation\CreateAutomationRequest;
use App\Http\Requests\Api\Automation\DeleteAutomationRequest;
use App\Http\Requests\Api\Automation\UpdateAutomationRequest;
use App\Http\Resources\Automation\AutomationResource;
use App\Services\AutomationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class AutomationController extends Controller {
  protected $automationService;

  public function __construct(AutomationService $automationService) {
    $this->automationService = $automationService;
  }

  public function getAllAutomations(): JsonResponse {
    try {
      return $this->respondWithData(new AutomationResource($this->automationService->getAllAutomations()));
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateAutomation(UpdateAutomationRequest $request): JsonResponse {
    try {
      $this->automationService->updateAutomation($request);
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create Automation Schedule.
   * @param CreateAutomationRequest $request
   * @return JsonResponse|mixed
   */
  public function createAutomation(CreateAutomationRequest $request) {
    try {
      $isCreated = $this->automationService->createAutomation($request);
      if (empty($isCreated)) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function deleteAutomation(DeleteAutomationRequest $request) {
    try {
      $isDeleted = $this->automationService->deleteAutomation($request);
      if (empty($isDeleted)) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
