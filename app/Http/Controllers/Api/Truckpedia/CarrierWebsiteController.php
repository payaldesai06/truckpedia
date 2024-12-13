<?php

namespace App\Http\Controllers\Api\Truckpedia;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Truckpedia\CarrierCustomDomainRequest;
use App\Http\Requests\Api\Truckpedia\GetCarrierWebsiteRequest;
use App\Http\Requests\Api\Truckpedia\GetCarrierWebsiteUploadUrlsRequest;
use App\Http\Requests\Api\Truckpedia\IsValidAddressForCertificateRequest;
use App\Http\Requests\Api\Truckpedia\UpdateCarrierWebsiteContentRequest;
use App\Http\Requests\Api\Truckpedia\UpdateWebsiteUrlRequest;
use App\Services\Truckpedia\CarrierWebsiteService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class CarrierWebsiteController extends Controller {

  protected $carrierWebsiteService;

  public function __construct(CarrierWebsiteService $carrierWebsiteService) {
    $this->carrierWebsiteService = $carrierWebsiteService;
  }

  /**
   * Check if we shall generate HTTPS certificate for a URL.
   * @param IsValidAddressForCertificateRequest $request
   * @return JsonResponse|mixed
   */
  public function isValidAddressForCertificate(IsValidAddressForCertificateRequest $request) {
    try {
      if ($this->carrierWebsiteService->isValidAddressForCertificate($request)) {
        return $this->respondOk();
      }
      return $this->respondBadRequest();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Check a new business url exists or not.
   * @param UpdateWebsiteUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function checkNewBusinessUrl(UpdateWebsiteUrlRequest $request) {
    try {
      $this->carrierWebsiteService->checkNewBusinessUrl($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Carrier Website.
   * @return JsonResponse|mixed
   */
  public function getCarrierWebsite(GetCarrierWebsiteRequest $request) {
    try {
      return $this->respondWithData($this->carrierWebsiteService->getCarrierWebsite($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update or Create Website Component.
   * @param UpdateCarrierWebsiteContentRequest $request
   * @return JsonResponse|mixed
   */
  public function updateCarrierWebsiteComponent(UpdateCarrierWebsiteContentRequest $request) {
    try {
      $isCreated = $this->carrierWebsiteService->updateCarrierWebsiteComponent($request);
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
   * Get Carrier Website Upload URLs.
   * @param GetCarrierWebsiteUploadUrlsRequest $request
   * @return JsonResponse|mixed
   */
  public function getCarrierWebsiteImageUploadUrls(GetCarrierWebsiteUploadUrlsRequest $request) {
    try {
      return $this->respondWithData($this->carrierWebsiteService->getCarrierWebsiteImageUploadUrls($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Registered Custom Domain Check.
   * @return JsonResponse|mixed
   */
  public function isRegisteredCustomDomain(CarrierCustomDomainRequest $request) {
    try {
      $this->carrierWebsiteService->isRegisteredCustomDomain($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Check for new Custom Domain for everyone.
   * @return JsonResponse|mixed
   */
  public function checkNewCustomDomain(CarrierCustomDomainRequest $request) {
    try {
      $this->carrierWebsiteService->checkNewCustomDomain($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
