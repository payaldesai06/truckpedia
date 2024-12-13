<?php

namespace App\Services\ExternalLoadBoards;

use Exception;
use GuzzleHttp\Client;

class LoadBoardCrawlerService {

  private $baseUrl;
  private $baseUrlParam;

  public function __construct() {
    $this->baseUrl = config('services.loadboard-crawler.search.url');
    $this->baseUrlParam = config('services.loadboard-crawler.search.url_param');
  }

  /**
   * Response from Docker.
   * @param $criteria
   * @return object|string
   */
  private function getResponseFromDocker($criteria, $whichLoadboardCralwer) {
    $client = new Client();
    $url = $this->baseUrl . $this->baseUrlParam . $whichLoadboardCralwer;
    $response = $client->post($url, [
      'json' => $criteria
    ]);
    return json_decode($response->getBody()->getContents())->loads ?? [];
  }

  /**
   * SearchLoads via loadboard crawler.
   * @param $request
   * @return object|string
   */
  public function searchLoads($request) {
    if (!$this->baseUrl) {
      return [];
    }

    $criteria = [];
    $whichLoadboardCralwer = request('whichLoadboardCralwer');

    if (request('whichLoadboardCralwer') == 'jbhunt') {
      if (request('ezpapelEquipmentType')) {
        $mappedEquipmentType =
          config('constant.ezpapel_equipment_type_to_jbhunt')[request('ezpapelEquipmentType')];
        if ($mappedEquipmentType == 'NO_MATCH') {
          return [];
        }

        $criteria['jbHuntEquipmentType'] = $mappedEquipmentType;
      } else if (request('manualSearchTypes') && count(request('manualSearchTypes'))) {
        if (count(request('manualSearchTypes')) == 1) {
          $criteria['jbHuntEquipmentType'] =
            config('constant.LM_manual_search_type_to_jbhunt')[request('manualSearchTypes')[0]];
        } else {
          return [];
        }
      }

      if ($request->has('origin.city')) {
        $criteria['origin'] = [
          'city' => $request->origin['city'],
          'state' => $request->origin['state'],
          'latitude' => $request->origin['latitude'],
          'longitude' =>  $request->origin['longitude'],
          'deadhead' => $request->origin['deadhead']
        ];
      } else {
        return [];
      }

      if ($request->has('destination.city')) {
        $criteria['destination'] = [
          'city' => $request->destination['city'],
          'state' => $request->destination['state'],
          'latitude' => $request->destination['latitude'],
          'longitude' =>  $request->destination['longitude'],
          'deadhead' => $request->destination['deadhead']
        ];
      } else {
        return [];
      }
    } else {
      return [];
    }

    $criteria['startDate'] = request('startDate');

    if (request('endDate')) {
      $criteria['endDate'] = request('endDate');
    }
    if (request('weight')) {
      $criteria['weight'] = (float) request('weight');
    }

    $response = $this->getResponseFromDocker($criteria, $whichLoadboardCralwer);
    return $response;
  }
}
