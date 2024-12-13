<?php

namespace App\Http\Requests\Api\TripV2;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GetTripV2Request extends FormRequest {
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
      'filters' => 'nullable',
      'filters.status' => 'nullable|string|in:' . implode(',', config('constant.trip.status')),
      'filters.tripNumber' => 'nullable|integer',
      'filters.tripStartDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filters.tripEndDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filters.createdDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filters.approvedDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filters.driverName' => 'nullable|string',
      'filters.accountPayableName' => 'nullable|string|max:255',
      'filters.approvedByUserName' => 'nullable|string',
      'sortBy.field' => 'required_with:sortBy|nullable|string|in:' . implode(',', array_keys(config('constant.trip.sortBy.field'))),
      'sortBy.order' => 'required_with:sortBy|nullable|string|in:' . implode(',', config('constant.trip.sortBy.order')),
    ];
  }

  public function messages() {
    return [
      'filters.status.string' => 'The filters status field must be a string',
      'filters.status.in' => 'The filters status field is supported only ' . implode('|', config('constant.trip.status')),
      'filters.driverName.string' => 'The filters driverName field must be a string',
      'filters.accountPayableName.string' => 'The filters accountPayableName field must be a string',
      'filters.approvedByUserName.string' => 'The filters approvedByUserName field must be a string',
      'filters.tripNumber.integer' => 'The filters tripNumber field must be an integer',
      'filters.tripStartDate.date' => 'The filter tripStartDate field must be date.',
      'filters.tripStartDate.date_format' => 'The filter tripStartDate is supported date format ' . config('constant.date_format'),
      'filters.tripEndDate.date' => 'The filter tripEndDate field must be date.',
      'filters.tripEndDate.date_format' => 'The filter tripEndDate is supported date format ' . config('constant.date_format'),
      'filters.createdDate.date' => 'The filter createdDate field must be date.',
      'filters.createdDate.date_format' => 'The filter createdDate is supported date format ' . config('constant.date_format'),
      'filters.approvedDate.date' => 'The filter approvedDate field must be date.',
      'filters.approvedDate.date_format' => 'The filter approvedDate is supported date format ' . config('constant.date_format'),
      'sortBy.field.required_with' => 'The sortBy field is required when sortBy is present.',
      'sortBy.field.string' => 'The sortBy field is supported only ' . implode('|', array_keys(config('constant.trip.sortBy.field'))),
      'sortBy.field.in' => 'The sortBy field is supported only ' . implode('|', array_keys(config('constant.trip.sortBy.field'))),
      'sortBy.order.required_with' => 'The sortBy order is required when sortBy is present.',
      'sortBy.order.string' => 'The sortBy order field is supported only ' . implode('|', config('constant.trip.sortBy.order')),
      'sortBy.order.in' => 'The sortBy order field is supported only ' . implode('|', config('constant.trip.sortBy.order')),
    ];
  }
}
