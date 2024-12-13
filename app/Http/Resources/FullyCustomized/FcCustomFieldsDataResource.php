<?php

namespace App\Http\Resources\FullyCustomized;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class FcCustomFieldsDataResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $textValue = array_search('text', config('constant.customField.custom_type'));
    $userValue = array_search('user', config('constant.customField.custom_type'));
    $singleSelectValue = array_search('singleSelect', config('constant.customField.custom_type'));
    $dateValue = array_search('date', config('constant.customField.custom_type'));
    $dateNoTzValue = array_search('dateNoTz', config('constant.customField.custom_type'));
    $filesValue = array_search('files', config('constant.customField.custom_type'));
    $numberValue = array_search('number', config('constant.customField.custom_type'));
    $currencyValue = array_search('currency', config('constant.customField.custom_type'));

    return [
      'fieldId' => $this->id ?? '',
      'textValue' => $this->custom_type == $textValue ? $this->text_value : null,
      'numberValue' => $this->custom_type == $numberValue ? $this->double_value : null,
      'currencyValue' => $this->custom_type == $currencyValue ? $this->decimal_value : null,
      'userValue' => $this->custom_type == $userValue ? $this->users->map(function ($user) {
        return [
          'userId' => $user->user_id,
        ];
      })->values() : null,
      'singleSelectValue' => $this->custom_type == $singleSelectValue ? $this->single_select_value : null,
      'dateValue' => $this->custom_type == $dateValue ? [
        'utcDateOnly' => $this->date_value,
        'utcTimeOnly' => $this->time_value ? Carbon::parse($this->time_value)->format('H:i') : null,
      ] : null,
      'dateNoTzValue' => $this->custom_type == $dateNoTzValue ? [
        'utcDateOnly' => $this->date_value,
        'utcTimeOnly' => $this->time_value ? Carbon::parse($this->time_value)->format('H:i') : null,
      ] : null,
      'filesValue' => $this->custom_type == $filesValue ? $this->files->map(function ($file) {
        return [
          'fileId' => $file->file_id,
          'fileName' => $file->file_name,
          'fileUrl' => $file->file_url,
        ];
      })->values() : null,
    ];
  }
}
