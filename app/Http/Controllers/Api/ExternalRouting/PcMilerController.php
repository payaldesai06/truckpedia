<?php

namespace App\Http\Controllers\Api\ExternalRouting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExternalRouting\PcMilerRequest;
use App\Http\Resources\ExternalRouting\PcMilerResource;
use App\Services\ExternalRouting\PcMilerService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class PcMilerController extends Controller {

  protected $pcMilerService;

  public function __construct(PcMilerService $pcMilerService) {
    $this->pcMilerService = $pcMilerService;
  }

  /**
   * Get Pc Miler Api Key.
   * @return JsonResponse|mixed
   */
  public function getApiKey() {
    try {
      return $this->respondWithData(new PcMilerResource($this->pcMilerService->getApiKey()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update or create PC Miler api key.
   * @param PcMilerRequest $request
   * @return JsonResponse|mixed
   */
  public function updateOrCreateApiKey(PcMilerRequest $request) {
    try {
      $this->pcMilerService->updateOrCreateApiKey($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
