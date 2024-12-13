<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\DriverPayTemplate\CreateDriverPayTemplateRequest;
use App\Http\Requests\Api\DriverPayTemplate\UpdateDriverPayTemplateRequest;
use App\Http\Resources\DriverPayTemplate\GetAllDriverPayTemplateCollection;
use App\Http\Resources\DriverPayTemplate\GetDriverPayTemplateCollection;
use App\Services\DriverPayTemplateService;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class DriverPayTemplateController extends Controller {
  protected $driverPayTemplateService;

  public function __construct(DriverPayTemplateService $driverPayTemplateService) {
    $this->driverPayTemplateService = $driverPayTemplateService;
  }

  /**
   * Create driver pay template.
   * @param CreateDriverPayTemplateRequest $request
   * @return JsonResponse|mixed
   */
  public function createDriverPayTemplate(CreateDriverPayTemplateRequest $request) {
    try {
      return $this->respondWithData($this->driverPayTemplateService->createDriverPayTemplate($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update driver pay template.
   * @param UpdateDriverPayTemplateRequest $request
   * @return JsonResponse|mixed
   */
  public function updateDriverPayTemplate(UpdateDriverPayTemplateRequest $request) {
    try {
      $isUpdated = $this->driverPayTemplateService->updateDriverPayTemplate($request);
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
   * Get the driver pay template by id
   * @return JsonResponse|mixed
   */
  public function getDriverPayTemplateById() {
    try {
      return $this->respondWithData($this->driverPayTemplateService->getDriverPayTemplateById());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get the list of driver pay template
   * @return JsonResponse|mixed
   */
  public function getTemplates() {
    try {
      return $this->respondWithData(new GetDriverPayTemplateCollection($this->driverPayTemplateService->getTemplates()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get the list of all driver pay template
   * @return JsonResponse|mixed
   */
  public function getAllTemplates() {
    try {
      return $this->respondWithData(new GetAllDriverPayTemplateCollection($this->driverPayTemplateService->getAllTemplates()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
