<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcSubmenu;

class FcRollupService {

  public function getPossibleTargets($request) {
    $submenu = FcSubmenu::select(['id', 'menu_id'])->findOrFail($request->submenuId);
    $numberField = array_search('number', config('constant.customField.custom_type'));
    $currencyField = array_search('currency', config('constant.customField.custom_type'));

    $targetSubmenus = FcSubmenu::select(['id', 'name'])
      ->where('menu_id', $submenu->menu_id)
      ->where('id', '!=', $request->submenuId)
      ->whereHas('fcCustomFields', function ($query) use ($submenu) {
        $query->where('record_link_submenu_id', $submenu->id);
      })
      ->with(['fcCustomFields' => function($query) use($numberField, $currencyField) {
        $query->select(['id', 'name', 'custom_type', 'submenu_id'])->whereIn('custom_type', [$numberField, $currencyField]);
      }])->get();

    // ToDo: Use a resource
    return $targetSubmenus->map(function ($submenu) {
      return [
        'submenuId' => $submenu->id,
        'submenuName' => $submenu->name,
        'fields' => $submenu->fcCustomFields->map(function ($field) {
          return [
            'customFieldId' => $field->id,
            'customFieldName' => $field->name,
          ];
        })
      ];
    });
  }
}
