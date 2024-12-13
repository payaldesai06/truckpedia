<?php

namespace App\Http\Controllers\Api\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExtendTrialRequest;
use App\Http\Requests\Api\SuperAdmin\UpdateMonthlyFeesRequest;
use App\Http\Requests\Api\SuperAdmin\UpdateCompanyTrialRequest;
use App\Http\Resources\Admin\AdminCollection;
use App\Http\Resources\Company\CompanyDetailCollection;
use App\Http\Resources\Company\CompanyDetailWithCounterResource;
use App\Http\Resources\Load\LoadCollection;
use App\Http\Resources\Trailer\TrailerCollection;
use App\Http\Resources\Truck\TruckCollection;
use App\Services\SuperAdmin\AdminCompanyDetailService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\SuperAdmin\UpdateCompanyFeatureAccessRequest;
use App\Http\Requests\Api\SuperAdmin\CreateCompanyAdminUserRequest;

class AdminCompanyDetailController extends Controller {
  private $adminCompanyDetailService;

  public function __construct(AdminCompanyDetailService $adminCompanyDetailService) {
    $this->adminCompanyDetailService = $adminCompanyDetailService;
  }

  public function datatable(): JsonResponse {
    $adminCompanyDetails = $this->adminCompanyDetailService->getAdminCompanyDetailDatatable();

    return $this->respondWithData(new CompanyDetailCollection($adminCompanyDetails));
  }

  public function show(Request $request): JsonResponse {
    $adminCompanyDetail = $this->adminCompanyDetailService->getAdminCompanyDetailShow($request);
    return $this->respondWithData(new CompanyDetailWithCounterResource($adminCompanyDetail));
  }

  public function extendTrial(ExtendTrialRequest $extendTrialRequest) {
    $extendTrialDetail = $this->adminCompanyDetailService->extendTrial();
    if (!$extendTrialDetail['status']) {
      return $this->respondWithError($extendTrialDetail['message']);
    }
    return $this->respondOk();
  }

  public function companyAdmins(): JsonResponse {
    $adminDetails = $this->adminCompanyDetailService->getCompanyAdmins();
    return $this->respondWithData(new AdminCollection($adminDetails));
  }

  public function companyDispatchers(): JsonResponse {
    $adminCompanyDispatcher = $this->adminCompanyDetailService->getCompanyDispatchers();
    return $this->respondWithData(new AdminCollection($adminCompanyDispatcher));
  }

  public function companyDrivers(): JsonResponse {
    $adminCompanyDispatcher = $this->adminCompanyDetailService->getCompanyDrivers();
    return $this->respondWithData(new AdminCollection($adminCompanyDispatcher));
  }

  public function companyLoads() {
    $adminCompanyLoads = $this->adminCompanyDetailService->getCompanyLoads();
    return $this->respondWithData(new LoadCollection($adminCompanyLoads));
  }

  public function companyTrucks(): JsonResponse {
    $adminCompanyLoads = $this->adminCompanyDetailService->getCompanyTrucks();
    return $this->respondWithData(new TruckCollection($adminCompanyLoads));
  }

  public function companyTrailers(): JsonResponse {
    $adminCompanyLoads = $this->adminCompanyDetailService->getCompanyTrailers();
    return $this->respondWithData(new TrailerCollection($adminCompanyLoads));
  }

  public function updateMonthlyFees(UpdateMonthlyFeesRequest $request) {
    try {
      $this->adminCompanyDetailService->updateMonthlyFees($request);
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update company Trial.
   * @param UpdateCompanyTrialRequest $request
   * @return JsonResponse|mixed
   */
  public function updateCompanyTrial(UpdateCompanyTrialRequest $request) {
    try {
      $this->adminCompanyDetailService->updateCompanyTrial($request);
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update company feature accesses.
   * @param UpdateCompanyFeatureAccessRequest $request
   * @return JsonResponse|mixed
   */
  public function updateCompanyFeatureAccess(UpdateCompanyFeatureAccessRequest $request) {
    try {
      $this->adminCompanyDetailService->updateCompanyFeatureAccess($request);
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create company admin user.
   * @param CreateCompanyAdminUserRequest $request
   * @return JsonResponse|mixed
   */
  public function createCompanyAdminUser(CreateCompanyAdminUserRequest $request) {
    try {
      $this->adminCompanyDetailService->createCompanyAdminUser($request);
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
