<?php

namespace App\Services\Stedi;

use App\Mail\Automation\AutomationMail;
use App\Mail\Stedi\ChangeStopNumberNotificationMail;
use App\Mail\Stedi\LoadCanceledMail;
use App\Mail\Stedi\LoadReissuedMail;
use App\Models\AccessorialFee;
use App\Models\Load;
use App\Models\LoadReceiver;
use App\Models\LoadShipper;
use App\Services\LoadService;
use App\Services\SavedAddressesService;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;


class StediLoadParserService {
  /**
   * Handle Webhook of EDI to JSON.
   * Create Load or Update Load through Stedi webhook response.
   * @throws Exception
   */
  public function handleStediWebhook() {
    if (!is_null(request('load'))) {
      $companyId = config('user_customization.GE.companyId');
      $customerId = config('user_customization.GE.customerId');
      $userId = config('user_customization.GE.userId');
      $loadBroker = 'Transplace';

      $simplifiedLoad = $this->getSimplifiedLoadDetail(request('load'), $companyId);
      // Cancel a load.
      if (empty($simplifiedLoad)) {
        return [];
      }
      $getValidatedDataLoadShippers = $this->getValidatedTenderLoadShippersData($simplifiedLoad);
      $getValidatedDataLoadReceivers = $this->getValidatedTenderLoadReceiversData($simplifiedLoad);

      $referenceId = (string)$simplifiedLoad['referenceId'] ?? null;

      $fromDate = Carbon::now()->subDays(60);
      return DB::transaction(function () use ($simplifiedLoad, $referenceId, $customerId, $companyId, $userId, $fromDate, $loadBroker, $getValidatedDataLoadShippers, $getValidatedDataLoadReceivers) {
        //check existing load
        $load = Load::where('refrence_id', $referenceId)
          ->where('admin_company_detail_id', $companyId)
          ->where('updated_at', '>', $fromDate)
          ->with(['loadShippers', 'loadReceivers'])
          ->orderBy('id', 'desc')->first() ?? null;
        $calculatedTotalMiles = $this->calculateTotalMiles($getValidatedDataLoadShippers, $getValidatedDataLoadReceivers, $companyId, $load);
        $getValidatedData = $this->getValidatedTenderLoadData($simplifiedLoad, $calculatedTotalMiles, $loadBroker, $customerId, $companyId, $userId, $load);

        $getValidatedData['i_start_date'] = min(array_column($getValidatedDataLoadShippers, 'shipping_date'));
        $getValidatedData['i_end_date'] = max(array_column($getValidatedDataLoadReceivers, 'delivery_date'));
        if (!empty($load)) {
          /* update load */
          unset($getValidatedData['user_id']);
          unset($getValidatedData['admin_company_detail_id']);
          unset($getValidatedData['customer_id']);

          if (!empty($load->company_internal_reference) && !empty($getValidatedData['company_internal_reference'])) {
            // split by comma, replace whatever before comma
            $internalReferenceArray = explode(',', $load->company_internal_reference);
            $internalReferenceArray[0] = $getValidatedData['company_internal_reference'];
            $getValidatedData['company_internal_reference'] = implode(',', $internalReferenceArray);
          }

          $needToResetStops = true;
          if (
            count($load->loadShippers) != count($getValidatedDataLoadShippers)
            || count($load->loadReceivers) != count($getValidatedDataLoadReceivers)
          ) {
            $needToResetStops = $this->handleLoadStopsCountAreDifferent(
              $load,
              $getValidatedDataLoadShippers,
              $getValidatedDataLoadReceivers
            );
            // The code has some problems. But since only GE is using this code,
            // I don't want to modify it now.
            // But if both counts remain unchanged, shall not reset order.
            if ($needToResetStops) {
              foreach ($getValidatedDataLoadShippers as $i => $shippers) {
                $getValidatedDataLoadShippers[$i]['order'] = null;
              }
              foreach ($getValidatedDataLoadReceivers as $i => $receivers) {
                $getValidatedDataLoadReceivers[$i]['order'] = null;
              }
            }
          } // end of if stop count change.

          if ($needToResetStops) {
            $this->updateTenderLoadShippers($load, $getValidatedDataLoadShippers);
            $this->updateTenderLoadReceivers($load, $getValidatedDataLoadReceivers);
          } else {
            // Because EDI stops are wrong now, so cannot trust miles based on
            // EDI stops.
            unset($getValidatedData['total_miles']);
            unset($getValidatedData['calculate_using']);
          }
          $load->fill($getValidatedData)->save();

          if ($this->isUpdateLoadAmount($simplifiedLoad, $load)) {
            $getValidatedDataLoadCharge =
              $this->getValidatedTenderLoadChargeData($simplifiedLoad, $load);
            if (!is_null($getValidatedDataLoadCharge)) {
              $load->loadCharge()->update($getValidatedDataLoadCharge);
            }
          }
        } else {
          /* create load */
          $getValidatedData['load_unique_id'] = (new LoadService())->getLoadUniqeIdForEmailParser($companyId);
          $getValidatedData['status'] = config('constant.status.load.open');
          $getValidatedData['third_party_carrier_rate_con_type'] = array_search(
            'otr',
            config('constant.load.rateConType')
          );
          //get company saved address tagged customer
          $firstShipperName = trim($simplifiedLoad['shippers'][0]['name']) ?? null;
          $taggedCustomer = (new SavedAddressesService())->getSavedAddressTaggedCustomer($firstShipperName, $companyId);

          $getValidatedData['bill_to_code'] = $taggedCustomer['bill_to_code'] ?? null;
          if ($taggedCustomer['customer_id']) {
            $getValidatedData['customer_id'] = $taggedCustomer['customer_id'];
          }
          $load = Load::create($getValidatedData);
          $load->loadShippers()->createMany($getValidatedDataLoadShippers);
          $load->loadReceivers()->createMany($getValidatedDataLoadReceivers);
          $getValidatedDataLoadCharge = $this->getValidatedTenderLoadChargeData($simplifiedLoad);
          $load->loadCharge()->create($getValidatedDataLoadCharge);
        }
        return ['loadNumber' => $load->load_unique_id];
      });
    } else {
      throw new Exception("Stedi Webhook: Something wrong in request payload. Request Payload:" . json_encode(request()->all()));
    }
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
    $load,
    $getValidatedDataLoadShippers,
    $getValidatedDataLoadReceivers
  ) {
    $newStopDetails = [];
    if (count($load->loadShippers) != count($getValidatedDataLoadShippers)) {
      $newStopDetails['oldShippers'] = $load->loadShippers;
      $newStopDetails['newShippers'] = $getValidatedDataLoadShippers;
      $newStopDetails['oldShippersCount'] = count($load->loadShippers);
      $newStopDetails['newShippersCount'] = count($getValidatedDataLoadShippers);
    }
    if (count($load->loadReceivers) != count($getValidatedDataLoadReceivers)) {
      $newStopDetails['oldReceivers'] = $load->loadReceivers;
      $newStopDetails['newReceivers'] = $getValidatedDataLoadReceivers;
      $newStopDetails['oldReceiversCount'] = count($load->loadReceivers);
      $newStopDetails['newReceiversCount'] = count($getValidatedDataLoadReceivers);
    }

    $existingEdiShippers = $load->loadShippers
      ->whereNotNull('loadboard_stop_sequence_number')->count();
    $existingEdiReceivers = $load->loadReceivers
      ->whereNotNull('loadboard_stop_sequence_number')->count();
    if ($existingEdiShippers > 0 && $existingEdiReceivers > 0) {
      // code after loadboard_stop_sequence_number migration added.
      if (
        count($getValidatedDataLoadShippers) != $existingEdiShippers
        || count($getValidatedDataLoadReceivers) != $existingEdiReceivers
      ) {
        return true;
      }
      // new |EDI shippers| == old |EDI hippers| AND new |EDI receivers| == old |EDI receivers|

      $areAllEdiShippersExist = $this->areAllEdiShippersExist(
        $getValidatedDataLoadShippers,
        $load
      );
      $areAllEdiReceiversExist = $this->areAllEdiReceiversExist(
        $getValidatedDataLoadReceivers,
        $load
      );
      if (!$areAllEdiShippersExist || !$areAllEdiReceiversExist) {
        return true;
      }
      foreach ($getValidatedDataLoadShippers as $shipper) {
        $load->loadShippers
          ->where('loadboard_stop_sequence_number', $shipper['loadboard_stop_sequence_number'])
          ->sortBy('id')
          ->first()
          ->update($shipper);
      }
      foreach ($getValidatedDataLoadReceivers as $receiver) {
        $load->loadReceivers
          ->where('loadboard_stop_sequence_number', $receiver['loadboard_stop_sequence_number'])
          ->sortBy('id')
          ->first()
          ->update($receiver);
      }
      return false;
    } else { // before loadboard_stop_sequence_number migration added.
      // If new |shippers| > old |shippers| OR new |receivers| > old |receivers|, then just
      // use existing code on main, but reset all shipper and receiver’s order value to null.
      if (
        count($getValidatedDataLoadShippers) > count($load->loadShippers)
        || count($getValidatedDataLoadReceivers) > count($load->loadReceivers)
      ) {
        return true;
      }
      // new count <= old count for both shipper and receiver but cannot both be equal count
      // ELSE If new |shippers| < old |shippers| or new |receivers| < old |receivers|
      // If old shipper’s order != null, then for each new shipper, check
      // if it already exists in the old shipper by comparing name and
      // address and city (those should be exact string match, and
      // upper/lower case should also be the same) (so 3 columns)
      // (when there are more than 1 match, then please choose the one
      // with the oldest id).
      $allNewShippersExistInOldShippers = false;
      $allNewReceiversExistInOldReceivers = false;
      //if (count($getValidatedDataLoadShippers) < count($load->loadShippers)) {
      if ($load->loadShippers->whereNull('order')->count() == 0) {
        $allNewShippersExistInOldShippers = $this->allNewShippersExistInOldShippers(
          $getValidatedDataLoadShippers,
          $load
        );
      }
      // If old shipper’s order == null, then just use existing code
      // on main, but reset all shipper and receiver’s order value to null.
      //}
      //if (count($getValidatedDataLoadReceivers) < count($load->loadReceivers)) {
      if ($load->loadReceivers->whereNull('order')->count() == 0) {
        $allNewReceiversExistInOldReceivers = $this->allNewReceiversExistInOldReceivers(
          $getValidatedDataLoadReceivers,
          $load
        );
      }
      //}
      if (!$allNewShippersExistInOldShippers || !$allNewReceiversExistInOldReceivers) {
        return true;
      }
      foreach ($getValidatedDataLoadShippers as $shipper) {
        $load->loadShippers->where('shipper_name', $shipper['shipper_name'])
          ->where('address', $shipper['address'])
          ->where('city', $shipper['city'])
          ->sortBy('id')
          ->first()
          ->update($shipper);
      }
      foreach ($getValidatedDataLoadReceivers as $receiver) {
        $load->loadReceivers->where('receiver_name', $receiver['receiver_name'])
          ->where('address', $receiver['address'])
          ->where('city', $receiver['city'])
          ->sortBy('id')
          ->first()
          ->update($receiver);
      }

      $newStopDetails['referenceId'] = $load->refrence_id;
      try {
        Mail::queue(new ChangeStopNumberNotificationMail(
          config('user_customization.GE.customersEmail'),
          $newStopDetails
        ));
      } catch (Exception $exception) {
        Log::error($exception);
      }
      return false;
    }

    return true;
  }

  /*
  If all new shippers exist in old shippers, then just update them while keeping
  the old order value, and do not remove any old shippers.
  TODO: need to check if all old shipper/receiver were created
  via EDI.

  If NOT all new shippers exist in old shippers, then just use existing code on
  main (so delete whatever old shippers not needed), but reset all shipper and
  receiver’s order value to null.
  */
  // TODO: Below 2 functions can be deleted in a month.
  /**
   * @param $getValidatedDataLoadShippers
   * @param $load
   * @return bool
   */
  private function allNewShippersExistInOldShippers($getValidatedDataLoadShippers, $load) {
    foreach ($getValidatedDataLoadShippers as $shipper) {
      $oldShipper = $load->loadShippers->where('shipper_name', $shipper['shipper_name'])
        ->where('address', $shipper['address'])
        ->where('city', $shipper['city'])
        ->sortBy('id')
        ->first();
      if (empty($oldShipper)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param $getValidatedDataLoadReceivers
   * @param $load
   * @return bool
   */
  private function allNewReceiversExistInOldReceivers($getValidatedDataLoadReceivers, $load) {
    foreach ($getValidatedDataLoadReceivers as $receiver) {
      $oldReceiver = $load->loadReceivers->where('receiver_name', $receiver['receiver_name'])
        ->where('address', $receiver['address'])
        ->where('city', $receiver['city'])
        ->sortBy('id')
        ->first();
      if (empty($oldReceiver)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param $getValidatedDataLoadShippers
   * @param $load
   * @return bool
   */
  private function areAllEdiShippersExist($getValidatedDataLoadShippers, $load) {
    foreach ($getValidatedDataLoadShippers as $shipper) {
      $oldShipper = $load->loadShippers
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
   * @param $getValidatedDataLoadReceivers
   * @param $load
   * @return bool
   */
  private function areAllEdiReceiversExist($getValidatedDataLoadReceivers, $load) {
    foreach ($getValidatedDataLoadReceivers as $receiver) {
      $oldReceiver = $load->loadReceivers
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
   * Calculate total miles using PC Miler/Google Distance Matrix API.
   * @param $shippers
   * @param $receivers
   * @param $existingLoad
   * @param $companyId
   * @return array|null
   */
  private function calculateTotalMiles($shippers, $receivers, $companyId, $existingLoad = null): ?array {
    $isMileCalculationRequired = false;
    if (!empty($existingLoad)) {
      /* Only update when address change of existing load. */
      $existingShippers = $existingLoad->loadShippers()->get();
      $existingReceivers = $existingLoad->loadReceivers()->get();
      if (count($existingShippers) != count($shippers) || count($existingReceivers) != count($receivers)) {
        $isMileCalculationRequired = true;
      } else {
        foreach ($shippers as $i => $newShipper) {
          if (!empty($existingShippers[$i])) {
            if (
              $existingShippers[$i]->address != $newShipper['address']
              || $existingShippers[$i]->city != $newShipper['city']
            ) {
              $isMileCalculationRequired = true;
            }
          }
        }
        foreach ($receivers as $i => $newReceiver) {
          if (!empty($existingReceivers[$i])) {
            if (
              $existingReceivers[$i]->address != $newReceiver['address']
              || $existingReceivers[$i]->city != $newReceiver['city']
            ) {
              $isMileCalculationRequired = true;
            }
          }
        }
      }
    } else {
      $isMileCalculationRequired = true;
    }

    if ((!empty($shippers) && !empty($receivers)) && $isMileCalculationRequired) {
      /* Calculate Total Miles using PC Miler. */
      $calculatedTotalMiles = calculateTotalMilesUsingPcMiler($shippers, $receivers, $companyId) ?? null;
      /*if (empty($calculatedTotalMiles)) {
        WRONG CODE, cannot use.
        $calculatedTotalMiles = calculateDistanceAndDurationUsingGoogleMapApi($shippers, $receivers) ?? null;
      }*/
    }
    return $calculatedTotalMiles ?? null;
  }

  /**
   * Calculate Load charge.
   * @param $load
   * @param null $existingLoad
   * @return array|null
   */
  private function getValidatedTenderLoadChargeData($load, $existingLoad = null): ?array {
    $haulingFees = $load['haullingFee'] ?? 0;
    $fuelCharge = $load['fuelSurcharge'] ?? 0;
    $totalCost = $load['totalAmount'] ?? 0;
    $accessorialFees = $load['accessorialFees'] ?? [];

    if (!empty($existingLoad)) {
      /* Load charge condition while updating existing load. */
      /*if (is_null($load['totalAmount'])) {
        return null;
      }*/

      /*if ($load['totalAmount'] == $existingLoad->total_amount) {
        return null;
      }

      if ($load['totalAmount'] != 0 && $existingLoad->total_amount == 0) {
        $haulingFees = $load['totalAmount'];
      }*/
    }

    /* To do the total calculation by ourselves. */
    // $tempTotal = $haulingFees + $fuelCharge;
    $newAccessorialFees = [];

    /*if (!empty($accessorialFees)) {
      $tempTotal = $tempTotal + array_sum($accessorialFees);
    }*/

    //if ((string)$tempTotal == (string)$totalCost) {
    if (!empty($accessorialFees)) {
      foreach ($accessorialFees as $accessorialFee) {
        $newAccessorialFees[] = ["id" => config('user_customization.GE.accessorialFeeSocId'), "rate" => (string)$accessorialFee];
      }
    }
    /*} else { // $tempTotal != $totalCost
      $haulingFees = $totalCost;
      $fuelCharge = 0;
    }*/

    return [
      'hauling_fees' => $haulingFees,
      'fuel_surcharge' => $fuelCharge,
      'hauling_fees_type' => 'flat_fee',
      'fuel_surcharge_type' => 'flat_fee',
      'hauling_fees_rate' => $haulingFees,
      'fuel_surcharge_rate' => $fuelCharge,
      'accessorial_fee' => !empty($newAccessorialFees) ? json_encode($newAccessorialFees) : null
    ];
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
      $existingShippers = LoadShipper::where('load_id', $load->id)->orderBy('id', 'asc')->get();
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
      $existingReceivers = LoadReceiver::where('load_id', $load->id)->orderBy('id', 'asc')->get();
      foreach ($newReceivers as $i => $newReceiver) {
        if (!empty($existingReceivers[$i])) {
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
   * @param $load
   * @param $totalMiles
   * @param $type
   * @param $customerId
   * @param $companyId
   * @param $userId
   * @return array
   */
  private function getValidatedTenderLoadData($load, $totalMiles, $type, $customerId, $companyId, $userId, $existingLoad = null): array {
    $data = [];
    $dispatcherNotes = null;
    if (!empty($load['specialInstructions'])) {
      $dispatcherNotes = $load['specialInstructions'];
    }
    if ($totalMiles != null && is_array($totalMiles)) {
      $total_miles = $totalMiles['miles'];
      $calculate_using = $totalMiles['type'];
    } else {
      if (!empty($existingLoad)) {
        if (is_null($totalMiles)) {
          $total_miles = $existingLoad->total_miles;
          $calculate_using = $existingLoad->calculate_using;
        }
        if ($existingLoad->status == config('constant.status.load.canceled')) {
          $status = config('constant.status.load.open');
          $data = array_merge($data, [
            'status' => $status
          ]);
          try {
            Mail::queue(new LoadReissuedMail(
              config('user_customization.GE.customersEmail'),
              $load['referenceId']
            ));
          } catch (Exception $exception) {
            Log::error($exception);
          }
        }
      } else {
        $total_miles = $load['totalMiles'] ?? 0;
        $calculate_using = 'manual';
      }
    }

    // I am getting discount cannot be null when EDI does not contain total amount.
    if ($this->isUpdateLoadAmount($load, $existingLoad)) {
      $data = array_merge($data, [
        'sub_total' => $load['totalAmount'],
        'discount' => 0,
        'total_amount' => $load['totalAmount']
      ]);
    }

    if ($dispatcherNotes) {
      $data['dispatcher_notes'] = $this->cutLongStr($dispatcherNotes);
    }
    $data = array_merge($data, [
      'loadboard_integration' => 1,
      'loadboard_integration_data' => json_encode([
        'loadId' => $load['referenceId'],
        'shipmentLookupReferenceName' => 'BOOKING NUMBER',
        'shipmentLookupReferenceValue' => (string)$load['bookingNumber'],
        'scac' => $load['scac']
      ])
    ]);

    return array_merge($data, [
      'user_id' => $userId,
      'admin_company_detail_id' => $companyId,
      'customer_id' => $customerId,
      // 'load_unique_id' => $load['loadUniqueId'],
      'refrence_id' => $load['referenceId'],
      'company_internal_reference' => $load['aoNumber'],
      'total_miles' => $total_miles,
      'calculate_using' => $calculate_using,
    ]);
  }

  /**
   * Check for update load amount from EDI
   * @param $load
   * @param $existingLoad
   * @return bool
   */
  private function isUpdateLoadAmount($load, $existingLoad): bool {
    if (empty($existingLoad)) {
      return true;
    }
    return ($existingLoad->total_amount ?? 0) <= 1.5 * ($load['totalAmount'] ?? 0);
  }

  /**
   * Get Load Shippers Details.
   * @param $load
   * @return array
   * @throws Exception
   */
  private function getValidatedTenderLoadShippersData($load): array {
    $result = [];
    $shippers = $load['shippers'];
    foreach ($shippers as $shipper) {
      $address = "{$shipper['address']}, {$shipper['city']}, {$shipper['state']} {$shipper['zipCode']}";
      /* Get Lat and Long using address from Google Map API */
      $geoData = getLatAndLongUsingGoogleMapByAddress($address);
      if ($geoData == null) {
        throw new Exception('Shipper address is not valid.');
      } else {
        if (!$geoData['latitude'] || !$geoData['longitude']) {
          throw new Exception('Shipper address is not valid.');
        }
        $result[] = [
          'shipper_name' => $shipper['name'],
          'shipping_date' => date('Y-m-d', strtotime($shipper['startDate'])),
          'shipping_time' => !empty($shipper['startTime']) ? date('H:i:s', strtotime($shipper['startTime'])) : null,
          'shipping_end_date' => date('Y-m-d', strtotime($shipper['endDate'])) ?? null,
          'shipping_end_time' => !empty($shipper['endTime']) ? date('H:i:s', strtotime($shipper['endTime'])) : null,
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
  private function getValidatedTenderLoadReceiversData($load): array {
    $result = [];
    $receivers = $load['receivers'];
    foreach ($receivers as $receiver) {
      $address = "{$receiver['address']}, {$receiver['city']}, {$receiver['state']} {$receiver['zipCode']}";
      /* Get Lat and Long using address from Google Map API */
      $geoData = getLatAndLongUsingGoogleMapByAddress($address);
      if ($geoData == null) {
        throw new Exception('Receiver address is not valid.');
      } else {
        if (!$geoData['latitude'] || !$geoData['longitude']) {
          throw new Exception('Receiver address is not valid.');
        }
        $result[] = [
          'receiver_name' => $receiver['name'],
          'delivery_date' => date('Y-m-d', strtotime($receiver['startDate'])),
          'delivery_time' => !empty($receiver['startTime']) ? date('H:i:s', strtotime($receiver['startTime'])) : null,
          'delivery_end_date' => date('Y-m-d', strtotime($receiver['endDate'])) ?? null,
          'delivery_end_time' => !empty($receiver['endTime']) ? date('H:i:s', strtotime($receiver['endTime'])) : null,
          'address' => $receiver['address'],
          'city' => $receiver['city'],
          'state' => $receiver['state'],
          'zip_code' => $receiver['zipCode'],
          'latitude' => $geoData['latitude'],
          'longitude' => $geoData['longitude'],
          'receiver_note' => $this->cutLongStr($receiver['deliveryInstructions']),
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
   * Get Simplified Load Detail.
   * @param $loads
   * @param $companyId
   * @return array
   */
  private function getSimplifiedLoadDetail($loads, $companyId): array {
    $load = collect($loads)->first();
    $heading = $load['heading'];
    $scac = $heading['beginning_segment_for_shipment_information_transaction']['standard_carrier_alpha_code'];
    $referenceId = $heading['beginning_segment_for_shipment_information_transaction']['shipment_identification_number'] ?? '';
    $noteSpecialInstruction = collect($heading['note_special_instruction'])->pluck('description')->implode(', ') ?? '';

    /* Get All Customers */
    /*$customers = [];
    $customerOrganizations = $heading['organization'] ?? [];
    foreach ($customerOrganizations as $organization) {
      $customers[] = [
        'name' => $organization['name_N1']['name'] ?? '',
        'code' => $organization['name_N1']['entity_identifier_code']
      ];
    }*/

    //TODO: Should set load to canceled on after Payal's PR merged.
    // Should handle the case when load is already deleted by users.
    if (!empty($heading['set_purpose']['transaction_set_purpose_code']) && $heading['set_purpose']['transaction_set_purpose_code'] == '01') {
      /* send email to customers email when purpose code is 01. It means load is canceled. */
      $companyId = config('user_customization.GE.companyId');
      $fromDate = Carbon::now()->subDays(60);
      $load = Load::where('refrence_id', $referenceId)->where('admin_company_detail_id', $companyId)->where('updated_at', '>', $fromDate)->orderBy('id', 'desc')->select('id', 'status')->first();
      if (!empty($load)) {
        $load->status = config('constant.status.load.canceled');
        $load->save();
      }
      try {
        Mail::queue(new LoadCanceledMail(config('user_customization.GE.customersEmail'), $referenceId));
      } catch (Exception $exception) {
        Log::error($exception);
      }
      return [];
    }

    /* Booking Number */
    $businessInstructionAndReferenceNumber = !empty($heading['business_instructions_and_reference_number']) ? collect($heading['business_instructions_and_reference_number'])->where('reference_identification_qualifier', 'SI')->first() : null;
    $bookingNumber = $businessInstructionAndReferenceNumber['reference_identification'] ?? null;

    /* Load Charge Breakdown */
    $chargeBreakDowns = !empty($heading['business_instructions_and_reference_number']) ?
      collect($heading['business_instructions_and_reference_number'])->where('reference_identification_qualifier', '22')->toArray() : null;

    $haullingFee = null;
    $fuelSurcharge = null;
    $accessorialFees = null;
    foreach ($chargeBreakDowns as $chargeBreakDown) {
      if ($chargeBreakDown['description'] == 'DLH') {
        /* DLH price as hauling fee */
        $haullingFee = $chargeBreakDown['reference_identification'];
      } elseif ($chargeBreakDown['description'] == 'FSF') {
        /* FSF as fuel surcharge */
        $fuelSurcharge = $chargeBreakDown['reference_identification'];
      } elseif ($chargeBreakDown['description'] == 'SOC') {
        /* SOC as accessorial fee */
        $accessorialFees[] = $chargeBreakDown['reference_identification'];
      } else {
        /* Other will treat as accessorial fee */
        $accessorialFees[] = $chargeBreakDown['reference_identification'];
      }
    }

    // For PDCM, the AO number is what they see as the "BOL number" on their portal and what drivers have.
    $aoNumber = null;
    $shippers = [];
    $receivers = [];
    $stops = $load['detail']['stop_off_details'] ?? [];
    foreach ($stops as $stop) {
      if (empty($aoNumber) && !empty($stop['business_instructions_and_reference_number_L11'])) {
        foreach ($stop['business_instructions_and_reference_number_L11'] as $ref) {
          if ($ref['reference_identification_qualifier_02'] == 'AO') {
            $aoNumber = $ref['reference_identification_01'] ?? null;
            break;
          }
        }
      }

      $isShipper = false;
      $isReceiver = false;
      foreach ($stop['date_time'] as $dateTime) {
        $dateQualifier = $dateTime['date_qualifier'] ?? null;
        switch ($dateQualifier) {
          case 37:
            $isShipper = true;
            $startDate = $dateTime['date'];
            $startTime = $dateTime['time'];
            break;
          case 38:
            $isShipper = true;
            $endDate = $dateTime['date'];
            $endTime = $dateTime['time'];
            break;
          case 53:
            $isReceiver = true;
            $startDate = $dateTime['date'];
            $startTime = $dateTime['time'];
            break;
          case 54:
            $isReceiver = true;
            $endDate = $dateTime['date'];
            $endTime = $dateTime['time'];
            break;
        }
      }

      $stopOffDetails = $stop['stop_off_details'];
      if (!$isShipper && !$isReceiver) {
        $stopReasonCode = $stopOffDetails['stop_reason_code'] ?? '';
        if ($stopReasonCode == 'CL' || $stopReasonCode == 'PL') {
          /* This is a shipper */
          $isShipper = true;
        }
        if ($stopReasonCode == 'CU' || $stopReasonCode == 'PU') {
          /* This is a Receiver */
          $isReceiver = true;
        }
      }

      $organization = collect($stop['organization'])->first();
      if (!$isShipper && !$isReceiver) {
        $entityIdentifierCode = $organization['name']['entity_identifier_code'] ?? '';
        if ($entityIdentifierCode == 'SF' || $entityIdentifierCode == 'SH') {
          $isShipper = true;
        }
        if ($entityIdentifierCode == 'ST' || $entityIdentifierCode == 'CN') {
          $isReceiver = true;
        }
      }

      $weight = $stopOffDetails['weight'] ?? null;
      $weightUnitCode = $stopOffDetails['weight_unit_code'] ?? null;
      if (!empty($weightUnitCode)) {
        switch ($weightUnitCode) {
          case 'E':
            $weightUnit = array_search('tons', config('constant.weight_unit'));
            break;
          case 'K':
            //            $weightUnit = array_search('tons', config('constant.weight_unit'));
            break;
          case 'L':
            $weightUnit = array_search('lbs', config('constant.weight_unit'));
            break;
        }
      }

      $stopSequenceNumber = $stopOffDetails['stop_sequence_number'] ?? null;
      $quantity = $stopOffDetails['number_of_units_shipped'] ?? null;
      $notes = collect($stop['note_special_instruction'])->pluck('description')->implode(', ') ?? null;
      $name = $organization['name']['name'] ?? null;
      $city = $organization['city'] ?? null;
      $state = $organization['state'] ?? null;
      $zipCode = $organization['postal_code'] ?? null;
      $addressInformation = collect($organization['address_information'])->first() ?? null;
      $address = $addressInformation['address_information_01'] ?? null;
      $contactDetails = !empty($organization['contact']) ? collect($organization['contact'])->where('communication_number_qualifier', 'TE')->first() : null;
      $contactNumber = !empty($contactDetails) ? $contactDetails['communication_number'] : null;
      $contactPerson = !empty($contactDetails) ? $contactDetails['name'] : null;

      $data = [
        'freightWeight' => $weight,
        'weightUnit' => $weightUnit ?? null,
        'freightQty' => $quantity,
        'address' => $address,
        'state' => $state,
        'city' => $city,
        'zipCode' => $zipCode,
        'name' => $name,
        'contactNumber' => $contactNumber,
        'contactPerson' => $contactPerson,
        'startDate' => $startDate ?? null,
        'startTime' => $startTime ?? null,
        'endDate' => $endDate ?? null,
        'endTime' => $endTime ?? null,
        'stopSequenceNumber' => $stopSequenceNumber,
      ];

      if ($isShipper) {
        $data = array_merge($data, ['notes' => $notes]);
        $shippers[] = $data;
      } elseif ($isReceiver) {
        $data = array_merge($data, ['deliveryInstructions' => $notes]);
        $receivers[] = $data;
      }
    }

    $totalWeightAndCharges = $load['summary']['total_weight_and_charges'] ?? [];
    if (!empty($totalWeightAndCharges)) {
      $totalAmount = $totalWeightAndCharges['charge'] ?? null;
      $totalWeight = $totalWeightAndCharges['weight'] ?? null;
    }

    return [
      'scac' => $scac,
      'referenceId' => $referenceId,
      'aoNumber' => $aoNumber,
      //'loadUniqueId' => (new LoadService())->getLoadUniqeIdForEmailParser($companyId),
      'bookingNumber' => $bookingNumber,
      'specialInstructions' => $noteSpecialInstruction,
      'totalWeight' => $totalWeight ?? null,
      'totalAmount' => $totalAmount ?? 0,
      'haullingFee' => $haullingFee,
      'fuelSurcharge' => $fuelSurcharge,
      'accessorialFees' => $accessorialFees,
      'shippers' => $shippers,
      'receivers' => $receivers,
      // 'customers' => $customers
    ];
  }
}
