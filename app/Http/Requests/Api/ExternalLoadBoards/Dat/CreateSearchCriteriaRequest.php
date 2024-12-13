<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\Dat;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateSearchCriteriaRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      // 'equipmentClasses' => 'nullable|array', // |min:1
      // 'equipmentClasses.*' => 'string|size:1|in:B,C,D,F,K,N,O,R,S,T,V,Z',

      'manualSearchTypes' => [
        'nullable',
        'array',
        Rule::in(array_keys(config('constant.load_matching_manual_search_type_to_dat_type')))
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

      // prohibits:origin.city,origin.state,origin.latitude,origin.longitude|
      'origin.states' => 'required_without:origin.city|array|min:1',
      'origin.states.*' => 'string|size:2',

      'destination' => 'required',

      'destination.city' => 'required_without:destination.states|string', // prohibits:destination.states|
      'destination.state' => 'required_without:destination.states|string',
      'destination.latitude' => 'required_without:destination.states|numeric',
      'destination.longitude' => 'required_without:destination.states|numeric',
      'destination.deadhead' => 'nullable|numeric',

      // prohibits:destination.city,destination.state,destination.latitude,destination.longitude|
      'destination.states' => 'required_without:destination.city|array|min:1',
      'destination.states.*' => 'string|size:2',

      'startDate' => 'required|date_format:Y-m-d',
      'endDate' => 'nullable|date_format:Y-m-d'
    ];
  }
}
