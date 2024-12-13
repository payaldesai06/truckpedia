<?php

namespace App\Services\Truckpedia;

use App\Models\Load;
use App\Services\ExternalTrackingService;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TruckTrackingService {

  /**
   * Track carrier truck on map
   * @param $request
   * @return mixed
   */
  public function trackCarrierTrucks($request) {
    return DB::transaction(function () use ($request) {
      $ret = [];
      $loadIds = [];
      if (!empty($request->loads)) {
        $loadIds = array_column($request->loads, 'loadId') ?? [];
      }
      $loads = Load::select(
        'id',
        'synced_load_id',
        'refrence_id',
        'load_unique_id',
      )
        ->where('admin_company_detail_id', getAuthAdminCompanyId())
        ->whereNotNull('synced_load_id')
        ->whereIn('status', [
          config('constant.status.load.open'),
          config('constant.status.load.assign'),
          config('constant.status.load.in_transit')
        ])
        ->when($loadIds, function ($query) use ($loadIds) {
          return $query->whereIn('id', $loadIds);
        })
        ->get();
      $syncedLoadIds =  $loads->pluck('synced_load_id')->toArray() ?? [];

      $loadsByCompany = Load::select(
        'id',
        'admin_company_detail_id'
      )
        ->whereIn('id', $syncedLoadIds)
        ->with([
          'loadDrivers' => function ($q) {
            $q->select('id', 'load_id', 'truck_id', 'status')
              ->whereNotIn('status', [
                config('constant.status.driver_completed_load.end_load'),
                config('constant.status.driver_completed_load.handed_over'),
              ])
              ->with([
                'driverAsUsers:id',
                'driverAsUsers.driverDetail:user_id,latitude,longitude,lat_lng_update_time'
              ])
              ->whereNotNull('truck_id')
              ->orderBy('id');
          }
        ])
        ->get()->groupBy('admin_company_detail_id');

      foreach ($loadsByCompany as $companyId => $carrierLoads) {
        $truckIds = $carrierLoads->flatMap(function ($load) {
          return $load->loadDrivers->pluck('truck_id');
        })->unique()->toArray();
        $locations = null;
        try {
          $locations = (new ExternalTrackingService())
            ->getTrucksLocation($companyId, $truckIds);
        } catch (Exception $exception) {
          Log::error($exception);
        }

        foreach ($carrierLoads as $carrierLoad) {
          // Note, without this $location = null; line, if index i does not have truck
          // but i-1 does, i will show i-1's location. So weird.
          $location = null;
          if ($carrierLoad->loadDrivers->isNotEmpty()) {
            $truckId = $carrierLoad->loadDrivers->first()->truck_id ?? null;
            if (!empty($truckId) && !empty($locations)) {
              $location = [
                'lat' => $locations[$truckId]['latitude'] ?? null,
                'lng' => $locations[$truckId]['longitude'] ?? null,
                'formattedAddress' => $locations[$truckId]['formattedLocation'] ?? null,
                'latLngSource' => config('constant.latLngSource.externalApi'),
              ];
            }

            if (
              is_null($location) ||
              (!empty($location) && is_null($location['lat'])) ||
              (!empty($location) && is_null($location['lng']))
            ) {
              foreach ($carrierLoad->loadDrivers as $loadDriver) {
                // TODO: we will need to figure out which driver's location to return later.
                $driverUser = $loadDriver->driverAsUsers->pluck('driverDetail')
                  ->first(function ($driverDetail) {
                    return !is_null($driverDetail['latitude']) &&
                      !is_null($driverDetail['longitude']);
                  });

                if (!empty($driverUser)) {
                  $location = [
                    'lat' => $driverUser['latitude'],
                    'lng' => $driverUser['longitude'],
                    'formattedAddress' => '',
                    'latLngSource' => config('constant.latLngSource.driverMobileApp'),
                    'driverMobileAppLatLngUpdateUtcTime' => $driverUser['lat_lng_update_time'] ?? '',
                  ];
                  break; // Exit the loop if a valid location is found
                }
              }
            }
          }

          $shipperBrokerLoad = $loads->firstWhere('synced_load_id', $carrierLoad->id);
          $ret[] = [
            'loadId' => $shipperBrokerLoad->id,
            'loadNumber' => $shipperBrokerLoad->load_unique_id,
            'loadReference' => $shipperBrokerLoad->refrence_id,
            'location' => $location ?? null
          ];
        }
      }
      return [
        'loads' => $ret
      ];
    });
  }
}
