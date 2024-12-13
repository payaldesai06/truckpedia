<?php

namespace App\Services\ExternalLoadBoards;

use App\Models\TruckStopIntegrationId;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;

class TruckStopService {
  private $baseUrl;
  private $username;
  private $password;

  public function __construct() {
    if (app()->environment('production')) {
      $this->baseUrl = config('services.truckstop.search.prod_url');
      $this->username = config('services.truckstop.search.prod_username');
      $this->password = config('services.truckstop.search.prod_password');
    } else {
      $this->baseUrl = config('services.truckstop.search.test_url');
      $this->username = config('services.truckstop.search.test_username');
      $this->password = config('services.truckstop.search.test_password');
    }
  }

  public function getIntegrationId() {
    $result = [];

    $integrationId = TruckStopIntegrationId::select('integration_id')
      ->where('user_id', Auth::user()->id)->first();
    $result['integrationId'] = $integrationId->integration_id ?? null;

    return $result;
  }

  public function updateOrCreateIntegrationId($request) {
    $userId = Auth::user()->id;
    TruckStopIntegrationId::updateOrCreate(
      ['user_id' => $userId],
      [
        'integration_id' => request('integrationId')
      ]
    );
  }

  /**
   * Remove/Delete Integration Id.
   * @return mixed
   */
  public function removeIntegrationId() {
    $userId = Auth::user()->id;
    return TruckStopIntegrationId::where('user_id', $userId)->delete();
  }

  /**
   * @return string
   * @throws Exception
   */
  public function getConnectionStatus(): string {
    $userId = Auth::user()->id;
    $record = TruckStopIntegrationId::where('user_id', $userId)->first();
    if (is_null($record)) {
      return 'No TruckStop Integration ID';
    } else {
      return 'Connected';
    }
  }

  public function searchLoads($request) {
    $userId = Auth::user()->id;
    $record = TruckStopIntegrationId::where('user_id', $userId)->first();
    if (is_null($record)) {
      throw new Exception('No TruckStop Integration ID');
    }

    $intID = $record->integration_id;
    $url = $this->baseUrl . config('services.truckstop.search.loadsearch');
    $client = new \SoapClient($url);
    $searchRequest = [
      'UserName'      => $this->username,
      'Password'      => $this->password,
      'IntegrationId' => $intID,
    ];
    $criteria = [];

    $equipmentTypes = 'ANY';
    $capacity = 'All';
    $originCity = null;
    $originState = null;
    $originLat = null;
    $originLng = null;
    $originDeadhead = 25;
    $originStates = null;
    $destinationCity = null;
    $destinationState = null;
    $destinationLat = null;
    $destinationLng = null;
    $destinationDeadhead = 25;
    $destinationStates = null;
    $pickupDates = null;

    if (request('ezpapelEquipmentType')) {
      if (config('constant.ezpapel_equipment_type_to_truckstop')[request('ezpapelEquipmentType')])
        $equipmentTypes =
          config('constant.ezpapel_equipment_type_to_truckstop')[request('ezpapelEquipmentType')];
    } else if (request('manualSearchTypes') && count(request('manualSearchTypes')) <= 3) {
      $equipmentTypes = implode(
        ',',
        array_map(
          fn ($t) => config('constant.load_matching_manual_search_type_to_truckstop')[$t],
          request('manualSearchTypes')
        )
      );
    }
    /*else if (request('truckstopEquipmentTypes') && count(request('truckstopEquipmentTypes'))) {
      $equipmentTypes = implode(',', request('truckstopEquipmentTypes'));
    }*/

    if (request('capacity')) {
      $capacity = strtolower(request('capacity')) == 'both' ?
        'All' : ucfirst(strtolower(request('capacity')));
    }

    if ($request->has('origin.states') && count($request->origin['states'])) {
      $originStates = implode(',', $request->origin['states']);
    } else {
      $originCity = $request->origin['city'];
      $originState = $request->origin['state'];
      $originLat = $request->origin['latitude'];
      $originLng = $request->origin['longitude'];
      if (request('origin.deadhead')) {
        $originDeadhead = $request->origin['deadhead'];
        if ($originDeadhead > 300) {
          $originDeadhead = 300;
        } else if ($originDeadhead < 25) {
          $originDeadhead = 25;
        }
      }
    }

    if ($request->has('destination.states') && count($request->destination['states'])) {
      $destinationStates = implode(',', $request->destination['states']);
    } else {
      $destinationCity = $request->destination['city'];
      $destinationState = $request->destination['state'];
      $destinationLat = $request->destination['latitude'];
      $destinationLng = $request->destination['longitude'];
      if (request('destination.deadhead')) {
        $destinationDeadhead = $request->destination['deadhead'];
        if ($destinationDeadhead > 300) {
          $destinationDeadhead = 300;
        } else if ($destinationDeadhead < 25) {
          $destinationDeadhead = 25;
        }
      }
    }

    $pickupDates = [request('startDate')];
    if (request('endDate') && request('endDate') > request('startDate')) {
      $date = Carbon::parse(request('startDate'))->addDay();
      $dateStr = $date->format('Y-m-d');
      while ($dateStr <= request('endDate')) {
        $pickupDates[] = $dateStr;
        $date->addDay();
        $dateStr = $date->format('Y-m-d');
      }
    }

    $criteria['EquipmentType'] = $equipmentTypes;
    $criteria['LoadType'] = $capacity;
    if ($originStates) {
      $criteria['OriginState'] = $originStates;
    } else {
      $criteria['OriginLatitude'] = $originLat;
      $criteria['OriginLongitude'] = $originLng;
      $criteria['OriginCity'] = $originCity;
      $criteria['OriginState'] = $originState;
    }
    $criteria['OriginRange'] = $originDeadhead;
    if ($destinationStates) {
      $criteria['DestinationState'] = $destinationStates;
    } else {
      $criteria['DestinationLatitude'] = $destinationLat;
      $criteria['DestinationLongitude'] = $destinationLng;
      $criteria['DestinationCity'] = $destinationCity;
      $criteria['DestinationState'] = $destinationState;
      // SOAP-ERROR: Encoding: object has no 'DestinationRange' property      
    }
    $criteria['DestinationRange'] = $destinationDeadhead;

    $criteria['PickupDates'] = $pickupDates;
    $criteria['PageNumber'] = 1;
    $criteria['PageSize'] = 200;
    $criteria['SortBy'] = 'Age';
    $criteria['SortDescending'] = false;
    // error_log(json_encode($criteria));

    $searchRequest['Criteria'] = $criteria;
    $params = [
      'searchRequest' => $searchRequest,
    ];
    $response = $client->GetMultipleLoadDetailResults($params);
    if (property_exists($response->GetMultipleLoadDetailResultsResult->Errors, 'Error')) {
      throw new Exception($response->GetMultipleLoadDetailResultsResult->Errors->Error->ErrorMessage);
    }

    $truckstopResult = $response->GetMultipleLoadDetailResultsResult
      ->DetailResults->MultipleLoadDetailResult ?? [];
    if ($truckstopResult && !is_array($truckstopResult)) {
      // When there is only one load, truckstop returns an object instead of an array.
      $truckstopResult = [$truckstopResult];
    }

    $result = collect($truckstopResult)
      ->map(function ($item) {
        $result = $this->convertDataToResponse($item);
        if (request('weight') && $result['weightInPounds']) {
          if ((float)request('weight') < (float)$result['weightInPounds']) {
            return null;
          }
        }
        return $result;
      })->filter()->values();
    return $result;
  }

  private function convertDataToResponse($item): array {
    $origin = [
      'city' => $item->OriginCity ?? '',
      'state' => $item->OriginState ?? '',
      'latitude' => $item->OriginLatitude ?? null,
      'longitude' => $item->OriginLongitude ?? null,
      'deadhead' => $item->OriginDistance ?? null,
    ];

    $destination = [
      'city' => $item->DestinationCity ?? '',
      'state' => $item->DestinationState ?? '',
      'latitude' => $item->DestinationLatitude ?? null,
      'longitude' => $item->DestinationLongitude ?? null,
      'deadhead' => $item->DestinationDistance ?? null,
    ];

    $capacity = strtolower($item->LoadType) == 'all' ? 'Both' :  $item->LoadType;
    $equipmentType = $item->EquipmentTypes->Description ? $item->EquipmentTypes->Description : $item->Equipment;

    $pickupDate = $item->PickupDate ?? null;
    if ($pickupDate && $pickupDate != "DAILY") {
      $pickupDate = Carbon::parse($item->PickupDate)->format('m/d') ?? '';
    }

    $deliveryDate = $item->DeliveryDate ?? null;
    if ($deliveryDate) {
      $deliveryDate = Carbon::parse($item->DeliveryDate)->format('m/d') ?? '';
    }

    $length = null;
    if ($item->Length) {
      $length = intval($item->Length);
    }

    $weight = null;
    if ($item->Weight) {
      $weight = floatval($item->Weight);
    }

    $contactPhone = '';
    if ($item->PointOfContactPhone) {
      $contactPhone = preg_replace('/[^\d]/', '', $item->PointOfContactPhone);
    }

    $distance = $item->Mileage ? floatval($item->Mileage) : null;
    /*if ($item->Distance) {
      if (floatval($item->Distance) > 0) {
        $distance = floatval($item->Distance);
      }
    }*/

    $creditScore = is_numeric($item->Credit) ? floatval($item->Credit) : null;
    $createdWhen = $item->Entered ?? null;
    // $item->Entered is in Mountain Time.
    if ($createdWhen) {
      $createdWhen = Carbon::parse($createdWhen, 'America/Boise')->utc()->toIso8601ZuluString();
    }
    $rate = is_numeric($item->PaymentAmount) ? floatval($item->PaymentAmount) : null;

    return [
      'loadBoard' => "Truckstop",
      'id' => $item->ID,
      'origin' => $origin,
      'destination' => $destination,
      "age" => isset($item->Age) ? $item->Age . 'h' : '',
      'bookUrl' => '',
      'capacity' => $capacity,
      'comments' => [],
      'createdWhen' => $createdWhen,
      // Below line can be used for testing.
      // 'createdWhen' => Carbon::parse('2022-05-29 16:10', 'America/Los_Angeles')->subSeconds(rand(0, 1800))->utc()->toIso8601ZuluString(), 
      'creditScore' =>  $creditScore,
      'daysToPay' => $item->Days2Pay ?? null,
      'distance' => $distance,
      'equipmentType' => $equipmentType,
      'factoring' => '',
      'lengthInFeet' => $length,
      'pickupDate' => $pickupDate,
      'pickupTime' => $item->PickupTime ?? '',
      'deliveryDate' => $deliveryDate,
      'deliveryTime' => $item->DeliveryTime ?? '',
      'poster' => [
        'company' => $item->TruckCompanyName ?? '',
        'city' =>  $item->TruckCompanyCity ?? '',
        'state' =>  $item->TruckCompanyState ?? '',
        'phone' =>  $contactPhone ? $contactPhone : $item->TruckCompanyPhone,
        'extension' => '',
        'email' =>  $item->TruckCompanyEmail ?? '',
      ],
      'rate' => $rate,
      'weightInPounds' => $weight,
    ];
  }
}
