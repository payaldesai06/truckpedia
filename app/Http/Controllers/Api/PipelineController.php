<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Load\PipelineList\PipelineListLoadCollection;
use App\Services\PipelineService;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\Load\Pipeline\GetPipelineRequest;
use App\Http\Requests\Api\Load\Pipeline\SetCustomizationRequest;
use App\Http\Resources\Load\Pipeline\PipelineLoadCollection;
use App\Services\UserCustomization\UserCustomizationService;
use Exception;
use Illuminate\Support\Facades\Log;

class PipelineController extends Controller {
  private $pipelineService;

  public function __construct(PipelineService $pipelineService) {
    $this->pipelineService = $pipelineService;
  }

  /*
     * DASHBOARD UI
     *
     * display on dashboard respective based on load status
     *
     * UI : LOAD STATUS
     * Open : open
     * Dispatched : assign
     * In Transit : in_transit
     * Delivered : delivered
     * Payment Status :  invoice_created, invoice_sent, invoice_paid
     *
     */
  // According to api.php, this index() is only used once for Dashboard Pipeline.
  public function index(): JsonResponse {
    $pipeline = $this->pipelineService->getPipeline();
    return $this->respondWithData(new PipelineCollection($pipeline));
  }

  /**
   * Get Load PipeLine List
   * @return JsonResponse
   */
  public function loadsEagerLoading(): JsonResponse {
    $pipeline = $this->pipelineService->getLoadsEagerLoading();
    return $this->respondWithData(new PipelineListLoadCollection($pipeline));
  }

  /**
   * Get v2 Load PipeLine List
   * @param GetListPipelineRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function getLoadPipeline(GetPipelineRequest $request): JsonResponse {
    try {
      return $this->respondWithData(new PipelineLoadCollection(
        $this->pipelineService->getLoadPipeline()
      ));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * User Customization API
   *
   * @param SetCustomizationRequest $request
   * @return JsonResponse
   */
  public function setCustomization(SetCustomizationRequest $request) {
    try {
      UserCustomizationService::saveOrUpdate($request->all(), "dispatchPipeline");
      return $this->respondOK();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
