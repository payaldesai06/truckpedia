<?php

namespace App\Services\Helpers;

use App\Models\Load;
use App\Models\Truck;
use App\Models\User;
use Carbon\Carbon;

class CompanyStatisticsHelper {
  /**
   * Count a company active and inactive drivers by company id.
   * @param $companyId
   * @return array
   */
  public function countOneCompanyDrivers($companyId) {
    $drivers = User::select('id', 'status')
      ->where('role', config('constant.roles.driver'))
      ->where('admin_company_detail_id', $companyId)
      ->get();

    $totalActiveDrivers = $drivers->where('status', config('constant.status.user.active'))->count();
    $totalInactiveDrivers = $drivers->where('status', config('constant.status.user.inactive'))->count();

    return [
      'active' => $totalActiveDrivers,
      'inactive' => $totalInactiveDrivers
    ];
  }

  /**
   * Count a company active and inactive trucks by company id.
   * @param $companyId
   * @return array
   */
  public function countOneCompanyTrucks($companyId) {
    $trucks = Truck::select('id', 'status')
      ->where('company_id', $companyId)
      ->get();

    $totalActiveTrucks = $trucks->where('status', config('constant.status.truck.active'))->count();
    $totalInactiveTrucks = $trucks->where('status', config('constant.status.truck.inactive'))->count();

    return [
      'active' => $totalActiveTrucks,
      'inactive' => $totalInactiveTrucks
    ];
  }

  private function countOneCompanyActiveDriversInPeriodHelper($loads) {
    return $loads->pluck('loadDrivers')->flatten()
      ->pluck('loadDriverUsers')->flatten()->pluck('user_id')
      ->unique()->filter()->count();
  }

  private function countOneCompanyActiveTrucksInPeriodHelper($loads) {
    return $loads->pluck('loadDrivers')->flatten()
      ->pluck('truck_id')->unique()->filter()->count();
  }

  /**
   * Count of a company's all active drivers and trucks in period.
   * @param $companyId
   * @param $startDate
   * @param $endDate
   * @return mixed
   */
  public function countOneCompanyActiveDriversAndTrucksInPeriod($companyId, $startDate, $endDate) {
    return $this->countOneCompanyActiveLoadsDriversTrucksInPeriod(
      $companyId,
      $startDate,
      $endDate
    );
  }

  public function countOneCompanyActiveLoadsDriversTrucksInPeriod($companyId, $startDate, $endDate) {
    $loads = $this->getLoadsInPeriod($companyId, $startDate, $endDate);
    $activeDriverCount =
      $this->countOneCompanyActiveDriversInPeriodHelper($loads);
    $activeTruckCount =
      $this->countOneCompanyActiveTrucksInPeriodHelper($loads);
    return [
      'loads' => $loads->count(),
      'drivers' => $activeDriverCount,
      'trucks' => $activeTruckCount
    ];
  }

  /**
   * Count of a company's all active drivers in period.
   * @param $companyId
   * @param $startDate
   * @param $endDate
   * @return mixed
   */
  public function countOneCompanyActiveDriversInPeriod($companyId, $startDate, $endDate) {
    $loads = $this->getLoadsInPeriod($companyId, $startDate, $endDate);
    return $this->countOneCompanyActiveDriversInPeriodHelper($loads);
  }

  /**
   * Count of a company's all active trucks in period.
   * @param $companyId
   * @param $startDate
   * @param $endDate
   * @return mixed
   */
  public function countOneCompanyActiveTrucksInPeriod($companyId, $startDate, $endDate) {
    $loads = $this->getLoadsInPeriod($companyId, $startDate, $endDate);
    return $this->countOneCompanyActiveTrucksInPeriodHelper($loads);
  }

  /**
   * Count of a company's all loads in period.
   * @param $companyId
   * @param $startDate
   * @param $endDate
   * @return mixed
   */
  public function countOneCompanyLoadsInPeriod($companyId, $startDate, $endDate) {
    return $this->getLoadsInPeriod($companyId, $startDate, $endDate)->count();
  }

  /**
   * Get all loads data in provided date period.
   * @param $companyId
   * @param $startDate
   * @param $endDate
   * @return mixed
   */
  private function getLoadsInPeriod($companyId, $startDate, $endDate) {
    $startDate = Carbon::parse($startDate)->startOfDay()->toDateTimeString();
    $endDate = Carbon::parse($endDate)->endOfDay()->toDateTimeString();
    return Load::select('id', 'admin_company_detail_id')
      ->with([
        'loadDrivers:id,load_id,truck_id',
        'loadDrivers.loadDriverUsers:load_driver_id,user_id',
      ])
      ->where('admin_company_detail_id', $companyId)
      ->whereBetween('created_at', [$startDate, $endDate])
      ->get();
  }
}
