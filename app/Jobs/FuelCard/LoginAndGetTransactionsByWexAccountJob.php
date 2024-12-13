<?php

namespace App\Jobs\FuelCard;

use App\Services\FuelCard\WexService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class LoginAndGetTransactionsByWexAccountJob implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  // This ensures the queue job would continue running after default 60s' timeout limit.
  // smaller than config->queue's retry_after.
  public $timeout = 3000;

  private WexService $wexService;
  private $wexAccount;

  public function __construct(WexService $wexService, $wexAccount) {
    $this->wexService = $wexService;
    $this->wexAccount = $wexAccount;
  }

  /**
   * Execute the job.
   *
   * @return void
   */
  public function handle() {
    try {
      $this->wexService->synchronizeTransactionsByWexAccount($this->wexAccount);
    } catch (\Exception $e) {
      $this->wexAccount->load('company');
      Log::channel('slack')->emergency(
        "Wex Account transactions synchronization failed. \n
       \n Company: " . $this->wexAccount->company->name .
        "\n Company id: " . $this->wexAccount->company_id .
        "\n Company user_name: " . $this->wexAccount->user_name .
        "\n Exception message: " . $e->getMessage() .
        "\n Exception file: " . $e->getFile() .
        "\n Exception line: " . $e->getLine()
      );
    }
  }
}
