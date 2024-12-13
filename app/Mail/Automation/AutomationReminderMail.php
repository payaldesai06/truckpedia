<?php

namespace App\Mail\Automation;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class AutomationReminderMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $action;
  protected $dueDateAssets;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($action, $dueDateAssets) {
    $this->action = $action;
    $this->dueDateAssets = $dueDateAssets;
  }

  /**
   * Build the message.
   * @return $this
   */
  public function build() {
    $actionDetails = $this->action->action_details ?? [];
    $actionDetails = json_decode($actionDetails);
    $fromName = $actionDetails->fromName ?? config('constant.emails.fromName');
    if (empty($actionDetails)) {
      Log::error('No access details found for: ' . $actionDetails);
    }

    if (!empty($actionDetails->cc)) {
      $this->cc(array_filter($actionDetails->cc));
    }

    if (!empty($actionDetails->bcc)) {
      $this->bcc(array_filter($actionDetails->bcc));
    }

    if (!empty($actionDetails->replyTo)) {
      $this->replyTo($actionDetails->replyTo);
    }

    $content = $actionDetails->content;

    return $this
      ->to(array_filter($actionDetails->to))
      ->from(config('constant.emails.fromEmail'), $fromName)
      ->subject($actionDetails->subject)
      ->view('Automation.reminder')
      ->with([
        'content' => $content ?? "",
        'dueDateAssets' => $this->dueDateAssets
      ]);
  }
}
