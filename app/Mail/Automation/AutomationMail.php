<?php

namespace App\Mail\Automation;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class AutomationMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $action;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($action) {
    $this->action = $action;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    $actionDetails = $this->action->action_details ?? [];
    $actionDetails = json_decode($actionDetails);

    $fromName = $actionDetails->fromName ?? config('constant.emails.fromName');
    if (empty($actionDetails)) {
      Log::error('No access details found for: ' . $actionDetails);
    }

    if (!empty($actionDetails->replyTo)) {
      $this->replyTo($actionDetails->replyTo);
    }

    $content = $actionDetails->content;
    $content = str_replace(
      array("<p>", "</p>", "<p "),
      array("<div>", "</div>", "<div "),
      $content
    );

    return $this
      ->to(array_filter($actionDetails->to))
      ->cc(array_filter($actionDetails->cc))
      ->bcc(array_filter($actionDetails->bcc))
      ->from(config('constant.emails.fromEmail'), $fromName)
      ->subject($actionDetails->subject)
      ->view('Automation.schedule')
      ->with('data', $content);
  }
}
