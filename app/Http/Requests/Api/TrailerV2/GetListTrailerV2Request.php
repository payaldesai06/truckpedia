<?php

namespace App\Http\Requests\Api\TrailerV2;

use Illuminate\Foundation\Http\FormRequest;

class GetListTrailerV2Request extends FormRequest {
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
      'filter.status' => ['nullable', 'string', 'in:' . implode(',', config('constant.status.trailer'))],
      'filter.trailerNumber' => 'nullable|string|max:255',
      'filter.driverName' => 'nullable|string|max:255',
      'filter.year' => 'nullable|string|max:255',
      'filter.make' => 'nullable|string|max:255',
      'filter.vin' => 'nullable|string|max:255',
      'filter.licensePlate' => 'nullable|string|max:255',
      'filter.tagId' => 'nullable|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),
      'pageSize' => ['nullable', 'integer', 'min:1'],
    ];
  }
  public function messages(): array {
    return [
      'filter.status.string' => 'The filter status field is supported only ' . implode('|', config('constant.status.trailer')),
      'filter.status.in' => 'The filter status field is supported only ' . implode('|', config('constant.status.trailer')),
      'filter.trailerNumber.string' => 'The filter trailerNumber field is supported only string type.',
      'filter.driverName.string' => 'The filter driverName field is supported only string type.',
      'filter.year.string' => 'The filter year field is supported only string type.',
      'filter.make.string' => 'The filter make field is supported only string type.',
      'filter.vin.string' => 'The filter vin field is supported only string type.',
      'filter.licensePlate.string' => 'The filter licensePlate field is supported only string type.',
      'filter.tagId.integer' => 'The filter selected tag must be an integer.',
      'filter.tagId.exists' => 'The filter selected tag must be valid.',
    ];
  }
}
