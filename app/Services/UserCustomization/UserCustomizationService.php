<?php

namespace App\Services\UserCustomization;

use App\Models\UserCustomization;
use Exception;

class UserCustomizationService {

  /**
   * Save Or Update UserCustomization
   * @param array $requestCustomization
   * @param string $appliedModule
   * @return integer|boolean|void
   */
  public static function saveOrUpdate($requestCustomization, $appliedModule) {
    $appliedModuleInt = array_search(
      $appliedModule,
      config('constant.userCustomizationModule')
    );
    if (empty($appliedModuleInt)) {
      throw new Exception(config('response.pipeline.invalid_module'));
    }
    $currentCustomization = UserCustomization::where('user_id', auth()->id())
      ->where('applied_module', $appliedModuleInt)
      ->first();

    $filters = !empty($requestCustomization['filters']) ?
      json_decode($requestCustomization['filters'], true) : null;
    unset($requestCustomization['filters']);
    if (!$currentCustomization) {
      return UserCustomization::create(
        [
          'user_id' => auth()->id(),
          'applied_module' => $appliedModuleInt,
          'show' => !empty($requestCustomization) ? $requestCustomization : null,
          'filters' => $filters
        ]
      );
    }

    $customizationDataToBeUpdated = [];
    $latestShow = $currentCustomization->show;
    if ($appliedModule === 'dispatchPipeline') {
      // Whenever users change sth for hideColumns or showLabels, FE just includes
      // this single change in API payload, BE shall save this new change in DB.
      // FE does not need to send all settings in the payload.
      if (request()->has('showLabels') || request()->has('hideColumns')) {
        self::mergeArrays($latestShow, $requestCustomization);
        $customizationDataToBeUpdated['show'] = $latestShow;
      }
    } else if ($appliedModule === 'safetyIncidents') {
      // Whenever users change sth, FE includes the entire new setting for all
      // (not just newly selected, it’s ALL currently selected) columns to
      // display and their corresponding order in one payload. So new payload
      // always replaces old payload, not in addition to old payload. Here, the
      // order of columns to display on the FE depends on the order of columns
      // in the showColumns array.
      if (request()->has('showColumns')) {
        $customizationDataToBeUpdated['show'] = !empty($requestCustomization) ? $requestCustomization : null;
      }
    } else if ($appliedModule === 'dispatchCalendar') {
      // Whenever users change the show.filters or timelineFor, FE just includes
      // this single change in API payload, BE shall save this new change in DB.
      // FE does not need to send all settings in the payload. 
      if (!empty($requestCustomization['show']) && $requestCustomization !== $latestShow) {
        $customizationDataToBeUpdated['show'] = $requestCustomization['show'];
      }
    } else if ($appliedModule === 'dispatchList') {
      // Whenever users change sth for hideColumns, FE just includes
      // this single change in API payload, BE shall save this new change in DB.
      // FE does not need to send all settings in the payload.
      if (request()->has('hideColumns')) {
        self::mergeArrays($latestShow, $requestCustomization);
        $customizationDataToBeUpdated['show'] = $latestShow;
      }
    }

    if (request()->has('filters')) {
      $requestAndCurrentFiltersAreEqual = false;
      if (!empty($filters) && !empty($currentCustomization->filters)) {
        $requestAndCurrentFiltersAreEqual = arraysAreEqual($filters, $currentCustomization->filters);
      } else if ($filters === null && $currentCustomization->filters === null) {
        $requestAndCurrentFiltersAreEqual = true;
      }

      if (!$requestAndCurrentFiltersAreEqual) {
        $customizationDataToBeUpdated['filters'] = $filters;
      }
    }

    if (!empty($customizationDataToBeUpdated)) {
      return UserCustomization::where('id', $currentCustomization->id)
        ->update($customizationDataToBeUpdated);
    }
  }

  /**
   * Merge Two Array & Get latest one
   * @param array $a
   * @param array $b
   * @return array
   */
  public static function mergeArrays(&$a, $b) {
    foreach ($b as $key => $value) {
      if (is_array($value) && isset($a[$key]) && is_array($a[$key])) {
        self::mergeArrays($a[$key], $value);
      } else {
        $a[$key] = $value;
      }
    }
  }
}
