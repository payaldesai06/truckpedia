<?php

namespace App\Services\FullyCustomized;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;
use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcCustomData;
use App\Models\FullyCustomized\FcCustomField;
use App\Models\FullyCustomized\FcCustomRecord;
use App\Models\FullyCustomized\FcCustomDataTypeUser;
use App\Models\FullyCustomized\FcCustomDataRecordLink;
use App\Models\FullyCustomized\FcCustomDataTypeMultiSelect;

class SyncDataToSubmenuService {

  protected $submenu;
  private $records;
  private $fields;

  private function getSubmenu($submenuId) {
    return FcSubmenu::select(['id', 'menu_id'])
      ->whereHas('fcMenu', function (Builder $query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('id', $submenuId)
      ->firstOrFail();
  }

  // ToDo: Add validation
  private function validateData(array $data) {
    $validation = Validator::make($data, [
      'submenuId' => ['required', 'integer', 'exists:fc_submenus,id'],
      'dataSource' => ['required', 'string', 'in:invoiceItem'],
      'recordData' => ['nullable', 'array'],
      'recordData.*.recordId' => ['nullable', 'integer', 'exists:fc_custom_records,id'],
      'recordData.*.dataSourceId' => ['nullable', 'integer', 'exists:invoice_items,id'],
      'recordData.*.customFieldsData' => ['required', 'array'],
      'recordData.*.customFieldsData.*.fieldId' => ['required', 'integer', 'exists:fc_custom_fields,id'],
    ]);

    if ($validation->fails()) {
      throw new \Exception($validation->errors()->first());
    }
  }

  public function syncDataToSubmenu(array $data) {
    $this->validateData($data);
    // Check if submenu belongs to the current company
    $this->submenu = $this->getSubmenu($data['submenuId']);
    $this->records = $this->getRecords($data['recordData']);
    $this->fields = $this->getFields($data['recordData']);
    $recordIds = $this->updateOrCreateRecords($data['recordData'], $data['dataSource']);
    return ['records' => $recordIds];
  }

  public function deleteRecordsFromSubmenu($data) {
    $this->submenu = $this->getSubmenu($data['submenuId']);
    $records = $this->getRecords($data['records']);

    FcCustomDataRecordLink::whereIn('linked_record_id', $records->pluck('id')->toArray())
      ->delete();
    $records->each(function ($record) {
      $record->update(['last_modified_by' => auth()->id()]);
      $record->delete();
    });
    return ['records' => $data['records']];
  }

  private function getRecords($recordsData) {
    return FcCustomRecord::select(['id', 'submenu_id', 'invoice_item_id', 'last_modified_by'])
      ->where('submenu_id', $this->submenu->id)
      ->whereIn('id', collect($recordsData)->pluck('recordId')->filter()->toArray())
      ->get();
  }

  private function getFields($recordsData) {
    $customFieldsData = collect($recordsData)->pluck('customFieldsData');
    $fieldIds = $customFieldsData->flatten(1)->pluck('fieldId')->filter()->unique()->toArray();
    return FcCustomField::select(['id', 'submenu_id', 'custom_type'])
      ->where('submenu_id', $this->submenu->id)
      ->whereIn('id', $fieldIds)
      ->get();
  }

  private function updateOrCreateRecords($recordsData, $dataSource = 'invoiceItem') {
    switch ($dataSource) {
      case 'invoiceItem':
        return $this->syncInvoiceItemData($recordsData);
    }
    return [];
  }

  private function syncInvoiceItemData($recordsData) {
    $recordIds = [];

    $records = $this->records;

    foreach ($recordsData as $recordData) {
      $record = $recordData['recordId'] ?
        $records->where('id', $recordData['recordId'])->first() :
        FcCustomRecord::create([
          'submenu_id' => $this->submenu->id,
          'invoice_item_id' => $recordData['dataSourceId'],
          'last_modified_by' => auth()->id(),
        ]);

      if (!$record) {
        throw new \Exception('Cannot not find menu record');
      }

      if ($record->invoice_item_id != $recordData['dataSourceId']) {
        $record->update([
          'invoice_item_id' => $recordData['dataSourceId'],
          'last_modified_by' => auth()->id(),
        ]);
      }

      $this->syncCustomFieldsData($recordData['customFieldsData'], $record);
      $recordIds[] = ['recordId' => $record->id];
    }
    return $recordIds;
  }

  private function syncCustomFieldsData($customFieldsData, $record) {
    $customFields = $this->fields;

    foreach ($customFieldsData as $customFieldData) {
      $customField = $customFields->where('id', $customFieldData['fieldId'])->first();

      if (!$customField) {
        continue;
      }

      switch ($customField->custom_type) {
        case array_search('text', config('constant.customField.custom_type')):
          $this->updateOrCreateTextData($customFieldData, $record, $customField);
          break;
        case array_search('number', config('constant.customField.custom_type')):
          $this->updateOrCreateNumberData($customFieldData, $record, $customField);
          break;
        case array_search('currency', config('constant.customField.custom_type')):
          $this->updateOrCreateCurrency($customFieldData, $record, $customField);
          break;
        case array_search('recordLink', config('constant.customField.custom_type')):
          $this->updateOrCreateRecordLinkData($customFieldData, $record, $customField);
          break;
        case array_search('singleSelect', config('constant.customField.custom_type')):
          $this->updateOrCreateSingleSelectData($customFieldData, $record, $customField);
          break;
          /*
        Not tested, so commented out.

        case array_search('user', config('constant.customField.custom_type')):
          $this->updateOrCreateUserData($customFieldData, $record, $customField);
          break;
        case array_search('multiSelect', config('constant.customField.custom_type')):
          $this->updateOrCreateMultiSelectData($customFieldData, $record, $customField);
          break;
        case array_search('date', config('constant.customField.custom_type')):
          $this->updateOrCreateDateData($customFieldData, $record, $customField);
          break;
        case array_search('dateNoTz', config('constant.customField.custom_type')):
          $this->updateOrCreateDateNoTzData($customFieldData, $record, $customField);
          break;
        */
      }
    }
  }

  private function updateOrCreateTextData($customFieldData, $record, $field) {
    if (array_key_exists('textValue', $customFieldData)) {
      $this->updateOrCreateCustomData($record->id, $field->id, ['text_value' => $customFieldData['textValue']]);
    }
  }

  private function updateOrCreateCurrency($customFieldData, $record, $field) {
    if (array_key_exists('currencyValue', $customFieldData)) {
      $data = [
        'decimal_value' => $customFieldData['currencyValue']
      ];
      $this->updateOrCreateCustomData($record->id, $field->id, $data);
    }
  }

  private function updateOrCreateNumberData($customFieldData, $record, $field) {
    if (array_key_exists('numberValue', $customFieldData)) {
      $data = [
        'double_value' => $customFieldData['numberValue']
      ];
      $this->updateOrCreateCustomData($record->id, $field->id, $data);
    }
  }


  private function updateOrCreateRecordLinkData($customFieldData, $record, $field) {
    $carbonNow = Carbon::now();
    $newOptions = [];
    foreach ($customFieldData['recordLinkValues'] as $value) {
      if (!$value['recordId']) {
        continue;
      }

      $validation = Validator::make($value, [
        'recordId' => ['required', 'integer', 'exists:fc_custom_records,id'],
      ]);

      if ($validation->fails()) {
        throw new \Exception($validation->errors()->first());
      }

      $newOptions[] = [
        'record_id' => $record->id,
        'field_id' => $field->id,
        'linked_record_id' => $value['recordId'],
        'created_at' => $carbonNow,
        'updated_at' => $carbonNow,
      ];
    }
    // Delete record links that are not in the new list
    FcCustomDataRecordLink::where('record_id', $record->id)
      ->where('field_id', $field->id)
      ->whereNotIn('linked_record_id', array_column($newOptions, 'linked_record_id'))
      ->delete();

    $existingOptions = FcCustomDataRecordLink::select(['record_id', 'field_id', 'linked_record_id'])
      ->where('record_id', $record->id)
      ->where('field_id', $field->id)
      ->get();

    // Get new options
    $filteredOptions = array_filter($newOptions, function ($record) use ($existingOptions) {
      return !$existingOptions->contains('linked_record_id', $record['linked_record_id']);
    });

    //  Create new record links options
    if (count($filteredOptions)) {
      FcCustomDataRecordLink::insert($newOptions);
    }
  }

  private function updateOrCreateSingleSelectData($customFieldData, $record, $field) {
    if (array_key_exists('singleSelectValue', $customFieldData)) {
      $validation = Validator::make($customFieldData, [
        'singleSelectValue' => [
          'nullable', 'integer', 'exists:fc_custom_fields_select_options,id,field_id,' . $field->id
        ],
      ]);

      if ($validation->fails()) {
        throw new \Exception($validation->errors()->first());
      }

      $data = [
        'single_select_value' => $customFieldData['singleSelectValue']
      ];
      $this->updateOrCreateCustomData($record->id, $field->id, $data);
    }
  }

  private function updateOrCreateCustomData($recordId, $fieldId, $data) {
    return FcCustomData::updateOrCreate([
      'record_id' => $recordId,
      'field_id' => $fieldId,
    ], $data);
  }

  /*
  Not tested, so commented out.

  private function updateOrCreateUserData($customFieldData, $record, $field) {
    $now = Carbon::now();
    if (array_key_exists('userValue', $customFieldData) && is_array($customFieldData['userValue'])) {
      $newUsers = [];
      foreach ($customFieldData['userValue'] as $value) {
        $newUsers[] = [
          'record_id' => $record->id,
          'field_id' => $field->id,
          'user_id' => $value['userId'],
          'created_at' => $now,
          'updated_at' => $now,
        ];
      }
      // Delete users who are not in the new users list
      FcCustomDataTypeUser::where('record_id', $record->id)
        ->where('field_id', $field->id)
        ->whereNotIn('user_id', array_column($newUsers, 'user_id'))
        ->delete();

      $existingUsers = FcCustomDataTypeUser::select(['record_id', 'field_id', 'user_id'])
        ->where('record_id', $record->id)
        ->where('field_id', $field->id)
        ->get();

      // Get new users
      $filteredUsers = array_filter($newUsers, function ($user) use ($existingUsers) {
        return !$existingUsers->contains('user_id', $user['user_id']);
      });

      //  Create new users
      if (count($filteredUsers)) {
        FcCustomDataTypeUser::insert($filteredUsers);
      }
    }
  }

  private function updateOrCreateMultiSelectData($customFieldData, $record, $field) {
    $carbonNow = Carbon::now();
    if (array_key_exists('multiSelectValues', $customFieldData) && is_array($customFieldData['multiSelectValues'])) {
      $validation = Validator::make($customFieldData, [
        'multiSelectValues' => ['required', 'array'],
        'multiSelectValues.*.optionId' => [
          'required', 'integer', 'exists:fc_custom_fields_select_options,id,field_id,' . $field->id . ',deleted_at,NULL'
        ],
      ]);

      if ($validation->fails()) {
        throw new \Exception($validation->errors()->first());
      }
      $newOptions = [];
      foreach ($customFieldData['multiSelectValues'] as $value) {
        $newOptions[] = [
          'record_id' => $record->id,
          'field_id' => $field->id,
          'multi_select_value' => $value['optionId'],
          'created_at' => $carbonNow,
          'updated_at' => $carbonNow,
        ];
      }
      // Delete users who are not in the new users list
      FcCustomDataTypeMultiSelect::where('record_id', $record->id)
        ->where('field_id', $field->id)
        ->whereNotIn('multi_select_value', array_column($newOptions, 'multi_select_value'))
        ->delete();

      $existingOptions = FcCustomDataTypeMultiSelect::select(['record_id', 'field_id', 'multi_select_value'])
        ->where('record_id', $record->id)
        ->where('field_id', $field->id)
        ->get();

      // Get new options
      $filteredOptions = array_filter($newOptions, function ($user) use ($existingOptions) {
        return !$existingOptions->contains('multi_select_value', $user['multi_select_value']);
      });

      //  Create new multi-select options
      if (count($filteredOptions)) {
        FcCustomDataTypeMultiSelect::insert($filteredOptions);
      }
    }
  }

  private function updateOrCreateDateNoTzData($customFieldData, $record, $field) {
    if (isset($customFieldData['dateNoTzValue'])) {
      $data = [
        'date_value' => optional($customFieldData['dateNoTzValue'])['localDateOnly'],
        'time_value' => optional($customFieldData['dateNoTzValue'])['localTimeOnly']
      ];
      $this->updateOrCreateCustomData($record->id, $field->id, $data);
    }
  }

  private function updateOrCreateDateData($customFieldData, $record, $field) {
    if (array_key_exists('dateValue', $customFieldData)) {
      $data = [
        'date_value' => optional($customFieldData['dateValue'])['utcDateOnly'],
        'time_value' => optional($customFieldData['dateValue'])['utcTimeOnly']
      ];
      $this->updateOrCreateCustomData($record->id, $field->id, $data);
    }
  }
  */
}
