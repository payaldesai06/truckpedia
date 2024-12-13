<?php

namespace App\Mail\Load;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailToDriversForLoadUpdate extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $content;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($content) {
    $this->content = $content;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    $content = $this->content;
    $loadNumber = $content['loadNumber'];
    $toEmail = $content['driverEmail'];
    $replyToEmail = $content['replyToEmail'];
    $fromName = $content['fromName'] ?? config('constant.emails.fromName');
    if (!empty($toEmail)) {
      $this->to($toEmail);
    }
    if (!empty($replyToEmail)) {
      $this->replyTo($replyToEmail);
    }
    return $this
      ->from(config('constant.emails.fromEmail'), $fromName)
      ->subject('Load ' . $loadNumber . ' Is Available')
      ->view('Load.email-to-driver-for-load-update')
      ->with('data', $content);
  }
}
