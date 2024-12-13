<?php

namespace App\Http\Requests\Api\Load\Pipeline;

use Illuminate\Foundation\Http\FormRequest;

class GetPipelineRequest extends FormRequest {
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
    $companyId = getAuthAdminCompanyId();
    return [
      'startDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'endDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filters.tagIds' => 'nullable|array',
      'filters.tagIds.*' => 'nullable|integer|exists:tags,id,company_id,' . $companyId,
      'filters.dispatcherIds' => 'nullable|array',
      'filters.dispatcherIds.*' => 'nullable|integer|exists:users,id,admin_company_detail_id,' . $companyId,
      'filters.driverIds' => 'nullable|array',
      'filters.driverIds.*' => 'nullable|integer|exists:users,id,admin_company_detail_id,' . $companyId,
    ];
  }

  public function messages(): array {
    return [
      'startDate.date' => 'The startDate field must be date.',
      'startDate.date_format' => 'The startDate is supported date format ' . config('constant.date_format'),
      'endDate.date' => 'The endDate field must be date.',
      'endDate.date_format' => 'The endDate is supported date format ' . config('constant.date_format'),
      'filters.tagIds.array' => 'The filter tagIds field is supported only array type.',
      'filters.tagIds.*.integer' => 'The filter tagIds field is supported only array type with an integer values.',
      'filters.tagIds.*.exists' => 'The filter tagIds is not exist.',
      'filters.dispatcherIds.array' => 'The filter dispatcherIds field is supported only array type.',
      'filters.dispatcherIds.*.integer' => 'The filter dispatcherIds field is supported only array type with an integer values.',
      'filters.dispatcherIds.*.exists' => 'The filter dispatcherIds is not exist.',
      'filters.driverIds.array' => 'The filter driverIds field is supported only array type.',
      'filters.driverIds.*.integer' => 'The filter driverIds field is supported only array type with an integer values.',
      'filters.driverIds.*.exists' => 'The filter driverIds is not exist.',
    ];
  }
}
