<?php

namespace App\Services\KeepTruckin;

use App\Models\KeepTruckinTrailerId;
use App\Models\KeepTruckinTruckId;
use App\Models\Trailer;
use App\Models\Truck;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Exception\GuzzleException;

class KeepTruckinService extends KeepTruckinAuthService {
  public function __construct($admin_company_detail_id = '') {
    parent::__construct($admin_company_detail_id);
  }

  /**
   * Get truck vehicle location from keepTruckin.
   * @param array $loadTruckIds
   * @return array
   * @throws GuzzleException
   */
  public function getVehiclesLocation(array $loadTruckIds = []): array {
    if (empty($loadTruckIds)) {
      return [];
    }

    $pendingKeepTruckinIds = [];
    $knownKeepTruckinIds = [];
    $keepTruckinIdToTruckId = [];
    $result = [];

    foreach ($loadTruckIds as $loadTruckId) {
      $result[$loadTruckId] = [
        "latitude" => null,
        "longitude" => null,
        "formattedLocation" => null,
        "error" => null,
      ];
    }

    /* Get known keepTruckin ids for trucks. */
    $keepTruckinTruckIds = KeepTruckinTruckId::select('truck_id', 'keep_truckin_id')
      ->whereIn('truck_id', $loadTruckIds)->get();
    foreach ($keepTruckinTruckIds as $keepTruckinTruckId) {
      $knownKeepTruckinIds[] = $keepTruckinTruckId->keep_truckin_id;
      $keepTruckinIdToTruckId[$keepTruckinTruckId->keep_truckin_id] = $keepTruckinTruckId->truck_id;
    }

    /* For trucks that we do not have KeepTruckin ids yet. */
    if (count($loadTruckIds) > count($keepTruckinTruckIds)) {
      $truckIdsWithNoKeepTruckinIdYet = array_diff(
        $loadTruckIds,
        $keepTruckinTruckIds->pluck('truck_id')->flatten()->toArray()
      );

      $trucks = Truck::select('id', 'number')
        ->whereIn('id', $truckIdsWithNoKeepTruckinIdYet)->get();
      foreach ($trucks as $truck) {
        if ($truck->number) {
          $pendingKeepTruckinIds[$truck->id] = $truck->number;
        } else {
          $result[$truck->id]["error"] = config('response.number.no_number');
        }
      }

      if (count($pendingKeepTruckinIds) > 0) {
        $keepTruckinVehicleDetails = collect(
          $this->getTruckNumberFromVehicleListKeepTruckinApi()->vehicles
        );

        foreach ($pendingKeepTruckinIds as $truckId => $number) {
          $vehicleDetails = $keepTruckinVehicleDetails->first(function ($item) use ($number) {
            return $item->vehicle->number == $number;
          })->vehicle ?? '';

          if (empty($vehicleDetails)) {
            $result[$truckId]["error"] = config('response.number.keeptruckin_no_match');
          } else {
            $keepTruckinId = $vehicleDetails->id;
            $knownKeepTruckinIds[] = $keepTruckinId;
            $keepTruckinIdToTruckId[$keepTruckinId] = $truckId;
            KeepTruckinTruckId::create(['truck_id' => $truckId, 'keep_truckin_id' => $keepTruckinId]);
          }
        }
      }
    }

    if (count($knownKeepTruckinIds) > 0) {
      $knownKeepTruckinIds = 'vehicle_ids[]=' .
        implode('&vehicle_ids[]=', $knownKeepTruckinIds) .
        '&per_page=100&page_no=' . 1;
      $vehicleLocation = $this->getTruckLocationFromKeepTruckinApi($knownKeepTruckinIds) ?? '';

      if ($vehicleLocation) {
        foreach ($vehicleLocation->vehicles as $item) {
          $result[$keepTruckinIdToTruckId[$item->vehicle->id]]["latitude"] = $item
            ->vehicle->current_location->lat ?? null;
          $result[$keepTruckinIdToTruckId[$item->vehicle->id]]["longitude"] = $item
            ->vehicle->current_location->lon ?? null;
          $result[$keepTruckinIdToTruckId[$item->vehicle->id]]["formattedLocation"] = $item
            ->vehicle->current_location->description ?? null;
        }
      }
    }

    return $result;
  }

  /**
   * @return mixed|string
   * @throws GuzzleException
   * Get the all vehicle Details from KeepTruckin
   */
  private function getTruckNumberFromVehicleListKeepTruckinApi() {
    // max is 100
    $requestUrl = $this->baseUrl . config('constant.keepTruckin_key.fleet.vehicles.list')
      . '?' . 'per_page=100&page_no=1';
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken());
  }

  /**
   * @param $queryParams
   * @return mixed|string
   * @throws GuzzleException
   * Get the GPS location of vehicles from KeepTruckin
   */
  private function getTruckLocationFromKeepTruckinApi($queryParams) {
    $requestUrl = $this->baseUrl . config('constant.keepTruckin_key.fleet.vehicles.location')
      . '?' . $queryParams;
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken(), $queryParams);
  }

  /**
   * Syncs trucks from KeepTruckIn(gomotive)) to our database.
   * @return void
   * @throws Exception
   */
  public function syncTrucks() {
    $keepTruckinTrucks = $this->getTrucks();
    if (!empty($keepTruckinTrucks)) {
      DB::transaction(function () use ($keepTruckinTrucks) {
        $this->saveKeepTruckinTrucks($keepTruckinTrucks, getAuthAdminCompanyId(), auth()->id());
      });
    }
  }

  /**
   * Get Truck/Vehicle List
   * @return mixed|string
   * @throws GuzzleException
   */
  public function getTrucks() {
    $requestUrl = $this->baseUrl . config('constant.keepTruckin_key.fleet.vehicles.list');
    do {
      // $token = $this->getApiKey();
      $token = $this->getAccessToken();
      $pageNo = 1;
      $perPage = 100;
      $data = [];
      $url = "{$requestUrl}?per_page={$perPage}&page_no={$pageNo}";
      // $resp = $this->getHttpCallByXApiOrAuthToken('GET', $url, $token);
      $resp = $this->getHttpCall('GET', $url, $token);
      if (!empty($resp->vehicles)) {
        $data[] = array_column($resp->vehicles, 'vehicle');
      }
      $pageNo = $resp->pagination->page_no;
      $totalPage = ceil($resp->pagination->total / $resp->pagination->per_page);
      $pageNo++;
    } while ($totalPage > $resp->pagination->page_no);
    return array_merge(...$data);
  }

  /**
   * Syncs trailers from KeepTruckin(gomotive) to our database.
   * @param $keepTruckinTrailers
   * @param $companyId
   * @param $userId
   * @return void
   */
  public function saveKeepTruckinTrucks($keepTruckinTrucks, $companyId, $userId) {
    $companyTrucks = Truck::select(['id', 'number', 'status', 'company_id'])
      ->where('company_id', $companyId)
      ->get();

    foreach ($keepTruckinTrucks as $keepTruckinTruck) {
      $existingTrucks = $companyTrucks->filter(function($truck) use ($keepTruckinTruck) {
        return hasEqualCaseInsensitiveStrings($truck->number, $keepTruckinTruck->number);
      });

      $commonData = [
        'truck_vin' => $keepTruckinTruck->vin ?? null,
        'year' => $keepTruckinTruck->year ?? null,
        'model' => $keepTruckinTruck->model ?? null,
        'make' => $keepTruckinTruck->make ?? null,
        'licence_plate' => $keepTruckinTruck->license_plate_number ?? null,
      ];

      if ($existingTrucks->count() == 0) {
        $truck = Truck::create(array_merge([
          'number' => $keepTruckinTruck->number,
          'company_id' => $companyId,
          'user_id' => $userId,
          'status' => 'active'
        ], $commonData));
      } elseif ($existingTrucks->count() == 1) {
        $truck = $existingTrucks->first();
        $truck->update($commonData);
      } elseif ($existingTrucks->count() > 1) {
        $truck = $existingTrucks->where('status', 'active')->first();
        if (!$truck) {
          $truck = $existingTrucks->first();
        }
        $truck->update($commonData);
      }

      if (optional($truck)->id) {
        KeepTruckinTruckId::updateOrCreate(
          ['truck_id' => $truck->id],
          ['keep_truckin_id' => $keepTruckinTruck->id]
        );
      }
    }
  }

  /**
   * Syncs trailers from KeepTruckin(gomotive) to our database.
   * @return void
   * @throws Exception
   */
  public function syncTrailers() {
    $keepTruckinTrailers = $this->getTrailers();
    if (!empty($keepTruckinTrailers)) {
      DB::transaction(function () use ($keepTruckinTrailers) {
        $this->saveKeepTruckinTrailers($keepTruckinTrailers, getAuthAdminCompanyId(), auth()->id());
      });
    }
  }

  /**
   * @return mixed|string
   * @throws GuzzleException
   */
  public function getTrailers() {
    $requestUrl = $this->baseUrl . config('constant.keepTruckin_key.fleet.trailers.list');
    do {
      // $token = $this->getApiKey();
      $token = $this->getAccessToken();
      $pageNo = 1;
      $perPage = 100;
      $data = [];
      $url = "{$requestUrl}?status=active&per_page={$perPage}&page_no={$pageNo}";
      // $resp = $this->getHttpCallByXApiOrAuthToken('GET', $url, $token);
      $resp = $this->getHttpCall('GET', $url, $token);

      if (!empty($resp->assets)) {
        $data[] = array_column($resp->assets, 'asset');
      }
      $pageNo = $resp->pagination->page_no;
      $totalPage = ceil($resp->pagination->total / $resp->pagination->per_page);
      $pageNo++;
    } while ($totalPage > $resp->pagination->page_no);
    return array_merge(...$data);
  }

  /**
   * Syncs trailers from KeepTruckin(gomotive) to our database.
   * @param $keepTruckinTrailers
   * @param $companyId
   * @param $userId
   * @return void
   */
  public function saveKeepTruckinTrailers($keepTruckinTrailers, $companyId, $userId) {
    $companyTrailers = Trailer::select(['id', 'number', 'status', 'company_id'])
      ->where('company_id', $companyId)
      ->get();

    foreach ($keepTruckinTrailers as $keepTruckinTrailer) {
      $existingTrailers = $companyTrailers->filter(function($trailer) use ($keepTruckinTrailer) {
        return hasEqualCaseInsensitiveStrings($trailer->number, $keepTruckinTrailer->name);
      });

      $commonData = [
        'vin' => $keepTruckinTrailer->vin ?? null,
        'year' => $keepTruckinTrailer->year ?? null,
        'model' => $keepTruckinTrailer->model ?? null,
        'make' => $keepTruckinTrailer->make ?? null,
        'licence_plate' => $keepTruckinTrailer->license_plate_number ?? null,
      ];

      if ($existingTrailers->count() == 0) {
        $trailer = Trailer::create(array_merge([
          'number' => $keepTruckinTrailer->name,
          'company_id' => $companyId,
          'user_id' => $userId,
          'status' => 'active'
        ], $commonData));
      } elseif ($existingTrailers->count() == 1) {
        $trailer = $existingTrailers->first();
        $trailer->update($commonData);
      } elseif ($existingTrailers->count() > 1) {
        $trailer = $existingTrailers->where('status', 'active')->first();
        if (!$trailer) {
          $trailer = $existingTrailers->first();
        }
        $trailer->update($commonData);
      }

      if (optional($trailer)->id) {
        KeepTruckinTrailerId::updateOrCreate(
          ['trailer_id' => $trailer->id],
          ['keep_truckin_id' => $keepTruckinTrailer->id]
        );
      }
    }
  }

  /**
   * Get HOS List
   * @return mixed
   * @throws GuzzleException
   */
  public function getAllHos() {
    set_time_limit(0);
    // $token = $this->getApiKey();
    $token = $this->getAccessToken();
    $requestUrl = $this->baseUrl . config('constant.keepTruckin_key.hos.availableTime');
    $pageNo = 1;
    $perPage = 100;
    $data = [];
    do {
      $url = "{$requestUrl}?per_page={$perPage}&page_no={$pageNo}";
      // $resp = $this->getHttpCallByXApiOrAuthToken('GET', $url, $token);
      $resp = $this->getHttpCall('GET', $url, $token);
      if (!empty($resp->users)) {
        $data[] = array_column($resp->users, 'user');
      }
      $pageNo = $resp->pagination->page_no;
      $totalPage = ceil($resp->pagination->total / $resp->pagination->per_page);
      $pageNo++;
    } while ($totalPage > $resp->pagination->page_no);
    $hosLogs = array_merge(...$data);

    $ret = [];
    foreach ($hosLogs as $log) {
      $firstName = $log->first_name ?? '';
      $lastName = $log->last_name ?? '';
      $availableTime = optional($log->available_time);
      $ret[] = (object) [
        'driver' => (object) ['name' => $firstName . ' ' . $lastName],
        'clocks' => (object) [
          'break' => (object) ['timeUntilBreakDurationMs' => $availableTime->break * 1000 ?? 0],
          'drive' => (object) ['driveRemainingDurationMs' => $availableTime->drive * 1000 ?? 0],
          'shift' => (object) ['shiftRemainingDurationMs' => $availableTime->shift * 1000 ?? 0],
          'cycle' => (object) ['cycleRemainingDurationMs' => $availableTime->cycle * 1000 ?? 0]
        ]
      ];
    }
    return $ret;
  }

  /**
   * Get Ifta miles data
   * @param $startDate
   * @param $endDate
   * @return mixed
   * @throws GuzzleException
   */
  public function getIftaData($startDate, $endDate) {
    set_time_limit(0);
    // $token = $this->getApiKey();
    $token = $this->getAccessToken();
    $requestUrl = $this->baseUrl . config('constant.keepTruckin_key.reports.ifta');
    $pageNo = 1;
    $perPage = 100;
    $iftaSummary = $milesData = [];
    do {
      $url = "{$requestUrl}?start_date={$startDate}&end_date={$endDate}&per_page={$perPage}&page_no={$pageNo}";

      // $resp = $this->getHttpCallByXApiOrAuthToken('GET', $url, $token);
      $resp = $this->getHttpCall('GET', $url, $token);
      if (!empty($resp->ifta_trips)) {
        $iftaSummary[] = array_column($resp->ifta_trips, 'ifta_trip');
      }
      $pageNo = $resp->pagination->page_no;
      $totalPage = ceil($resp->pagination->total / $resp->pagination->per_page);
      $pageNo++;
    } while ($totalPage > $resp->pagination->page_no);
    $iftaSummary = array_merge(...$iftaSummary);

    $milesDataMap = [];
    foreach ($iftaSummary as $oneStateOneTruck) {
      if (array_key_exists($oneStateOneTruck->jurisdiction, $milesDataMap)) {
        $milesDataMap[$oneStateOneTruck->jurisdiction] += $oneStateOneTruck->distance;
      } else {
        $milesDataMap[$oneStateOneTruck->jurisdiction] = $oneStateOneTruck->distance;
      }
    }

    foreach ($milesDataMap as $state => $distance) {
      $milesData[] = [
        'state' => $state,
        'taxableMiles' => $distance ?? 0,
      ];
    }

    return $milesData;
  }
}
