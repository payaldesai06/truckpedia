<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcCustomRecord;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcCustomDataTypeFile;

class FcCustomFileService {

  /**
   * Check Auth User has permission to access details.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  private function checkPermissionsAndReturnRecord($request) {
    $submenu = FcSubmenu::select(['id', 'menu_id'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })->where('id', $request->submenuId)
      ->firstOrFail();

    if($request->filled('recordId') && !is_null($request->recordId)) {
      $record = $submenu->fcCustomRecords()->where('id', $request->recordId)->first();
      if (optional($record)->submenu_id !== $submenu->id) {
        throw new Exception(config('response.fc.record.not_found'));
      }
    }

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));
    $editorAccess = array_search('editor', config('constant.fcSharedPermissions.accessLevel'));
    $hasPermission = (new FcSharedPermissionService)->checkForAccessToSubmenu($submenu, [$adminAccess, $editorAccess]);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }
    return true;
  }

  /**
   * Get Pre-Signed URLs.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getPresignedUrl($request): array {
    $this->checkPermissionsAndReturnRecord($request);
    $response = [];

    $prefix = $request->filled('recordId') ? 'mf-' . getAuthAdminCompanyId() . '-' . $request->submenuId . '-' . $request->recordId . '-' . $request->fieldId :
      'mf-' . getAuthAdminCompanyId() . '-' . $request->submenuId . '-' . $request->fieldId;
    $files = $request->input('files');
    foreach ($files as $key => $file) {
      $index = count($files) > 1 ? $key + 1 : null;
      $response[] = $this->generateFileNameAndPresignedUrl($prefix, $file['extension'], $index);
    }
    return $response;
  }

  /**
   * Generate Unique File name and pre-signed url.
   * @param $prefix
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($prefix, $extension, $index): array {
    $fileName = generateUniqueFileName($prefix, $extension, $index);
    return [
      'storageFileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.menuFiles'))
    ];
  }

  /**
   * Store all files details.
   * @param $request
   * @return true
   * @throws Exception
   */
  public function store($request): bool {
    $record = $this->checkPermissionsAndReturnRecord($request);
    return DB::transaction(function () use ($request, $record) {
      $record->update([
        'last_modified_by' => auth()->id(),
      ]);
      $data = [];
      $carbonNow = Carbon::now();
      foreach ($request->input('files') as $file) {
        $data[] = [
          'field_id' => $request->fieldId,
          'record_id' => $request->recordId,
          'original_file_name' => $file['originalFileName'] ?? null,
          'storage_file_name' => $file['storageFileName'] ?? null,
          'created_at' => $carbonNow,
          'updated_at' => $carbonNow,
        ];
      }
      return FcCustomDataTypeFile::insert($data);
    });
  }

  /**
   * Delete Data Type File.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function delete($request) {
    $record = $this->checkPermissionsAndReturnRecord($request);
    return DB::transaction(function () use ($request, $record) {
      $record->update([
        'last_modified_by' => auth()->id(),
      ]);
      $fileIds = array_column($request->input('files'), 'id');
      return FcCustomDataTypeFile::whereIn('id', $fileIds)
        ->where('field_id', $request->fieldId)
        ->delete();
    });
  }
}
