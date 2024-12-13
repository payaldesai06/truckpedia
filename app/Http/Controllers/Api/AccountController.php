<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\AccountService;
use Exception;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\Account\CreateOrUpdateAccountRequest;
use Illuminate\Support\Facades\Log;

class AccountController extends Controller {
  protected $accountService;

  public function __construct(AccountService $accountService) {
    $this->accountService = $accountService;
  }

  /**
   * Get Current Company Account List
   * @return JsonResponse
   */
  public function index(): JsonResponse {
    try {
      return $this->respondWithData($this->accountService->getCompanyAccounts());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Created account
   * @param CreateOrUpdateAccountRequest $request
   * @return JsonResponse|mixed
   */
  public function create(CreateOrUpdateAccountRequest $request) {
    try {
      $isCreated = $this->accountService->create($request);
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
   * Update account
   * @param CreateOrUpdateAccountRequest $request
   * @param int $id
   * @return JsonResponse|mixed
   */
  public function edit(CreateOrUpdateAccountRequest $request, $id) {
    try {
      $isUpdated = $this->accountService->edit($request, $id);
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
   * Pull Account and Sync
   * @return JsonResponse
   */
  public function pullQboAccounts(): JsonResponse {
    try {
      $this->accountService->pullQboAccounts();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Push Account and Sync
   * @return JsonResponse
   */
  public function pushQboAccounts(): JsonResponse {
    try {
      $this->accountService->pushQboAccounts();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
