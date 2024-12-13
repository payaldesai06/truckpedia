<?php

namespace App\Http\Requests\Api\Truckpedia;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SearchFromCarrierWebsiteRequest extends FormRequest {
  /**
   * Get the validation rules that apply to the request.
   * @return array
   */
  public function rules(): array {
    return [
      'origin' => 'required',
      'origin.city' => 'required|string|max:255',
      'origin.state' => 'required|string|max:255',
      'origin.zipCode' => 'nullable|string|max:255',
      'origin.latitude' => 'required|numeric',
      'origin.longitude' => 'required|numeric',
      'origin.startDate' => 'required|date|date_format:' . config('constant.date_format'),
      'origin.endDate' => 'required|date|date_format:' . config('constant.date_format'),
      'origin.startTime' => 'nullable|required_with:origin.endTime|date_format:' . config('constant.time_format'),
      'origin.endTime' => 'nullable|required_with:origin.startTime|date_format:' . config('constant.time_format'),
      'destination' => 'required',
      'destination.city' => 'required|string|max:255',
      'destination.state' => 'required|string|max:255',
      'destination.zipCode' => 'nullable|string|max:255',
      'destination.latitude' => 'required|numeric',
      'destination.longitude' => 'required|numeric',
      'distance' => 'required|numeric',
      'weightInLbs' => 'nullable|numeric',
      'truckTypes' => 'nullable|array',
      'truckTypes.*' => 'in:' . implode(',', config('constant.truck_types')),
      'equipmentType' => 'nullable|string|in:' .
        implode(',', config('constant.planning.schedule.equipmentTypes')),
      'carrierCompanyId' => 'required|integer|exists:admin_company_details,id',
    ];
  }

  public function messages(): array {
    return [
      'origin.city.required' => 'The origin city field is required.',
      'origin.city.string' => 'The origin city field must be a string.',
      'origin.city.max' => 'The origin city field maximum length is 255.',
      'origin.state.required' => 'The origin state field is required.',
      'origin.state.string' => 'The origin state field must be a string.',
      'origin.state.max' => 'The origin state field maximum length is 255.',
      'origin.zipCode.string' => 'The origin zipCode field must be a string.',
      'origin.zipCode.max' => 'The origin zipCode field maximum length is 255.',
      'origin.latitude.required' => 'The origin latitude field is required.',
      'origin.latitude.numeric' => 'The origin latitude field must be an numeric.',
      'origin.longitude.required' => 'The origin longitude field is required.',
      'origin.longitude.numeric' => 'The origin longitude field must be an numeric.',
      'origin.startDate.required' => 'The origin startDate field is required.',
      'origin.startDate.date' => 'The origin startDate field must be an date.',
      'origin.startDate.date_format' => 'The origin startDate does not match the format ' . config('constant.date_format'),
      'origin.endDate.required' => 'The origin endDate field is required.',
      'origin.endDate.date' => 'The origin endDate field must be an date.',
      'origin.endDate.date_format' => 'The origin endDate does not match the format ' . config('constant.date_format'),
      'origin.startTime.date_format' => 'The origin startTime does not match the format ' . config('constant.time_format'),
      'origin.endTime.date_format' => 'The origin endTime does not match the format ' . config('constant.time_format'),
      'origin.startTime.required_with' => 'The origin startTime is required with origin endTime.',
      'origin.endTime.required_with' => 'The origin endTime is required with origin startTime.',

      'destination.city.required' => 'The destination city field is required.',
      'destination.city.string' => 'The destination city field must be a string.',
      'destination.city.max' => 'The destination city field maximum length is 255.',
      'destination.state.required' => 'The destination state field is required.',
      'destination.state.string' => 'The destination state field must be a string.',
      'destination.state.max' => 'The destination state field maximum length is 255.',
      'destination.zipCode.string' => 'The destination zipCode field must be a string.',
      'destination.zipCode.max' => 'The destination zipCode field maximum length is 255.',
      'destination.latitude.required' => 'The destination latitude field is required.',
      'destination.latitude.numeric' => 'The destination latitude field must be an numeric.',
      'destination.longitude.required' => 'The destination longitude field is required.',
      'destination.longitude.numeric' => 'The destination longitude field must be an numeric.',

      'truckTypes.*.in' => 'The truck types must be one of the following types: '
        . implode(', ', array_values(config('constant.truck_types'))),

      'equipmentType.in' => 'The equipmentType must be one of the following types: '
        . implode(', ', array_values(config('constant.planning.schedule.equipmentTypes'))),
    ];
  }
}
