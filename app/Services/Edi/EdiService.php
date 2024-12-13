<?php

namespace App\Services\Edi;

use App\Mail\Stedi\LoadCanceledMail;
use App\Mail\Stedi\LoadReissuedMail;
use App\Models\Load;
use App\Services\LoadService;
use App\Services\SavedAddressesService;
use Carbon\Carbon;
use DateTime;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;


class EdiService {
  /**
   * Handle Webhook of EDI to JSON.
   * Create Load or Update Load through edi webhook response.
   * @throws Exception
   */
  public function upsertLoad() {
    $rawLoad = request('load');
    $scac = request('scac');
    if (is_null($rawLoad) || empty($scac)) {
      throw new Exception("Edi: Wrong payload:" . json_encode(request()->all()));
    }
    // TODO: who is the customer?
    $metadata = [
      'companyId' => config('user_customization.' . $scac . '.companyId'),
      'customerId' => config('user_customization.' . $scac . '.customerId'),
      'userId' => config('user_customization.' . $scac . '.userId'),
      'accessorialFeeSocId' => config('user_customization.' . $scac . '.accessorialFeeSocId'),
      'customerEmails' => config('user_customization.' . $scac . '.customerEmails'),
      'loadBroker' => 'Transplace',
    ];

    $loadPayload = $this->getSimplifiedLoad($rawLoad, $metadata);
    if (empty($loadPayload)) { // Load canceled.
      return;
    }
    $shippers = $this->getShippers($loadPayload);
    $receivers = $this->getReceivers($loadPayload);

    return DB::transaction(function () use (
      $metadata,
      $loadPayload,
      $shippers,
      $receivers
    ) {
      $existingLoad = $this->getExistingLoad($metadata['companyId'], $loadPayload['referenceId']);

      // null for now.
      /*$totalMiles = $this->calculateTotalMiles(
        $shippers,
        $receivers,
        $metadata['companyId'],
        $existingLoad
      );*/

      $loadData = $this->getLoadData(
        $loadPayload,
        null, // $totalMiles,
        $metadata,
        $existingLoad
      );

      if (!empty($existingLoad)) {
        $this->updateExistingLoad(
          $metadata,
          $existingLoad,
          $loadPayload,
          $loadData,
          $shippers,
          $receivers
        );
      } else {
        $this->createNewLoad(
          $metadata,
          $loadPayload,
          $loadData,
          $shippers,
          $receivers
        );
      }

      return; // ['loadNumber' => $load->load_unique_id];
    });
  }

  /**
   * Get Simplified Load Detail for EDI fabric.
   * @param $load
   * @param $metadata
   * @return array
   */
  private function getSimplifiedLoad($load, $metadata): array {
    $group = $load['Groups'][0] ?? null;
    $transaction = $group['Transactions'][0] ?? null;
    if (empty($transaction)) {
      throw new Exception("Edi Webhook: no transaction:" . json_encode(request()->all()));
    }
    $scac = $transaction['B2']['StandardCarrierAlphaCode_02'];
    $referenceId = $transaction['B2']['ShipmentIdentificationNumber_04'] ?? '';
    $dispatcherNotes = collect($transaction['NTE'])->pluck('Description_02')
      ->implode(', ') ?? '';
    // 00: new, 01: canceled, 04: update
    $purposeCode = $transaction['B2A']['TransactionSetPurposeCode_01'] ?? '';
    // Send email to customers email when purpose code is 01. It means load is canceled.
    if ($purposeCode == '01') {
      $this->cancelLoad($metadata, $referenceId);
      return [];
    }

    $bookingNumber = $this->getBookingNumber($transaction);
    $chargeDetails = $this->getChargeDetails($transaction);
    $stops = $this->getStops($transaction['S5Loop'] ?? []);
    $totalAmount = $this->getTotalAmount($transaction);

    return [
      'scac' => $scac,
      'referenceId' => (string) $referenceId,
      'bookingNumber' => (string) $bookingNumber,
      'specialInstructions' => $dispatcherNotes,
      'totalAmount' => $totalAmount ?? 0,
      'chargeDetails' => $chargeDetails,
      'shippers' => $stops['shippers'],
      'receivers' => $stops['receivers'],
    ];
  }

  /**
   * update for cancel load
   * @param $metadata
   * @param $referenceId
   * @return void
   */
  private function cancelLoad($metadata, $referenceId): void {
    $load = Load::where('refrence_id', $referenceId)
      ->where('admin_company_detail_id', $metadata['companyId'])
      ->where('created_at', '>', Carbon::now()->subDays(90))
      ->orderBy('id', 'desc')
      ->select('id', 'status')
      ->first();
    if (empty($load)) {
      return;
    }
    $load->status = config('constant.status.load.canceled');
    $load->save();
    try {
      $customersEmail = $metadata['customerEmails'];
      Mail::queue(new LoadCanceledMail($customersEmail, $referenceId));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  /**
   * get booking number
   * @param $transaction
   * @return string|null
   */
  private function getBookingNumber($transaction): ?string {
    $references = collect($transaction['L11'])
      ->where('ReferenceIdentificationQualifier_02', 'SI')
      ->first();
    return $references['ReferenceIdentification_01'] ?? null;
  }

  /**
   * get charge breakdowns
   * @param $transaction
   * @return array|null
   */
  private function getChargeDetails($transaction): ?array {
    $chargeBreakdowns = collect($transaction['L11'])
      ->where('ReferenceIdentificationQualifier_02', '22')
      ->toArray();
    if (count($chargeBreakdowns) == 0) {
      return null;
    }

    $ret = [
      'haulingFee' => 0,
      'fuelSurcharge' => 0,
      'accessorialFees' => [],
    ];
    foreach ($chargeBreakdowns as $chargeBreakdown) {
      if ($chargeBreakdown['Description_03'] == 'DLH') { // hauling fee
        $ret['haulingFee'] = $chargeBreakdown['ReferenceIdentification_01'];
      } elseif ($chargeBreakdown['Description_03'] == 'FSF') { // fuel surcharge
        $ret['fuelSurcharge'] = $chargeBreakdown['ReferenceIdentification_01'];
      } elseif ($chargeBreakdown['Description_03'] == 'SOC') { // accessorial fee
        $ret['accessorialFees'][] = $chargeBreakdown['ReferenceIdentification_01'];
      } else { // Other will treat as accessorial fee
        $ret['accessorialFees'][] = $chargeBreakdown['ReferenceIdentification_01'];
      }
    }
    return $ret;
  }

  private function getStops($rawStops): array {
    $shippers = [];
    $receivers = [];
    foreach ($rawStops as $stop) {
      $stopDateTime = $this->getStopDateTime($stop);
      $type = $stopDateTime['type'];
      $stopOffDetails = $stop['S5'];
      if (empty($type)) {
        $type = $this->parseStopReasonCode($stopOffDetails);
      }
      $stopSequenceNumber = $stopOffDetails['StopSequenceNumber_01'] ?? null;
      $weight = $stopOffDetails['Weight_03'] ?? null;
      $weightUnit = $this->getWeightUnit($stopOffDetails);
      $quantity = $stopOffDetails['NumberofUnitsShipped_05'] ?? null;
      $notes = collect($stop['NTE'])->pluck('Description_02')->implode(', ') ?? null;

      $organization = $stop['N1Loop'];
      if (empty($type)) {
        $type = $this->parseEntityIdentifierCode($organization);
      }

      $name = $organization['N1']['Name_02'] ?? null;
      $city = $organization['N4']['CityName_01'] ?? null;
      $state = $organization['N4']['StateorProvinceCode_02'] ?? null;
      $zipCode = $organization['N4']['PostalCode_03'] ?? null;
      $addressArray = collect($organization['N3'])->first() ?? null;
      $address = $addressArray['AddressInformation_01'] ?? null;
      $contact = $this->getContact($organization);

      $data = [
        'stopSequenceNumber' => $stopSequenceNumber,
        'freightWeight' => $weight,
        'weightUnit' => $weightUnit,
        'freightQty' => $quantity,
        'address' => $address,
        'state' => $state,
        'city' => $city,
        'zipCode' => $zipCode,
        'name' => $name,
        'contactPerson' => $contact['contactPerson'],
        'contactNumber' => $contact['contactNumber'],
        'startDate' => $stopDateTime['startDate'],
        'startTime' =>  $stopDateTime['startTime'],
        'endDate' => $stopDateTime['endDate'],
        'endTime' => $stopDateTime['endTime'],
        'notes' => $notes,
      ];

      if ($type == 'shipper') {
        $shippers[] = $data;
      } elseif ($type == 'receiver') {
        $receivers[] = $data;
      }
    }
    return [
      'shippers' => $shippers,
      'receivers' => $receivers,
    ];
  }

  private function getStopDateTime($stop) {
    $type = null;
    $startDate = null;
    $startTime = null;
    $endDate = null;
    $endTime = null;
    foreach ($stop['G62'] as $dateTime) {
      $dateQualifier = $dateTime['DateQualifier_01'] ?? null;
      $date = $this->formatDate($dateTime['Date_02']);
      $time = $this->formatTime($dateTime['Time_04']);
      switch ($dateQualifier) {
        case 37:
          $type = 'shipper';
          $startDate = $date;
          $startTime = $time;
          break;
        case 38:
          $type = 'shipper';
          $endDate = $date;
          $endTime = $time;
          break;
        case 53:
          $type = 'receiver';
          $startDate = $date;
          $startTime = $time;
          break;
        case 54:
          $type = 'receiver';
          $endDate = $date;
          $endTime = $time;
          break;
      }
    }
    return [
      'type' => $type,
      'startDate' => $startDate,
      'startTime' => $startTime,
      'endDate' => $endDate,
      'endTime' => $endTime,
    ];
  }

  private function formatDate($rawDate) {
    $date = DateTime::createFromFormat('Ymd', $rawDate);
    return $date->format('Y-m-d');
  }

  private function formatTime($rawTime) {
    $time = DateTime::createFromFormat('Hi', $rawTime);
    return $time->format('H:i:s');
  }

  private function parseStopReasonCode($stopOffDetails) {
    $stopReasonCode = $stopOffDetails['StopReasonCode_02'] ?? null;
    if (in_array($stopReasonCode, ['CL', 'PL'])) {
      return 'shipper';
    } else if (in_array($stopReasonCode, ['CU', 'PU'])) {
      return 'receiver';
    }
    return null;
  }

  private function getWeightUnit($stopOffDetails) {
    $weightUnitCode = $stopOffDetails['WeightUnitCode_04'] ?? null;
    switch ($weightUnitCode) {
      case 'E':
        return array_search('tons', config('constant.weight_unit'));
      case 'K':
        return array_search('kg', config('constant.weight_unit'));
      case 'L':
        return array_search('lbs', config('constant.weight_unit'));
    }
    return null;
  }

  private function parseEntityIdentifierCode($organization) {
    $entityIdentifierCode = $organization['N1']['EntityIdentifierCode_01'] ?? null;
    if (in_array($entityIdentifierCode, ['SF', 'SH'])) {
      return 'shipper';
    } else if (in_array($entityIdentifierCode, ['ST', 'CN'])) {
      return 'receiver';
    }
    return null;
  }

  private function getContact($organization) {
    $contactDetails = !empty($organization['G61'])
      ? collect($organization['G61'])
      ->where('CommunicationNumberQualifier_03', 'TE')->first()
      : null;
    $contactPerson =  $contactDetails['Name_02'] ?? null;
    $contactNumber = $contactDetails['CommunicationNumber_04'] ?? null;
    return [
      'contactPerson' => $contactPerson,
      'contactNumber' => $contactNumber,
    ];
  }

  private function getTotalAmount($transaction) {
    $totalAmount = $transaction['L3']['Charge_05'] ?? null;
    if ($totalAmount == null) {
      return null;
    }
    $totalAmount = (float) $totalAmount;
    return number_format($totalAmount / 100, 2, '.', '');
  }

  /**
   * Get Load Shippers Details.
   * @param $load
   * @return array
   * @throws Exception
   */
  public function getShippers($load): array {
    $result = [];
    $shippers = $load['shippers'];
    foreach ($shippers as $shipper) {
      $address = "{$shipper['address']}, {$shipper['city']}, {$shipper['state']} {$shipper['zipCode']}";
      // Get Lat and Long using address from Google Map API
      $geoData = getLatAndLongUsingGoogleMapByAddress($address);
      if ($geoData == null || !$geoData['latitude'] || !$geoData['longitude']) {
        throw new Exception('Shipper address is not valid.');
      } else {
        $result[] = [
          'shipper_name' => $shipper['name'],
          'shipping_date' => $shipper['startDate'],
          'shipping_time' => $shipper['startTime'],
          'shipping_end_date' => $shipper['endDate'],
          'shipping_end_time' => $shipper['endTime'],
          'address' => $shipper['address'],
          'city' => $shipper['city'],
          'state' => $shipper['state'],
          'zip_code' => $shipper['zipCode'],
          'latitude' => $geoData['latitude'],
          'longitude' => $geoData['longitude'],
          'shipper_note' => $this->cutLongStr($shipper['notes']),
          'freight_weight' => $shipper['freightWeight'],
          'freight_qty' => $shipper['freightQty'],
          'weight_unit' => $shipper['weightUnit'],
          'loadboard_stop_sequence_number' => $shipper['stopSequenceNumber'],
        ];
      }
    }
    return $result;
  }

  /**
   * @param $load
   * @return array
   * @throws Exception
   */
  public function getReceivers($load): array {
    $result = [];
    $receivers = $load['receivers'];
    foreach ($receivers as $receiver) {
      $address = "{$receiver['address']}, {$receiver['city']}, {$receiver['state']} {$receiver['zipCode']}";
      /* Get Lat and Long using address from Google Map API */
      $geoData = getLatAndLongUsingGoogleMapByAddress($address);
      if ($geoData == null || !$geoData['latitude'] || !$geoData['longitude']) {
        throw new Exception('Receiver address is not valid.');
      } else {
        $result[] = [
          'receiver_name' => $receiver['name'],
          'delivery_date' => $receiver['startDate'],
          'delivery_time' => $receiver['startTime'],
          'delivery_end_date' => $receiver['endDate'],
          'delivery_end_time' => $receiver['endTime'],
          'address' => $receiver['address'],
          'city' => $receiver['city'],
          'state' => $receiver['state'],
          'zip_code' => $receiver['zipCode'],
          'latitude' => $geoData['latitude'],
          'longitude' => $geoData['longitude'],
          'receiver_note' => $this->cutLongStr($receiver['notes']),
          'loadboard_stop_sequence_number' => $receiver['stopSequenceNumber'],
        ];
      }
    }
    return $result;
  }

  private function cutLongStr($notes) {
    if (!empty($notes) && strlen($notes) > 3999) {
      return substr($notes, 0, 3999);
    }
    return $notes;
  }

  /**
   * get existing load query
   * @param $companyId
   * @param $referenceId
   * @return mixed
   */
  private function getExistingLoad($companyId, $referenceId) {
    return Load::where('refrence_id', $referenceId)
      ->where('admin_company_detail_id', $companyId)
      ->where('created_at', '>', Carbon::now()->subDays(60))
      ->with([
        'loadShippers:id,load_id,address,city,state,zip_code,latitude,longitude,order,loadboard_stop_sequence_number,shipper_name,shipping_date,shipping_time,shipping_end_date,shipping_end_time,shipper_note,freight_weight,freight_qty,weight_unit',
        'loadReceivers:id,load_id,address,city,state,zip_code,latitude,longitude,order,loadboard_stop_sequence_number,receiver_name,delivery_date,delivery_time,delivery_end_date,delivery_end_time,receiver_note'
      ])
      ->orderBy('id', 'desc')->first() ?? null;
  }


  /**
   * Calculate total miles using PC Miler/Google Distance Matrix API.
   * @param $shippers
   * @param $receivers
   * @param $companyId
   * @param $existingLoad
   * @return array|null
   */
  private function calculateTotalMiles(
    $shippers,
    $receivers,
    $companyId,
    $existingLoad = null
  ): ?array {
    $isMileCalculationRequired = false;
    if (!empty($existingLoad)) {
      // Only update when address change of existing load.
      $existingShippers = $existingLoad->loadShippers()->get();
      $existingReceivers = $existingLoad->loadReceivers()->get();
      if (
        count($existingShippers) != count($shippers)
        || count($existingReceivers) != count($receivers)
      ) {
        $isMileCalculationRequired = true;
      } else {
        foreach ($shippers as $i => $newShipper) {
          if (
            $existingShippers[$i]->address != $newShipper['address']
            || $existingShippers[$i]->city != $newShipper['city']
          ) {
            $isMileCalculationRequired = true;
          }
        }
        foreach ($receivers as $i => $newReceiver) {
          if (
            $existingReceivers[$i]->address != $newReceiver['address']
            || $existingReceivers[$i]->city != $newReceiver['city']
          ) {
            $isMileCalculationRequired = true;
          }
        }
      }
    } else {
      $isMileCalculationRequired = true;
    }

    if ((!empty($shippers) && !empty($receivers)) && $isMileCalculationRequired) {
      // $totalMiles = calculateTotalMilesUsingPcMiler($shippers, $receivers, $companyId) ?? null;
      // $totalMiles = calculateTotalMilesUsingGoogleMaps($shippers, $receivers) ?? null;
    }
    return $totalMiles ?? null;
  }

  /**
   * @param $loadPayload
   * @param $totalMiles
   * @param $metadata
   * @param $existingLoad
   * @return array
   */
  private function getLoadData(
    $loadPayload,
    $totalMiles,
    $metadata,
    $existingLoad = null
  ): array {
    $data = [
      'sub_total' => $loadPayload['totalAmount'],
      'discount' => 0, // I am getting discount cannot be null when EDI does not contain total amount.
      'total_amount' => $loadPayload['totalAmount'],
      'refrence_id' => $loadPayload['referenceId'],
      'loadboard_integration' => 1, // For Transplace.
      'loadboard_integration_data' => json_encode([
        'loadId' => $loadPayload['referenceId'],
        'shipmentLookupReferenceName' => 'BOOKING NUMBER',
        'shipmentLookupReferenceValue' => $loadPayload['bookingNumber'],
        'scac' => $loadPayload['scac']
      ])
    ];
    if (!empty($loadPayload['specialInstructions'])) {
      $data['dispatcher_notes'] = $this->cutLongStr($loadPayload['specialInstructions']);
    }
    // Relying on FE calculation, so skip for updating, null for new load.
    // Because we don't calculate google maps miles in BE for now.
    if (!empty($existingLoad)) {
      if ($existingLoad->status == config('constant.status.load.canceled')) {
        $status = config('constant.status.load.open');
        $data = array_merge($data, [
          'status' => $status
        ]);
        $this->sendReissuedMail($metadata['customerEmails'], $loadPayload['referenceId']);
      }
    } else {
      $data['total_miles'] = 0; // TODO: extract miles from EDI if it's always there.
      $data['calculate_using'] = 'google_maps';
      $data['user_id'] = $metadata['userId'];
      $data['admin_company_detail_id'] = $metadata['companyId'];
      $data['customer_id'] = $metadata['customerId'];
    }

    return $data;
  }

  private function sendReissuedMail($customerEmails, $referenceId) {
    try {
      Mail::queue(new LoadReissuedMail($customerEmails, $referenceId));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  /**
   * update existing edi load
   * @param $metadata
   * @param $existingLoad
   * @param $loadPayload
   * @param $loadData
   * @param $shippers
   * @param $receivers
   * @return mixed
   */
  private function updateExistingLoad(
    $metadata,
    $existingLoad,
    $loadPayload,
    $loadData,
    $shippers,
    $receivers
  ) {
    if (
      count($existingLoad->loadShippers) == count($shippers)
      && count($existingLoad->loadReceivers) == count($receivers)
    ) {
      $this->updateLoadShippers($existingLoad, $shippers);
      $this->updateLoadReceivers($existingLoad, $receivers);
    } else {
      // Update stops for false case done in handleLoadStopsCountAreDifferent().
      // TODO in the future: we might need to NOT delete user own created stops.
      $needToResetStops = $this->handleLoadStopsCountAreDifferent(
        $existingLoad,
        $shippers,
        $receivers
      );
      if ($needToResetStops) {
        $this->resetStopsOrder(
          $existingLoad,
          $shippers,
          $receivers
        );
      }
    }

    $existingLoad->fill($loadData)->save();

    $this->updateLoadCharge($metadata, $existingLoad, $loadPayload, true);
    return $existingLoad;
  }

  /*
  Test cases:
    1. No manual stops added, EDI create & update.
    2. No manual stops, EDI shipper/receiver count changed.
    3. EDI create, 1 manual shipper 1 manual receiver added, EDI update.
    4. EDI create, 1 manual shipper 1 manual receiver added, EDI update with stop change.
    Also with order == null and !=.
  */
  private function handleLoadStopsCountAreDifferent(
    $existingLoad,
    $shippers,
    $receivers
  ) {
    $existingEdiShippers = $existingLoad->loadShippers
      ->whereNotNull('loadboard_stop_sequence_number')->count();
    $existingEdiReceivers = $existingLoad->loadReceivers
      ->whereNotNull('loadboard_stop_sequence_number')->count();
    // code after loadboard_stop_sequence_number migration added.
    if (
      count($shippers) != $existingEdiShippers
      || count($receivers) != $existingEdiReceivers
    ) {
      return true;
    }
    // new |EDI shippers| == old |EDI hippers| AND new |EDI receivers| == old |EDI receivers|
    $allEdiShippersExist = $this->allEdiShippersExist($existingLoad, $shippers);
    $allEdiReceiversExist = $this->allEdiReceiversExist($existingLoad, $receivers);
    if (!$allEdiShippersExist || !$allEdiReceiversExist) {
      return true;
    }
    foreach ($shippers as $shipper) {
      $existingLoad->loadShippers
        ->where('loadboard_stop_sequence_number', $shipper['loadboard_stop_sequence_number'])
        ->sortBy('id')
        ->first()
        ->update($shipper);
    }
    foreach ($receivers as $receiver) {
      $existingLoad->loadReceivers
        ->where('loadboard_stop_sequence_number', $receiver['loadboard_stop_sequence_number'])
        ->sortBy('id')
        ->first()
        ->update($receiver);
    }
    return false;
  }

  /**
   * @param $existingLoad
   * @param $shippers
   * @return bool
   */
  private function allEdiShippersExist($existingLoad, $shippers) {
    foreach ($shippers as $shipper) {
      $oldShipper = $existingLoad->loadShippers
        /*->where('shipper_name', $shipper['shipper_name'])
        ->where('address', $shipper['address'])
        ->where('city', $shipper['city'])*/
        ->where('loadboard_stop_sequence_number', $shipper['loadboard_stop_sequence_number'])
        ->sortBy('id')
        ->first();
      if (empty($oldShipper)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param $existingLoad
   * @param $receivers
   * @return bool
   */
  private function allEdiReceiversExist($existingLoad, $receivers) {
    foreach ($receivers as $receiver) {
      $oldReceiver = $existingLoad->loadReceivers
        /*->where('receiver_name', $receiver['receiver_name'])
        ->where('address', $receiver['address'])
        ->where('city', $receiver['city'])*/
        ->where('loadboard_stop_sequence_number', $receiver['loadboard_stop_sequence_number'])
        ->sortBy('id')
        ->first();
      if (empty($oldReceiver)) {
        return false;
      }
    }
    return true;
  }

  /**
   * reset stops order
   * @param $existingLoad
   * @param $shippers
   * @param $receivers
   * @return void
   */
  private function resetStopsOrder(
    $existingLoad,
    &$shippers,
    &$receivers
  ) {
    foreach ($shippers as $i => $shipper) {
      $shippers[$i]['order'] = null;
    }
    foreach ($receivers as $i => $receiver) {
      $receivers[$i]['order'] = null;
    }
    $this->updateLoadShippers($existingLoad, $shippers);
    $this->updateLoadReceivers($existingLoad, $receivers);
  }

  /**
   *  Add or update existing load shippers
   * @param $existingLoad
   * @param $newShippers
   * @return void
   */
  private function updateLoadShippers($existingLoad, $newShippers) {
    return DB::transaction(function () use ($existingLoad, $newShippers) {
      $existingShippers = $existingLoad->loadShippers->sortBy('id');
      foreach ($newShippers as $i => $newShipper) {
        if (!empty($existingShippers[$i])) { // update
          ($existingShippers[$i])->fill($newShipper)->save();
        } else { // add
          $existingLoad->loadShippers()->create($newShipper);
        }
      }
      // delete extra shippers
      foreach ($existingShippers as $j => $shipper) {
        if (empty($newShippers[$j])) {
          $existingShippers[$j]->delete();
        }
      }
    });
  }

  /**
   * Add or update existing load receivers
   * @param $existingLoad
   * @param $newReceivers
   * @return void
   */
  private function updateLoadReceivers($existingLoad, $newReceivers) {
    return DB::transaction(function () use ($existingLoad, $newReceivers) {
      $existingReceivers = $existingLoad->loadReceivers->sortBy('id');
      foreach ($newReceivers as $i => $newReceiver) {
        if (!empty($existingReceivers[$i])) { // update
          ($existingReceivers[$i])->fill($newReceiver)->save();
        } else { // add
          $existingLoad->loadReceivers()->create($newReceiver);
        }
      }
      //delete extra receivers
      foreach ($existingReceivers as $j => $receiver) {
        if (empty($newReceivers[$j])) {
          $existingReceivers[$j]->delete();
        }
      }
    });
  }

  /**
   * Create or update load charge
   * @param $metadata
   * @param $existingLoad
   * @param $loadPayload
   * @param bool $isCreated
   * @return void
   */
  private function updateLoadCharge(
    $metadata,
    $existingLoad,
    $loadPayload,
    $update = false
  ): void {
    if ($update && empty($loadPayload['chargeDetails'])) {
      return;
    }

    $haulingFees = $loadPayload['haulingFee'] ?? 0;
    $fuelCharge = $loadPayload['fuelSurcharge'] ?? 0;
    $accessorialFees = $loadPayload['accessorialFees'] ?? [];
    $newAccessorialFees = [];
    foreach ($accessorialFees as $accessorialFee) {
      $newAccessorialFees[] = [
        "id" => $metadata['accessorialFeeSocId'],
        "rate" => (string)$accessorialFee
      ];
    }

    $data = [
      'hauling_fees' => $haulingFees,
      'fuel_surcharge' => $fuelCharge,
      'hauling_fees_type' => 'flat_fee',
      'fuel_surcharge_type' => 'flat_fee',
      'hauling_fees_rate' => $haulingFees,
      'fuel_surcharge_rate' => $fuelCharge,
      'accessorial_fee' => !empty($newAccessorialFees) ? json_encode($newAccessorialFees) : null
    ];

    if ($update) {
      $existingLoad->loadCharge()->update($data);
    } {
      $existingLoad->loadCharge()->create($data);
    }
  }

  /**
   * crete new load for edi
   * @param $metadata
   * @param $loadPayload
   * @param $loadData
   * @param $shippers
   * @param $receivers
   * @return mixed
   */
  private function createNewLoad(
    $metadata,
    $loadPayload,
    $loadData,
    $shippers,
    $receivers
  ) {
    $loadData['load_unique_id'] = (new LoadService())
      ->getLoadUniqeIdForEmailParser($metadata['companyId']);
    $loadData['status'] = config('constant.status.load.open');
    //get company saved address tagged customer
    $firstShipperName = trim($loadPayload['shippers'][0]['name']) ?? null;
    $taggedCustomer = (new SavedAddressesService())->getSavedAddressTaggedCustomer(
      $firstShipperName,
      $metadata['companyId']
    );

    $loadData['bill_to_code'] = $taggedCustomer['bill_to_code'] ?? null;
    if ($taggedCustomer['customer_id']) {
      $loadData['customer_id'] = $taggedCustomer['customer_id'];
    }
    $load = Load::create($loadData);
    $load->loadShippers()->createMany($shippers);
    $load->loadReceivers()->createMany($receivers);
    $this->updateLoadCharge($metadata, $load, $loadPayload, false);
    return $load;
  }
}
