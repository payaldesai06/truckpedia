<?php

namespace App\Mail\Truckpedia\TruckReserved;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReserveRequestFromCarrierWebsiteMail extends Mailable  implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $emailData;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($emailData) {
    $this->emailData = $emailData;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): ReserveRequestFromCarrierWebsiteMail {
    $shipperBrokerDetails = $this->emailData['shipperBrokerDetails'];

    $pickupDetails = $this->emailData['pickupDetails'] = reset($this->emailData['pickupDetails']);
    $deliveryDetails = $this->emailData['deliveryDetails'] = end($this->emailData['deliveryDetails']);

    $subject = 'Truck booked by ' . $shipperBrokerDetails['companyName'] . ' for route ' .
      $pickupDetails['city'] . ', ' . $pickupDetails['state'] . ' to ' . $deliveryDetails['city'] .
      ', ' . $deliveryDetails['state'] . ' at ' . $pickupDetails['date'];

    return $this
      ->to($this->emailData['email'])
      ->from(config('constant.emails.fromEmail'), $shipperBrokerDetails['companyName'])
      ->cc($this->emailData['ccEmails'])
      ->replyTo($shipperBrokerDetails['email'], $shipperBrokerDetails['companyName'])
      ->subject($subject)
      ->view('Truckpedia.TruckReserved.ReserveRequestFromCarrierWebsite', ['data' => $this->emailData]);
  }
}
