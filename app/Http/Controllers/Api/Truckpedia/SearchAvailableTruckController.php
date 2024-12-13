<?php

namespace App\Http\Controllers\Api\Truckpedia;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Truckpedia\SearchAvailableTruckByLoadRequest;
use App\Http\Requests\Api\Truckpedia\SearchAvailableTruckRequest;
use App\Http\Requests\Api\Truckpedia\SearchFromCarrierWebsiteRequest;
use App\Http\Resources\Truckpedia\SearchAvailableTruckCollection;
use App\Services\Truckpedia\SearchAvailableTruckService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class SearchAvailableTruckController extends Controller {

  protected SearchAvailableTruckService $searchAvailableTruckService;

  public function __construct(SearchAvailableTruckService $searchAvailableTruckService) {
    $this->searchAvailableTruckService = $searchAvailableTruckService;
  }

  /**
   * Search all available trucks
   * @param SearchAvailableTruckRequest $request
   * @return JsonResponse|mixed
   */
  public function searchAvailableTrucks(SearchAvailableTruckRequest $request) {
    try {
      return $this->respondWithData($this->searchAvailableTruckService->searchAvailableTrucks($request));
      // return $this->respondWithData(new SearchAvailableTruckCollection($this->searchAvailableTruckService->searchAvailableTrucks($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function searchFromCarrierWebsite(SearchFromCarrierWebsiteRequest $request) {
    try {
      return $this->respondWithData($this->searchAvailableTruckService->searchAvailableTrucks($request));
      // return $this->respondWithData(new SearchAvailableTruckCollection($this->searchAvailableTruckService->searchAvailableTrucks($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Search all available truck by load Id
   * @param SearchAvailableTruckRequest $request
   * @return JsonResponse|mixed
   */
  public function searchByLoad(SearchAvailableTruckByLoadRequest $request) {
    try {
      return $this->respondWithData(
        $this->searchAvailableTruckService->searchAvailableTrucksByLoad($request)
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
