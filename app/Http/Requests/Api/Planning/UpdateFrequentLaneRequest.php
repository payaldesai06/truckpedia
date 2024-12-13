<?php

namespace App\Http\Requests\Api\Planning;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class UpdateFrequentLaneRequest extends FormRequest {
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
   * @throws Exception
   */
  public function rules(): array {
    $rules = [
      'id' => 'required|integer|exists:company_frequent_lanes,id,company_id,' . getAuthAdminCompanyId(),
      'origin.streetAddress' => 'nullable|string|max:255',
      'origin.city' => 'required|string|max:255',
      'origin.state' => 'required|string|max:255',
      'origin.latitude' => 'required|numeric',
      'origin.longitude' => 'required|numeric',
      'origin.deadhead' => 'required|integer|between:0,1000',
      'destination.streetAddress' => 'nullable|string|max:255',
      'destination.city' => 'required|string|max:255',
      'destination.state' => 'required|string|max:255',
      'destination.latitude' => 'required|numeric',
      'destination.longitude' => 'required|numeric',
      'destination.deadhead' => 'required|integer|between:0,1000',
      'targetPrice' => 'required_without:targetRpm|numeric|between:0,999999.99',
      'targetRpm' => 'required_without:targetPrice|numeric|between:0,99.9999',
      'targetWeight' => 'required|integer|between:0,999999',
    ];
    return $rules;
  }

  public function messages(): array {
    return [
      'origin.streetAddress.string' => 'The origin streetAddress field must be a string.',
      'origin.streetAddress.max' => 'The origin streetAddress field maximum length is 255.',
      'origin.city.required' => 'The origin city field is required.',
      'origin.city.string' => 'The origin city field must be a string.',
      'origin.city.max' => 'The origin city field maximum length is 255.',
      'origin.state.required' => 'The origin state field is required.',
      'origin.state.string' => 'The origin state field must be a string.',
      'origin.state.max' => 'The origin state field maximum length is 255.',
      'origin.latitude.required' => 'The origin latitude field is required.',
      'origin.latitude.numeric' => 'The origin latitude field must be an numeric.',
      'origin.longitude.required' => 'The origin longitude field is required.',
      'origin.longitude.numeric' => 'The origin longitude field must be an numeric.',
      'origin.deadhead.required' => 'The origin deadhead field is required.',
      'origin.deadhead.integer' => 'The origin deadhead field must be an integer.',
      'origin.deadhead.between' => 'The origin deadhead field must be between 0 and 1000',

      'destination.streetAddress.string' => 'The destination streetAddress field must be a string.',
      'destination.streetAddress.max' => 'The destination streetAddress field maximum length is 255.',
      'destination.city.required' => 'The destination city field is required.',
      'destination.city.string' => 'The destination city field must be a string.',
      'destination.city.max' => 'The destination city field maximum length is 255.',
      'destination.state.required' => 'The destination state field is required.',
      'destination.state.string' => 'The destination state field must be a string.',
      'destination.state.max' => 'The destination state field maximum length is 255.',
      'destination.latitude.required' => 'The destination latitude field is required.',
      'destination.latitude.numeric' => 'The destination latitude field must be an numeric.',
      'destination.longitude.required' => 'The destination longitude field is required.',
      'destination.longitude.numeric' => 'The destination longitude field must be an numeric.',
      'destination.deadhead.required' => 'The destination deadhead field is required.',
      'destination.deadhead.integer' => 'The destination deadhead field must be an integer.',
      'destination.deadhead.between' => 'The destination deadhead field must be between 0 and 1000',

      'targetPrice.between' => 'The targetPrice field must be between 0 and 999999.99',
      'targetRpm.between' => 'The targetRpm field must be between 0 and 99.9999',
      'targetWeight.between' => 'The targetWeight field must be between 0 and 999999',
    ];
  }
}
