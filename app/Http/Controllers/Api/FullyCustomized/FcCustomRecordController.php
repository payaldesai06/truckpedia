<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Services\FullyCustomized\FcRecordService;
use App\Http\Requests\Api\FullyCustomized\GetFcCustomRecordRequest;
use App\Http\Requests\Api\FullyCustomized\UpdateFieldValuesRequest;
use App\Http\Requests\Api\FullyCustomized\DeleteCustomRecordRequest;
use App\Http\Requests\Api\FullyCustomized\CreateFcCustomRecordRequest;

class FcCustomRecordController extends Controller {
  protected $fcRecordService;

  public function __construct(FcRecordService $fcRecordService) {
    $this->fcRecordService = $fcRecordService;
  }

  /**
   * @param CreateFcCustomRecordRequest $request
   * @return JsonResponse
   */
  public function store(CreateFcCustomRecordRequest $request): JsonResponse {
    try {
      $record = $this->fcRecordService->store($request);
      return $this->respondWithData(['recordId' => $record->id]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function show(GetFcCustomRecordRequest $request) {
    try {
      $record = $this->fcRecordService->show($request);
      return $this->respondWithData(['recordData' => $record]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param UpdateFieldValuesRequest $request
   * @return JsonResponse
   */
  public function update(UpdateFieldValuesRequest $request): JsonResponse {
    try {
      $this->fcRecordService->update($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param DeleteCustomRecordRequest $request
   * @return JsonResponse
   */
  public function destroy(DeleteCustomRecordRequest $request): JsonResponse {
    try {
      $this->fcRecordService->delete($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
