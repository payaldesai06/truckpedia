<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\CustomerRevenueReport\CustomerRevenueReportCollection;
use App\Services\Reports\CustomerRevenueReportService;
use Illuminate\Http\JsonResponse;

class CustomerRevenueReportController extends Controller
{
    protected $customerRevenueReportService;

    public function __construct(CustomerRevenueReportService $customerRevenueReportService)
    {
        $this->customerRevenueReportService = $customerRevenueReportService;
    }

    public function datatable()
    {
        $customerRevenueReports = $this->customerRevenueReportService->getReportDatatable();
        if (request('to_download') == 1) {
            $data = $this->customerRevenueReportService->customerRevenueReportExport($customerRevenueReports);
            return $this->respondWithMessageAndPayload($data);
        } else {
            return $this->respondWithData(new CustomerRevenueReportCollection($customerRevenueReports));
        }
    }
}
