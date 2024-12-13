<?php

namespace App\Http\Requests\Api\Load;

use App\Models\AdminCompanyDetail;
use App\Models\DriverDetail;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateLoadRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    $companyId = getAuthAdminCompanyId();
    $companyType = AdminCompanyDetail::select('company_type')->where('id', $companyId)->first()->company_type ?? null;
    $customerRule = 'required';
    if (!empty($companyType) && $companyType !== array_search('carrier', config('constant.companyType'))) {
      $customerRule = 'nullable';
    }
    $calculateUsing = implode(',', array_values(config('constant.calculate_using')));
    $dropHookTrailerType = implode(',', config('constant.load.dropHookTrailerType'));
    return [
      'customer_id' => $customerRule,
      'tag_id' => 'nullable|numeric|min:1',
      'dispatcher_id' => 'nullable|numeric|min:1',
      'orderType' => 'nullable|string|max:255',
      'serviceType' => 'nullable|string|max:255',
      'load_unique_id' => 'required|numeric|min:1',
      'refrence_id' => 'nullable|string|max:255',
      'direction' => 'nullable',
      'dispatcher_notes' => 'nullable|max:4000',
      'equipment_type' => ['nullable', "in:" . implode(",", array_keys(config('constant.load.equipment_type')))],
      'trailer_type' => ['nullable', "in:" . implode(",", array_keys(config('constant.load.trailer_type')))],
      'rate_confirmation_file' => 'nullable',
      'rateConOriginalFileName' => 'nullable|string|max:255',
      'showRateConToDriver' => 'nullable|boolean',

      'collaboratorEmails' => 'nullable|array',
      'collaboratorEmails.*' => 'email|distinct',

      'hauling_fees' => 'required',
      'hauling_fees_rate' => 'required',
      'hauling_fees_type' => ['required', "in:" . implode(',', config('constant.hauling_fees_type'))],
      'haulingFeeQty' => 'nullable|required_if:hauling_fees_type,' .
        config('constant.hauling_fees_type.truck_hour') .
        '|numeric|between:0,9999.99',

      'fuel_surcharge' => '',
      'fuel_surcharge_rate' => 'nullable|numeric|between:0,9999999999.9999',
      'fuel_surcharge_type' => ['nullable', "in:" . implode(',', config('constant.fuel_surcharge_type'))],
      'fuelSurchargeV1' => 'nullable|numeric|between:0,99.9999',
      'fuelSurchargeV2' => 'nullable|numeric|between:0,99.9999',
      'fuelSurchargeV3' => 'nullable|numeric|between:0,99.9999',

      'accessorial_fee.*.id' => ['exists:accessorial_fees,id'],
      'accessorial_fee.*.rate' => '',

      'accessorial_deduction.*.id' => ['exists:accessorial_deductions,id'],
      'accessorial_deduction.*.rate' => '',

      'total_miles' => 'required',
      'calculate_using' => ['required', "in:" . config('constant.calculate_using.manual') . "," . config('constant.calculate_using.google_maps') . "," . config('constant.calculate_using.p')],

      'sub_total' => 'required',
      'discount' => 'required',
      'total_amount' => 'required',

      'billToCode' => 'nullable|string|max:255',
      'laneCode' => 'nullable|string|max:255',
      'costCode' => 'nullable|string|max:255',

      'vessel' => 'nullable|string|max:255',
      'arrivalDate' => 'nullable|date_format:' . config('constant.date_format'),
      'lastFreeDate' => 'nullable|date_format:' . config('constant.date_format'),
      'bolNumber' => 'nullable|string|max:255',
      'pickedUpEquipment' => 'nullable',
      'pickedUpEquipment.number' => 'nullable|string|max:255',
      'pickedUpEquipment.size' => 'nullable|string|max:255',
      'pickedUpEquipment.type' => 'nullable|string|max:255',
      'droppedOffEquipment' => 'nullable',
      'droppedOffEquipment.number' => 'nullable|string|max:255',
      'droppedOffEquipment.size' => 'nullable|string|max:255',
      'droppedOffEquipment.type' => 'nullable|string|max:255',

      'companyInternalReference' => 'nullable|string|max:255',
      'containerStatus' => 'nullable|string|in:' . implode(',', config('constant.load.container.status')),
      'thirdPartyCarrierRateConType' => 'nullable|string|in:' . implode(',', config('constant.load.rateConType')),
      'parsedBy' => 'nullable|string|in:' . implode(',', config('constant.load.parsedBy')),

      'shippers' => 'required|array|min:1',
      'shippers.*.temperature' => 'nullable|string|max:255',
      'shippers.*.shipper_name' => 'required|max:255|string',
      'shippers.*.address' => 'required|max:255|string',
      'shippers.*.city' => 'required|max:255|string',
      'shippers.*.state' => 'required|max:255|string',
      'shippers.*.zip_code' => 'required|max:255|string',
      'shippers.*.latitude' => 'required',
      'shippers.*.longitude' => 'required',
      'shippers.*.contact_person' => 'nullable|max:255|string',
      'shippers.*.contact_number' => 'nullable|max:255|string',
      'shippers.*.shipper_reference' => 'nullable|max:255|string',
      'shippers.*.shipping_date' => ['required', 'date_format:' . config('constant.date_format')],
      'shippers.*.shipping_end_date' => ['nullable', 'date_format:' . config('constant.date_format')],
      'shippers.*.shipping_time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'shippers.*.shipping_end_time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'shippers.*.arrivedLocalDatetime ' => ['nullable', 'date_format:' .
        config('constant.date_time_format')],
      'shippers.*.loadedLocalDatetime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'shippers.*.freightEquipmentType' => 'nullable|max:255|string',
      'shippers.*.freight_description' => 'nullable|max:255|string',
      'shippers.*.freight_weight' => 'nullable|numeric|between:0,99999999.9999',
      'shippers.*.weight_unit' => 'nullable|integer',
      'shippers.*.freight_qty' => 'nullable|numeric|between:0,99999999.9999',
      'shippers.*.qtyRate' => 'nullable|numeric|between:0,9999.999999|required_if:hauling_fees_type,' .
        config('constant.hauling_fees_type.qty_var_rate'),
      'shippers.*.qty_unit' => 'nullable|integer',
      'shippers.*.freight_length' => 'nullable',
      'shippers.*.freight_width' => 'nullable',
      'shippers.*.freight_height' => 'nullable',
      'shippers.*.shipper_note' => 'nullable|max:4000|string',
      'shippers.*.container' => 'nullable|max:255|string',
      'shippers.*.order' => 'nullable|integer|between:1,100',
      // 'shippers.*.freight_pickup_number' => 'required',
      'shippers.*.dropTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'shippers.*.dropTrailerId' => 'nullable|integer|exists:trailers,id',
      'shippers.*.hookTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'shippers.*.hookTrailerId' => 'nullable|integer|exists:trailers,id',
      'shippers.*.containerHere' => 'nullable|boolean',
      'shippers.*.additionalFreightDetails' => 'nullable',
      'shippers.*.additionalFreightDetails.totalWeight' => 'nullable|numeric',
      'shippers.*.additionalFreightDetails.totalQty' => 'nullable|numeric',
      'shippers.*.additionalFreightDetails.details' => 'nullable|array',
      'shippers.*.additionalFreightDetails.details.*.equipmentType' => 'nullable|string',
      'shippers.*.additionalFreightDetails.details.*.description' => 'nullable|string',
      'shippers.*.additionalFreightDetails.details.*.weight' => 'nullable|numeric',
      'shippers.*.additionalFreightDetails.details.*.weightUnit' => 'nullable|integer|in:' .
        implode(',', array_keys(config('constant.weight_unit'))),
      'shippers.*.additionalFreightDetails.details.*.qty' => 'nullable|numeric',
      'shippers.*.additionalFreightDetails.details.*.qtyRate' => 'nullable|numeric|between:0,9999.999999|required_if:hauling_fees_type,' .
        config('constant.hauling_fees_type.qty_var_rate'),
      'shippers.*.additionalFreightDetails.details.*.qtyUnit' => 'nullable|integer|in:' .
        implode(',', array_keys(config('constant.quantity_unit'))),
      'shippers.*.additionalFreightDetails.details.*.length' => 'nullable|string',
      'shippers.*.additionalFreightDetails.details.*.width' => 'nullable|string',
      'shippers.*.additionalFreightDetails.details.*.height' => 'nullable|string',

      'receivers' => 'required|array|min:1',
      'receivers.*.receiver_name' => 'required|max:255|string',
      'receivers.*.address' => 'required|max:255|string',
      'receivers.*.city' => 'required|max:255|string',
      'receivers.*.state' => 'required|max:255|string',
      'receivers.*.zip_code' => 'required|max:255|string',
      'receivers.*.latitude' => 'required',
      'receivers.*.longitude' => 'required',
      'receivers.*.contact_person' => 'nullable|max:255|string',
      'receivers.*.contact_number' => 'nullable|max:255|string',
      'receivers.*.receiver_reference' => 'nullable|max:255|string',
      'receivers.*.delivery_date' => ['required', 'date_format:' . config('constant.date_format')],
      'receivers.*.delivery_end_date' => ['nullable', 'date_format:' . config('constant.date_format')],
      'receivers.*.delivery_time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'receivers.*.delivery_end_time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'receivers.*.arrivedLocalDatetime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'receivers.*.unloadedLocalDatetime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'receivers.*.receiver_note' => 'nullable|max:4000|string',
      'receivers.*.order' => 'nullable|integer|between:1,100',
      'receivers.*.dropTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'receivers.*.dropTrailerId' => 'nullable|integer|exists:trailers,id',
      'receivers.*.hookTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'receivers.*.hookTrailerId' => 'nullable|integer|exists:trailers,id',
      'receivers.*.containerHere' => 'nullable|boolean',

      'load_legs.*.location_name' => 'required|max:255|string',
      'load_legs.*.address' => 'required|max:255|string',
      'load_legs.*.city' => 'required|max:255|string',
      'load_legs.*.state' => 'required|max:255|string',
      'load_legs.*.zip_code' => 'required|max:255|string',
      'load_legs.*.latitude' => 'required',
      'load_legs.*.longitude' => 'required',
      'load_legs.*.contact_person' => 'nullable|max:255|string',
      'load_legs.*.contact_number' => 'nullable|max:255|string',
      'load_legs.*.note' => 'nullable|max:4000|string',
      'load_legs.*.leg_order' => 'required|numeric|distinct',
      'load_legs.*.date' => ['required', 'date_format:' . config('constant.date_format')],
      'load_legs.*.end_date' => ['nullable', 'date_format:' . config('constant.date_format')],
      'load_legs.*.time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'load_legs.*.end_time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'load_legs.*.order' => 'nullable|integer|between:1,100',
      'load_legs.*.dropTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'load_legs.*.dropTrailerId' => 'nullable|integer|exists:trailers,id',
      'load_legs.*.hookTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'load_legs.*.hookTrailerId' => 'nullable|integer|exists:trailers,id',
      'load_legs.*.containerHere' => 'nullable|boolean',

      'thirdPartyCarrier' => 'nullable|array',
      'thirdPartyCarrier.carrierAsCustomerId' => 'nullable|integer|exists:customers,id', //,type, . config('constant.customer_type.carrier'),
      'thirdPartyCarrier.instructions' => 'nullable|string|max:255',
      'thirdPartyCarrier.subTotal' => 'nullable|numeric',
      'thirdPartyCarrier.discount' => 'nullable|numeric',
      'thirdPartyCarrier.totalAmount' => 'nullable|numeric',
      'thirdPartyCarrier.driverAssetAssignments' => 'nullable|array',
      'thirdPartyCarrier.driverAssetAssignments.truckNumber' => 'nullable|string|max:255',
      'thirdPartyCarrier.driverAssetAssignments.trailerNumber' => 'nullable|string|max:255',
      'thirdPartyCarrier.driverAssetAssignments.driverName' => 'nullable|string|max:255',
      'thirdPartyCarrier.driverAssetAssignments.driverPhoneNumber' => 'nullable|string|max:255',
      'thirdPartyCarrier.charges' => 'nullable',
      'thirdPartyCarrier.charges.hauling_fee' => 'nullable',
      'thirdPartyCarrier.charges.hauling_fee_rate' => 'nullable',
      'thirdPartyCarrier.charges.hauling_fee_type' => ['nullable', 'string', "in:" . implode(',', config('constant.hauling_fees_type'))],
      'thirdPartyCarrier.charges.haulingFeeQty' => 'nullable|required_if:thirdPartyCarrier.charges.hauling_fee_type,' .
        config('constant.hauling_fees_type.truck_hour') .
        '|numeric|between:0,9999.99',
      'thirdPartyCarrier.charges.fuel_surcharge' => 'nullable',
      'thirdPartyCarrier.charges.fuel_surcharge_rate' => 'nullable',
      'thirdPartyCarrier.charges.fuel_surcharge_type' => ['nullable', 'string', 'in:' . implode(',', config('constant.fuel_surcharge_type'))],
      'thirdPartyCarrier.charges.accessorial_fee' => 'nullable',
      'thirdPartyCarrier.charges.accessorial_fee.*.id' => 'numeric|exists:accessorial_fees,id',
      'thirdPartyCarrier.charges.accessorial_fee.*.rate' => 'nullable|numeric',
      'thirdPartyCarrier.charges.accessorial_deduction' => 'nullable',
      'thirdPartyCarrier.charges.accessorial_deduction.*.id' => 'numeric|exists:accessorial_deductions,id',
      'thirdPartyCarrier.charges.accessorial_deduction.*.rate' => 'nullable',
      'thirdPartyCarrier.sendRateConToCarrier' => 'nullable|boolean',
      'thirdPartyCarrier.sendRateConAndBolToCarrier' => 'nullable|boolean',
      'thirdPartyCarrier.ccEmails' => 'nullable|array',
      'thirdPartyCarrier.ccEmails.*' => 'email|distinct',
      'thirdPartyCarrier.rateConType' => 'required_if:thirdPartyCarrier.sendRateConToCarrier,true|string|in:' . implode(',', config('constant.load.rateConType')),
      'thirdPartyCarrier.invoiceStatus' => 'nullable|string|in:' .
        implode(',', config('constant.load.thirdPartyCarrier.status')),

      'multiPurposeStops.*.type' => 'required|string|in:' . implode(',', config('constant.load.multiPurposeStopsType')),
      'multiPurposeStops.*.order' => 'required|integer|between:1,100',
      'multiPurposeStops.*.name' => 'required|string|max:255',
      'multiPurposeStops.*.address' => 'required|string|max:255',
      'multiPurposeStops.*.city' => 'required|string|max:255',
      'multiPurposeStops.*.state' => 'required|string|max:255',
      'multiPurposeStops.*.zipCode' => 'required|string|max:255',
      'multiPurposeStops.*.latitude' =>  ['required'], // 'regex:/^[-]?((([0-8]?[0-9])(\.(\d{1,8}))?)|(90(\.0+)?))$/'
      'multiPurposeStops.*.longitude' => ['required'], // 'regex:/^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))(\.(\d{1,8}))?)|180(\.0+)?)$/'
      'multiPurposeStops.*.date' =>  ['required', 'date_format:' . config('constant.date_format')],
      'multiPurposeStops.*.endDate' =>  ['nullable', 'date_format:' . config('constant.date_format')],
      'multiPurposeStops.*.time' => ['nullable', 'date_format:' . config('constant.time_format')],
      'multiPurposeStops.*.endTime' => ['nullable', 'date_format:' . config('constant.time_format')],
      'multiPurposeStops.*.contactPerson' => 'nullable|string|max:255',
      'multiPurposeStops.*.contactNumber' => 'nullable|string|max:255',
      'multiPurposeStops.*.notes' => 'nullable|string|max:2000',
      'multiPurposeStops.*.dropTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'multiPurposeStops.*.dropTrailerId' => 'nullable|integer|exists:trailers,id',
      'multiPurposeStops.*.hookTrailerType' => 'nullable|string|in:' . $dropHookTrailerType,
      'multiPurposeStops.*.hookTrailerId' => 'nullable|integer|exists:trailers,id',
      'multiPurposeStops.*.segmentDistance' => 'nullable|numeric|between:0,9999.9999',
      'multiPurposeStops.*.containerHere' => 'nullable|boolean',

      'drivers.*.to_leg' => 'nullable|numeric',
      'drivers.*.from_leg' => 'nullable|numeric',

      'drivers.*.driver_ids' => [
        function ($attribute, $value, $fail) {
          $driverDetails = DriverDetail::whereIn('user_id', explode(',', $value))->get();
          $plucked = $driverDetails->pluck('driver_pay_types');
          if (count($plucked) == 2) {
            if ($plucked[0] != $plucked[1]) {
              $fail("driver pay type are not match.");
            }
          }
          //check unapproved drivers
          $unapprovedDrivers = $driverDetails->where(
            'approval_status',
            array_search('notApproved', config('constant.driver.approvalStatus'))
          )->pluck('name')->toArray();
          // TODO: change name to users table.
          if (count($unapprovedDrivers) > 0) {
            $driverName = $unapprovedDrivers[0];
            $fail("Driver " . $driverName . " is not in approved status.");
          }
        },
        'nullable',
        'distinct',
      ],
      'drivers.*.truck_id' => [
        '',
      ],
      'drivers.*.trailer_id' => [
        '',
        // 'required_if:drivers.*.drop_trailer,1',
      ],
      'drivers.*.chassis' => 'nullable|string|max:255',
      'drivers.*.externalTrailerNumber' => 'nullable|string|max:255',
      'drivers.*.sendBolToDriver' => 'nullable|boolean',
      'drivers.*.drop_trailer' => [
        '',
        "in:0,1",
      ],
      'drivers.*.notes' => '',
      'drivers.*.startLocation' => 'nullable',
      'drivers.*.startLocation.address' => 'nullable|string|max:255',
      'drivers.*.startLocation.city' => 'required_with:drivers.*.startLocation.state,drivers.*.startLocation.zip_code,drivers.*.startLocation.latitude,drivers.*.startLocation.longitude,drivers.*.startLocation.distance|nullable|string|max:255',
      'drivers.*.startLocation.state' => 'required_with:drivers.*.startLocation.city,drivers.*.startLocation.zip_code,drivers.*.startLocation.latitude,drivers.*.startLocation.longitude,drivers.*.startLocation.distance|nullable|string|max:255',
      'drivers.*.startLocation.zip_code' => 'required_with:drivers.*.startLocation.state,drivers.*.startLocation.city,drivers.*.startLocation.latitude,drivers.*.startLocation.longitude,drivers.*.startLocation.distance|nullable|string|max:255',
      'drivers.*.startLocation.latitude' => 'required_with:drivers.*.startLocation.state,drivers.*.startLocation.zip_code,drivers.*.startLocation.city,drivers.*.startLocation.longitude,drivers.*.startLocation.distance|nullable|numeric',
      'drivers.*.startLocation.longitude' => 'required_with:drivers.*.startLocation.state,drivers.*.startLocation.zip_code,drivers.*.startLocation.latitude,drivers.*.startLocation.city,drivers.*.startLocation.distance|nullable|numeric',
      'drivers.*.startLocation.distance' => 'required_with:drivers.*.startLocation.state,drivers.*.startLocation.zip_code,drivers.*.startLocation.latitude,drivers.*.startLocation.longitude,drivers.*.startLocation.city|nullable|numeric|between:-9999.9999,9999.9999',

      'drivers.*.emptyDistance ' => 'nullable|numeric|between:0,9999.9999',
      'drivers.*.loadedDistance' => 'nullable|numeric|between:0,9999.9999',

      'notes' => 'nullable|array',
      'notes.*.note' => 'nullable|string|max:4000',
      'quote' => 'nullable',
      'quote.id' => 'required_with:quote|integer|exists:quotes,id,company_id,' . $companyId,
      'quote.responseId' => 'required_with:quote|integer|exists:quote_responses,id,quote_id,' . request('quote.id'),

      'distanceCache' => 'nullable',
      'distanceCache.loadDistanceCache' => 'required_with:distanceCache',
      'distanceCache.loadDistanceCache.loadDistanceCalculatedBy' => 'nullable:distanceCache|string|in:' . $calculateUsing,
      // When using required, Laravel requires it to has min size == 1.
      // I think present should work.
      'distanceCache.loadDistanceCache.loadDistanceCache' => 'nullable|array|min:0',
      'distanceCache.loadDistanceCache.loadDistanceCache.*.lat' => 'required_with:distanceCache|numeric',
      'distanceCache.loadDistanceCache.loadDistanceCache.*.lng' => 'required_with:distanceCache|numeric',

      // noLegCache Validation Rule
      'distanceCache.noLegCache' => [
        'nullable',
        function ($attribute, $value, $fail) {
          if (!empty(request('distanceCache.toLegCache')) || !empty(request('distanceCache.fromLegCache'))) {
            $fail('The distanceCache noLegCache, toLegCache, and fromLegCache shall not present at the same time.');
          }
        },
      ],

      'distanceCache.noLegCache.loadedDistanceCalculatedBy' => 'nullable:distanceCache.noLegCache|string|in:' . $calculateUsing,
      // Cannot use required or present, the latter requires noLegCache in request.
      'distanceCache.noLegCache.loadedDistanceCache' => 'nullable|array|min:0',
      'distanceCache.noLegCache.loadedDistanceCache.*.lat' => 'required_with:distanceCache.noLegCache.loadedDistanceCache|numeric',
      'distanceCache.noLegCache.loadedDistanceCache.*.lng' => 'required_with:distanceCache.noLegCache.loadedDistanceCache|numeric',
      'distanceCache.noLegCache.loadedDistance' => 'required_with:distanceCache.noLegCache|numeric|between:0,9999.9999',
      'distanceCache.noLegCache.emptyDistance' => 'required_with:distanceCache.noLegCache|numeric|between:0,9999.9999',

      'distanceCache.noLegCache.startEmptyDistanceCalculatedBy' => 'nullable|string|in:' . $calculateUsing,
      'distanceCache.noLegCache.startEmptyDistanceCache' => 'nullable|array|min:0',
      'distanceCache.noLegCache.startEmptyDistanceCache.*.lat' => 'required_with:distanceCache.noLegCache.startEmptyDistanceCache|numeric',
      'distanceCache.noLegCache.startEmptyDistanceCache.*.lng' => 'required_with:distanceCache.noLegCache.startEmptyDistanceCache|numeric',
      'distanceCache.noLegCache.startEmptyDistance' => 'required_with:distanceCache.noLegCache|numeric|between:0,9999.9999',

      'distanceCache.noLegCache.endEmptyDistanceCalculatedBy' => 'nullable|string|in:' . $calculateUsing,
      'distanceCache.noLegCache.endEmptyDistanceCache' => 'nullable|array|min:0',
      'distanceCache.noLegCache.endEmptyDistanceCache.*.lat' => 'required_with:distanceCache.noLegCache.endEmptyDistanceCache|numeric',
      'distanceCache.noLegCache.endEmptyDistanceCache.*.lng' => 'required_with:distanceCache.noLegCache.endEmptyDistanceCache|numeric',
      'distanceCache.noLegCache.endEmptyDistance' => 'required_with:distanceCache.noLegCache|numeric|between:0,9999.9999',

      // toLegCache Validation Rule
      'distanceCache.toLegCache' => [
        'nullable',
        function ($attribute, $value, $fail) {
          if (!empty(request('distanceCache.noLegCache'))) {
            $fail('The distanceCache noLegCache, toLegCache, and fromLegCache shall not present at the same time.');
          }
        },
      ],

      'distanceCache.toLegCache.loadedDistanceCalculatedBy' => 'nullable|string|in:' . $calculateUsing,
      'distanceCache.toLegCache.loadedDistanceCache' => 'nullable|array|min:0',
      'distanceCache.toLegCache.loadedDistanceCache.*.lat' => 'required_with:distanceCache.toLegCache.loadedDistanceCache|numeric',
      'distanceCache.toLegCache.loadedDistanceCache.*.lng' => 'required_with:distanceCache.toLegCache.loadedDistanceCache|numeric',
      'distanceCache.toLegCache.loadedDistance' => 'required_with:distanceCache.toLegCache|numeric|between:0,9999.9999',

      'distanceCache.toLegCache.emptyDistanceCalculatedBy' => 'nullable|string|in:' . $calculateUsing,
      'distanceCache.toLegCache.emptyDistanceCache' => 'nullable|array|min:0',
      'distanceCache.toLegCache.emptyDistanceCache.*.lat' => 'required_with:distanceCache.toLegCache.emptyDistanceCache|numeric',
      'distanceCache.toLegCache.emptyDistanceCache.*.lng' => 'required_with:distanceCache.toLegCache.emptyDistanceCache|numeric',
      'distanceCache.toLegCache.emptyDistance' => 'required_with:distanceCache.toLegCache|numeric|between:0,9999.9999',

      // fromLegCache Validation Rule
      'distanceCache.fromLegCache' => [
        'nullable',
        function ($attribute, $value, $fail) {
          if (!empty(request('distanceCache.noLegCache'))) {
            $fail('The distanceCache noLegCache, toLegCache, and fromLegCache shall not present at the same time.');
          }
        },
      ],

      'distanceCache.fromLegCache.loadedDistanceCalculatedBy' => 'nullable|string|in:' . $calculateUsing,
      'distanceCache.fromLegCache.loadedDistanceCache' => 'nullable|array|min:0',
      'distanceCache.fromLegCache.loadedDistanceCache.*.lat' => 'required_with:distanceCache.fromLegCache.loadedDistanceCache|numeric',
      'distanceCache.fromLegCache.loadedDistanceCache.*.lng' => 'required_with:distanceCache.fromLegCache.loadedDistanceCache|numeric',
      'distanceCache.fromLegCache.loadedDistance' => 'required_with:distanceCache.fromLegCache|numeric|between:0,9999.9999',

      'distanceCache.fromLegCache.emptyDistanceCalculatedBy' => 'nullable|string|in:' . $calculateUsing,
      'distanceCache.fromLegCache.emptyDistanceCache' => 'nullable|array|min:0',
      'distanceCache.fromLegCache.emptyDistanceCache.*.lat' => 'required_with:distanceCache.fromLegCache.emptyDistanceCache|numeric',
      'distanceCache.fromLegCache.emptyDistanceCache.*.lng' => 'required_with:distanceCache.fromLegCache.emptyDistanceCache|numeric',
      'distanceCache.fromLegCache.emptyDistance' => 'required_with:distanceCache.fromLegCache|numeric|between:0,9999.9999',
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages(): array {
    $dropHookTrailerType = implode(', ', config('constant.load.dropHookTrailerType')) . '.';
    $multiPurposeStopsType = implode(', ', config('constant.load.multiPurposeStopsType')) . '.';
    return [
      'collaboratorEmails.*.email' => 'The collaborator emails must be valid email addresses.',
      'collaboratorEmails.*.distinct' => 'The collaborator emails must be unique email addresses.',

      'shippers.*.shipper_name.required' => 'The shipper name field is required.',
      'shippers.*.shipper_name.max' => 'The shipper name field maximum length is 255.',
      'shippers.*.shipper_name.string' => 'The shipper name field is supported only string type.',
      'shippers.*.address.required' => 'The shipper address field is required.',
      'shippers.*.address.max' => 'The shipper address field maximum length is 255.',
      'shippers.*.address.string' => 'The shipper address field must be a string.',
      'shippers.*.city.required' => 'The shipper city field is required.',
      'shippers.*.city.max' => 'The shipper city field maximum length is 255.',
      'shippers.*.city.string' => 'The shipper city field must be a string.',
      'shippers.*.state.required' => 'The shipper state field is required.',
      'shippers.*.state.max' => 'The shipper state field maximum length is 255.',
      'shippers.*.state.string' => 'The shipper state field must be a string.',
      'shippers.*.zip_code.required' => 'The shipper zip code field is required.',
      'shippers.*.zip_code.max' => 'The shipper zip code field maximum length is 255.',
      'shippers.*.zip_code.string' => 'The shipper zip code field must be a string.',
      'shippers.*.latitude.required' => 'The shipper latitude field is required.',
      'shippers.*.longitude.required' => 'The shipper longitude field is required.',
      'shippers.*.contact_person.max' => 'The shipper contact person field maximum length is 255.',
      'shippers.*.contact_person.string' => 'The shipper contact person field must be a string.',
      'shippers.*.contact_number.max' => 'The shipper contact number field maximum length is 255.',
      'shippers.*.contact_number.string' => 'The shipper contact number field must be a string.',
      'shippers.*.shipper_reference.max' => 'The shipper pick up # field maximum length is 255.',
      'shippers.*.shipper_reference.string' => 'The shipper pick up # field must be a string.',
      'shippers.*.shipping_date.required' => 'The shipper shipping date field is required.',
      'shippers.*.shipping_date.date_format' => 'The shipper shipping date field does not match the format ' . config('constant.date_format') . '.',
      'shippers.*.shipping_end_date.date_format' => 'The shipper shipping end date field does not match the format ' . config('constant.date_format') . '.',
      'shippers.*.shipping_time.date_format' => 'The shipper shipping time field does not match the format ' . config('constant.time_format') . '.',
      'shippers.*.shipping_end_time.date_format' => 'The shipper shipping end time field does not match the format ' . config('constant.time_format') . '.',
      'shippers.*.freight_description.max' => 'The shipper freight description field maximum length is 255.',
      'shippers.*.freight_description.string' => 'The shipper freight description field must be a string.',
      'shippers.*.freight_weight.numeric' => 'The shipper freight weight field must be a number.',
      'shippers.*.freight_weight.between' => 'The shipper freight weight field must be between 0 and 99999999.9999',
      'shippers.*.freight_qty.numeric' => 'The shipper freight qty field must be a number.',
      'shippers.*.freight_qty.between' => 'The shipper freight qty field must be between 0 and 99999999.9999',
      'shippers.*.qtyRate.numeric' => 'The shipper qtyRate field must be a number.',
      'shippers.*.qtyRate.between' => 'The shipper qtyRate field must be between 0 and 9999.999999',
      'shippers.*.qtyRate.required_if' => 'The shipper qtyRate field is required when hauling fee type is qty_var_rate.',
      'shippers.*.weight_unit.integer' => 'The shipper weight unit field must be an integer.',
      'shippers.*.shipper_note.max' => 'The shipper shipper note field maximum length is 4000.',
      'shippers.*.shipper_note.string' => 'The shipper shipper note field must be a string.',
      'shippers.*.container.max' => 'The shipper container field maximum length is 255.',
      'shippers.*.container.string' => 'The shipper container field must be a string.',

      'shippers.*.order.integer' => 'The shipper order field must be an integer.',
      'shippers.*.order.between' => 'The shipper order field must be between 1 and 100',
      'shippers.*.temperature.string' => 'The shipper temperature must be a string type.',
      'shippers.*.temperature.max' => 'The shipper temperature max length should be 255.',
      'shippers.*.arrivedLocalDatetime.date_format' => 'The shipper arrivedLocalDatetime does not match the format ' . config('constant.date_time_format'),
      'shippers.*.loadedLocalDatetime.date_format' => 'The shipper loadedLocalDatetime does not match the format ' . config('constant.date_time_format'),
      'shippers.*.dropTrailerType.string' => 'The shipper drop trailer type field must be a string.',
      'shippers.*.hookTrailerType.string' => 'The shipper hook trailer type field must be a string.',
      'shippers.*.dropTrailerType.in' => 'The shipper drop trailer type field must be in ' . $dropHookTrailerType,
      'shippers.*.hookTrailerType.in' => 'The shipper hook trailer type field must be in ' . $dropHookTrailerType,
      'shippers.*.dropTrailerId.exists' => 'The shipper drop trailer id field must be valid.',
      'shippers.*.dropTrailerId.integer' => 'The shipper drop trailer id field must be an integer.',
      'shippers.*.hookTrailerId.exists' => 'The shipper hook trailer id field must be valid.',
      'shippers.*.hookTrailerId.integer' => 'The shipper hook trailer id field must be an integer.',
      'shippers.*.freightEquipmentType.string' => 'The shippers freight equipment # must be a string type.',
      'shippers.*.freightEquipmentType.max' => 'The shippers freight equipment # maximum length is 255.',
      'shippers.*.containerHere.boolean' => 'The shippers container here field must be a boolean.',

      'shippers.*.additionalFreightDetails.totalWeight.numeric' => 'The additionalFreightDetails totalWeight must be a number.',
      'shippers.*.additionalFreightDetails.totalQty.numeric' => 'The additionalFreightDetails totalQty must be a number.',
      'shippers.*.additionalFreightDetails.details.array' => 'The additionalFreightDetails details must be array.',
      'shippers.*.additionalFreightDetails.details.*.equipmentType.string' => 'The additionalFreightDetails details equipment type must be a string.',
      'shippers.*.additionalFreightDetails.details.*.description.string' => 'The additionalFreightDetails details description must be a string.',
      'shippers.*.additionalFreightDetails.details.*.weight.numeric' => 'The additionalFreightDetails details weight must be a number.',
      'shippers.*.additionalFreightDetails.details.*.weightUnit.integer' => 'The additionalFreightDetails details weightUnit must be an integer.',
      'shippers.*.additionalFreightDetails.details.*.weightUnit.in' => 'The additionalFreightDetails details weightUnit is invalid',
      'shippers.*.additionalFreightDetails.details.*.qty.numeric' => 'The additionalFreightDetails details qty must be a number.',
      'shippers.*.additionalFreightDetails.details.*.qtyRate.numeric' => 'The additionalFreightDetails details qtyRate must be a number.',
      'shippers.*.additionalFreightDetails.details.*.qtyRate.between' => 'The additionalFreightDetails details qtyRate must be between 0 and 9999.999999',
      'shippers.*.additionalFreightDetails.details.*.qtyRate.required_if' => 'The additionalFreightDetails details qtyRate is required when hauling fee type is qty_var_rate.',
      'shippers.*.additionalFreightDetails.details.*.qtyUnit.integer' => 'The additionalFreightDetails details qtyUnit must be an integer.',
      'shippers.*.additionalFreightDetails.details.*.qtyUnit.in' => 'The additionalFreightDetails details qtyUnit is invalid',
      'shippers.*.additionalFreightDetails.details.*.length.string' => 'The additionalFreightDetails details length must be a string.',
      'shippers.*.additionalFreightDetails.details.*.width.string' => 'The additionalFreightDetails details width must be a string.',
      'shippers.*.additionalFreightDetails.details.*.height.string' => 'The additionalFreightDetails details height must be a string.',

      'receivers.*.receiver_name.required' => 'The receiver name field is required.',
      'receivers.*.receiver_name.max' => 'The receiver name field maximum length is 255.',
      'receivers.*.receiver_name.string' => 'The receiver name field must be a string.',
      'receivers.*.address.required' => 'The receiver address field is required.',
      'receivers.*.address.max' => 'The receiver address field maximum length is 255.',
      'receivers.*.address.string' => 'The receiver address field must be a string.',
      'receivers.*.city.required' => 'The receiver city field is required.',
      'receivers.*.city.max' => 'The receiver city field maximum length is 255.',
      'receivers.*.city.string' => 'The receiver city field must be a string.',
      'receivers.*.state.required' => 'The receiver state field is required.',
      'receivers.*.state.max' => 'The receiver state field maximum length is 255.',
      'receivers.*.state.string' => 'The receiver state field must be a string.',
      'receivers.*.zip_code.required' => 'The receiver zip code field is required.',
      'receivers.*.zip_code.max' => 'The receiver zip code field maximum length is 255.',
      'receivers.*.zip_code.string' => 'The receiver zip code field must be a string.',
      'receivers.*.latitude.required' => 'The receiver latitude field is required.',
      'receivers.*.longitude.required' => 'The receiver longitude field is required.',
      'receivers.*.contact_person.max' => 'The receiver contact person field maximum length is 255.',
      'receivers.*.contact_person.string' => 'The receiver contact person field must be a string.',
      'receivers.*.contact_number.max' => 'The receiver contact number field maximum length is 255.',
      'receivers.*.contact_number.string' => 'The receiver contact number field must be a string.',
      'receivers.*.receiver_reference.max' => 'The receiver delivery no. # field maximum length is 255.',
      'receivers.*.receiver_reference.string' => 'The receiver delivery no. # field must be a string.',
      'receivers.*.delivery_date.required' => 'The receiver delivery date field is required.',
      'receivers.*.delivery_date.date_format' => 'The receiver delivery date field does not match the format ' . config('constant.date_format') . '.',
      'receivers.*.delivery_end_date.date_format' => 'The receiver delivery end date field does not match the format ' . config('constant.date_format') . '.',
      'receivers.*.delivery_time.date_format' => 'The receiver delivery time field does not match the format ' . config('constant.time_format') . '.',
      'receivers.*.delivery_end_time.date_format' => 'The receiver delivery end time field does not match the format ' . config('constant.time_format') . '.',
      'receivers.*.receiver_note.max' => 'The receiver receiver note field maximum length is 4000.',
      'receivers.*.receiver_note.string' => 'The receiver receiver note field must be a string.',
      'receivers.*.arrivedLocalDatetime.date_format' => 'The Receiver arrivedLocalDatetime does not match the format ' . config('constant.date_time_format'),
      'receivers.*.unloadedLocalDatetime.date_format' => 'The Receiver unloadedLocalDatetime does not match the format' . config('constant.date_time_format'),
      'receivers.*.order.integer' => 'The receiver order field must be an integer.',
      'receivers.*.order.between' => 'The receiver order field must be between 1 and 100',
      'receivers.*.dropTrailerType.string' => 'The Receiver dropTrailerType field must be a string.',
      'receivers.*.hookTrailerType.string' => 'The Receiver hookTrailerType field must be a string.',
      'receivers.*.dropTrailerType.in' => 'The Receiver dropTrailerType field must be in ' . $dropHookTrailerType,
      'receivers.*.hookTrailerType.in' => 'The Receiver hookTrailerType field must be in ' . $dropHookTrailerType,
      'receivers.*.dropTrailerId.exists' => 'The Receiver dropTrailerId field must be valid.',
      'receivers.*.hookTrailerId.exists' => 'The Receiver hookTrailerId field must be valid.',
      'receivers.*.dropTrailerId.integer' => 'The Receiver dropTrailerId field must be an integer.',
      'receivers.*.hookTrailerId.integer' => 'The Receiver hookTrailerId field must be an integer.',
      'receivers.*.containerHere.boolean' => 'The receivers container here field must be a boolean.',

      'load_legs.*.location_name.required' => 'The load leg location name field is required.',
      'load_legs.*.location_name.max' => 'The load leg location name field maximum length is 255.',
      'load_legs.*.location_name.string' => 'The load leg location name field must be a string.',
      'load_legs.*.address.required' => 'The load leg address field is required.',
      'load_legs.*.address.max' => 'The load leg address field maximum length is 255.',
      'load_legs.*.address.string' => 'The load leg address field must be a string.',
      'load_legs.*.city.required' => 'The load leg city field is required.',
      'load_legs.*.city.max' => 'The load leg city field maximum length is 255.',
      'load_legs.*.city.string' => 'The load leg city field must be a string.',
      'load_legs.*.state.required' => 'The load leg state field is required.',
      'load_legs.*.state.max' => 'The load leg state field maximum length is 255.',
      'load_legs.*.state.string' => 'The load leg state field must be a string.',
      'load_legs.*.zip_code.required' => 'The load leg zip code field is required.',
      'load_legs.*.zip_code.max' => 'The load leg zip code field maximum length is 255.',
      'load_legs.*.zip_code.string' => 'The load leg zip code field must be a string.',
      'load_legs.*.latitude.required' => 'The load leg latitude field is required.',
      'load_legs.*.longitude.required' => 'The load leg longitude field is required.',
      'load_legs.*.contact_person.max' => 'The load leg contact person field maximum length is 255.',
      'load_legs.*.contact_person.string' => 'The load leg contact person field must be a string.',
      'load_legs.*.contact_number.max' => 'The load leg contact number field maximum length is 255.',
      'load_legs.*.contact_number.string' => 'The load leg contact number field must be a string.',
      'load_legs.*.date.required' => 'The load leg date field is required.',
      'load_legs.*.date.date_format' => 'The load leg date field does not match the format ' . config('constant.date_format') . '.',
      'load_legs.*.end_date.date_format' => 'The load leg end_date field does not match the format ' . config('constant.date_format') . '.',
      'load_legs.*.time.date_format' => 'The load leg time field does not match the format ' . config('constant.time_format') . '.',
      'load_legs.*.end_time.date_format' => 'The load leg end time field does not match the format ' . config('constant.time_format') . '.',
      'load_legs.*.note.max' => 'The load leg note field maximum length is 4000.',
      'load_legs.*.note.string' => 'The load leg note field must be a string.',
      'load_legs.*.order.integer' => 'The leg order field must be an integer.',
      'load_legs.*.order.between' => 'The leg order field must be between 1 and 100',
      'load_legs.*.dropTrailerType.string' => 'The load legs dropTrailerType field must be a string.',
      'load_legs.*.hookTrailerType.string' => 'The load legs hookTrailerType field must be a string.',
      'load_legs.*.dropTrailerType.in' => 'The load legs dropTrailerType field must be in ' . $dropHookTrailerType,
      'load_legs.*.hookTrailerType.in' => 'The load legs hookTrailerType field must be in ' . $dropHookTrailerType,
      'load_legs.*.dropTrailerId.exists' => 'The load legs dropTrailerId field must be valid.',
      'load_legs.*.hookTrailerId.exists' => 'The load legs hookTrailerId field must be valid.',
      'load_legs.*.dropTrailerId.integer' => 'The load legs dropTrailerId field must be an integer.',
      'load_legs.*.hookTrailerId.integer' => 'The load legs hookTrailerId field must be an integer.',
      'load_legs.*.containerHere.boolean' => 'The load legs container here field must be a boolean.',

      'customer_id.required' => 'Please select a customer for the load.',
      'drivers.*.driver_ids.required_with' => 'Please select driver.',
      'drivers.*.driver_ids.required_if' => 'Please select driver to dispatch, or cancel dispatch now.',
      'drivers.*.driver_ids.distinct' => 'Driver already selected.',
      'drivers.*.truck_id.required_with' => 'Please select truck.',
      'drivers.*.trailer_id.required_with' => 'Please select trailer.',
      'drivers.*.trailer_id.required_if' => 'Please select trailer to drop, or cancel drop now.',
      'drivers.*.chassis.string' => 'The driver chassis field must be a string.',
      'drivers.*.chassis.max' => 'The driver chassis field max length should be 255.',
      'drivers.*.externalTrailerNumber.string' => 'The driver externalTrailerNumber field must be a string.',
      'drivers.*.externalTrailerNumber.max' => 'The driver externalTrailerNumber field max length should be 255.',
      'drivers.*.direction.required_if' => 'Please select direction.',

      'drivers.*.startLocation.address.string' => 'The driver start location address field must be a string.',
      'drivers.*.startLocation.address.max' => 'The driver start location address field max length should be 255.',
      'drivers.*.startLocation.city.string' => 'The driver start location city field must be a string.',
      'drivers.*.startLocation.city.max' => 'The driver start location city field max length should be 255.',
      'drivers.*.startLocation.city.required_with' => 'The driver start location city field is required with state,zip_code,latitude,longitude and distance.',
      'drivers.*.startLocation.state.string' => 'The driver start location state field must be a string.',
      'drivers.*.startLocation.state.max' => 'The driver start location state field max length should be 255.',
      'drivers.*.startLocation.state.required_with' => 'The driver start location state field is required with city,zip_code,latitude,longitude and distance.',
      'drivers.*.startLocation.zip_code.string' => 'The driver start location zip_code field must be a string.',
      'drivers.*.startLocation.zip_code.max' => 'The driver start location zip_code field max length should be 255.',
      'drivers.*.startLocation.zip_code.required_with' => 'The driver start location zip_code field is required with state,city,latitude,longitude and distance.',
      'drivers.*.startLocation.latitude.numeric' => 'The driver start location latitude field must be numeric.',
      'drivers.*.startLocation.latitude.required_with' => 'The driver start location latitude field is required with state,zip_code,city,longitude and distance.',
      'drivers.*.startLocation.longitude.numeric' => 'The driver start location longitude field must be numeric.',
      'drivers.*.startLocation.longitude.required_with' => 'The driver start location longitude field is required with state,zip_code,latitude,city and distance.',
      'drivers.*.startLocation.distance.numeric' => 'The driver start location distance field must be numeric.',
      'drivers.*.startLocation.distance.required_with' => 'The driver start location distance field is required with state,zip_code,longitude,latitude and city.',
      'drivers.*.startLocation.distance.between' => 'The driver start location distance field must be between -9999.9999 to 9999.9999.',
      'drivers.*.emptyDistance.numeric' => 'The driver empty distance field must be numeric.',
      'drivers.*.emptyDistance.between' => 'The driver empty distance field must be between 0 to 9999.9999.',
      'drivers.*.loadedDistance.numeric' => 'The driver loaded distance field must be numeric.',
      'drivers.*.loadedDistance.between' => 'The driver loaded distance field must be between 0 to 9999.9999.',
      'thirdPartyCarrier.instructions.string' => 'The ThirdPartyCarrier instructions field must be a string.',
      'thirdPartyCarrier.instructions.max' => 'The ThirdPartyCarrier instructions field maximum length is 255.',
      'thirdPartyCarrier.subTotal.numeric' => 'The ThirdPartyCarrier subTotal field must be an number.',
      'thirdPartyCarrier.discount.numeric' => 'The ThirdPartyCarrier discount field must be an number.',
      'thirdPartyCarrier.totalAmount.numeric' => 'The ThirdPartyCarrier totalAmount field must be an number.',
      //'thirdPartyCarrier.subTotal.min' => 'The ThirdPartyCarrier subTotal field minimum length is 0.',
      //'thirdPartyCarrier.discount.min' => 'The ThirdPartyCarrier discount field minimum length is 0.',
      //'thirdPartyCarrier.totalAmount.min' => 'The ThirdPartyCarrier totalAmount field minimum length is 0.',
      'thirdPartyCarrier.driverAssetAssignments.array' => 'The ThirdPartyCarrier driverAssetAssignments must be an array.',
      'thirdPartyCarrier.driverAssetAssignments.*.truckNumber.string' => 'The DriverAssetAssignments truck number field must be a string.',
      'thirdPartyCarrier.driverAssetAssignments.*.trailerNumber.string' => 'The DriverAssetAssignments trailer number field must be a string.',
      'thirdPartyCarrier.driverAssetAssignments.*.driverName.string' => 'The DriverAssetAssignments driver name field must be a string.',
      'thirdPartyCarrier.driverAssetAssignments.*.driverPhoneNumber.string' => 'The DriverAssetAssignments driver phone number field must be a string.',
      'thirdPartyCarrier.driverAssetAssignments.*.truckNumber.max' => 'The DriverAssetAssignments truck number field maximum length is 255.',
      'thirdPartyCarrier.driverAssetAssignments.*.trailerNumber.max' => 'The DriverAssetAssignments trailer number field maximum length is 255.',
      'thirdPartyCarrier.driverAssetAssignments.*.driverName.max' => 'The DriverAssetAssignments driver name field maximum length is 255.',
      'thirdPartyCarrier.driverAssetAssignments.*.driverPhoneNumber.max' => 'The DriverAssetAssignments driver phone number field maximum length is 255.',
      'thirdPartyCarrier.charges.hauling_fee.numeric' => 'The Charge hauling fee field must be an number.',
      'thirdPartyCarrier.charges.hauling_fee_rate.numeric' => 'The Charge hauling fee rate field must be an number.',
      'thirdPartyCarrier.charges.fuel_surcharge.numeric' => 'The Charge fuel surcharge field must be an number.',
      'thirdPartyCarrier.charges.fuel_surcharge_rate.numeric' => 'The Charge fuel surcharge rate field must be an number.',
      'thirdPartyCarrier.charges.hauling_fee_type.in' => 'The Charge hauling fee type field must be in ' .
        implode(',', config('constant.hauling_fees_type')),
      'thirdPartyCarrier.charges.haulingFeeQty.required_if' => 'The Charge hauling fee qty field must be required with hauling fee type ' .
        config('constant.haulingFeesTypeFeString.truck_hour'),
      'thirdPartyCarrier.charges.haulingFeeQty.numeric' => 'The Charge hauling fee qty field must be in a number',
      'thirdPartyCarrier.charges.haulingFeeQty.between' => 'The Charge hauling fee qty field must be in between 0 and 9999.99',
      'thirdPartyCarrier.charges.fuel_surcharge_type.in' => 'The Charge fuel surcharge type field must be in ' . implode(',', config('constant.fuel_surcharge_type')),
      'thirdPartyCarrier.charges.accessorial_fee.*.id.numeric' => 'The Accessorial fee id field must be an number.',
      'thirdPartyCarrier.charges.accessorial_fee.*.id.exists' => 'The Accessorial fee id field must be valid.',
      'thirdPartyCarrier.charges.accessorial_fee.*.rate.numeric' => 'The Accessorial fee rate field must be an number.',
      'thirdPartyCarrier.charges.accessorial_deduction.*.id.numeric' => 'The Accessorial deduction id field must be an number.',
      'thirdPartyCarrier.charges.accessorial_deduction.*.id.exists' => 'The Accessorial deduction id field must be valid.',
      'thirdPartyCarrier.charges.accessorial_deduction.*.rate.numeric' => 'The Accessorial deduction rate field must be an number.',
      'thirdPartyCarrier.ccEmails.array' => 'The ThirdPartyCarrier cc emails must be an array',
      'thirdPartyCarrier.ccEmails.*.email' => 'The ThirdPartyCarrier cc emails must be a valid email address.',
      'thirdPartyCarrier.ccEmails.*.distinct' => 'The ThirdPartyCarrier cc emails must be unique email address.',
      'thirdPartyCarrier.invoiceStatus.string' => 'The invoice status field must be a string.',
      'thirdPartyCarrier.invoiceStatus.in' => 'The invoice status field must be in ' .
        implode(',', config('constant.load.thirdPartyCarrier.status')),

      'pickedUpEquipment.number.string' => 'The picked up equipment number field must be a string type',
      'pickedUpEquipment.number.max' => 'The picked up equipment number field maximum length is 255.',
      'pickedUpEquipment.size.string' => 'The picked up equipment size field must be a string type',
      'pickedUpEquipment.size.max' => 'The picked up equipment size field maximum length is 255.',
      'pickedUpEquipment.type.string' => 'The picked up equipment type field must be a string type',
      'pickedUpEquipment.type.max' => 'The picked up equipment type field maximum length is 255.',
      'droppedOffEquipment.number.string' => 'The dropped off equipment number field must be a string type',
      'droppedOffEquipment.number.max' => 'The dropped off equipment number field maximum length is 255.',
      'droppedOffEquipment.size.string' => 'The dropped off equipment size field must be a string type',
      'droppedOffEquipment.size.max' => 'The dropped off equipment size field maximum length is 255.',
      'droppedOffEquipment.type.string' => 'The dropped off equipment type field must be a string type',
      'droppedOffEquipment.type.max' => 'The dropped off equipment type field maximum length is 255.',

      'multiPurposeStops.*.type.in' => 'The multiPurposeStops type field must be in ' . $multiPurposeStopsType,
      'multiPurposeStops.*.order.integer' => 'The terminal order field must be an integer.',
      'multiPurposeStops.*.order.between' => 'The terminal order field must be between 1 and 100',
      'multiPurposeStops.*.name.string' => 'The terminal name must be a string type.',
      'multiPurposeStops.*.name.max' => 'The terminal name maximum length is 255.',
      'multiPurposeStops.*.address.string' => 'The terminal Address field must be a string.',
      'multiPurposeStops.*.address.max' => 'The terminal Address field maximum length is 255.',
      'multiPurposeStops.*.zipCode.string' => 'The terminal zipCode field must be a string.',
      'multiPurposeStops.*.zipCode.max' => 'The terminal zipCode field maximum length is 255.',
      'multiPurposeStops.*.city.required' => 'The terminal city field is required.',
      'multiPurposeStops.*.city.string' => 'The terminal city field must be a string.',
      'multiPurposeStops.*.city.max' => 'The terminal city field maximum length is 255.',
      'multiPurposeStops.*.state.required' => 'The terminal state field is required.',
      'multiPurposeStops.*.state.string' => 'The terminal state field must be a string.',
      'multiPurposeStops.*.date.required' => 'The terminal date field is required.',
      'multiPurposeStops.*.date.date_format' => 'The terminal date must be valid date Y-m-d format.',
      'multiPurposeStops.*.endDate.date_format' => 'The terminal endDate must be valid date Y-m-d format.',
      'multiPurposeStops.*.endTime.date_format' => 'The terminal endTime must be valid time H:i format.',
      'multiPurposeStops.*.time.date_format' => 'The terminal time must be valid time H:i format.',
      'multiPurposeStops.*.contactPerson.string' => 'The terminal contactPerson field must be a string.',
      'multiPurposeStops.*.contactNumber.string' => 'The terminal contactNumber field must be a string.',
      'multiPurposeStops.*.state.max' => 'The terminal state field maximum length is 255.',
      'multiPurposeStops.*.latitude.required' => 'The terminal latitude field is required.',
      'multiPurposeStops.*.latitude.regex' => 'The terminal latitude field must be valid.',
      'multiPurposeStops.*.longitude.required' => 'The terminal longitude field is required.',
      'multiPurposeStops.*.longitude.regex' => 'The terminal longitude field must be valid.',
      'multiPurposeStops.*.notes.string' => 'The terminal notes field must be a string.',
      'multiPurposeStops.*.notes.max' => 'The terminal notes field maximum length is 2000.',
      'multiPurposeStops.*.dropTrailerType.string' => 'The terminal dropTrailerType field must be a string.',
      'multiPurposeStops.*.hookTrailerType.string' => 'The terminal hookTrailerType field must be a string.',
      'multiPurposeStops.*.dropTrailerType.in' => 'The terminal dropTrailerType field must be in ' . $dropHookTrailerType,
      'multiPurposeStops.*.dropTrailerId.exists' => 'The terminal dropTrailerId field must be valid.',
      'multiPurposeStops.*.dropTrailerId.integer' => 'The terminal dropTrailerId field must be an integer.',
      'multiPurposeStops.*.hookTrailerId.exists' => 'The terminal hookTrailerId field must be valid.',
      'multiPurposeStops.*.hookTrailerId.integer' => 'The terminal hookTrailerId field must be an integer.',
      'multiPurposeStops.*.hookTrailerType.in' => 'The terminal hookTrailerType field must be in ' . $dropHookTrailerType,
      'multiPurposeStops.*.segmentDistance.numeric' => 'The terminal segmentDistance field must be numeric.',
      'multiPurposeStops.*.segmentDistance.between' => 'The terminal segmentDistance field must be between 0 to 9999.9999',
      'multiPurposeStops.*.containerHere.boolean' => 'The terminal container here field must be a boolean.',

      'notes.*.note.max' => 'The notes note field maximum length is 4000.',
      'notes.*.note.string' => 'The notes note field is supported only string type.',
      'quote.id.required_with' => 'The Quote id field is required with quote.',
      'quote.id.integer' => 'The Quote id field must be an integer.',
      'quote.id.exists' => 'The Quote id field must be valid.',
      'quote.responseId.required_with' => 'The Quote responseId field is required with quote.',
      'quote.responseId.integer' => 'The Quote responseId field must be an integer.',
      'quote.responseId.exists' => 'The Quote responseId field must be valid.',
    ];
  }
}
