<?php

namespace App\Http\Controllers\Api;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Services\TripV2FileService;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTripV2FileRequest;
use App\Http\Requests\DeleteTripV2FileRequest;
use App\Http\Requests\GetTripV2FilePresignedUrlRequest;

class TripV2FileController extends Controller {
  protected $tripFileService;

  public function __construct(TripV2FileService $tripFileService) {
    $this->tripFileService = $tripFileService;
  }

  /**
   * @param  GetTripV2FilePresignedUrlRequest  $request
   * @return JsonResponse|mixed
   */
  public function getPresignedUrl(GetTripV2FilePresignedUrlRequest $request) {
    try {
      $presignedUrls = $this->tripFileService->getPresignedUrl($request);
      return $this->respondWithData($presignedUrls);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  StoreTripV2FileRequest  $request
   * @return JsonResponse|mixed
   */
  public function store(StoreTripV2FileRequest $request) {
    try {
      $this->tripFileService->store($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  DeleteTripV2FileRequest  $request
   * @return JsonResponse|mixed
   */
  public function destroy(DeleteTripV2FileRequest $request) {
    try {
      $this->tripFileService->delete($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
