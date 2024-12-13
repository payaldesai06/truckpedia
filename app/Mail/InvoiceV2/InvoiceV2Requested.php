<?php

namespace App\Mail\InvoiceV2;

use App\Services\AuthorizeNet\AuthorizeNetService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InvoiceV2Requested extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $invoice;
  protected $customer;
  protected ?string $paymentLink = null;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($invoice, $customer) {
    $this->invoice = $invoice;
    $this->customer = $customer;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): InvoiceV2Requested {
    $company = $this->invoice->company ?? '';
    $senderEmail = $company->email ?? '';
    $sentTo = $this->customer->billing_email ?? [];
    $senderCC = $company->billing_cc_emails ? explode(',', $company->billing_cc_emails) : [];
    if (!empty($this->customer->billing_cc_emails)) {
      $senderCC = array_merge($senderCC, explode(',', $this->customer->billing_cc_emails));
    }
    if (!empty($senderEmail)) {
      $senderCC = array_merge($senderCC, [$senderEmail]);
    }
    if (!empty($senderCC)) {
      $this->cc(array_filter($senderCC));
    }
    $businessName = $company->business_name ?? config('constant.emails.fromName');
    $storageFileName = $this->invoice->storage_file_name ?? '';
    $filePath = config('constant.s3.load_invoice') . $storageFileName ?? '';
    if (!empty($sentTo)) { // Some customers do not have an email.
      $this->to($sentTo);
    }

    if ($company && in_array(
      $company->id,
      config('user_customization.useAuthorizeNetForManualInvoice')
    )) {
      $authorizeNetService = new AuthorizeNetService();
      $authorizeNet = $authorizeNetService->checkIfCompanyHasAuthorizeNetAccount($company->id);
      if ($authorizeNet) {
        $this->paymentLink = $authorizeNetService->getPaymentLink($this->invoice->id);
      }
    }

    return $this
      ->from(config('constant.emails.fromEmail'), $businessName)
      ->replyTo($senderEmail, $businessName)
      ->subject('Invoice for ' . $this->invoice->invoice_number)
      ->attachFromStorageDisk('s3', $filePath, 'invoice.pdf')
      ->view('Invoice.email-invoice', [
        'invoice' => $this->invoice,
        'paymentLink' => $this->paymentLink
      ]);
  }
}
