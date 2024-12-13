<?php

namespace App\Services\Reports;

use App\Exports\DriverPaymentReport;
use App\Models\TripPayment;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class DriverPaymentReportService {
  /**
   * Get Report Datatable
   * @return Builder|mixed
   * @throws Exception
   */
  public function getReportDatatable() {
    $perPage = request('rows') ?? config('response.per_page');

    $adminCompanyId = getAuthAdminCompanyId();

    if (empty($adminCompanyId)) {
      throw new Exception(config('response.error'));
    }

    return TripPayment::with([
      'trip:id,total_hours,total_miles,trip_start_time,trip_end_time',
      'driver.driverDetail:id,user_id,name'
    ])
      ->whereHas('trip', function ($q) use ($adminCompanyId) {
        $q->where('company_id', $adminCompanyId);
      })
      ->when(request()->has(['startDate', 'endDate']), function ($query) {
        $query->whereBetween('trip_payments.created_at', [request('startDate'), request('endDate')]);
      })->when(request()->has(['driverId']), function ($query) {
        $query->whereHas('driver', function ($innerQuery) {
          return $innerQuery->where('id', '=', request('driverId'));
        });
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          if (request('sortField') === 'name') {
            return $query->orderBy(function ($query) {
              $query->selectRaw("name")
                ->from('driver_details')
                ->join('users', 'users.id', '=', 'driver_details.user_id')
                ->whereColumn('users.id', 'trip_payments.driver_id');
            }, request('sortOrder'));
          } else {
            return $query->orderBy(request('sortField'), request('sortOrder'));
          }
        },
        function ($query) {
          return $query->orderBy('trip_payments.created_at', 'desc');
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

  /**
   * Generate Excel sheet of driver pay datatable.
   * @param $driverPaymentReports
   * @return array
   * @throws Exception
   */
  public function driverPaymentReportExport($driverPaymentReports, $isBasicReport): array {
    $companyId = getAuthAdminCompanyId();
    $path = config('constant.export_path') . "$companyId-Driver-Payment.xlsx";
    Excel::store(new DriverPaymentReport($driverPaymentReports, $isBasicReport), $path, 's3');
    return [
      "download_url" => getExportFile("$companyId-Driver-Payment.xlsx")
    ];
  }
}
