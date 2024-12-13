<?php

namespace Tests\Unit;

use Exception;
use Tests\TestCase;

class addTenderLoadTest extends TestCase {
  /**
   * A basic unit test example.
   *
   * @return void
   * @throws Exception
   */
  public function test_add_ge_tender_load() {
    $data = '{
        "key": "26e1db3e9b103e3b",
        "company": "GE",
        "loadBroker": "GE",
        "load":
        {
            "pickupNumber": "T2153214",
            "totalMiles": "373",
            "totalWeight": "10724",
            "totalWeightUnit": "lb",
            "totalUnitCount": "112",
            "lineHaul": "1400",
            "stopCharge": "0",
            "fuelCharge": "200",
            "spottingCharge": "0",
            "totalCost": "1600",
            "specialInstructions": "hello world1",
            "deliveryInstructions": "hello world1",
            "shippers": [
                {
                    "pickupDate": "11/31/2022",
                    "pickupTime": "01:32",
                    "pickupEndTime": "01:32",
                    "pickupName": "ADC - AP10 LOUISVILLE KY GE APPLIANCE PARK",
                    "pickupAddress": "4000 BUECHEL BANK RD, LOUISVILLE KY 40225"
                }
            ],
            "receivers": [
                {
                    "deliveryDate": "11/31/2022",
                    "deliveryTime": "10:00",
                    "deliveryEndTime": "10:00",
                    "deliveryLoadType": "LIVE UNLOAD",
                    "deliveryName": "SDS-3ZV-UST SELECT INC UST SELECT INC 3276",
                    "deliveryAddress": "3280 DEMOCRAT ROAD, MEMPHIS TN 38118-1514"
                },
                {
                    "deliveryDate": "11/31/2022",
                    "deliveryTime": "10:00",
                    "deliveryEndTime": "10:00",
                    "deliveryLoadType": "LIVE UNLOAD",
                    "deliveryName": "SDS-3ZV-UST SELECT INC UST SELECT INC 3276",
                    "deliveryAddress": "3280 DEMOCRAT ROAD, MEMPHIS TN 38118-1514"
                }
            ]
        }
    }';
    $data = json_decode($data, true);
    $response = $this->postJson('/api/new-email-parsed-rate-con', $data);
    $response->assertStatus(200);
    $response->assertJsonPath('result', true);
  }

  public function test_add_transplace_tender_load() {
    $data = '{
        "key": "26e1db3e9b103e3b",
        "company": "Transplace",
        "loadBroker": "Transplace",
        "load":
        {
            "loadNumber": "844547433",
            "scac": "PDCM",
            "bolNumber": "2450246",
            "filename": "test.pdf",
            "totalMiles": "373",
            "totalWeight": "10724",
            "totalWeightUnit": "lb",
            "totalUnitCount": "112",
            "lineHaul": "1400",
            "fuelCharge": "200",
            "totalCost": "1600",
            "shippers": [
                {
                    "pickupDate": "11/27/2022",
                    "pickupTime": "01:32",
                    "pickupEndTime": "01:32",
                    "pickupName": "ADC - AP10 LOUISVILLE KY GE APPLIANCE PARK",
                    "pickupAddress": "4000 BUECHEL BANK RD, LOUISVILLE KY 40225"
                }
            ],
            "receivers": [
                {
                    "deliveryDate": "11/27/2022",
                    "deliveryTime": "10:00",
                    "deliveryEndTime": "10:00",
                    "deliveryLoadType": "LIVE UNLOAD",
                    "deliveryName": "SDS-3ZV-UST SELECT INC UST SELECT INC 3276",
                    "deliveryAddress": "3280 DEMOCRAT ROAD, MEMPHIS TN 38118-1514"
                }
            ]
        }
    }';
    $data = json_decode($data, true);
    $response = $this->postJson('/api/new-email-parsed-rate-con', $data);
    $response->assertStatus(200);
    $response->assertJsonPath('result', true);
  }
}
