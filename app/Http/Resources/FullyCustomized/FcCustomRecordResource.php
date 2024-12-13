<?php

namespace App\Http\Resources\FullyCustomized;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FcCustomRecordResource extends JsonResource {
  private static $customFields;
  private static $predefinedFieldsData;
  private static $isLoad;
  private static $data;

  /**
   * Transform the resource into an array.
   *
   * @param  Request  $request
   * @return array
   */
  public function toArray($request): array {
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

    return [
      'id' => $this->id ?? '',
      // ToDo: Replace this with FcCustomFieldsDataResource
      'customFieldsData' => self::$customFields->map(function ($field) use (
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
        $formulaValue
      ) {
        $data = $this->data->where('field_id', $field->id)->first(); // Record Data
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
          $array['userValue'] = $field->users ? $field->users->where('record_id', $this->id)->map(function ($user) {
            return [
              'userId' => $user->user_id,
            ];
          })->values() : null;
        }
        if ($field->custom_type == $singleSelectValue) {
          $array['singleSelectValue'] = optional($data)->single_select_value;
        }

        if ($field->custom_type == $multiSelectValue) {
          $array['multiSelectValues'] = $field->multiSelectOptions->where('record_id', $this->id)->map(function ($option) {
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
          $array['filesValue'] = $field->files ? $field->files->where('record_id', $this->id)->map(function ($file) {
            return [
              'id' => $file->id ?? "",
              'originalFileName' => $file->original_file_name ?? "",
              'url' => getImage($file->storage_file_name, config('constant.s3.menuFiles')) ?? "",
            ];
          })->values() : null;
        }

        if($field->custom_type == $recordLinkValue) {
          $array['recordLinkValues'] =  $field->recordLinks ? $field->recordLinks->where('record_id', $this->id)->map(function ($recordLink) {
            return [
              'recordId' => $recordLink->linked_record_id ?? "",
              'recordText' => $recordLink->getLinkedRecordText($recordLink->linked_record_id), // From getRecordTextAttribute() in FcCustomDataRecordLink.php
            ];
          })->values() : [];
        }

        if($field->custom_type == $rollupValue) {
          $array['numberValue'] = $field->calculateFormulae($this->id, self::$customFields, self::$data);
          $array['rollupValue'] =  [
            'type' => 'number',
          ];
        }

        if($field->custom_type == $formulaValue) {
          $array['numberValue'] = $field->calculateFormulae($this->id, self::$customFields, self::$data);
          $array['formulaValue'] =  [
            'type' => 'number',
          ];
        }

        return $array;
      })->values()->all(),
      'predefinedFieldsData' => $this->when(self::$isLoad, self::$predefinedFieldsData)
    ];
  }

  public static function withFields($resource, $customFields, $predefinedFieldsData, $isLoad = false, $data = null) {
    self::$customFields = $customFields;
    self::$predefinedFieldsData = $predefinedFieldsData;
    self::$isLoad = $isLoad;
    self::$data = $data;
    return parent::collection($resource);
  }
}
