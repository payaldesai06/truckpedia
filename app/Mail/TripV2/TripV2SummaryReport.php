<?php

namespace App\Mail\TripV2;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TripV2SummaryReport extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $pdfPath;
  protected $companyName;
  protected $sendTo; // array.

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(
    $pdfPath,
    $companyName,
    $sendTo
  ) {
    $this->pdfPath = $pdfPath;
    $this->companyName = $companyName;
    $this->sendTo = $sendTo;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): TripV2SummaryReport {
    $filePath = config('constant.s3.tripInvoices') . $this->pdfPath ?? '';
    if (!empty($this->sendTo)) {
      $this->to($this->sendTo);
    }
    return $this
      ->from(config('constant.emails.fromEmail'), config('constant.emails.fromName'))
      ->subject('Driver Payment (Trip) Summary Report')
      // TODO: need startDate and endDate here in subject.
      // Sample: Driver Payment (Trip) Summary Report for 06/10 to 06/23.
      ->attachFromStorageDisk('s3', $filePath, 'Trip_Summary_Report.pdf')
      ->view('TripV2.tripEmailSummaryReport', [
        'companyName' => $this->companyName,
      ]);
  }
}
