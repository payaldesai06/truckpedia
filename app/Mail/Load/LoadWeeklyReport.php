<?php

namespace App\Mail\Load;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LoadWeeklyReport extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  protected $adminCompanyDetail;
  protected $toAddresses;
  protected $directoryPath;
  protected $fileName;
  protected $startOfLastWeek;
  protected $endOfLastWeek;


  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(
    $adminCompanyDetail,
    $toAddresses,
    $directoryPath,
    $fileName,
    $startOfLastWeek,
    $endOfLastWeek
  ) {
    $this->adminCompanyDetail = $adminCompanyDetail;
    $this->toAddresses = $toAddresses;
    $this->directoryPath = $directoryPath;
    $this->fileName = $fileName;
    $this->startOfLastWeek = $startOfLastWeek;
    $this->endOfLastWeek = $endOfLastWeek;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): LoadWeeklyReport {
    $company = $this->adminCompanyDetail;
    $businessName = $company->business_name ?? '';
    $fromName = config('constant.emails.fromName');
    $path = "{$this->directoryPath}{$this->fileName}";
    return $this->from(config('constant.emails.fromEmail'), $fromName) // $businessName
      ->to($this->toAddresses)
      ->bcc(['zbu@ezpapel.com'])
      ->subject($fromName . ' Weekly Load Report: ' . $this->startOfLastWeek . ' to ' . $this->endOfLastWeek)
      ->attachData(getImageContentS3($path), $this->fileName)
      ->view('Load.weekly-report', [
        'startDate' => $this->startOfLastWeek,
        'endDate' => $this->endOfLastWeek,
        'businessName' => $businessName
      ]);
  }
}
