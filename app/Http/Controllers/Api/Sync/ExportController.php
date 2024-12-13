<?php

namespace App\Http\Controllers\Api\Sync;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Sync\ExportDriverPayRequest;
use App\Services\Sync\ExportService;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Log;

class ExportController extends Controller {
  protected $exportService;

  public function __construct(ExportService $exportService) {
    $this->exportService = $exportService;
  }

  /**
   * Export driver pay.
   * @param ExportDriverPayRequest $request
   * @return JsonResponse|mixed
   */
  public function exportDriverPay(ExportDriverPayRequest $request) {
    try {
      return $this->respondWithData($this->exportService->exportDriverPay());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
