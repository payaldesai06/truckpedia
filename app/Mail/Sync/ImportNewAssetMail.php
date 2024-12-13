<?php

namespace App\Mail\Sync;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ImportNewAssetMail extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $toEmails;
  protected $newAssets;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($toEmails, $newAssets) {
    $this->toEmails = $toEmails;
    $this->newAssets = $newAssets;
  }

  /**
   * Build the message.
   * @return $this
   */
  public function build() {
    return $this
      ->to(array_filter($this->toEmails))
      // ->bcc('zbu@ezpapel.com')
      ->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->subject('Newly Imported Drivers & Trucks & Trailers')
      ->view('Sync.importAsset')
      ->with([
        'content' => "",
        'newAssets' => $this->newAssets
      ]);
  }
}
