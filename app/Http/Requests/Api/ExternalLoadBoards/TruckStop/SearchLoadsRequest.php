<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\TruckStop;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SearchLoadsRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      /*'truckstopEquipmentTypes' => [
        'nullable',
        'array',
        'max:3',
        Rule::in(config('constant.truckstop_equipment_types'))
      ],*/

      'manualSearchTypes' => [
        'nullable',
        'array',
        Rule::in(array_keys(config('constant.load_matching_manual_search_type_to_truckstop')))
      ],

      'ezpapelEquipmentType' => 'nullable|string',

      'capacity' => 'nullable|in:FULL,PARTIAL,BOTH',
      'length' => 'nullable|numeric',
      'weight' => 'nullable|numeric',

      'origin' => 'required',

      'origin.city' => 'required_without:origin.states|string', // Laravel 7.0 does not have prohibits:origin.states|
      'origin.state' => 'required_without:origin.states|string',
      'origin.latitude' => 'required_without:origin.states|numeric',
      'origin.longitude' => 'required_without:origin.states|numeric',
      'origin.deadhead' => 'nullable|numeric',

      'origin.states' => 'required_without:origin.city|array|min:1',
      'origin.states.*' => 'string|size:2',

      'destination' => 'required',

      'destination.city' => 'required_without:destination.states|string', // prohibits:destination.states|
      'destination.state' => 'required_without:destination.states|string',
      'destination.latitude' => 'required_without:destination.states|numeric',
      'destination.longitude' => 'required_without:destination.states|numeric',
      'destination.deadhead' => 'nullable|numeric',

      'destination.states' => 'required_without:destination.city|array|min:1',
      'destination.states.*' => 'string|size:2',

      'startDate' => 'required|date_format:Y-m-d',
      'endDate' => 'nullable|date_format:Y-m-d',

      /*'pageNumber' => [
        'nullable',
        'numeric',
        'min:1'
      ],

      'pageSize' => [
        Rule::requiredIf(function () {
          return intval($this->pageNumber) > 5;
        }),
        'numeric',
        'max:200'
      ],*/
    ];
  }
}
