<?php

namespace App\Http\Requests\Api\ExternalLoadParser\EmailLoadParser;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class EmailLoadParserRequest extends FormRequest {

  public function rules(): array {
    return [
      'loadBroker' => 'required|string',
      'company' => 'required|nullable',
      'load' => 'required|array',

      'load.pickupNumber' => 'required_if:loadBroker,==,GE|string|max:255',
      'load.loadNumber' => 'required_if:loadBroker,==,Transplace|string|max:255',
      'load.scac' => 'required_if:loadBroker,==,Transplace|string|max:255',
      'load.bolNumber' => 'required_if:loadBroker,==,Transplace|string|max:255',
      'load.specialUpdate' => 'string|nullable|in:cancel',

      'load.totalMiles' => 'nullable',
      'load.totalWeight' => 'nullable',
      'load.totalWeightUnit' => 'string|nullable', // |in:LB,LBS,lb,lbs // we may have other options
      'load.totalUnitCount' => 'nullable',
      'load.lineHaul' => 'nullable',
      'load.stopCharge' => 'nullable',
      'load.fuelCharge' => 'nullable',
      'load.spottingCharge' => 'nullable',
      'load.totalCost' => 'nullable',
      'load.specialInstructions' => 'string|nullable',
      'load.deliveryInstructions' => 'string|nullable',

      'load.shippers' => 'required_unless:load.specialUpdate,cancel|array|min:1',
      'load.shippers.*.pickupDate' => 'required|string',
      'load.shippers.*.pickupTime' => 'string|nullable',
      'load.shippers.*.pickupEndTime' => 'string|nullable',
      'load.shippers.*.pickupName' => 'required|max:255|string',
      'load.shippers.*.pickupAddress' => 'required|max:255|string',

      'load.receivers' => 'required_unless:load.specialUpdate,cancel|array|min:1',
      'load.receivers.*.deliveryDate' => 'nullable|string',
      'load.receivers.*.deliveryTime' => 'string|nullable',
      'load.receivers.*.deliveryEndTime' => 'string|nullable',
      'load.receivers.*.deliveryLoadType' => 'nullable|max:255|string',
      'load.receivers.*.deliveryName' => 'required|max:255|string',
      'load.receivers.*.deliveryAddress' => 'required|max:255|string',
      'load.receivers.*.specialInstructions' => 'string|nullable|max:4000',
      'load.receivers.*.deliveryInstructions' => 'string|nullable|max:4000',
    ];
  }

  public function messages(): array {
    return [
      'load.pickupNumber.required_if' => 'The Load Pickup Number is required when load broker is GE.',
      'load.pickupNumber.string' => 'The Load Pickup Number is supported only string.',
      'load.pickupNumber.max' => 'The Load Pickup Number maximum length is 255.',

      'load.loadNumber.required_if' => 'The Load Number is required when load broker is Transplace.',
      'load.loadNumber.string' => 'The Load Number is supported only string.',
      'load.loadNumber.max' => 'The Load Number maximum length is 255.',

      'load.specialUpdate.string' => 'The Load special update is supported only string.',

      'load.scac.required_if' => 'The Load scac is required when load broker is Transplace.',
      'load.scac.string' => 'The Load scac is supported only string.',
      'load.scac.max' => 'The Load scac maximum length is 255.',

      'load.bolNumber.required_if' => 'The Load Bol Number is required when load broker is Transplace.',
      'load.bolNumber.string' => 'The Load Bol Number is supported only string.',
      'load.bolNumber.max' => 'The Load Bol Number maximum length is 255.',

      'load.totalWeightUnit.string' => 'The Load Total Weight Unit is supported only string.',
      'load.deliveryInstructions.string' => 'The Load Delivery Instruction is supported only string.',

      'load.shippers.required' => 'The Load Shippers is required.',
      'load.shippers.array' => 'The Load Shippers must be an array.',
      'load.shippers.min' => 'The Load Shippers minimum 1 required.',

      'load.shippers.*.pickupDate.required' => 'The Load Shippers Pickup Date is required.',
      'load.shippers.*.pickupDate.string' => 'The Load Shippers Pickup Date is supported only string.',

      'load.shippers.*.pickupTime.string' => 'The Load Shippers Pickup Time is supported only string.',
      'load.shippers.*.pickupEndTime.string' => 'The Load Shippers Pickup End Time is supported only string.',

      'load.shippers.*.pickupName.required' => 'The Load Shippers Pickup Name is required.',
      'load.shippers.*.pickupName.max' => 'The Load Shippers Pickup Name maximum length is 255.',
      'load.shippers.*.pickupName.string' => 'The Load Shippers Pickup Name is supported only string.',

      'load.shippers.*.pickupAddress.required' => 'The Load Shippers Pickup Address is required.',
      'load.shippers.*.pickupAddress.max' => 'The Load Shippers Pickup Address maximum length is 255.',
      'load.shippers.*.pickupAddress.string' => 'The Load Shippers Pickup Address is supported only string.',

      'load.receivers.required' => 'The Load Receivers is required.',
      'load.receivers.array' => 'The Load Receivers must be an array.',
      'load.receivers.min' => 'The Load Receivers minimum 1 required.',

      'load.receivers.*.deliveryDate.required' => 'The Load Receivers Delivery Date is required.',
      'load.receivers.*.deliveryDate.string' => 'The Load Receivers Delivery Date is supported only string.',

      'load.receivers.*.deliveryTime.string' => 'The Load Receivers Delivery Time is supported only string.',

      'load.receivers.*.deliveryEndTime.string' => 'The Load Receivers Delivery End Time is supported only string.',

      'load.receivers.*.deliveryLoadType.max' => 'The Load Receivers Delivery Load Type maximum length is 255.',
      'load.receivers.*.deliveryLoadType.string' => 'The Load Receivers Delivery Load Type is supported only string.',

      'load.receivers.*.deliveryName.required' => 'The Load Receivers Delivery Name is required.',
      'load.receivers.*.deliveryName.max' => 'The Load Receivers Delivery Name maximum length is 255.',
      'load.receivers.*.deliveryName.string' => 'The Load Receivers Delivery Name is supported only string.',

      'load.receivers.*.deliveryAddress.required' => 'The Load Receivers Delivery Address is required',
      'load.receivers.*.deliveryAddress.max' => 'The Load Receivers Delivery Address maximum length is 255.',
      'load.receivers.*.deliveryAddress.string' => 'The Load Receivers Delivery Address is supported only string.',

      'load.receivers.*.specialInstructions.string' => 'The Load Receivers special instructions is supported only string.',
      'load.receivers.*.deliveryInstructions.string' => 'The Load Receivers delivery instructions is supported only string.',
      'load.receivers.*.specialInstructions.max' => 'The Load Receivers special instructions maximum length is 4000.',
      'load.receivers.*.deliveryInstructions.max' => 'The Load Receivers delivery instructions maximum length is 4000.',
    ];
  }
}
