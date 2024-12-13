<?php

namespace App\Http\Requests\Api\MaintenanceV2Issue;

use Illuminate\Foundation\Http\FormRequest;

class ChangeMaintenanceV2IssueStatusRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   */
  public function rules(): array {
    return [
      'id' => 'required|integer|exists:maintenance_v2_issues,id',
      'newStatus' => 'required|string|in:' . implode(',', config('constant.maintenance.issue.status'))
    ];
  }
}
