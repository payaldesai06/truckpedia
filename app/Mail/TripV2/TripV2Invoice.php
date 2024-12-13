<?php

namespace App\Mail\TripV2;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TripV2Invoice extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $trip;
  protected $sendTo; // array.
  protected $descriptions;
  protected $toBusinessName;
  protected $templateLoadDetails;
  protected $templateTripDetails;
  protected $ccEmails;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(
    $trip,
    $sendTo,
    $descriptions,
    $toBusinessName,
    $templateLoadDetails,
    $templateTripDetails,
    $ccEmails
  ) {
    $this->trip = $trip;
    $this->sendTo = $sendTo;
    $this->descriptions = $descriptions;
    $this->toBusinessName = $toBusinessName;
    $this->templateLoadDetails = $templateLoadDetails;
    $this->templateTripDetails = $templateTripDetails;
    $this->ccEmails = $ccEmails;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): TripV2Invoice {
    $company = $this->trip->company ?? '';
    $senderEmail = $company->email ?? '';
    $ccEmails = $this->ccEmails ?? [];
    // $senderCC = $company->billing_cc_emails ? explode(',', $company->billing_cc_emails) : [];
    $fromBusinessName = $company->business_name ?? config('constant.emails.fromName');
    if (!empty($senderEmail)) {
      $ccEmails[] = $senderEmail;
    }
    $storageFileName = $this->trip->invoice_storage_file_name ?? '';
    $filePath = config('constant.s3.tripInvoices') . $storageFileName ?? '';
    if (!empty($this->sendTo)) {
      $this->to($this->sendTo);
    }
    if (!empty($ccEmails)) {
      $this->cc($ccEmails);
    }
    return $this
      ->from(config('constant.emails.fromEmail'), $fromBusinessName)
      ->replyTo($senderEmail, $fromBusinessName)
      // ->cc($senderCC)
      ->subject('Invoice for Trip #' . $this->trip->trip_number)
      ->attachFromStorageDisk('s3', $filePath, 'trip-invoice.pdf')
      ->view('TripV2.tripEmailInvoice', [
        'trip' => $this->trip,
        'descriptions' => $this->descriptions,
        'toBusinessName' => $this->toBusinessName,
        'templateLoadDetails' => $this->templateLoadDetails,
        'templateTripDetails' => $this->templateTripDetails
      ]);
  }
}
