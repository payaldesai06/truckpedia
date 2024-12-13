<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\MaintenanceV2Issue\CreateMaintenanceV2IssueRequest;
use App\Http\Requests\Api\MaintenanceV2Issue\GetIssueAttachmentsUploadUrlsRequest;
use App\Services\MaintenanceV2IssueService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Exception;
use App\Http\Resources\MaintenanceV2Issue\GetMaintenanceV2IssueColllection;
use App\Http\Resources\MaintenanceV2Issue\MaintenanceV2IssueDetailResource;
use App\Http\Requests\Api\MaintenanceV2Issue\DeleteMaintenanceV2IssueRequest;
use App\Http\Requests\Api\MaintenanceV2Issue\UpdateMaintenanceV2IssueRequest;
use App\Http\Requests\Api\MaintenanceV2Issue\GetVehicleMaintenanceIssueRequest;
use App\Http\Resources\MaintenanceV2Issue\GetVehicleMaintenanceIssueCollection;
use App\Http\Requests\Api\MaintenanceV2Issue\ChangeMaintenanceV2IssueStatusRequest;

class MaintenanceV2IssueController extends Controller {
  protected $maintenanceIssueService;

  public function __construct(MaintenanceV2IssueService $maintenanceIssueService) {
    $this->maintenanceIssueService = $maintenanceIssueService;
  }

  /**
   * Create maintenance issue.
   * @param CreateMaintenanceV2IssueRequest $request
   * @return JsonResponse|mixed
   */
  public function createMaintenanceIssue(CreateMaintenanceV2IssueRequest $request) {
    try {
      $isCreated = $this->maintenanceIssueService->createMaintenanceIssue($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Maintenance Issue List.
   * @return JsonResponse|mixed
   */
  public function getMaintenanceIssueList() {
    try {
      $maintenanceIssues = $this->maintenanceIssueService->getMaintenanceIssueList();
      if (request('toDownload') == 1) {
        return $this->respondWithMessageAndPayload(
          $this->maintenanceIssueService->maintenanceIssueListExport($maintenanceIssues)
        );
      }
      return $this->respondWithData(new GetMaintenanceV2IssueColllection($maintenanceIssues));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getIssueAttachmentsUploadUrls(GetIssueAttachmentsUploadUrlsRequest $request) {
    try {
      return $this->respondWithData($this->maintenanceIssueService->getIssueAttachmentsUploadUrls($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get maintenance issue details.
   * @return JsonResponse|mixed
   */
  public function getMaintenanceIssueDetails(): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload(new MaintenanceV2IssueDetailResource($this->maintenanceIssueService->getMaintenanceDetails()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete maintenance issue.
   * @param DeleteMaintenanceV2IssueRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteMaintenanceIssue(DeleteMaintenanceV2IssueRequest $request) {
    try {
      $isDeleted = $this->maintenanceIssueService->deleteMaintenanceIssue($request);
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update maintenance issue.
   * @param UpdateMaintenanceV2IssueRequest $request
   * @return JsonResponse|mixed
   */
  public function updateMaintenanceIssue(UpdateMaintenanceV2IssueRequest $request) {
    try {
      $isUpdated = $this->maintenanceIssueService->updateMaintenanceIssue($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Vehicle Maintenance Issue List.
   * @param GetVehicleMaintenanceIssueRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getVehicleMaintenanceIssueList(GetVehicleMaintenanceIssueRequest $request) {
    try {
      return $this->respondWithData(new GetVehicleMaintenanceIssueCollection($this->maintenanceIssueService->getVehicleMaintenanceIssueList($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function changeMaintenanceIssueStatus(ChangeMaintenanceV2IssueStatusRequest $request) {
    try {
      $isUpdated = $this->maintenanceIssueService->changeMaintenanceIssueStatus($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
