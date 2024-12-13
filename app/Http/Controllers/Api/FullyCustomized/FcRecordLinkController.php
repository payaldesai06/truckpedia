<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FullyCustomized\GetRecordLinkTargetsRequest;
use App\Services\FullyCustomized\FcRecordLinkService;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

class FcRecordLinkController extends Controller {

  protected $fcRecordLinkService;

  public function __construct(FcRecordLinkService $fcRecordLinkService) {
    $this->fcRecordLinkService = $fcRecordLinkService;
  }

  public function getPossibleTargetRecords(GetRecordLinkTargetsRequest $request) {
    try {
      $data = $this->fcRecordLinkService->getPossibleTargetRecords($request);
      // TODO(Sharan): following code executes the query, and is slow.
      // error_log('controller' . json_encode(Carbon::now()));
      $ret = $this->respondWithData($data);
      // error_log('controller' . json_encode(Carbon::now()));
      return $ret;
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
