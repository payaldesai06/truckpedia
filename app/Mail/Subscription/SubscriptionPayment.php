<?php

namespace App\Mail\Subscription;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SubscriptionPayment extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  public $user;
  public $transaction;
  public $invoice;

  public function __construct(User $user, $transaction, $invoice) {
    $this->user = $user;
    $this->transaction = $transaction;
    $this->invoice = $invoice;
  }

  public function build(): SubscriptionPayment {
    $invoiceFileName = 'invoice_' . now()->toDateString() . '.pdf';
    // ->from($this->user->email, $this->user->adminCompanyDetail->business_name)
    $from = config('constant.emails.fromName');
    return $this->from(config('constant.emails.fromEmail'), $from)
      ->subject('You have a new ' . $from . ' invoice')
      ->with('transcation', $this->transaction)
      ->attachFromStorageDisk('s3', $this->invoice, $invoiceFileName, ['mime' => 'application/pdf'])
      ->markdown('SubscriptionPayment/subscription-payment');
  }
}
