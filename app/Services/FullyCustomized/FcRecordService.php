<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcCustomDataRecordLink;
use App\Models\FullyCustomized\FcCustomDataTypeFile;
use Exception;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcCustomData;
use App\Models\FullyCustomized\FcCustomRecord;
use App\Models\FullyCustomized\FcCustomDataTypeUser;
use App\Models\FullyCustomized\FcCustomDataTypeMultiSelect;

class FcRecordService {

  /**
   * Create Custom Record Data.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function store($request) {
    $subMenuAndCustomFields = $this->getSubMenuAndCustomFields();
    $submenu = $subMenuAndCustomFields['subMenu'];
    $fields = $subMenuAndCustomFields['fields'];

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));
    $editorAccess = array_search('editor', config('constant.fcSharedPermissions.accessLevel'));
    $hasPermission = (new FcSharedPermissionService)->checkForAccessToSubmenu($submenu, [$adminAccess, $editorAccess]);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    return DB::transaction(function () use ($request, $submenu, $fields) {
      $record = FcCustomRecord::create([
        'submenu_id' => $submenu->id,
        'created_by' => auth()->id(),
      ]);

      $this->updateOrCreateFcCustomData($request->newValues, $fields, $record);
      return $record;
    });
  }

  /**
   * Get Submenu and custom fields.
   * @return array
   * @throws Exception
   */
  private function getSubMenuAndCustomFields(): array {
    $subMenu = FcSubmenu::select('id', 'menu_id')
      ->with(['fcCustomFields'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })->where('id', request('submenuId'))->firstOrFail();

    $fieldIds = array_column(request('newValues'), 'fieldId');
    $fields = $subMenu->fcCustomFields()->whereIn('id', $fieldIds)->get();
    if ($fields->count() !== count($fieldIds)) {
      throw new Exception(config('response.fc.field.not_found'));
    }
    return [
      'subMenu' => $subMenu,
      'fields' => $fields
    ];
  }

  /**
   * Update Record Field Value.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function update($request) {
    $subMenuAndCustomFields = $this->getSubMenuAndCustomFields();
    $submenu = $subMenuAndCustomFields['subMenu'];
    $fields = $subMenuAndCustomFields['fields'];

    //Check if the record belongs to the submenu
    $record = $submenu->fcCustomRecords()->where('id', $request->recordId)->first();
    if (!$record) {
      throw new Exception(config('response.fc.record.not_found'));
    }

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));
    $editorAccess = array_search('editor', config('constant.fcSharedPermissions.accessLevel'));
    $hasPermission = (new FcSharedPermissionService)->checkForAccessToSubmenu($submenu, [$adminAccess, $editorAccess]);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    return DB::transaction(function () use ($request, $submenu, $record, $fields) {
      $isUpdated = (bool) $this->updateOrCreateFcCustomData($request->newValues, $fields, $record);
      $this->updateLastModifiedBy($record, $isUpdated);
      return $record;
    });
  }

  /**
   * Update Last Modified.
   * @param $record
   * @return mixed
   */
  private function updateLastModifiedBy($record, $isUpdated = false) {
    $currentUserId = Auth::id();
    if ($record->last_modified_by != $currentUserId && $isUpdated) {
      $record->update([
        'last_modified_by' => $currentUserId,
      ]);
    }
    return $record;
  }

  /**
   * Get Fc Custom Record By Record id.
   * @param $subMenu
   * @param $recordId
   * @return mixed
   * @throws Exception
   */
  private function getFcCustomRecord($subMenu, $recordId) {
    $record = $subMenu->fcCustomRecords()->where('id', $recordId)->first();
    if (!$record) {
      throw new Exception(config('response.fc.record.not_found'));
    }
    return $record;
  }

  /**
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function delete($request) {
    $submenu = FcSubmenu::select(['id', 'menu_id'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })->where('id', $request->submenuId)->firstOrFail();

    $record = $this->getFcCustomRecord($submenu, $request->recordId);

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));
    $editorAccess = array_search('editor', config('constant.fcSharedPermissions.accessLevel'));
    $hasPermission = (new FcSharedPermissionService)->checkForAccessToSubmenu($submenu, [$adminAccess, $editorAccess]);
    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }
    $this->updateLastModifiedBy($record, true);

    // ToDo: Need to recheck this delete logic
    // $fieldIds = $record->submenu->fcCustomFields()->where('custom_type', array_search('recordLink', config('constant.customField.custom_type')))->pluck('id');
    // You need to remove those where linked record id == this id.
    FcCustomDataRecordLink::where('linked_record_id', $record->id)
                            // ->whereIn('field_id', $fieldIds)
                            ->delete();

    return $record->delete();
  }

  /**
   * Update Or Create FC Custom Data.
   * @param $newValues
   * @param $fields
   * @param $record
   * @return false|mixed
   * @throws Exception
   */
  private function updateOrCreateFcCustomData($newValues, $fields, $record) {
    $carbonNow = Carbon::now();
    foreach ($newValues as $newValue) {
      $field = $fields->where('id', $newValue['fieldId'])->first();
      $data = [];
      switch ($field->custom_type) {
        case array_search('text', config('constant.customField.custom_type')):
          /*$validation = Validator::make($request->all(), [
                    'newValues.*.textValue' => ['required', 'string'],
                      ]);
                      if ($validation->fails()) {
                        throw new Exception($validation->errors()->first());
           }*/
          if (array_key_exists('textValue', $newValue)) {
            $data = [
              'text_value' => $newValue['textValue']
            ];
          }
          break;
        case array_search('user', config('constant.customField.custom_type')):
          /*$validation = Validator::make($request->all(), [
            'newValues.*.userValue' => ['required', 'integer', "exists:users,id,company_id," . getAuthAdminCompanyId()],
          ]);
          if ($validation->fails()) {
            throw new Exception($validation->errors()->first());
          }*/
          if (array_key_exists('userValue', $newValue) && is_array($newValue['userValue'])) {
            $newUsers = [];
            foreach ($newValue['userValue'] as $value) {
              $newUsers[] = [
                'record_id' => $record->id,
                'field_id' => $field->id,
                'user_id' => $value['userId'],
                'created_at' => $carbonNow,
                'updated_at' => $carbonNow,
              ];
            }
            /* Delete users who are not in the new users list */
            FcCustomDataTypeUser::where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->whereNotIn('user_id', array_column($newUsers, 'user_id'))
              ->delete();

            $existingUsers = FcCustomDataTypeUser::select(['record_id', 'field_id', 'user_id'])
              ->where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->get();

            /* Get new users */
            $filteredUsers = array_filter($newUsers, function ($user) use ($existingUsers) {
              return !$existingUsers->contains('user_id', $user['user_id']);
            });

            /*  Create new users */
            if (count($filteredUsers)) {
              FcCustomDataTypeUser::insert($filteredUsers);
            }
          }
          break;
        case array_search('singleSelect', config('constant.customField.custom_type')):
          /*$validation = Validator::make($request->all(), [
             'newValues.*.singleSelectValue' => ['nullable', 'integer', "exists:fc_custom_fields_select_options,id,field_id," . $field->id],
           ]);
           if ($validation->fails()) {
             throw new Exception($validation->errors()->first());
           }*/
          if (array_key_exists('singleSelectValue', $newValue)) {
            $data = [
              'single_select_value' => $newValue['singleSelectValue']
            ];
          }
          break;
        case array_search('multiSelect', config('constant.customField.custom_type')):
          /*$validation = Validator::make(request()->all(), [
             'newValues.*.multiSelectValues' => ['nullable', 'array'],
            'newValues.*.multiSelectValues.*.optionId' => ['required_with:newValues.*.multiSelectValues', "exists:fc_custom_fields_select_options,id,field_id," . $field->id],
           ]);
           if ($validation->fails()) {
             throw new Exception($validation->errors()->first());
           }*/

          if (array_key_exists('multiSelectValues', $newValue) && is_array($newValue['multiSelectValues'])) {
            $newOptions = [];
            foreach ($newValue['multiSelectValues'] as $value) {
              $newOptions[] = [
                'record_id' => $record->id,
                'field_id' => $field->id,
                'multi_select_value' => $value['optionId'],
                'created_at' => $carbonNow,
                'updated_at' => $carbonNow,
              ];
            }
            /* Delete users who are not in the new users list */
            FcCustomDataTypeMultiSelect::where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->whereNotIn('multi_select_value', array_column($newOptions, 'multi_select_value'))
              ->delete();

            $existingOptions = FcCustomDataTypeMultiSelect::select(['record_id', 'field_id', 'multi_select_value'])
              ->where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->get();

            /* Get new options */
            $filteredOptions = array_filter($newOptions, function ($user) use ($existingOptions) {
              return !$existingOptions->contains('multi_select_value', $user['multi_select_value']);
            });

            /*  Create new multi-select options */
            if (count($filteredOptions)) {
              FcCustomDataTypeMultiSelect::insert($filteredOptions);
            }
          }
          break;

        case array_search('date', config('constant.customField.custom_type')):
          /*$validation = Validator::make($request->all(), [
             'newValues.*.dateValue.utcDateOnly' => ['required', 'integer', "date_format:Y-m-d"],
             'newValues.*.dateValue.utcTimeOnly' => ['nullable', 'integer', "date_format:Y-m-d"],
           ]);
           if ($validation->fails()) {
             throw new Exception($validation->errors()->first());
           }*/
          if (array_key_exists('dateValue', $newValue)) {
            $data = [
              'date_value' => optional($newValue['dateValue'])['utcDateOnly'],
              'time_value' => optional($newValue['dateValue'])['utcTimeOnly']
            ];
          }
          break;

        case array_search('dateNoTz', config('constant.customField.custom_type')):
          //ToDo: Temp. solution due to a bug in the frontend. localDateOnly should be required.
          $validation = Validator::make(request()->all(), [
            'newValues.*.dateNoTzValue.localDateOnly' => ['nullable', 'date_format:' . config('constant.date_format')],
            'newValues.*.dateNoTzValue.localTimeOnly' => ['nullable', 'date_format:' . config('constant.time_format')],
          ]);
          if ($validation->fails()) {
            throw new Exception($validation->errors()->first());
          }
          if (isset($newValue['dateNoTzValue'])) {
            $data = [
              'date_value' => optional($newValue['dateNoTzValue'])['localDateOnly'],
              'time_value' => optional($newValue['dateNoTzValue'])['localTimeOnly']
            ];
          }
          break;

        case array_search('number', config('constant.customField.custom_type')):
          /*$validation = Validator::make(request()->all(), [
            'newValues.*.dateNoTzValue.localDateOnly' => ['required', 'date_format:' . config('constant.date_format')],
            'newValues.*.dateNoTzValue.localTimeOnly' => ['nullable', 'date_format:' . config('constant.time_format')],
          ]);
          if ($validation->fails()) {
            throw new Exception($validation->errors()->first());
          }*/
          if (array_key_exists('numberValue', $newValue)) {
            $data = [
              'double_value' => $newValue['numberValue']
            ];
          }
          break;

        case array_search('currency', config('constant.customField.custom_type')):
          /*$validation = Validator::make(request()->all(), [
            'newValues.*.dateNoTzValue.localDateOnly' => ['required', 'date_format:' . config('constant.date_format')],
            'newValues.*.dateNoTzValue.localTimeOnly' => ['nullable', 'date_format:' . config('constant.time_format')],
          ]);
          if ($validation->fails()) {
            throw new Exception($validation->errors()->first());
          }*/
          if (array_key_exists('currencyValue', $newValue)) {
            $data = [
              'decimal_value' => $newValue['currencyValue']
            ];
          }
          break;

        case array_search('files', config('constant.customField.custom_type')):
          /*$validation = Validator::make(request()->all(), [
            'newValues.*.files' => ['required', 'array'],
            'newValues.*.files.*.id' => ['nullable', 'integer', 'exists:fc_custom_data_type_files,id'],
            'newValues.*.files.*.originalFileName' => ['required_without:newValues.*.files.*.id', 'nullable', 'string', 'max:255'],
            'newValues.*.files.*.storageFileName' => ['required_without:newValues.*.files.*.id', 'nullable', 'string', 'max:255'],
          ]);
          if ($validation->fails()) {
            throw new Exception($validation->errors()->first());
          }*/
          if (array_key_exists('files', $newValue) && is_array($newValue['files'])) {
            /* Delete files that are not in the new list */
            FcCustomDataTypeFile::where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->whereNotIn('id', array_column($newValue['files'], 'id'))
              ->delete();

            foreach ($newValue['files'] as $value) {
              if(!isset($value['id'])) {
                FcCustomDataTypeFile::create([
                  'record_id' => $record->id,
                  'field_id' => $field->id,
                  'original_file_name' => $value['originalFileName'],
                  'storage_file_name' => $value['storageFileName'],
                  'created_at' => $carbonNow,
                  'updated_at' => $carbonNow,
                ]);
              }
            }
          }
          break;

        case array_search('recordLink', config('constant.customField.custom_type')):
          $validation = Validator::make(request()->all(), [
            'newValues.*.recordLinkValues' => ['nullable', 'array'],
            'newValues.*.recordLinkValues.*.recordId' => ['required_with:newValues.*.recordLinkValues', "exists:fc_custom_records,id"],
          ]);

          if ($validation->fails()) {
            throw new Exception($validation->errors()->first());
          }

          $newOptions = [];
          foreach ($newValue['recordLinkValues'] as $value) {
            $newOptions[] = [
              'record_id' => $record->id,
              'field_id' => $field->id,
              'linked_record_id' => $value['recordId'],
              'created_at' => $carbonNow,
              'updated_at' => $carbonNow,
            ];
          }
            /* Delete record links that are not in the new list */
          FcCustomDataRecordLink::where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->whereNotIn('linked_record_id', array_column($newOptions, 'linked_record_id'))
              ->delete();

            $existingOptions = FcCustomDataRecordLink::select(['record_id', 'field_id', 'linked_record_id'])
              ->where('record_id', $record->id)
              ->where('field_id', $field->id)
              ->get();

            /* Get new options */
            $filteredOptions = array_filter($newOptions, function ($record) use ($existingOptions) {
              return !$existingOptions->contains('linked_record_id', $record['linked_record_id']);
            });

            /*  Create new record links options */
            if (count($filteredOptions)) {
              FcCustomDataRecordLink::insert($newOptions);
            }
          break;
      }
      if (count($data)) {
        FcCustomData::updateOrCreate([
          'record_id' => $record->id,
          'field_id' => $field->id,
        ], $data);
      }
    }
    return true;
  }

  /**
   * @param $request
   * @return array
   * @throws Exception
   */
  public function show($request) {
    // Check if the submenu belongs to the company
    $submenu = FcSubmenu::select(['id', 'menu_id', 'predefined_data'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })->where('id', $request->submenuId)->firstOrFail();

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));
    $editorAccess = array_search('editor', config('constant.fcSharedPermissions.accessLevel'));
    $hasPermission = (new FcSharedPermissionService)->checkForAccessToSubmenu($submenu, [$adminAccess, $editorAccess]);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    $customFields = !empty($submenu->fcCustomFields) ? $submenu->fcCustomFields : [];
    $customFieldsData = $submenu->predefined_data == array_search('load', config('constant.fcSubmenus.predefinedData')) ?
            FcCustomData::with(['field', 'files'])->where('load_id', $request->recordId)->get() :
            FcCustomData::with(['field', 'files'])->where('record_id', $request->recordId)->get();


    $textValue = array_search('text', config('constant.customField.custom_type'));
    $userValue = array_search('user', config('constant.customField.custom_type'));
    $singleSelectValue = array_search('singleSelect', config('constant.customField.custom_type'));
    $multiSelectValue = array_search('multiSelect', config('constant.customField.custom_type'));
    $dateValue = array_search('date', config('constant.customField.custom_type'));
    $dateNoTzValue = array_search('dateNoTz', config('constant.customField.custom_type'));
    $filesValue = array_search('files', config('constant.customField.custom_type'));
    $numberValue = array_search('number', config('constant.customField.custom_type'));
    $currencyValue = array_search('currency', config('constant.customField.custom_type'));
    $recordLinkValue = array_search('recordLink', config('constant.customField.custom_type'));
    $rollupValue = array_search('rollup', config('constant.customField.custom_type'));
    $formulaValue = array_search('formula', config('constant.customField.custom_type'));

    return [
      'id' => $request->recordId,
      // ToDo: Create a common resource to re-use this code in get-view
      'customFieldsData' => $customFields->map(function ($field)
      use ($request, $customFieldsData, $textValue, $userValue, $singleSelectValue, $multiSelectValue, $dateValue, $dateNoTzValue, $filesValue, $numberValue, $currencyValue, $recordLinkValue, $rollupValue, $formulaValue) {
        $data = $customFieldsData->where('field_id', $field->id)->first();
        $array = [];
        $array['fieldId'] = $field->id ?? '';
        if ($field->custom_type == $textValue) {
          $array['textValue'] = $data->text_value ?? null;
        }
        if ($field->custom_type == $numberValue) {
          $array['numberValue'] = $data->double_value ?? null;
        }
        if ($field->custom_type == $currencyValue) {
          $array['currencyValue'] = $data-> decimal_value ?? null;
        }
        if ($field->custom_type == $userValue) {
          $users = $field->users()->select(['record_id', 'user_id'])
                         ->where('record_id', $request->recordId)->get();
          $array['userValue'] = $users->count() ? $users->map(function ($user) {
            return [
              'userId' => $user->user_id,
            ];
          })->values() : [];
        }
        if ($field->custom_type == $singleSelectValue) {
          $array['singleSelectValue'] = optional($data)->single_select_value;
        }
        if ($field->custom_type == $multiSelectValue) {
          $options = $field->multiSelectOptions()->select(['record_id', 'multi_select_value'])
                           ->where('record_id', $request->recordId)->get();
          $array['multiSelectValues'] =  $options->count() ? $options->map(function ($option) {
            return [
              'optionId' => $option->multi_select_value,
            ];
          })->values() : [];
        }
        if ($field->custom_type == $dateValue) {
          $array['dateValue'] = [
            'utcDateOnly' => $data->date_value ?? null,
            'utcTimeOnly' => optional($data)->time_value ? Carbon::parse($data->time_value)->format('H:i') : null,
          ];
        }
        if($field->custom_type == $dateNoTzValue) {
          $array['dateNoTzValue'] =  [
            'localDateOnly' => $data->date_value ?? null,
            'localTimeOnly' => optional($data)->time_value ? Carbon::parse($data->time_value)->format('H:i') : null,
          ];
        }
        if($field->custom_type == $filesValue) {
          $array['filesValue'] =  $field->files ?
            $field->files->where('record_id', $request->recordId)->map(function ($file) {
            return [
              'id' => $file->id ?? "",
              'originalFileName' => $file->original_file_name ?? "",
              'url' => getImage($file->storage_file_name, config('constant.s3.menuFiles')) ?? "",
            ];
          })->values() : [];
        }

        if($field->custom_type == $recordLinkValue) {
          $array['recordLinkValues'] =  $field->recordLinks ?
            $field->recordLinks->where('record_id', $request->recordId)->map(function ($recordLink) use($request) {
            return [
              'recordId' => $recordLink->linked_record_id ?? "",
              'recordText' => $recordLink->getLinkedRecordText($recordLink->linked_record_id), // From getRecordTextAttribute() in FcCustomDataRecordLink.php
            ];
          })->values() : [];
        }

        if($field->custom_type == $rollupValue) {
          $array['numberValue'] = $field->calculateFormulae($request->recordId);
          $array['rollupValue'] =  [
            'type' => 'number',
          ];
        }

        if($field->custom_type == $formulaValue) {
          $array['numberValue'] = $field->calculateFormulae($request->recordId);
          $array['formulaValue'] =  [
            'type' => 'number',
          ];
        }

        return $array;
      }),
    ];
  }
}
