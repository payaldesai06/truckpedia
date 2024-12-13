<?php

namespace App\Mail\LoadPayment;

use App\Models\AdminCompanyDetail;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class PaymentRequested extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  public AdminCompanyDetail $adminCompanyDetail;
  public Customer $customer;
  public $loadDetail;
  public Collection $fileAttachments;
  private $isMassPaymentRequest;
  public $emailSubject;
  public $mffcPdfFilename;

  public function __construct(
    AdminCompanyDetail $adminCompanyDetail,
    Customer           $customer,
    $loadDetail,
    Collection         $fileAttachments,
    $isMassPaymentRequest = false,
    $emailSubject = null,
    $mffcPdfFilename = null // merged for factoring company
  ) {
    $this->adminCompanyDetail = $adminCompanyDetail;
    $this->customer = $customer;
    $this->loadDetail = $loadDetail;
    $this->fileAttachments = $fileAttachments;
    $this->isMassPaymentRequest = $isMassPaymentRequest;
    $this->emailSubject = $emailSubject;
    $this->mffcPdfFilename = $mffcPdfFilename;
  }

  public function build(): PaymentRequested {
    $mffcPdfFilename = $this->mffcPdfFilename;

    $factoringCompany = null;
    if (is_null($this->customer->no_factoring)) {
      $factoringCompany = $this->adminCompanyDetail->factoringCompanies->first();
    }

    if ($this->isMassPaymentRequest) {
      $tag = $this->loadDetail->first()->tag;
      $subject = 'Mass Invoice for ' . count($this->loadDetail) . ' Loads';
    } else {
      $subject = 'Invoice for Load ' . $this->loadDetail->refrence_id;
      $tag = $this->loadDetail->tag;
    }

    // Override Existing Subject If Payment Request Have emailSubject
    if ($this->emailSubject) {
      $subject = $this->emailSubject;
    }

    $sendTo = $this->customer->billing_email;
    $companyName = $this->customer->company_name;

    if (!empty($tag) && $tag->use_tag_for_billing) {
      $senderEmail = $tag->email;
      $senderCC = !empty($tag->billing_cc_emails) ? explode(',', $tag->billing_cc_emails) : [];
      $businessName = $tag->business_name;
    } else {
      $senderEmail = $this->adminCompanyDetail->email;
      $senderCC = !empty($this->adminCompanyDetail->billing_cc_emails) ? explode(',', $this->adminCompanyDetail->billing_cc_emails) : [];
      $businessName = $this->adminCompanyDetail->business_name;
    }

    if (!empty($factoringCompany)) {
      $sendTo = $factoringCompany->billing_email;
      $companyName = $factoringCompany->name;
    } else { // Only cc when not sending to factoring
      if (!empty($this->customer->billing_cc_emails)) {
        $senderCC = array_merge($senderCC, explode(',', $this->customer->billing_cc_emails));
      }
    }

    if ($sendTo) { // Some imported customers do not have an email.
      $this->to($sendTo);
    }

    if (!empty($senderCC)) {
      $this->cc(array_filter($senderCC));
    }

    $from = $businessName ?? config('constant.emails.fromName');
    return $this //->from($senderEmail, $businessName)
      ->from(config('constant.emails.fromEmail'), $from)
      ->replyTo($senderEmail, $businessName)
      ->cc($senderEmail)
      ->subject($subject)
      ->view('LoadPayment.payment-requested')
      ->with('businessName', $businessName)
      ->with('companyName', $companyName)
      ->with('loads', $this->loadDetail)
      ->with('isMassPaymentRequest', $this->isMassPaymentRequest)
      ->with('isMassInvoiceUseIndividualInvoices', $this->customer->mass_invoice_use_individual_invoices)
      ->with('isMergedInvoice', $this->customer->merge_invoice)
      ->when(!empty($mffcPdfFilename), function ($query) use ($mffcPdfFilename) {
        $invoiceFileName = $this->loadDetail->load_unique_id . '.pdf';
        $query->attachFromStorageDisk('s3', config('constant.s3.load_file') . $mffcPdfFilename, $invoiceFileName, [
          'mime' => 'application/pdf',
        ]);
      })
      ->when(empty($mffcPdfFilename), function ($query) {
        $query->when($this->fileAttachments->has('invoice'), function ($mail) {
          $invoiceFileName = 'invoice_' . str_replace('-', '_', Carbon::now('America/Los_Angeles')->toDateString()) . '.pdf';

          $mail->attachFromStorageDisk('s3', $this->fileAttachments['invoice'], $invoiceFileName, [
            'mime' => 'application/pdf',
          ]);
        })
          ->when($this->fileAttachments->has('proof_of_deliveries'), function ($mail) {
            // Here pods actually contains both POD and lumper.
            $this->fileAttachments['proof_of_deliveries']->each(function ($pod) use ($mail) {
              $fileAliasName = $pod['image_alias'] . '.pdf';
              if ($pod['image_alias'] == "load_pod" || $pod['image_alias'] == "load_pod_admin") {
                $fileAliasName = 'POD.pdf';
              }

              $mail->attachFromStorageDisk('s3', $pod['s3_path'], $fileAliasName, [
                'mime' => 'application/pdf',
              ]);
            });
          })
          ->when($this->fileAttachments->has('rate_confirmations'), function ($mail) {
            $this->fileAttachments['rate_confirmations']->each(function ($pod) use ($mail) {
              $fileAliasName = 'Rate_con.pdf';

              $mail->attachFromStorageDisk('s3', $pod['s3_path'], $fileAliasName, [
                'mime' => 'application/pdf',
              ]);
            });
          });
      });
  }
}
