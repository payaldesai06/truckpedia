<?php

namespace App\Http\Requests\Api\Truckpedia\TruckReserved;

use Illuminate\Foundation\Http\FormRequest;

class CreateTruckReservedRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   */
  public function rules(): array {
    return [
      'companyId' => 'integer|required|exists:admin_company_details,id',
      'deliveryType' => 'nullable|in:' . implode(',', config('constant.deliveryType')),
      'estimatedPrice' => 'required|numeric',
      'additionalInformation' => 'nullable',
      'additionalInformation.estimatedShipmentValue' => 'nullable|numeric',
      'additionalInformation.loadUniqueId' => 'nullable|integer',
      'additionalInformation.itemDescription' => 'nullable|string|max:255',
      'additionalInformation.totalMiles' => 'nullable|numeric',
      'additionalInformation.calculateUsing' => 'nullable|required_with:additionalInformation.totalMiles|in:'. implode(',', config('constant.calculate_using')),

      'pickupDetails' => 'required|array|min:1',
      'pickupDetails.*.name' => 'nullable|string|max:255',
      'pickupDetails.*.address' => 'required|string|max:255',
      'pickupDetails.*.city' => 'required|string|max:255',
      'pickupDetails.*.state' => 'required|string|max:255',
      'pickupDetails.*.zipCode' => 'required|string|max:255',
      'pickupDetails.*.latitude' => 'required|required_with:pickupDetails.*.address|numeric',
      'pickupDetails.*.longitude' => 'required|required_with:pickupDetails.*.address|numeric',
      'pickupDetails.*.contactPerson' => 'nullable|string|max:255',
      'pickupDetails.*.phone' => 'nullable|string|max:255',
      'pickupDetails.*.email' => 'nullable|email|max:255',
      'pickupDetails.*.date' => 'required|date|date_format:' . config('constant.date_format'),
      'pickupDetails.*.startTime' => 'nullable|date_format:' . config('constant.time_format'),
      'pickupDetails.*.endTime' => 'nullable|date_format:' . config('constant.time_format'),
      'pickupDetails.*.specialInstruction' => 'nullable|string|max:255',
      'pickupDetails.*.reference' => 'nullable|string|max:255',

      'deliveryDetails' => 'required|array|min:1',
      'deliveryDetails.*.name' => 'nullable|string|max:255',
      'deliveryDetails.*.address' => 'required|string|max:255',
      'deliveryDetails.*.city' => 'required|string|max:255',
      'deliveryDetails.*.state' => 'required|string|max:255',
      'deliveryDetails.*.zipCode' => 'required|string|max:255',
      'deliveryDetails.*.latitude' => 'required|required_with:deliveryDetails.*.address|numeric',
      'deliveryDetails.*.longitude' => 'required|required_with:deliveryDetails.*.address|numeric',
      'deliveryDetails.*.contactPerson' => 'nullable|string|max:255',
      'deliveryDetails.*.phone' => 'nullable|string|max:255',
      'deliveryDetails.*.email' => 'nullable|email|max:255',
      'deliveryDetails.*.date' => 'required|date_format:' . config('constant.date_format'),
      'deliveryDetails.*.startTime' => 'nullable|date_format:' . config('constant.time_format'),
      'deliveryDetails.*.endTime' => 'nullable|date_format:' . config('constant.time_format'),
      'deliveryDetails.*.specialInstruction' => 'nullable|string|max:255',
      'deliveryDetails.*.reference' => 'nullable|string|max:255',
    ];
  }

  /**
   * Customize validation messages.
   * @return array
   */
  public function messages(): array {
    return [
      'additionalInformation.estimatedShipmentValue.numeric' => 'The additionalInformation estimatedShipmentValue field must be a numeric.',
      'additionalInformation.loadUniqueId.integer' => 'The additionalInformation loadUniqueId field must be an integer.',
      'additionalInformation.itemDescription.string' => 'The additionalInformation itemDescription field must be a string.',
      'additionalInformation.itemDescription.max' => 'The additionalInformation itemDescription field maximum length is 255.',
      'additionalInformation.totalMiles.numeric' => 'The additionalInformation totalMiles field must be a numeric.',
      'additionalInformation.calculateUsing.required_with' => 'The additionalInformation calculateUsing field is required with the additionalInformation totalMiles field.',
      'additionalInformation.calculateUsing.in' => 'The additionalInformation calculateUsing field is supported only '. implode(',', config('constant.calculate_using')),

      'pickupDetails.*.name.string' => 'The pickupDetails name field must be a string.',
      'pickupDetails.*.name.max' => 'The pickupDetails name field maximum length is 255.',
      'pickupDetails.*.address.required' => 'The pickupDetails address field is required.',
      'pickupDetails.*.address.string' => 'The pickupDetails address field must be a string.',
      'pickupDetails.*.address.max' => 'The pickupDetails address field maximum length is 255.',
      'pickupDetails.*.city.required' => 'The pickupDetails city field is required.',
      'pickupDetails.*.city.string' => 'The pickupDetails city field must be a string.',
      'pickupDetails.*.city.max' => 'The pickupDetails city field maximum length is 255.',
      'pickupDetails.*.state.required' => 'The pickupDetails state field is required.',
      'pickupDetails.*.state.string' => 'The pickupDetails state field must be a string.',
      'pickupDetails.*.state.max' => 'The pickupDetails state field maximum length is 255.',
      'pickupDetails.*.zipCode.required' => 'The pickupDetails zipCode field is required.',
      'pickupDetails.*.zipCode.string' => 'The pickupDetails zipCode field must be a string.',
      'pickupDetails.*.zipCode.max' => 'The pickupDetails zipCode field maximum length is 255.',
      'pickupDetails.*.latitude.required' => 'The pickupDetails latitude field is required.',
      'pickupDetails.*.latitude.numeric' => 'The pickupDetails latitude field must be a numeric.',
      'pickupDetails.*.latitude.required_with' => 'The pickupDetails latitude field must be required with pickupDetails address field',
      'pickupDetails.*.longitude.required' => 'The pickupDetails longitude field is required.',
      'pickupDetails.*.longitude.numeric' => 'The pickupDetails longitude field must be a numeric.',
      'pickupDetails.*.longitude.required_with' => 'The pickupDetails longitude field must be required with pickupDetails address field',
      'pickupDetails.*.contactPerson.string' => 'The pickupDetails contactPerson field must be a string.',
      'pickupDetails.*.contactPerson.max' => 'The pickupDetails contactPerson field maximum length is 255.',
      'pickupDetails.*.phone.string' => 'The pickupDetails phone field must be a string.',
      'pickupDetails.*.phone.max' => 'The pickupDetails phone field maximum length is 255.',
      'pickupDetails.*.email.string' => 'The pickupDetails email field must be a string.',
      'pickupDetails.*.email.max' => 'The pickupDetails email field maximum length is 255.',
      'pickupDetails.*.date.required' => 'The pickupDetails date field is required.',
      'pickupDetails.*.date.date' => 'The pickupDetails date field must be an date.',
      'pickupDetails.*.date.date_format' => 'The pickupDetails date does not match the format '. config('constant.date_format'),
      'pickupDetails.*.startTime.date' => 'The pickupDetails startTime field must be an date.',
      'pickupDetails.*.startTime.date_format' => 'The pickupDetails startTime does not match the format '. config('constant.time_format'),
      'pickupDetails.*.endTime.date' => 'The pickupDetails endTime field must be an date.',
      'pickupDetails.*.endTime.date_format' => 'The pickupDetails endTime does not match the format '. config('constant.time_format'),
      'pickupDetails.*.specialInstruction.string' => 'The pickupDetails specialInstruction field must be a string.',
      'pickupDetails.*.specialInstruction.max' => 'The pickupDetails specialInstruction field maximum length is 255.',
      'pickupDetails.*.reference.string' => 'The pickupDetails reference field must be a string.',
      'pickupDetails.*.reference.max' => 'The pickupDetails reference field maximum length is 255.',

      'deliveryDetails.*.name.string' => 'The deliveryDetails name field must be a string.',
      'deliveryDetails.*.name.max' => 'The deliveryDetails name field maximum length is 255.',
      'deliveryDetails.*.address.required' => 'The deliveryDetails address field is required.',
      'deliveryDetails.*.address.string' => 'The deliveryDetails address field must be a string.',
      'deliveryDetails.*.address.max' => 'The deliveryDetails address field maximum length is 255.',
      'deliveryDetails.*.city.required' => 'The deliveryDetails city field is required.',
      'deliveryDetails.*.city.string' => 'The deliveryDetails city field must be a string.',
      'deliveryDetails.*.city.max' => 'The deliveryDetails city field maximum length is 255.',
      'deliveryDetails.*.state.required' => 'The deliveryDetails state field is required.',
      'deliveryDetails.*.state.string' => 'The deliveryDetails state field must be a string.',
      'deliveryDetails.*.state.max' => 'The deliveryDetails state field maximum length is 255.',
      'deliveryDetails.*.zipCode.required' => 'The deliveryDetails zipCode field is required.',
      'deliveryDetails.*.zipCode.string' => 'The deliveryDetails zipCode field must be a string.',
      'deliveryDetails.*.zipCode.max' => 'The deliveryDetails zipCode field maximum length is 255.',
      'deliveryDetails.*.latitude.required' => 'The deliveryDetails latitude field is required.',
      'deliveryDetails.*.latitude.numeric' => 'The deliveryDetails latitude field must be a numeric.',
      'deliveryDetails.*.latitude.required_with' => 'The deliveryDetails latitude field must be required with deliveryDetails address field',
      'deliveryDetails.*.longitude.required' => 'The deliveryDetails longitude field is required.',
      'deliveryDetails.*.longitude.numeric' => 'The deliveryDetails longitude field must be a numeric.',
      'deliveryDetails.*.longitude.required_with' => 'The deliveryDetails longitude field must be required with deliveryDetails address field',
      'deliveryDetails.*.contactPerson.string' => 'The deliveryDetails contactPerson field must be a string.',
      'deliveryDetails.*.contactPerson.max' => 'The deliveryDetails contactPerson field maximum length is 255.',
      'deliveryDetails.*.phone.string' => 'The deliveryDetails phone field must be a string.',
      'deliveryDetails.*.phone.max' => 'The deliveryDetails phone field maximum length is 255.',
      'deliveryDetails.*.email.string' => 'The deliveryDetails email field must be a string.',
      'deliveryDetails.*.email.max' => 'The deliveryDetails email field maximum length is 255.',
      'deliveryDetails.*.date.required' => 'The deliveryDetails date field is required.',
      'deliveryDetails.*.date.date' => 'The deliveryDetails date field must be an date.',
      'deliveryDetails.*.date.date_format' => 'The deliveryDetails date does not match the format '. config('constant.date_format'),
      'deliveryDetails.*.startTime.date' => 'The deliveryDetails startTime field must be an date.',
      'deliveryDetails.*.startTime.date_format' => 'The deliveryDetails startTime does not match the format '. config('constant.time_format'),
      'deliveryDetails.*.endTime.date' => 'The deliveryDetails endTime field must be an date.',
      'deliveryDetails.*.endTime.date_format' => 'The deliveryDetails endTime does not match the format '. config('constant.time_format'),
      'deliveryDetails.*.specialInstruction.string' => 'The deliveryDetails specialInstruction field must be a string.',
      'deliveryDetails.*.specialInstruction.max' => 'The deliveryDetails specialInstruction field maximum length is 255.',
      'deliveryDetails.*.reference.string' => 'The deliveryDetails reference field must be a string.',
      'deliveryDetails.*.reference.max' => 'The deliveryDetails reference field maximum length is 255.',
    ];
  }
}