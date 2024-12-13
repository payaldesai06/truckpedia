<?php

use App\Models\AdminCompanyDetail;
use App\Models\AccessorialFee;
use App\Models\AccessorialDeduction;
use App\Models\User;
use App\Services\FcmService;
use Aws\Laravel\AwsFacade;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Models\PcMiler;
use Illuminate\Support\Str;

/**
 * Created by PhpStorm.
 * User: SST5
 * Date: 12/12/2019
 * Time: 11:17 AM
 */
// image get by s3

function getImage($image, $path, $days = 6) {
  if ($days > 7) {
    $days = 7;
  }
  // temporaryUrl() does not talk to AWS server, exists() does.
  // So it's exists() which costs a lot of running time.
  if (!empty($image)) { // && Storage::disk('s3')->exists($path . $image)
    return Storage::disk('s3')
      ->temporaryUrl($path . $image, now()->addDays($days));
  } else {
    return "";
  }
}

/**
 * Get file by s3. It's best not to use fullPath, because then we cannot really know if storageFilename is null.
 * @param $directory
 * @param $storageFilename
 * @param $originalFilename
 * @param int $days
 * @return string|null
 */
function getFile($directory, $storageFilename, $originalFilename = null, int $days = 6) {
  if (empty($storageFilename)) {
    return null;
  }

  if ($days > 7) {
    $days = 7;
  }
  // Using urlencode() for CJK.
  $responseContent = !empty($originalFilename) ?
    ['ResponseContentDisposition' => 'inline; filename=' . rawurlencode($originalFilename)] : [];
  return Storage::disk('s3')->temporaryUrl($directory . $storageFilename, now()->addDays($days), $responseContent);
}

function getFileViaCloudFrontV2($directory, $storageFilename, $originalFilename = null, $days = 60) {
  if (empty($storageFilename)) {
    return null;
  }

  if (config('services.cloundfront-s3.key_id')) {
    $client = AwsFacade::createClient('cloudfront');
    $url = config('filesystems.disks.s3-cloudfront.endpoint') . '/' . $directory . $storageFilename;
    if ($originalFilename) {
      $url .= "?response-content-disposition=" . rawurlencode('inline;filename=' . $originalFilename);
    }
    $signedUrl = $client->getSignedUrl([
      'url' => $url,
      'expires' => time() + $days * 24 * 3600, // seconds
      'private_key' => realpath(config('services.cloundfront-s3.key_path')),
      'key_pair_id' => config('services.cloundfront-s3.key_id'),
    ]);

    return $signedUrl;
  }

  return getFile($directory, $storageFilename, $originalFilename);
}

function getFileViaCloudFront($file, $path, $days = 60) {
  if (empty($file)) {
    return "";
  }

  if (config('services.cloundfront-s3.key_id')) {
    $client = AwsFacade::createClient('cloudfront');
    $signedUrl = $client->getSignedUrl([
      'url' => config('filesystems.disks.s3-cloudfront.endpoint') . '/' . $path . $file,
      'expires' => time() + $days * 24 * 3600, // seconds
      'private_key' => realpath(config('services.cloundfront-s3.key_path')),
      'key_pair_id' => config('services.cloundfront-s3.key_id'),
    ]);
    return $signedUrl;
  }

  return getImage($file, $path, 7);
}

function getImageContentS3($path) {
  if (!empty($path)) { // && Storage::disk('s3')->exists($path)
    return Storage::disk('s3')->get($path);
  } else {
    return "";
  }
}

function getExportFile($file) {
  if (!empty($file)) { // && Storage::disk('s3')->exists(config('constant.export_path') . $file)
    return Storage::disk('s3')
      ->temporaryUrl(config('constant.export_path') . $file, now()->addDays(6));
  } else {
    return "";
  }
}

/**
 * Upload File to S3.
 * @param $path
 * @param $content
 * @return bool
 */
function uploadFileToS3($path, $content): bool {
  try {
    return Storage::disk('s3')->put($path, $content);
  } catch (Exception $exception) {
    Log::error($exception);
    throw new Exception("Failed to upload file.");
  }
}

function getDateTimeBasedOnTimezone($date, $timezone): Carbon {
  return Carbon::createFromTimestamp(strtotime($date))->timezone($timezone);
}

function getLocalDateStartOfDayInUtc($date, $timezone): Carbon {
  return Carbon::parse($date, $timezone)->startOfDay()->setTimezone('UTC');
}

function getLocalDateEndOfDayInUtc($date, $timezone): Carbon {
  return Carbon::parse($date, $timezone)->endOfDay()->setTimezone('UTC');
}

function getDateTimeBasedOnTimezoneFormattedForMobileApp($date, $timezone) {
  if ($date) {
    $newDate = getDateTimeBasedOnTimezone($date, $timezone);

    return $newDate->toTimeString('minutes') . ', ' . $newDate->format('d M Y');
  }
}

function formatNumberToCurrency($value) {
  return number_format($value, 2);
}

/**
 * Get current authenticated admin company id
 * @return string
 * @throws Exception
 */
function getAuthAdminCompanyId(): string {
  $adminCompanyId = Auth::user()->admin_company_detail_id ?? '';
  if (empty($adminCompanyId)) {
    throw new Exception(config('response.error'));
  }
  return $adminCompanyId;
}

function triggerDriverHasNewLoadPushNotification($userIds, $dispatcherName, $loadUniqueId) {
  $title = "New Load Available";
  if ($dispatcherName) {
    $body = $dispatcherName . " has assigned a new load " . $loadUniqueId . " to you!";
  } else {
    $body = "You have been assigned a new load " . $loadUniqueId . "!";
  }
  $payload = [
    'userIds' => $userIds,
    'title' => $title,
    'body' => $body,
  ];
  callExternalPushNotificationApi($payload, config('constant.pushNotificationUrl'));
}

/**
 * @param $body
 * @param $apiUrl
 * @return mixed
 * @throws \GuzzleHttp\Exception\GuzzleException
 */
function callExternalPushNotificationApi($body, $apiUrl) {
  $client = new Client();
  if (config('app.env') === 'production') {
    $nodeUrl = config('constant.externalSystems.nodeProject.prodUrl');
  } else {
    $nodeUrl = config('constant.externalSystems.nodeProject.devUrl');
  }
  $pushNotificationUrl = $nodeUrl . $apiUrl;
  try {
    $client->request('POST', $pushNotificationUrl, [
      'headers' => [
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer ' . request()->bearerToken(),
      ],
      'json' => $body
    ]);
  } catch (Exception $e) {
    Log::error($e->getMessage());
    Log::channel('slack')->emergency($e->getMessage());
    // throw new Exception("Error sending push notification.");
  }
}

/**
 * Generate a pre-signed url to upload file/object.
 * @param $fileName
 * @param $fullPath
 * @return JsonResponse|mixed
 */
function generatePresignedUrl($fileName, $fullPath): string {
  $s3 = Storage::disk('s3');
  $client = $s3->getDriver()->getAdapter()->getClient();
  $expiry = config('constant.s3.presigned_url.expiry_time');
  $command = $client->getCommand('PutObject', [
    'Bucket' => config('filesystems.disks.s3.bucket'),
    'Key' => "{$fullPath}{$fileName}"
  ]);
  $requestUri = $client->createPresignedRequest($command, $expiry);
  return (string)$requestUri->getUri();
}

/**
 * Get GEO Location From Complete Address using Google Map API.
 * @param $address
 * @return array|null
 */
function getLatAndLongUsingGoogleMapByAddress($address): ?array {
  try {
    if (!empty($address)) {
      $ret = [
        'latitude' => null,
        'longitude' => null,
        'city' => null,
        'state' => null,
        'zipcode' => null
      ];
      $address = str_replace(" ", "+", $address);
      $data_location =
        "https://maps.google.com/maps/api/geocode/json?key=" . config('services.googleMapsApi') .
        "&address=" . $address . "&sensor=false";
      $data = file_get_contents($data_location);
      $data = json_decode($data);

      if (!empty($data) && $data->status != 'OK') {
        $errorMessage = 'Google Map API failed to get results, response: ' . json_encode($data);
        // TODO: refactor this to a helper function and try catch any exception from Log.
        Log::channel('slack')->emergency($errorMessage . ' & Payload: ' . request()->getContent());
        return null;
      }

      // error_log(json_encode($data));

      if (!empty($data) && $data->status == "OK" && !empty($data->results)) {
        if (
          $data->results[0]->geometry->location->lat &&
          $data->results[0]->geometry->location->lng
        ) {
          $lat = $data->results[0]->geometry->location->lat;
          $lng = $data->results[0]->geometry->location->lng;
        }
        if (!empty($lat) && !empty($lng)) {
          $ret['latitude'] = $lat;
          $ret['longitude'] = $lng;
        }

        $addressArray = explode(', ', $data->results[0]->formatted_address) ?? null;
        if (!empty($addressArray)) {
          $address = $addressArray[0];
          for ($i = 1; $i <= count($addressArray) - 4; ++$i) {
            $address .= ', ' . $addressArray[$i];
          }
          $ret['address'] = $address;
        }

        if (!empty($data->results[0]->address_components)) {
          foreach ($data->results[0]->address_components as $component) {
            if (in_array('locality', $component->types)) {
              $ret['city'] = $component->long_name;
            } else if (in_array('neighborhood', $component->types) && empty($ret['city'])) {
              // This is needed for locations like "7550 PERRYMAN CT CURTIS BAY MD 21226", where no locality is returned.
              $ret['city'] = $component->long_name;
            } else if (in_array('administrative_area_level_1', $component->types)) {
              $ret['state'] = $component->short_name;
            } else if (in_array('postal_code', $component->types)) {
              $ret['zipcode'] = $component->short_name;
            }
          }
        }
        // error_log(json_encode($ret));
        foreach ($ret as $key => $value) {
          if (empty($value)) {
            return null;
          }
        }
        return $ret;
      }
    }
  } catch (Exception $exception) {
    Log::channel('slack')->emergency('Having error parsing Google Map results: ' .
      $exception->getMessage() . ' & Payload: ' . request()->getContent());
    Log::error($exception);
  }
  return null;
}

/**
 * Calculate Total Miles Using PC Miler API.
 * @param $shippers
 * @param $receivers
 * @return void|null
 */
function calculateTotalMilesUsingPcMiler($shippers, $receivers, $companyId) {
  try {
    // TODO: Please add companyId as the last parameter, make it required for now.
    if (!empty($shippers) && !empty($receivers)) {
      $apiKey = PcMiler::where('company_id', $companyId)->value('api_key') ?? null;
      if ($apiKey) {
        $stops = '';
        foreach ($shippers as $shipper) {
          if (!empty($shipper['longitude']) && !empty($shipper['latitude'])) {
            $stops .= $shipper['longitude'] . ',' . $shipper['latitude'] . ';';
          }
        }
        foreach ($receivers as $i => $receiver) {
          if (!empty($receiver['longitude']) && !empty($receiver['latitude'])) {
            $stops .= $receiver['longitude'] . ',' . $receiver['latitude'];
            if (($i + 1) != count($receivers)) {
              /* last element */
              $stops .= ';';
            }
          }
        }
        if (!empty($stops)) {
          $client = new Client();
          $requestUrl =
            'https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/route/routeReports?stops=' .
            $stops . '&reports=CalcMiles';
          $request = new Request('GET', $requestUrl, [
            'Authorization' => $apiKey
          ]);
          $response = $client->sendAsync($request)->wait();
          if ($response->getStatusCode() != 200) {
            $errorMessage = 'PC Miler Calculate API failed to get results, response: ' .
              $response->getBody()->getContents() ?? 'No Response Found';
            Log::channel('slack')->emergency($errorMessage . ' & Payload: ' .
              request()->getContent());
          }
          $response = json_decode($response->getBody()->getContents()) ?? null;
          return $response[0]->TMiles ? ['miles' => $response[0]->TMiles, 'type' => 'p'] : null;
        }
      }
    }
  } catch (Exception $exception) {
    Log::channel('slack')->emergency('Having error calling PC Miler API: ' .
      $exception->getMessage() . ' & Payload: ' . request()->getContent());
    Log::error($exception);
  }
  return null;
}

// TODO: This function is not fully tested, also it does not consider order of stops.
// Devs shall refactor it so it accept an array of stops, not 2 arrays.
// This stop can have shipper 1-> receiver 1-> shipper 2-> receiver 2, etc.
/**
 * Calculate Total Miles Using Google map API.
 * @param $shippers
 * @param $receivers
 * @return array|null
 */
function calculateTotalMilesUsingGoogleMaps($shippers, $receivers): ?array {
  if (!empty($shippers) && !empty($receivers)) {
    $waypoints = [];

    foreach ($shippers as $shipper) {
      if (!empty($shipper['latitude']) && !empty($shipper['longitude'])) {
        $waypoints[] = $shipper['latitude'] . ',' . $shipper['longitude'];
      }
    }

    foreach ($receivers as $receiver) {
      if (!empty($receiver['latitude']) && !empty($receiver['longitude'])) {
        $waypoints[] = $receiver['latitude'] . ',' . $receiver['longitude'];
      }
    }
    if (!empty($waypoints)) {
      $client = new Client();
      $requestUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=' .
        $waypoints[0] . '&destination=' . end($waypoints) . '&waypoints=' .
        implode('|', array_slice($waypoints, 1, -1)) .
        '&key=' . config('constant.google_maps_api_key');

      $response = $client->get($requestUrl);
      $data = json_decode($response->getBody()->getContents());

      if ($data->status === 'OK') {
        $totalDistance = 0;
        foreach ($data->routes as $route) {
          foreach ($route->legs as $leg) {
            $totalDistance += $leg->distance->value;
          }
        }

        // Convert meters to miles (1 meter = 0.000621371 miles)
        $totalMiles = $totalDistance / 1609.344;

        return ['miles' => $totalMiles, 'type' => 'g'];
      }
    }
  }
  return null;
}

/**
 * Check is business url format is valid or not.
 * @param $url
 * @return Boolean
 */
function isValidBusinessUrlFormat($url): bool {
  if (empty($url)) {
    return false;
  }
  $pattern = '/^[a-zA-Z0-9-]{3,100}$/';
  preg_match_all($pattern, $url, $matches, PREG_SET_ORDER, 0);
  $match = collect($matches)->flatten()->first();
  if (empty($match)) {
    return false;
  }
  if (in_array($url, config('reserved_subdomains.reservedSubdomains'))) {
    return false;
  }
  return true;
}

/**
 * Validate format of custom domain.
 * @param $url
 * @return bool
 */
function isValidCustomDomainFormat($url): bool {
  if (empty($url)) {
    return false;
  }
  $pattern = '/^[a-zA-Z0-9-.]{3,100}$/';
  preg_match_all($pattern, $url, $matches, PREG_SET_ORDER, 0);
  $match = collect($matches)->flatten()->first();
  if (empty($match)) {
    return false;
  }
  $pos = strpos($url, '.');
  if ($pos == false) {
    return false;
  }
  return true;
}

/**
 * Returns true only if it's a valid url and does not exist.
 * @param $url
 * @return Boolean
 */
function isValidBusinessUrlAndNotExist($url): bool {
  $url = strtolower($url);
  return isValidBusinessUrlFormat($url)
    && !AdminCompanyDetail::where('business_url', $url)->exists();
}

/**
 * Returns true only if it's a valid custom domain and does not exist.
 * @param $customDomain
 * @return Boolean
 */
function isValidCustomDomainAndNotExist($customDomain): bool {
  $customDomain = strtolower($customDomain);
  return isValidCustomDomainFormat($customDomain)
    && !buildCustomDomainQuery($customDomain)->exists();
}

/**
 * Get the room and nonroot domains, like abc.com and www.abc.com.
 * @param $customDomain input by user.
 * @return array ['abc.com', 'www.abc.com']
 * @throws Exception
 */
function getRootAndWwwCustomDomains($customDomain) {
  $dotCount = substr_count($customDomain, '.');
  // There is one corner case. What if two companies want to have "a.abc.com"
  // and "b.abc.com" at the same time? While I guess we do not worry about it now.
  if ($dotCount == 2) {
    return [substr($customDomain, strpos($customDomain, '.') + 1), $customDomain];
  }
  if ($dotCount == 1) {
    return [$customDomain, 'www.' . $customDomain];
  }
  throw new Exception('Invalid custom domain.');
}

/**
 * Build the query of the AdminCompanyDetail model based on the user input
 * custom domain.
 * @param $customDomain input by user.
 * @return object A query that is not finished, waiting for next step.
 */
function buildCustomDomainQuery($customDomain) {
  return AdminCompanyDetail::query()->whereIn(
    'custom_domain',
    getRootAndWwwCustomDomains($customDomain)
  );
}

/**
 * Generate Unique File Name.
 * @param $companyId
 * @param $extension
 * @param $index
 * @return string
 */
function generateUniqueFileName($companyId, $extension, $index = null): string {
  $postfix = Carbon::now()->format('Ymd-His') . '-' . hrtime()[1] . '-' .
    Str::random(16) . '.' . strtolower($extension);
  if (!is_null($index)) {
    $postfix = $index . '-' . $postfix;
  }
  return $companyId . '-' . $postfix;
}

/**
 * Generate Unique File Name.
 * @param $companyId
 * @param $tagId
 * @param $extension
 * @param $index
 * @return string
 */
function generateUniqueFileNameWithTagId($companyId, $tagId, $extension, $index = null): string {
  $postfix = Carbon::now()->format('Ymd-His') . '-' . hrtime()[1] . '-' .
    Str::random(16) . '.' . strtolower($extension);
  if (!is_null($index)) {
    $postfix = $index . '-' . $postfix;
  }
  return $companyId . '-t' . $tagId . '-' . $postfix;
}

/**
 * Convert UTC timestamp to Company Local timezone timestamp.
 * @param $utcTimestamp
 * @param $companyTimezone
 * @return string
 */
function convertUtcTimestampToLocal($utcTimestamp, $companyTimezone): string {
  return Carbon::parse($utcTimestamp)->setTimezone($companyTimezone)->toDateTimeString() ?? '';
}

/**
 * Get User data and return the full name of user.
 * @param $user
 * @return string
 */
function userFullName($user): string {
  $fullName = '';
  if (!empty($user)) {
    $fullName = $user->first_name ?? '';
    if (!empty($user->last_name)) {
      $fullName = $fullName . ' ' . $user->last_name;
    }
  }
  return trim($fullName, "");
}

/**
 * Convert Utc Timestamp to admin company local timezone.
 * @param $utcTimestamp
 * @param $companyTimezone
 * @return Carbon
 */
function convertUtcTimestampToLocalCarbonObject($utcTimestamp, $companyTimezone): Carbon {
  return Carbon::parse($utcTimestamp)->setTimezone($companyTimezone);
}

/**
 * Get Company timezone.
 * @param $companyId
 * @return string
 * @throws Exception
 */
function getCompanyTimezone($companyId = null): string {
  $companyId = !empty($companyId) ? $companyId : getAuthAdminCompanyId();
  return AdminCompanyDetail::where('id', $companyId)->pluck('timezone')->first() ??
    'America/Los_Angeles';
}

/**
 * Convert TO number format
 * @param $number
 */
function convertToNumberFormat($number) {
  if ($number == intval($number)) {
    return number_format($number);
  } else {
    return number_format(round($number, 2), 2);
  }
}

function convertToNumberFormatWithDecimals($number) {
  return number_format(round($number, 2), 2);
}

function printAddressHelper($address, $city, $state, $zipCode) {
  $fullAddress = '';
  if (!empty($address)) {
    $fullAddress = $address;
  }
  if (!empty($city)) {
    $fullAddress = !empty($fullAddress) ? $fullAddress . ', ' . $city : $city;
  }
  if (!empty($state) || !empty($zipCode)) {
    if (!empty($fullAddress)) {
      $fullAddress = $fullAddress . ', ';
    }
    $fullAddress = $fullAddress . $state . ' ' . $zipCode;
  }

  return $fullAddress;
}

/**
 * Format Date in American Date format m/d/Y.
 * @param string|null $date
 * @return string
 */
function formatDateInAmericanDateFormat(?string $date): string {
  return !empty($date) ? Carbon::parse($date)
    ->format(config('constant.shortDateFormat')) : '';
}

/**
 * Get currency in string format with prefix "$" sign and add "-" sign just before "$" sign.
 * @param $currency
 * @return string
 */
function getCurrencyInNumberFormatWithDollarPrefix($currency): string {
  if (!empty($currency)) {
    if ($currency >= 0) {
      return '$' . number_format($currency, 2);
    } else {
      return '-$' . number_format(abs($currency), 2);
    }
  }
  return '$0.00';
}

// This will print "0.123456" and "0.12" and "0.1" for hauling fee rate, which is OK for us.
function getCurrencyInNumberFormatWithDollarPrefixV2($currency, $decimalPlaces = 2): string {
  $ret = '$0.00';
  if (!empty($currency)) {
    if ($currency >= 0) {
      $ret = '$' . (number_format($currency, $decimalPlaces));
    } else {
      $ret = '-$' . (number_format(abs($currency), $decimalPlaces));
    }
  }
  return removeTrailerZero($ret);
}


function removeTrailerZero($num) {
  $num = strval($num);
  $pos = strpos($num, '.');
  if ($pos === false) { // it is integer number
    return $num;
  } else { // it is decimal number
    return rtrim(rtrim($num, '0'), '.');
  }
}

/**
 * Convert Millisecond to Second
 * @param $number
 * @return int|null
 */
function convertMillisecondToSecond($number) {
  if (!is_null($number)) {
    return $number / 1000;
  }
  return null;
}

/* Get Drop/Hook Trailer Type Value
 * @param $dropHookValue
 * @return string|null
 */
function getDropHookTrailerType($dropHookValue) {
  return !empty($dropHookValue) ?
    array_search($dropHookValue, config('constant.load.dropHookTrailerType')) : null;
}

/**
 * Get current pricing plan. Only works for free mode now.
 * @param $companyDetail
 * @return string|null
 */
function getPricingPlanV1($companyDetail) {
  $pricingPlan = null;
  // we may use this in the future ->setTimezone(getCompanyTimezone())
  $getCurrentDate = Carbon::now()->format(config('constant.date_format'));

  if (
    $companyDetail->subscription_status != config('constant.subscription_status.active') &&
    $getCurrentDate > $companyDetail->trial_valid_till
  ) {
    $pricingPlan = 'free';
  }
  return $pricingPlan;
}

/**
 * Generate a random string of with length chars from [a-zA-Z0-9].
 * @param $length
 * @return mixed
 */
function generateRandomString($length) {
  $str = "";
  $characters = array_merge(range('A', 'Z'), range('a', 'z'), range('0', '9'));
  $max = count($characters) - 1;
  for ($i = 0; $i < $length; $i++) {
    $rand = mt_rand(0, $max);
    $str .= $characters[$rand];
  }
  return $str;
}

/**
 * Check if company is shipper or broker.
 * @return mixed
 */
function isCompanyShipperBroker($companyId = null) {
  $companyId = $companyId ?? getAuthAdminCompanyId();
  $currentCompanyType = AdminCompanyDetail::where('id', $companyId)->value('company_type');
  $companyShipperBrokerTypes = [
    array_search('shipper', config('constant.companyType')),
    array_search('broker', config('constant.companyType'))
  ];
  $isCompanyShipperBroker = false;
  if (in_array($currentCompanyType, $companyShipperBrokerTypes)) {
    $isCompanyShipperBroker = true;
  }
  return $isCompanyShipperBroker;
}

function getLoggedUserCompanyType() {
  // auth()->user()->loadMissing('adminCompanyDetail');
  $companyTypeId = auth()->user()->adminCompanyDetail->company_type;

  if (is_null($companyTypeId)) {
    return config('constant.companyType')[1];
  }

  return config('constant.companyType')[$companyTypeId];
}

function getFormattedCamelCase($str) {
  if (is_null($str)) {
    return $str;
  }
  //split camelCase word
  $arr = preg_split('/(?=[A-Z])/', $str);
  //merge camelCase word with space
  $formattedString = implode(' ', $arr);
  return ucfirst($formattedString);
}

function isNullOrEmptyStr($value) {
  if (!isset($value) || $value === '') {
    return true;
  }
  return false;
}

/**
 * Compare two arrays recursively.
 * @param $firstArray
 * @return bool
 */
function arraysAreEqual(array $firstArray, array $secondArray): bool {
  if (count($firstArray) !== count($secondArray)) {
    return false;
  }

  foreach ($firstArray as $key => $value) {
    if (!array_key_exists($key, $secondArray)) {
      return false;
    }

    if (is_array($value)) {
      if (!is_array($secondArray[$key])) {
        return false;
      }

      if (!arraysAreEqual($value, $secondArray[$key])) {
        return false;
      }
    } else {
      if ($value !== $secondArray[$key]) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Compare two strings case-insensitively.
 * @param string $stringA The first string.
 * @param string $stringB The second string.
 * @return bool Returns true if the strings are equal ignoring case, false otherwise.
 */
function hasEqualCaseInsensitiveStrings(string $stringA, string $stringB): bool {
  return mb_strtolower($stringA, 'UTF-8') === mb_strtolower($stringB, 'UTF-8');
}

/**
 * Call Node Js API
 * @param string $reqMethod
 * @param string $url
 * @param array $payload
 * @return object
 * @throws Exception
 */
function callNodeJsApi($reqMethod, $url, $payload = null) {
  try {
    $client = new Client();
    $nodeUrl = config('app.env') === 'production'
      ? config('constant.externalSystems.nodeProject.prodUrl')
      : config('constant.externalSystems.nodeProject.devUrl');

    $url = $nodeUrl . $url;
    $options = [
      'headers' => [
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer ' . request()->bearerToken(),
      ],
    ];

    if (!is_null($payload)) {
      $options['json'] = $payload;
    }
    $response = $client->request($reqMethod, $url, $options);
    $response = json_decode($response->getBody()->getContents(), true);
    if (!$response['result']) {
      throw new Exception($response['message']);
    }
    return $response;
  } catch (Exception $e) {
    Log::channel('slack')->emergency('url ' . $url . ' failed. ' . $e->getMessage());
    throw new Exception($e->getMessage());
  }
}

/**
 * @param string type 'fee' or 'deduction'
 * @param array ids
 * @param boolean|null commissionable When true, only return commissionable records. When false, only non-commissionable records. When absent, all records.
 */
function getAccessorialsByIds(
  $type,
  $ids,
  $commissionable = null
) {
  if (empty($ids)) {
    return collect();
  }
  if ($type == 'deduction') {
    $query = AccessorialDeduction::query();
  } else {
    $query = AccessorialFee::query();
  }
  $query = $query->select('id', 'name', 'commissionable')
    ->whereIn('id', $ids);

  if ($commissionable === true) {
    $query->whereNull('commissionable');
  } else if ($commissionable === false) {
    $query->where('commissionable', 0);
  }
  return $query->get()->keyBy('id');
}
