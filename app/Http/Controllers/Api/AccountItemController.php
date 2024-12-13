<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\AccountItemService;
use Exception;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\Account\CreateOrUpdateAccountItemRequest;
use Illuminate\Support\Facades\Log;

class AccountItemController extends Controller {
  protected $accountItemService;

  public function __construct(AccountItemService $accountItemService) {
    $this->accountItemService = $accountItemService;
  }

  /**
   * Get the list of items for the current company.
   * @return JsonResponse
   */
  public function index(): JsonResponse {
    try {
      return $this->respondWithData($this->accountItemService->getCompanyItems());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create a new account item.
   *
   * @param CreateOrUpdateAccountItemRequest $request
   * @return JsonResponse
   */
  public function create(CreateOrUpdateAccountItemRequest $request): JsonResponse {
    try {
      $isCreated = $this->accountItemService->createItem($request);
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
   * Update an existing account item.
   * @param CreateOrUpdateAccountItemRequest $request
   * @param int $id
   * @return JsonResponse
   */
  public function edit(CreateOrUpdateAccountItemRequest $request, $id): JsonResponse {
    try {
      $isUpdated = $this->accountItemService->editItem($request, $id);
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
   * Pull account items from QBO and synchronize.
   *
   * @return JsonResponse
   */
  public function pullQboAccountItems(): JsonResponse {
    try {
      $this->accountItemService->pullQboAccountItems();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
