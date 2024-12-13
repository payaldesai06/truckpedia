<?php

namespace App\Jobs\Load\Review;

use App\Mail\Load\EmailToShipperBrokerForReview;
use App\Models\Load;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendEmailToShipperBrokerForReviewJob implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  private Load $carrierLoad;

  public function __construct($carrierLoad) {
    $this->carrierLoad = $carrierLoad;
  }

  public function handle() {
    try {
      Mail::send(new EmailToShipperBrokerForReview($this->carrierLoad));

      $currentUtcTime = Carbon::now('UTC');
      $this->carrierLoad->update([
        'review_link_sent_at' => $currentUtcTime
      ]);
    } catch (\Exception $e) {
      Log::error($e);
      Log::channel('slack')->critical($e->getMessage());
    }
  }
}
