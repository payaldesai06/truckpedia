<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FcCustomField extends Model {
  use SoftDeletes;

  protected $guarded = [];
  protected $table = 'fc_custom_fields';
  protected $casts = [
    'settings' => 'array',
  ];

  public function fcSubmenu(): BelongsTo {
    return $this->belongsTo(FcSubmenu::class, 'submenu_id', 'id');
  }

  public function selectOptions() {
    return $this->hasMany(FcCustomFieldsSelectOption::class, 'field_id');
  }

  public function users() {
    return $this->hasMany(FcCustomDataTypeUser::class, 'field_id');
  }

  public function files() {
    return $this->hasMany(FcCustomDataTypeFile::class, 'field_id');
  }

  public function multiSelectOptions() {
    return $this->hasMany(FcCustomDataTypeMultiSelect::class, 'field_id');
  }

  public function recordLinks() {
    return $this->hasMany(FcCustomDataRecordLink::class, 'field_id');
  }

  public function linkedSubmenu() {
    return $this->belongsTo(FcSubmenu::class, 'record_link_submenu_id');
  }

  public function data() {
    return $this->hasMany(FcCustomData::class, 'field_id');
  }

  public function targetSubmenu() {
    return $this->belongsTo(FcSubmenu::class, 'rollup_target_submenu_id');
  }

  public function targetField() {
    return $this->belongsTo(FcCustomField::class, 'rollup_target_field_id');
  }

  public function calculateFormulae($recordId, $fields = null, $data = null) {
    if ($this->custom_type == array_search('rollup', config('constant.customField.custom_type'))) {
      $targetField = $this->targetField;
      return $this->sumFieldsData($targetField, $recordId, 'rollup', $this->settings, $fields, $data);
    }

    // TODO(Sharan): This is slow.
    if ($this->custom_type == array_search('formula', config('constant.customField.custom_type'))) {
      $formula = $this->settings;
      $operator = $formula['op'];

      $field1 = $fields ? $fields->where('id', $formula['params'][0]['customField'])->first() :
                FcCustomField::select(['id', 'custom_type', 'rollup_target_field_id', 'settings'])->find($formula['params'][0]['customField']);

      $field2 = $fields ? $fields->where('id', $formula['params'][1]['customField'])->first() :
                FcCustomField::select(['id', 'custom_type', 'rollup_target_field_id', 'settings'])->find($formula['params'][1]['customField']);

      // ToDo: This is a temporary hack just in case the $fields do not contain the target field. We can remove it after testing.
      if(!$field1 || !$field2) {
        $field1 = $field1 ?? FcCustomField::select(['id', 'custom_type', 'rollup_target_field_id', 'settings'])->find($formula['params'][0]['customField']);
        $field2 = $field2 ?? FcCustomField::select(['id', 'custom_type', 'rollup_target_field_id', 'settings'])->find($formula['params'][1]['customField']);
      }

      $field1Type = $field1->custom_type == array_search('rollup', config('constant.customField.custom_type')) ? 'rollup' : 'formula';
      $field2Type = $field2->custom_type == array_search('rollup', config('constant.customField.custom_type')) ? 'rollup' : 'formula';

      $field1Settings = $field1Type == 'rollup' ? $field1->settings : null;
      $field2Settings = $field2Type == 'rollup' ? $field2->settings : null;

      switch ($operator) {
        case '+':
          return $this->sumFieldsData($field1, $recordId, $field1Type, $field1Settings, $fields, $data) +
            $this->sumFieldsData($field2, $recordId, $field2Type, $field2Settings, $fields, $data);
        case '-':
          return $this->sumFieldsData($field1, $recordId, $field1Type, $field1Settings, $fields, $data) -
            $this->sumFieldsData($field2, $recordId, $field2Type, $field2Settings, $fields, $data);
        case '*':
          return $this->sumFieldsData($field1, $recordId, $field1Type, $field1Settings, $fields, $data) *
            $this->sumFieldsData($field2, $recordId, $field2Type, $field2Settings, $fields, $data);
        case '/':
          $denominator = $this->sumFieldsData($field2, $recordId, $field2Type, $field2Settings, $fields, $data);
          return $denominator == 0 ? null : $this->sumFieldsData($field1, $recordId, $field1Type, $field1Settings, $fields, $data) / $denominator;
        default:
          return 0;
      }
    }

    return 0;
  }

  private function sumFieldsData($field, $recordId, $type = 'formula', $filter = null, $fields = null, $data = null) {

    switch ($field->custom_type) {
      case array_search('rollup', config('constant.customField.custom_type')):
        return $this->sumFieldsData($field->targetField, $recordId, 'rollup', $field->settings, $fields, $data);
      case array_search('currency', config('constant.customField.custom_type')):
        $summationField = 'decimal_value';
        break;
      case array_search('number', config('constant.customField.custom_type')):
      default:
        $summationField = 'double_value';
        break;
    }

    if($type == 'rollup') {
      $linkedField = $field->fcSubmenu->fcCustomFields->where('custom_type', array_search('recordLink', config('constant.customField.custom_type')))->first();

      if(!$linkedField) {
        return 0;
      }

      $linkedRecords = $linkedField->recordLinks->where('linked_record_id', $recordId)->pluck('record_id');


      $query = $data ? $data->whereIn('record_id', $linkedRecords) : DB::table('fc_custom_data')
        ->select('fc_custom_data.*', 'fc_custom_records.*')
        ->join('fc_custom_records', 'fc_custom_data.record_id', '=', 'fc_custom_records.id')
        ->whereIn('fc_custom_data.record_id', $linkedRecords)
        ->where('fc_custom_records.deleted_at', null);

    } else {
        $query = $data ? $data->where('record_id', $recordId) : DB::table('fc_custom_data')
          ->select('fc_custom_data.*', 'fc_custom_records.*')
          ->join('fc_custom_records', 'fc_custom_data.record_id', '=', 'fc_custom_records.id')
          ->where('fc_custom_data.record_id', $recordId)
          ->where('fc_custom_records.deleted_at', null);
    }

    if (!is_null($filter) || !empty($filter['conditions'])) {
      $condition = $filter['conditions'][0];
      $comparison = $condition['cmp'];
      $value = $condition['value'];
      $fieldId = $condition['customField'];

        if ($data) {
         $recordIds = $data->where('field_id', $fieldId)
           ->where('single_select_value', $value)
           ->pluck('record_id');
        } else {

          $customDataByRecordId = $query->get();
          $customDataGroupedByRecordId = $customDataByRecordId->groupBy('record_id');

          $filteredCustomDataGroupedByRecordId = $customDataGroupedByRecordId->map(function ($item, $key) use ($summationField) {

            $result = [];
            foreach($item as $customData) {

              if (isset($customData->single_select_value)) {
                $result['singleSelectValue'] = $customData->single_select_value;
              }

              if (isset($customData->$summationField)) {
                $result['summationField'] = $customData->$summationField;
              }
            }
            return $result;
          });

          $filteredCustomDataGroupedByRecordId = $filteredCustomDataGroupedByRecordId->filter(function ($item) use ($value) {
            if (isset($item['singleSelectValue'])) {
                return $item['singleSelectValue'] == $value;
            }
          });

          $totalSum = $filteredCustomDataGroupedByRecordId->sum('summationField');
      }


      switch ($comparison) {
        case 'is': ;

          if ($data) {
              return $query->whereIn('record_id', $recordIds)->sum($summationField) ?? 0;
          }

          return $totalSum ?? 0;

        /*return $query->whereIn('record_id', $recordIds)->sum($summationField) ?? 0;*/
        default:
          return 0;
      }
    }

      return $query->where('fc_custom_data.field_id', $field->id)->sum($summationField);
  }
}
