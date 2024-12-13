<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\TripRevenueReport\TripRevenueReportCollection;
use App\Services\Reports\TripRevenueReportService;
use Illuminate\Http\JsonResponse;

class TripRevenueReportController extends Controller
{
    protected TripRevenueReportService $tripRevenueReportService;

    public function __construct(TripRevenueReportService $tripRevenueReportService)
    {
        $this->tripRevenueReportService = $tripRevenueReportService;
    }

    public function datatable(): JsonResponse
    {
        $tripRevenueReports = $this->tripRevenueReportService->getReportDatatable();

        if (request('to_download') == 1) {
            $data = $this->tripRevenueReportService->tripRevenueReportExport($tripRevenueReports['all']);

            return $this->respondWithMessageAndPayload($data);
        }

        return $this->respondWithData(
            new TripRevenueReportCollection($tripRevenueReports['paginate'], $tripRevenueReports['all'])
        );
    }
}
