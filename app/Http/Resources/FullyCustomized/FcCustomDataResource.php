<?php

namespace App\Http\Resources\FullyCustomized;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class FcCustomDataResource extends JsonResource {
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

    return [
      'fieldId' => $this->field_id ?? '',
      'textValue' => $this->when($this->field->custom_type == $textValue, $this->text_value),
      'userValue' => $this->when($this->field->custom_type == $userValue, $this->field->users->map(function ($user) {
        return [
          'userId' => $user->id,
        ];
      })),
      'singleSelectValue' => $this->when($this->field->custom_type == $singleSelectValue, $this->single_select_value),
      'dateValue' => $this->when($this->field->custom_type == $dateValue, [
        'utcDateOnly' => $this->date_value,
        'utcTimeOnly' => $this->time_value ? Carbon::parse($this->time_value)->format('H:i') : null,
      ]),
      'dateNoTzValue' => $this->when($this->field->custom_type == $dateNoTzValue, [
        'localDateOnly' => $this->date_value,
        'localTimeOnly' => $this->time_value ? Carbon::parse($this->time_value)->format('H:i') : null,
      ]),
      'filesValue' => $this->when($this->field->custom_type == $filesValue, $this->files->where('field_id', $this->field_id)->map(function ($file) {
        return [
            'id' => $file->id ?? "",
            'originalFileName' => $file->original_file_name ?? "",
            'url' => getImage($file->storage_file_name, config('constant.s3.menuFiles')) ?? "",
        ];
      })),
    ];
  }
}
