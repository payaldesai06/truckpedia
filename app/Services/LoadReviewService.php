<?php

namespace App\Services;

use App\Jobs\Load\Review\SendEmailToShipperBrokerForReviewJob;
use App\Models\Load;
use Exception;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class LoadReviewService {

  /**
   * Send out one email to ask the shipper/broker to give a load review for this carrier.
   * @param Load $carrierLoad
   * @return mixed
   * @throws Exception
   */
  public function sendMailToShipperBrokerForReview(Load $carrierLoad) {
    try {
      $carrierLoad->loadMissing(
        'adminCompanyDetail:id,business_name',
        'syncedLoad:id,admin_company_detail_id',
        'syncedLoad.adminCompanyDetail:id,email,business_name',
      );

      SendEmailToShipperBrokerForReviewJob::dispatch($carrierLoad);
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->critical($exception->getMessage());
    }
  }
}
