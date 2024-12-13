<?php

namespace App\Services;

use App\Models\Load;
use App\Models\Truck;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class LoadsMatchingService {

  public function getTruckSchedules($companyId) {
    $loads = Load::select('id', 'admin_company_detail_id', 'equipment_type')
      ->where('admin_company_detail_id', $companyId)
      ->with([
        'loadReceivers:id,load_id,city,state,delivery_date,latitude,longitude',
        'loadDrivers:id,load_id,from_leg,to_leg,truck_id',
        // When adding new fields to truck to select, please also modify the truckWithoutSchedules statement.
        'loadDrivers.truck:id,number,reload_date,reload_city,reload_state,' .
          'reload_city_latitude,reload_city_longitude,dh_origin,' .
          'dh_destination,matching_target_price,matching_max_weight',
        'loadDrivers.truck.reloadStates:id,truck_id,reload_state',
        'loadDrivers.driverAsUsers:id',
        'loadDrivers.driverAsUsers.driverDetail:user_id,name',
        'loadLegs:id,load_id,city,state,date,latitude,longitude',
      ])
      ->whereHas('loadDrivers', function ($query) {
        $query->whereNotNull('truck_id');
      })
      ->where(function ($query) {
        $query->whereHas('loadReceivers', function ($innerQuery) {
          return $innerQuery->whereBetween(
            'delivery_date',
            [request('startDate'), request('endDate')]
          );
        })->orWhereHas('loadLegs', function ($innerQuery) {
          return $innerQuery->whereBetween(
            'date',
            [request('startDate'), request('endDate')]
          );
        });
      })->get();

    $truckWithSchedules = $loads->map(function ($load) {
      return $load->loadDrivers->map(function ($loadDriver) use ($load) {
        $truck = $loadDriver->truck;
        if (empty($truck)) {
          return;
        }

        if ($loadDriver->to_leg) {
          // destination is leg
          $loadLeg = $load->loadLegs->first();
          $destinationCity = $loadLeg->city ?? '';
          $destinationState = $loadLeg->state ?? '';
          $destinationLatitude = $loadLeg->latitude ?? null;
          $destinationLongitude = $loadLeg->longitude ?? null;
          $reloadDate = $loadLeg->date ?? '';
        } else {
          // destination is receiver
          $loadReceiver = $load->loadReceivers->last();
          $destinationCity = $loadReceiver->city ?? '';
          $destinationState = $loadReceiver->state ?? '';
          $destinationLatitude = $loadReceiver->latitude ?? null;
          $destinationLongitude = $loadReceiver->longitude ?? null;
          $reloadDate = $loadReceiver->delivery_date ?? '';
        }

        $driverName = implode(', ', $loadDriver->driverAsUsers
          ->pluck('driverDetail')->pluck('name')->toArray());

        if ($truck->reload_date && $truck->reload_date > $reloadDate) {
          $reloadDate = $truck->reload_date;
        }

        return [
          'truck_id' => $truck->id ?? '',
          'truck_number' => $truck->number ?? '',
          'driver_name' => $driverName ?? '',
          'reload_city' => $truck->reload_city ?? '',
          'reload_state' => $truck->reload_state ?? '',
          'reload_date' => $reloadDate ?? '',
          'reload_city_latitude' => (float) $truck->reload_city_latitude ?? null,
          'reload_city_longitude' => (float) $truck->reload_city_longitude ?? null,
          'reload_states' => $truck->reloadStates ?? [],
          'dh_origin' => $truck->dh_origin,
          'dh_destination' => $truck->dh_destination,
          'matching_target_price' => $truck->matching_target_price,
          'matching_max_weight' => $truck->matching_max_weight,
          'truck_type' => !empty($load->equipment_type) ? config(
            'constant.load.equipment_type'
          )[$load->equipment_type] : '',
          'destination' => [
            'city' => $destinationCity,
            'state' => $destinationState,
            'latitude' => (float) $destinationLatitude,
            'longitude' => (float) $destinationLongitude,
          ],
        ];
      });
    })->flatten(1)->filter()->sortBy(function ($item) {
      return $item['reload_date'];
    }, SORT_REGULAR)->unique('truck_id')->values();

    return $truckWithSchedules;
  }

  private function getTruckById($id) {
    return Truck::where('id', $id)->first();
  }

  private function getTruckWithReloadStatesById($id) {
    return Truck::where('id', $id)->with('reloadStates')->first();
  }

  public function updateTruckReloadDestination($request) {
    $truckId = $request->truck_id;
    $truck = $this->getTruckWithReloadStatesById($truckId);
    $truck->reloadStates()->delete();

    if ($request->has('reload_states')) {
      $truck->update([
        'reload_city' => null,
        'reload_state' => null,
        'reload_city_latitude' => null,
        'reload_city_longitude' => null,
      ]);

      $newReloadStates = $request->reload_states;
      if (count($newReloadStates) > 0) {
        $modelArray = [];
        foreach ($newReloadStates as $state) {
          $modelArray[] = ['reload_state' => $state];
        }
        $truck->reloadStates()->createMany($modelArray);
      }
    } else {
      $truck->update([
        'reload_city' => $request->reload_city,
        'reload_state' => $request->reload_state,
        'reload_city_latitude' => $request->reload_city_latitude,
        'reload_city_longitude' => $request->reload_city_longitude,
      ]);
    }
  }

  public function updateTruckDeadheadOrigin($request) {
    $truck = $this->getTruckById($request->truck_id);
    $truck->update(['dh_origin' => $request->dh_origin]);
  }

  public function updateTruckDeadheadDestination($request) {
    $truck = $this->getTruckById($request->truck_id);
    $truck->update(['dh_destination' => $request->dh_destination]);
  }

  public function updateTruckTargetPrice($request) {
    $truck = $this->getTruckById($request->truck_id);
    $truck->update(['matching_target_price' => $request->matching_target_price]);
  }

  /**
   * Update the truck matching_max_weight field by truck id.
   * @param $request
   * @return void
   */
  public function updateTruckMaxWeight($request) {
    $truck = $this->getTruckById($request->truck_id);
    $truck->update(['matching_max_weight' => $request->matching_max_weight]);
  }

  /**
   * Update truck reload date.
   * @param $request
   * @return mixed
   */
  public function updateTruckReloadDate($request) {
    return Truck::where('id', $request->truck_id)->update([
      'reload_date' => $request->reload_date
    ]);
  }

  /**
   * Generate the public url for loads-matching
   * @return string
   */
  public function createPublicUrl(): string {
    return http_build_query(['company_id' => encrypt(Auth::user()->admin_company_detail_id)]);
  }

  /*
    $truckWithoutSchedules = Truck::select('id', 'number',
      'reload_city', 'reload_state', 'dh_origin', 'dh_destination',
      'matching_target_price', 'matching_max_weight')
      ->where('company_id', $companyId)
      ->whereNotIn('id', $truckWithSchedules->pluck('truck_id'))->get();
    $truckWithoutSchedules->each(
      function ($truck, $key) use ($truckWithSchedules) {
        $truckWithSchedules[] = [
          'truck_id' => $truck->id,
          'truck_number' => $truck->number,
          'driver_name' => '',
          'reload_city' => $truck->reload_city ?? '',
          'reload_state' => $truck->reload_state ?? '',
          'reload_states' => $truck->reloadStates ?? [],
          'dh_origin' => $truck->dh_origin,
          'dh_destination' => $truck->dh_destination,
          'matching_target_price' => $truck->matching_target_price,
          'matching_max_weight' => $truck->matching_max_weight,
          'truck_type' => $truck->type,
          'destination' => [
            'city' => '',
            'state' => '',
            'date' => '',
            'time' => '',
          ],
        ];
      });
  */
}
