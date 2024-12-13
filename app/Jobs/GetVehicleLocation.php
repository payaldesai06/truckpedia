<?php

namespace App\Jobs;

use Exception;
use App\Models\Logs\LoadLog;
use App\Services\Samsara\SamsaraService;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class GetVehicleLocation implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  private $companyId;
  private $serviceName;
  private $loadLogId;
  private $truckId;
  private $trailerId;

  /**
   * Create a new job instance.
   *
   * @return void
   */
  public function __construct(
    $companyId,
    $serviceName,
    $loadLogId,
    $truckId = null,
    $trailerId = null
  ) {
    $this->companyId = $companyId;
    $this->serviceName = $serviceName;
    $this->loadLogId = $loadLogId;
    $this->truckId = $truckId;
    $this->trailerId = $trailerId;
  }

  /**
   * Execute the job.
   *
   * @return void
   * @throws Exception
   */
  public function handle() {
    $truckLocation = null;
    $trailerLocation = null;
    $trackingService = null;
    try {
      if ($this->serviceName == 'samsara') {
        $trackingService = new SamsaraService($this->companyId);
      }
      if (empty($trackingService)) {
        return;
      }

      if ($this->truckId) {
        $truckLocation = $trackingService->getOneTruckLocationV2($this->truckId);
      }

      if ($this->trailerId) {
        $trailerLocation = $trackingService->getOneTrailerLocationV2($this->trailerId);
      }
    } catch (Exception $e) {
      Log::error($e->getMessage());
    }

    if ($truckLocation || $trailerLocation) {
      $data = array_filter([
        'truck_location' => $truckLocation,
        'trailer_location' => $trailerLocation ? $trailerLocation : $truckLocation,
      ]);
      LoadLog::where('id', $this->loadLogId)->update($data);
    }
  }
}
