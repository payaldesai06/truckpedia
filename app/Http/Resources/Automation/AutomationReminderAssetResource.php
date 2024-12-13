<?php

namespace App\Http\Resources\Automation;

use Illuminate\Http\Resources\Json\JsonResource;

class AutomationReminderAssetResource extends JsonResource {

  public function toArray($request): array {
    $assetType = config('constant.automation.reminder.asset.assetType')[$this->asset_type] ?? null;
    $retFields = [];

    if ($assetType && !empty($this->fields_to_check)) {
      $fieldsToCheckArr = explode(",", $this->fields_to_check);
      foreach ($fieldsToCheckArr as $field) {
        if ($assetType == 'truck') {
          $retFields[] = config('constant.automation.reminder.asset.fieldsToCheck.truck.values')[$field];
        } elseif ($assetType == 'trailer') {
          $retFields[] = config('constant.automation.reminder.asset.fieldsToCheck.trailer.values')[$field];
        } else { // driver
          $retFields[] = config('constant.automation.reminder.asset.fieldsToCheck.driver.values')[$field];
        }
      }
    }

    return [
      'reminderAssetId' => $this->id ?? null,
      'type' => $assetType,
      'originalAssetId' => $this->asset_original_id ?? null,
      'nextServiceAt' => $this->due_date ?? null,
      'fieldsToCheck' => $retFields,
    ];
  }
}
