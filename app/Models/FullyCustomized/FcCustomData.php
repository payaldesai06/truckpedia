<?php

namespace App\Models\FullyCustomized;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcCustomData extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function field() {
    return $this->belongsTo(FcCustomField::class, 'field_id');
  }

  public function files() {
    return $this->hasMany(FcCustomDataTypeFile::class, 'record_id', 'record_id');
  }

  public function record() {
    return $this->belongsTo(FcCustomRecord::class, 'record_id');
  }

  public function recordLinks() {
    return $this->hasMany(FcCustomDataRecordLink::class, 'record_id');
  }

  public function getValue($recordId) {
    $textValue = array_search('text', config('constant.customField.custom_type'));
    $userValue = array_search('user', config('constant.customField.custom_type'));
    $singleSelectValue = array_search('singleSelect', config('constant.customField.custom_type'));
    $multiSelectValue = array_search('multiSelect', config('constant.customField.custom_type'));
    $dateValue = array_search('date', config('constant.customField.custom_type'));
    $dateNoTzValue = array_search('dateNoTz', config('constant.customField.custom_type'));
    $filesValue = array_search('files', config('constant.customField.custom_type'));
    $numberValue = array_search('number', config('constant.customField.custom_type'));
    $currencyValue = array_search('currency', config('constant.customField.custom_type'));
    $field = $this->field;


    switch ($field->custom_type) {
      case $textValue:
        return $this->text_value;

      case $numberValue:
        return $this->double_value;

      case $currencyValue:
        return $this->decimal_value;

      case $userValue:
        $users = $field->users()->select(['record_id', 'user_id'])
          ->where('record_id', $recordId)->get();
        return $users->count() ? $users->map(function ($user) {
          return [
            'userId' => $user->user_id,
          ];
        })->values() : [];

      case $singleSelectValue:
        return $this->single_select_value;

      case $multiSelectValue:
        $options = $field->multiSelectOptions()->select(['record_id', 'multi_select_value'])
          ->where('record_id', $recordId)->get();
        return $options->count() ? $options->map(function ($option) {
          return [
            'optionId' => $option->multi_select_value,
          ];
        })->values() : [];

      case $dateValue:
        return [
          'utcDateOnly' => $this->date_value ?? null,
          'utcTimeOnly' => optional($this)->time_value ? Carbon::parse($this->time_value)->format('H:i') : null,
        ];

      case $dateNoTzValue:
        return [
          'localDateOnly' => $this->date_value ?? null,
          'localTimeOnly' => optional($this)->time_value ? Carbon::parse($this->time_value)->format('H:i') : null,
        ];

      case $filesValue:
        return $this->files->where('record_id', $recordId)->map(function ($file) {
          return [
            'id' => $file->id ?? "",
            'originalFileName' => $file->original_file_name ?? "",
            'url' => getImage($file->storage_file_name, config('constant.s3.menuFiles')) ?? "",
          ];
        })->values();
    }

    return null;
  }
}
