<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadMatching\UpdateTruckDeadheadDestination;
use App\Http\Requests\Api\LoadMatching\UpdateTruckDeadheadOrigin;
use App\Http\Requests\Api\LoadMatching\UpdateTruckMaxWeight;
use App\Http\Requests\Api\LoadMatching\UpdateTruckReloadDate;
use App\Http\Requests\Api\LoadMatching\UpdateTruckReloadDestination;
use App\Http\Requests\Api\LoadMatching\UpdateTruckTargetPrice;
use App\Http\Resources\Locate\LocateTrucksResource;
use App\Models\AdminCompanyDetail;
use App\Services\LoadsMatchingService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoadsMatchingController extends Controller {

  private $loadsMatchingService;

  public function __construct(LoadsMatchingService $loadsMatchingService) {
    $this->loadsMatchingService = $loadsMatchingService;
  }

  public function locateTrucks() {
    $adminCompanyDetail = $this->getCompany(Auth::user()->admin_company_detail_id);
    return $this->respondWithData(new LocateTrucksResource($adminCompanyDetail));
  }

  public function truckSchedules() {
    $result = $this->loadsMatchingService
      ->getTruckSchedules(Auth::user()->admin_company_detail_id);
    return $this->respondWithData($result);
  }

  private function getCompany($id) {
    return AdminCompanyDetail::find($id);
  }

  public function updateTruckReloadDestination(UpdateTruckReloadDestination $request) {
    $this->loadsMatchingService->updateTruckReloadDestination($request);
    return $this->respondOK();
  }

  public function updateTruckDeadheadOrigin(UpdateTruckDeadheadOrigin $request) {
    $this->loadsMatchingService->updateTruckDeadheadOrigin($request);
    return $this->respondOK();
  }

  public function updateTruckDeadheadDestination(UpdateTruckDeadheadDestination $request) {
    $this->loadsMatchingService->updateTruckDeadheadDestination($request);
    return $this->respondOK();
  }

  public function updateTruckTargetPrice(UpdateTruckTargetPrice $request) {
    $this->loadsMatchingService->updateTruckTargetPrice($request);
    return $this->respondOK();
  }

  /**
   * Update truck max weight by truck id.
   * @param UpdateTruckMaxWeight $request
   * @return JsonResponse
   */
  public function updateTruckMaxWeight(UpdateTruckMaxWeight $request): JsonResponse {
    $this->loadsMatchingService->updateTruckMaxWeight($request);
    return $this->respondOk();
  }

  /**
   * Generate the public url for loads-matching
   * @return string
   */
  public function createPublicUrl(): JsonResponse {
    $url = $this->loadsMatchingService->createPublicUrl();
    return $this->respondWithData(['url' => $url]);
  }

  /**
   * Locate all trucks publicly using encrypted company_id
   * @return JsonResponse
   * @throws Exception
   */
  public function publicLocateTrucks(): JsonResponse {
    try {
      $companyId = decrypt(request('company_id'));
      $adminCompanyDetail = $this->getCompany($companyId) ?? null;
      if (empty($adminCompanyDetail)) {
        return $this->respondWithError(config('response.error'));
      }
      return $this->respondWithData(new LocateTrucksResource($adminCompanyDetail));
    } catch (Exception $exception) {
      throw new Exception($exception);
    }
  }

  /**
   * Get public truck schedules details
   * @return JsonResponse
   * @throws Exception
   */
  public function publicTruckSchedules(): JsonResponse {
    try {
      $companyId = decrypt(request('company_id'));
      $result = $this->loadsMatchingService->getTruckSchedules($companyId);
      return $this->respondWithData($result);
    } catch (Exception $exception) {
      throw new Exception($exception);
    }
  }

  /**
   * Update to reload date of a truck.
   * @param UpdateTruckReloadDate $request
   * @return JsonResponse
   */
  public function updateTruckReloadDate(UpdateTruckReloadDate $request): JsonResponse {
    $this->loadsMatchingService->updateTruckReloadDate($request);
    return $this->respondOk();
  }
}
