<?php

namespace App\Services;

use Carbon\Carbon;
use Exception;
use Illuminate\Support\Str;

class UserUploadFilesService {

  /**
   * Generate File Name and Pre-Signed Url to upload PDF files.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getNewEmailRateConUploadUrl($request): array {
    $extension = 'pdf';
    if (!empty($request->extension)) {
      if (Str::contains($request->extension, '/') || Str::contains($request->extension, "\\") || Str::contains($request->extension, "\t")) {
        throw new Exception('Invalid Extension: Extension contains ‘\’ or ‘/’.');
      }
      $extension = trim($request->extension);
    }
    $companyId = 36;
    if (strlen($request->key) < 10 || $request->key != config('services.rateConUploadUrlKey')) {
      throw new Exception("Invalid Key: Unauthorized access to generate pre-signed URL.");
    }
    $fileName = 'rc' . '-' . generateUniqueFileName($companyId, $extension);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.load_file'))
    ];
  }
}
