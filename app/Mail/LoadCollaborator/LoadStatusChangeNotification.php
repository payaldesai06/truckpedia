<?php

namespace App\Mail\LoadCollaborator;

use App\Models\AdminCompanyDetail;
use App\Models\Load;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Log;

class LoadStatusChangeNotification extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected Load $load;
  protected $status;
  protected $toList;
  protected $localTime;
  protected $fileAttachments;
  protected $purpose;
  protected $shipperReceiver;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(
    $load,
    $status,
    $toList,
    $localTime,
    $fileAttachments = [],
    $purpose = null,
    $shipperReceiver = null
  ) {
    $this->load = $load;
    $this->status = $status;
    $this->toList = $toList;
    $this->localTime = $localTime;
    $this->fileAttachments = $fileAttachments;
    $this->purpose = $purpose;
    $this->shipperReceiver = $shipperReceiver;
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

    $loadUrl = '';
    if (!$this->load->is_private) {
      $loadUrl = URL::to('share/load-tracking/' . encrypt($this->load->id));
    }

    foreach ($this->fileAttachments as $file) {
      if ($file['image_alias'] == "load_pod") {
        $fileAliasName = 'POD.pdf';
        $this->attachFromStorageDisk('s3', $file['s3_path'], $fileAliasName, [
          'mime' => 'application/pdf',
        ]);
      } else if (in_array($file['image_alias'], ['bol', 'lumper', 'scale', 'fuel', 'repair'])) {
        $fileAliasName = $file['image_alias'] . '.pdf';
        $this->attachFromStorageDisk('s3', $file['s3_path'], $fileAliasName, [
          'mime' => 'application/pdf',
        ]);
      } else {
        $fileAliasName = 'delivery.png';
        if ($file['image_alias'] == 'load_picked_up') {
          $fileAliasName = 'pickup.png';
        }
        $this->attachFromStorageDisk('s3', $file['s3_path'], $fileAliasName);
      }
    }

    $from = $businessName ?? config('constant.emails.fromName');
    return $this->from(config('constant.emails.fromEmail'), $from)
      ->to(array_filter($this->toList))
      ->replyTo($senderEmail, $businessName)
      ->subject('**Load #' . $this->load->refrence_id . ' Status Update**')
      ->with([
        'status' => $this->status, 'load_url' => $loadUrl,
        'business_name' => $businessName, 'load_detail' => $this->load,
        'local_time' => $this->localTime, 'purpose' => $this->purpose,
        'shipperReceiver' => $this->shipperReceiver,
      ])
      ->view('LoadCollaborator.load-status-change-notifcation');
  }
}
