<?php

namespace App\Mail\ThirdPartyCarrier;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendRateConfirmationToCarrier extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  public $pdf;
  public $data;
  public $title;
  public $bol;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($pdf, $data, $title, $bol) {
    $this->pdf = $pdf;
    $this->data = $data;
    $this->title = $title;
    $this->bol = $bol;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): SendRateConfirmationToCarrier {
    if (!empty($this->data['to'])) {
      $this->to($this->data['to']);
    }

    if (!empty($this->data['cc'])) {
      $this->cc(array_filter($this->data['cc']));
    }

    $businessName = $this->data['company']['name'] ?? '';
    $companyName = $this->data['carrier']['name'] ?? '';
    $loadNumber = $this->data['loadNumber'];
    if (!empty($this->bol)) {
      $this->attachFromStorageDisk('s3', $this->bol, $loadNumber . '_bol.pdf');
    }
    $from = $businessName ?? config('constant.emails.fromName');
    return $this
      ->from(config('constant.emails.fromEmail'), $from)
      ->subject('Load #' . $this->data['loadNumber'] . ' Rate Confirmation')
      ->attachFromStorageDisk('s3', $this->pdf, $loadNumber . '_rate_con.pdf')
      ->view(
        'Load.carrier-rate-confirmation-mail',
        ['companyName' => $companyName, 'businessName' => $businessName, 'title' => $this->title]
      );
  }
}
