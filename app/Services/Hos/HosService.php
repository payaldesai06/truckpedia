<?php

namespace App\Services\Hos;

use App\Services\Samsara\SamsaraService;
use App\Services\KeepTruckin\KeepTruckinService;
use Exception;
use GuzzleHttp\Exception\GuzzleException;

class HosService {

  /**
   * Get the hours of service data
   * @return array
   * @throws GuzzleException
   */
  public function getHos(): array {
    $samsaraService = new SamsaraService();
    $keepTruckinService = new KeepTruckinService();
    $hos = [];
    $hosLogs = [];
    if ($samsaraService->connectionStatus() == 'Connected') {
      $hosLogs = $samsaraService->getAllHos();
    } else if (
      $keepTruckinService->connectionStatus() == 'Connected'
    ) {
      $hosLogs = $keepTruckinService->getAllHos();
    }
    if (empty($hosLogs)) { // Prevent hosLogs not valid error.
      return [];
    }

    foreach ($hosLogs as $log) {
      $hos[] = [
        'externalDriverName' => $log->driver->name ?? '',
        'clocks' => [
          'breakInS' => convertMillisecondToSecond($log->clocks->break->timeUntilBreakDurationMs)
            ?? 0,
          'driveInS' => convertMillisecondToSecond($log->clocks->drive->driveRemainingDurationMs)
            ?? 0,
          'shiftInS' => convertMillisecondToSecond($log->clocks->shift->shiftRemainingDurationMs)
            ?? 0,
          'cycleInS' => convertMillisecondToSecond($log->clocks->cycle->cycleRemainingDurationMs)
            ?? 0,
        ]
      ];
    }
    return $hos;
  }
}
