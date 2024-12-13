<?php

namespace App\Http\Requests\Api\DriverPayTemplate;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class CreateDriverPayTemplateCustomFieldRequest extends FormRequest {
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
   *
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $byPercentageOfTypes = 'byPercentageOfHaulingFee,byPercentageOfFuelSurcharge,byPercentageOfTotalIncome';
    $notByRateOfTypes = 'byPercentageOfHaulingFee,byPercentageOfFuelSurcharge,byPercentageOfTotalIncome,formulaLoadedMiles,formulaEmptyMiles';
    $formulaTypes = 'formulaLoadedMiles,formulaEmptyMiles';
    $rules = [
      'target' => 'required|string|in:' . implode(',', config('constant.driverPayTemplate.target')),
      'type' => 'required|string|in:' . implode(',', config('constant.driverPayTemplate.type')),
      'name' => 'required|string|max:255',
      'defaultAccount' => 'nullable|string|max:255',
      'defaultRate' => 'required_unless:type,!=,' . $notByRateOfTypes . '|numeric|between:-999999.99,999999.99',
      'defaultPercentage' => 'required_if:type,' . $byPercentageOfTypes . '|numeric|between:-100,100',
      'defaultPayStartAfter' => 'nullable|required_if:type,stopPay|integer|between:0,9999',
      'defaultV2' => 'nullable|required_if:type,' . $formulaTypes . '|numeric|between:-99.9999,99.9999',
      'defaultV3' => 'nullable|required_if:type,' . $formulaTypes . '|numeric|between:-99.9999,99.9999',
      'taxable' => 'nullable|boolean',
    ];
    if (request('target') == 'trip') {
      $rules['type'] = 'required|string|in:flatPay';
    }
    return $rules;
  }
}
