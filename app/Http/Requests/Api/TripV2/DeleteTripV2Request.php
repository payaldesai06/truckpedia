<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class DeleteTripV2Request extends FormRequest {
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
      'tripId' => 'required|integer'
    ];
  }

  /**
   * Add the query parameters to request.
   * @return array
   * @throws Exception
   */
  public function all($keys = null) {
    $data = parent::all($keys);
    $data['tripId'] = $this->route('tripId');
    return $data;
  }
}
