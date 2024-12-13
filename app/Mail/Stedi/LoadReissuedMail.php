<?php

namespace App\Mail\Stedi;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LoadReissuedMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $customers;
  protected $loadReferenceId;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($customers, $loadReferenceId) {
    $this->customers = $customers;
    $this->loadReferenceId = $loadReferenceId;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->to($this->customers)
      // ->bcc('zbu@ezpapel.com')
      ->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->subject('Load #' . $this->loadReferenceId . " was canceled but seems to be re-issued, please check.")
      ->view('Stedi.load-reissued-mail')
      ->with('data', $this->loadReferenceId);
  }
}
