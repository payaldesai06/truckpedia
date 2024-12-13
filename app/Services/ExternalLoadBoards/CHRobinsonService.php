<?php

namespace App\Services\ExternalLoadBoards;

use App\Models\CHRobinsonAccount;
use App\Models\CommonKeyValuePair;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class CHRobinsonService {
  const CHROBINSON_TOKEN_KEY = 'chrobinson_token';
  private $baseUrl;
  private $clientId;
  private $clientSecret;

  public function __construct() {
    if (app()->environment('production')) {
      $this->baseUrl = config('services.chrobinson.search.prod_url');
      $this->clientId = config('services.chrobinson.search.prod_clientId');
      $this->clientSecret = config('services.chrobinson.search.prod_clientSecret');
    } else {
      $this->baseUrl = config('services.chrobinson.search.test_url');
      $this->clientId = config('services.chrobinson.search.test_clientId');
      $this->clientSecret = config('services.chrobinson.search.test_clientSecret');
    }
  }

  public function getCarrierCode() {
    $result = [];

    $record = CHRobinsonAccount::select('carrier_code')
      ->where('company_id', getAuthAdminCompanyId())->first();
    $result['carrierCode'] = $record->carrier_code ?? null;

    return $result;
  }

  public function updateOrCreateCarrierCode($request) {
    CHRobinsonAccount::updateOrCreate(
      ['company_id' => getAuthAdminCompanyId()],
      ['carrier_code' => $request->carrierCode]
    );
  }

  public function removeCarrierCode() {
    return CHRobinsonAccount::where('company_id', getAuthAdminCompanyId())->delete();
  }

  /**
   * @return string
   * @throws Exception
   */
  public function getConnectionStatus(): string {
    $record = CHRobinsonAccount::where('company_id', getAuthAdminCompanyId())->first();
    if (is_null($record) || !$record->carrier_code) {
      return 'No C.H. Robinson Carrier Code';
    } else {
      return 'Connected';
    }
  }

  private function getCHRobinsonAccessToken($diffInMinutes = 5) {
    $config = CommonKeyValuePair::firstOrCreate([
      'key' => self::CHROBINSON_TOKEN_KEY
    ]);
    if (!$config) {
      throw new Exception('Fatal error: Cannot find CH Robinson token record.');
    }

    if (
      !$config->expires_when || !$config->value
      || Carbon::parse($config->expires_when) < Carbon::now()->addMinutes($diffInMinutes)
    ) {
      $response = $this->generateCHRobinsonAccessToken();
      if (!isset($response->access_token) || !$response->access_token) {
        Log::channel('slack')->emergency(
          'CH Robinson token refresh failed, response: ' . json_encode($response)
        );
        throw new Exception('Fatal error: CH Robinson token refresh failed');
      }
      Log::channel('cron')->notice('CH Robinson token refreshed');

      $config->value = $response->access_token;
      $config->expires_when = Carbon::now()->addSeconds($response->expires_in);
      $config->save();
    }

    return $config->value;
  }

  private function generateCHRobinsonAccessToken() {
    $client = new Client();
    $url = $this->baseUrl . '/v1/oauth/token';
    $response = $client->post($url, [
      'json' => [
        'client_id' => $this->clientId,
        'client_secret' => $this->clientSecret,
        'audience' => 'https://inavisphere.chrobinson.com',
        'grant_type' => 'client_credentials'
      ],
    ]);
    return json_decode($response->getBody()->getContents());
  }

  public function cronDailyRefreshCHRobinsonAccessToken() {
    $this->getCHRobinsonAccessToken(23 * 60 + 50);
  }

  public function searchLoads($request) {
    $token = $this->getCHRobinsonAccessToken();
    $criteria = [];
    $criteria['regionCode'] = 'NA';

    $record = CHRobinsonAccount::select('carrier_code')
      ->where('company_id', getAuthAdminCompanyId())->first();
    if ($record && $record->carrier_code) {
      $criteria['carrierCode'] = $record->carrier_code;
    }

    if (request('ezpapelEquipmentType')) {
      $mappedEquipmentType = config('constant.ezpapel_equipment_type_to_chrobinson')[request('ezpapelEquipmentType')];
      if ($mappedEquipmentType == 'NO_MATCH') {
        return [];
      }
      if (strlen($mappedEquipmentType) > 1) {
        $criteria['specializedEquipmentCode'] = $mappedEquipmentType;
      } else {
        $criteria['modes'] = [$mappedEquipmentType];
      }
    } else if (request('manualSearchTypes') && count(request('manualSearchTypes'))) {
      $criteria['modes'] = array_unique(array_map(
        fn ($t) => config('constant.load_matching_manual_search_type_to_chrobinson')[$t],
        request('manualSearchTypes')
      ));
    }

    if (request('length')) {
      $criteria['equipmentLengthRange'] = [
        'unitOfMeasure' => 'Standard',
        'min' => 0,
        'max' => (int) request('length'),
      ];
    }

    if (request('weight')) {
      $criteria['loadWeightRange'] = [
        'min' => 0,
        'max' => (int) request('weight'),
      ];
    }

    if ($request->has('origin.states') && count($request->origin['states'])) {
      $criteria['origins'] = [
        [
          'countryCode' => 'US',
          'stateCodes'  => $request->origin['states'],
        ],
      ];
    } else {
      $criteria['originRadiusSearch'] = [
        'coordinate' => [
          'lat' =>  $request->origin['latitude'],
          'lon' =>  $request->origin['longitude'],
        ],
        'radius' => [
          'unitOfMeasure' => 'Standard',
          'value' => $request->origin['deadhead']
        ]
      ];
    }

    if ($request->has('destination.states') && count($request->destination['states'])) {
      $criteria['destinations'] = [
        [
          'countryCode' => 'US',
          'stateCodes'  => $request->destination['states'],
        ],
      ];
    } else {
      $criteria['destinationRadiusSearch'] = [
        'coordinate' => [
          'lat' =>  $request->destination['latitude'],
          'lon' =>  $request->destination['longitude'],
        ],
        'radius' => [
          'unitOfMeasure' => 'Standard',
          'value' => $request->destination['deadhead']
        ]
      ];
    }

    $criteria['availableForPickUpByDateRange'] = [
      'min' => request('startDate'),
    ];

    if (request('endDate') && request('endDate') >= request('startDate')) {
      $criteria['availableForPickUpByDateRange']['max'] = request('endDate');
    }


    $criteria['sortCriteria'] = [
      'field' => 'CalculatedPickupByDateTime',
      'direction' => 'ascending',
    ];

    // error_log('Search criteria: ' . json_encode($criteria));
    /*
    if ($request->has('pageNumber')) {
      $criteria['pageIndex'] = $request->get('pageNumber');
    }

    if ($request->has('pageSize')) {
      $criteria['pageSize'] = $request->get('pageSize') > 100 ? 100 : $request->get('pageSize');
    }
    */

    $client = new Client();
    $url = $this->baseUrl . '/v2/shipments/available/searches';

    $raw_response = $client->post($url, [
      'headers' => ['Authorization' => 'Bearer ' . $token],
      'json' => $criteria
    ]);
    $response = json_decode($raw_response->getBody()->getContents()) ?? new \stdClass();

    if (!isset($response->results) || count($response->results) == 0) {
      return [];
    }
    // error_log('CHRobinson results: ' . json_encode($response->results));
    $result = collect($response->results)->map(function ($item) {
      return $this->convertDataToResponse($item);
    })->filter()->values();
    // error_log('Ezpapel results: ' . json_encode($result));
    return $result;
  }

  private function convertDataToResponse($item): array {
    $origin = [
      'city' => $item->origin->city ?? '',
      'state' => $item->origin->stateCode ?? '',
      'latitude' => $item->origin->coordinate->lat ?? null,
      'longitude' => $item->origin->coordinate->lon ?? null,
      'deadhead' => null,
    ];

    if (isset($item->deadHeadDistance) && $item->deadHeadDistance) {
      $origin['deadhead'] = (int) $item->deadHeadDistance;
    }

    $destination = [
      'city' => $item->destination->city ?? '',
      'state' => $item->destination->stateCode ?? '',
      'latitude' => $item->destination->coordinate->lat ?? null,
      'longitude' => $item->destination->coordinate->lon ?? null,
      'deadhead' => null,
    ];

    if (isset($item->comment) && strlen($item->comment)) {
      $comments = [$item->comment];
    } else {
      $comments = [];
    }

    $createdWhen = null;
    if (isset($item->createdDateTime) && $item->createdDateTime[0] == '2') {
      $createdWhen = $item->createdDateTime;
    } else if (isset($item->updatedDateTime) && $item->updatedDateTime[0] == '2') {
      $createdWhen = $item->updatedDateTime;
    }

    $equipmentType = '';
    if ($item->specializedEquipment->description ?? '') {
      $equipmentType = $item->specializedEquipment->description;
    } else if ($item->modes) {
      $equipmentType = implode(', ', $item->modes);
    }

    $pickupDate = '';
    $pickupTime = '';
    $this->generateDateTimeRange($item->stops[0], $pickupDate, $pickupTime);

    $deliveryDate = '';
    $deliveryTime = '';
    $this->generateDateTimeRange(
      $item->stops[count($item->stops) - 1],
      $deliveryDate,
      $deliveryTime
    );

    $contactPhone = $item->contact->phoneNumber ?? '';
    if ($contactPhone) {
      $contactPhone = preg_replace('/[^\d]/', '', $contactPhone);
    }

    $rate = null;
    if (isset($item->availableLoadCosts) && count($item->availableLoadCosts)) {
      foreach ($item->availableLoadCosts as $oneCost) {
        if ($oneCost->currencyCode != 'USD') {
          $rate = null;
          break;
        }
        $rate += $oneCost->sourceCostPerUnit * $oneCost->units;
      }
    }

    array_unshift($comments, strval($item->loadNumber));

    $result = [
      'loadBoard' => 'C.H. Robinson',
      'id' => $item->loadNumber,
      'origin' => $origin,
      'destination' => $destination,
      'bookUrl' => '',
      'capacity' => '',
      'comments' => $comments,
      'createdWhen' => $createdWhen,
      'creditScore' =>  null,
      'daysToPay' => null,
      'distance' => $item->distance->miles ?? null,
      'equipmentType' => $equipmentType,
      'factoring' => '',
      'lengthInFeet' => $item->equipment->length->standard ?? null,
      'pickupDate' => $pickupDate,
      'pickupTime' => $pickupTime,
      'deliveryDate' => $deliveryDate,
      'deliveryTime' => $deliveryTime,
      'poster' => [
        'company' => $item->contact->name ?? 'C.H. Robinson',
        'city' =>  '',
        'state' =>  '',
        'phone' =>  $contactPhone,
        'extension' => '',
        'email' =>  $item->contact->emailAddress ?? '',
      ],
      'rate' => $rate,
      'weightInPounds' => $item->weight->pounds ?? null,
    ];
    return $result;
  }

  private function generateDateTimeRange($oneStop, &$date, &$time) {
    $date = $this->extractDateTime(
      $oneStop->calculatedArriveByStartDateTime,
      true
    );
    $endDate = $this->extractDateTime(
      $oneStop->calculatedArriveByEndDateTime,
      true
    );

    $time = $this->extractDateTime(
      $oneStop->calculatedArriveByStartDateTime,
      false
    );
    $endTime = $this->extractDateTime(
      $oneStop->calculatedArriveByEndDateTime,
      false
    );
    if ($endTime != $time || $endDate != $date) {
      $time .= ' - ' . $endTime;
    }

    if ($endDate != $date) {
      $date .= ' - ' . $endDate;
    }
  }

  private function extractDateTime($datetime, $isDate) {
    $result = '';
    if ($datetime) {
      if ($isDate) {
        $result = substr($datetime, 5, 2) . '/' . substr($datetime, 8, 2);
      } else {
        $result = substr($datetime, 11, 5);
      }
    }
    return $result;
  }
}
