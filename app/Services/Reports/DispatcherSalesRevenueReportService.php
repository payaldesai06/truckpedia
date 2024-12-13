<?php

namespace App\Services\Reports;

use App\Exports\DispatcherSalesRevenueReport;
use App\Models\Load;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class DispatcherSalesRevenueReportService {
  public function getReportDatatable() {
    $perPage = request('rows', config('response.per_page'));
    $totalIncome = $this->getTotalRevenueAmount();
    return Load::query()
      ->with([
        'customer',
        'loadReceivers' => function ($query) {
          return $query->orderByDesc('delivery_date');
        },
      ])
      // ->where('status', config('constant.status.load.invoice_paid'))
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->where('status', '!=', config('constant.status.load.canceled'))
      ->when(request()->has('dispatcherIds'), function ($query) {
        $query->whereIn('dispatcher_id', request('dispatcherIds'));
      })
      ->when(!request()->has('dispatcherIds'), function ($query) {
        $query->whereNotNull('dispatcher_id');
      })
      ->select(
        'loads.*',
        DB::raw('ROUND(SUM(total_amount), 2) AS total_revenue'),
        DB::raw('ROUND(SUM(total_miles), 2) AS load_total_miles'),
        DB::raw('ROUND(SUM(total_amount) / SUM(total_miles), 2) AS revenue_per_mile'),
        DB::raw('COUNT(*) AS number_of_loads'),
        DB::raw("ROUND((SUM(total_amount)/{$totalIncome}) * 100 , 2) AS percentage_of_revenue")
      )
      ->groupBy(['loads.customer_id'])
      ->when(request()->has(['startDate', 'endDate']), function ($query) {
        $query
          ->where(function ($query) {
            $query->select('delivery_date')
              ->from('load_receivers')
              ->whereColumn('load_id', 'loads.id')
              ->orderByDesc('delivery_date')
              ->limit(1);
          }, '>=', request('startDate'))
          ->where(function ($query) {
            $query->select('delivery_date')
              ->from('load_receivers')
              ->whereColumn('load_id', 'loads.id')
              ->orderByDesc('delivery_date')
              ->limit(1);
          }, '<=', request('endDate'));
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          $sortField = request('sortField');
          $sortOrder = request('sortOrder', 'asc');

          if ($sortField == 'customer.company_name') {
            return $query->orderBy(function ($query) {
              return $query->selectRaw('company_name')
                ->from('customers')
                ->whereColumn('customers.id', 'loads.customer_id')
                ->limit(1);
            }, $sortOrder);
          }

          return $query->orderBy($sortField, $sortOrder);
        },
        function ($query) {
          return $query->orderBy(function ($query) {
            return $query->selectRaw('company_name')
              ->from('customers')
              ->whereColumn('customers.id', 'loads.customer_id')
              ->limit(1);
          }, 'asc');
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

  private function getTotalRevenueAmount() {
    return Load::query()
      ->with([
        'customer',
        'loadReceivers' => function ($query) {
          return $query->orderByDesc('delivery_date');
        },
      ])
      // ->where('status', config('constant.status.load.invoice_paid'))
      ->where('status', '!=', config('constant.status.load.canceled'))
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->when(request()->has('dispatcherIds'), function ($query) {
        $query->whereIn('dispatcher_id', request('dispatcherIds'));
      })
      ->select(DB::raw('ROUND(SUM(total_amount), 2) AS total_revenue'))
      ->groupBy(['loads.customer_id'])
      ->when(request()->has(['startDate', 'endDate']), function ($query) {
        $query
          ->where(function ($query) {
            $query->select('delivery_date')
              ->from('load_receivers')
              ->whereColumn('load_id', 'loads.id')
              ->orderByDesc('delivery_date')
              ->limit(1);
          }, '>=', request('startDate'))
          ->where(function ($query) {
            $query->select('delivery_date')
              ->from('load_receivers')
              ->whereColumn('load_id', 'loads.id')
              ->orderByDesc('delivery_date')
              ->limit(1);
          }, '<=', request('endDate'));
      })
      ->get('total_revenue')
      ->sum('total_revenue');
  }

  public function dispatcherSalesRevenueReportExport($reports) {
    $companyId = Auth::user()->admin_company_detail_id;
    $path = config('constant.export_path') . "$companyId-Dispatcher-Sale-Revenue-List.xlsx";
    Excel::store(new DispatcherSalesRevenueReport($reports), $path, 's3');
    return [
      "download_url" => getExportFile("$companyId-Dispatcher-Sale-Revenue-List.xlsx"),
    ];
  }
}