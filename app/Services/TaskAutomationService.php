<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TaskAutomationService {

  public function getTaskAutomation() {
    return AdminCompanyDetail::select(
      'id',
      'auto_send_status_updates_to_collaborators',
      'auto_send_status_updates_to_dispatcher',
      'auto_send_pod_to_collaborators',
      'auto_send_detention_requests_to_collaborators',
      'detention_free_time_in_minutes',
      'detention_charge_per_hour',
      'show_dispatcher_fee_on_invoice',
      'show_factoring_fee_on_invoice',
    )->find(Auth::user()->admin_company_detail_id);
  }

  public function updateTaskAutomation($request) {
    $taskAutomation = $this->getTaskAutomation();
    $taskAutomation->update($request->all());
    return $taskAutomation;
  }

}
