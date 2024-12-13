<?php

namespace App\Http\Controllers\Api\Sync;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Sync\ImportAssetRequest;
use App\Services\Sync\ImportService;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Log;

class ImportController extends Controller {
  protected $importService;

  public function __construct(ImportService $importService) {
    $this->importService = $importService;
  }

  /**
   * import assets.
   * @param ImportAssetRequest $request
   * @return JsonResponse|mixed
   */
  public function importAssets(ImportAssetRequest $request) {
    try {
      $this->importService->importAssets($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
