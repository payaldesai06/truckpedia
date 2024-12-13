<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FullyCustomized\DeleteCustomFileRequest;
use App\Http\Requests\Api\FullyCustomized\GetCustomFilePresignedUrlRequest;
use App\Http\Requests\Api\FullyCustomized\StoreCustomFileRequest;
use App\Services\FullyCustomized\FcCustomFileService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class FcCustomDataFileController extends Controller {
  protected $fcFileService;

  public function __construct(FcCustomFileService $fcFileService) {
    $this->fcFileService = $fcFileService;
  }

  /**
   * @param  GetCustomFilePresignedUrlRequest  $request
   * @return JsonResponse|mixed
   */
  public function getPresignedUrl(GetCustomFilePresignedUrlRequest $request) {
    try {
      $presignedUrls = $this->fcFileService->getPresignedUrl($request);
      return $this->respondWithData($presignedUrls);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  DeleteCustomFileRequest  $request
   * @return JsonResponse|mixed
   */
  public function store(StoreCustomFileRequest $request) {
    try {
      $this->fcFileService->store($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy(DeleteCustomFileRequest $request) {
    try {
      $this->fcFileService->delete($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
