<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Report\DispatcherCommissionReportRequest;
use App\Http\Resources\Reports\DispatcherCommissionReport\DispatcherCommissionReportCollection;
use App\Services\Reports\DispatcherCommissionReportService;
use Illuminate\Http\Request;

class DispatcherCommissionReportController extends Controller {
  protected DispatcherCommissionReportService $dispatcherCommissionReportService;

  public function __construct(DispatcherCommissionReportService $dispatcherCommissionReportService) {
    $this->dispatcherCommissionReportService = $dispatcherCommissionReportService;
  }

  public function datatable(DispatcherCommissionReportRequest $request) {
    $reports = $this->dispatcherCommissionReportService->getReportDataTable();
    if (request('to_download') == 1) {
      $data = $this->dispatcherCommissionReportService->dispatcherCommissionReportExport($reports);
      return $this->respondWithMessageAndPayload($data);
    } else {
      return $this->respondWithData(new DispatcherCommissionReportCollection($reports));
    }
  }
}
