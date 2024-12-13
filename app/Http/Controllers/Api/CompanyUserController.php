<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CompanyUser\CreateCompanyUserRequest;
use App\Http\Requests\Api\CompanyUser\UpdateCompanyUserRequest;
use App\Http\Resources\CompanyUser\UserCollection;
use App\Http\Resources\CompanyUser\UserResource;
use App\Services\CompanyUserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Log;

class CompanyUserController extends Controller {
  protected $companyUserService;

  public function __construct(CompanyUserService $companyUserService) {
    $this->companyUserService = $companyUserService;
  }

  public function datatable() {
    $users = $this->companyUserService->datatable();
    return $this->respondWithData(new UserCollection($users));
  }

  public function store(CreateCompanyUserRequest $request) {
    $user = $this->companyUserService->create();
    return $this->respondWithMessageAndPayload(new UserResource($user), config('response.user.create'));
  }

  public function update(UpdateCompanyUserRequest $request) {
    $user = $this->companyUserService->update();
    return $this->respondWithMessageAndPayload(new UserResource($user), config('response.user.update'));
  }

  public function destroy() {
    $this->companyUserService->delete();
    return $this->respondDeleted(config('response.user.delete'));
  }

  public function getCurrentUserTagIds() {
    $result = $this->companyUserService->getCurrentUserTagIds();
    return $this->respondWithData($result);
  }

  /**
   * Get All Active Users.
   * @return JsonResponse|mixed
   */
  public function getAllUsersV2() {
    try {
      return $this->respondWithData($this->companyUserService->getAllUsersV2());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get All Active Drivers.
   * @return JsonResponse|mixed
   */
  public function getAllDriversV2() {
    try {
      return $this->respondWithData($this->companyUserService->getAllDriversV2());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @return JsonResponse|mixed
   */
  public function getAllWebsiteUsersExceptCurrentUserV2() {
    try {
      return $this->respondWithData($this->companyUserService->getAllWebsiteUsersExceptCurrentUserV2());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
