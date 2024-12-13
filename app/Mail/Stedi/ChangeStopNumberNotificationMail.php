<?php

namespace App\Mail\Stedi;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ChangeStopNumberNotificationMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;
  protected $customers;
  protected $newStopDetails;
  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($customers, $newStopDetails) {
    $this->customers = $customers;
    $this->newStopDetails = $newStopDetails;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this
      // Only send to me for now.
      //->to($this->customers)
      ->bcc('zbu@ezpapel.com')
      ->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->subject('Load #' . $this->newStopDetails['referenceId'] . ", number of shippers or receivers are changed")
      ->view('Stedi.change-stops-numbers-notification')
      ->with('data', $this->newStopDetails);
  }
}
