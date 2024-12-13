<?php

namespace App\Services\Dashboard;

use App\Models\Trip;
use App\Models\TripExpense;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class TripRevenueService
{
    private $tripStatuses;

    private $defaultMonthlyData;

    public function __construct()
    {
        $this->tripStatuses = collect(config('constant.status.trip'));
        $this->defaultMonthlyData = $this->getDefaultMonthlyData();
    }

    public function getRevenue(): Collection
    {
        $trips = Trip::query()
            ->with(['loads'])
            ->withCount('loads')
            ->where('status', '=', $this->tripStatuses->get('paid'))
            ->where('company_id', '=', Auth::user()->admin_company_detail_id)
            ->selectRaw('SUBSTRING(MONTHNAME(trip_end_date), 1, 3) as month_name')
            ->addSelect([
                'total_trip_expenses' => TripExpense::query()
                    ->selectRaw('ROUND(SUM(cost), 2)')
                    ->whereColumn('trip_expenses.trip_id', '=', 'trips.id')
                    ->groupBy('trip_expenses.trip_id')
                    ->limit(1)
            ])
            ->whereRaw('YEAR(trip_end_date) = ?', [
                request('year', Carbon::now()->year)
            ])
            ->orderByRaw('MONTH(trip_end_date) ASC')
            ->get();

        return collect([
            [
                'name' => 'Revenue',
                'data' => $this->defaultMonthlyData->merge($this->getTotalTripRevenue($trips))->values()
            ],
            [
                'name' => 'Expense',
                'data' => $this->defaultMonthlyData->merge($this->getTotalTripExpenses($trips))->values()
            ]
        ])->map(function ($item) {
            return (object)$item;
        });
    }

    private function getTotalTripRevenue(Collection $trips): Collection
    {
        return $trips
            ->mapToGroups(function ($trip) {
                return [$trip['month_name'] => $trip->loads->sum('total_amount')];
            })
            ->map(function ($trip) {
                return $trip->sum();
            });
    }

    private function getTotalTripExpenses(Collection $trips): Collection
    {
        return $trips
            ->mapToGroups(function ($trip) {
                return [$trip['month_name'] => $trip['total_trip_expenses']];
            })
            ->map(function ($trip) {
                return $trip->sum();
            });
    }

    private function getDefaultMonthlyData(): Collection
    {
        return collect([
            'Jan' => 0,
            'Feb' => 0,
            'Mar' => 0,
            'Apr' => 0,
            'May' => 0,
            'Jun' => 0,
            'Jul' => 0,
            'Aug' => 0,
            'Sep' => 0,
            'Oct' => 0,
            'Nov' => 0,
            'Dec' => 0,
        ]);
    }
}
