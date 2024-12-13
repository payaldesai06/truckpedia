<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\DispatcherSalesReport\DispatcherSalesRevenueReportCollection;
use App\Services\Reports\DispatcherSalesRevenueReportService;
use Illuminate\Http\Request;

class DispatcherSalesRevenueReportController extends Controller
{
    protected DispatcherSalesRevenueReportService $dispatcherSalesRevenueReportService;

    public function __construct(DispatcherSalesRevenueReportService $dispatcherSalesRevenueReportService)
    {
        $this->dispatcherSalesRevenueReportService = $dispatcherSalesRevenueReportService;
    }

    public function datatable()
    {
        $reports = $this->dispatcherSalesRevenueReportService->getReportDatatable();
        if (request('to_download') == 1) {
            $data = $this->dispatcherSalesRevenueReportService->dispatcherSalesRevenueReportExport($reports);
            return $this->respondWithMessageAndPayload($data);
        } else {
            return $this->respondWithData(new DispatcherSalesRevenueReportCollection($reports));
        }
    }
}
