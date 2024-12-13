<?php

namespace App\Http\Requests\Api\Report;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class DispatcherCommissionReportRequest extends FormRequest {
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
   * @throws Exception
   */
  public function rules(): array {
    return [
      'startDate' => 'required|date|date_format:' . config('constant.date_format'),
      'endDate' => 'required|date|date_format:' . config('constant.date_format'),
      'dispatcherIds' => 'nullable|array',
      'dispatcherIds.*' => 'nullable|integer|distinct',
      'filters' => 'nullable',
      'filters.commissionStatus' => 'nullable|string|in:' . implode(',', config('constant.load.dispatcherPaid')),
      'sortField' => 'nullable|in:' . implode(',', config('constant.report.dispatcher.sortField')),
      'sortOrder' => 'nullable|in:' . implode(',', config('constant.report.dispatcher.sortOrder')),
      'to_download' => 'nullable|integer'
    ];
  }
  public function messages(): array {
    return [
      'dispatcherIds.array' => 'The dispatcher IDs must be an array.',
      'dispatcherIds.*.integer' => 'Each dispatcher ID must be an integer.',
      'filters.commissionStatus.string' => 'The commission status must be a string.',
      'filters.commissionStatus.in' => 'The commission status must be one of the following: ' . implode(',', config('constant.load.dispatcherPaid')),
    ];
  }
}
