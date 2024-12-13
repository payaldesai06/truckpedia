<?php

namespace App\Mail\LoadCollaborator;

use App\Models\AdminCompanyDetail;
use App\Models\Load;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class AddEmailCollaboratorNotification extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $request;
  public Load $loadDetail;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($request, $loadDetail) {
    $this->request = $request;
    $this->loadDetail = $loadDetail;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    $tag = $this->loadDetail->tag;
    if (!empty($tag) && $tag->use_tag_for_billing) {
      $senderEmail = $tag->email;
      $businessName = $tag->business_name;
    } else {
      $senderEmail = $this->loadDetail->adminCompanyDetail->email;
      $businessName = $this->loadDetail->adminCompanyDetail->business_name;
    }
    // Needs to call a service class code to generate the url.
    $loadUrl = URL::to('share/load-tracking/' . encrypt($this->request['load_id']));
    $from = config('constant.emails.fromName');
    $fromName = $businessName ?? $from;
    return $this->from(config('constant.emails.fromEmail'), $fromName)
      ->replyTo($senderEmail, $businessName)
      ->subject($businessName . ' has shared a tracking link for Load #' . $this->loadDetail->refrence_id . ' from ' . $from)
      ->with(['load_url' => $loadUrl, 'business_name' => $businessName, 'refrence_id' => $this->loadDetail->refrence_id])
      ->view('LoadCollaborator.addEmailCollaboratorNotification');
  }
}
