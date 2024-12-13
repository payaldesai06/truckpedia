<?php

namespace App\Http\Requests\Api\ExternalLoadBoards\CHRobinson;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SearchLoadsRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'manualSearchTypes' => [
        'nullable',
        'array',
        Rule::in(array_keys(config('constant.load_matching_manual_search_type_to_chrobinson')))
      ],

      'ezpapelEquipmentType' => 'nullable|string',

      'length' => 'nullable|numeric',
      'weight' => 'nullable|numeric',

      'origin' => 'required',

      'origin.city' => 'required_without:origin.states|string', // Laravel 7.0 does not have prohibits:origin.states|
      'origin.state' => 'required_without:origin.states|string',
      'origin.latitude' => 'required_without:origin.states|numeric',
      'origin.longitude' => 'required_without:origin.states|numeric',
      'origin.deadhead' => 'required_without:origin.states|numeric',

      'origin.states' => 'required_without:origin.city|array|min:1',
      'origin.states.*' => 'string|size:2',

      'destination' => 'required',

      'destination.city' => 'required_without:destination.states|string', // prohibits:destination.states|
      'destination.state' => 'required_without:destination.states|string',
      'destination.latitude' => 'required_without:destination.states|numeric',
      'destination.longitude' => 'required_without:destination.states|numeric',
      'destination.deadhead' => 'required_without:destination.states|numeric',

      'destination.states' => 'required_without:destination.city|array|min:1',
      'destination.states.*' => 'string|size:2',

      'startDate' => 'required|date_format:Y-m-d',
      'endDate' => 'nullable|date_format:Y-m-d',
    ];
  }
}
