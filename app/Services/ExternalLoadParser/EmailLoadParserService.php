<?php

namespace App\Services\ExternalLoadParser;

use App\Models\Load;
use App\Services\LoadService;
use App\Services\SavedAddressesService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailLoadParser\EmailLoadParserNotification;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Models\LoadShipper;
use App\Models\LoadReceiver;
use App\Models\AccessorialFee;
use Carbon\Carbon;

class EmailLoadParserService {

  private function betterAddress($originalAddress) {
    $originalArray = explode(" ", $originalAddress);
    $noEmailArray = array_map(function ($value) {
      if (!preg_match('/@/', $value)) {
        return $value;
      }
    }, $originalArray);
    $noEmailAddress = implode(' ', $noEmailArray);

    $newStringArr2 = preg_split('/[A-Z]{2} [0-9]{5}/', $noEmailAddress); //split string in array with matched pattern like 2 cap char and 5 digits ex. AB 12345
    $removeLastPart = end($newStringArr2); //matched pattern after string part to remove
    if (!empty($removeLastPart)) {
      $noEmailAddress = str_replace($removeLastPart, '', $noEmailAddress);
    }

    return preg_replace('/[^a-z0-9- ]/i', '', $noEmailAddress);;
  }

  /**
   * Add New Tender Load.
   * @param $request
   * @return mixed
   */
  public function addTenderLoad($request): array {
    $loadBroker = $request['loadBroker'];
    $referenceId = $loadBroker == 'GE' ? $request['load']['pickupNumber'] : $request['load']['loadNumber'];
    $referenceId = (string) $referenceId;

    $companyId = config('user_customization.GE.companyId');
    $customerId = config('user_customization.GE.customerId');
    $userId = config('user_customization.GE.userId');

    // //cancel load if load specialUpdate is cancel
    if (!empty($request['load']['specialUpdate']) && $request['load']['specialUpdate'] == 'cancel') {
      return $this->cancelLoad($referenceId);
    }

    $getValidatedDataLoadShippers = $this->getValidatedTenderLoadShippersData($request->load);
    $getValidatedDataLoadReceivers = $this->getValidatedTenderLoadReceiversData($request->load);
    $getValidatedDataLoadCharge = $this->getValidatedTenderLoadChargeData($request->load);

    // calculate miles from shippers/receivers
    $calculatedTotalMiles = calculateTotalMilesUsingPcMiler($getValidatedDataLoadShippers, $getValidatedDataLoadReceivers, $companyId);
    $fromDate = Carbon::now()->subDays(60);
    return DB::transaction(function () use ($request, $referenceId, $customerId, $companyId, $userId, $fromDate, $calculatedTotalMiles, $getValidatedDataLoadCharge, $getValidatedDataLoadShippers, $getValidatedDataLoadReceivers) {
      //check existing load
      $load = Load::where('refrence_id', $referenceId)->where('admin_company_detail_id', $companyId)->where('updated_at', '>', $fromDate)->orderBy('id', 'desc')->first();
      if (!empty($load)) {
        // update load
        // There was a bug. When receiver date is n/a, we end up saving i_end_date == '2030-12-31'. 
        $specialDeliveryDate = '2030-12-31';
        if (in_array($specialDeliveryDate, array_column($getValidatedDataLoadReceivers, 'delivery_date'))) {
          $firstShippingDate = $getValidatedDataLoadShippers[0]['shipping_date'];
          $getValidatedDataLoadReceivers = array_map(function ($value) use ($firstShippingDate, $specialDeliveryDate) {
            $value['delivery_date'] = ($value['delivery_date'] == $specialDeliveryDate) ? $firstShippingDate : $value['delivery_date'];
            return $value;
          }, $getValidatedDataLoadReceivers);
        }

        $getValidatedData = $this->getValidatedTenderLoadUpdatedData($request['load'], $calculatedTotalMiles, $request['loadBroker']);
        $getValidatedData['i_start_date'] = min(array_column($getValidatedDataLoadShippers, 'shipping_date'));
        $getValidatedData['i_end_date'] = max(array_column($getValidatedDataLoadReceivers, 'delivery_date'));
        $load->fill($getValidatedData)->save();
        $load->loadCharge()->update($getValidatedDataLoadCharge);
        $this->updateTenderLoadShippers($load, $getValidatedDataLoadShippers);
        $this->updateTenderLoadReceivers($load, $getValidatedDataLoadReceivers);
        //delete existing rate docs
        // Not needed anymore.
        // $load->rateConfirmations()->delete();
      } else {
        $tagId = $this->checkPvAddressForTagId($getValidatedDataLoadShippers, $getValidatedDataLoadReceivers);
        // create load
        $getValidatedData = $this->getValidatedTenderLoadData($request['load'], $calculatedTotalMiles, $request['loadBroker'], $customerId, $companyId, $userId, $tagId);
        $getValidatedData['status'] = config('constant.status.load.open');
        $getValidatedData['third_party_carrier_rate_con_type'] = array_search(
          'otr',
          config('constant.load.rateConType')
        );
        //check receiver delivery date and if it's with special 2030-12-31 then make it 1st shipper's shipping date as delivery date
        $dispatcherNotes = null;
        $specialDeliveryDate = '2030-12-31';
        if (in_array($specialDeliveryDate, array_column($getValidatedDataLoadReceivers, 'delivery_date'))) {
          $firstShippingDate = $getValidatedDataLoadShippers[0]['shipping_date'];
          $dispatcherNotes = 'Delivery date: N/A'; // set load dispatcher notes for null delivery date alert
          $getValidatedDataLoadReceivers = array_map(function ($value) use ($firstShippingDate, $specialDeliveryDate) {
            $value['delivery_date'] = ($value['delivery_date'] == $specialDeliveryDate) ? $firstShippingDate : $value['delivery_date'];
            return $value;
          }, $getValidatedDataLoadReceivers);
        }
        $getValidatedData['dispatcher_notes'] = $dispatcherNotes;
        $getValidatedData['i_start_date'] = min(array_column($getValidatedDataLoadShippers, 'shipping_date'));
        $getValidatedData['i_end_date'] = max(array_column($getValidatedDataLoadReceivers, 'delivery_date'));
        $load = Load::create($getValidatedData);
        $load->loadCharge()->create($getValidatedDataLoadCharge);
        $load->loadShippers()->createMany($getValidatedDataLoadShippers);
        $load->loadReceivers()->createMany($getValidatedDataLoadReceivers);
      }
      // add rate confirmation doc
      if (!empty($request->load['filename'])) {
        $load->rateConfirmations()->create([
          'file_name' => $request->load['filename'],
          'file_name_alias' => $request->load['filename'],
        ]);
      }
      return ['loadNumber' => $load->load_unique_id];
    });
  }

  private function checkPvAddressForTagId($shippers, $receivers) {
    foreach ($shippers as $stop) {
      if (
        strtolower($stop['city']) == strtolower('PERRYVILLE')
        && strtolower($stop['state']) == strtolower('MD')
      ) {
        return config('user_customization.GE.pvTagId');
      }
    }
    foreach ($receivers as $stop) {
      if (
        strtolower($stop['city']) == strtolower('PERRYVILLE')
        && strtolower($stop['state']) == strtolower('MD')
      ) {
        return config('user_customization.GE.pvTagId');
      }
    }
    return null;
  }

  /**
   * @param $load
   * @param int $totalMiles
   * @param $type
   * @return array
   */
  private function getValidatedTenderLoadData($load, $totalMiles, $type, $customerId, $companyId, $userId, $tagId = null): array {
    if ($totalMiles != null && is_array($totalMiles)) {
      $total_miles = $totalMiles['miles'];
      $calculate_using = $totalMiles['type'];
    } else {
      $total_miles = $load['totalMiles'] ?? 0;
      $calculate_using = 'manual';
    }
    //get company saved address tagged customer
    $firstShipperName = trim($load['shippers'][0]['pickupName']) ?? null;
    $taggedCustomer = (new SavedAddressesService())->getSavedAddressTaggedCustomer($firstShipperName, $companyId);
    $billToCode = $taggedCustomer['bill_to_code'] ?? null;
    if ($taggedCustomer['customer_id']) {
      $customerId = $taggedCustomer['customer_id'];
    }
    if (empty($tagId) && !empty($load['tag']) && $load['tag'] == "PV") {
      $tagId = config('user_customization.GE.pvTagId');
    }
    return [
      'user_id' => $userId,
      'admin_company_detail_id' => $companyId,
      'customer_id' => $customerId,
      'tag_id' => $tagId,
      'load_unique_id' => (new LoadService())->getLoadUniqeIdForEmailParser($companyId, $tagId),
      'refrence_id' => $type == 'GE' ? $load['pickupNumber'] : $load['loadNumber'],
      'total_miles' => $total_miles,
      'calculate_using' => $calculate_using,
      'sub_total' => $load['totalCost'] ?? 0,
      'discount' => 0,
      'total_amount' => $load['totalCost'] ?? 0,
      'loadboard_integration' => ($type == 'Transplace') ? 1 : null,
      'loadboard_integration_data' => ($type == 'Transplace') ? json_encode(['loadId' => $load['loadNumber'], 'shipmentLookupReferenceName' => 'BOL NUMBER', 'shipmentLookupReferenceValue' => $load['bolNumber'], 'scac' => $load['scac']]) : null,
      'bill_to_code' => $billToCode ?? null,
    ];
  }

  /**
   * Calculate Load charge.
   * @param $load
   * @return array
   */
  private function getValidatedTenderLoadChargeData($load): array {
    /* compare total cost to line-haul and fuel charge */
    $lineHaul = $load['lineHaul'] ?? 0;
    $fuelCharge = $load['fuelCharge'] ?? 0;
    $totalCost = $load['totalCost'] ?? 0;
    $stopCharge = !empty($load['stopCharge']) ? $load['stopCharge'] : 0;
    $spottingCharge = !empty($load['spottingCharge']) ? $load['spottingCharge'] : 0;
    // To do the total calculation by ourself.
    $tempTotal = $lineHaul + $fuelCharge;
    $accessorialFees = [];

    if (request('loadBroker') == 'GE') {
      $tempTotal = $tempTotal + $stopCharge + $spottingCharge;
    }

    // email total cost can be wrong...
    // if ((string)$tempTotal == (string)$totalCost) {
    if ($stopCharge) {
      $accessorialFee = AccessorialFee::where('id', config('user_customization.GE.stopChargeId'))
        ->where('admin_company_detail_id', config('user_customization.GE.companyId'))->first();
      if (!empty($accessorialFee)) {
        $accessorialFees[] = ["id" => $accessorialFee->id, "rate" => (string)$stopCharge];
      } else {
        $lineHaul += $stopCharge;
      }
    }
    if ($spottingCharge) {
      $accessorialFee = AccessorialFee::where('id', config('user_customization.GE.spottingChargeId'))
        ->where('admin_company_detail_id', config('user_customization.GE.companyId'))->first();
      if (!empty($accessorialFee)) {
        $accessorialFees[] = ["id" => $accessorialFee->id, "rate" => (string)$spottingCharge];
      } else {
        $lineHaul += $spottingCharge;
      }
    }
    /*} else { // $tempTotal != $totalCost
      $lineHaul = $totalCost;
      $fuelCharge = 0;
    }*/

    return [
      'hauling_fees' => $lineHaul,
      'fuel_surcharge' => $fuelCharge,
      'hauling_fees_type' => 'flat_fee',
      'fuel_surcharge_type' => 'flat_fee',
      'hauling_fees_rate' => $lineHaul,
      'fuel_surcharge_rate' => $fuelCharge,
      'accessorial_fee' => !empty($accessorialFees) ? json_encode($accessorialFees) : null
    ];
  }

  private function getValidatedTenderLoadShippersData($load): array {
    $result = [];
    $shippers = $load['shippers'];
    foreach ($shippers as $i => $shipper) {

      if (
        $shipper['pickupAddress'] == '1230 HEIL QUAKER BLVD'
        && $shipper['pickupName'] == 'SDS-3QW MASHBURN DELIVERY SERVICE MASHBURN DELIVERY SERVICE'
      ) {
        $shipper['pickupAddress'] = '1230 HEIL QUAKER BLVD LA VERGNE TN 37086-3515';
      } else if (
        $shipper['pickupAddress'] == '5414 SHEPHERDSVILLE RD 5414 SHEPHERDSVILLE RD'
        && $shipper['pickupName'] == 'SDS-54H MID INC MID, INC'
      ) {
        $shipper['pickupAddress'] = '5414 SHEPHERDSVILLE RD LOUISVILLE KY 40228';
      } else if (
        $shipper['pickupAddress'] == '1600 LEXINGTON AVE SUITE 346'
        && $shipper['pickupName'] == 'SDS-89Q M & E WAREHOUSING M AND E WAREHOUSING, INC'
      ) {
        $shipper['pickupAddress'] = '1600 LEXINGTON AVE SUITE 346 ROCHESTER NY 14606';
      }

      /* Get Lat and Long using address from Google Map API */
      $geoData = getLatAndLongUsingGoogleMapByAddress($this->betterAddress($shipper['pickupAddress']));
      if ($geoData == null) {
        throw new Exception('Shipper address is not valid.');
      } else {
        if (!$geoData['latitude'] || !$geoData['longitude']) {
          throw new Exception('Shipper address is not valid.');
        }
        $data = [
          'shipper_name' => $shipper['pickupName'],
          'shipping_date' => date('Y-m-d', strtotime($shipper['pickupDate'])),
          'shipping_time' => !empty($shipper['pickupTime']) ? date('H:i:s', strtotime($shipper['pickupTime'])) : null,
          'shipping_end_time' => !empty($shipper['pickupEndTime']) ? date('H:i:s', strtotime($shipper['pickupEndTime'])) : null,
          'address' => $geoData['address'],
          'city' => $geoData['city'],
          'state' => $geoData['state'],
          'zip_code' => $geoData['zipcode'],
          'latitude' => $geoData['latitude'],
          'longitude' => $geoData['longitude']
        ];
        if (!empty($load['totalWeight']) && $i == 0) {
          $data['freight_weight'] = $load['totalWeight'];
        }
        if (!empty($load['totalUnitCount']) && $i == 0) {
          $data['freight_qty'] = $load['totalUnitCount'];
        }
        if (!empty($load['totalWeightUnit']) && $load['totalWeightUnit'] == 'LB' && $i == 0) {
          $data['weight_unit'] = array_search('lbs', config('constant.weight_unit'));
        }
        $result[] = $data;
      }
    }
    return $result;
  }

  private function getValidatedTenderLoadReceiversData($load): array {
    $result = [];
    $receivers = $load['receivers'];
    foreach ($receivers as $receiver) {
      /* Get Lat and Long using address from Google Map API */

      if (
        $receiver['deliveryAddress'] == '3310 DEEPWATER TERMINAL DR.'
        && $receiver['deliveryName'] == 'SDS-1MV MID, INC. MID, INC.'
      ) {
        $receiver['deliveryAddress'] = '3310 DEEPWATER TERMINAL DR. RICHMOND, VA 23234-1828';
      } else if (
        $receiver['deliveryAddress'] == '6240 COLUMBIA PARK ROAD'
        && $receiver['deliveryName'] == 'SDS-1FE-FORWARD AIR FINAL MILE LLC FORWARD AIR FINAL MILE LLC'
      ) {
        $receiver['deliveryAddress'] = '6240 COLUMBIA PARK ROAD HYATTSVILLE MD 20785-3224';
      } else if (
        $receiver['deliveryAddress'] == 'LINN STAR TRANSFER INC 306 HAZELWOOD LOGISTIC CENTER DR CALL B4 DEL 800-856-6508'
        && $receiver['deliveryName'] == 'SDS-6LM FORWARD AIR FINAL MILE LLC'
      ) {
        $receiver['deliveryAddress'] = '306 HAZELWOOD LOGISTIC CENTER DR HAZELWOOD MO 63042-2420';
        $receiver['deliveryName'] = 'SDS-6LM FORWARD AIR FINAL MILE LLC LINN STAR TRANSFER INC';
      } else if (
        $receiver['deliveryAddress'] == 'Shipper Delivery ID     PO      Unit Count      Weight'
        && $receiver['deliveryName'] == '3870 NEW GETWELL RD MEMPHIS TN 38118-6066'
      ) {
        $receiver['deliveryAddress'] = '3870 NEW GETWELL RD MEMPHIS TN 38118-6066';
        $receiver['deliveryName'] = 'WOODSON & BOZEMAN, INC.';
      } else if (
        !empty($receiver['deliveryLoadType'])
        && $receiver['deliveryLoadType'] == 'HD SUPPLY ,GROVEPORT,OH,USA'
        && $receiver['deliveryName'] == 'GROVEPORT OH 43125-1093 Shipper Delivery ID     PO      Unit Count      Weight'
      ) {
        $receiver['deliveryLoadType'] = null;
        $receiver['deliveryName'] = 'HD SUPPLY ,GROVEPORT,OH,USA';
        $receiver['deliveryAddress'] = '6200 COMMERCE CENTER DR GROVEPORT OH 43125';
      } else if (
        $receiver['deliveryAddress'] == '186 USYK DR SCHUYLER NY 13340'
      ) {
        $receiver['deliveryAddress'] = 'The Home Depot Distribution Center, 186 Usyk Dr, Town of Schuyler, NY 13340';
      } else if (
        $receiver['deliveryAddress'] == 'SPIRIT DELIVERY AND DISTRIBUTION SERVICES INC 121 DWIGH SYRACUSE NY 13209'
      ) {
        $receiver['deliveryAddress'] = '121 DWIGHT PARK CIRCLE SYRACUSE NY 13209';
      } else if (
        $receiver['deliveryAddress'] == 'M AND E WAREHOUSING, INC 1600 LEXINGTON AVE SUITE 346'
      ) {
        $receiver['deliveryAddress'] = '1600 LEXINGTON AVE SUITE 346 ROCHESTER NY 14606';
      } else if (
        $receiver['deliveryAddress'] == '3023 E. KEMPER ROAD'
        && $receiver['deliveryName'] == 'SDS-5ZR RIVERSTONE LOGISTICS, LLC RIVERSTONE LOGISTICS, LLC'
      ) {
        $receiver['deliveryAddress'] = '3023 E. KEMPER ROAD SHARONVILLE OH 45241';
      }
      /* else if (
        $receiver['deliveryAddress'] == ''
      ) {
        $receiver['deliveryAddress'] = '';
      } else if (
        $receiver['deliveryAddress'] == ''
      ) {
        $receiver['deliveryAddress'] = '';
      }*/

      $geoData = getLatAndLongUsingGoogleMapByAddress($this->betterAddress($receiver['deliveryAddress']));
      if ($geoData == null) {
        throw new Exception('Receiver address is not valid.');
      } else {
        if (!$geoData['latitude'] || !$geoData['longitude']) {
          throw new Exception('Receiver address is not valid.');
        }
        //Added “2030-12-31“ here if payload does not have delivery date
        $deliveryDate = !empty($receiver['deliveryDate']) ? $receiver['deliveryDate'] : '2030-12-31';
        $data = [
          'receiver_name' => $receiver['deliveryName'],
          'delivery_date' => date('Y-m-d', strtotime($deliveryDate)),
          'delivery_time' => !empty($receiver['deliveryTime']) ? date('H:i:s', strtotime($receiver['deliveryTime'])) : null,
          'delivery_end_time' => !empty($receiver['deliveryEndTime']) ? date('H:i:s', strtotime($receiver['deliveryEndTime'])) : null,
          'address' => $geoData['address'],
          'city' => $geoData['city'],
          'state' => $geoData['state'],
          'zip_code' => $geoData['zipcode'],
          'latitude' => $geoData['latitude'],
          'longitude' => $geoData['longitude']
        ];
        $receiverNotes = '';
        if (!empty($receiver['deliveryLoadType'])) {
          $receiverNotes = $receiver['deliveryLoadType'];
        }
        if (!empty($receiver['specialInstructions'])) {
          $receiverNotes .= ' ' . $receiver['specialInstructions'];
        }
        if (!empty($receiver['deliveryInstructions'])) {
          $receiverNotes .= ' ' . $receiver['deliveryInstructions'];
        }
        if (!empty($receiverNotes)) {
          $data['receiver_note'] = trim($receiverNotes);
        }
        $result[] = $data;
      }
    }
    return $result;
  }

  /**
   * Send Email For Tender Load Error Occurrence To zbu@ezpapel.com.
   * @param $errors
   * @return object|string
   */
  public function sendMailForTenderLoadError($errors) {
    $sendToEmailList = ['zbu@ezpapel.com'];
    return Mail::queue(new EmailLoadParserNotification(
      $errors,
      $sendToEmailList,
      request('load')
    ));
  }

  /**
   * Validate load updated request data
   * @param $load
   * @param $totalMiles
   * @param $type
   * @return array
   */
  private function getValidatedTenderLoadUpdatedData($load, $totalMiles, $type): array {
    $data = [];
    if ($totalMiles != null && is_array($totalMiles)) {
      $data['total_miles'] = $totalMiles['miles'];
      $data['calculate_using'] = $totalMiles['type'];
    }
    if (!empty($load['totalCost'])) {
      $data['sub_total'] = $load['totalCost'];
      $data['discount'] = 0;
      $data['total_amount'] = $load['totalCost'];
    }
    if ($type == 'Transplace') {
      $data['loadboard_integration'] = 1;
      $data['loadboard_integration_data'] = json_encode(['loadId' => (string)$load['loadNumber'], 'shipmentLookupReferenceName' => 'BOL NUMBER', 'shipmentLookupReferenceValue' => $load['bolNumber'], 'scac' => $load['scac']]);
    }
    return $data;
  }
  /**
   *  Add or update load shippers
   * @param $load
   * @param $newShippers
   * @return array
   */
  private function updateTenderLoadShippers($load, $newShippers): array {
    return DB::transaction(function () use ($load, $newShippers) {
      $result = [];
      $existingShippers = LoadShipper::where('load_id', $load->id)->orderBy('order', 'asc')->get();
      foreach ($newShippers as $i => $newShipper) {
        if (!empty($existingShippers[$i])) {
          //update shipper
          ($existingShippers[$i])->fill($newShipper)->save();
        } else {
          //add shipper
          $load->loadShippers()->create($newShipper);
        }
      }
      //delete extra shippers
      foreach ($existingShippers as $j => $shipper) {
        if (empty($newShippers[$j])) {
          $existingShippers[$j]->delete();
        }
      }
      return $result;
    });
  }

  /**
   * Add or update load receivers
   * @param $load
   * @param $newReceivers
   * @return array
   */
  private function updateTenderLoadReceivers($load, $newReceivers): array {
    return DB::transaction(function () use ($load, $newReceivers) {
      $result = [];
      $existingReceivers = LoadReceiver::where('load_id', $load->id)->orderBy('order', 'asc')->get();
      foreach ($newReceivers as $i => $newReceiver) {
        if (!empty($existingReceivers[$i])) {
          //ignore special delivery date to update
          if ($newReceiver['delivery_date'] == '2030-12-31') {
            unset($newReceiver['delivery_date']);
          }
          //update receiver
          ($existingReceivers[$i])->fill($newReceiver)->save();
        } else {
          //add receiver
          $load->loadReceivers()->create($newReceiver);
        }
      }
      //delete extra receivers
      foreach ($existingReceivers as $j => $receiver) {
        if (empty($newReceivers[$j])) {
          $existingReceivers[$j]->delete();
        }
      }
      return $result;
    });
  }

  /**
   * Cancel load
   * @param $referenceId
   * @return array
   */
  public function cancelLoad($referenceId) {
    // $customerId = config('user_customization.GE.customerId');
    $companyId = config('user_customization.GE.companyId');
    $fromDate = Carbon::now()->subDays(60);
    $load = Load::where('refrence_id', $referenceId)->where('admin_company_detail_id', $companyId)->where('updated_at', '>', $fromDate)->orderBy('id', 'desc')->select('id', 'status')->first();
    if (empty($load)) {
      return [];
    }
    $load->status = config('constant.status.load.canceled');
    $load->save();
    return [];
  }
}
