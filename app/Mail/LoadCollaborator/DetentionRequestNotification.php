<?php

namespace App\Mail\LoadCollaborator;
use App\Models\AdminCompanyDetail;
use App\Models\Load;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DetentionRequestNotification extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected Load $load;
  protected $toList;
  protected $detentionDetails;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($load, $toList, $detentionDetails) {
    $this->load = $load;
    $this->toList = $toList;
    $this->detentionDetails = $detentionDetails;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    $tag = $this->load->tag;
    if (!empty($tag) && $tag->use_tag_for_billing) {
      $senderEmail = $tag->email;
      $businessName = $tag->business_name;
    } else {
      $senderEmail = $this->load->adminCompanyDetail->email;
      $businessName = $this->load->adminCompanyDetail->business_name;
    }

    foreach ($this->toList as $to) {
      $this->to($to);
    }
    if ($this->load->dispatcher) {
      $this->cc($this->load->dispatcher->email);
    }

    $from = $businessName ?? config('constant.emails.fromName');
    return $this->from(config('constant.emails.fromEmail'), $from)
      ->replyTo($senderEmail, $businessName)
      ->subject('Detention request for Load #' . $this->load->refrence_id)
      ->with(['businessName' => $businessName, 'load' => $this->load, 'detentionDetails' => (object) $this->detentionDetails])
      ->markdown('LoadCollaborator.load-detention-request-notification');
  }
}
