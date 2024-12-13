<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\DriverPaymentReport\DriverPaymentReportCollection;
use App\Services\Reports\DriverPaymentReportService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DriverPaymentReportController extends Controller
{
    protected $driverPaymentReportService;

    public function __construct(DriverPaymentReportService $driverPaymentReportService)
    {
        $this->driverPaymentReportService = $driverPaymentReportService;
    }

    public function datatable()
    {
        $driverPaymentReports = $this->driverPaymentReportService->getReportDatatable();

        if (request('to_download') == 1) {
            $data = $this->driverPaymentReportService->driverPaymentReportExport($driverPaymentReports,\request('isBasicReport'));
            return $this->respondWithMessageAndPayload($data);
        } else {
            return $this->respondWithData(new DriverPaymentReportCollection($driverPaymentReports));
        }
    }
}
