<?php

namespace App\Http\Requests\Api\TaskAutomation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateTaskAutomationRequest extends FormRequest {
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
      'auto_send_status_updates_to_collaborators' => 'required|boolean',
      'auto_send_status_updates_to_dispatcher' => 'required|boolean',
      'auto_send_pod_to_collaborators' => 'required|boolean',
      'auto_send_detention_requests_to_collaborators' => 'required|boolean',
      'detention_free_time_in_minutes' => 'required|integer|min:0',
      'detention_charge_per_hour' => 'required|numeric|min:0',
      'show_dispatcher_fee_on_invoice' => 'required|boolean',
      'show_factoring_fee_on_invoice' => 'required|boolean',
    ];
  }
}
