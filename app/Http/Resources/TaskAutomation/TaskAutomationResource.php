<?php

namespace App\Http\Resources\TaskAutomation;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskAutomationResource extends JsonResource {
  public function toArray($request): array
  {
    return [
      'auto_send_status_updates_to_collaborators' => $this
        ->auto_send_status_updates_to_collaborators ?? '',
      'auto_send_status_updates_to_dispatcher' => $this
        ->auto_send_status_updates_to_dispatcher ?? '',
      'auto_send_pod_to_collaborators' => $this
        ->auto_send_pod_to_collaborators ?? '',
      'auto_send_detention_requests_to_collaborators' => $this
        ->auto_send_detention_requests_to_collaborators ?? '',
      'detention_free_time_in_minutes' => $this
        ->detention_free_time_in_minutes ?? '',
      'detention_charge_per_hour' => $this->detention_charge_per_hour ?? '',
      'show_dispatcher_fee_on_invoice' => $this
        ->show_dispatcher_fee_on_invoice ?? '',
      'show_factoring_fee_on_invoice' => $this->show_factoring_fee_on_invoice ?? '',
    ];
  }
}
