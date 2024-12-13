<?php

namespace App\Http\Requests\Api\Load\Pipeline;

use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SetCustomizationRequest extends FormRequest {
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
   */
  public function rules(): array {
    $hideColumns = Rule::in(array_values(
      config('constant.pipelineCustomization.hideColumn')
    ));
    $showLabels = Rule::in(array_values(
      config('constant.pipelineCustomization.showLabels')
    ));

    return [
      /** hideColumns Object Validation */
      'hideColumns' => 'nullable|array',
      'hideColumns.*' => ['nullable', 'boolean', $hideColumns],
      'hideColumns.open' => 'nullable|boolean',
      'hideColumns.dispatched' => 'nullable|boolean',
      'hideColumns.inTransit' => 'nullable|boolean',
      'hideColumns.delivered' => 'nullable|boolean',
      'hideColumns.paymentStatus' => 'nullable|boolean',
      /** showLabels Object Validation */
      'showLabels' => 'nullable|array',
      'showLabels.*' => ['nullable', 'boolean', $showLabels],
      'showLabels.customerName' => 'nullable|boolean',
      'showLabels.loadNumber' => 'nullable|boolean',
      'showLabels.loadReference' => 'nullable|boolean',
      'showLabels.billToCode' => 'nullable|boolean',
      'showLabels.miles' => 'nullable|boolean',
      'showLabels.totalAmount' => 'nullable|boolean',
      'showLabels.shipperName' => 'nullable|boolean',
      'showLabels.shipperCityState' => 'nullable|boolean',
      'showLabels.shipperDateTime' => 'nullable|boolean',
      'showLabels.receiverName' => 'nullable|boolean',
      'showLabels.receiverCityState' => 'nullable|boolean',
      'showLabels.receiverDateTime' => 'nullable|boolean',
      'showLabels.equipmentType' => 'nullable|boolean',
      'showLabels.driver' => 'nullable|boolean',
      'showLabels.truck' => 'nullable|boolean',
      'showLabels.trailer' => 'nullable|boolean',
      'showLabels.shipperFreightEquipmentNumber' => 'nullable|boolean',
      'showLabels.shipperFreightDescription' => 'nullable|boolean',
      'filters' => 'nullable|json'
    ];
  }

  public function messages(): array {
    return [
      'hideColumns.open.boolean' => 'The hideColumns open field should be boolean type',
      'hideColumns.dispatched.boolean' => 'The hideColumns open field should be boolean type',
      'hideColumns.inTransit.boolean' => 'The hideColumns open field should be boolean type',
      'hideColumns.delivered.boolean' => 'The hideColumns open field should be boolean type',
      'hideColumns.paymentStatus.boolean' => 'The hideColumns open field should be boolean type',
      'showLabels.customerName.boolean' => 'The hideColumns open field should be boolean type',
      'showLabels.loadNumber.boolean' => 'The showLabels loadNumber field should be boolean type',
      'showLabels.loadReference.boolean' => 'The showLabels loadReference field should be boolean type',
      'showLabels.miles.boolean' => 'The showLabels miles field should be boolean type',
      'showLabels.totalAmount.boolean' => 'The showLabels totalAmount field should be boolean type',
      'showLabels.shipperName.boolean' => 'The showLabels shipperName field should be boolean type',
      'showLabels.shipperCityState.boolean' => 'The showLabels shipperCityState field should be boolean type',
      'showLabels.shipperDateTime.boolean' => 'The showLabels shipperDateTime field should be boolean type',
      'showLabels.equipmentType.boolean' => 'The showLabels equipmentType field should be boolean type',
      'showLabels.driver.boolean' => 'The showLabels driver field should be boolean type',
      'showLabels.truck.boolean' => 'The showLabels truck field should be boolean type',
      'showLabels.trailer.boolean' => 'The showLabels trailer field should be boolean type',
      'showLabels.shipperFreightEquipmentNumber.boolean' => 'The showLabels shipperFreightEquipmentNumber field should be boolean type',
      'showLabels.shipperFreightDescription.boolean' => 'The showLabels shipperFreightDescription field should be boolean type',
    ];
  }
}
