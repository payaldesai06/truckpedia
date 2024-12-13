<?php

namespace App\Services\ExternalLoadBoards;

use App\Helpers\GeoLocationToTimeZoneHelper;
use App\Models\CommonKeyValuePair;
use App\Models\Load;
use App\Services\Samsara\SamsaraService;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Log;


// TODO: CODE NEEDS TESTS.
class TransplaceService {
  const TRANSPLACE_TOKEN_KEY = 'transplace_token';

  private $baseUrl;
  private $clientId;
  private $clientSecret;

  public function __construct() {
    if (app()->environment('production')) {
      $this->baseUrl = config('services.transplace.loadboard.prod_url');
      $this->clientId = config('services.transplace.loadboard.prod_clientId');
      $this->clientSecret = config('services.transplace.loadboard.prod_clientSecret');
    } else {
      $this->baseUrl = config('services.transplace.loadboard.test_url');
      $this->clientId = config('services.transplace.loadboard.test_clientId');
      $this->clientSecret = config('services.transplace.loadboard.test_clientSecret');
    }
  }

  /**
   * Generate Transpplace OAuth2 Access Token Generation.
   * @return mixed
   */
  public function generateTransplaceAccessToken() {
    $client = new Client();
    $headers = [
      'Authorization' => 'Basic ' . base64_encode($this->clientId . ':' . $this->clientSecret),
      'Content-Type' => 'application/x-www-form-urlencoded'
    ];
    $options = [
      'form_params' => [
        'grant_type' => 'client_credentials'
      ]
    ];
    $requestUrl = $this->baseUrl . '/oauth2/accesstoken';
    $request = new Request('POST', $requestUrl, $headers);
    $res = $client->sendAsync($request, $options)->wait();
    return json_decode($res->getBody()->getContents());
  }

  /**
   * Refresh Transplace Access Token.
   * @return void
   * @throws Exception
   */
  public function cronRefreshTransplaceAccessToken() {
    // 50 minutes. Token valid for one hour only.
    try {
      $this->getTransplaceAccessToken(50);
    } catch (Exception $e) {
      Log::channel('cron')->notice($e->getMessage());
    }
  }

  /**
   * Get Transpace Access Token.
   * @param int $diffInMinutes
   * @return mixed
   * @throws Exception
   */
  public function getTransplaceAccessToken(int $diffInMinutes = 5) {
    $config = CommonKeyValuePair::firstOrCreate([
      'key' => self::TRANSPLACE_TOKEN_KEY
    ]);

    if (!$config) {
      throw new Exception('Fatal error: Cannot find Transplace token record.');
    }

    if (!$config->expires_when || !$config->value || Carbon::parse($config->expires_when) < Carbon::now()->addMinutes($diffInMinutes)) {
      $response = $this->generateTransplaceAccessToken();
      // error_log(json_encode($response));
      if (!isset($response->access_token) || !$response->access_token) {
        Log::channel('slack')->emergency(
          'Transplace token refresh failed, response: ' . json_encode($response)
        );
        throw new Exception('Fatal error: Transplace token refresh failed');
      }
      Log::channel('cron')->notice('Transplace token refreshed');

      $config->value = $response->access_token;
      $config->expires_when = Carbon::now()->addSeconds($response->expires_in);
      $config->save();
    }

    return $config->value;
  }


  /**
   * This API is used to validate connectivity with Transplace Carrier APIs.
   * @return mixed
   * @throws Exception
   */
  public function healthCheck() {
    $requestUrl = $this->baseUrl . '/tp-api/carrier/v2/healthCheck';
    $accessToken = $this->getTransplaceAccessToken();

    $client = new Client();
    $headers = [
      'Authorization' => 'Bearer ' . $accessToken
    ];
    $request = new Request('GET', $requestUrl, $headers);
    $res = $client->sendAsync($request)->wait();
    $response = json_decode($res->getBody()->getContents());
    return $response->success ?? false;
  }

  /**
   * This API is used by carriers to update shipment status and provide tracking information.
   * @param $loadReferenceId
   * @param $loadboardIntegrationData
   * @param $reason
   * @param $dateTime
   * @param $state
   * @param $lat
   * @param $lng
   * @param $stopSequenceNumber
   * @return bool|void
   * @throws Exception
   */
  public function handleDriverUpdate(
    $loadReferenceId,
    $loadboardIntegrationData,
    $reason,
    $dateTime,
    $state,
    $lat,
    $lng,
    $stopSequenceNumber = null
  ) {
    $loadboardIntegrationData = json_decode($loadboardIntegrationData);
    $shipmentLookupReferenceName = $loadboardIntegrationData->shipmentLookupReferenceName ?? '';
    $shipmentLookupReferenceValue = $loadboardIntegrationData->shipmentLookupReferenceValue ?? '';
    $scac = $loadboardIntegrationData->scac ?? '';

    if (empty($shipmentLookupReferenceName) || empty($shipmentLookupReferenceValue) || empty($scac)) {
      Log::channel('slack')->emergency(
        'Transplace loadboard_integration_data missing fields: ' . json_encode($loadboardIntegrationData)
      );
      return;
    } else if (empty($loadReferenceId)) {
      Log::channel('slack')->emergency(
        'Transplace load reference ID field is missing'
      );
      return;
    } else if (!is_numeric($loadReferenceId)) {
      Log::channel('slack')->emergency(
        'Transplace load reference ID field is not a number: ' . $loadReferenceId
      );
      return;
    }

    // $reason == config('constant.status.load_driver.load_started') ||
    // $reason == config('constant.status.load_driver.end_load') ||
    if ($reason == 'cronJob') {
      $timezone = (new GeoLocationToTimeZoneHelper())->stateOrLatLngToTimeZone($state, $lat, $lng, 'America/Los_Angeles');
      $dateTime = Carbon::parse($dateTime)->setTimezone($timezone)->toDateTimeString();
    }

    // Note: no status for start/end load, so we may not send status at all.
    $statusCode = "X6";
    $type = "CHECK_CALL";

    if ($reason == config('constant.status.load_driver.from_arrived')) {
      $statusCode = "X3"; // Arrived at pick-up location.
      $type = "ARRIVAL";
    } else if ($reason == config('constant.status.load_driver.from_loaded')) {
      $statusCode = "CP"; //"AF"; //Departed Pick-up "CP"; // Completed loading at pick-up location.
      $type = "LOADED";
    } else if ($reason == config('constant.status.load_driver.to_arrived')) {
      $statusCode = "X1"; // Arrived at delivery location.
      $type = "ARRIVAL";
    } else if ($reason == config('constant.status.load_driver.to_unloaded')) {
      $statusCode = "D1"; // "CD"; //Departed delivery location "D1"; // Completed unloading at delivery location.
      $type = "UNLOADED";
    }

    $body = [
      "loadId" => intval($loadReferenceId),
      "shipmentLookupReferenceName" => $shipmentLookupReferenceName,
      "shipmentLookupReferenceValue" => $shipmentLookupReferenceValue,
      "scac" => $scac,
      "checkCalls" => [
        [
          "type" => $type,
          "reasonCode" => "NS",
          "dateTime" => $dateTime,
          "statusCode" => $statusCode,
          "latitude" => !empty($lat) ? strval($lat) : '',
          "longitude" => !empty($lng) ? strval($lng) : ''
        ]
      ]
    ];

    if ($stopSequenceNumber) {
      $body['checkCalls'][0]['stopSequenceNumber'] = $stopSequenceNumber;
    } else if ($statusCode != 'X6') {
      return;
    }
    //    if ($lat && $lng) {
    //      $body["checkCalls"]["latitude"] = strval($lat);
    //      $body["checkCalls"]["longitude"] = strval($lng);
    //    }

    return $this->updateCarrierShipmentStatus($body);
  }

  /**
   * This API is used by carriers to update shipment status and provide tracking information.
   * @param $body
   * @return false
   * @throws Exception
   */
  private function updateCarrierShipmentStatus($body): bool {
    $requestUrl = $this->baseUrl . '/tp-api/carrier/v2/carrier-shipment-status';
    $accessToken = $this->getTransplaceAccessToken();
    $client = new Client();
    $headers = [
      'Authorization' => 'Bearer ' . $accessToken,
      'Content-Type' => 'application/json'
    ];
    $request = new Request('POST', $requestUrl, $headers, json_encode(array_filter($body)));
    $res = $client->sendAsync($request)->wait();
    return json_decode($res->getBody()->getContents())->success ?? false;
  }

  /**
   * Update Truck locations on Transplace.
   * @return void
   * @throws GuzzleException
   */
  public function cronJobUpdateTruckLocation() {
    try {
      /*Log::channel('slack')->emergency(
        "cronJobUpdateTruckLocation starts."
      );*/
      $loads = Load::where('admin_company_detail_id', config('user_customization.GE.companyId'))
        ->select('id', 'loadboard_integration_data', 'refrence_id')
        ->where('status', config('constant.status.load.in_transit'))
        ->where('updated_at', '>=', Carbon::now()->subDays(15))
        ->whereNotNull('loadboard_integration')
        ->whereNotNull('loadboard_integration_data')
        ->whereNotNull('refrence_id')
        ->where('loadboard_integration', 1)
        ->with([
          'loadDrivers:id,load_id,truck_id,from_leg,to_leg,status',
          'loadLegs:id,load_id'
        ])
        ->get()
        ->map(function ($load) {
          $loadDrivers = $load->loadDrivers->whereNotNull('truck_id');
          if ($loadDrivers->isNotEmpty()) {
            if ($load->loadLegs->isEmpty()) { // No leg found
              if ($loadDrivers->count() == 1) {
                return $this->getLoadsWithTruckIdToUpdateLocation($loadDrivers, $load->id, $load->loadboard_integration_data, $load->refrence_id);
              } else {
                /*multiple load drivers found*/
                $loadDrivers = $loadDrivers->whereIn('status', config('constant.status.driver_open_load'));
                if ($loadDrivers->count() > 0) {
                  return $this->getLoadsWithTruckIdToUpdateLocation($loadDrivers, $load->id, $load->loadboard_integration_data, $load->refrence_id);
                }
              }
            } else { // legs exists
              $shipperToLegDriverLoads = $loadDrivers->whereNull('from_leg')->whereNotNull('to_leg')->whereIn('status', config('constant.status.driver_open_load'));
              $legToReceiverDriverLoads = $loadDrivers->whereNotNull('from_leg')->whereNull('to_leg')->whereIn('status', config('constant.status.driver_open_load'));
              if ($shipperToLegDriverLoads->count() > 0) {
                return $this->getLoadsWithTruckIdToUpdateLocation($shipperToLegDriverLoads, $load->id, $load->loadboard_integration_data, $load->refrence_id);
              } elseif ($legToReceiverDriverLoads->count() > 0) {
                return $this->getLoadsWithTruckIdToUpdateLocation($legToReceiverDriverLoads, $load->id, $load->loadboard_integration_data, $load->refrence_id);
              } else {
              }
            }
          }
          return [];
        });

      $truckIds = array_unique(array_filter($loads->pluck('truckId')->toArray())) ?? [];
      $samsaraVehicleLocationDetails = (new SamsaraService(config('user_customization.GE.companyId')))->getVehiclesLocation($truckIds);
      $carbonNow = Carbon::now()->toDateTimeString();
      try {
        foreach ($loads as $load) {
          if (!empty($load['truckId'])) {
            $samsaraLocation = $samsaraVehicleLocationDetails[$load['truckId']] ?? [];
            $address = $samsaraLocation['formattedLocation'] ?? null;
            $state = !empty($address) ? $this->getStateFromAddressUsingRegex($address) : null;
            $lat = $samsaraLocation['latitude'] ?? null;
            $lng = $samsaraLocation['longitude'] ?? null;
            $this->handleDriverUpdate($load['loadReferenceId'], $load['loadboardIntegrationData'], 'cronJob', $carbonNow, $state, $lat, $lng);
          }
        }
      } catch (Exception $exception) {
        Log::channel('slack')->emergency(
          $exception->getMessage()
        );
        Log::error($exception);
      }
    } catch (Exception $exception) {
      Log::channel('slack')->emergency(
        $exception->getMessage()
      );
      Log::error($exception);
    }
  }

  /**
   * @param $loadDrivers
   * @param $loadId
   * @param $loadBoardIntegrationData
   * @param $loadReferenceId
   * @return array
   */
  private function getLoadsWithTruckIdToUpdateLocation($loadDrivers, $loadId, $loadBoardIntegrationData, $loadReferenceId): array {
    return [
      'truckId' => $loadDrivers->pluck('truck_id')->first(),
      'loadId' => $loadId,
      'loadboardIntegrationData' => $loadBoardIntegrationData,
      'loadReferenceId' => $loadReferenceId
    ];
  }

  /**
   * Get state from complete address using regex.
   * @param $address
   * @return mixed|string
   */
  private function getStateFromAddressUsingRegex($address) {
    if (empty($address)) {
      return null;
    }
    // sample addresses
    // 'I 65, Hoover, AL'
    // 'Purple Heart Trail, Sun Valley, AZ, 86029';
    $pattern = '/(?<=, )(\b[A-Z]{2}\b)(?=, \d{5})?/m';
    preg_match_all($pattern, $address, $matches, PREG_SET_ORDER, 0);
    return collect($matches)->flatten()->first() ?? null;
  }
}
