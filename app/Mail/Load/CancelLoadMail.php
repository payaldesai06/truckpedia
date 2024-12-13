<?php

namespace App\Mail\Load;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CancelLoadMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  public $mailDetail;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($mailDetail) {
    $this->mailDetail = $mailDetail;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): CancelLoadMail {
    if (!empty($this->mailDetail['toEmail'])) {
      $this->to($this->mailDetail['toEmail']);
    }
    if (!empty($this->mailDetail['ccEmails'])) {
      $this->cc(array_filter($this->mailDetail['ccEmails']));
    }
    if (!empty($this->mailDetail['replyTo'])) {
      $this->replyTo($this->mailDetail['replyTo']);
    }

    $shipperBrokerName = $this->mailDetail['shipperBrokerName'];
    $carrierName = $this->mailDetail['carrierName'];
    $loadReference = $this->mailDetail['loadReference'];
    $shipper = $this->mailDetail['shipper'];
    $receiver = $this->mailDetail['receiver'];
    $from = $shipperBrokerName ?? config('constant.emails.fromName');

    return $this
      ->from(config('constant.emails.fromEmail'), $from)
      ->subject('Load #' . $loadReference . ' is canceled')
      ->view(
        'Load.cancel-load',
        [
          'carrierName' => $carrierName,
          'shipperBrokerName' => $shipperBrokerName,
          'shipper' => $shipper,
          'receiver' => $receiver,
          'loadReference' => $loadReference,
        ]
      );
  }
}
