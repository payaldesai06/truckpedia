<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadImage\LoadOtherImageRequest;
use App\Services\LoadImageService;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Log;

class LoadOtherImageController extends Controller {
  private LoadImageService $loadImageService;

  public function __construct(LoadImageService $loadImageService) {
    $this->loadImageService = $loadImageService;
  }

  /**
   * Upload load bol document using load driver id
   * @return JsonResponse|mixed
   */
  public function __invoke(LoadOtherImageRequest $request): JsonResponse {
    try {
      $this->loadImageService->loadOther();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
