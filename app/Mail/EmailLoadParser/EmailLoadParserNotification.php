<?php

namespace App\Mail\EmailLoadParser;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailLoadParserNotification extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $errors;
  protected $toList;
  protected $payload;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(
    $errors = [],
    $toList = [],
    $payload = []
  ) {
    $this->errors = $errors;
    $this->toList = $toList;
    $this->payload = $payload;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): EmailLoadParserNotification {
    return $this->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->to($this->toList)
      ->subject('**Add tender load error reports')
      ->with([
        'errors' => $this->errors,
        'payload' => json_encode($this->payload)
      ])
      ->view('EmailLoadParser.loadErrorReports');
  }
}
