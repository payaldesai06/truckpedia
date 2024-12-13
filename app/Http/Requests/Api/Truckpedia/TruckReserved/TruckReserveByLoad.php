<?php

namespace App\Http\Requests\Api\Truckpedia\TruckReserved;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Load;

class TruckReserveByLoad extends FormRequest {
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
      'loadId' => [
        'required',
        'integer',
        'exists:loads,id,admin_company_detail_id,' . getAuthAdminCompanyId(),
        function ($attribute, $value, $fail) {
          if (Load::whereNotNull('third_party_carrier_as_customer_id')->where('id', $value)->exists()) {
            $fail(config('response.load.loadHasCarrier'));
          }
        }
      ],
      'estimatedPrice' => 'required|numeric',
      'carrierCompanyId' => 'required|integer|exists:admin_company_details,id'
    ];
  }
}
