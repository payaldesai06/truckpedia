<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcCustomRecord;
use Exception;
use Carbon\Carbon;
use App\Models\Load;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use App\Services\DriverPayHelper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\FullyCustomized\FcMenu;
use App\Models\FullyCustomized\FcView;
use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcCustomField;
use App\Models\FullyCustomized\FcCustomData;
use App\Models\FullyCustomized\FcCustomDataRecordLink;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Resources\FullyCustomized\FcCustomFieldResource;
use App\Http\Resources\FullyCustomized\FcCustomRecordResource;

class FcViewService {
  /**
   * Checks if the submenu exists and if the user has access to it.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createView($request, $submenu = null, $ignorePermissionCheck = false) {
    if (!$submenu) {
      $submenu = FcSubmenu::where('id', $request['submenuId'])->firstOrFail();
    }
    // $ignorePermissionCheck is used when creating a view via the create menu/submenu method
    if (!$ignorePermissionCheck) {
      // check if the submenu belongs to the current user’s company
      $menu = FcMenu::where('id', $submenu->menu_id)
        ->where('company_id', getAuthAdminCompanyId())
        ->exists();

      if (!$menu) {
        throw new Exception(config('response.fc.submenu.access_denied'));
      }

      $fcSharedPermission = new FcSharedPermissionService();

      // Check if the user has admin access to the menu
      $permissionCheck = $fcSharedPermission->checkForAdminAccessToFcView(
        $submenu->fcMenu->owner_id,
        $submenu->menu_id,
        $submenu->id
      );

      if (!$permissionCheck) {
        throw new Exception(config('response.fc.submenu.access_denied'));
      }
    }

    return DB::transaction(function () use ($request, $submenu) {
      $view = FcView::create([
        'submenu_id' => $request['submenuId'],
        'name' => $request['name'],
        'ui_type' => $request['type'] ?
          array_search($request['type'], config('constant.fcViews.type')) : null,
      ]);

      $this->createShowFields(
        $view,
        $submenu->fcCustomFields,
        $view->ui_type,
        $submenu->predefined_data == array_search('load', config('constant.fcSubmenus.predefinedData'))
      );
      return $view;
    });
  }

  /**
   * List all views for a given submenu
   * @param $submenuId
   * @return mixed
   * @throws Exception
   */
  public function getViews($submenuId) {
    $fcSharedPermission = new FcSharedPermissionService();
    $permissionCheck = $fcSharedPermission->checkForViewAccessToFcView($submenuId);

    if (!$permissionCheck) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    return FcView::select(['id', 'name', 'submenu_id', 'ui_type'])
      ->whereHas('fcSubmenu.fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('submenu_id', $submenuId)
      ->get();
  }

  /**
   * Checks if the view exists and if the user has access to it.
   * @param $request
   * @return bool
   * @throws Exception
   */
  public function updateView($request) {
    // Check if the view and submenu belong to the current user’s company.
    $view = FcView::select(['id', 'name', 'submenu_id', 'ui_type'])
      ->with(['fcSubmenu:id,menu_id', 'fcSubmenu.fcMenu:id,owner_id,company_id', 'showFields'])
      ->whereHas('fcSubmenu.fcMenu', function (Builder $query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('id', $request->id)
      ->firstOrFail();

    if ($request->filled('name') && $request->name !== $view->name) {
      $view->name = $request->name;
    }

    $data = $this->validateViewData($view, $request);

    if (!is_null($data['groupBy'])) {
      $view->group_by = $data['groupBy'];
    }

    $fcSharedPermission = new FcSharedPermissionService();

    // Check if the user has admin access to the menu/submenu
    $permissionCheck = $fcSharedPermission->checkForAdminAccessToFcView(
      $view->fcSubmenu->fcMenu->owner_id,
      $view->fcSubmenu->menu_id,
      $view->submenu_id
    );

    if (!$permissionCheck) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    if (array_key_exists('columns', $data) && !is_null($data['columns'])) {
      (new FcViewShowFieldsService)->createOrUpdateFields($view, $data['columns']);
    }

    if (!is_null($data['columns']) && $view->ui_type == array_search('gantt', config('constant.fcViews.type'))) {
      $view->showFields()->updateOrCreate([
        'order' => $data['columns'][0]['order'],
        'field_id' => $data['columns'][0]['customFieldId'],
      ]);
    }

    if (!is_null($data['dates'])) {
      $view->record_dates_for_ui = $data['dates'];
    }

    return $view->save();
  }

  /**
   * @param $view
   * @param $request
   * @return array
   * @throws Exception
   */
  private function validateViewData($view, $request) {
    $columns = null;
    $groupBy = null;
    $dates = null;

    if ($view->ui_type == array_search('list', config('constant.fcViews.type')) && $request->filled('listMetaData')) {
      $validation = Validator::make($request->all(), [
        'listMetaData' => ['nullable', 'array'],
        'listMetaData.groupBy' => ['nullable', 'array'],
        'listMetaData.groupBy.firstLevel' => ['nullable', 'array'],
        'listMetaData.groupBy.firstLevel.customFieldId' => ['nullable', 'integer', 'exists:fc_custom_fields,id'],
        'listMetaData.show' => ['nullable', 'array'],
        'listMetaData.show.columns' => ['nullable', 'array'],
        'listMetaData.show.columns.*.order' => ['nullable', 'integer', 'min:1', 'distinct'],
        'listMetaData.show.columns.*.customFieldId' => [
          'required_with:listMetaData.show.columns.*.order', 'integer', 'exists:fc_custom_fields,id'
        ]
      ]);

      if ($validation->fails()) {
        throw new Exception($validation->errors()->first());
      }

      if ($request->filled('listMetaData.show.columns')) {
        $columns = $request->listMetaData['show']['columns'];
      }

      if ($request->filled('listMetaData.groupBy')) {
        $groupBy = [
          'firstLevel' => is_null($request->listMetaData['groupBy']['firstLevel']) ? null : [
            'customFieldId' => $request->listMetaData['groupBy']['firstLevel']['customFieldId'],
          ]
        ];
      }
    }

    if ($view->ui_type == array_search('board', config('constant.fcViews.type')) && $request->filled('boardMetaData')) {
      $validation = Validator::make($request->all(), [
        'boardMetaData' => ['nullable', 'array'],
        'boardMetaData.groupBy' => ['nullable', 'array'],
        'boardMetaData.groupBy.firstLevel' => ['nullable', 'array'],
        'boardMetaData.groupBy.firstLevel.customFieldId' => ['nullable', 'integer', 'exists:fc_custom_fields,id'],
        'boardMetaData.show' => ['nullable', 'array'],
        'boardMetaData.show.columns' => ['nullable', 'array'],
        'boardMetaData.show.columns.*.order' => ['nullable', 'integer', 'min:1', 'distinct'],
        'boardMetaData.show.columns.*.customFieldId' => [
          'required_with:boardMetaData.show.columns.*.order', 'integer', 'exists:fc_custom_fields,id'
        ]
      ]);

      if ($validation->fails()) {
        throw new Exception($validation->errors()->first());
      }

      if ($request->filled('boardMetaData.show.columns')) {
        $columns = $request->boardMetaData['show']['columns'];
        // Board view does not support width
        array_walk($columns, function (&$columns) {
          unset($columns['width']);
        });
      }


      if ($request->filled('boardMetaData.groupBy')) {
        $groupBy = [
          'firstLevel' => is_null($request->boardMetaData['groupBy']['firstLevel']) ? null : [
            'customFieldId' => $request->boardMetaData['groupBy']['firstLevel']['customFieldId'],
          ]
        ];
      }
    }

    if ($view->ui_type == array_search('table', config('constant.fcViews.type')) && $request->filled('tableMetaData')) {
      $validation = Validator::make($request->all(), [
        'tableMetaData' => ['nullable', 'array'],
        'tableMetaData.groupBy' => ['nullable', 'array'],
        'tableMetaData.groupBy.firstLevel' => ['nullable', 'array'],
        'tableMetaData.groupBy.firstLevel.customFieldId' => ['nullable', 'integer', 'exists:fc_custom_fields,id'],
        'tableMetaData.show' => ['nullable', 'array'],
        'tableMetaData.show.columns' => ['nullable', 'array'],
        'tableMetaData.show.columns.*.order' => ['nullable', 'integer', 'min:1', 'distinct'],
        'tableMetaData.show.columns.*.customFieldId' => [
          'required_with:tableMetaData.show.columns.*.order', 'integer', 'exists:fc_custom_fields,id'
        ]
      ]);

      if ($validation->fails()) {
        throw new Exception($validation->errors()->first());
      }

      if ($request->filled('tableMetaData.show.columns')) {
        $columns = $request->tableMetaData['show']['columns'];
      }

      if ($request->filled('tableMetaData.groupBy')) {
        $groupBy = [
          'firstLevel' => is_null($request->tableMetaData['groupBy']['firstLevel']) ? null : [
            'customFieldId' => $request->tableMetaData['groupBy']['firstLevel']['customFieldId'],
          ]
        ];
      }
    }

    if ($view->ui_type == array_search('gantt', config('constant.fcViews.type')) && $request->filled('ganttMetaData')) {
      $validation = Validator::make($request->all(), [
        'ganttMetaData' => ['nullable', 'array'],
        'ganttMetaData.recordDatesForUi' => ['nullable', 'array'],
        'ganttMetaData.recordDatesForUi.startDate' => ['required_with:ganttMetaData.recordDatesForUi', 'array'],
        'ganttMetaData.recordDatesForUi.startDate.customFieldId' => [
          'nullable', 'integer', 'exists:fc_custom_fields,id'
        ],
        'ganttMetaData.recordDatesForUi.endDate' => ['nullable', 'array'],
        'ganttMetaData.recordDatesForUi.endDate.customFieldId' => ['nullable', 'integer', 'exists:fc_custom_fields,id'],
        'ganttMetaData.show' => ['nullable', 'array'],
        'ganttMetaData.show.columns' => ['nullable', 'array', 'max:1'],
        'ganttMetaData.show.columns.*.order' => ['required_with:ganttMetaData.show.columns', 'integer', Rule::in([1])],
        // required for now but will be optional later after we support “load” predefinedData
        'ganttMetaData.show.columns.*.customFieldId' => [
          'required_with:ganttMetaData.show.columns.*.order', 'integer', 'exists:fc_custom_fields,id'
        ]
      ]);

      if ($validation->fails()) {
        throw new Exception($validation->errors()->first());
      }

      if ($request->filled('ganttMetaData.show.columns')) {
        $columns = $request->ganttMetaData['show']['columns'];
        array_walk($columns, function (&$columns) {
          unset($columns['width']);
        });
      }

      if ($request->filled('ganttMetaData.recordDatesForUi.startDate.customFieldId')) {
        $dates['startDate'] = [
          'customFieldId' => $request->ganttMetaData['recordDatesForUi']['startDate']['customFieldId']
        ];
      }

      if ($request->filled('ganttMetaData.recordDatesForUi.endDate.customFieldId')) {
        $dates['endDate'] = [
          'customFieldId' => $request->ganttMetaData['recordDatesForUi']['endDate']['customFieldId']
        ];
      }
    }

    return [
      'columns' => $columns,
      'groupBy' => $groupBy,
      'dates' => $dates,
    ];
  }

  /**
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getSingleView($request): array {
    $viewId = $request->input('viewId');
    // ToDo: Optimize this query
    $view = FcView::with([
      'showFields',
      'fcSubmenu:id,predefined_data',
      // I think this line is wrong.
      //'fcSubmenu.fcCustomFields.fcSubMenu.fcCustomFields',
      'fcSubmenu.fcCustomFields.recordLinks:id,record_id,field_id,linked_record_id',
      'fcSubmenu.fcCustomFields.selectOptions',
      'fcSubmenu.fcCustomFields.targetField.fcSubmenu.fcCustomFields.recordLinks',
      'fcSubmenu.fcCustomRecords',
      'fcSubmenu.fcCustomRecords.data',
      'fcSubmenu.fcCustomRecords.data.field',
      'fcSubmenu.fcCustomRecords.data.field.users',
      'fcSubmenu.fcCustomRecords.data.field.files',
      'fcSubmenu.fcCustomFields.multiSelectOptions',
    ])
      ->whereHas('fcSubmenu.fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('id', $viewId)
      ->firstOrFail();

    $hasPermission = (new FcSharedPermissionService)->checkForViewAccessToFcView($view->submenu_id);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.view.access_denied'));
    }

    $submenu = $view->fcSubmenu;

    $response = [
      'id' => $view->id,
      'name' => $view->name,
      'type' => config('constant.fcViews.type')[$view->ui_type],
    ];

    if (!empty($submenu->predefined_data)) {
      $response['predefinedData'] = config('constant.fcSubmenus.predefinedData')[$submenu->predefined_data];
    }

    $predefinedType = $submenu->predefined_data ?? null;

    if ($predefinedType == array_search('load', config('constant.fcSubmenus.predefinedData'))) {
      $validation = Validator::make($request->all(), [
        'loadFilters.startDate' => ['required', 'date_format:Y-m-d'],
        'loadFilters.endDate' => ['required', 'date_format:Y-m-d'],
      ]);

      if ($validation->fails()) {
        throw new Exception($validation->errors()->first());
      }
    }

    if (!empty($view->ui_type)) {
      switch ($view->ui_type) {
        case array_search('list', config('constant.fcViews.type')):
          if (!empty($view->group_by)) {
            $customFieldId = $view->group_by['firstLevel']['customFieldId'] ?? null;
            $predefinedField = $view->group_by['firstLevel']['predefinedField'] ?? null;
            $response['listMetaData']['groupBy'] = $this->getViewMetaData($customFieldId, $predefinedField, $predefinedType);
          }
          $response['listMetaData']['show'] = [
            'columns' => $this->getShowFields($view, $predefinedType)
          ];
          break;

        case array_search('board', config('constant.fcViews.type')):
          if (!empty($view->group_by)) {
            $customFieldId = $view->group_by['firstLevel']['customFieldId'] ?? null;
            $predefinedField = $view->group_by['firstLevel']['predefinedField'] ?? null;
            $response['boardMetaData']['groupBy'] = $this->getViewMetaData($customFieldId, $predefinedField, $predefinedType);
          }
          $response['boardMetaData']['show'] = [
            'columns' => $this->getShowFields($view, $predefinedType)
          ];
          break;

        case array_search('gantt', config('constant.fcViews.type')):
          /* predefined not implemented */
          if ($predefinedType == array_search('load', config('constant.fcSubmenus.predefinedData'))) {
            $response['ganttMetaData']['recordDatesForUi'] = [
              'startDate' => [
                'predefinedField' => isset($view->record_dates_for_ui['startDate']) ?
                  optional($view->record_dates_for_ui['startDate'])['predefinedField'] : null,
              ],
              'endDate' => [
                'predefinedField' => isset($view->record_dates_for_ui['endDate']) ?
                  optional($view->record_dates_for_ui['endDate'])['predefinedField'] : null,
              ],
            ];
          } else {
            $response['ganttMetaData']['recordDatesForUi'] = [
              'startDate' => [
                'customFieldId' => isset($view->record_dates_for_ui['startDate']) ?
                  optional($view->record_dates_for_ui['startDate'])['customFieldId'] : null,
              ],
              'endDate' => [
                'customFieldId' => isset($view->record_dates_for_ui['endDate']) ?
                  optional($view->record_dates_for_ui['endDate'])['customFieldId'] : null,
              ],
            ];
          }
          $response['ganttMetaData']['show'] = [
            'columns' => $this->getShowFields($view, $predefinedType)
          ];
          break;

        case array_search('table', config('constant.fcViews.type')):
          if (!empty($view->group_by)) {
            $customFieldId = $view->group_by['firstLevel']['customFieldId'] ?? null;
            $predefinedField = $view->group_by['firstLevel']['predefinedField'] ?? null;
            $response['tableMetaData']['groupBy'] = $this->getViewMetaData($customFieldId, $predefinedField, $predefinedType);
          }
          $response['tableMetaData']['show'] = [
            'columns' => $this->getShowFields($view, $predefinedType)
          ];
          break;
      }
    }

    $predefinedFields = $view->showFields->isNotEmpty() ? $view->showFields->whereNotNull('predefined_field')->pluck('predefined_field') : collect();
    $predefinedFieldsData = [];
    if ($predefinedFields->isNotEmpty()) {
      $loadFilters = $request->loadFilters;
      $loads = $this->getLoadDetails($predefinedFields, $loadFilters['startDate'], $loadFilters['endDate']);
      $predefinedFieldsData = $this->getPredefinedData($loads, $predefinedFields);
    }

    $showFieldIds = $view->showFields->pluck('field_id');

    if ($view->group_by) {
      $customFieldIds = array_column($view->group_by, 'customFieldId');
      $showFieldIds = $showFieldIds->merge(array_values($customFieldIds));
    }

    if ($view->record_dates_for_ui) {
      $customFieldIds = array_column($view->record_dates_for_ui, 'customFieldId');
      $showFieldIds = $showFieldIds->merge(array_values($customFieldIds));
    }

    $recordCustomFields = optional($view->fcSubmenu)->fcCustomFields ?? [];

    $customFields = !empty($view->fcSubmenu->fcCustomFields) ?
      $view->fcSubmenu->fcCustomFields->whereIn('id', $showFieldIds->unique()->toArray()) : [];
    //$linkedRecordsField = $customFields->pluck('recordLinks')->flatten(1)->pluck('linkedRecord')->flatten(1)->pluck('submenu')->flatten(1)->pluck('fcCustomFields')->flatten(1)->first();
    //$linkedRecordsData = collect();
    // TODO(0607): fix it.
    // This apparently does not work, it runs out of memory when open purchase orders.
    $linkedRecordsData = $this->getLinkedRecordsData($customFields);
    $customFieldsData = $view->fcSubmenu->fcCustomRecords ?? [];
    $linkedAndFormulaData = $this->getCustomDataForLinkedAndFormulaFields($customFields);
    $response['recordCustomFields'] = FcCustomFieldResource::collection($recordCustomFields);
    /*
    DB::flushQueryLog();
    DB::enableQueryLog();
    error_log(json_encode(DB::getQueryLog()));
    error_log(json_encode(Carbon::now()));
    */
    $response['recordData'] = $this->getViewResponseHelper(
      $customFieldsData,
      $customFields,
      $predefinedFieldsData,
      $predefinedType == array_search('load', config('constant.fcSubmenus.predefinedData')),
      $linkedAndFormulaData,
      $linkedRecordsData,
      // $linkedRecordsField
    );
    return $response;
  }

  private function getViewResponseHelper(
    $resource,
    $customFields,
    $predefinedFieldsData,
    $isLoad = false,
    $linkedAndFormulaData = null,
    $linkedRecordsData = null,
    $linkedRecordsField = null
  ) {
    $finalRet = [];

    $tempcustomFields = $customFields;
    $zbuOptimize = [];
    foreach ($linkedAndFormulaData as $oneLinkedData) {
      if (!$oneLinkedData->double_value && !$oneLinkedData->decimal_value && !$oneLinkedData->single_select_value) {
        continue;
      }
      if ($oneLinkedData->single_select_value) {
        $zbuOptimize['formulaRollupRecordData'][$oneLinkedData->record_id][$oneLinkedData->field_id] = $oneLinkedData->single_select_value;
        continue;
      }
      $numberValue = $oneLinkedData->double_value ? $oneLinkedData->double_value : $oneLinkedData->decimal_value;
      $zbuOptimize['formulaRollupRecordData'][$oneLinkedData->record_id][$oneLinkedData->field_id] = $numberValue;
      continue;
    }

    foreach ($resource as $oneRecord) {
      $textValue = array_search('text', config('constant.customField.custom_type'));
      $userValue = array_search('user', config('constant.customField.custom_type'));
      $singleSelectValue = array_search('singleSelect', config('constant.customField.custom_type'));
      $dateValue = array_search('date', config('constant.customField.custom_type'));
      $dateNoTzValue = array_search('dateNoTz', config('constant.customField.custom_type'));
      $filesValue = array_search('files', config('constant.customField.custom_type'));
      $numberValue = array_search('number', config('constant.customField.custom_type'));
      $currencyValue = array_search('currency', config('constant.customField.custom_type'));
      $multiSelectValue = array_search('multiSelect', config('constant.customField.custom_type'));
      $recordLinkValue = array_search('recordLink', config('constant.customField.custom_type'));
      $rollupValue = array_search('rollup', config('constant.customField.custom_type'));
      $formulaValue = array_search('formula', config('constant.customField.custom_type'));

      $ret = [
        'id' => $oneRecord->id ?? '',
        'customFieldsData' => $tempcustomFields->map(function ($field) use (
          $textValue,
          $userValue,
          $singleSelectValue,
          $dateValue,
          $dateNoTzValue,
          $filesValue,
          $numberValue,
          $currencyValue,
          $multiSelectValue,
          $recordLinkValue,
          $rollupValue,
          $formulaValue,
          $linkedAndFormulaData,
          $oneRecord,
          $linkedRecordsData,
          $linkedRecordsField,
          $customFields,
          &$zbuOptimize
        ) {
          $data = $oneRecord->data->where('field_id', $field->id)->first(); // Record Data
          $array = [];
          $array['fieldId'] = $field->id ?? '';
          if ($field->custom_type == $textValue) {
            $array['textValue'] = $data->text_value ?? null;
          }
          if ($field->custom_type == $numberValue) {
            $array['numberValue'] = $data->double_value ?? null;
          }
          if ($field->custom_type == $currencyValue) {
            $array['currencyValue'] = $data->decimal_value ?? null;
          }
          if ($field->custom_type == $userValue) {
            $array['userValue'] = $field->users ? $field->users->where('record_id', $oneRecord->id)->map(function ($user) {
              return [
                'userId' => $user->user_id,
              ];
            })->values() : null;
          }
          if ($field->custom_type == $singleSelectValue) {
            $array['singleSelectValue'] = optional($data)->single_select_value;
          }

          if ($field->custom_type == $multiSelectValue) {
            $array['multiSelectValues'] = $field->multiSelectOptions->where('record_id', $oneRecord->id)->map(function ($option) {
              return [
                'optionId' => $option->multi_select_value,
              ];
            })->values();
          }

          if ($field->custom_type == $dateValue) {
            $array['dateValue'] = [
              'utcDateOnly' => $data->date_value ?? null,
              'utcTimeOnly' => optional($data)->time_value ? Carbon::parse($data->time_value)->format('H:i') : null,
            ];
          }
          if ($field->custom_type == $dateNoTzValue) {
            $array['dateNoTzValue'] = [
              'localDateOnly' => $data->date_value ?? null,
              'localTimeOnly' => optional($data)->time_value ? Carbon::parse($data->time_value)->format('H:i') : null,
            ];
          }
          if ($field->custom_type == $filesValue) {
            $array['filesValue'] = $field->files ? $field->files->where('record_id', $oneRecord->id)->map(function ($file) {
              return [
                'id' => $file->id ?? "",
                'originalFileName' => $file->original_file_name ?? "",
                'url' => getImage($file->storage_file_name, config('constant.s3.menuFiles')) ?? "",
              ];
            })->values() : null;
          }

          if ($field->custom_type == $recordLinkValue) {
            // TODO(0607): make this eager loading, but do not load unnecessary data!
            $array['recordLinkValues'] = $field->recordLinks ? $field->recordLinks->where('record_id', $oneRecord->id)->map(function ($recordLink) use ($linkedRecordsData) {
              return [
                'recordId' => $recordLink->linked_record_id ?? "",
                // TODO(0607): Do not touch getLinkedRecordText(), create a new function in this file,
                // like what I did with calculateRollup();
                'recordText' => $recordLink->linked_record_id && isset($linkedRecordsData[$recordLink->linked_record_id]) ? $this->getLinkedRecordText($linkedRecordsData[$recordLink->linked_record_id]) : '',
                // 'recordText' => $recordLink->getLinkedRecordText($recordLink->linked_record_id),
              ];
            })->values() : [];
          }

          $id = $oneRecord->id;
          if ($field->custom_type == $rollupValue) {
            $array['numberValue'] = $this->calculateRollup($field, $id, $customFields, $linkedAndFormulaData, $zbuOptimize);
            $array['rollupValue'] =  ['type' => 'number'];
          }

          if ($field->custom_type == $formulaValue) {
            return null;
          }
          return $array;
        })->filter()->values()->all(),
        //'predefinedFieldsData' => [], //$this->when(self::$isLoad, self::$predefinedFieldsData)
      ];

      foreach ($tempcustomFields as $field) {
        if ($field->custom_type != $formulaValue) {
          continue;
        }
        $array = [];
        $array['fieldId'] = $field->id ?? '';
        if ($field->custom_type == $formulaValue) {
          $array['numberValue'] = $this->dagBasedCalculateFormula($field, $ret['customFieldsData']);
          $array['formulaValue'] =  [
            'type' => 'number',
          ];
          $ret['customFieldsData'][] = $array;
        }
      }
      $finalRet[] = $ret;
    }
    return $finalRet;
  }

  // TODO(0607): this is not enough. For example, what if field1 is also formula?
  // You need to use recursion to solve such case.
  // like dagBasedCalculateFormula can call it self.
  private function dagBasedCalculateFormula($field, $customFieldsData) {
    $formula = $field->settings;
    $operator = $formula['op'];

    $field1Number = 0;
    $field2Number = 0;
    $field1 = $formula['params'][0]['customField'];
    $field2 = $formula['params'][1]['customField'];

    foreach ($customFieldsData as $oneFieldData) {
      if ($oneFieldData['fieldId'] == $field1) {
        if (isset($oneFieldData['numberValue'])) {
          $field1Number = $oneFieldData['numberValue'];
        } else if (isset($oneFieldData['currencyValue'])) {
          $field1Number = $oneFieldData['currencyValue'];
        }
      } else if ($oneFieldData['fieldId'] == $field2) {
        if (isset($oneFieldData['numberValue'])) {
          $field2Number = $oneFieldData['numberValue'];
        } else if (isset($oneFieldData['currencyValue'])) {
          $field2Number = $oneFieldData['currencyValue'];
        }
      }
    }

    switch ($operator) {
      case '+':
        return  $field1Number + $field2Number;
      case '-':
        return $field1Number - $field2Number;
      case '*':
        return $field1Number * $field2Number;
      case '/':
        $denominator = $field2Number;
        return $denominator == 0 ? null : $field1Number / $denominator;
      default:
        return 0;
    }

    return 0;
  }

  private function calculateRollup(
    $field,
    $recordId,
    $fields = null,
    $linkedAndFormulaData = null,
    &$zbuOptimize = []
  ) {
    if ($field->custom_type == array_search('rollup', config('constant.customField.custom_type'))) {
      $targetField = $field->targetField;
      $ret = $this->sumFieldsData($targetField, $recordId, 'rollup', $field->settings, $fields, $linkedAndFormulaData, $zbuOptimize);
      return $ret;
    }
    return 0;
  }

  private function sumFieldsData(
    $field,
    $recordId,
    $type = 'formula',
    $filter = null,
    $fields = null,
    $linkedAndFormulaData = null,
    &$zbuOptimize = []
  ) {
    switch ($field->custom_type) {
      case array_search('rollup', config('constant.customField.custom_type')):
        return $this->sumFieldsData($field->targetField, $recordId, 'rollup', $field->settings, $fields, $linkedAndFormulaData, $zbuOptimize);
      case array_search('currency', config('constant.customField.custom_type')):
        $summationField = 'decimal_value';
        break;
      case array_search('number', config('constant.customField.custom_type')):
      default:
        $summationField = 'double_value';
        break;
    }
    if ($type == 'rollup') {
      $linkedField = $field->fcSubmenu->fcCustomFields->where('custom_type', array_search('recordLink', config('constant.customField.custom_type')))->first();
      if (!$linkedField) {
        return 0;
      }
      if (!isset($zbuOptimize['zbuLinkedRecordIdToRecordId']) || !isset($zbuOptimize['zbuLinkedRecordIdToRecordId'][$linkedField->id])) {
        // error_log("not set");
        $zbuOptimize['zbuLinkedRecordIdToRecordId'][$linkedField->id] = [];
        foreach ($linkedField->recordLinks as $oneLink) {
          $zbuOptimize['zbuLinkedRecordIdToRecordId'][$linkedField->id][$oneLink->linked_record_id][] = $oneLink->record_id;
        }
      }
      $linkedRecords = $zbuOptimize['zbuLinkedRecordIdToRecordId'][$linkedField->id][$recordId] ?? [];

      if (!is_null($filter) || !empty($filter['conditions'])) {
      } else {
        $ret = 0;
        foreach ($linkedRecords as $oneLinkedRecordId) {
          $ret +=  $zbuOptimize['formulaRollupRecordData'][$oneLinkedRecordId][$field->id] ?? 0;
        }
        return $ret;
      }
    } else {
      if (!is_null($filter) || !empty($filter['conditions'])) {
      } else {
        return  $zbuOptimize['formulaRollupRecordData'][$recordId][$field->id] ?? 0;
      }
    }
    if (!is_null($filter) || !empty($filter['conditions'])) {
      $condition = $filter['conditions'][0];
      $comparison = $condition['cmp'];
      $value = $condition['value'];
      $fieldId = $condition['customField'];
      if (
        !isset($zbuOptimize['fieldSingleSelectValueRecordId'])
        || !isset($zbuOptimize['fieldSingleSelectValueRecordId'][$fieldId])
        || !isset($zbuOptimize['fieldSingleSelectValueRecordId'][$fieldId][$value])
      ) {
        // error_log("data not set");
        $zbuOptimize['fieldSingleSelectValueRecordId'][$fieldId][$value] =
          $linkedAndFormulaData->where('field_id', $fieldId)
          ->where('single_select_value', $value)
          ->pluck('record_id')->toArray() ?? [];
      }
      $recordIds = $zbuOptimize['fieldSingleSelectValueRecordId'][$fieldId][$value] ?? [];

      switch ($comparison) {
        case 'is':
          $ret = 0;
          foreach (array_intersect($linkedRecords, $recordIds) as $oneLinkedRecordId) {
            $ret +=  $zbuOptimize['formulaRollupRecordData'][$oneLinkedRecordId][$field->id] ?? 0;
          }
          return $ret;
        default:
          return 0;
      }
    }
    // should not go here
    // exit(1);
    return 0;
  }

  private function getCustomDataForLinkedAndFormulaFields($customFields) {
    $rollupField = $customFields->where('custom_type', array_search('rollup', config('constant.customField.custom_type')));
    $filterFieldIds = $rollupField->pluck('settings.conditions')->flatten(1)->pluck('customField')->filter();
    $rollupTargetFieldIds = $rollupField->pluck('rollup_target_field_id')->filter();
    $formulaFields = $customFields->where('custom_type', array_search('formula', config('constant.customField.custom_type')));
    $formulaFieldIds = $formulaFields->pluck('settings.params')->flatten(1)->pluck('customField')->filter();

    return FcCustomData::select(['id', 'field_id', 'single_select_value', 'record_id', 'double_value', 'decimal_value'])
      ->whereHas('record')
      ->whereIn('field_id', $formulaFieldIds->merge($rollupTargetFieldIds)->merge($filterFieldIds)->unique()->toArray())
      ->get();
  }

  private function getLinkedRecordsData($customFields) {
    $linkedRecordIds = $customFields->pluck('recordLinks')->flatten(1)->pluck('linked_record_id')->unique();
    $linkedSubMenus = FcCustomRecord::select(['submenu_id'])->whereIn('id', $linkedRecordIds)->pluck('submenu_id')->unique();
    // ToDo: Use 'users', 'multiSelectOptions', 'files' when needed
    $linkedFields = FcCustomField::/*with(['users', 'multiSelectOptions', 'files'])
      ->*/select(['id', 'custom_type', 'level'])
      ->whereIn('submenu_id', $linkedSubMenus)
      ->where('level', 1)
      ->get();
    $customData = FcCustomData::whereIn('field_id', $linkedFields->pluck('id')->unique())->get();
    $linkedFields = $linkedFields->keyBy('id');
    $array = [];
    foreach ($customData as $data) {
      $array[$data->record_id] = [
        'field_id' => $data->field_id,
        'field_custom_type' => $linkedFields[$data->field_id]->custom_type,
        'field_level' => $linkedFields[$data->field_id]->level,
        'field' => $linkedFields[$data->field_id]->toArray(),
        'data' => $data->toArray(),
      ];
    }
    /*foreach ($linkedFields->pluck('multiSelectOptions')->filter()->flatten(1) as $field) {
      $array[$field->record_id][] = $field->users->toArray();
    }*/
    return $array;
  }

  private function getLinkedRecordText($customData) {
    $data = $customData['data'];
    /*$users = $customData['field']['users'] ?? [];
    $multiSelectOptions = $customData['field']['multiSelectOptions'] ?? [];
    $files = $customData['field']['files'] ?? [];
    $recordId = $data['record_id'];*/
    if (empty($data)) {
      return 'n/a';
    }

    $textValue = array_search('text', config('constant.customField.custom_type'));
    $userValue = array_search('user', config('constant.customField.custom_type'));
    $singleSelectValue = array_search('singleSelect', config('constant.customField.custom_type'));
    $multiSelectValue = array_search('multiSelect', config('constant.customField.custom_type'));
    $dateValue = array_search('date', config('constant.customField.custom_type'));
    $dateNoTzValue = array_search('dateNoTz', config('constant.customField.custom_type'));
    $filesValue = array_search('files', config('constant.customField.custom_type'));
    $numberValue = array_search('number', config('constant.customField.custom_type'));
    $currencyValue = array_search('currency', config('constant.customField.custom_type'));

    switch ($customData['field_custom_type']) {
      case $textValue:
        return $data['text_value'];

      case $numberValue:
        return $data['double_value'];

      case $currencyValue:
        return $data['decimal_value'];

      case $userValue:
        return '';
        $users = $users->where('record_id', $recordId)->get();
        return $users->count() ? $users->map(function ($user) {
          return [
            'userId' => $user->user_id,
          ];
        })->values() : [];

      case $singleSelectValue:
        return $data['single_select_value'];

      case $multiSelectValue:
        return '';
        $options = $multiSelectOptions->select(['record_id', 'multi_select_value'])
          ->where('record_id', $recordId)->get();
        return $options->count() ? $options->map(function ($option) {
          return [
            'optionId' => $option->multi_select_value,
          ];
        })->values() : [];

      case $dateValue:
        return [
          'utcDateOnly' => $data['date_value'] ?? null,
          'utcTimeOnly' => $data['time_value'] ? Carbon::parse($data->time_value)->format('H:i') : null,
        ];

      case $dateNoTzValue:
        return [
          'localDateOnly' => $data['date_value'] ?? null,
          'localTimeOnly' => $data['time_value'] ? Carbon::parse($data->time_value)->format('H:i') : null,
        ];

      case $filesValue:
        return '';
        return $files->where('record_id', $recordId)->map(function ($file) {
          return [
            'id' => $file->id ?? "",
            'originalFileName' => $file->original_file_name ?? "",
            'url' => getImage($file->storage_file_name, config('constant.s3.menuFiles')) ?? "",
          ];
        })->values();
    }
    return 'n/a';
  }

  /**
   * Get Predefined Fields data.
   * @param $loads
   * @param $predefinedFields
   * @return array
   * @throws Exception
   */
  private function getPredefinedData($loads, $predefinedFields): array {
    $predefinedFieldsData = [];
    foreach ($loads as $load) {
      $data = [];
      foreach ($predefinedFields as $predefinedField) {
        switch ($predefinedField) {
          case 1:
            $value = $load->load_unique_id ?? null;
            break;

          case 2:
            $value = $load->refrence_id ?? '';
            break;

          case 3:
            $values = [];
            $loadShippers = $load->loadShippers;
            foreach ($loadShippers as $loadShipper) {
              $values[] = $this->formatDateAndTimeHelper($loadShipper->shipping_date, $loadShipper->shipping_time, $loadShipper->shipping_end_time);
            }
            // To display new line or tab, use "\n" or "\t" (double quotes).
            $value = !empty($values) ? implode(';  ', $values) : '';
            break;

          case 4:
            $values = [];
            $loadReceivers = $load->loadReceivers;
            foreach ($loadReceivers as $loadReceiver) {
              $values[] = $this->formatDateAndTimeHelper($loadReceiver->delivery_date, $loadReceiver->delivery_time, $loadReceiver->delivery_end_time);
            }
            $value = !empty($values) ? implode(';  ', $values) : '';
            break;

          case 5:
            $value = $load->customer->company_name ?? '';
            break;

          case 6:
            $values = [];
            $loadShippers = $load->loadShippers;
            foreach ($loadShippers as $loadShipper) {
              $values[] = !empty($loadShipper) ? $loadShipper->city . ', ' . $loadShipper->state : '';
            }
            $value = !empty($values) ? implode(';  ', $values) : '';
            break;

          case 7:
            $values = [];
            $loadReceivers = $load->loadReceivers;
            foreach ($loadReceivers as $loadReceiver) {
              $values[] = !empty($loadReceiver) ? $loadReceiver->city . ', ' . $loadReceiver->state : '';
            }
            $value = !empty($values) ? implode(';  ', $values) : '';
            break;

          case 8:
            $driversName = $load->loadDrivers->pluck('driverAsUsers')->flatten()->pluck('driverDetail')->pluck('name')->toArray();
            $value = implode(', ', $driversName) ?? '';
            break;

          case 9:
            $value = $load->dispatcher_notes ?? '';
            break;

          case 10:
            $value = !empty($load->status) ? config('constant.status.loadStatusFrontEnd')[$load->status] : '';
            break;

          case 11:
            $loadPodImages = $load->adminLoadImages;
            if (!$loadPodImages->isEmpty()) {
              $value = $loadPodImages->map(function ($item) {
                return [
                  "loadId" => $item->load_id,
                  "loadImageId" => $item->id
                ];
              });
            } else {
              $value = [];
            }
            break;

          case 12:
            $value = $this->calculateDriverPayment($load);
            break;

          case 13:
            $value = !empty($load->total_amount) ? $load->total_amount : 0;
            break;

          case 14:
            $dispatcherDetail = $load->dispatcher->dispacherDetail ?? '';
            $value = !empty($dispatcherDetail) ? $dispatcherDetail->first_name . ' ' . $dispatcherDetail->last_name : '';
            break;

          default:
            $value = null;
            break;
        }
        $data[] = [
          'filedId' => $predefinedField,
          'value' => $value
        ];
      }
      $predefinedFieldsData = array_merge($predefinedFieldsData, $data);
    }
    return $predefinedFieldsData;
  }

  /**
   * Calculate sum of total drivers payment of a trip.
   * @param $load
   * @return float|int|null
   * @throws Exception
   */
  private function calculateDriverPayment($load) {
    $driverPayAmount = 0;

    $loadDrivers = $load->loadDrivers
      ->pluck('driverAsUsers')
      ->flatten()
      ->pluck('driverDetail') ?? [];

    if (empty($loadDrivers)) {
      return $driverPayAmount;
    }

    $loadDrivers = $loadDrivers->unique('user_id');

    if (!$loadDrivers->isEmpty()) {
      foreach ($loadDrivers as $loadDriver) {
        $driverPayAmount += (new DriverPayHelper())->calculateLoadDriverPaymentFromPercentage($load, $loadDriver);
      }
    }
    return $driverPayAmount;
  }

  /**
   * Format Data and Time.
   * @param $date
   * @param $startTime
   * @param $endTime
   * @return string
   */
  private function formatDateAndTimeHelper($date, $startTime, $endTime): string {
    if (!empty($startTime) || !empty($endTime)) {
      $date = $date . ' ';
    }
    if (!empty($startTime)) {
      $date = $date . ' ' . Carbon::parse($startTime)->format('H:i');
    }
    if (!empty($endTime)) {
      $date = $date . "-" . Carbon::parse($endTime)->format('H:i');
    }
    return !empty($date) ? $date : '';
  }

  /**
   * Create Load Query using sheet column based.
   * @param $predefinedColumns
   * @param $startDate
   * @param $endDate
   * @return array|Builder[]|Collection
   * @throws Exception
   */
  private function getLoadDetails($predefinedColumns, $startDate, $endDate) {
    $loadSelectArrays = ['id'];
    $loadShipperSelectArray = [];
    $loadReceiverSelectArray = [];
    $loadCustomerArray = [];
    $loadDriverPayArray = [];
    $loadDriversArray = [];
    $driverAsUsers = [];
    $driverDetails = [];
    $loadChargeArray = [];
    $loadDispatcherArray = [];

    $loadNumber = false;
    $loadReference = false;
    $loadShipDate = false;
    $loadDeliveryDate = false;
    $loadCustomer = false;
    $loadPickUpLocation = false;
    $loadDeliveryLocation = false;
    $loadDrivers = false;
    $loadDispatcherNotes = false;
    $loadStatus = false;
    $loadPod = false;
    $loadDriverPay = false;
    $loadTotalAmount = false;
    $loadDispatcher = false;

    if (!$predefinedColumns->isEmpty()) {
      foreach ($predefinedColumns as $column) {
        switch ($column) {
          case 1:
            $loadNumber = true;
            break;
          case 2:
            $loadReference = true;
            break;
          case 3:
            $loadShipDate = true;
            break;
          case 4:
            $loadDeliveryDate = true;
            break;
          case 5:
            $loadCustomer = true;
            break;
          case 6:
            $loadPickUpLocation = true;
            break;
          case 7:
            $loadDeliveryLocation = true;
            break;
          case 8:
            $loadDrivers = true;
            break;
          case 9:
            $loadDispatcherNotes = true;
            break;
          case 10:
            $loadStatus = true;
            break;
          case 11:
            $loadPod = true;
            break;
          case 12:
            $loadDriverPay = true;
            break;
          case 13:
            $loadTotalAmount = true;
            break;
          case 14:
            $loadDispatcher = true;
            break;
          default:
            break;
        }
      }

      if ($loadNumber) {
        $loadSelectArrays[] = 'load_unique_id';
      }

      if ($loadReference) {
        $loadSelectArrays[] = 'refrence_id';
      }

      if ($loadShipDate) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'shipping_date', 'shipping_time', 'shipping_end_time']);
      }

      if ($loadDeliveryDate) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'delivery_date', 'delivery_time', 'delivery_end_time']);
      }

      if ($loadCustomer) {
        $loadSelectArrays[] = 'customer_id';
        $loadCustomerArray = ['id', 'company_name'];
      }

      if ($loadPickUpLocation) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'city', 'state']);
      }

      if ($loadDeliveryLocation) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'city', 'state']);
      }

      if ($loadDrivers) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id']);
        $driverAsUsers = array_merge($driverAsUsers, ['id']);
        $driverDetails = array_merge($driverDetails, ['id', 'user_id', 'name']);
      }

      if ($loadDispatcherNotes) {
        $loadSelectArrays[] = 'dispatcher_notes';
      }

      if ($loadStatus) {
        $loadSelectArrays[] = 'status';
      }

      if ($loadDriverPay) {
        $loadSelectArrays[] = 'total_amount';
        $loadSelectArrays[] = 'total_miles';
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id']);
        $driverAsUsers = array_merge($driverAsUsers, ['id']);
        $driverDetails = array_merge($driverDetails, ['id', 'user_id', 'name', 'driver_pay_types', 'load_pay_percentage_of', 'load_pay_percentage']);
        $loadChargeArray = ['id', 'load_id', 'hauling_fees', 'fuel_surcharge_type', 'fuel_surcharge'];
      }

      if ($loadTotalAmount) {
        $loadSelectArrays[] = 'total_amount';
      }

      if ($loadDispatcher) {
        $loadSelectArrays[] = 'dispatcher_id';
        $loadDispatcherArray = [
          'dispatcher:id',
          'dispatcher.dispacherDetail:id,user_id,first_name,last_name'
        ];
      }

      $loadDriversArray = array_unique($loadDriversArray);
      $driverAsUsers = array_unique($driverAsUsers);
      $driverDetails = array_unique($driverDetails);
      $loadChargeArray = array_unique($loadChargeArray);
      $loadSelectArrays = array_unique($loadSelectArrays);
      $loadReceiverSelectArray = array_unique($loadReceiverSelectArray);
      $loadShipperSelectArray = array_unique($loadShipperSelectArray);
    }

    $currentUser = User::select('id', 'role', 'admin_company_detail_id', 'tag_access')
      ->where('id', Auth::id())
      ->with(['tags:id'])
      ->first();
    $currentUserRole = $currentUser->role;
    $onlyAccessToTagLoads = $currentUser->tag_access == 1 ? true : false;
    $currentUserTags = [];
    if (!empty($currentUser->tags)) {
      $currentUserTags = Arr::pluck($currentUser->tags->toArray(), 'id');
    }
    return Load::query()->select($loadSelectArrays)
      ->where('admin_company_detail_id', '=', getAuthAdminCompanyId())
      ->when(!empty($loadShipperSelectArray), function ($innerQuery) use ($loadShipperSelectArray) {
        return $innerQuery->with(['loadShippers:' . implode(',', $loadShipperSelectArray)]);
      })
      ->when(!empty($loadReceiverSelectArray), function ($innerQuery) use ($loadReceiverSelectArray) {
        return $innerQuery->with(['loadReceivers:' . implode(',', $loadReceiverSelectArray)]);
      })
      ->when(!empty($loadCustomerArray), function ($innerQuery) use ($loadCustomerArray) {
        return $innerQuery->with(['customer:' . implode(',', $loadCustomerArray)]);
      })
      ->when(!empty($loadDriversArray), function ($innerQuery) use ($loadDriversArray) {
        return $innerQuery->with(['loadDrivers:' . implode(',', $loadDriversArray)]);
      })
      ->when(!empty($driverAsUsers), function ($innerQuery) use ($driverAsUsers) {
        return $innerQuery->with(['loadDrivers.driverAsUsers:' . implode(',', $driverAsUsers)]);
      })
      ->when(!empty($driverDetails), function ($innerQuery) use ($driverDetails) {
        return $innerQuery->with(['loadDrivers.driverAsUsers.driverDetail:' . implode(',', $driverDetails)]);
      })
      ->when(!empty($loadChargeArray), function ($innerQuery) use ($loadChargeArray) {
        return $innerQuery->with(['loadCharge:' . implode(',', $loadChargeArray)]);
      })
      ->when($loadPod, function ($innerQuery) {
        return $innerQuery->with(['adminLoadImages' => function ($query) {
          return $query->select('id', 'load_id')
            ->whereIn('purpose', [config('constant.load.image.purpose.load_pod'), config('constant.load.image.purpose.load_pod_admin')]);
        }]);
      })
      ->when(!empty($loadDriverPayArray), function ($innerQuery) use ($loadDriverPayArray) {
        return $innerQuery->with($loadDriverPayArray);
      })
      ->when(!empty($loadDispatcherArray), function ($innerQuery) use ($loadDispatcherArray) {
        return $innerQuery->with($loadDispatcherArray);
      })
      ->when($startDate && $endDate, function ($query) use ($startDate, $endDate) {
        $query->where(function ($query2) use ($startDate, $endDate) {
          $query2->whereHas('loadShippers', function ($innerQuery) use ($startDate, $endDate) {
            $innerQuery->whereBetween(
              'shipping_date',
              [$startDate, $endDate]
            );
          })->orWhereHas('loadReceivers', function ($innerQuery) use ($startDate, $endDate) {
            $innerQuery->whereBetween(
              'delivery_date',
              [$startDate, $endDate]
            );
          });
        });
      })
      ->when(
        !empty($currentUserTags),
        function ($query) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
          $query->where(function ($query2) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
            if ($currentUserRole == config('constant.roles.tag_operator')) {
              $query2->whereIn('loads.tag_id', $currentUserTags);
            } else {
              $query2->whereIn('loads.tag_id', $currentUserTags);
              if ($onlyAccessToTagLoads == false) {
                $query2->orWhereNull('loads.tag_id');
              }
            }
          });
        }
      )->get();
  }

  /**
   * Get Meta Details.
   * @param $customFiledId
   * @param $predefinedData
   * @param $predefinedType
   * @return array[]
   */
  private function getViewMetaData($customFiledId, $predefinedData, $predefinedType): array {
    if (!empty($predefinedData)) {
      /* predefined field */
      $key = 'predefinedField';
      $value = '';
      if ($predefinedType == array_search('load', config('constant.fcSubmenus.predefinedData'))) {
        $value = config('constant.predefinedColumns.load')[$predefinedData] ?? '';
      }
    } else {
      $key = 'customFieldId';
      $value = $customFiledId;
    }
    return ['firstLevel' => [$key => $value]];
  }

  /**
   * Get Show Fields.
   * @param $view
   * @param $predefinedType
   * @return mixed
   */
  private function getShowFields($view, $predefinedType) {
    return $view->showFields->map(function ($showField) use ($predefinedType, $view) {
      $response = $view->ui_type == array_search('table', config('constant.fcViews.type')) ||
        $view->ui_type == array_search('list', config('constant.fcViews.type')) ?
        ['order' => $showField->order, 'width' => $showField->width] :
        ['order' => $showField->order];

      if (!empty($showField->predefined_field)) {
        /* pre-defined field */
        $predefinedField = '';
        if ($predefinedType == array_search('load', config('constant.fcSubmenus.predefinedData'))) {
          $predefinedField = config('constant.predefinedColumns.load')[$showField->predefined_field] ?? '';
        }
        $response = array_merge($response, ['predefinedField' => $predefinedField]);
      } else {
        $response = array_merge($response, ['customFieldId' => $showField->field_id]);
      }
      return $response;
    });
  }

  /**
   * @param $view
   * @param $fields
   * @param $uiType
   * @param  bool  $isLoadBased
   * @return bool
   * @throws Exception
   */
  private function createShowFields($view, $fields, $uiType, bool $isLoadBased = false) {
    if (!$fields) {
      return false;
    }

    if ($isLoadBased) {
      return $this->createShowFieldsForLoad($view, $uiType);
    }

    if (
      $uiType == array_search('list', config('constant.fcViews.type')) ||
      $uiType == array_search('board', config('constant.fcViews.type')) ||
      $uiType == array_search('table', config('constant.fcViews.type'))
    ) {
      $columns = $fields->sortBy('id')->map(function ($field, $key) {
        return [
          'order' => $key + 1,
          'customFieldId' => $field->id,
        ];
      })->toArray();
      return (new FcViewShowFieldsService)->createOrUpdateFields($view, $columns);
    } elseif ($uiType == array_search('gantt', config('constant.fcViews.type'))) {
      $columns[] = [
        'order' => 1,
        'customFieldId' => $fields->min('id'),
      ];

      if ($dateField = $fields->where('custom_type', array_search('date', config('constant.customField.custom_type')))->first()) {
        $view->update([
          'record_dates_for_ui->startDate->customFieldId' => $dateField->id
        ]);
      } elseif ($dateField = $fields->where('custom_type', array_search('dateNoTz', config('constant.customField.custom_type')))->first()) {
        $view->update([
          'record_dates_for_ui->startDate->customFieldId' => $dateField->id
        ]);
      }

      return (new FcViewShowFieldsService)->createOrUpdateFields($view, $columns);
    }

    return false;
  }


  /**
   * @param $view
   * @param $uiType
   * @return mixed
   * @throws Exception
   */
  private function createShowFieldsForLoad($view, $uiType) {
    $columns = [];
    if ($uiType == array_search('board', config('constant.fcViews.type'))) {
      $order = 1;
      foreach (config('constant.predefinedColumns.board') as $key => $column) {
        $columns[] = [
          'order' => $order,
          'predefinedFieldId' => $key,
        ];
        $order++;
      }
    }

    if ($uiType == array_search('list', config('constant.fcViews.type'))) {
      $order = 1;
      foreach (config('constant.predefinedColumns.list') as $key => $column) {
        $columns[] = [
          'order' => $order,
          'predefinedFieldId' => $key,
        ];
        $order++;
      }
    }

    if ($uiType == array_search('table', config('constant.fcViews.type'))) {
      $order = 1;
      foreach (config('constant.predefinedColumns.table') as $key => $column) {
        $columns[] = [
          'order' => $order,
          'predefinedFieldId' => $key,
        ];
        $order++;
      }
    }

    if ($uiType == array_search('gantt', config('constant.fcViews.type'))) {
      $order = 1;
      foreach (config('constant.predefinedColumns.gantt') as $key => $column) {
        $columns[] = [
          'order' => $order,
          'predefinedFieldId' => $key,
        ];
        $order++;
      }

      $view->update([
        'record_dates_for_ui->startDate->predefinedField' => array_search('loadShipDate', config('constant.predefinedColumns.ganttRecordDatesForUi')),
        'record_dates_for_ui->endDate->predefinedField' => array_search('loadDeliveryDate', config('constant.predefinedColumns.ganttRecordDatesForUi')),
      ]);
    }

    return (new FcViewShowFieldsService)->createOrUpdateFields($view, $columns);
  }
}
