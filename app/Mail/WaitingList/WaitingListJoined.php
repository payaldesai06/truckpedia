<?php

namespace App\Mail\WaitingList;

use App\Models\WaitingList;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WaitingListJoined extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  public WaitingList $waitingList;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(WaitingList $waitingList) {
    $this->waitingList = $waitingList;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): WaitingListJoined {
    return $this->markdown('WaitingList/waiting_list_joined');
  }
}
