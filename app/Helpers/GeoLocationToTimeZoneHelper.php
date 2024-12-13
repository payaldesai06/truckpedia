<?php

namespace App\Helpers;

use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Log;

class GeoLocationToTimeZoneHelper {

  /**
   * Get timezone using latitude and longitude using current running Docker container.
   * @param $lat
   * @param $lng
   * @return array|mixed
   */
  private function latLngToTimeZoneUsingDocker($lat, $lng) {
    try {
      $requestUrl = config('services.geoLocationToTimezoneUrl') . $lat . '/' . $lng;
      $client = new Client();
      $request = new Request('GET', $requestUrl);
      $response = $client->sendAsync($request)->wait();
      return json_decode($response->getBody()->getContents())->tz ?? null;
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->emergency($exception->getMessage());
      return null;
    }
  }

  /**
   * Get timezone using latitude and longitude using Google Map API.
   * @param $lat
   * @param $lng
   * @return array|mixed
   */
  private function latLngToTimeZoneUsingGoogle($lat, $lng) {
    try {
      $timestamp = Carbon::now()->timestamp;
      $client = new Client();
      $requestUrl = "https://maps.googleapis.com/maps/api/timezone/json?location=" . $lat . "," . $lng . "&timestamp=" . $timestamp . "&key=" . config('services.googleMapsApi');
      $request = new Request('GET', $requestUrl);
      $response = $client->sendAsync($request)->wait();
      $response = json_decode($response->getBody()->getContents()) ?? null;
      if (!empty($response) && $response->status != 'OK') {
        Log::channel('slack')->emergency('Google Map API failed to get results, response: ' . json_encode($response));
        return null;
      }
      return !empty($response) ? $response->timeZoneId : null;
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->emergency($exception->getMessage());
      return null;
    }
  }

  /**
   * Get Timezone Using State.
   * @param $state
   * @return mixed|null
   */
  private function stateToTimeZone($state) {
    return config('constant.stateToTimezone')[$state] ?? null;
  }

  /**
   * State OR Lat and Long Timezone.
   * @param $state
   * @param $lat
   * @param $lng
   * @param $defaultOnError
   * @return array|mixed
   */
  public function stateOrLatLngToTimeZone($state, $lat, $lng, $defaultOnError) {
    if ($state) {
      $state = $this->stateToTimeZone($state) ?? null;
    }
    if (empty($state) && $lat && $lng) {
      /* using docker */
      //      $state = $this->latLngToTimeZoneUsingDocker($lat, $lng) ?? '';
      /* using Google API */
      $state = $this->latLngToTimeZoneUsingGoogle($lat, $lng);
    }
    if (empty($state)) {
      return $defaultOnError;
    }
    return $state;
  }
}
