<?php

namespace App\Http\Requests\Api\TripV2;

use Illuminate\Foundation\Http\FormRequest;

class GetLoadsPlanningRequest extends FormRequest {
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
      'startDate' => 'required|date_format:' . config('constant.date_format'),
      'endDate' => 'required|date_format:' . config('constant.date_format'),
      'type' => 'nullable|string|in:' . implode(',', config('constant.trip.type')),
      'filters' => 'nullable',
      'filters.driverIds' => 'nullable|array',
      'filters.driverIds.*' => 'integer|distinct|exists:users,id,admin_company_detail_id,' . getAuthAdminCompanyId(),
      'filters.tagIds' => 'nullable|array',
      'filters.tagIds.*' => 'nullable|integer|exists:tags,id,company_id,' . getAuthAdminCompanyId(),
      'filters.dispatcherIds' => 'nullable|array',
      'filters.dispatcherIds.*' => 'nullable|integer|exists:users,id,role,' . config('constant.roles.dispatcher') . ',admin_company_detail_id,' . getAuthAdminCompanyId(),
      'filters.driverTagIds' => 'nullable|array',
      'filters.driverTagIds.*' => [
        'sometimes',
        'integer',
        'distinct',
        // 'exists:tags,id,company_id,' . getAuthAdminCompanyId(),
        function ($attribute, $value, $fail) {
          if (request()->get('type') !== 'companyDriver') {
            $fail($attribute . ' is only allowed when type is companyDriver.');
          }
        },
      ],
      'filters.truckIds' => 'nullable|array',
      'filters.truckIds.*' => [
        'sometimes',
        'integer',
        'distinct',
        // Does not really matter, cause we always filter loads by company id.
        // 'exists:trucks,id,company_id,' . getAuthAdminCompanyId(),
        function ($attribute, $value, $fail) {
          if (request()->get('type') !== 'truck') {
            $fail('The filters truck ids only allowed when type is truck.');
          }
        },
      ],
    ];
  }

  public function messages(): array {
    return [
      'type.in' =>  'Valid types are the following: ' . implode('|', config('constant.trip.type')),
      'filters.driverIds.array' => 'The driver ids field must be an array.',
      'filters.driverIds.*.integer' => 'The driver ids must be an integer value.',
      'filters.driverIds.*.distinct' => 'The driver ids should be unique ids.',
      'filters.driverIds.*.exists' => 'The driver ids field must be valid ids.',
      'filters.tagIds.array' => 'The filters tag ids field is supported only array type.',
      'filters.tagIds.*.integer' => 'The filters tag ids field is supported only an integer values.',
      'filters.tagIds.*.exists' => 'The filters tag ids field is having invalid values.',
      'filters.dispatcherIds.array' => 'The filters dispatcher ids field is supported only array type.',
      'filters.dispatcherIds.*.integer' => 'The filters dispatcher ids field is supported only an integer values.',
      'filters.dispatcherIds.*.exists' => 'The filters dispatcher ids field is having invalid values.',
      'filters.driverTagIds.array' => 'The filters driver tag ids field is supported only array type.',
      'filters.driverTagIds.*.integer' => 'The filters driver tag ids field is supported only an integer values.',
      'filters.driverTagIds.*.exists' => 'The filters driver tag ids field is having invalid values.',
      'filters.truckIds.array' => 'The filters truck ids field is supported only array type.',
      'filters.truckIds.*.integer' => 'The filters truck ids field is supported only an integer values.',
      'filters.truckIds.*.exists' => 'The filters truck ids field is having invalid values.',
      'filters.truckIds.*.distinct' => 'The filters truck ids field has a duplicate value.',
    ];
  }
}
