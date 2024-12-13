<?php

namespace App\Services\Dashboard;

use App\Models\Load;
use Illuminate\Support\Facades\Auth;

class TripStatsService {
  private $tripStatuses;

  public function __construct() {
    $this->tripStatuses = collect(config('constant.status.trip'));
  }

  public function getDashboardStatistics() {
    $totalRatePerMile = 0;

    $loads = Load::select('id', 'total_miles')
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->with(['loadShippers:id,load_id,shipping_date',
        'trips:id',
        'trips.tripPayments:id,trip_id,total_payment',
        'loadCharge' => function ($query) {
          $query->select('id', 'load_id', 'hauling_fees');
        }])
      ->when(request()->has(['startDate', 'endDate']), function ($query) {
        $query->whereHas('loadShippers', function ($innerQuery) {
          return $innerQuery->whereBetween(
            'shipping_date',
            [request('startDate'), request('endDate')]
          );
        });
      })->get();

    $totalDriverPayment = $loads->pluck('trips')->flatten()->pluck('tripPayments')->flatten()->unique('id')->pluck('total_payment')->sum();

    $totalRevenue = $loads->sum('loadCharge.hauling_fees');
    $totalMiles = $loads->sum('total_miles');
    if ($totalMiles != 0) {
      $totalRatePerMile = $totalRevenue / $totalMiles;
    } else {
      $totalRatePerMile = 0;
    }

    return (object) [
      'total_loads' => $loads->count(),
      'total_revenue' => $this->roundAmount($totalRevenue),
      'total_driver_payment' => $this->roundAmount($totalDriverPayment),
      'total_rate_per_mile' => $this->roundAmount($totalRatePerMile),
    ];
  }

  private function roundAmount($amount) {
    return round($amount, 2);
  }
}