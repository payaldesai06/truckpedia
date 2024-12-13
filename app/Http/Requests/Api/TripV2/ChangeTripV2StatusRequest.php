<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class ChangeTripV2StatusRequest extends FormRequest {
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
    return [
      'tripId' => 'required|integer|exists:trips_v2,id,company_id,' . getAuthAdminCompanyId(),
      'status' => 'required|string|in:' . implode(',', config('constant.trip.status')),
    ];
  }
}
