<?php

namespace App\Services\FullyCustomized;

use Illuminate\Http\Request;
use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcCustomField;
use App\Models\FullyCustomized\FcCustomRecord;
use App\Http\Resources\FullyCustomized\FcCustomRecordResource;
use App\Http\Resources\FullyCustomized\FcCustomFieldResource;
use Illuminate\Support\Carbon;

class FcRecordLinkService {

  public function getPossibleTargetRecords(Request $request) {
    // Original BE API code implemented the wrong payload. This version is correct.
    $currentField = FcCustomField::findOrFail($request->fieldId);
    $submenu = FcSubmenu::findOrFail($currentField->record_link_submenu_id);

    $recordCustomFields = $submenu->fcCustomFields()->whereNotNull('level')->get() ?? [];
    $primaryField = $recordCustomFields->where('level', 1)->first() ?? null;
    // $customFieldsData = $submenu->fcCustomRecords ?? []; // ->take(10)

    // TODO(Sharan): loading all data is slow, so I had to turn on search and return 
    // at most 25 results.
    $customFieldsData = FcCustomRecord::where('submenu_id', $submenu->id)
      ->when(
        !empty($request->searchKeyWords) && !empty($primaryField),
        function ($q) use ($primaryField, $request) {
          $q->whereHas('data', function ($q2) use ($primaryField, $request) {
            $q2->where('field_id', $primaryField->id)
              ->where('text_value', 'LIKE', '%' . $request->searchKeyWords . '%');
          });
        }
      )->take(25)->get() ?? [];

    $retRecordCustomFields = FcCustomFieldResource::collection($recordCustomFields);
    $retRecordData = FcCustomRecordResource::withFields($customFieldsData, $recordCustomFields, []);
    return [
      'recordCustomFields' => $retRecordCustomFields,
      'recordData' => $retRecordData,
    ];
  }
}
