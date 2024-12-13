<?php

namespace App\Mail\Referral;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReferralNotification extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $sendTo;
  protected $registeredCompanyName;
  protected $submitReferralDetails;

  /**
   * Create a new message instance.
   * @return void
   */
  public function __construct($sendTo, $registeredCompanyName, $submitReferralDetails) {
    $this->sendTo = $sendTo;
    $this->registeredCompanyName = $registeredCompanyName;
    $this->submitReferralDetails = $submitReferralDetails;
  }

  /**
   * Build the message.
   * @return $this
   */
  public function build(): ReferralNotification {
    $from = $this->registeredCompanyName ?? config('constant.emails.fromName');
    return $this->from(config('constant.emails.fromEmail'), $from)
      ->to($this->sendTo)
      ->subject("New Referral From " . $this->registeredCompanyName)
      ->with([
        'submitReferralDetails' => $this->submitReferralDetails,
        'registeredCompanyName' => $this->registeredCompanyName,
      ])
      ->view('Referral.referral-notification');
  }
}
