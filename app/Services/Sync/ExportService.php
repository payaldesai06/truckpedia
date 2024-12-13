<?php


namespace App\Services\Sync;

use Exception;
use App\Models\Load;
use App\Models\TripV2Sheet;
use Carbon\Carbon;

class ExportService {
  private $companyId;

  public function __construct() {
    if (request()->has('username') && !empty(request('username'))) {
      $emerySappAccountType =  str_replace("apiSync-", "", request('username'));
      $this->companyId = config('user_customization.api.sync.' . $emerySappAccountType . '.companyId');
    }
  }

  /**
   * Export driver pay.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function exportDriverPay() {
    $driverPays = [];
    //loads with given range
    $loads = Load::where('admin_company_detail_id', $this->companyId)
      ->select(
        'id',
        'load_unique_id',
        'refrence_id',
        'tag_id',
        'customer_id',
        'status',
        'cost_code',
        'bill_to_code'
      )
      ->with([
        'tag:id,business_name',
        'customer:id,company_name',
        'loadShippers:id,load_id,shipping_date',
        'loadReceivers:id,load_id,delivery_date',
        'loadDrivers:id,load_id,start_load_utc_datetime,end_load_utc_datetime',
        'loadDrivers.driverAsUsers:id,first_name,last_name',
        'loadDrivers.driverAsUsers.driverDetail:id,user_id,company_employee_id',
      ])
      ->whereHas('loadDrivers')
      ->where(function ($query) {
        $query->whereHas('loadShippers', function ($innerQuery) {
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
      })
      ->get();
    //trip V2 sheets with given range
    $tripV2Sheets = TripV2Sheet::where('company_id', $this->companyId)
      ->with([
        'user:id,first_name,last_name,admin_company_detail_id',
        'user.driverDetail:id,user_id,company_employee_id',
      ])
      ->where(function ($query) {
        $query->whereBetween(
          'start_date',
          [request('startDate'), request('endDate')]
        )
          ->orWhereBetween(
            'end_date',
            [request('startDate'), request('endDate')]
          );
      })
      ->get();

    //driver pays with loads/tripSheets
    foreach ($loads as $load) {
      foreach ($load->loadDrivers as $loadDriver) {
        foreach ($loadDriver->driverAsUsers as $driver) {
          $driverId = $driver->id;
          $driverPays[$driverId]['personalInfo'] = [
            'firstName' => $driver->first_name ?? '',
            'lastName' => $driver->last_name ?? '',
            'employeeId' => $driver->driverDetail->company_employee_id ?? null,
          ];
          $driverPays[$driverId]['loads'][] = [
            'loadNumber' => $load->load_unique_id ?? null,
            'loadReference' => $load->refrence_id ?? null,
            'loadTagName' => !empty($load->tag) ? $load->tag->business_name : null,
            'loadCustomerName' => !empty($load->customer) ?
              $load->customer->company_name : null,
            'loadCustomerJobCode' => $load->bill_to_code ?? null,
            'loadCostCode' => $load->cost_code ?? null,
            'loadStatus' => !empty($load->status) ?
              config('constant.status.loadStatusFrontEnd')[$load->status] : null,
            'driverStartLoadUtcDatetime' => $loadDriver->start_load_utc_datetime ?? null,
            'driverEndLoadUtcDatetime' => $loadDriver->end_load_utc_datetime ?? null,
          ];
        }
      }
    }

    foreach ($tripV2Sheets as $sheet) {
      $driverId = $sheet->user_id;
      $driverPays[$driverId]['personalInfo'] = [
        'firstName' => $sheet->user->first_name ?? '',
        'lastName' => $sheet->user->last_name ?? '',
        'employeeId' => $sheet->user->driverDetail->company_employee_id ?? '',
      ];
      $driverPays[$driverId]['tripSheets'][] = [
        'status' => !empty($sheet->status) ?
          config('constant.status.trip_sheets')[$sheet->status] : '',
        'startDate' => $sheet->start_date ?? null,
        'startTime' => !empty($sheet->start_time) ?
          Carbon::parse($sheet->start_time)->format(config('constant.time_format')) : null,
        'endDate' => $sheet->end_date ?? null,
        'endTime' => !empty($sheet->end_time) ?
          Carbon::parse($sheet->end_time)->format(config('constant.time_format')) : null,
        'totalHours' => $sheet->total_hours ?? null,
        'notes' => $sheet->notes ?? null,
      ];
    }

    return ['drivers' => array_values($driverPays)];
  }
}
