<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SavedEquipmentTypes\CreateSavedEquipmentTypeRequest;
use App\Http\Requests\Api\SavedEquipmentTypes\GetListSavedEquipmentTypesRequest;
use App\Http\Requests\Api\SavedEquipmentTypes\UpdateSavedEquipmentTypeRequest;
use App\Http\Resources\SavedEquipmentTypes\GetListSavedEquipmentTypesCollection;
use App\Services\SavedEquipmentTypeService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class SavedEquipmentTypeController extends Controller {
  protected $savedEquipmentTypeService;

  public function __construct(SavedEquipmentTypeService $savedEquipmentTypeService) {
    $this->savedEquipmentTypeService = $savedEquipmentTypeService;
  }

  /**
   * Get List Saved Equipment Types
   * @param GetListSavedEquipmentTypesRequest $request
   * @return JsonResponse
   */
  public function getList(GetListSavedEquipmentTypesRequest $request): JsonResponse {
    try {
      return $this->respondWithData(
        new GetListSavedEquipmentTypesCollection($this->savedEquipmentTypeService->getList($request))
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create saved equipment types of a company.
   * @param CreateSavedEquipmentTypeRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function create(CreateSavedEquipmentTypeRequest $request): JsonResponse {
    try {
      $isCreated = $this->savedEquipmentTypeService->create($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithData(['id' => $isCreated->id]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update saved equipment types of a company.
   * @param UpdateSavedEquipmentTypeRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function update(UpdateSavedEquipmentTypeRequest $request): JsonResponse {
    try {
      $isUpdated = $this->savedEquipmentTypeService->update($request);
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
   * Delete saved equipment types of a company.
   * @return JsonResponse
   * @throws Exception
   */
  public function delete(): JsonResponse {
    try {
      $isDeleted = $this->savedEquipmentTypeService->delete();
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
