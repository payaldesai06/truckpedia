<?php

namespace App\Http\Requests\Api\Customization;

use Illuminate\Foundation\Http\FormRequest;

class CustomizationRequest extends FormRequest {
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
    return [
      'show_driver_truck_on_pipeline' => 'nullable',
      'show_qbd_invoice_sync_status_on_list' => 'nullable',
      'show_driver_location_on_calendar_map' => 'nullable',
      'driver_app_variation' => 'nullable',
      'showDriverPayOnMobileApp' => 'nullable|boolean'
    ];
  }
}
