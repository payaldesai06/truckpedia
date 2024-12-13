<?php

namespace App\Services\Reports;

use App\Exports\DispatcherCommissionReport;
use App\Models\Load;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class DispatcherCommissionReportService {
  public function getReportDataTable() {
    $perPage = request('rows', config('response.per_page'));

    $loads = Load::with([
      'customer:id,company_name',
      'loadCharge',
      'thirdPartyCarrierCharge',
    ])
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->where('status', '!=', config('constant.status.load.canceled'))
      ->when(request()->has('dispatcherIds'), function ($query) {
        $query->whereIn('dispatcher_id', request('dispatcherIds'));
      })
      ->when(!request()->has('dispatcherIds'), function ($query) {
        $query->whereNotNull('dispatcher_id');
      })
      ->when(request()->has(['startDate', 'endDate']), function ($query) {
        $query->whereBetween('i_end_date', [request('startDate'), request('endDate')]);
      })
      ->when(request()->has('filters.commissionStatus'), function ($query) {
        $status = array_search(request('filters.commissionStatus'), config('constant.load.dispatcherPaid'));
        if (request('filters.commissionStatus') == 'pending') {
          $query->where(function ($query) use ($status) {
            $query->whereNull('dispatcher_paid')
              ->orWhere('dispatcher_paid', $status);
          });
        } else {
          $query->where('dispatcher_paid', $status);
        }
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          $sortField = request('sortField');
          $sortOrder = request('sortOrder', 'asc');

          if ($sortField == 'customer') {
            return $query->orderBy(function ($query) {
              return $query->selectRaw('company_name')
                ->from('customers')
                ->whereColumn('customers.id', 'loads.customer_id')
                ->limit(1);
            }, $sortOrder);
          } else if ($sortField == 'loadUniqueId') {
            $sortField = 'load_unique_id';
          } else if ($sortField == 'shipDate') {
            $sortField = 'i_start_date';
          } else if ($sortField == 'deliveryDate') {
            $sortField = 'i_end_date';
          }
          return $query->orderBy($sortField, $sortOrder);
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

    $loadAccessorialFeeIds = [];
    $loadAccessorialDeductionIds = [];

    foreach ($loads as $load) {
      $loadAccessorialFees = $load->loadCharge && $load->loadCharge->accessorial_fee ?
        json_decode($load->loadCharge->accessorial_fee, true) : [];
      $thirdPartyAccessorialFees = $load->thirdPartyCarrierCharge && $load->thirdPartyCarrierCharge->accessorial_fee ?
        json_decode($load->thirdPartyCarrierCharge->accessorial_fee, true) : [];

      $loadAccessorialDeductions = $load->loadCharge && $load->loadCharge->accessorial_deduction ?
        json_decode($load->loadCharge->accessorial_deduction, true) : [];
      $thirdPartyAccessorialDeductions = $load->thirdPartyCarrierCharge && $load->thirdPartyCarrierCharge->accessorial_deduction ?
        json_decode($load->thirdPartyCarrierCharge->accessorial_deduction, true) : [];

      $load['_internal'] = [
        '_fees' => $loadAccessorialFees,
        '_3rdPartyFees' => $thirdPartyAccessorialFees,
        '_deductions' => $loadAccessorialDeductions,
        '_3rdPartyDeductions' => $thirdPartyAccessorialDeductions,
        '_feesAmount' => array_sum(array_column($loadAccessorialFees, 'rate')),
        '_3rdPartyFeesAmount' => array_sum(array_column($thirdPartyAccessorialFees, 'rate')),
        '_deductionsAmount' => array_sum(array_column($loadAccessorialDeductions, 'rate')),
        '_3rdPartyDeductionsAmount' => array_sum(array_column($thirdPartyAccessorialDeductions, 'rate')),
      ];

      $this->appendNewFeeIds($loadAccessorialFeeIds, $loadAccessorialFees);
      $this->appendNewFeeIds($loadAccessorialFeeIds, $thirdPartyAccessorialFees);
      $this->appendNewFeeIds($loadAccessorialDeductionIds, $loadAccessorialDeductions);
      $this->appendNewFeeIds($loadAccessorialDeductionIds, $thirdPartyAccessorialDeductions);
    }

    $nonCommissionableFees = getAccessorialsByIds('fee', $loadAccessorialFeeIds, false);
    $nonCommissionableDeductions = getAccessorialsByIds('deduction', $loadAccessorialDeductionIds, false);

    foreach ($loads as $load) {
      $nonCommissionableArr = [
        '_nonCommissionableFees' => array_filter($load['_internal']['_fees'], fn ($fee) => $nonCommissionableFees->has($fee['id'])),
        '_nonCommissionable3rdPartyFees' => array_filter($load['_internal']['_3rdPartyFees'], fn ($fee) => $nonCommissionableFees->has($fee['id'])),
        '_nonCommissionableDeductions' => array_filter($load['_internal']['_deductions'], fn ($fee) => $nonCommissionableDeductions->has($fee['id'])),
        '_nonCommissionable3rdPartyDeductions' => array_filter($load['_internal']['_3rdPartyDeductions'], fn ($fee) => $nonCommissionableDeductions->has($fee['id'])),
      ];
      $nonCommissionableArr['_nonCommissionableFeesAmount'] = array_sum(array_column($nonCommissionableArr['_nonCommissionableFees'], 'rate'));
      $nonCommissionableArr['_nonCommissionable3rdPartyFeesAmount'] = array_sum(array_column($nonCommissionableArr['_nonCommissionable3rdPartyFees'], 'rate'));
      $nonCommissionableArr['_nonCommissionableDeductionsAmount'] = array_sum(array_column($nonCommissionableArr['_nonCommissionableDeductions'], 'rate'));
      $nonCommissionableArr['_nonCommissionable3rdPartyDeductionsAmount'] = array_sum(array_column($nonCommissionableArr['_nonCommissionable3rdPartyDeductions'], 'rate'));

      $load['_internal'] = array_merge($load['_internal'], $nonCommissionableArr);
    }

    return $loads;
  }

  private function appendNewFeeIds(&$ids, $fees) {
    if (!empty($fees)) {
      foreach ($fees as $fee) {
        if (!in_array($fee['id'], $ids)) {
          $ids[] = $fee['id'];
        }
      }
    }
  }

  public function dispatcherCommissionReportExport($reports) {
    $companyId = Auth::user()->admin_company_detail_id;
    $path = config('constant.export_path') . "$companyId-Dispatcher-Commission-List.xlsx";
    Excel::store(new DispatcherCommissionReport($reports), $path, 's3');
    return [
      "download_url" => getExportFile("$companyId-Dispatcher-Commission-List.xlsx"),
    ];
  }
}
