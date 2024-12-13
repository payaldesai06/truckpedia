<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\LoadDriverReport\LoadDriverReportCollection;
use App\Services\Reports\LoadDriverReportService;
use Illuminate\Http\JsonResponse;

class LoadDriverReportController extends Controller {
  protected $loadDriverReportService;

  public function __construct(LoadDriverReportService $loadDriverReportService) {
    $this->loadDriverReportService = $loadDriverReportService;
  }

  /**
   * Get Driver Report data or generate report.
   * @return JsonResponse
   */
  public function datatable(): JsonResponse {
    $loadDriverReport = $this->loadDriverReportService->getReportDatatable();

    if (request('to_download') == 1) {
      $data = $this->loadDriverReportService->driverReportExport($loadDriverReport);
      return $this->respondWithMessageAndPayload($data);
    } else {
      return $this->respondWithData(new LoadDriverReportCollection($loadDriverReport));
    }
  }
}
