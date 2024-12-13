<?php

namespace App\Services\Reports;

use App\Exports\LoadDriverReport;
use App\Models\Load;
use App\Models\LoadDriver;
use Maatwebsite\Excel\Facades\Excel;

class LoadDriverReportService {
  public function getReportDatatable() {
    $perPage = request('rows', config('response.per_page'));
    $companyId = getAuthAdminCompanyId();

    return Load::where('admin_company_detail_id', $companyId)
      ->select('id', 'customer_id', 'admin_company_detail_id', 'refrence_id', 'load_unique_id', 'total_amount', 'total_miles')
      ->where('status', '!=', config('constant.status.load.canceled'))
      ->with([
        'loadShippers:id,load_id,shipping_date,freight_weight,freight_qty,order',
        'loadReceivers:id,load_id,delivery_date,order',
        'loadDrivers:id,load_id',
        'loadDrivers.driverAsUsers:id',
        'loadDrivers.driverAsUsers.driverDetail:user_id,name,driver_pay_types,load_pay_percentage_of,load_pay_percentage',
        'customer:id,company_name',
        'loadCharge'
      ])
      ->when(request()->has(['driverId']), function ($query) {
        $query->whereHas('loadDrivers.driverAsUsers', function ($innerQuery) {
          return $innerQuery->where('id', '=', request('driverId'));
        });
      })
      ->when(request('startDate') && request('endDate'), function ($query) {
        $query->where(function ($query2) {
          $query2->whereHas('loadShippers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'shipping_date',
              [request('startDate'), request('endDate')]
            );
          })->orWhereHas('loadReceivers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'delivery_date',
              [request('startDate'), request('endDate')]
            );
          });
        });
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          $sortField = request('sortField');
          $sortOrder = request('sortOrder', 'asc');

          if ($sortField == 'ship_date') {
            return $query->orderBy(function ($query) {
              return $query->select('shipping_date')
                ->from('load_shippers')
                ->whereColumn('loads.id', 'load_shippers.load_id')
                ->limit(1);
            }, $sortOrder);
          } else if ($sortField == 'delivery_date') {
            return $query->orderBy(function ($query) {
              return $query->select('delivery_date')
                ->from('load_receivers')
                ->whereColumn('loads.id', 'load_receivers.load_id')
                ->limit(1);
            }, $sortOrder);
          } else {
            return $query->orderBy(request('sortField'), request('sortOrder'));
          }
        }
      )
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

  function driverReportExport($loadDriverReport): array {
    $companyId = getAuthAdminCompanyId();
    $path = config('constant.export_path') . "$companyId-Load-Driver-Report.xlsx";
    Excel::store(new LoadDriverReport($loadDriverReport), $path, 's3');
    return [
      "download_url" => getExportFile("$companyId-Load-Driver-Report.xlsx")
    ];
  }
}
