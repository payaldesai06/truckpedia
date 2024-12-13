<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcCustomData;
use App\Models\FullyCustomized\FcCustomDataTypeMultiSelect;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcCustomField;
use App\Models\FullyCustomized\FcViewShowField;

use Exception;

class FcCustomFieldService {

  /**
   * Create Custom Field Data.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function store($request, $submenu = null) {
    $listView = array_search('list', config('constant.fcViews.type'));
    $tableView = array_search('table', config('constant.fcViews.type'));

    // Check if the submenu belongs to the company
    $submenu = $submenu ?? FcSubmenu::select(['id', 'menu_id'])
      ->with(['fcViews' => function ($query) use($listView, $tableView) {
        $query->with('showFields')->whereIn('ui_type', [$listView, $tableView]);
      }])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })->where('id', $request->submenuId)->firstOrFail();

    $sharedPermissions = new FcSharedPermissionService();
    $isAdmin = $sharedPermissions->checkAdminAccessForSubmenu($submenu);
    if (!$isAdmin) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    $primaryLevels = collect($request['fields'])->where('level', 'primary')->pluck('level');

    if($primaryLevels->count() > 1) {
      throw new Exception(config('response.fc.field.level.primary_field_already_exists'));
    }  elseif ($primaryLevels->count() == 1) {
      $this->checkIfPrimaryFieldExists($submenu->id);
    }

    return DB::transaction(function () use ($request, $submenu, $listView, $tableView) {
      if (isset($request['fields']) && is_array($request['fields'])) {
        foreach ($request['fields'] as $field) {
          $customField = $submenu->fcCustomFields()->create([
            'name' => $field['name'],
            'custom_type' => array_search($field['type'], config('constant.customField.custom_type')),
            'level' => isset($field['level']) ? array_search($field['level'], config('constant.customField.level')) : null,
          ]);

          // when a new custom field is created, automatically add it to this submenu’s List & Table views’ show list, but no Board or Gantt view.
          // https://ezpapel.slack.com/archives/C03H231MUKE/p1673872724530839?thread_ts=1673867572.120779&cid=C03H231MUKE
          $listViews = $submenu->fcViews->where('ui_type', $listView);
          if($listViews->count() > 0) {
            foreach ($listViews as $index => $listView) {
              $lastOrder = $listView->showFields->max('order');
              $listView->showFields()->create([
                'order' => $index + 1 + $lastOrder,
                'field_id' => $customField->id
              ]);
            }
          }

          $tableViews = $submenu->fcViews->where('ui_type', $tableView);
          if($tableViews->count() > 0) {
            foreach ($tableViews as $index => $tableView) {
              $lastOrder = $tableView->showFields->max('order');
              $tableView->showFields()->create([
                'order' => $index + 1 + $lastOrder,
                'field_id' => $customField->id
              ]);
            }
          }

          if ($field['type'] == config('constant.customField.custom_type.3') && isset($field['singleSelectOptions'])) {
            $this->createSelectOptions($customField, $field['singleSelectOptions']);
          }

          if ($field['type'] == config('constant.customField.custom_type.9') && isset($field['multiSelectOptions'])) {
            $this->createSelectOptions($customField, $field['multiSelectOptions']);
          }

          if ($field['type'] == config('constant.customField.custom_type.10') && isset($field['recordLinkMetaData'])) {
            $this->createRecordLinks($customField, $field['recordLinkMetaData']);
          }

          if ($field['type'] == config('constant.customField.custom_type.11') && isset($field['rollUpMetaData'])) {
            $this->createRollupData($customField, $field['rollUpMetaData']);
          }

          if ($field['type'] == config('constant.customField.custom_type.12') && isset($field['formulaMetaData'])) {
            $this->createFormulaData($customField, $field['formulaMetaData']);
          }
        }
      }
      return true;
    });
  }

  /**
   * Update Custom Field Name by ID.
   * @param $request
   * @return Boolean
   * @throws Exception
   */
  public function update($request): bool {
    return DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $fcCustomField = FcCustomField::select(['id', 'submenu_id', 'custom_type', 'level'])
        ->where('id', $request->id)
        ->with(['fcSubmenu.fcMenu:id,company_id', 'selectOptions'])
        ->first();
      if (empty($fcCustomField) || empty($fcCustomField->fcSubmenu) || empty($fcCustomField->fcSubmenu->fcMenu) || $fcCustomField->fcSubmenu->fcMenu->company_id != $companyId) {
        throw new Exception(config('response.error'));
      }

      if ($fcCustomField->custom_type == array_search('singleSelect', config('constant.customField.custom_type'))) {
        $this->validateSingleSelectOptions($fcCustomField);
        $this->createOrUpdateSelectOptions($fcCustomField, $request->singleSelectOptions);
      }

      if ($fcCustomField->custom_type == array_search('multiSelect', config('constant.customField.custom_type'))) {
        $this->validateMultiSelectOptions($fcCustomField);
        $this->createOrUpdateSelectOptions($fcCustomField, $request->multiSelectOptions);
      }

      if ($fcCustomField->custom_type == array_search('formula', config('constant.customField.custom_type'))) {
        $this->validateFormula();
        $this->createFormulaData($fcCustomField, $request->formulaMetaData);
      }

      if ($request->level == 'primary') {
        $this->checkIfPrimaryFieldExists($fcCustomField->submenu_id, $fcCustomField->id);
      }

      return $fcCustomField->update([
        'name' => $request->name,
        'level' => isset($request->level) ? array_search($request->level, config('constant.customField.level')) : null,
      ]);
    });
  }

  private function checkIfPrimaryFieldExists($submenu_id, $fcCustomFieldId = null)
  {
      $primaryFieldsCount = FcCustomField::where('submenu_id', $submenu_id)
        ->when($fcCustomFieldId, function ($query) use ($fcCustomFieldId) {
          $query->where('id', '!=', $fcCustomFieldId);
        })
        ->where(['level' => array_search('primary', config('constant.customField.level'))])
        ->count();

      if($primaryFieldsCount >= 1) {
        throw new Exception(config('response.fc.field.level.primary_field_already_exists'));
      }

      return false;
  }

  /**
   * Get Custom Field by submenuId.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function index($request) {
    return FcCustomField::with('selectOptions')
      // ToDo: Add select once all features are implemented
      // ->select('id', 'name', 'custom_type')
      ->where('submenu_id', $request->submenuId)
      ->get();
  }

  /**
   * Validate Single Select options.
   * @param $fcCustomField
   * @return void
   * @throws Exception
   */
  private function validateSingleSelectOptions($fcCustomField) {
    $validation = Validator::make(request()->all(), [
      'singleSelectOptions' => ['required', 'array'],
      'singleSelectOptions.*.optionName' => ['required', 'string', 'min:1', 'max:100'],
      'singleSelectOptions.*.optionId' => [
        'nullable', 'numeric',
        Rule::exists('fc_custom_fields_select_options', 'id')->where(function ($query) use ($fcCustomField) {
          $query->where('field_id', $fcCustomField->id)->whereNull('deleted_at');
        })
      ],
    ], [
      'singleSelectOptions.required' => 'Single select options are required.',
      'singleSelectOptions.*.optionId.exists' => 'The selected option does not belong to this field.',
    ]);

    if ($validation->fails()) {
      throw new Exception($validation->errors()->first());
    }
  }

  /**
   * Validate Multi Select options.
   * @param $fcCustomField
   * @return void
   * @throws Exception
   */
  private function validateMultiSelectOptions($fcCustomField) {
    $validation = Validator::make(request()->all(), [
      'multiSelectOptions' => ['required', 'array'],
      'multiSelectOptions.*.optionName' => ['required', 'string', 'min:1', 'max:100'],
      'multiSelectOptions.*.optionId' => [
        'nullable', 'numeric',
        Rule::exists('fc_custom_fields_select_options', 'id')->where(function ($query) use ($fcCustomField) {
          $query->where('field_id', $fcCustomField->id)->whereNull('deleted_at');
        })
      ],
    ], [
      'multiSelectOptions.required' => 'Multi select options are required.',
      'multiSelectOptions.*.optionId.exists' => 'The selected option does not belong to this field.',
    ]);

    if ($validation->fails()) {
      throw new Exception($validation->errors()->first());
    }
  }

  private function validateFormula() {
    $validation = Validator::make(request()->all(), [
      'formulaMetaData' => ['required', 'array'],
      'formulaMetaData.formula' => ['required'],
      'formulaMetaData.formula.op' => ['required', 'string', 'in:+,-,*,/'],
    ]);

    if ($validation->fails()) {
      throw new Exception($validation->errors()->first());
    }
  }

  /**
   * @param $customField
   * @param $options
   * @return mixed
   */
  private function createSelectOptions($customField, $options) {
    $data = [];
    foreach ($options as $option) {
      $data[] = [
        'name' => $option['optionName'],
        'color' => $option['color'] ?? null,
      ];
    }

    return $customField->selectOptions()->createMany($data);
  }

  /**
   * Create or Update Select Options.
   * @param $customField
   * @param $options
   * @return void
   */
  private function createOrUpdateSelectOptions($customField, $options) {
    $selectOptions = $customField->selectOptions;
    $existingOptionsIds = $selectOptions->pluck('id')->toArray() ?? [];
    $requestOptionIds = array_column($options, 'optionId') ?? [];
    $needsToDeleteOptions = array_diff($existingOptionsIds, $requestOptionIds);
    if (!empty($needsToDeleteOptions)) {
      $customField->selectOptions()->whereIn('id', $needsToDeleteOptions)->delete();

      // Delete all the data which uses this single select options
      if ($customField->custom_type == array_search('singleSelect', config('constant.customField.custom_type'))) {
        FcCustomData::whereIn('single_select_value', $needsToDeleteOptions)->delete();
      }

      // Delete all the multi-select data which uses this multi select options
      if ($customField->custom_type == array_search('multiSelect', config('constant.customField.custom_type'))) {
        FcCustomDataTypeMultiSelect::whereIn('multi_select_value', $needsToDeleteOptions)->delete();
      }
    }
    foreach ($options as $option) {
      $customField->selectOptions()->updateOrCreate([
        'id' => $option['optionId'] ?? null,
      ], [
        'name' => $option['optionName'],
        'color' => $option['color'] ?? null,
      ]);
    }
  }

  /**
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function delete($request) {
    // Check if the submenu belongs to the company
    $submenu = FcSubmenu::select(['id', 'menu_id'])
      ->with(['fcViews'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })->where('id', $request->submenuId)->firstOrFail();

    $field = $submenu->fcCustomFields()->findOrFail($request->fieldId);

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));
    $hasPermission = (new FcSharedPermissionService)->checkForAccessToSubmenu($submenu, [$adminAccess]);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    return DB::transaction(function () use ($field, $submenu) {
      // ToDo: Check if we need to delete single and multi select options
      // Delete all the data which uses this single select options
     /* $selectOptionIds = $field->selectOptions()->pluck('id');
      if ($field->custom_type == array_search('singleSelect', config('constant.customField.custom_type'))) {
        FcCustomData::whereIn('single_select_value', $selectOptionIds)->delete();
      }

      // Delete all the multi-select data which uses this multi select options
      if ($field->custom_type == array_search('multiSelect', config('constant.customField.custom_type'))) {
        FcCustomDataTypeMultiSelect::whereIn('multi_select_value', $selectOptionIds)->delete();
      }

      $field->selectOptions()->delete();*/

      // Delete the field from all the view_show_fields
      FcViewShowField::whereIn('view_id', $submenu->fcViews->pluck('id'))
        ->where('field_id', $field->id)->delete();

      $submenu->fcViews->each(function ($view) use ($field) {
        // Remove the field from record_dates_for_ui
        if(isset($view->record_dates_for_ui['startDate'])) {
          if($view->record_dates_for_ui['startDate']['customFieldId'] == $field->id) {
            $view->record_dates_for_ui = [
              'startDate' =>  [
                'customFieldId' => null
              ]
            ];
          }
        }
        if(isset($view->record_dates_for_ui['endDate'])) {
          if ($view->record_dates_for_ui['endDate']['customFieldId'] == $field->id) {
            $view->record_dates_for_ui = [
              'endDate' => [
                'customFieldId' => null
              ]
            ];
          }
        }
        // Remove the field from group_by
        if(isset($view->group_by['firstLevel'])) {
          if($view->group_by['firstLevel']['customFieldId'] == $field->id) {
            $view->group_by = [
              'firstLevel' =>  [
                'customFieldId' => null
              ]
            ];
          }
        }
        $view->save();
      });

      $field->delete();
    });
  }

  private function createRecordLinks($customField, $recordLinkMetaData) {
    $submenuId = $recordLinkMetaData['submenuId'];

    $submenu = FcSubmenu::select(['id', 'menu_id'])->findOrFail($submenuId);

    if ($customField->fcSubmenu->menu_id !== $submenu->menu_id) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    return $customField->update([
      'record_link_submenu_id' => $submenuId,
    ]);
  }

  private function createRollupData($customField, $rollUpMetaData) {
    return $customField->update([
      'rollup_target_submenu_id' => $rollUpMetaData['targetSubmenuId'],
      'rollup_target_field_id' => $rollUpMetaData['targetCustomFieldId'],
      'settings' => $rollUpMetaData['filter'],
    ]);
  }

  private function createFormulaData($customField, $formulaMetaData) {
    return $customField->update([
      'settings' => $formulaMetaData['formula'],
    ]);
  }
}
