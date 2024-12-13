<?php

namespace App\Services\Reports;

use App\Exports\TripRevenueReport;
use App\Models\Load;
use App\Models\LoadTrip;
use App\Models\Trip;
use App\Models\TripExpense;
use App\Models\TripPayment;
use App\Models\Truck;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class TripRevenueReportService
{
    public function getReportDatatable(): array
    {
        $perPage = request('rows') ?? config('response.per_page');

        $totalExpenses = $this->getTotalExpenses();
        $driverPay = $this->getDriverPay();
        $totalIncome = $this->getTotalIncome();
        $ratePerMile = $this->getRatePerMile();
        $costPerMile = $this->getCostPerMile();
        $profitPerMile = $this->getProfiltPerMile();
        $truckNumbers = $this->getTrucks();

        $trips = Trip::query()
            ->where('company_id', '=', Auth::user()->admin_company_detail_id)
            ->select([
                'trips.total_miles',
                'trips.id',
            ])
            ->addSelect([
                $totalIncome,
                $ratePerMile,
                'total_expenses' => $totalExpenses,
                $costPerMile,
                'driver_pay' => $driverPay,
                'profit_per_mile' => $profitPerMile,
                'truck_numbers' => $truckNumbers
            ])
            ->where('trips.status', '=', config('constant.status.trip.paid'))
            ->when(request()->has(['startDate', 'endDate']), function ($query) {
                $query->whereBetween('trips.trip_end_date', [request('startDate'), request('endDate')]);
            })
            ->when(
                request()->has(['sortField', 'sortOrder']),
                function ($query) {
                    return $query->orderBy(request('sortField'), request('sortOrder'));
                },
                function ($query) {
                    return $query->orderBy('trips.created_at', 'desc');
                }
            );

        return [
            'all' => $trips->get(),
            'paginate' => $trips->paginate($perPage),
        ];

//            ->when(
//                request()->has(['to_download']),
//                function ($query) use ($perPage) {
//                    if (request('to_download') == 1) {
//
//                        return $query->get();
//                    } else {
//                        return $query->paginate($perPage);
//                    }
//                },
//                function ($query) use ($perPage) {
//
//                    return $query->paginate($perPage);
//                }
//            );
    }

    private function getTrucks()
    {
        return Truck::query()
            ->selectRaw('GROUP_CONCAT(DISTINCT(trucks.number)) as truck_numbers')
            ->rightJoin('load_drivers', 'load_drivers.truck_id', '=', 'trucks.id')
            ->whereColumn('load_drivers.trip_id', '=', 'trips.id')
            ->limit(1);
    }

    public function getTotalExpenses()
    {
        return TripExpense::selectRaw("SUM(cost)")
            ->whereColumn('trip_id', 'trips.id')
            ->where('reimbursed', '0')
            ->limit(1);
    }

    public function getDriverPay()
    {
        return TripPayment::selectRaw("SUM(total_payment)")
            ->whereColumn('trip_id', 'trips.id')
            ->limit(1);
    }

    public function getTotalIncome()
    {
        // return DB::table('loads')
        //     ->selectRaw('sum(loads.total_amount) as amount')
        //     ->join('load_trip', 'load_trip.load_id', '=', 'loads.id')
        //     ->where('load_trip.trip_id', '=', '34')
        //     ->get();

        // return DB::raw("ROUND(SUM(loads.total_amount),2) as total_income");
        // return DB::raw("ROUND((select SUM(`loads`.`total_amount`) as `amount`
        // from
        //     `loads`
        //     inner join `load_trip` on `load_trip`.`load_id` = `loads`.`id`
        // where
        //     `load_trip`.`trip_id` = `trips`.`id`
        // ),2) as `total_income`");

        // return LoadTrip::select(
        //     // Load::selectRaw("SUM('loads.total_amount')")
        //     //     ->whereColumn('loads.id', 'load_trip.load_id')
        //     //     ->limit(1)
        //     DB::raw(' sum((
        //         SELECT
        //             sum(`loads`.`total_amount`)
        //         FROM
        //             `loads`
        //         where
        //             `loads`.`id` = `load_trip`.`load_id`

        //         LIMIT 1
        //     ))')
        // )
        //     ->whereColumn('trip_id', 'trips.id')
        //     ->groupBy('trip_id');

        return DB::raw("ROUND((SELECT
        sum((
            SELECT
                sum(`loads`.`total_amount`)
            FROM
                `loads`
            where
                `loads`.`id` = `load_trip`.`load_id`

            LIMIT 1
        )) as `test`
    FROM
        `load_trip`
    WHERE
        `load_trip`.`trip_id` = `trips`.`id`
    group BY `load_trip`.`trip_id`) ,2) as `total_income`");
    }

    public function getRatePerMile()
    {
        // return DB::raw("ROUND(SUM(loads.total_amount/trips.total_miles),2) as rate_per_mile");

        return DB::raw("ROUND((SELECT
            sum((
                SELECT
                    sum(`loads`.`total_amount`)
                FROM
                    `loads`
                where
                    `loads`.`id` = `load_trip`.`load_id`

                LIMIT 1
            )) as `test`
        FROM
            `load_trip`
        WHERE
            `load_trip`.`trip_id` = `trips`.`id`
        group BY `load_trip`.`trip_id`)/trips.total_miles,2) as rate_per_mile");
    }

    public function getCostPerMile()
    {
        return DB::raw("ROUND(
            (
                (
                    SELECT
                        sum(`trip_expenses`.`cost`) as `expense`
                    FROM
                        `trip_expenses`
                    WHERE
                        `trip_expenses`.`trip_id` = `trips`.`id`
                        and `trip_expenses`.`reimbursed` = '0'
                ) +(
                    SELECT
                        sum(`trip_payments`.`total_payment`) as `expense`
                    FROM
                        `trip_payments`
                    WHERE
                        `trip_payments`.`trip_id` = `trips`.`id`
                )
            ) / `trips`.`total_miles`,
            2
        ) as `cost_per_mile`");
    }

    public function getProfiltPerMile()
    {
        return DB::raw("ROUND((SELECT
        sum((
            SELECT
                sum(`loads`.`total_amount`)
            FROM
                `loads`
            where
                `loads`.`id` = `load_trip`.`load_id`

            LIMIT 1
        )) as `test`
    FROM
        `load_trip`
    WHERE
        `load_trip`.`trip_id` = `trips`.`id`
    group BY `load_trip`.`trip_id`) / trips.total_miles, 2) - ROUND(
            (
                (
                    SELECT
                        sum(`trip_expenses`.`cost`) as `expense`
                    FROM
                        `trip_expenses`
                    WHERE
                        `trip_expenses`.`trip_id` = `trips`.`id`
                        and `trip_expenses`.`reimbursed` = '0'
                ) +(
                    SELECT
                        sum(`trip_payments`.`total_payment`) as `expense`
                    FROM
                        `trip_payments`
                    WHERE
                        `trip_payments`.`trip_id` = `trips`.`id`
                )
            ) / `trips`.`total_miles`,
            2
        ) as `profit_per_mile`");
    }

    public function tripRevenueReportExport($tripRevenueReports)
    {
        $companyId = Auth::user()->admin_company_detail_id;
        $path = config('constant.export_path') . "$companyId-Trip-Revenue-List.xlsx";
        Excel::store(new TripRevenueReport($tripRevenueReports), $path, 's3');
        return [
            "download_url" => getExportFile("$companyId-Trip-Revenue-List.xlsx")
        ];
    }
}
