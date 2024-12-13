<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FullyCustomized\CreateFcCustomFieldRequest;
use App\Http\Requests\Api\FullyCustomized\DeleteCustomFieldRequest;
use App\Http\Requests\Api\FullyCustomized\GetFcCustomFieldRequest;
use App\Http\Requests\Api\FullyCustomized\UpdateFcCustomFieldRequest;
use App\Http\Resources\FullyCustomized\FcCustomFieldResource;
use App\Services\FullyCustomized\FcCustomFieldService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class FcCustomFieldController extends Controller {
  protected $fcFieldService;

  public function __construct(FcCustomFieldService $fcFieldService) {
    $this->fcFieldService = $fcFieldService;
  }

  /**
   * Create Custom Field Data.
   * @param CreateFcCustomFieldRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function store(CreateFcCustomFieldRequest $request) {
    try {
      $isCreated = $this->fcFieldService->store($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithData(['fields' => FcCustomFieldResource::collection($this->fcFieldService->index($request))]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Custom Field Name by ID.
   * @param UpdateFcCustomFieldRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function update(UpdateFcCustomFieldRequest $request) {
    try {
      $this->fcFieldService->update($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Custom Field by submenuId.
   * @param GetFcCustomFieldRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function index(GetFcCustomFieldRequest $request) {
    try {
      return $this->respondWithData(['fields' => FcCustomFieldResource::collection($this->fcFieldService->index($request))]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  DeleteCustomFieldRequest  $request
   * @return JsonResponse|mixed
   */
  public function destroy(DeleteCustomFieldRequest $request) {
    try {
      $this->fcFieldService->delete($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
