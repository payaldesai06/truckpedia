<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UserFileUpload\NewEmailRateConUploadUrlRequest;
use App\Services\UserUploadFilesService;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class UserUploadFilesController extends Controller {

  protected $userUploadFilesController;

  public function __construct(UserUploadFilesService $userUploadFilesService) {
    $this->userUploadFilesController = $userUploadFilesService;
  }

  /**
   * Generate File Name and Pre-Signed Url to upload PDF files.
   * @param NewEmailRateConUploadUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function getNewEmailRateConUploadUrl(NewEmailRateConUploadUrlRequest $request) {
    try {
      return $this->respondWithData($this->userUploadFilesController->getNewEmailRateConUploadUrl($request));
    } catch (Exception $exception) {
      Log::channel('slack')->critical($exception->getMessage());
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
