<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadImage\LoadBolImageRequest;
// use App\Http\Resources\DriverLoad\DriverLoadResource;
use App\Services\LoadImageService;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Log;

class LoadBolImageController extends Controller {
  private LoadImageService $loadImageService;

  public function __construct(LoadImageService $loadImageService) {
    $this->loadImageService = $loadImageService;
  }

  /**
   * Upload load bol document using load driver id
   * @return JsonResponse|mixed
   */
  public function __invoke(LoadBolImageRequest $request): JsonResponse {
    try {
      $loadDriver = $this->loadImageService->loadBol();
      return $this->respondOk();
      // return $this->respondWithData(new DriverLoadResource($loadDriver->loadDetail));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
