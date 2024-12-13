<?php

namespace App\Mail\Safety;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class IncidentFollowUpMail extends Mailable implements ShouldQueue {
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
    $toEmail = $content['toEmail'];
    $ccEmail = $content['ccEmail'];
    $replyToEmail = $content['replyToEmail'];
    if (!empty($toEmail)) {
      $this->to($toEmail);
    }
    if (!empty($ccEmail)) {
      $this->cc($ccEmail);
    }
    if (!empty($replyToEmail)) {
      $this->replyTo($replyToEmail);
    }
    return $this
      ->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->subject('Incident ' . $incidentClaimNumber . ' needs follow-up')
      ->view('Safety.incident-follow-up-email')
      ->with('data', $content);
  }
}
