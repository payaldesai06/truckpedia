<?php

namespace App\Mail\Load;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

// No need to put this in queue cause there is already a job calling this.
class EmailToShipperBrokerForReview extends Mailable { // implements ShouldQueue
  use SerializesModels; // Queueable,

  protected $carrierLoad;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(
    $carrierLoad
  ) {
    $this->carrierLoad = $carrierLoad;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): EmailToShipperBrokerForReview {
    $carrierCompany = $this->carrierLoad->adminCompanyDetail;
    $carrierCompanyName = $carrierCompany->business_name ?? '';

    $syncedLoad = $this->carrierLoad->syncedLoad;
    $shipperBrokerCompany = $syncedLoad->adminCompanyDetail;
    $shipperBrokerCompanyName = $shipperBrokerCompany->business_name ?? '';
    $toEmail = $shipperBrokerCompany->email;
    $shipperBrokerLoadNumber = $syncedLoad->load_unique_id;

    $baseUrl = config('app.url');
    $reviewUrl = "{$baseUrl}/review/load/{$syncedLoad->id}";

    $fromName = config('constant.emails.fromName');
    return $this->from(config('constant.emails.fromEmail'), $fromName)
      ->to($toEmail)
      ->subject('Please Leave Review For Load #' . $shipperBrokerLoadNumber)
      ->view('Load.review', [
        'shipperBrokerCompanyName' => $shipperBrokerCompanyName,
        'shipperBrokerLoadNumber' => $shipperBrokerLoadNumber,
        'carrierCompanyName' => $carrierCompanyName,
        'reviewUrl' => $reviewUrl
      ]);
  }
}
