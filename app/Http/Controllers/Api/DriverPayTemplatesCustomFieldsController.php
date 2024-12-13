<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\DriverPayTemplate\CreateDriverPayTemplateCustomFieldRequest;
use App\Http\Requests\Api\DriverPayTemplate\UpdateDriverPayTemplateCustomFieldRequest;
use App\Services\DriverPayTemplatesCustomFieldsService;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class DriverPayTemplatesCustomFieldsController extends Controller {
  protected $customFieldsService;

  public function __construct(DriverPayTemplatesCustomFieldsService $customFieldsService) {
    $this->customFieldsService = $customFieldsService;
  }

  /**
   * Create driver pay templates custom-fields.
   * @param CreateDriverPayTemplateCustomFieldRequest $request
   * @return JsonResponse|mixed
   */
  public function createCustomFields(CreateDriverPayTemplateCustomFieldRequest $request) {
    try {
      return $this->respondWithData($this->customFieldsService->createCustomFields($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update driver pay template custom-fields.
   * @param UpdateDriverPayTemplateCustomFieldRequest $request
   * @return JsonResponse|mixed
   */
  public function updateCustomFields(UpdateDriverPayTemplateCustomFieldRequest $request) {
    try {
      $isUpdated = $this->customFieldsService->updateCustomFields($request);
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
   * Get the list of driver pay template custom-fields.
   * @return JsonResponse|mixed
   */
  public function getAllCustomFields() {
    try {
      return $this->respondWithData($this->customFieldsService->getAllCustomFields());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
