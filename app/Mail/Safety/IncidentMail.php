<?php

namespace App\Mail\Safety;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class IncidentMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $incidentEmail, $adminCompanyDetail;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($incidentEmail, $adminCompanyDetail) {
    $this->incidentEmail = $incidentEmail;
    $this->adminCompanyDetail = $adminCompanyDetail;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {

    $fromName = $this->incidentEmail->fromName ?? $this->adminCompanyDetail->business_name;
    $replyTo = !empty($this->incidentEmail->replyTo) ? explode(',', $this->incidentEmail->replyTo)
      : $this->adminCompanyDetail->email;
    if (!empty($this->incidentEmail->to)) {
      $toEmails = explode(",", $this->incidentEmail->to);
      $this->to(array_filter($toEmails));
    }
    if (!empty($this->incidentEmail->cc)) {
      $ccEmails = explode(",", $this->incidentEmail->cc);
      $this->cc(array_filter($ccEmails));
    }
    if (!empty($this->incidentEmail->bcc)) {
      $bccEmails = explode(",", $this->incidentEmail->bcc);
      $this->bcc(array_filter($bccEmails));
    }
    $content = $this->incidentEmail->content;
    $content = str_replace(
      array("<p>", "</p>", "<p "),
      array("<div>", "</div>", "<div "),
      $content
    );
    $fromName = $fromName ?? config('constant.emails.fromName');
    return $this
      ->from(config('constant.emails.fromEmail'), $fromName)
      ->replyTo($replyTo)
      ->subject($this->incidentEmail->subject)
      ->view('Safety.incident-email')
      ->with('data', $content);
  }
}
