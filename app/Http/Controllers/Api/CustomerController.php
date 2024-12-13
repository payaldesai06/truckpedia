<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Customer\CreateCustomerRequest;
use App\Http\Requests\Api\Customer\UpdateCustomerRequest;
use App\Http\Resources\Customer\CustomerCollection;
use App\Http\Resources\Customer\CustomerResource;
use App\Services\CustomerService;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Customer\CreateCustomerV2FolderRequest;
use App\Http\Requests\Api\Customer\UpdateCustomerV2FolderRequest;
use App\Http\Requests\Api\Customer\CreateCustomerV2FileRequest;
use App\Http\Requests\Api\Customer\DeleteCustomerV2FileRequest;
use App\Http\Requests\Api\Customer\GetCustomerV2FileUrlRequest;
use App\Http\Requests\Api\Customer\ChangeCustomerV2FilesFolderRequest;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Http\JsonResponse;

class CustomerController extends Controller {
  protected $customerService;

  public function __construct(CustomerService $customerService) {
    $this->customerService = $customerService;
  }

  public function index() {
    $customers = $this->customerService->getAllCustomer();
    return $this->respondWithData(new CustomerCollection($customers));
  }

  public function getCustomer() {
    try {
      $customer = $this->customerService->getCustomer();
      if (!$customer) {
        return $this->respondNotFound(config('response.customer.not_found'));
      }

      return $this->respondWithData(new CustomerResource($customer));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function datatable() {
    try {
      $customers = $this->customerService->customerDatatable();
      if (request('toDownload') ?? null) {
        return $this->respondWithMessageAndPayload(
          $this->customerService->customerListExport($customers)
        );
      }
      return $this->respondWithData(new CustomerCollection($customers));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create Customer
   * @param CreateCustomerRequest $request
   * @return JsonResponse|mixed
   */
  public function store(CreateCustomerRequest $request) {
    try {
      $customer = $this->customerService->createCustomer();
      return $this->respondWithMessageAndPayload(new CustomerResource($customer), config('response.customer.create'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Customer
   * @param UpdateCustomerRequest $request
   * @return JsonResponse|mixed
   */
  public function update(UpdateCustomerRequest $request) {
    try {
      $customer = $this->customerService->updateCustomer();
      return $this->respondWithMessageAndPayload(new CustomerResource($customer), config('response.customer.update'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function destroy() {
    $this->customerService->delete();
    return $this->respondDeleted(config('response.customer.delete'));
  }

  /**
   * Create folder.
   * @param CreateCustomerV2FolderRequest $request
   * @return JsonResponse|mixed
   */
  public function createCustomerV2Folder(CreateCustomerV2FolderRequest $request) {
    try {
      $isCreated = $this->customerService->createCustomerV2Folder($request);
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
   * Get Customer Folder by Auth Company Id.
   * @return JsonResponse|mixed
   */
  public function getCustomerV2Folders() {
    try {
      return $this->respondWithMessageAndPayload($this->customerService->getCustomerV2Folders());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update folder.
   * @param UpdateCustomerV2FolderRequest $request
   * @return JsonResponse|mixed
   */
  public function updateCustomerV2Folder(UpdateCustomerV2FolderRequest $request) {
    try {
      $isUpdated = $this->customerService->updateCustomerV2Folder($request);
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
   * Get customer files.
   * @return JsonResponse|mixed
   */
  public function getCustomerV2Files() {
    try {
      return $this->respondWithMessageAndPayload($this->customerService->getCustomerV2Files());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create customer file.
   * @param CreateCustomerV2FileRequest $request
   * @return JsonResponse|mixed
   */
  public function createCustomerV2Files(CreateCustomerV2FileRequest $request) {
    try {
      $isCreated = $this->customerService->createCustomerV2Files($request);
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
   * Delete customer.
   * @param DeleteCustomerV2FileRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteCustomerV2File(DeleteCustomerV2FileRequest $request) {
    try {
      $isDeleted = $this->customerService->deleteCustomerV2File($request);
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
   * Get customer file urls.
   * @param GetCustomerV2FileUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function getCustomerV2FileUploadUrl(GetCustomerV2FileUrlRequest $request) {
    try {
      return $this->respondWithMessageAndPayload($this->customerService->getCustomerV2FileUploadUrl());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Change customer files folder.
   * @param ChangeCustomerV2FilesFolderRequest $request
   * @return JsonResponse|mixed
   */
  public function changeCustomerV2FilesFolder(ChangeCustomerV2FilesFolderRequest $request) {
    try {
      $isUpdated = $this->customerService->changeCustomerV2FilesFolder($request);
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
