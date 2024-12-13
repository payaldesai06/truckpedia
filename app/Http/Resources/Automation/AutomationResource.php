<?php

namespace App\Http\Resources\Automation;

use Illuminate\Http\Resources\Json\JsonResource;

class AutomationResource extends JsonResource {
  public function toArray($request): array {
    $automation = $this['automation'];
    $schedule = $this['schedule'];
    $reminder = $this['reminder'];
    return [
      'driver_start_load' => [
        'dispatcher' => $automation->driver_start_load_dispatcher ? "email" : '',
        'customer' => $automation->driver_start_load_customer ? "email" : '',
        'collaborator' => $automation->driver_start_load_collaborator ? "email" : '',
        'extra_emails' => $automation->driver_start_load_emails ? explode(',', $automation->driver_start_load_emails) : []
      ],
      'driver_shipper_loaded' => [
        'dispatcher' => $automation->driver_shipper_loaded_dispatcher ? 'email' : '',
        'customer' => $automation->driver_shipper_loaded_customer ? 'email' : '',
        'collaborator' => $automation->driver_shipper_loaded_collaborator ? 'email' : '',
        'extra_emails' => $automation->driver_shipper_loaded_emails ? explode(',', $automation->driver_shipper_loaded_emails) : []
      ],
      'driver_shipper_arrived' => [
        'dispatcher' => $automation->driver_shipper_arrived_dispatcher ? 'email' : '',
        'customer' => $automation->driver_shipper_arrived_customer ? 'email' : '',
        'collaborator' => $automation->driver_shipper_arrived_collaborator ? "email" : '',
        'extra_emails' => $automation->driver_shipper_arrived_emails ? explode(',', $automation->driver_shipper_arrived_emails) : []
      ],
      'driver_receiver_arrived' => [
        'dispatcher' => $automation->driver_receiver_arrived_dispatcher ? 'email' : '',
        'customer' => $automation->driver_receiver_arrived_customer ? 'email' : '',
        'collaborator' => $automation->driver_receiver_arrived_collaborator ? 'email' : '',
        'extra_emails' => $automation->driver_receiver_arrived_emails ? explode(',', $automation->driver_receiver_arrived_emails) : []
      ],
      'driver_receiver_unloaded' => [
        'dispatcher' => $automation->driver_receiver_unloaded_dispatcher ? 'email' : '',
        'customer' => $automation->driver_receiver_unloaded_customer ? 'email' : '',
        'collaborator' => $automation->driver_receiver_unloaded_collaborator ? 'email' : '',
        'extra_emails' => $automation->driver_receiver_unloaded_emails ? explode(',', $automation->driver_receiver_unloaded_emails) : []
      ],
      'driver_end_load' => [
        'dispatcher' => $automation->driver_end_load_dispatcher ? 'email' : '',
        'customer' => $automation->driver_end_load_customer ? 'email' : '',
        'collaborator' => $automation->driver_end_load_collaborator ? 'email' : '',
        'extra_emails' => $automation->driver_end_load_emails ? explode(',', $automation->driver_end_load_emails) : []
      ],
      'driver_upload' => [
        'dispatcher' => $automation->driver_upload_dispatcher ? 'email' : '',
        'customer' => $automation->driver_upload_customer ? 'email' : '',
        'collaborator' => $automation->driver_upload_collaborator ? 'email' : '',
        'extra_emails' => $automation->driver_upload_emails ? explode(',', $automation->driver_upload_emails) : []
      ],
      'loadCollaboratorAddedNotification' => $automation->load_collaborator_added_notification ?
        true : false,
      'schedules' => AutomationScheduleResource::collection($schedule),
      'reminders' => AutomationReminderResource::collection($reminder),
    ];
  }
}
