<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use App\Http\Requests\Api\FullyCustomized\GetRollupTargetsRequest;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Services\FullyCustomized\FcRollupService;

class FcRollupController extends Controller {
  protected $fcRollupService;

  public function __construct(FcRollupService $fcRollupService) {
    $this->fcRollupService = $fcRollupService;
  }

  // ToDo: Add request validation
  public function getPossibleTargets(GetRollupTargetsRequest $request) {
    try {
      $data = $this->fcRollupService->getPossibleTargets($request);
      return $this->respondWithData(['targets' => $data]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
