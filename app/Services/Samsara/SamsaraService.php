<?php

namespace App\Services\Samsara;

use App\Models\AdminCompanyDetail;
use App\Models\Samsara;
use App\Models\Truck;
use App\Models\Trailer;
use App\Models\SamsaraTruckId;
use App\Models\SamsaraTrailerId;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

class SamsaraService extends SamsaraAuthService {
  public function __construct($admin_company_detail_id = '') {
    parent::__construct($admin_company_detail_id);
  }

  /**
   * Get and Update the vehicle details and return Vehicles location.
   * Samsara API's call vehicles list and get GPS location.
   * @param array|null $loadTruckIds
   * @return array
   * @throws GuzzleException
   */
  public function getVehiclesLocation($loadTruckIds = []) {
    if (empty($loadTruckIds)) {
      return [];
    }

    $pendingSamsaraIds = [];
    $knownSamsaraIds = [];
    $samsaraIdToTruckId = [];
    $result = [];

    foreach ($loadTruckIds as $loadTruckId) {
      $result[$loadTruckId] = [
        "latitude" => null,
        "longitude" => null,
        "formattedLocation" => null,
        "error" => null,
      ];
    }

    // Get known samsara ids for trucks.
    $samsaraTruckIds = SamsaraTruckId::select('truck_id', 'samsara_id')
      ->whereIn('truck_id', $loadTruckIds)->get();
    foreach ($samsaraTruckIds as $samsaraTruckId) {
      $knownSamsaraIds[] = $samsaraTruckId->samsara_id;
      $samsaraIdToTruckId[$samsaraTruckId->samsara_id] = $samsaraTruckId->truck_id;
    }

    // For trucks that we do not have samsara ids yet.
    if (count($loadTruckIds) > count($samsaraTruckIds)) {
      $truckIdsWithNoSamsaraIdYet = array_diff(
        $loadTruckIds,
        $samsaraTruckIds->pluck('truck_id')->flatten()->toArray()
      );

      $trucks = Truck::select('id', 'number')
        ->whereIn('id', $truckIdsWithNoSamsaraIdYet)->get();
      foreach ($trucks as $truck) {
        if ($truck->number) {
          $pendingSamsaraIds[$truck->id] = $truck->number;
        } else {
          $result[$truck->id]["error"] = config('response.number.no_number');
        }
      }

      if (count($pendingSamsaraIds) > 0) {
        $samsaraVehicleDetails = collect(
          $this->getTruckNameFromVehicleListSamsaraApi()->data
        );
        foreach ($pendingSamsaraIds as $truckId => $number) {
          $vehicleDetails = $samsaraVehicleDetails->where('name', $number)->first();
          if (empty($vehicleDetails)) {
            $result[$truckId]["error"] = config('response.number.samsara_no_match');
          } else {
            $samsaraId = $vehicleDetails->id;
            $knownSamsaraIds[] = $samsaraId;
            $samsaraIdToTruckId[$samsaraId] = $truckId;
            SamsaraTruckId::create(['truck_id' => $truckId, 'samsara_id' => $samsaraId]);
          }
        }
      }
    }

    if (count($knownSamsaraIds) > 0) {
      $vehicleLocation = $this->getTruckLocationFromSamsaraApi(
        ['types' => 'gps', 'vehicleIds' => implode(',', $knownSamsaraIds)]
      ) ?? '';
      if ($vehicleLocation) {
        foreach ($vehicleLocation->data as $item) {
          $result[$samsaraIdToTruckId[$item->id]]["latitude"] = $item
            ->gps->latitude ?? null;
          $result[$samsaraIdToTruckId[$item->id]]["longitude"] = $item
            ->gps->longitude ?? null;
          $result[$samsaraIdToTruckId[$item->id]]["formattedLocation"] = $item
            ->gps->reverseGeo->formattedLocation ?? null;
        }
      }
    }
    return $result;
  }

  /**
   * @return mixed|string
   * @throws GuzzleException
   * Get the all vehicle Details from Samsara
   */
  private function getTruckNameFromVehicleListSamsaraApi() {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.vehicles.list');
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken());
  }

  /**
   * @param $queryParams
   * @return mixed|string
   * @throws GuzzleException
   * Get the GPS location of vehicles from Samsara
   */
  private function getTruckLocationFromSamsaraApi($queryParams) {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.vehicles.stats');
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken(), $queryParams);
  }

  /**
   * @return mixed|string
   * @throws GuzzleException
   */
  public function getTrucks() {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.vehicles.list');
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken());
  }

  /**
   * @return mixed|string
   * @throws GuzzleException
   */
  public function getTrailers() {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.trailers.list');
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken());
  }

  /**
   * Syncs trucks from Samsara to our database.
   * @return void
   * @throws Exception
   */
  public function syncTrucks() {
    $samsaraTrucks = $this->getTrucks();
    $companyId = getAuthAdminCompanyId();
    if (isset($samsaraTrucks->data)) {
      $this->saveSamsaraTrucks($samsaraTrucks->data, $companyId, auth()->id());
    }
  }

  private function saveSamsaraTrucks($samsaraTrucks, $companyId, $userId) {
    if (isset($samsaraTrucks)) {
      $companyTrucks = Truck::select(['id', 'number', 'status', 'company_id'])
        ->where('company_id', $companyId)
        ->get();

      foreach ($samsaraTrucks as $samsaraTruck) {
        $existingTrucks = $companyTrucks->filter(function($truck) use ($samsaraTruck) {
          return hasEqualCaseInsensitiveStrings($truck->number, $samsaraTruck->name);
        });

        $commonData = [
          'truck_vin' => $samsaraTruck->vin ?? null,
          'year' => $samsaraTruck->year ?? null,
          'model' => $samsaraTruck->model ?? null,
          'make' => $samsaraTruck->make ?? null,
          'licence_plate' => $samsaraTruck->licensePlate ?? null,
        ];

        if ($existingTrucks->count() == 0) {
          $truck = Truck::create(array_merge([
            'number' => $samsaraTruck->name,
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
          SamsaraTruckId::updateOrCreate(
            ['truck_id' => $truck->id],
            ['samsara_id' => $samsaraTruck->id]
          );
        }
      }
    }
  }

  /**
   * Syncs trailers from Samsara to our database.
   * @return void
   * @throws Exception
   */
  public function syncTrailers() {
    $samsaraTrailers = $this->getTrailers();
    $companyId = getAuthAdminCompanyId();
    if (isset($samsaraTrailers->data)) {
      $this->saveSamsaraTrailers($samsaraTrailers->data, $companyId, auth()->id());
    }
  }

  private function saveSamsaraTrailers($samsaraTrailers, $companyId, $userId) {
    if (isset($samsaraTrailers)) {
      $companyTrailers = Trailer::select(['id', 'number', 'status', 'company_id'])
        ->where('company_id', $companyId)
        ->get();

      foreach ($samsaraTrailers as $samsaraTrailer) {
        $existingTrailers = $companyTrailers->filter(function($trailer) use ($samsaraTrailer) {
          return hasEqualCaseInsensitiveStrings($trailer->number, $samsaraTrailer->name);
        });

        $commonData = [
          'vin' => $samsaraTrailer->vin ?? null,
          'year' => $samsaraTrailer->year ?? null,
          'model' => $samsaraTrailer->model ?? null,
          'make' => $samsaraTrailer->make ?? null,
          'licence_plate' => $samsaraTrailer->licensePlate ?? null,
        ];

        if ($existingTrailers->count() == 0) {
          $trailer = Trailer::create(array_merge([
            'number' => $samsaraTrailer->name,
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
          SamsaraTrailerId::updateOrCreate(
            ['trailer_id' => $trailer->id],
            ['samsara_id' => $samsaraTrailer->id]
          );
        }
      }
    }
  }

  /**
   * @param $name
   * @return mixed|null
   * @throws GuzzleException
   */
  public function getTruckByName($name) {
    $samsaraTrucks = $this->getTrucks();
    if (!$samsaraTrucks->data) {
      return null;
    }
    return collect($samsaraTrucks->data)->where('name', $name)->first();
  }

  /**
   * @param $name
   * @return mixed|null
   * @throws GuzzleException
   */
  public function getTrailerByName($name) {
    $samsaraTrailers = $this->getTrailers();
    if (!$samsaraTrailers->data) {
      return null;
    }
    return collect($samsaraTrailers->data)->where('name', $name)->first();
  }

  /**
   * Get the GPS location of vehicles from Samsara
   * @param $truckId
   * @return array
   * @throws GuzzleException
   */
  public function getTruckLocation($truckId) {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.vehicles.locations');
    return $this->getHttpCall('GET', $requestUrl, $this->getAccessToken(), ['vehicleIds' => $truckId]);
  }

  /**
   * Get the GPS location of trailers from Samsara - in BETA
   * https://developers.samsara.com/reference/gettrailerstatssnapshot
   * @param $trailerId
   * @return array
   * @throws GuzzleException
   */
  public function getTrailerLocation($trailerId) {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.trailers.stats');
    return $this->getHttpCall(
      'GET',
      $requestUrl,
      $this->getAccessToken(),
      ['types' => 'gps', 'trailerIds' => $trailerId]
    );
  }

  /**
   * Get One Truck Location from Samsara by truck_id.
   * @param $truckId
   * @return mixed|null
   * @throws GuzzleException
   */
  public function getOneTruckLocationV2($truckId) {
    $samsara = SamsaraTruckId::select(['truck_id', 'samsara_id'])
      ->where('truck_id', $truckId)
      ->first();

    $samsaraId = optional($samsara)->samsara_id;

    if (!$samsaraId) {
      $truck = Truck::select(['id', 'number'])->find($truckId);
      $samsaraTruck = optional($truck)->number ? $this->getTruckByName($truck->number) : null;
      if (optional($samsaraTruck)->id) {
        $samsara = SamsaraTruckId::create([
          'truck_id' => $truck->id,
          'samsara_id' => $samsaraTruck->id
        ]);
        $samsaraId = $samsara->samsara_id;
      }
    }
    if (!$samsaraId) {
      return null;
    }
    $response = $this->getTruckLocation($samsaraId) ?? null;
    $data = optional($response->data)[0];
    $gps = optional($data)->location;
    $truckLocation = $gps ? optional($gps->reverseGeo)->formattedLocation : null;
    if (!$truckLocation) {
      return null;
    }
    return $truckLocation;
  }

  /**
   * Get One Trailer Location from Samsara by trailer_id.
   * @param $trailerId
   * @return mixed|null
   * @throws GuzzleException
   */
  public function getOneTrailerLocationV2($trailerId) {
    $samsara = SamsaraTrailerId::select(['trailer_id', 'samsara_id'])
      ->where('trailer_id', $trailerId)
      ->first();
    $samsaraId = optional($samsara)->samsara_id;
    if (!$samsaraId) {
      $trailer = Trailer::select(['id', 'number'])->find($trailerId);
      $samsaraTrailer = optional($trailer)->number ? $this->getTrailerByName($trailer->number) : null;
      if (optional($samsaraTrailer)->id) {
        $samsara = SamsaraTrailerId::create([
          'trailer_id' => $trailer->id,
          'samsara_id' => $samsaraTrailer->id
        ]);
        $samsaraId = $samsara->samsara_id;
      }
    }
    if (!$samsaraId) {
      return null;
    }
    $response = $this->getTrailerLocation($samsaraId) ?? null;
    $data = optional($response->data)[0];
    $gps = optional($data)->gps;
    $trailerLocation = $gps ? optional($gps->reverseGeo)->formattedLocation : null;
    if (!$trailerLocation) {
      return null;
    }
    return $trailerLocation;
  }

  /**
   * @param array $driverIds
   * @return array
   * @throws GuzzleException
   */
  public function getAllHos(array $driverIds = []): array {
    $requestUrl = $this->buildHosRequestUrl($driverIds);
    $data = [];
    $endCursor = '';
    $separator = strpos($requestUrl, '?') !== false ? '&' : '?';
    do {
      $url = $this->buildHosUrlWithCursor($requestUrl, $endCursor, $separator);
      $resp = $this->getHttpCall('GET', $url, $this->getAccessToken());
      $data[] = $resp->data;
      $endCursor = $resp->pagination->endCursor;
    } while (!empty($endCursor));
    return array_merge(...$data);
  }

  /**
   * Build HOS request url
   * @param array $driverIds
   * @return string
   */
  private function buildHosRequestUrl(array $driverIds): string {
    $url = $this->baseUrl . config('constant.samsara_key.fleet.hos.logs');
    if (!empty($driverIds)) {
      $url .= '?driverIds=' . implode(',', $driverIds);
    }
    return $url;
  }

  /**
   * Build HOS Url with Cursor
   * @param string $url
   * @param string $endCursor
   * @param string $separator
   * @return string
   */
  private function buildHosUrlWithCursor(string $url, string $endCursor, string $separator): string {
    if (!empty($endCursor)) {
      return $url . $separator . 'after=' . $endCursor;
    }
    return $url;
  }

  /**
   * Get all jurisdiction IFTA reports for the requested time duration.
   * @param int $year The year for which the IFTA reports are requested.
   * @param int $quarter The quarter of the year for which the IFTA reports are requested.
   * @return array An array containing jurisdiction IFTA reports in the following format:
   *   [
   *       ['state' => 'State A', 'taxableMiles' => 12345],
   *       ['state' => 'State B', 'taxableMiles' => 67890],
   *       // ... and so on for other states
   *   ]
   * @throws Exception|GuzzleException If there is an error while retrieving the reports.
   */
  public function getIftaData(int $year, int $quarter): array {
    if ($quarter < 1 || $quarter > 4) {
      throw new Exception("Invalid Quarter Value");
    }
    $response = $this->getIftaJurisdictionReports($year, $quarter);
    $jurisdictionReports = !empty($response->data->jurisdictionReports)
      ? $response->data->jurisdictionReports : [];
    $result = [];
    foreach ($jurisdictionReports as $data) {
      $result[] = [
        'state' => $data->jurisdiction,
        'taxableMiles' => $data->taxableMeters / 1609.344 ?? 0,
      ];
    }
    return $result;
  }

  /**
   * Get all jurisdiction IFTA reports for the requested time duration.
   * Data is returned in your organization's defined timezone.
   * @param int $year
   * @param int $quarter
   * @return mixed|string
   * @throws GuzzleException
   */
  private function getIftaJurisdictionReports(int $year, int $quarter) {
    $requestUrl = $this->baseUrl . config('constant.samsara_key.fleet.reports.ifta');
    return $this->getHttpCall(
      'GET',
      $requestUrl,
      $this->getAccessToken(),
      ['year' => $year, 'quarter' => 'Q' . $quarter]
    );
  }

  public function cronToSyncTrucksTrailers() {
    $oneMonthBeforeTime = Carbon::now()->subMonth();
    $samsaras = Samsara::where('updated_at', '>=', $oneMonthBeforeTime)->get();
    if ($samsaras->isEmpty()) {
      return;
    }
    foreach ($samsaras as $samsara) {
      try {
        $companyId = $samsara->company_id;

        // Prod testing code.
        if ($companyId != 36 && $companyId != 112) {
          continue;
        }

        $token = $this->getAccessTokenForSync(
          $samsara
        );
        $requestUrl = $this->baseUrl .
          config('constant.samsara_key.fleet.vehicles.list');
        if ($companyId == 112) {
          $requestUrl .= "?parentTagIds=3533533";
        }
        $samsaraTrucks = $this->getHttpCall('GET', $requestUrl, $token);

        $requestUrl = $this->baseUrl .
          config('constant.samsara_key.fleet.trailers.list');
        if ($companyId == 112) {
          $requestUrl .= "?parentTagIds=3533533";
        }
        $samsaraTrailers = $this->getHttpCall('GET', $requestUrl, $token);

        $userId = AdminCompanyDetail::where('id', $companyId)->pluck('user_id')
          ->first();

        if (isset($samsaraTrucks->data)) {
          $this->saveSamsaraTrucks($samsaraTrucks->data, $companyId, $userId);
        }
        if (isset($samsaraTrailers->data)) {
          $this->saveSamsaraTrailers($samsaraTrailers->data, $companyId, $userId);
        }
      } catch (Exception $exception) {
        Log::error($exception);
        Log::channel('slack')->emergency($exception->getMessage());
      }
    }
  }
}
