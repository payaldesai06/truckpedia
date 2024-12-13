<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\SetupProfileRequest;
use App\Http\Requests\Api\Auth\UpdateCompanyProfileRequest;
use App\Http\Requests\Api\Auth\GetCompanyFileUploadUrlRequest;
use App\Http\Resources\Admin\AdminCompanyDetailResource;
use App\Http\Resources\User\UserResource;
use App\Models\AdminCompanyDetail;
use App\Services\AdminCompanyProfileService;
use App\Services\CustomerService;
use App\Services\StripeService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminCompanyProfileSetupController extends Controller {
  protected $adminCompanyProfileService;
  private $stripeService;
  private $customerService;
  private $stripePublicKey;

  public function __construct(
    AdminCompanyProfileService $adminCompanyProfileService,
    StripeService $stripeService,
    CustomerService $customerService
  ) {
    $this->adminCompanyProfileService = $adminCompanyProfileService;
    $this->stripeService = $stripeService;
    $this->customerService = $customerService;
  }

  public function setupProfile(SetupProfileRequest $request) {
    try {
      // TODO: put transaction here instead of in setupCompanyProfile().
      if (!empty($request['referralCode'])) {
        $company = AdminCompanyDetail::where('referral_code', $request['referralCode'])
          ->select('id')->first();
        if (empty($company)) {
          throw new Exception(config('response.companySetup.invalidReferralCode'));
        }
        $request->merge(['referredByCompanyId' => $company->id]);
      }
      $this->setupCompanyProfile();
      return $this->respondWithMessageAndPayload(
        new AdminCompanyDetailResource(Auth::user()->refresh()),
        'Congratulations! Your company profile setup successfully.'
      );
    } catch (\Throwable $e) {
      // return $this->respondBadRequest(config('response.error'));
      return $this->respondBadRequest($e->getMessage());
    }
  }

  public function setupCompanyProfile(): void {
    DB::transaction(function () {
      $customerService = $this->stripeService->createCustomer();
      $this->adminCompanyProfileService->setupProfile($customerService->id);
      try {
        $slackMessage = 'New user company registered: ' . request('business_name') . ', ';
        if (request()->has('business_email') && !empty(request('business_email'))) {
          $slackMessage .= request('business_email') . ', ';
        }
        if (request()->has('email') && !empty(request('email'))) {
          $slackMessage .= request('email') . ', ';
        }
        if (request()->has('phone_number') && !empty(request('phone_number'))) {
          $slackMessage .= request('phone_number') . ', ';
        }
        $type = 'carrier';
        if (request()->has('companyType') && !empty(request('companyType'))) {
          $type = request('companyType');
        }
        $slackMessage .= $type . ' ';
        $name = '';
        if (request()->has('first_name') && !empty(request('first_name'))) {
          $name .= request('first_name') . ' ';
        }
        if (request()->has('last_name') && !empty(request('last_name'))) {
          $name .= request('last_name');
        }
        if (!empty($name)) {
          $slackMessage .= 'by ' . $name;
        }
        Log::channel('slack_confidential-prod-data')->critical($slackMessage);
      } catch (Exception $e) {
        Log::error($e);
      }
      // Insert default Customers
      if (app()->environment('production')) {
        if (
          request()->has('companyType')
          && array_search(request('companyType'), config('constant.companyType')) > 1
        ) {
          return;
        }
        // Only create customers for carriers.
        $this->customerService->insertDefaultCustomersForEachAdminCompany();
      }
    });
  }

  public function update(UpdateCompanyProfileRequest $request) {
    try {
      DB::transaction(function () use ($request) {
        $adminCompanyDetail = AdminCompanyDetail::find(Auth::user()->admin_company_detail_id);
        $this->stripeService->updateCustomer($request, $adminCompanyDetail);
        $this->adminCompanyProfileService->updateCompanyProfile($adminCompanyDetail);
      });

      return $this->respondUpdatedWithPayload(new UserResource(Auth::user()));
    } catch (\Throwable $e) {
      return $this->respondBadRequest($e->getMessage());
    }
  }

  /**
   * Generate pre-signed company url
   * @param GetCompanyFileUploadUrlRequest $request
   * @return array
   * @return JsonResponse
   */
  public function getCompanyFileUploadUrl(GetCompanyFileUploadUrlRequest $request): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload(
        $this->adminCompanyProfileService->getCompanyFileUploadUrl($request)
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
