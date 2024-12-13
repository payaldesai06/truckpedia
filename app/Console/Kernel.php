<?php

namespace App\Console;

use App\Services\AutomationService;
use App\Services\ExternalLoadBoards\CHRobinsonService;
use App\Services\ExternalLoadBoards\DatService;
use App\Services\ExternalLoadBoards\TransplaceService;
use App\Services\FuelCard\WexService;
use App\Services\LoadPaymentService;
use App\Services\QbdService;
use App\Services\Safety\IncidentService;
use App\Services\Samsara\SamsaraService;
use App\Services\SpreadsheetService;
use App\Services\StripeService;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;
use Exception;

class Kernel extends ConsoleKernel {
  /**
   * The Artisan commands provided by your application.
   *
   * @var array
   */
  protected $commands = [
    // Commands\DemoCron::class,
  ];

  /**
   * Define the application's command schedule.
   *
   * @param \Illuminate\Console\Scheduling\Schedule $schedule
   * @return void
   */
  protected function schedule(Schedule $schedule) {
    /*
    $schedule->call(function () {
      Log::channel('cron')->notice('test');
    })->everyMinute();
    */

    $schedule->call(function () {
      $stripeService = new StripeService();
      $stripeService->cronDailyAutoRenewSubscriptions();
    })->dailyAt('1:00');

    $schedule->call(function () {
      $qbdService = new QbdService();
      $qbdService->cronResyncInvoices();
    })->dailyAt('5:00');

    $schedule->call(function () {
      try {
        // The client IDs expire daily, usually around 3 a.m. CST.
        $wexService = new WexService();
        $wexService->getAndSaveCompaniesTransactions();
      } catch (Exception $exception) {
        Log::error($exception);
        Log::channel('slack')->emergency($exception->getMessage());
      }
    })->dailyAt('6:15');

    $schedule->call(function () {
      $chrobinsonService = new CHRobinsonService();
      $chrobinsonService->cronDailyRefreshCHRobinsonAccessToken();
    })->dailyAt('7:05');

    $schedule->call(function () {
      $datService = new DatService();
      $datService->cronToDeleteExpiredSearchCriteria();
    })->dailyAt('8:05');

    $schedule->call(function () {
      (new TransplaceService())->cronRefreshTransplaceAccessToken();
    })->cron('*/50 * * * *'); // every 50 minutes.

    ///*
    // Turn on after GE onboards.
    $schedule->call(function () {
      (new TransplaceService())->cronJobUpdateTruckLocation();
    })->everyThirtyMinutes();
    //*/

    // Cron to delete merged PDF storage files older than last one hour
    $schedule->call(function () {
      try {
        (new LoadPaymentService())->cronToDeleteMergedPdfFromStorageDirectory();
      } catch (Exception $exception) {
        Log::error($exception);
      }
    })->hourly();

    // cron to generate excel from last week sunday to saturday and send email to company.
    $schedule->call(function () {
      try {
        (new SpreadsheetService())->cronToGenerateLoadWeeklyReport();
      } catch (Exception $exception) {
        Log::error($exception);
      }
    })->weeklyOn(4)->at("08:00"); // 4 means thursday, and we need to run this at midnight 12 am so, need to specify time here.

    /*
    $schedule->call(function () {
      try {
        (new SamsaraService())->cronToSyncTrucksTrailers();
      } catch (Exception $exception) {
        Log::error($exception);
        Log::channel('slack')->emergency($exception->getMessage());
      }
    })->dailyAt('9:00'); // run this at midnight 1 am
    */

    $schedule->call(function () {
      $automationService = new AutomationService();
      try {
        $automationService->scheduleCronJob();
      } catch (Exception $exception) {
        Log::error($exception);
      }
    })->everyFifteenMinutes();

    $schedule->call(function () {
      $automationService = new AutomationService();
      try {
        $automationService->reminderDailyCronJob();
      } catch (Exception $exception) {
        Log::error($exception);
      }
    })->dailyAt('8:00');

    // Cron To Safety Incidents Follow up Email Reminder
    $schedule->call(function () {
      $incidentService = new IncidentService();
      try {
        $incidentService->followUpEmailReminderDailyCronJob();
      } catch (Exception $exception) {
        Log::error($exception);
      }
    })->dailyAt('9:15');
  }

  /**
   * Register the commands for the application.
   *
   * @return void
   */
  protected function commands() {
    // $this->load(__DIR__ . '/Commands');

    require base_path('routes/console.php');
  }
}
