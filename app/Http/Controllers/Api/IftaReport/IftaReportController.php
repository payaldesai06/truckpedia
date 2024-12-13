<?php

namespace App\Http\Controllers\Api\IftaReport;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\IftaReport\IftaReportRequest;
use App\Services\IftaReport\IftaReportService;
use Exception;
use Illuminate\Support\Facades\Log;

class IftaReportController extends Controller {

  protected $iftaReportService;

  public function __construct(IftaReportService $iftaReportService) {
    $this->iftaReportService = $iftaReportService;
  }
  public function getReport(IftaReportRequest $request) {
    try {
      $iftaReport = $this->iftaReportService->getReport($request);
      if (request('filter.toDownload') == 1) {
        return $this->respondWithMessageAndPayload(
          $this->iftaReportService->iftaReportExport($iftaReport)
        );
      }
      return $this->respondWithData($iftaReport);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}