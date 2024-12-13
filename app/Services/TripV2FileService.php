<?php

namespace App\Services;

use App\Models\TripV2;
use App\Models\TripV2File;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TripV2FileService {

  /**
   * @param $tripId
   * @param $companyId
   * @return mixed
   * @throws Exception
   */
  private function getTripDetail($tripId, $companyId) {
    try {
      return TripV2::select(['id', 'company_id'])->where('id', $tripId)->where('company_id', $companyId)->firstOrFail();
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception(config('response.trip.access_denied'));
    }
  }

  /**
   * Get Pre-Signed URLs.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getPresignedUrl($request): array {
    $companyId = getAuthAdminCompanyId();
    // check if the trip id belongs to the current user’s company
    $this->getTripDetail($request->tripId, $companyId);
    $response = [];
    $prefix = 'pf-' . $companyId . '-' . $request->tripId;
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
      'url' => generatePresignedUrl($fileName, config('constant.s3.tripFiles'))
    ];
  }

  /**
   * Store all files details.
   * @param $request
   * @return true
   * @throws Exception
   */
  public function store($request): bool {
    $companyId = getAuthAdminCompanyId();
    // check if the trip id belongs to the current user’s company
    $trip = $this->getTripDetail($request->tripId, $companyId);
    return DB::transaction(function () use ($request, $trip) {
      $data = [];
      $carbonNow = Carbon::now();
      foreach ($request->input('files') as $file) {
        $data[] = [
          'trip_id' => $trip->id,
          'original_file_name' => $file['originalFileName'] ?? null,
          'storage_file_name' => $file['storageFileName'] ?? null,
          'created_at' => $carbonNow,
          'updated_at' => $carbonNow,
        ];
      }
      return TripV2File::insert($data);
    });
  }

  /**
   * Delete Data Type File.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function delete($request) {
    $companyId = getAuthAdminCompanyId();
    // check if the trip id belongs to the current user’s company
    $trip = $this->getTripDetail($request->tripId, $companyId);
    return DB::transaction(function () use ($request, $trip) {
      $fileIds = array_column($request->input('files'), 'fileId');
      return TripV2File::whereIn('id', $fileIds)
        ->where('trip_id', $trip->id)
        ->delete();
    });
  }
}
