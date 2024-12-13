<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Referral\CreateReferralRequest;
use App\Services\ReferralService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class ReferralController extends Controller {
  protected $referralService;

  public function __construct(ReferralService $referralService) {
    $this->referralService = $referralService;
  }

  /**
   * Get Referral code or generate a new referral code if not exists.
   * @return mixed|void
   */
  public function getReferralLink() {
    try {
      return $this->respondWithData($this->referralService->getReferralLink());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Submit a referral.
   * @param CreateReferralRequest $request
   * @return JsonResponse|mixed
   */
  public function submitReferral(CreateReferralRequest $request) {
    try {
      $this->referralService->submitReferral($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Earnings.
   * @return JsonResponse|mixed
   */
  public function getEarnings() {
    try {
      return $this->respondWithData($this->referralService->getEarnings());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
