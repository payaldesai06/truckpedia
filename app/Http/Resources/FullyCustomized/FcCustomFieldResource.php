<?php

namespace App\Http\Resources\FullyCustomized;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FcCustomFieldResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  Request  $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? '',
      'name' => $this->name ?? '',
      'type' => $this->custom_type ? config('constant.customField.custom_type')[$this->custom_type] : '',
      'level' => $this->level ? config('constant.customField.level')[$this->level] : '',
      'singleSelectOptions' => $this->when($this->custom_type == array_search('singleSelect',
          config('constant.customField.custom_type')), FcCustomFieldSelectOptionResource::collection($this->selectOptions)),
      'multiSelectOptions' => $this->when($this->custom_type == array_search('multiSelect',
          config('constant.customField.custom_type')), FcCustomFieldSelectOptionResource::collection($this->selectOptions)),
      'recordLinkMetaData' => $this->when($this->custom_type == array_search('recordLink',
          config('constant.customField.custom_type')), [
            'submenuId' => $this->record_link_submenu_id ?? '',
            'submenuName' => optional($this->linkedSubmenu)->name ?? '',
      ]),
      'rollUpMetaData' => $this->when($this->custom_type == array_search('rollup',
          config('constant.customField.custom_type')), [
        'targetSubmenuId' => $this->rollup_target_submenu_id ?? '',
        'targetSubmenuName' => optional($this->targetSubmenu)->name ?? '',
        'targetCustomFieldId' => $this->rollup_target_field_id ?? '',
        'targetCustomFieldName' => optional($this->targetField)->name ?? '',
        'filter' => $this->settings,
      ]),
      'formulaMetaData' => $this->when($this->custom_type == array_search('formula',
          config('constant.customField.custom_type')), [
        'formula' => $this->settings,
      ]),
    ];
  }
}
