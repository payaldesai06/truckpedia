<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Load\BatchDeleteLoadRequest;
use App\Http\Requests\Api\Load\CreateLoadRequest;
use App\Http\Requests\Api\Load\ExtractLoadTenderDataFromTxtRequest;
use App\Http\Requests\Api\Load\GetLoadPodUrlRequest;
use App\Http\Requests\Api\Load\GetLoadV2FileUrlRequest;
use App\Http\Requests\Api\Load\Lists\SetCustomizationRequest;
use App\Http\Requests\Api\Load\MergeLoadRequest;
use App\Http\Requests\Api\Load\TrackLoadTrucksRequest;
use App\Http\Requests\Api\Load\UpdateCommissionDetailsLoadRequest;
use App\Http\Requests\Api\Load\UpdateLoadAccessRequest;
use App\Http\Requests\Api\Load\UpdateLoadDispatcherNotesRequest;
use App\Http\Requests\Api\Load\UpdateLoadRequest;
use App\Http\Requests\Api\Load\UpdateLoadStatusRequest;
use App\Http\Requests\Api\Load\UpdateSelectFieldsRequest;
use App\Http\Resources\LoadDetail\LoadDetailCollection;
use App\Http\Resources\Load\LoadCollection;
use App\Http\Resources\Load\LoadResource;
use App\Http\Resources\Load\PipelineList\ListLoadCollection;
use App\Services\LoadService;
use App\Services\UserCustomization\UserCustomizationService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\Load\UpdateThirdPartyCarrierInvoiceStatusRequest;

class loadController extends Controller {
  protected $loadService;

  public function __construct(LoadService $loadService) {
    $this->loadService = $loadService;
  }

  public function datatable() {
    $loads = $this->loadService->getAllLoad();
    // return $loads;
    return $this->respondWithData(new LoadCollection($loads));
  }

  public function datatableEagerLoading() {
    try {
      $loads = $this->loadService->getAllLoadEagerLoading();
      if (request('to_download') == 1) {
        return $this->respondWithMessageAndPayload($this->loadService->dispatchLoadListExport($loads));
      } else {
        return $this->respondWithData(new ListLoadCollection($loads));
      }
    } catch (\Throwable $e) {
      return $this->respondBadRequest($e->getMessage());
    }
  }

  public function store(CreateLoadRequest $request) {
    try {
      $load = $this->loadService->create();
      // return $load;
      return $this->respondWithMessage(config('response.load.create'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get specific load using load id.
   * @return JsonResponse|mixed
   */
  public function show() {
    try {
      return $this->respondWithData(new LoadResource($this->loadService->getload()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function showEagerLoading() {
    $load = $this->loadService->getLoadEagerLoading();
    return $this->respondWithData(new LoadResource($load));
  }

  /**
   * This api will update load
   *
   * for assign and accepted status when driver is changed  then we will delete the old driver
   * for load_started, picked up load we will make old driver status as ready to hand over
   *
   * Mobile sie there is api driver status has to be ready_hand_over
   *
   * @param UpdateLoadRequest $request
   * @return JsonResponse
   */
  public function update(UpdateLoadRequest $request) {
    try {
      $load = $this->loadService->update();
      return $this->respondWithMessage(config('response.load.update'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   *
   * @param UpdateLoadDispatcherNotesRequest $request
   * @return JsonResponse
   */
  public function updateDispatcherNotes(UpdateLoadDispatcherNotesRequest $request): JsonResponse {
    try {
      $isUpdated = $this->loadService->updateDispatcherNotes();
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateCommissionDetails(UpdateCommissionDetailsLoadRequest $updateCommissionDetailsLoadRequest) {
    $this->loadService->updateCommissionDetails();
    return $this->respondOk();
  }

  /**
   * Delete Load
   *
   * admin can delete load before delivered.
   */
  public function destroy() {
    try {
      $this->loadService->delete();

      return $this->respondWithMessage(config('response.load.delete'));
    } catch (\Throwable $throwable) {
      return $this->respondWithError($throwable->getMessage());
    }
  }

  /**
   * Batch Delete Load
   * @param BatchDeleteLoadRequest $request
   */
  public function batchDelete(BatchDeleteLoadRequest $request) {
    try {
      $this->loadService->batchDelete();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Restore deleted load using load id.
   * @return JsonResponse|null
   */
  public function restore(): ?JsonResponse {
    try {
      $isRestored = $this->loadService->restore();
      if (!$isRestored) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function loadUniqeId() {
    $id = $this->loadService->loadUniqeId();
    return $this->respondWithData($id);
  }

  public function updateLoadStatus(UpdateLoadStatusRequest $request) {
    try {
      $this->loadService->updateStatus();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * change the load access
   * @throws Exception
   */
  public function changeLoadAccess(UpdateLoadAccessRequest $request): JsonResponse {
    $load = $this->loadService->changeLoadAccess();
    if ($load['status'] == 'error') {
      return $this->respondWithError($load['data']);
    }
    return $this->respondOk();
  }

  /**
   * Create public url to get the load details
   * @return JsonResponse
   */
  public function createPublicUrl(): JsonResponse {
    $url = $this->loadService->createPublicUrl();
    return $this->respondWithData(['url' => $url]);
  }

  /**
   * @throws Exception
   */
  public function getLoadDetailsByPublicUrl(): JsonResponse {
    $load = $this->loadService->getLoadDetailsByPublicUrl();
    if ($load['status'] == 'error') {
      return $this->respondWithError($load['data']);
    }
    return $this->respondWithData(new LoadDetailCollection($load['data']));
  }

  /**
   * Get Load pod url
   * @param GetLoadPodUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function getLoadPodUrl(GetLoadPodUrlRequest $request) {
    try {
      $podUrl = $this->loadService->getLoadPodUrl($request);
      if (empty($podUrl)) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithData(['url' => $podUrl]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Restore canceled load using load id.
   * @return JsonResponse|null
   */
  public function restoreCanceledLoad() {
    try {
      $isRestoredCanceled = $this->loadService->restoreCanceledLoad();
      if (!$isRestoredCanceled) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Cancel load using load-api.
   */
  public function cancelLoad() {
    try {
      $this->loadService->cancelLoad();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get load file urls.
   * @param GetLoadV2FileUrlRequest $request
   * @return JsonResponse
   */
  public function getLoadFileUploadUrls(GetLoadV2FileUrlRequest $request): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload(
        $this->loadService->getLoadFileUploadUrls()
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /*
   * Convert load tender extracted data from txt to json
   * @return JsonResponse
   */
  public function extractLoadTenderDataFromTxt(
    ExtractLoadTenderDataFromTxtRequest $request
  ) {
    try {
      return $this->respondWithData($this->loadService
        ->extractLoadTenderDataFromTxt($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Customization: Merge Load
   * @param MergeLoadRequest $request
   * @return JsonResponse|mixed
   */
  public function mergeLoad(MergeLoadRequest $request) {
    try {
      $this->loadService->mergeLoad($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Load Activities Tab: tracking truck location
   * @param TrackLoadTrucksRequest $request
   * @return JsonResponse|mixed
   */
  public function trackLoadTrucks(TrackLoadTrucksRequest $request) {
    try {
      return $this->respondWithData($this->loadService->trackLoadTrucks($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update showRateConToDriver for provided loadId
   * @param UpdateSelectFieldsRequest $request
   * @return JsonResponse|mixed
   */
  public function updateSelectFields(UpdateSelectFieldsRequest $request) {
    try {
      $this->loadService->updateSelectFields($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update thirdPartyCarrier invoice status for provided loadId
   * @param UpdateThirdPartyCarrierInvoiceStatusRequest $request
   * @return JsonResponse|mixed
   */
  public function updateThirdPartyCarrierInvoiceStatus(
    UpdateThirdPartyCarrierInvoiceStatusRequest $request
  ) {
    try {
      $this->loadService->updateThirdPartyCarrierInvoiceStatus($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * User Customization API
   * @param SetCustomizationRequest $request
   * @return JsonResponse
   */
  public function setListCustomization(SetCustomizationRequest $request) {
    try {
      UserCustomizationService::saveOrUpdate($request->all(), "dispatchList");
      return $this->respondOK();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
