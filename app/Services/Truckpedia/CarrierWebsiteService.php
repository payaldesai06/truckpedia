<?php

namespace App\Services\Truckpedia;

use App\Models\AdminCompanyDetail;
use App\Models\CarrierWebsite;
use App\Models\CarrierWebsiteComponent;
use App\Models\WebsiteContent;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CarrierWebsiteService {
  /**
   * Check a new business url exists or not.
   * @param $request
   * @return bool
   * @throws Exception
   */
  public function isValidAddressForCertificate($request): bool {
    if (empty($request->domain)) {
      return false;
    }
    $url = strtolower($request->domain);
    if (substr_count($url, '.') > 2) {
      return false;
    }
    if (str_contains($url, '.truckpedia.io')) {
      $businessUrl = str_replace('.truckpedia.io', '', $url);
      if (empty($businessUrl)) {
        return false;
      }
      // For carriers.truckpedia.io
      return $businessUrl == "carriers" || AdminCompanyDetail::where('business_url', $businessUrl)->exists();
    }
    return buildCustomDomainQuery($url)->exists();
  }

  /**
   * Check a new business url exists or not.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function checkNewBusinessUrl($request): void {
    $businessUrl = strtolower($request->url);
    $this->throwExceptionIfInvalidUrl($businessUrl);
    $user = auth('api')->user();
    if (!empty($user)) {
      $currentUrl = AdminCompanyDetail::where('id', $user->admin_company_detail_id)
        ->pluck('business_url')
        ->first();
      if ($currentUrl == $businessUrl) {
        return;
      }
    }
    $this->throwExceptionIfValidBusinessUrlExist($businessUrl);
  }

  /**
   * Get Check for new Custom Domain for everyone.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function checkNewCustomDomain($request): void {
    $customDomain = strtolower($request->customDomain);
    $this->throwExceptionIfInvalidCustomDomain($customDomain);
    if (!empty(Auth::user())) {
      if (buildCustomDomainQuery($customDomain)
        ->where('id', getAuthAdminCompanyId())->exists()
      ) {
        return;
      }
    }
    $this->throwExceptionIfValidCustomDomainExist($customDomain);
  }

  /**
   * throw exception if business url is already exist for other companies.
   * @param $url
   * @return void
   * @throws Exception
   */
  private function throwExceptionIfValidBusinessUrlExist($url) {
    $url = strtolower($url);
    if (AdminCompanyDetail::where('business_url', $url)->exists()) {
      throw new Exception(config('response.url.not_available'));
    }
  }

  private function throwExceptionIfInvalidUrl($url) {
    $url = strtolower($url);
    if (!isValidBusinessUrlFormat($url)) {
      throw new Exception(config('response.url.format_invalid'));
    }
  }

  private function throwExceptionIfValidCustomDomainExist($customDomain) {
    $customDomain = strtolower($customDomain);
    if (buildCustomDomainQuery($customDomain)->exists()) {
      throw new Exception(config('response.customDomain.not_available'));
    }
  }

  private function throwExceptionIfInvalidCustomDomain($customDomain) {
    $customDomain = strtolower($customDomain);
    if (!isValidCustomDomainFormat($customDomain)) {
      throw new Exception(config('response.customDomain.not_available'));
    }
  }

  /**
   * Get carrier website using business url
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getCarrierWebsite($request) {
    $query = null;
    if ($request->has('customDomain')) {
      $customDomain = strtolower($request->customDomain);
      $this->throwExceptionIfInvalidCustomDomain($customDomain);
      $query = buildCustomDomainQuery($customDomain);
    } else {
      $url = strtolower($request->businessUrl);
      $this->throwExceptionIfInvalidUrl($url);
      $query = AdminCompanyDetail::query()->where('business_url', $url);
    }

    $company = $query->select('id', 'business_name')->first();
    if (empty($company)) {
      throw new Exception(config('response.url.invalid'));
    } else {
      $companyId = $company->id;
      $companyName = str_replace("'", "\\'", $company->business_name);
    }
    return WebsiteContent::select('website_content')
      ->where('company_id', $companyId)
      ->addSelect(DB::raw("'$companyName' as companyName"))
      ->addSelect(DB::raw("$companyId as carrierCompanyId"))
      ->latest()
      ->first();
  }

  /**
   * Get Carrier Website Upload URL.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getCarrierWebsiteImageUploadUrls($request): array {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    foreach ($request->filles as $index => $file) {
      $response[] = $this->generateFileNameAndPresignedUrl($companyId, $file['extension'], $index);
    }
    return $response;
  }

  /**
   * Get Carrier Website Upload URL.
   * @param $companyId
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = generateUniqueFileName($companyId, $extension, $index);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.truckpedia.carrierWebsite.userUploadImages'))
    ];
  }

  /**
   * Update or Create Website Component.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateCarrierWebsiteComponent($request) {
    $companyId = getAuthAdminCompanyId();
    $websiteContent = WebsiteContent::where('company_id', $companyId)->first();

    $customDomain = strtolower($request->customDomain) ?? null;
    $businessUrl = strtolower($request->businessUrl) ?? null;

    if (!empty($customDomain)) {
      $this->throwExceptionIfInvalidCustomDomain($customDomain);
      if ($this->isCustomDomainExistsExceptCurrentCompany($customDomain, $companyId)) {
        throw new Exception(config('response.customDomain.not_available'));
      }
    } else {
      $customDomain = null;
    }

    if (!empty($businessUrl)) {
      $this->throwExceptionIfInvalidUrl($businessUrl);
      if ($this->isBusinessUrlExistsExceptCurrentCompany($businessUrl, $companyId)) {
        throw new Exception(config('response.url.not_available'));
      }
    } else {
      $businessUrl = null;
    }

    AdminCompanyDetail::where('id', $companyId)->update([
      'custom_domain' => $customDomain ?? null,
      'business_url' => $businessUrl ?? null
    ]);

    if ($websiteContent) {
      $websiteContent->delete();
    }
    return WebsiteContent::create([
      'company_id' => $companyId, 'website_content' => json_encode(json_decode($request->websiteContent, true)) //only json will save and json will return
    ]);
  }

  /**
   * Get Is Registered Custom Domain.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function isRegisteredCustomDomain($request) {
    $customDomain = strtolower($request->customDomain);
    $this->throwExceptionIfInvalidCustomDomain($customDomain);
    if (!buildCustomDomainQuery($customDomain)->exists()) {
      throw new Exception(config('response.customDomain.not_available'));
    }
  }

  /**
   * Check Custom-Domain is exists for other companies except current authenticated company.
   * @param $customDomain
   * @param $companyId
   * @return mixed
   */
  private function isCustomDomainExistsExceptCurrentCompany($customDomain, $companyId) {
    return buildCustomDomainQuery($customDomain)
      ->where('id', '!=', $companyId)
      ->exists();
  }

  /**
   * Check Business Url is exists for other companies except current authenticated company.
   * @param $businessUrl
   * @param $companyId
   * @return mixed
   */
  private function isBusinessUrlExistsExceptCurrentCompany($businessUrl, $companyId) {
    return AdminCompanyDetail::where('business_url', $businessUrl)
      ->where('id', '!=', $companyId)
      ->exists();
  }
}
