<?php

namespace App\Http\Requests\Api\TripV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class CreateTripV2Request extends FormRequest {
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
    $companyId = getAuthAdminCompanyId();
    $ownerOperator = config('constant.trip.type.ownerOperator');
    $truck = config('constant.trip.type.truck');
    $companyDriver = config('constant.trip.type.companyDriver');
    $type = request('type');
    $rules = [
      'loads' => 'required|array|min:1',
      'loads.*.loadId' => 'required|integer|exists:loads,id,admin_company_detail_id,' . $companyId,
      'loads.*.loadedDistance' => 'nullable|numeric',
      'loads.*.emptyDistance' => 'nullable|numeric',
      'type' => 'nullable|string|in:' . implode(',', config('constant.trip.type')),
      'driverUserId' => 'required|integer|exists:users,id,admin_company_detail_id,' . $companyId,
      'totalHours' => 'nullable|numeric|min:0|max:9999.99',
      'totalLoadedDistance' => 'nullable|numeric|min:0|max:999999.9999',
      'totalEmptyDistance' => 'nullable|numeric|min:0|max:999999.9999',
      'stopsStartDate' => 'required|date|date_format:' . config('constant.date_format'),
      'stopsEndDate' => 'required|date|date_format:' . config('constant.date_format')
    ];
    if (!empty($type)) {
      $rules['driverUserId'] = 'required_if:type,' . $companyDriver . '|integer|exists:users,id,admin_company_detail_id,' . $companyId;
      $rules['ownerOperatorTagId'] = 'required_if:type,' . $ownerOperator . '|integer|exists:tags,id,company_id,' . $companyId . ',type,' . array_search(request('type'), config('constant.tags.type'));
      $rules['truckId'] = 'required_if:type,' . $truck . '|integer|exists:trucks,id,company_id,' . $companyId;
    }

    /**
     * Add a validation for sheets array for following condition
     * 1) Sheets should be array
     * 2) Sheets array id should be int
     * 3) Sheets array only applicable for companyDriver type
     */
    if (empty($type) || $type == $companyDriver) {
      $rules['sheets'] = 'nullable|array';
      $rules['sheets.*.sheetId'] = 'required|integer|exists:trips_v2_sheets,id,trip_id,NULL,company_id,' . $companyId;
    }
    return $rules;
  }

  /**
   * Custom messages on validation fails.
   * @return string[]
   */
  public function messages(): array {
    return [
      'loads.*.loadId.required' => 'The loads loadId field is required.',
      'loads.*.loadId.integer' => 'The loads loadId field must be an integer.',
      'loads.*.loadId.exists' => 'The loads loadId field is invalid.',
      'loads.*.loadedDistance.numeric' => 'The loads loadedDistance field must be numeric.',
      'loads.*.emptyDistance.numeric' => 'The loads emptyDistance field must be numeric.',
      'driverUserId.required' => 'The driver userId field is required.',
      'driverUserId.integer' => 'The driver userId field must be an integer.',
      'driverUserId.exists' => 'The driver userId field is invalid.',
      'sheets.*.sheetId.required' => 'The sheets sheetId field is required.',
      'sheets.*.sheetId.integer' => 'The sheets sheetId field must be integer.',
      'sheets.*.sheetId.exists' => 'The selected sheets sheetId field is invalid.',
      // TODO: missing messages for ownerOperatorTagId and truckId.
    ];
  }
}
