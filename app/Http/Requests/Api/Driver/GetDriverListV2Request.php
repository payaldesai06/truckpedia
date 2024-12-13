<?php

namespace App\Http\Requests\Api\Driver;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class GetDriverListV2Request extends FormRequest {
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
   *
   * @return array
   */
  public function rules() {
    return [
      'filter.status' => 'nullable|in:' . implode(',', config('constant.status.driver')),
      'filter.name' => ['nullable', 'string'],
      'filter.truckNumber' => ['nullable', 'string'],
      'filter.trailerNumber' => ['nullable', 'string'],
      'filter.phone' => ['nullable', 'string'],
      'filter.email' => ['nullable', 'string'],
      'filter.driverType' => 'nullable|string|in:' . implode(',', config('constant.driver_type')),
      'filter.tagId' => 'nullable|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),
      'filter.toDownload' => 'nullable|boolean',
      'filter.companyEmployeeId' => 'nullable|string|max:255',
      'pageSize' => ['nullable', 'integer', 'min:1'],
      'sortBy' => 'nullable',
      'sortBy.field' => 'required_with:sortBy|nullable|string|in:'
        . implode(',', config('constant.driver.sortBy.field')),
      'sortBy.order' => 'required_with:sortBy|nullable|string|in:'
        . implode(',', config('constant.defaultSortByOrder')),
    ];
  }

  public function messages(): array {
    return [
      'filter.status.in' => 'The selected filter status is invalid.',
      'filter.name.string' => 'The filter name field should be a string.',
      'filter.truckNumber.string' => 'The filter truck field should be a string.',
      'filter.trailerNumber.string' => 'The filter trailer field should be a string.',
      'filter.phone.string' => 'The filter phone field should be a string.',
      'filter.email.string' => 'The filter email field should be a string.',
      'filter.driverType.string' => 'The filter driver type field should be a string.',
      'filter.driverType.in' => 'The filter selected driver type is invalid.',
      'filter.tagId.integer' => 'The filter selected tag must be an integer.',
      'filter.tagId.exists' => 'The filter selected tag must be valid.',
      'filter.companyEmployeeId.string' => 'The filter company employee id field should be a string.',
      'filter.companyEmployeeId.max' => 'The filter company employee id field maximum length is 255.',
      'sortBy.field.required_with' => 'The sortBy field is required when sortBy is present.',
      'sortBy.field.string' => 'The sortBy field should be a string.',
      'sortBy.field.in' => 'The selected sortBy field is invalid.',
      'sortBy.order.required_with' => 'The sortBy order field is required when sortBy is present.',
      'sortBy.order.string' => 'The sortBy order should be a string.',
      'sortBy.order.in' => 'The selected sortBy field order is invalid.'
    ];
  }
}
