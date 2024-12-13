<?php

namespace App\Services\KeepTruckin;

use App\Models\AdminCompanyDetail;
use App\Models\KeepTruckin;
use App\Models\KeepTruckinTrailerId;
use App\Models\KeepTruckinTruckId;
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


class KeepTruckinAuthService {
  protected $clientId;
  protected $clientSecret;
  protected $redirectUri;
  protected $baseUrl;
  private $passed_in_admin_company_detail_id;

  public function __construct($admin_company_detail_id = '') {
    if (app()->environment('production')) {
      $this->clientId = config('constant.keepTruckin_key.prod.client_id');
      $this->clientSecret = config('constant.keepTruckin_key.prod.client_secret');
      $this->redirectUri = config('constant.keepTruckin_key.prod.redirect_uri');
    } else {
      $this->clientId = config('constant.keepTruckin_key.dev.client_id');
      $this->clientSecret = config('constant.keepTruckin_key.dev.client_secret');
      $this->redirectUri = config('constant.keepTruckin_key.dev.redirect_uri');
    }

    $this->baseUrl = config('constant.keepTruckin_key.base_uri');
    $this->passed_in_admin_company_detail_id = $admin_company_detail_id;
  }

  /**
   * @return string
   * create the url for redirection on KeepTruckin platform for data-access
   */
  public function connectToKeepTruckin(): string {
    $keepTruckinAuth = $this->getOrCreateKeepTruckinAuth();
    $queryParam = [
      'client_id' => $this->clientId,
      'redirect_uri' => $this->redirectUri,
      'state' => $keepTruckinAuth->csrf_state . $keepTruckinAuth->company_id,
      'response_type' => 'code',
      // locations.vehicle_locations_single is for location history, which we do not need for now.
      // 'scope' => 'locations.vehicle_locations_list vehicles.read locations.vehicle_locations_single',
      'scope' => 'locations.vehicle_locations_list vehicles.read ifta_reports.summary assets.read hos_logs.available_time',
    ];
    return 'https://api.gomotive.com/' . 'oauth/authorize' . "?" . http_build_query($queryParam);
  }

  /**
   * @throws Exception
   * Revoke the refresh token and delete the existing records from DB.
   */
  public function disconnectKeepTruckin() {
    $keepTruckinAuth = $this->getKeepTruckinAuth();

    if (is_null($keepTruckinAuth)) {
      throw new Exception('KeepTruckin is not connected');
    }

    $refreshToken = $keepTruckinAuth->refresh_token;

    $url = config('constant.keepTruckin_key.revoke');
    $arguments = ['token' => $refreshToken];

    try {
      $truck = Truck::where('company_id', Auth::user()->admin_company_detail_id)
        ->withTrashed()->pluck('id');
      KeepTruckinTruckId::whereIn('truck_id', $truck->toArray())->delete();
      $trailerIds = Trailer::where('company_id', Auth::user()->admin_company_detail_id)
        ->withTrashed()->pluck('id');
      KeepTruckinTrailerId::whereIn('trailer_id', $trailerIds->toArray())->delete();

      $this->postApiRequest($url, $arguments);
      $keepTruckinAuth->delete();
    } catch (Exception $exception) {
      Log::error($exception->getMessage());
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @return string
   * This function is used to check the records and send response accordingly.
   */
  public function connectionStatus(): string {
    $keepTruckinAuth = $this->getKeepTruckinAuth();
    if (is_null($keepTruckinAuth) || is_null($keepTruckinAuth->refresh_token)) {
      return 'Not connected';
    }
    return 'Connected';
  }

  /**
   * @param Request $request
   * @throws Exception
   * Callback function get the user verification code and and save the required in the DB.
   */
  public function processKeepTruckinResponse(Request $request) {
    try {
      $parsedUrl = parse_url($request->header('referer'));
      parse_str($parsedUrl['query'], $parsedQueryParams);
      $error = $parsedQueryParams['error'] ?? null;

      if (!empty($error)) {
        throw new Exception('Error in connecting to KeepTruckin. ' . \request('error'));
      }

      $code = $parsedQueryParams['code'];
      $state = $parsedQueryParams['state'];

      if (Str::length($state) > 40) {
        $stateCompanyId = Str::substr($state, 40, Str::length($state) - 40);
        $stateCsrfState = Str::substr($state, 0, 40);

        if ($stateCompanyId != $this->getAdminCompanyDetailId()) {
          throw new Exception('csrf id error');
        }

        $keepTruckinAuth = $this->getKeepTruckinAuth();

        if (is_null($keepTruckinAuth)) {
          throw new Exception('No auth record');
        }

        if ($stateCsrfState != $keepTruckinAuth->csrf_state) {
          throw new Exception('csrf error');
        }

        if (!empty($keepTruckinAuth->access_token) || !empty($keepTruckinAuth->access_token_expires_at)) {
          // Makes sure if connected to another KeepTruckin account previously, we do remove previous records.
          $truck = Truck::where('company_id', $stateCompanyId)
            ->withTrashed()->pluck('id');
          KeepTruckinTruckId::whereIn('truck_id', $truck->toArray())->delete();
          $trailerIds = Trailer::where('company_id', $stateCompanyId)
            ->withTrashed()->pluck('id');
          KeepTruckinTrailerId::whereIn('trailer_id', $trailerIds->toArray())->delete();
        }

        $url = config('constant.keepTruckin_key.token');

        $arguments = [
          'code' => $code,
          'grant_type' => 'authorization_code',
          'redirect_uri' => $this->redirectUri,
          'client_id' => $this->clientId,
          'client_secret' => $this->clientSecret
        ];

        /* get access token and refresh token and save it into database */
        $response = $this->postApiRequest($url, $arguments);
        $this->saveKeepTruckinAuth($stateCompanyId, $response);
      }
    } catch (Exception $exception) {
      Log::error($exception->getMessage());
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @return KeepTruckin
   * get or create the company records in KeepTruckin table
   */
  public function getOrCreateKeepTruckinAuth(): KeepTruckin {
    $keepTruckinAuth = $this->getKeepTruckinAuth();
    if (is_null($keepTruckinAuth)) {
      $companyId = $this->getAdminCompanyDetailId();
      $keepTruckinAuth = new KeepTruckin();
      $keepTruckinAuth->company_id = $companyId;
      $keepTruckinAuth->csrf_state = Str::random(40);
      $keepTruckinAuth->save();
    }
    return $keepTruckinAuth;
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
   * Get the details for current user of keepTruckin
   */
  protected function getKeepTruckinAuth() {
    // return $this->getAuthUser()->adminCompanyDetail->keepTruckinAuth;
    return $this->getAdminCompanyDetail()->keepTruckinAuth;
  }

  protected function getHttpCall($method, $url, $token, $queryParam = null) {
    try {
      $client = new Client();
      $response = $client->request($method, $url, [
        // 'query' => $queryParam,
        'headers' => [
          'Accept' => 'application/json',
          'Authorization' => 'Bearer ' . $token,
        ]
      ]);
      return json_decode($response->getBody()->getContents()) ?? '';
    } catch (Exception $exception) {
      Log::error($exception->getMessage());
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @return string
   * Used to create authorization token for API's Call on KeepTruckin
   */
  private function createBase64Token(): string {
    return base64_encode($this->clientId . ':' . $this->clientSecret);
  }

  /**
   * @param $url
   * @param $arguments
   * @return mixed|string
   * @throws GuzzleException
   * Curl call for KeepTruckin api's using GuzzleHttp
   */
  protected function postApiRequest($url, $arguments) {
    try {
      $headers = [
        'Content-Type' => 'application/x-www-form-urlencoded',
        'Authorization' => 'Basic ' . $this->createBase64Token(),
      ];
      $client = new Client();
      $completeUrl = $this->baseUrl . $url;
      $response = $client->request('POST', $completeUrl, [
        'form_params' => $arguments,
        'headers' => $headers
      ]);
      return json_decode($response->getBody()->getContents()) ?? '';
    } catch (Exception $exception) {
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @param $stateCompanyId
   * @param $accessTokenObj
   * @throws Exception
   * We create or update the company data of KeepTruckin in table.
   */
  protected function saveKeepTruckinAuth($stateCompanyId, $accessTokenObj) {
    try {
      $currentTime = CarbonImmutable::now();
      $accessTokenExpiresAt = $currentTime->addSeconds($accessTokenObj->expires_in);
      KeepTruckin::where('company_id', $stateCompanyId)->update([
        'access_token' => $accessTokenObj->access_token,
        'access_token_expires_at' => $accessTokenExpiresAt,
        'refresh_token' => $accessTokenObj->refresh_token,
      ]);
    } catch (Exception $exception) {
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * @return mixed
   * @throws GuzzleException
   * get the current user access token and if it expired than generates the new token using refresh token
   */
  public function getAccessToken() {
    $keepTruckinAuth = $this->getKeepTruckinAuth();
    $accessTokenExpiresAt = CarbonImmutable::parse($keepTruckinAuth->access_token_expires_at);
    $currentTimeAdd5Min = Carbon::now()->addMinutes(5);
    // We need to refresh token.
    if ($currentTimeAdd5Min->greaterThanOrEqualTo($accessTokenExpiresAt)) {
      $url = config('constant.keepTruckin_key.token');
      $arguments = [
        'refresh_token' => $keepTruckinAuth->refresh_token,
        'grant_type' => 'refresh_token',
        'redirect_uri' => $this->redirectUri,
        'client_id' => $this->clientId,
        'client_secret' => $this->clientSecret
      ];
      /* get access token and refresh token and save it into database */
      $response = $this->postApiRequest($url, $arguments);
      $this->saveKeepTruckinAuth($keepTruckinAuth->company_id, $response);
      return $response->access_token;
    }
    return $keepTruckinAuth->access_token;
  }

  /**
   * For testing only:  Curl call for KeepTruckin api's using GuzzleHttp
   * @param $method
   * @param $url
   * @param $token
   * @return mixed
   * @throws GuzzleException
   */
  /*
  protected function getHttpCallByXApiOrAuthToken($method, $url, $token) {
    $client = new Client();
    try {
      if (app()->environment('production')) {
        $headers = [
          'Accept' => 'application/json',
          'Authorization' => 'Bearer ' . $token,
        ];
      } else {
        $headers = [
          'X-Api-Key' => $token,
          'Accept' => 'application/json',
        ];
      }
      $response = $client->request($method, $url, ['headers' => $headers]);
      return json_decode($response->getBody()->getContents());
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception->getMessage());
    }
  }
  */

  /**
   * For testing only: Get API Key
   * @return string
   */
  /*
  protected function getApiKey() {
    if (app()->environment('production')) {
      $token = $this->getAccessToken();
    } else {
      $token = config('constant.keepTruckin_key.apiKey');
    }
    return $token;
  }
  */
}
