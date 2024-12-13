<?php

namespace Tests\Unit;

use App\Services\AutomationService;
use Exception;
use Tests\TestCase;

class AutomationTest extends TestCase {
  /**
   * A basic unit test example.
   *
   * @return void
   * @throws Exception
   */
  public function testCalculatedTestRunTime() {
    $data = [
      // every X days
      [
        'freqType' => 1,
        'interval' => 1,
        'selectedDates' => [],
        'startDate' => '2022-10-12',
        'startTime' => '01:15'
      ],
      [
        'freqType' => 1,
        'interval' => 15,
        'selectedDates' => [],
        'startDate' => '2022-10-12',
        'startTime' => '20:15'
      ],
      // every X weeks
      [
        'freqType' => 2,
        'interval' => 1,
        'selectedDates' => [1, 6],
        'startDate' => '2022-10-12',
        'startTime' => '11:00'
      ],
      [
        'freqType' => 2,
        'interval' => 2,
        'selectedDates' => [2, 5],
        'startDate' => '2022-10-12',
        'startTime' => '12:00'
      ],
      // every X months
      [
        'freqType' => 3,
        'interval' => 1,
        'selectedDates' => [1, 2],
        'startDate' => '2022-10-12',
        'startTime' => '12:00'
      ],
      [
        'freqType' => 3,
        'interval' => 1,
        'selectedDates' => [4, 15, 20],
        'startDate' => '2022-10-12',
        'startTime' => '12:00'
      ],
      [
        'freqType' => 3,
        'interval' => 1,
        'selectedDates' => [30, 31, 32],
        'startDate' => '2022-10-12',
        'startTime' => '12:00'
      ],
      [
        'freqType' => 3,
        'interval' => 2,
        'selectedDates' => [1, 2, 4, 15, 30, 31],
        'startDate' => '2022-10-12',
        'startTime' => '12:00'
      ]
    ];

    $expectedOutput = [
      [
        "2022-10-12 08:15:00",
        "2022-10-13 08:15:00",
        "2022-10-14 08:15:00",
        "2022-10-15 08:15:00",
        "2022-10-16 08:15:00",
        "2022-10-17 08:15:00",
        "2022-10-18 08:15:00",
        "2022-10-19 08:15:00",
        "2022-10-20 08:15:00",
        "2022-10-21 08:15:00",
        "2022-10-22 08:15:00",
        "2022-10-23 08:15:00",
      ],
      [
        "2022-10-13 03:15:00",
        "2022-10-28 03:15:00",
        "2022-11-12 04:15:00",
        "2022-11-27 04:15:00",
        "2022-12-12 04:15:00",
        "2022-12-27 04:15:00",
        "2023-01-11 04:15:00",
        "2023-01-26 04:15:00",
        "2023-02-10 04:15:00",
        "2023-02-25 04:15:00",
        "2023-03-12 04:15:00",
        "2023-03-27 03:15:00",
      ],
      [
        "2022-10-15 18:00:00",
        "2022-10-17 18:00:00",
        "2022-10-22 18:00:00",
        "2022-10-24 18:00:00",
        "2022-10-29 18:00:00",
        "2022-10-31 18:00:00",
        "2022-11-05 18:00:00",
        "2022-11-07 19:00:00",
        "2022-11-12 19:00:00",
        "2022-11-14 19:00:00",
        "2022-11-19 19:00:00",
        "2022-11-21 19:00:00",
      ],
      [
        "2022-10-14 19:00:00",
        "2022-10-25 19:00:00",
        "2022-10-28 19:00:00",
        "2022-11-08 20:00:00",
        "2022-11-11 20:00:00",
        "2022-11-22 20:00:00",
        "2022-11-25 20:00:00",
        "2022-12-06 20:00:00",
        "2022-12-09 20:00:00",
        "2022-12-20 20:00:00",
        "2022-12-23 20:00:00",
        "2023-01-03 20:00:00"
      ],
      [
        "2022-11-01 19:00:00",
        "2022-11-02 19:00:00",
        "2022-12-01 20:00:00",
        "2022-12-02 20:00:00",
        "2023-01-01 20:00:00",
        "2023-01-02 20:00:00",
        "2023-02-01 20:00:00",
        "2023-02-02 20:00:00",
        "2023-03-01 20:00:00",
        "2023-03-02 20:00:00",
        "2023-04-01 19:00:00",
        "2023-04-02 19:00:00"
      ],
      [
        "2022-10-15 19:00:00",
        "2022-10-20 19:00:00",
        "2022-11-04 19:00:00",
        "2022-11-15 20:00:00",
        "2022-11-20 20:00:00",
        "2022-12-04 20:00:00",
        "2022-12-15 20:00:00",
        "2022-12-20 20:00:00",
        "2023-01-04 20:00:00",
        "2023-01-15 20:00:00",
        "2023-01-20 20:00:00",
        "2023-02-04 20:00:00",
      ],
      [
        "2022-10-30 19:00:00",
        "2022-10-31 19:00:00",
        "2022-11-30 20:00:00",
        "2022-12-30 20:00:00",
        "2022-12-31 20:00:00",
        "2023-01-30 20:00:00",
        "2023-01-31 20:00:00",
        "2023-02-28 20:00:00",
        "2023-03-30 19:00:00",
        "2023-03-31 19:00:00",
        "2023-04-30 19:00:00",
        "2023-05-30 19:00:00",
      ],
      [
        "2022-10-15 19:00:00",
        "2022-10-30 19:00:00",
        "2022-10-31 19:00:00",
        "2022-12-01 20:00:00",
        "2022-12-02 20:00:00",
        "2022-12-04 20:00:00",
        "2022-12-15 20:00:00",
        "2022-12-30 20:00:00",
        "2022-12-31 20:00:00",
        "2023-02-01 20:00:00",
        "2023-02-02 20:00:00",
        "2023-02-04 20:00:00",
      ]
    ];

    $companyId = 36;
    $result = [];
    foreach ($data as $item) {
      $firstRunTime = (new AutomationService())->calculateFirstRunTime($item['startDate'], $item['startTime'], $item['selectedDates'], $item['freqType'], $companyId);
      $nextRunTime = [];
      $nextRunTime[] = $firstRunTime->toDateTimeString();
      for ($i = 0; $i < 11; $i++) {
        $schedule = [
          'company_id' => $companyId,
          'freq_type' => $item['freqType'],
          'freq_interval' => $item['interval'],
          'selected_dates' => implode(',', $item['selectedDates']),
          'original_start_date' => $item['startDate'],
          'original_start_time' => $item['startTime'],
          'next_run_utc_time' => $firstRunTime
        ];
        $firstRunTime = (new AutomationService())->calculateNextRunUtcTime((object)$schedule);
        $nextRunTime[] = $firstRunTime->toDateTimeString();
      }
      $result[] = $nextRunTime;
    }
    $diff = array_diff(array_map('json_encode', $result), array_map('json_encode', $expectedOutput));
    $diff = array_map('json_decode', $diff);
    if (!empty($diff)) {
      $this->fail('Not expected output found. Something wrong here!');
    }
    $this->assertTrue(true);
  }
}
