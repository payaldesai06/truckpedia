<?php

namespace App\Http\Requests\Api\Truckpedia\TruckReserved;

use Illuminate\Foundation\Http\FormRequest;

class ReserveRequestFromCarrierWebsite extends FormRequest {
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
      'estimatedPrice' => 'nullable|numeric',
      'companyId' => 'required|integer|exists:admin_company_details,id',

      'shipperBrokerDetails' => 'required',
      'shipperBrokerDetails.firstName' => 'required|string|max:255',
      'shipperBrokerDetails.lastName' => 'required|string|max:255',
      'shipperBrokerDetails.companyName' => 'required|string|max:255',
      'shipperBrokerDetails.phone' => 'required|string|max:255',
      'shipperBrokerDetails.email' => 'required|email|string|max:255',
      'shipperBrokerDetails.ccEmails' => 'nullable|array',
      'shipperBrokerDetails.ccEmails.*' => 'email|distinct',

      'additionalInformation' => 'required',
      'additionalInformation.totalMiles' => 'required|numeric|min:0',
      'additionalInformation.calculateUsing' => 'required|in:' . implode(',', config('constant.calculate_using')),

      'pickupDetails' => 'required|array',
      'pickupDetails.*.city' => 'required|string|max:255',
      'pickupDetails.*.state' => 'required|string|max:255',
      'pickupDetails.*.zipCode' => 'nullable|string|max:255',
      'pickupDetails.*.latitude' => 'required|numeric',
      'pickupDetails.*.longitude' => 'required|numeric',
      'pickupDetails.*.date' => 'required|date|date_format:' . config('constant.date_format'),
      'pickupDetails.*.weightInLbs' => 'nullable|numeric|min:0',

      'deliveryDetails' => 'required|array',
      'deliveryDetails.*.city' => 'required|string|max:255',
      'deliveryDetails.*.state' => 'required|string|max:255',
      'deliveryDetails.*.zipCode' => 'nullable|string|max:255',
      'deliveryDetails.*.latitude' => 'required|numeric',
      'deliveryDetails.*.longitude' => 'required|numeric',
      'deliveryDetails.*.date' => 'required|date_format:' . config('constant.date_format')
    ];
  }

  /**
   * Customize validation messages.
   * @return array
   */
  public function messages(): array {
    return [

      'shipperBrokerDetails.required' => 'The shipperBrokerDetails field is required.',
      'shipperBrokerDetails.firstName.required' => 'The shipperBrokerDetails firstName field is required.',
      'shipperBrokerDetails.firstName.string' => 'The shipperBrokerDetails firstName field must be a string.',
      'shipperBrokerDetails.firstName.max' => 'The shipperBrokerDetails firstName may not be greater than 255 characters.',
      'shipperBrokerDetails.lastName.required' => 'The shipperBrokerDetails lastName field is required.',
      'shipperBrokerDetails.lastName.string' => 'The shipperBrokerDetails lastName field must be a string.',
      'shipperBrokerDetails.lastName.max' => 'The shipperBrokerDetails lastName may not be greater than 255 characters.',
      'shipperBrokerDetails.companyName.required' => 'The shipperBrokerDetails companyName field is required.',
      'shipperBrokerDetails.companyName.string' => 'The shipperBrokerDetails companyName field must be a string.',
      'shipperBrokerDetails.companyName.max' => 'The shipperBrokerDetails companyName may not be greater than 255 characters.',
      'shipperBrokerDetails.phone.required' => 'The shipperBrokerDetails phone field is required.',
      'shipperBrokerDetails.phone.string' => 'The shipperBrokerDetails phone field must be a string.',
      'shipperBrokerDetails.phone.max' => 'The shipperBrokerDetails phone may not be greater than 255 characters.',
      'shipperBrokerDetails.email.required' => 'The shipperBrokerDetails email field is required.',
      'shipperBrokerDetails.email.string' => 'The shipperBrokerDetails email field must be a string.',
      'shipperBrokerDetails.email.max' => 'The shipperBrokerDetails email may not be greater than 255 characters.',
      'shipperBrokerDetails.email.email' => 'The shipperBrokerDetails email is invalid.',
      'shipperBrokerDetails.ccEmails.array' => 'The shipperBrokerDetails ccEmails field must be an array.',
      'shipperBrokerDetails.ccEmails.*.email' => 'The shipperBrokerDetails ccEmails must be a valid email address.',

      'additionalInformation.required' => 'The additionalInformation field is required.',
      'additionalInformation.totalMiles.required' => 'The additionalInformation totalMiles field is required.',
      'additionalInformation.totalMiles.numeric' => 'The additionalInformation totalMiles field must be a numeric.',
      'additionalInformation.totalMiles.min' => 'The additionalInformation totalMiles must be at least 0.',
      'additionalInformation.calculateUsing.required' => 'The additionalInformation calculateUsing field is required.',
      'additionalInformation.calculateUsing.in' => 'The additionalInformation calculateUsing field is supported only ' . implode(',', config('constant.calculate_using')),

      'pickupDetails.*.city.required' => 'The pickupDetails city field is required.',
      'pickupDetails.*.city.string' => 'The pickupDetails city field must be a string.',
      'pickupDetails.*.city.max' => 'The pickupDetails city may not be greater than 255 characters.',
      'pickupDetails.*.state.required' => 'The pickupDetails state field is required.',
      'pickupDetails.*.state.string' => 'The pickupDetails state field must be a string.',
      'pickupDetails.*.state.max' => 'The pickupDetails state may not be greater than 255 characters.',
      'pickupDetails.*.zipCode.required' => 'The pickupDetails zipCode field is required.',
      'pickupDetails.*.zipCode.string' => 'The pickupDetails zipCode field must be a string.',
      'pickupDetails.*.latitude.required' => 'The pickupDetails latitude field is required.',
      'pickupDetails.*.latitude.numeric' => 'The pickupDetails latitude field must be a numeric.',
      'pickupDetails.*.longitude.required' => 'The pickupDetails longitude field is required.',
      'pickupDetails.*.longitude.numeric' => 'The pickupDetails longitude field must be a numeric.',
      'pickupDetails.*.date.required' => 'The pickupDetails date field is required.',
      'pickupDetails.*.date.date' => 'The pickupDetails date field must be an date.',
      'pickupDetails.*.date.date_format' => 'The pickupDetails date does not match the format ' . config('constant.date_format'),
      'pickupDetails.*.weightInLbs.numeric' => 'The pickupDetails weightInLbs field must be a numeric.',
      'pickupDetails.*.weightInLbs.min' => 'The pickupDetails weightInLbs must be at least 0.',

      'deliveryDetails.*.city.required' => 'The deliveryDetails city field is required.',
      'deliveryDetails.*.city.string' => 'The deliveryDetails city field must be a string.',
      'deliveryDetails.*.city.max' => 'The deliveryDetails city may not be greater than 255 characters.',
      'deliveryDetails.*.state.required' => 'The deliveryDetails state field is required.',
      'deliveryDetails.*.state.string' => 'The deliveryDetails state field must be a string.',
      'deliveryDetails.*.state.max' => 'The deliveryDetails state may not be greater than 255 characters.',
      'deliveryDetails.*.zipCode.required' => 'The deliveryDetails zipCode field is required.',
      'deliveryDetails.*.zipCode.string' => 'The deliveryDetails zipCode field must be a string.',
      'deliveryDetails.*.zipCode.max' => 'The deliveryDetails zipCode may not be greater than 255 characters.',
      'deliveryDetails.*.latitude.required' => 'The deliveryDetails latitude field is required.',
      'deliveryDetails.*.latitude.numeric' => 'The deliveryDetails latitude field must be a numeric.',
      'deliveryDetails.*.longitude.required' => 'The deliveryDetails longitude field is required.',
      'deliveryDetails.*.longitude.numeric' => 'The deliveryDetails longitude field must be a numeric.',
      'deliveryDetails.*.date.required' => 'The deliveryDetails date field is required.',
      'deliveryDetails.*.date.date' => 'The deliveryDetails date field must be an date.',
      'deliveryDetails.*.date.date_format' => 'The deliveryDetails date does not match the format ' . config('constant.date_format'),
    ];
  }
}
