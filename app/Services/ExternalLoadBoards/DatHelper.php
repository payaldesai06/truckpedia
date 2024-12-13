<?php

namespace App\Services\ExternalLoadBoards;

use App\Models\DatServiceAccount;
use App\Models\DatUserAccount;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;

class DatHelper {
  private $authUrl;
  private $searchUrl;

  public function __construct() {
    if (app()->environment('production')) {
      $this->authUrl = config('services.dat.auth.prod_url');
      $this->searchUrl = config('services.dat.search.prod_url');
    } else {
      $this->authUrl = config('services.dat.auth.test_url');
      $this->searchUrl = config('services.dat.search.test_url');
    }
  }

  /**
   * Authenticate Service Account of DAT.
   * @param $username
   * @param $password
   * @return mixed|string
   * @throws Exception
   */
  public function generateDatServiceAccountToken($username, $password) {
    //try {
    $client = new Client();
    $url = $this->authUrl . config('services.dat.auth.organization');
    $response = $client->post($url, [
      'json' => [
        "username" => $username,
        "password" => $password
      ],
    ]);
    return json_decode($response->getBody()->getContents()) ?? '';
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Sync the DAT Service account access token.
   * @param $companyId
   * @return mixed
   * @throws Exception
   */
  public function syncDatServiceAccount($companyId) {
    //try {
    $serviceAccount = DatServiceAccount::where('company_id', $companyId)->first();
    if (!$serviceAccount || !$serviceAccount->expires_when) {
      throw new Exception('No valid DAT service account.');
    }

    if (Carbon::parse($serviceAccount->expires_when) <= Carbon::now()->addMinutes(1)) {
      $response = $this->generateDatServiceAccountToken($serviceAccount->username, $serviceAccount->password);
      $serviceAccount->access_token = $response->accessToken;
      $serviceAccount->expires_when = Carbon::parse($response->expiresWhen);
      $serviceAccount->save();
      return $response->accessToken;
    }
    return $serviceAccount->access_token;
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Authenticate User Account of DAT.
   * @param $username
   * @param $companyId
   * @return mixed|string
   * @throws Exception
   */
  public function generateDatUserAccountToken($username, $companyId) {
    //try {
    $client = new Client();
    $url = $this->authUrl . config('services.dat.auth.user');

    $accessToken = $this->syncDatServiceAccount($companyId);
    $response = $client->post($url, [
      'json' => [
        "username" => $username,
      ],
      'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
      ],
    ]);

    return json_decode($response->getBody()->getContents()) ?? '';
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Sync DAT user account access token.
   * @param $userId
   * @param $companyId
   * @return mixed
   * @throws Exception
   */
  public function syncDatUserAccountToken($userId, $companyId) {
    $datUserAccount = DatUserAccount::where('user_id', $userId)->first();
    if (!$datUserAccount || !$datUserAccount->expires_when) {
      throw new Exception('No valid DAT user account.');
    }

    if (Carbon::parse($datUserAccount->expires_when) <= Carbon::now()->addMinutes(1)) {
      $response = $this->generateDatUserAccountToken($datUserAccount->username, $companyId);
      $datUserAccount->access_token = $response->accessToken;
      $datUserAccount->expires_when = Carbon::parse($response->expiresWhen);
      $datUserAccount->save();
      return $response->accessToken;
    }

    return $datUserAccount->access_token;
  }

  /**
   * Create search criteria on DAT.
   * @param array $searchCriteria
   * @param $userId
   * @param $companyId
   * @return mixed|string
   * @throws Exception
   */
  public function createSearchCriteria(array $searchCriteria, $userId, $companyId) {
    //try {
    $client = new Client();
    $url = $this->searchUrl;

    $accessToken = $this->syncDatUserAccountToken($userId, $companyId);
    $response = $client->post($url, [
      'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
      ],
      'json' => $searchCriteria,
    ]);
    return json_decode($response->getBody()->getContents()) ?? '';
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   *
   * @param $userId
   * @param $companyId
   * @param $searchId
   * @return mixed|string
   * @throws Exception
   */
  public function datMatchResultsUsingSearchId($userId, $companyId, $searchId) {
    //try {
    $client = new Client();
    $url = $this->searchUrl . '/' . $searchId
      . config('services.dat.search.matches') . '?limit=200';
    $accessToken = $this->syncDatUserAccountToken($userId, $companyId);
    $response = $client->get($url, [
      'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
      ],
    ]);
    $result = json_decode($response->getBody()->getContents()) ?? '';
    return  $result;
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Retrieve the details of a specific match for a specified search Load Details.
   * @param $userId
   * @param $companyId
   * @param $searchId
   * @param $matchId
   * @return mixed|string
   * @throws Exception
   */
  public function getLoadMatchDetails($userId, $companyId, $searchId, $matchId) {
    //try {
    $client = new Client();
    $url = $this->searchUrl . '/' . $searchId
      . config('services.dat.search.detailedMatches') . '/' . $matchId;
    $accessToken = $this->syncDatUserAccountToken($userId, $companyId);
    $response = $client->get($url, [
      'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
      ],
    ]);
    return json_decode($response->getBody()->getContents()) ?? '';
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }
}
