<?php

namespace App\Services\FullyCustomized;

use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\FullyCustomized\FcView;
use App\Models\FullyCustomized\FcSubmenu;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;

class FcViewShowFieldsService {

  /**
   * Checks if the submenu exists and if the user has access to it.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createOrUpdateFields($view, $request) {
    $data = $this->prepareData($request);
    // Delete Show Fields that do not exist in the request
    $view->showFields
         ->whereNotIn('field_id', array_column($data, 'field_id'))
         ->each(function ($showField) {
           $showField->delete();
         });

    // Existing Show Fields
    $showFields = $view->showFields
                       ->whereIn('field_id', array_column($data, 'field_id'));

    $predefinedShowFields = $view->showFields
                                  ->whereIn('predefined_field', array_column($data, 'predefined_field'));

    $showFields = $showFields->merge($predefinedShowFields);

    // The order logic is handled in the FE
    /*$checkDuplicateOrders = $showFields->whereIn('order', array_column($data, 'order'))->count();
    if ($checkDuplicateOrders) {
      return $this->changeColumnOrder($showFields, $data, $view);
    }*/

    return DB::transaction(function () use ($view, $showFields, $data) {
      $createFields = [];
      foreach ($data as $field) {
        if($field['field_id'] == null && $field['predefined_field'] == null) {
          $fieldDetail = null;
        } elseif ($field['field_id']) {
          $fieldDetail = $showFields->where('field_id', $field['field_id'])->first();
        } else {
          $fieldDetail = $showFields->where('predefined_field', $field['predefined_field'])->first();
        }

        if (!empty($fieldDetail)) {
          $fieldDetail->update([
            'order' => $field['order'],
            'width' => $field['width'] ?? $fieldDetail->width,
          ]);
        } else {
          $createFields[] = [
            'field_id' => $field['field_id'],
            'predefined_field' => $field['predefined_field'],
            'order' => $field['order'],
            'width' => $field['width'] ?? null,
          ];
        }
      }

      if (!empty($createFields)){
        return $view->showFields()->createMany($createFields);
      }
      return true;
    });
  }

  /**
   * @param $data
   * @return array
   */
  public function prepareData($data) {
    $response = [];
    foreach ($data as $item) {
      $response[] = [
        'order' => $item['order'],
        'field_id' => $item['customFieldId'] ?? null,
        'width' => $item['width'] ?? null,
        'predefined_field' => $item['predefinedFieldId'] ?? null,
      ];
    }
    return $response;
  }
}
