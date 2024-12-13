<?php

namespace App\Http\Requests\Api\MaintenanceV2Issue;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMaintenanceV2IssueRequest extends FormRequest {
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
    request()->merge(['companyId' => $companyId]);
    return [
      'id' => 'required|numeric|exists:maintenance_v2_issues,id',
      'status' => 'required|string|in:' . implode(',', config('constant.maintenance.issue.status')),
      'reportedByUserId' => 'nullable|numeric|exists:users,id',
      'vehicleId' => 'nullable|numeric',
      'vehicleType' => 'required_with:vehicleId|nullable|string|in:' . implode(',', config('constant.maintenance.asset_type_int')),
      'serviceType' => 'nullable|string|max:255',
      'serviceTypeId' => 'nullable|numeric|exists:maintenance_v2_service_types,id,company_id,' . $companyId,
      'priority' => 'nullable|string|in:' . implode(',', config('constant.maintenance.issue.priority')),
      'notes' => 'nullable|string|max:4000',
      'serviceLocation' => 'nullable|string|max:255',
      'scheduledStartTime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'estimatedCompletionTime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'estimatedCost' => 'nullable|string|max:255',
      'arrivedForService' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'serviceStartTime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'updatedEstimatedCompletionTime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'serviceCompletedTime' => ['nullable', 'date_format:' . config('constant.date_time_format')],
      'timeInService' => 'nullable|string|max:255',
      'finalCost' => 'nullable|string|max:255',
      'odometer' => 'nullable|numeric',
      'attachments' => 'nullable|array',
      'attachments.*.id' => 'nullable|numeric|exists:maintenance_v2_issue_attachments,id',
      'attachments.*.fileName' => 'required_without:attachments.*.id|string|max:255',
      'attachments.*.originalFileName' => 'nullable|string|max:255'
    ];
  }
}
