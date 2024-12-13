<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\EquipmentListReport\EquipmentListReportCollection;
use App\Services\Reports\EquipmentListReportService;
use Illuminate\Http\Request;

class EquipmentListReportController extends Controller
{
    protected $equipmentListReportService;

    public function __construct(EquipmentListReportService $equipmentListReportService)
    {
        $this->equipmentListReportService = $equipmentListReportService;
    }

    public function datatable()
    {
        $equipmentListReports = $this->equipmentListReportService->getReportDatatable();

        if (request('to_download') == 1) {
            $data = $this->equipmentListReportService->equipmentListReportExport($equipmentListReports);
            return $this->respondWithMessageAndPayload($data);
        } else {
            return $this->respondWithData(new EquipmentListReportCollection($equipmentListReports));
        }
    }
}
