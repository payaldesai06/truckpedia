<?php

namespace App\Services;

use App\Models\Trip;
use App\Package\FindInSet\FindInSetRelationTrait;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class DriverPayService {
  use FindInSetRelationTrait;

  /**
   * @return LengthAwarePaginator
   * @throws Exception
   */
  public function datatable(): LengthAwarePaginator {
    $per_page = request('rows') ?? config('response.per_page');
    $companyId = getAuthAdminCompanyId();

    $data = Trip::with('driverOne.driverDetail', 'driverTwo.driverDetail', 'loads', 'loads.loadCharge')
      ->where('status', '=', config('constant.status.trip.payment_request'))
      ->where('company_id', '=', $companyId)
      ->when(request()->has('trip_start_date'), function ($query) {
        return $query->where('trip_start_date', 'like', '%' . request('trip_start_date') . '%');
      })
      ->when(request()->has('trip_end_date'), function ($query) {
        return $query->where('trip_end_date', 'like', '%' . request('trip_end_date') . '%');
      })
      /*->when(request()->has('trip_start_time'), function ($query) {
        return $query->where('trip_start_time', 'like', '%' . request('trip_start_time') . '%');
      })
      ->when(request()->has('trip_end_time'), function ($query) {
        return $query->where('trip_end_time', 'like', '%' . request('trip_end_time') . '%');
      })*/
      ->when(request()->has('status'), function ($query) {
        return $query->where('status', 'like', '%' . request('status') . '%');
      })
      ->when(request()->has('id'), function ($query) {
        return $query->where('id', 'like', '%' . request('id') . '%');
      })
      ->when(request()->has('total_miles'), function ($query) {
        return $query->where('total_miles', 'like', '%' . request('total_miles') . '%');
      })
      ->when(request()->has('total_hours'), function ($query) {
        return $query->where('total_hours', 'like', '%' . request('total_hours') . '%');
      })
      ->when(request()->has('payment_request_date'), function ($query) {
        return $query->where('payment_request_date', 'like', '%' . request('payment_request_date') . '%');
      })
      ->when(request()->has('trip_expenses_count'), function ($query) {
        return $query->where('trip_expenses_count', 'like', '%' . request('trip_expenses_count') . '%');
      })
      ->when(request()->has('reimbursement'), function ($query) {
        return $query->where('reimbursement', 'like', '%' . request('reimbursement') . '%');
      })
      ->when(request('driver_one_name'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('driverOne.driverDetail', function (Builder $query) use ($search) {
          $query->where('name', 'like', $search);
        });
      })
      ->when(request('driver_two_name'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('driverTwo.driverDetail', function (Builder $query) use ($search) {
          $query->where('name', 'like', $search);
        });
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          if (request('sortField') === 'driver_one_name') {
            return $query->orderBy(function ($query) {
              $query->selectRaw("name")
                ->from('driver_details')
                ->join('users', 'users.id', '=', 'driver_details.user_id')
                ->whereColumn('users.id', 'trips.driver_one_id');
            }, request('sortOrder'));
          } else if (request('sortField') === 'driver_two_name') {
            return $query->orderBy(function ($query) {
              $query->selectRaw("name")
                ->from('driver_details')
                ->join('users', 'users.id', '=', 'driver_details.user_id')
                ->whereColumn('users.id', 'trips.driver_two_id');
            }, request('sortOrder'));
          } else {
            return $query->orderBy(request('sortField'), request('sortOrder'));
          }
        },
        function ($query) {
          return $query->latest();
        }
      )
      ->paginate($per_page);

    $driverPayHelper = new DriverPayHelper();
    $totalPayment = 0;

    /* calculate total payment of driver for each trip */
    $data->getCollection()->transform(function ($trip) use ($driverPayHelper, $totalPayment) {
      $driverOne = $trip->driverOne->driverDetail ?? '';
      if (!empty($driverOne)) {
        /* calculate first driver total payment of current trip. */
        $totalPayment = $driverPayHelper->calculateDriverTripPayment($trip, $driverOne);
      }

      $driverTwo = $trip->driverTwo->driverDetail ?? '';
      if (!empty($driverTwo)) {
        /* calculate second driver total payment of current trip. */
        $totalPayment += $driverPayHelper->calculateDriverTripPayment($trip, $driverTwo);
        // Fix the bug that the amount value on driver pay table contains 
        // the reimbursement value twice.
        if ($trip->reimbursement) {
          $totalPayment -= $trip->reimbursement;
        }
      }

      $trip->total_payment = round($totalPayment, 2) ?? 0;
      return $trip;
    });

    return $data;
  }
}
