<?php

namespace App\Mail\Truckpedia\TruckReserved;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TruckReserved extends Mailable  implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $mailDetails;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($mailDetails) {
    $this->mailDetails = $mailDetails;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): TruckReserved {
    // Sender should be shipper or broker who reserved the truck.
    $reservingCompany = $this->mailDetails['reservingCompany'] ?? null;
    $senderEmail = $reservingCompany->email;
    $senderCompanyName = $reservingCompany->business_name;
    // Receiver should be carrier.
    $carrierEmail = $this->mailDetails['carrierEmail'] ?? null;
    // Subject: Truck booked by <shipper/broker company name> for route Los Angeles, CA to Seattle, WA at 2023-03-31
    $shipper  = $this->mailDetails['shipper'];
    $receiver  = $this->mailDetails['receiver'];
    $subject = 'Truck booked by ' . $senderCompanyName . ' for route ' . $shipper['city'] . ', ' . $shipper['state'] . ' to ' . $receiver['city'] . ', ' . $receiver['state'] . ' at ' . $shipper['shipping_date'];
    $senderEmails = [$senderEmail];
    if (!empty($this->mailDetails['billingCcEmails'])) {
      $senderEmails = array_unique(array_merge(
        $senderEmails,
        explode(',', $this->mailDetails['billingCcEmails'])
      ));
    }
    if (app()->environment('production')) {
      $senderEmails[] = 'support@truckpedia.io';
    }
    $from = $senderCompanyName ?? config('constant.emails.fromName');
    return $this
      ->to($carrierEmail)
      // from, cc, and reply to should be shipper or broker
      ->from(config('constant.emails.fromEmail'), $from)
      ->cc($senderEmails)
      ->replyTo($senderEmail, $senderCompanyName)
      ->subject($subject)
      ->view('Truckpedia.TruckReserved.ReservedTruckEmailNotification', ['data' => $this->mailDetails]);
  }
}
