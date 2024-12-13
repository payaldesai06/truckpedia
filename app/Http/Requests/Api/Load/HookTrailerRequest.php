<?php

namespace App\Http\Requests\Api\Load;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class HookTrailerRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   * @throws Exception
   */
  public function rules() {
    $companyId = getAuthAdminCompanyId();
    return [
      'loadId' => 'required|integer|exists:loads,id,admin_company_detail_id,' . $companyId,
      'loadDriverId' => 'required|integer|exists:load_drivers,id,load_id,' . request('loadId'),
      'stopType' => 'required|string|in:' . implode(',', config('constant.load.stopType')),
      'stopId' => 'required|integer',
      'hookTrailerType' => 'required|string|in:' . implode(',', config('constant.load.dropHookTrailerType')),
      'trailerId' => 'required|integer|exists:trailers,id,company_id,' . $companyId,
    ];
  }
}
