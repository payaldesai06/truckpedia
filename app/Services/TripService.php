<?php

namespace App\Services;

use App\Models\DriverDetail;
use App\Models\LoadDriver;
use App\Models\Trip;
use App\Models\TripExpense;
use App\Models\TripPayment;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mavinoo\Batch\BatchFacade as Batch;

class TripService {
  public function getAllTripInProgress() {
    $per_page = request('rows') ?? config('response.per_page');
    $driverId = Auth::id();

    $trips = Trip::with(['loads.loadShippers', 'loads.loadReceivers', 'loads.adminCompanyDetail', 'loads.rateConfirmations'])
      ->whereRaw("find_in_set('" . $driverId . "',driver_ids)")
      ->whereIn('status', config('constant.status.trip_in_progress'))
      ->orderBy('created_at', 'DESC')
      // ->get();
      ->paginate($per_page);
    return $trips;
  }

  public function getAllTripPaid() {
    $per_page = request('rows') ?? config('response.per_page');
    $driverId = Auth::id();

    $trips = Trip::with(
      [
        'loads.loadShippers' => function ($query) {
          $query->orderBy('shipping_date', 'asc');
        },
        'loads.loadReceivers' => function ($query) {
          $query->orderBy('delivery_date', 'desc');
        },
        'tripPayments' => function ($query) use ($driverId) {
          $query->where('driver_id', '=', $driverId);
        },
      ]
    )
      ->whereRaw("find_in_set('" . $driverId . "',driver_ids)")
      ->whereIn('status', config('constant.status.trip_paid'))
      ->orderBy('updated_at', 'DESC')
      // ->get();
      ->paginate($per_page);
    return $trips;
  }

  public function create() {
    if (request()->has('driver_id')) {
      $driverIds = Auth::id() . "," . request('driver_id');
    } else {
      $driverIds = Auth::id();
    }
    // $coDriver_id = collect(explode(",", $driverIds))->last();
    // return User::findOrFail($coDriver_id)->driverDetail->name;
    return Trip::create([
      'company_id' => Auth::user()->admin_company_detail_id,
      'trip_start_date' => request('trip_start_date'),
      'driver_ids' => $driverIds,
      'status' => config('constant.status.trip.in_progress'),
      'driver_one_id' => Auth::id(),
      'driver_two_id' => request('driver_id') ?? null,
    ]);
  }

  public function update() {
    $trip = $this->getTrip();
    if (request()->has('driver_id')) {
      $driverIds = Auth::id() . "," . request('driver_id');
    } else {
      $driverIds = $trip->driver_ids;
    }
    return tap($trip)->update([
      'trip_start_date' => request('trip_start_date'),
      'trip_end_date' => request('trip_end_date'),
      'driver_ids' => $driverIds,
      'driver_one_id' => Auth::id(),
      'driver_two_id' => request('driver_id') ?? null,
    ]);
  }

  public function paymentRequest() {
    return tap($this->getTrip(), function ($trip) {
      DB::transaction(function () use (&$trip) {
        $loadIds = collect(explode(',', request('load_ids')));
        $tripExpenses = collect($trip->tripExpenses);

        $trip->loads()->sync($loadIds);

        $data = request([
          'notes', 'reimbursement',
        ]);
        $data['status'] = config('constant.status.trip.payment_request');

        if (request()->has('number_of_stop')) {
          $data['number_of_stop'] = request('number_of_stop');
        }
        if (request()->has('total_miles')) {
          $data['total_miles'] = request('total_miles');
        }
        if (request()->has('detention')) {
          $data['detention'] = request('detention');
        }
        if (request()->has('layover')) {
          $data['layover'] = request('layover');
        }

        $data['total_hours'] = null;
        if (request()->has('total_hours') && request('total_hours') >= 0) {
          $data['total_hours'] = request('total_hours');
        }

        if (!empty(request('trip_start_time')) && !empty(request('trip_end_time'))) {
          $data['trip_start_time'] = request('trip_start_time');
          $data['trip_end_time'] = request('trip_end_time');
          if (!isset($data['total_hours'])) {
            $data['total_hours'] = Carbon::parse(request('trip_start_time'))->floatDiffInHours(Carbon::parse(request('trip_end_time')));
          }
        }

        $data['payment_request_date'] = Carbon::now()->format(config('constant.date_format'));
        $data['trip_expenses_count'] = $tripExpenses->where('reimbursed', 1)->sum('cost');

        $LoadDrivers = LoadDriver::whereIn('load_id', $loadIds)
          ->whereRaw("find_in_set('" . Auth::id() . "',driver_ids)")
          ->update(['trip_id' => $trip->id]);

        return $trip->update($data);
      });
    });
  }

  public function getTrip() {
    $tripId = request('trip');
    return Trip::findOrFail($tripId);
  }

  /**
   * Show trip details using trip id
   * @throws Exception
   */
  public function show() {
    $tripId = request('trip');
    $companyId = getAuthAdminCompanyId();

    return Trip::with([
      'tripExpenses' => function ($query) {
        return $query->where('reimbursed', '=', '1');
      },
      'driverOne',
      'driverTwo',
      'loads.loadImages',
    ])
      ->where('company_id', $companyId)
      ->findOrFail($tripId);
  }

  public function tripPayment() {
    return tap($this->getTrip(), function ($trip) {
      DB::transaction(function () use (&$trip) {

        //trip update
        $trip->update([
          'status' => config('constant.status.trip.paid'),
        ]);

        //trip expense update
        $tripExpenseValues = json_decode(collect(request('trip_expenses')), TRUE);
        Batch::update(new TripExpense, $tripExpenseValues, 'id');

        //trip Payment Insert
        $tripExpenses = collect(request('trip_payments'));
        $tripExpenses->each(
          function ($tripExpense) {
            $tripExpense = (object) $tripExpense;
            $driverDetail = DriverDetail::where('user_id', $tripExpense->driver_id)->first();
            $data = [
              "driver_id" => $tripExpense->driver_id,
              "trip_id" => $tripExpense->trip_id,
              "reimbursement" => $tripExpense->reimbursement,
              "total_payment" => $tripExpense->total_payment,
              "load_payment" => $tripExpense->load_payment,
              "stop_charge" => $tripExpense->stop_charge ?? 0,
              "detention_charge" => $tripExpense->detention_charge ?? 0,
              "layover_charge" => $tripExpense->layover_charge ?? 0,
              "driver_pay_types" => $tripExpense->driver_pay_types ?? 0,
              "per_mile_charges" => $driverDetail->per_mail_charges,
              "pay_per_stop_rate" => $driverDetail->pay_per_stop_rate,
              "pay_per_stop_start_after" => $driverDetail->pay_per_stop_start_after,
              "detention_rate" => $driverDetail->detention_rate,
              "detention_start_after" => $driverDetail->detention_start_after,
              "layover_rate" => $driverDetail->layover_rate,
              "layover_start_after" => $driverDetail->layover_start_after,
              "hourly_rate" => $driverDetail->hourly_rate,
              "load_pay_percentage" => $driverDetail->load_pay_percentage,
              "load_pay_percentage_of" => $driverDetail->load_pay_percentage_of,
              "notes" => request('notes'),
            ];
            TripPayment::create($data);
          }
        );
      });
    });
  }
}
