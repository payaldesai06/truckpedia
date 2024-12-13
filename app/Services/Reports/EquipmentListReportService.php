<?php

namespace App\Services\Reports;

use App\Exports\ExportEquipmentListReport;
use App\Models\Trailer;
use App\Models\Truck;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class EquipmentListReportService
{
    public function getReportDatatable()
    {
        $perPage = request('rows') ?? config('response.per_page');

        $trailers = Trailer::where('company_id', '=', Auth::user()->admin_company_detail_id);
        $trucks = Truck::where('company_id', '=', Auth::user()->admin_company_detail_id);
        return $trucks->unionAll($trailers)
            ->when(
                request()->has(['sortField', 'sortOrder']),
                function ($query) {
                    return $query->orderBy(request('sortField'), request('sortOrder'));
                }
            )
            // ->get();
            ->when(
                request()->has(['to_download']),
                function ($query) use ($perPage) {
                    if (request('to_download') == 1) {

                        return $query->get();
                    } else {
                        return $query->paginate($perPage);
                    }
                },
                function ($query) use ($perPage) {

                    return $query->paginate($perPage);
                }
            );
    }

    public function equipmentListReportExport($equipmentListReports)
    {
        $companyId = Auth::user()->admin_company_detail_id;
        $path = config('constant.export_path') . "$companyId-Equipment-List.xlsx";
        Excel::store(new ExportEquipmentListReport($equipmentListReports), $path, 's3');
        return [
            "download_url" => getExportFile("$companyId-Equipment-List.xlsx")
        ];
    }
}
