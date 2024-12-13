<?php

namespace App\Mail\Safety;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class IncidentCustomizationMail extends Mailable implements ShouldQueue {
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
    $incidentClaimNumber = $content['incidentClaimNumber'];
    $toEmails = $content['toEmails'];
    $ccEmails = $content['ccEmails'];
    $replyToEmails = $content['replyToEmails'];
    if (!empty($toEmails)) {
      $this->to(array_filter($toEmails));
    }
    if (!empty($ccEmails)) {
      $this->cc(array_filter($ccEmails));
    }
    if (!empty($replyToEmails)) {
      $this->replyTo(array_filter($replyToEmails));
    }
    return $this
      ->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->subject('Estimates Needed For ' . $incidentClaimNumber)
      ->view('Safety.incident-customization-email')
      ->with('data', $content);
  }
}
