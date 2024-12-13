<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SavedAddresses\CreateSavedAddressesRequest;
use App\Http\Resources\SavedAddresses\SavedAddressesCollection;
use App\Http\Resources\SavedAddresses\SavedAddressesResource;
use App\Services\SavedAddressesService;
use Exception;
use Illuminate\Http\JsonResponse;

class SavedAddressesController extends Controller {
  protected $savedAddressesService;

  public function __construct(SavedAddressesService $savedAddressesService) {
    $this->savedAddressesService = $savedAddressesService;
  }

  /**
   * Get All Saved Addresses
   * @return JsonResponse
   * @throws Exception
   */
  public function datatable(): JsonResponse {
    return $this->respondWithData(new SavedAddressesCollection($this->savedAddressesService->datatable()));
  }

  /**
   * Create saved address of a company.
   * @param CreateSavedAddressesRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function create(CreateSavedAddressesRequest $request): JsonResponse {
    return $this->respondWithData(new SavedAddressesResource($this->savedAddressesService->create($request)));
  }

  /**
   * Update saved address of a company.
   * @param CreateSavedAddressesRequest $request
   * @return JsonResponse
   * @throws Exception
   */
  public function update(CreateSavedAddressesRequest $request): JsonResponse {
    $this->savedAddressesService->update($request);
    return $this->respondOk();
  }

  /**
   * Search saved addresses by name of a company.
   * @return JsonResponse
   * @throws Exception
   */
  public function search(): JsonResponse {
    return $this->respondWithData(SavedAddressesResource::collection($this->savedAddressesService->searchByName()));
  }

  /**
   * Delete address by address id.
   * @return JsonResponse
   * @throws Exception
   */
  public function delete(): JsonResponse {
    $this->savedAddressesService->delete();
    return $this->respondOk();
  }
}
