<?php

namespace App\Services\Samsara;

use App\Models\AdminCompanyDetail;
use App\Models\Samsara;
use App\Models\SamsaraTrailerId;
use App\Models\SamsaraTruckId;
use App\Models\Trailer;
use App\Models\Truck;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SamsaraAuthService {
  protected $clientId;
  protected $clientSecret;
  protected $redirectUri;
  protected $baseUrl;
  private $passed_in_admin_company_detail_id;

  public function __construct($admin_company_detail_id = '') {
    if (app()->environment('production')) {
      $this->clientId = config('constant.samsara_key.prod.client_id');
      $this->clientSecret = config('constant.samsara_key.prod.client_secret');
      $this->redirectUri = config('constant.samsara_key.prod.redirect_uri');
    } else {
      $this->clientId = config('constant.samsara_key.dev.client_id');
      $this->clientSecret = config('constant.samsara_key.dev.client_secret');
      $this->redirectUri = config('constant.samsara_key.dev.redirect_uri');
    }

    $this->baseUrl = config('constant.samsara_key.base_uri');
    $this->passed_in_admin_company_detail_id = $admin_company_detail_id;
  }

  /**
   * @return string
   * create the url for redirection on samsara platform for data-access
   */
  public function connectToSamsara() {
    $samsaraAuth = $this->getOrCreateSamsaraAuth();
    $queryParam = [
      'client_id' => $this->clientId,
      'redirect_uri' => $this->redirectUri,
      'state' => $samsaraAuth->csrf_state . $samsaraAuth->company_id,
      'response_type' => 'code',
    ];
    return $this->baseUrl . "oauth2/authorize?" . http_build_query($queryParam);
  }

  /**
   * @throws Exception
   * Revoke the refresh token and delete the existing records from DB.
   */
  public function disconnectSamsara() {
    $samsaraAuth = $this->getSamsaraAuth();

    if (is_null($samsaraAuth)) {
      // return $this->respondBadRequest("No auth record!");
      throw new Exception('Samsara is not connected');
    }

    $refreshToken = $samsaraAuth->refresh_token;

    $url = config('constant.samsara_key.revoke');
    $arguments = ['token' => $refreshToken];

    try {
      $truck = Truck::where('company_id', Auth::user()->admin_company_detail_id)
        ->withTrashed()->pluck('id');
      SamsaraTruckId::whereIn('truck_id', $truck->toArray())->delete();
      $trailerIds = Trailer::where('company_id', Auth::user()->admin_company_detail_id)
        ->withTrashed()->pluck('id');
      SamsaraTrailerId::whereIn('trailer_id', $trailerIds->toArray())->delete();
      $samsaraAuth->delete();
      $this->postApiRequest($url, $arguments);
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @return string
   * This function is used to check the records and send response accordingly.
   */
  public function connectionStatus() {
    $samsaraAuth = $this->getSamsaraAuth();
    if (is_null($samsaraAuth) || is_null($samsaraAuth->refresh_token)) {
      return 'Not connected';
    }
    return 'Connected';
  }

  /**
   * @param Request $request
   * @throws Exception
   * Callback function get the user verification code and and save the required in the DB.
   */
  public function processSamsaraResponse(Request $request) {
    $parsedUrl = parse_url($request->header('referer'));
    parse_str($parsedUrl['query'], $parsedQueryParams);
    $error = $parsedQueryParams['error'] ?? null;

    if (!empty($error)) {
      throw new Exception('Error in connecting to Samsara. ' . \request('error'));
    }

    $code = $parsedQueryParams['code'];
    $state = $parsedQueryParams['state'];

    if (Str::length($state) > 40) {
      $stateCompanyId = Str::substr($state, 40, Str::length($state) - 40);
      $stateCsrfState = Str::substr($state, 0, 40);

      if ($stateCompanyId != $this->getAdminCompanyDetailId()) {
        throw new Exception('csrf id error');
      }

      $samsaraAuth = $this->getSamsaraAuth();

      if (is_null($samsaraAuth)) {
        throw new Exception('No auth record');
      }

      if ($stateCsrfState != $samsaraAuth->csrf_state) {
        throw new Exception('csrf error');
      }

      if (!empty($samsaraAuth->access_token) || !empty($samsaraAuth->access_token_expires_at)) {
        // Makes sure if connected to another samsara account previously, we do remove previous records.
        $truck = Truck::where('company_id', $stateCompanyId)
          ->withTrashed()->pluck('id');
        SamsaraTruckId::whereIn('truck_id', $truck->toArray())->delete();
        $trailerIds = Trailer::where('company_id', $stateCompanyId)
          ->withTrashed()->pluck('id');
        SamsaraTrailerId::whereIn('trailer_id', $trailerIds->toArray())->delete();
      }

      $url = config('constant.samsara_key.token');

      $arguments = ['code' => trim($code), 'grant_type' => 'authorization_code'];

      /* get access token and refresh token and save it into database */
      $response = $this->postApiRequest($url, $arguments);

      $this->saveSamsaraAuth($stateCompanyId, $response);
    }
  }

  /**
   * @return string
   * Used to create authorization token for API's Call on Samsara
   */
  private function createBase64Token() {
    return base64_encode($this->clientId . ':' . $this->clientSecret);
  }

  /**
   * @param $url
   * @param $arguments
   * @return mixed|string
   * @throws GuzzleException
   * Curl call for samsara api's using GuzzleHttp
   */
  private function postApiRequest($url, $arguments) {
    try {
      $headers = [
        'Content-Type' => 'application/x-www-form-urlencoded',
        'Authorization' => 'Basic ' . $this->createBase64Token(),
      ];
      $client = new Client();
      $completeUrl = $this->baseUrl . $url;
      $response = $client->request('POST', $completeUrl, [
        'form_params' => $arguments,
        'headers' => $headers,
      ]);
      return json_decode($response->getBody()->getContents()) ?? '';
    } catch (\GuzzleHttp\Exception\RequestException $exception) {
      Log::error($exception->getResponse()->getBody()->getContents());
      throw new Exception($exception->getMessage());
    } catch (Exception $exception) {
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @param $stateCompanyId
   * @param $accessTokenObj
   * @throws Exception
   * We create or update the company data of samsara in table.
   */
  private function saveSamsaraAuth($stateCompanyId, $accessTokenObj) {
    try {
      $currentTime = CarbonImmutable::now();
      $accessTokenExpiresAt = $currentTime->addSeconds($accessTokenObj->expires_in);
      Samsara::where('company_id', $stateCompanyId)->update([
        'access_token' => $accessTokenObj->access_token,
        'access_token_expires_at' => $accessTokenExpiresAt,
        'refresh_token' => $accessTokenObj->refresh_token,
      ]);
    } catch (Exception $exception) {
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @return Samsara
   * get or create the company records in samsara table
   */
  public function getOrCreateSamsaraAuth() {
    $samsaraAuth = $this->getSamsaraAuth();
    if (is_null($samsaraAuth)) {
      $companyId = $this->getAdminCompanyDetailId();
      $samsaraAuth = new Samsara();
      $samsaraAuth->company_id = $companyId;
      $samsaraAuth->csrf_state = Str::random(40);
      $samsaraAuth->save();
    }

    return $samsaraAuth;
  }

  /**
   * @return mixed
   * @throws GuzzleException
   * get the current user access token and if it expired than generates the new token using refresh token
   */
  public function getAccessToken() {
    $samsaraAuth = $this->getSamsaraAuth();
    return $this->accessTokenHelper($samsaraAuth);
  }

  public function getAccessTokenForSync($samsaraAuth) {
    return $this->accessTokenHelper($samsaraAuth);
  }

  private function accessTokenHelper($samsaraAuth) {
    $accessTokenExpiresAt = CarbonImmutable::parse($samsaraAuth->access_token_expires_at);
    $currentTimeAdd5Min = Carbon::now()->addMinutes(5);
    // We need to refresh token.
    if ($currentTimeAdd5Min->greaterThanOrEqualTo($accessTokenExpiresAt)) {
      $url = config('constant.samsara_key.token');
      $arguments = ['refresh_token' => $samsaraAuth->refresh_token, 'grant_type' => 'refresh_token'];
      /* get access token and refresh token and save it into database */
      $response = $this->postApiRequest($url, $arguments);
      $this->saveSamsaraAuth($samsaraAuth->company_id, $response);
      return $response->access_token;
    }
    return $samsaraAuth->access_token;
  }

  /**
   * @return mixed
   * Get the current auth user company id
   */
  protected function getAdminCompanyDetailId() {
    if ($this->passed_in_admin_company_detail_id) {
      return $this->passed_in_admin_company_detail_id;
    }

    return $this->getAuthUser()->admin_company_detail_id ?? null;
  }

  protected function getAdminCompanyDetail() {
    return AdminCompanyDetail::where('id', $this->getAdminCompanyDetailId())->first();
  }

  /**
   * @return Authenticatable|null
   * Get Authenticate user data
   */
  protected function getAuthUser() {
    return Auth::user();
  }

  /**
   * @return mixed
   * Get the details for current user of Samsara
   */
  protected function getSamsaraAuth() {
    // return $this->getAuthUser()->adminCompanyDetail->samsaraAuth;
    return $this->getAdminCompanyDetail()->samsaraAuth;
  }

  protected function getHttpCall($method, $url, $token, $queryParam = null) {
    try {
      $client = new Client();
      $response = $client->request($method, $url, [
        'query' => $queryParam,
        'headers' => [
          'Accept' => 'application/json',
          'Authorization' => 'Bearer ' . $token,
        ],
      ]);
      return json_decode($response->getBody()->getContents()) ?? '';
    } catch (Exception $exception) {
      throw new Exception($exception->getMessage() . " token: " . $token);
    }
  }
}
