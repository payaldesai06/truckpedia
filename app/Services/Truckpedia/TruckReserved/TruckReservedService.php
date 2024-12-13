<?php

namespace App\Services\Truckpedia\TruckReserved;

use App\Mail\Truckpedia\TruckReserved\ReserveRequestFromCarrierWebsiteMail;
use App\Mail\Truckpedia\TruckReserved\TruckReserved;
use App\Models\AdminCompanyDetail;
use App\Models\Customer;
use App\Models\Load;
use App\Models\User;
use App\Services\LoadService;
use App\Models\loadImage;
use App\Models\Quote\QuoteResponse;
use App\Services\Chat\ChatService;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class TruckReservedService {

  /**
   * Reserve a truck.
   * @param $request
   * @return mixed
   */
  public function reserveTruck($request) {
    return DB::transaction(function () use ($request) {
      $companies = $this->getCarrierAndShipperBrokerCompany($request->companyId);
      $carrierCompany = $companies->carrierCompany;
      $shipperBrokerCompany = $companies->shipperBrokerCompany;

      //prepare data to create the load for shipper/broker
      $getLoadValidatedData = $this->getShipperBrokerLoadValidatedData($request, $shipperBrokerCompany);
      $getLoadShippersValidatedData = $this->getLoadShippersValidatedData($request);
      $getLoadReceiverValidatedData = $this->getLoadReceiverValidatedData($request);
      $getValidatedDataLoadCharge = $this->getValidatedDataShipperBrokerLoadCharge();
      $getValidatedData3rdPartyLoadCharge = $this->getValidatedData3rdPartyLoadCharge($request);

      $getLoadValidatedData['third_party_carrier_as_customer_id'] =
        $this->getCarrierAsCustomerId($shipperBrokerCompany, $carrierCompany);

      //create a load for shipper/broker
      $load = Load::create($getLoadValidatedData);
      $load->loadShippers()->createMany($getLoadShippersValidatedData);
      $load->loadReceivers()->createMany($getLoadReceiverValidatedData);
      $load->loadCharge()->create($getValidatedDataLoadCharge);
      $load->thirdPartyCarrierCharge()->create($getValidatedData3rdPartyLoadCharge);

      // Create a load for carrier.
      $getLoadValidatedData = $this->getCarrierLoadValidatedData($request, $carrierCompany, $load);
      $getValidatedDataLoadCharge = $this->getValidatedDataCarrierLoadCharge($request);

      $getLoadValidatedData['customer_id'] = $this->getShipperBrokerAsCustomerId(
        $shipperBrokerCompany,
        $carrierCompany
      );

      $carrierLoad = Load::create($getLoadValidatedData);
      $carrierLoad->loadShippers()->createMany($getLoadShippersValidatedData);
      $carrierLoad->loadReceivers()->createMany($getLoadReceiverValidatedData);
      // Shipper/broker's 3rd party load charge == carrier load charge.
      $carrierLoad->loadCharge()->create($getValidatedDataLoadCharge);

      //save shipper/broker load's synced_load_id as carrier load's id
      $load->synced_load_id = $carrierLoad->id;
      $load->save();

      // Create Chat/Loads/Users
      // Turn this on later.
      // ChatService::createChatLoad($load);
      $this->sendReservedTruckEmailNotificationToCarrier(
        $request,
        $shipperBrokerCompany,
        $load,
        $carrierLoad,
        $carrierCompany
      );
      return $load;
    });
  }

  /**
   * Get Load Validated Data.
   * @param $request
   * @return array
   * @throws Exception
   */
  private function getShipperBrokerLoadValidatedData($request, $shipperBrokerCompany): array {
    return [
      'load_unique_id' => (new LoadService())->loadUniqeId()['load_unique_id'] ?? null,
      'i_start_date' => min(array_column($request->pickupDetails, 'date')),
      'i_end_date' => max(array_column($request->deliveryDetails, 'date')),
      'user_id' => $shipperBrokerCompany->user_id,
      'admin_company_detail_id' => $shipperBrokerCompany->id,
      'total_miles' => $request->additionalInformation['totalMiles'] ?? null,
      'calculate_using' => $request->additionalInformation['calculateUsing'] ?? null,
      'dispatcher_notes' => $request->additionalInformation['itemDescription'] ?? null,
      'status' => config('constant.status.load.open'),
      'sub_total' => 0,
      'discount' => 0,
      'total_amount' => 0,
      'third_party_carrier_sub_total' => $request->estimatedPrice ?? 0,
      'third_party_carrier_discount' => 0,
      'third_party_carrier_total_amount' => $request->estimatedPrice ?? 0,
    ];
  }

  private function getCarrierLoadValidatedData($request, $carrierCompany, $shipperBrokerLoad): array {
    return [
      'load_unique_id' => (new LoadService())
        ->getLoadUniqeIdForEmailParser($carrierCompany->id) ?? null,
      'i_start_date' => min(array_column($request->pickupDetails, 'date')),
      'i_end_date' => max(array_column($request->deliveryDetails, 'date')),
      'user_id' => $carrierCompany->user_id,
      'admin_company_detail_id' => $carrierCompany->id,
      'total_miles' => $request->additionalInformation['totalMiles'] ?? null,
      'calculate_using' => $request->additionalInformation['calculateUsing'] ?? null,
      'dispatcher_notes' => $request->additionalInformation['itemDescription'] ?? null,
      'status' => config('constant.status.load.open'),
      'sub_total' => $request->estimatedPrice ?? 0,
      'discount' => 0,
      'total_amount' => $request->estimatedPrice ?? 0,
      //save carrier load's synced_load_id as shipper/broker load's id
      'synced_load_id' => $shipperBrokerLoad->id,
      //save carrier load's refrence_id as shipper/broker load's load_unique_id
      'refrence_id' => $shipperBrokerLoad->load_unique_id,
    ];
  }

  /**
   * Get Shippers validated data.
   * @param $request
   * @return array
   */
  private function getLoadShippersValidatedData($request): array {
    $loadShippers = [];
    foreach ($request->pickupDetails as $shipper) {
      $loadShippers[] = [
        'shipper_name' => $shipper['name'] ?? null,
        'address' => $shipper['address'] ?? null,
        'city' => $shipper['city'] ?? null,
        'state' => $shipper['state'] ?? null,
        'zip_code' => $shipper['zipCode'] ?? null,
        'latitude' => $shipper['latitude'] ?? null,
        'longitude' => $shipper['longitude'] ?? null,
        'contact_person' => $shipper['contactPerson'] ?? null,
        'contact_number' => $shipper['phone'] ?? null,
        'shipper_reference' => $shipper['reference'] ?? null,
        'shipping_date' => $shipper['date'] ?? null,
        'shipping_time' => $shipper['startTime'] ?? null,
        'shipping_end_time' => $shipper['endTime'] ?? null,
        'shipper_note' => !empty($shipper['email']) ? trim("{$shipper['specialInstruction']} Contact Email-{$shipper['email']}") : $shipper['specialInstruction']
      ];
    }
    return $loadShippers;
  }

  /**
   * Get Receivers Validated data.
   * @param $request
   * @return array
   */
  private function getLoadReceiverValidatedData($request): array {
    $loadReceivers = [];
    foreach ($request->deliveryDetails as $receiver) {
      $loadReceivers[] = [
        'receiver_name' => $receiver['name'] ?? null,
        'address' => $receiver['address'] ?? null,
        'city' => $receiver['city'] ?? null,
        'state' => $receiver['state'] ?? null,
        'zip_code' => $receiver['zipCode'] ?? null,
        'latitude' => $receiver['latitude'] ?? null,
        'longitude' => $receiver['longitude'] ?? null,
        'contact_person' => $receiver['contactPerson'] ?? null,
        'contact_number' => $receiver['phone'] ?? null,
        'receiver_reference' => $receiver['reference'] ?? null,
        'delivery_date' => $receiver['date'] ?? null,
        'delivery_time' => $receiver['startTime'] ?? null,
        'delivery_end_time' => $receiver['endTime'] ?? null,
        'receiver_note' => !empty($receiver['email']) ? trim("{$receiver['specialInstruction']} Contact Email-{$receiver['email']}") : $receiver['specialInstruction']
      ];
    }
    return $loadReceivers;
  }

  /**
   * Get Validate Load Charge.
   * NOTE:: we are not using this right now, We are creating a raw of load charges with all null values.
   * @return array
   */
  private function getValidatedDataShipperBrokerLoadCharge(): array {
    return [
      'hauling_fees' => 0,
      'fuel_surcharge' => null,
      'hauling_fees_rate' => 0,
      'fuel_surcharge_rate' => null,
      'hauling_fees_type' => config('constant.hauling_fees_type.flat_fee'),
      'fuel_surcharge_type' => null,
      'accessorial_fee' => null,
      'accessorial_deduction' => null,
    ];
  }

  private function getValidatedDataCarrierLoadCharge($request): array {
    return [
      'hauling_fees' => $request->estimatedPrice ?? 0,
      'fuel_surcharge' =>  null,
      'hauling_fees_rate' => $request->estimatedPrice ?? 0,
      'fuel_surcharge_rate' => null,
      'hauling_fees_type' => config('constant.hauling_fees_type.flat_fee') ?? null,
      'fuel_surcharge_type' => null,
      // TODO: this won't really work cause we are creating loads for two different companies.
      'accessorial_fee' => null,
      'accessorial_deduction' => null,
    ];
  }

  private function getValidatedData3rdPartyLoadCharge($request): array {
    return [
      'hauling_fee' => $request->estimatedPrice ?? 0,
      'fuel_surcharge' =>  null,
      'hauling_fee_rate' => $request->estimatedPrice ?? 0,
      'fuel_surcharge_rate' => null,
      'hauling_fee_type' => array_search('flat_fee', config('constant.haulingFeeType')) ?? null,
      'fuel_surcharge_type' => null,
      // TODO: this won't really work cause we are creating loads for two different companies.
      'accessorial_fee' => null,
      'accessorial_deduction' => null,
    ];
  }

  private function sendReservedTruckEmailNotificationToCarrier(
    $request,
    $shipperBrokerCompany,
    $load,
    $carrierLoad,
    $carrierCompany
  ) {
    try {
      $customerCcEmails = Customer::where(
        'id',
        $load->third_party_carrier_as_customer_id
      )->select('cc_emails')->pluck('cc_emails')->first() ?? null;

      $mailDetails = [
        'carrierEmail' =>  $carrierCompany->email ?? '',
        'billingCcEmails' => $customerCcEmails,
        'carrierCompanyName' => $carrierCompany->business_name ?? '',
        'reservingCompany' => $shipperBrokerCompany ?? null,
        'estimatedPrice' => $request->estimatedPrice ?? null,
        'totalMiles' => $load->total_miles ?? null,
        'shipper' => $load->loadShippers->first() ?? null,
        'receiver' => $load->loadReceivers->last() ?? null,
        // 'carrierLoadNumber' =>  $carrierLoad->load_unique_id ?? '',
        'carrierLoadReference' => $carrierLoad->refrence_id ?? '',
      ];
      Mail::queue(new TruckReserved($mailDetails));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  private function getValidatedDataForCustomer(
    AdminCompanyDetail $customer,
    $type,
    $ownerCompany
  ): array {
    return [
      'company_name' => $customer->business_name,
      'company_id' => $ownerCompany->id,
      'synced_company_id' => $customer->id,
      'type' => $type,
      'status' => config('constant.status.customer.active'),
      'user_id' => $ownerCompany->user_id,
      'payment_terms_day' => 30,
      'address' => $customer->address ?? "",
      'state' => $customer->state ?? "",
      'city' => $customer->city ?? "",
      'zip_code' => $customer->zipcode ?? "",
      'phone_number' => $customer->phone_number ?? "",
      'email' => $customer->email ?? "",
      'cc_emails' => $customer->billing_cc_emails ?? null,
      'billing_address' => $customer->address ?? "",
      'billing_state' => $customer->state ?? "",
      'billing_city' => $customer->city ?? "",
      'billing_zip_code' => $customer->zipcode ?? "",
      'billing_phone_number' => $customer->phone_number ?? "",
      'billing_email' => $customer->email ?? "",
      'billing_cc_emails' => $customer->billing_cc_emails ?? null,
    ];
  }

  /**
   * Reserve By Load
   * @param $request
   * @return mixed
   */
  public function reserveByLoad($request) {
    return DB::transaction(function () use ($request) {
      $shipperBrokerLoad = Load::with([
        'loadShippers',
        'loadReceivers',
        'thirdPartyCarrierCharge'
      ])
        ->select([
          'id',
          'admin_company_detail_id',
          'total_miles',
          'calculate_using',
          'load_unique_id',
          'user_id',
          'dispatcher_id',
          'quote_id',
          'quote_response_id',
        ])
        ->find($request->loadId);

      $companies = $this->getCarrierAndShipperBrokerCompany($request->carrierCompanyId);
      $carrierCompany = $companies->carrierCompany;
      $shipperBrokerCompany = $companies->shipperBrokerCompany;

      $getLoadValidatedData = $this->getReserveByLoadValidatedLoadData(
        $request,
        $carrierCompany,
        $shipperBrokerLoad
      );
      $getLoadShippersValidatedData = $this->getReserveByLoadShippersValidateData(
        $shipperBrokerLoad->loadShippers
      );
      $getLoadReceiverValidatedData = $this->getReserveByLoadReceiversValidateData(
        $shipperBrokerLoad->loadReceivers
      );

      $getValidatedDataLoadCharge = $this->getValidatedDataCarrierLoadCharge($request);
      $getThirdPartyLoadCharge = $this->getValidatedData3rdPartyLoadCharge($request);
      $getLoadValidatedData['customer_id'] = $this->getShipperBrokerAsCustomerId(
        $shipperBrokerCompany,
        $carrierCompany
      );

      $carrierLoad = Load::create($getLoadValidatedData);
      $carrierLoad->loadShippers()->createMany($getLoadShippersValidatedData);
      $carrierLoad->loadReceivers()->createMany($getLoadReceiverValidatedData);
      // Shipper/broker's 3rd party load charge == carrier load charge.
      $carrierLoad->loadCharge()->create($getValidatedDataLoadCharge);

      if (!empty($shipperBrokerLoad->thirdPartyCarrierCharge)) {
        $shipperBrokerLoad->thirdPartyCarrierCharge()->update($getThirdPartyLoadCharge);
      } else {
        $shipperBrokerLoad->thirdPartyCarrierCharge()->create($getThirdPartyLoadCharge);
      }

      $shipperBrokerLoad->third_party_carrier_as_customer_id =
        $this->getCarrierAsCustomerId($shipperBrokerCompany, $carrierCompany);
      //save shipper/broker load's synced_load_id as carrier load's id
      $shipperBrokerLoad->synced_load_id = $carrierLoad->id;
      $shipperBrokerLoad->save();

      // Create Chat/Loads/Users
      // Turn this on later.
      // ChatService::createChatLoad($shipperBrokerLoad);
      $this->sendReservedTruckEmailNotificationToCarrier(
        $request,
        $shipperBrokerCompany,
        $shipperBrokerLoad,
        $carrierLoad,
        $carrierCompany,
      );
    });
  }

  /**
   * Create A Load For Carrier
   * @param $load
   * @return void
   * @throws Exception
   */
  // TODO: we need to refactor code so there is only ONE create load function, not 3.
  public function createCarrierLoad($load) {
    return DB::transaction(function () use ($load) {
      request()->merge(['estimatedPrice' => request('thirdPartyCarrier.totalAmount')]);

      $companies = $this->getCarrierAndShipperBrokerCompany(
        $load->thirdPartyCarrier->synced_company_id
      );

      $carrierCompany = $companies->carrierCompany;
      $shipperBrokerCompany = $companies->shipperBrokerCompany;

      $getLoadValidatedData = $this->getReserveByLoadValidatedLoadData(
        request(),
        $carrierCompany,
        $load
      );
      $getLoadShippersValidatedData = $this->getReserveByLoadShippersValidateData(
        $load->loadShippers
      );
      $getLoadReceiverValidatedData = $this->getReserveByLoadReceiversValidateData(
        $load->loadReceivers
      );
      $getValidatedDataLoadCharge = $this->getValidatedDataCarrierLoadCharge(request());

      $getLoadValidatedData['customer_id'] = $this->getShipperBrokerAsCustomerId(
        $shipperBrokerCompany,
        $carrierCompany
      );
      $carrierLoad = Load::create($getLoadValidatedData);
      $carrierLoad->loadShippers()->createMany($getLoadShippersValidatedData);
      $carrierLoad->loadReceivers()->createMany($getLoadReceiverValidatedData);
      // Shipper/broker's 3rd party load charge == carrier load charge.
      $carrierLoad->loadCharge()->create($getValidatedDataLoadCharge);

      if (!empty($load->third_party_carrier_rate_con_storage_file_name)) {
        $rateConFileName = $load->third_party_carrier_rate_con_storage_file_name;
        $carrierLoad->rateConfirmations()->create([
          'file_name' => $rateConFileName,
          'file_name_alias' => $rateConFileName,
          'original_file_name' => $load->load_unique_id . '-RC.pdf',
        ]);
      }

      if (!empty($load->third_party_carrier_bol_storage_file_name)) {
        $bolFileName = $load->third_party_carrier_bol_storage_file_name;
        loadImage::create([
          'load_id' => $carrierLoad->id,
          'image_name' => $bolFileName,
          'purpose' => config('constant.load.image.purpose.bol'),
          'image_alias' => config('constant.load.image.image_alias.bol'),
          'original_file_name' => $load->load_unique_id . '-BOL.pdf',
        ]);
      }
      //save shipper/broker load's synced_load_id as carrier load's id
      $load->synced_load_id = $carrierLoad->id;
      $load->save();
      // Create Chat/Loads/Users
      // Turn this on later.
      // ChatService::createChatLoad($load);
    });
  }

  /**
   * Get Carrier & Shipper/Broker Companies
   * @param int $carrierCompanyId
   * @return mixed
   */
  private function getCarrierAndShipperBrokerCompany(int $carrierCompanyId): object {
    $currentUser = User::select('id', 'admin_company_detail_id')
      ->where('id', Auth::id())->first();

    $currentUserCompanyId = $currentUser->admin_company_detail_id;
    $bothCompanies = AdminCompanyDetail::select(
      'id',
      'business_name',
      'email',
      'user_id',
      'address',
      'state',
      'city',
      'zipcode',
      'phone_number',
      'billing_cc_emails'
    )->whereIn('id', [$carrierCompanyId, $currentUserCompanyId])->get();

    if (count($bothCompanies) != 2) {
      throw new Exception("Cannot find companies.");
    }

    return (object) [
      'carrierCompany' => $bothCompanies->where('id', $carrierCompanyId)->first(),
      'shipperBrokerCompany' => $bothCompanies->where('id', $currentUserCompanyId)->first()
    ];
  }

  /**
   * Get Customer Id as Shipper/Broker
   * @param $shipperBrokerCompany
   * @param $carrierCompany
   * @return int
   */
  private function getShipperBrokerAsCustomerId($shipperBrokerCompany, $carrierCompany) {
    $shipperBrokerAsCustomer = Customer::select('id')
      ->where('synced_company_id', $shipperBrokerCompany->id)
      ->where('company_id', $carrierCompany->id)
      ->first();

    if (empty($shipperBrokerAsCustomer)) {
      $shipperBrokerCompanyType = config('constant.customer_type.customer');
      $companyTypeBroker = array_search('broker', config('constant.companyType'));

      if ($shipperBrokerCompany->company_type == $companyTypeBroker) {
        $shipperBrokerCompanyType = config('constant.customer_type.broker');
      }
      $customerData = $this->getValidatedDataForCustomer(
        $shipperBrokerCompany,
        $shipperBrokerCompanyType,
        $carrierCompany
      );
      $shipperBrokerAsCustomer = Customer::create($customerData);
    }
    return $shipperBrokerAsCustomer->id;
  }

  /**
   * Get Customer Id as Carrier
   * @param $shipperBrokerCompany
   * @param $carrierCompany
   * @return int
   */
  private function getCarrierAsCustomerId($shipperBrokerCompany, $carrierCompany) {
    $carrierAsCustomer = Customer::select('id')
      ->where('synced_company_id', $carrierCompany->id)
      ->where('company_id', $shipperBrokerCompany->id)
      ->first();

    if (empty($carrierAsCustomer)) {
      $customerData = $this->getValidatedDataForCustomer(
        $carrierCompany,
        config('constant.customer_type.carrier'),
        $shipperBrokerCompany
      );
      $carrierAsCustomer = Customer::create($customerData);
    }

    return $carrierAsCustomer->id;
  }

  /**
   * Get Carrier Load for reserve by load validated Data.
   * @param $request
   * @param $carrierCompany
   * @param $shipperBrokerLoad
   * @return array
   */
  private function getReserveByLoadValidatedLoadData(
    $request,
    $carrierCompany,
    $shipperBrokerLoad
  ): array {
    $loadShippersDateArray = array_map(function ($item) {
      return $item['shipping_date'];
    }, $shipperBrokerLoad->loadShippers->toArray());

    $loadReceiversDateArray = array_map(function ($item) {
      return $item['delivery_date'];
    }, $shipperBrokerLoad->loadReceivers->toArray());

    $ret = [
      'load_unique_id' => (new LoadService())
        ->getLoadUniqeIdForEmailParser($carrierCompany->id) ?? null,
      'i_start_date' => min($loadShippersDateArray),
      'i_end_date' => max($loadReceiversDateArray),
      'user_id' => $carrierCompany->user_id,
      'admin_company_detail_id' => $carrierCompany->id,
      'total_miles' => $shipperBrokerLoad->total_miles,
      'calculate_using' => $shipperBrokerLoad->calculate_using,
      //'dispatcher_notes' => $shipperBrokerLoad->dispatcher_notes,//Comment Added As Per Zhao
      'status' => config('constant.status.load.open'),
      'sub_total' => $request->estimatedPrice ?? 0,
      'discount' => 0,
      'total_amount' => $request->estimatedPrice ?? 0,
      //save carrier load's synced_load_id as shipper/broker load's id
      'synced_load_id' => $shipperBrokerLoad->id,
      //save carrier load's refrence_id as shipper/broker load's load_unique_id
      'refrence_id' => $shipperBrokerLoad->load_unique_id,
    ];
    // Only add them if exist in shipper's load.
    if (!empty($shipperBrokerLoad->quote_id) && !empty($shipperBrokerLoad->quote_response_id)) {
      $isQuoteResponseCarrier = QuoteResponse::where('quote_id', $shipperBrokerLoad->quote_id)
        ->where('id', $shipperBrokerLoad->quote_response_id)
        ->where('company_id', $carrierCompany->id)->exists();

      if ($isQuoteResponseCarrier) {
        $ret['quote_id'] = $shipperBrokerLoad->quote_id;
        $ret['quote_response_id'] = $shipperBrokerLoad->quote_response_id;
      }
    }
    return $ret;
  }

  /**
   * Get Shippers Broker Load Shipper Validated Data.
   * @param $loadShippersData
   * @return array
   */
  private function getReserveByLoadShippersValidateData($loadShippers): array {
    $shippers = [];
    foreach ($loadShippers as $shipper) {
      $shippers[] = [
        'order' => $shipper->order ?? null,
        'shipper_name' => $shipper->shipper_name ?? null,
        'address' => $shipper->address ?? null,
        'city' => $shipper->city ?? null,
        'state' => $shipper->state ?? null,
        'zip_code' => $shipper->zip_code ?? null,
        'latitude' => $shipper->latitude ?? null,
        'longitude' => $shipper->longitude ?? null,
        'contact_person' => $shipper->contact_person ?? null,
        'contact_number' => $shipper->contact_number ?? null,
        'shipper_reference' => $shipper->shipper_reference ?? null,
        'shipping_date' => $shipper->shipping_date ?? null,
        'shipping_end_date' => $shipper->shipping_end_date ?? null,
        'shipping_time' => $shipper->shipping_time ?? null,
        'shipping_end_time' => $shipper->shipping_end_time ?? null,
        'shipper_note' => $shipper->shipper_note ?? null,
        'freight_equipment_type' => $shipper->freight_equipment_type ?? null,
        'freight_description' => $shipper->freight_description ?? null,
        'freight_weight' => $shipper->freight_weight ?? null,
        'weight_unit' => $shipper->weight_unit ?? null,
        'freight_qty' => $shipper->freight_qty ?? null,
        'qty_unit' => $shipper->qty_unit ?? null,
        'freight_length' => $shipper->freight_length ?? null,
        'freight_width' => $shipper->freight_width ?? null,
        'freight_height' => $shipper->freight_height ?? null,
        'container' => $shipper->container ?? null,
        'temperature' => $shipper->temperature ?? null,
        'additional_freight_details' => $shipper->additional_freight_details ?? null
      ];
    }
    return $shippers;
  }

  /**
   * Get Shipper Broker Load Receivers Validated Data.
   * @param $loadReceivers
   * @return array
   */
  private function getReserveByLoadReceiversValidateData($loadReceivers): array {
    $receivers = [];
    foreach ($loadReceivers as $receiver) {
      $receivers[] = [
        'order' => $receiver->order ?? null,
        'receiver_name' => $receiver->receiver_name ?? null,
        'address' => $receiver->address ?? null,
        'city' => $receiver->city ?? null,
        'state' => $receiver->state ?? null,
        'zip_code' => $receiver->zip_code ?? null,
        'latitude' => $receiver->latitude ?? null,
        'longitude' => $receiver->longitude ?? null,
        'contact_person' => $receiver->contact_person ?? null,
        'contact_number' => $receiver->contact_number ?? null,
        'receiver_reference' => $receiver->receiver_reference ?? null,
        'delivery_date' => $receiver->delivery_date ?? null,
        'delivery_time' => $receiver->delivery_time ?? null,
        'delivery_end_date' => $receiver->delivery_end_date ?? null,
        'delivery_end_time' => $receiver->delivery_end_time ?? null,
        'receiver_note' =>  $receiver->receiver_note ?? null,
      ];
    }
    return $receivers;
  }

  /**
   * Sent Mail For Reserve Request From Carrier Website
   * @param $request
   * @return void
   */
  public function reserveRequestFromCarrierWebsite($request) {
    $company = AdminCompanyDetail::where(
      'id',
      $request->companyId
    )->select(['billing_cc_emails', 'email', 'business_name'])->first();

    $ccEmails = $request->shipperBrokerDetails['ccEmails'] ?? [];
    $ccEmails[] = $request->shipperBrokerDetails['email'];
    if (!empty($company->billing_cc_emails)) {
      $ccEmails = array_unique(array_merge(
        $ccEmails,
        explode(',', $company->billing_cc_emails)
      ));
    }

    $mailDetails = [
      'email' => $company->email,
      'ccEmails' => $ccEmails,
      'companyName' => $company->business_name
    ];
    Mail::queue(new ReserveRequestFromCarrierWebsiteMail(
      array_merge($request->all(), $mailDetails)
    ));
  }
}
