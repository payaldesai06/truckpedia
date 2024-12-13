<?php

namespace App\Http\Resources\InvoiceV2;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceV2Resource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    $singleLoad = array_search('singleLoad', config('constant.invoices.type'));
    $isSingleLoad = !empty($request->filter['type']) && $request->filter['type'] == $singleLoad;
    if ($isSingleLoad) {
      /* It is load invoice */
      $timezone = $this->timezone ?? '';
      $carbonIssueDate = !empty($this->invoice_generated_at) ? convertUtcTimestampToLocalCarbonObject($this->invoice_generated_at, $timezone) : null;
      $issueDate = !empty($carbonIssueDate) ? $carbonIssueDate->toDateString() : '';
      if ($this->isCompanyShipperBroker) {
        $amount = $this->third_party_carrier_total_amount ?? null;
        $customerId = $this->third_party_carrier_as_customer_id ?? null;
        $customerName = $this->thirdPartyCarrier->company_name ?? '';
        $customerEmail = $this->thirdPartyCarrier->billing_email ?? '';
        $paymentTermsDay = $this->thirdPartyCarrier->payment_terms_day ?? null;
        $customerNoFactoring = null;
      } else {
        $amount = $this->total_amount ?? null;
        $customerId = $this->customer_id ?? null;
        $customerName = $this->customer->company_name ?? '';
        $customerEmail = $this->customer->billing_email ?? '';
        $paymentTermsDay = $this->customer->payment_terms_day ?? null;
        $customerNoFactoring = $this->customer->no_factoring ?? null;
      }
      if (!is_null($paymentTermsDay) && !empty($issueDate)) {
        $dueDate = $carbonIssueDate->addDays($paymentTermsDay)->toDateString();
      }
      $paymentOption = $this->payment_option ? config('constant.load.paymentOption')[$this->payment_option] :
        null;
      $type = config('constant.invoices.type.singleLoad');
      $status = !empty($this->status) ? $this->status : '';
      $paidAmount = $this->paid_amount ?? null;
      if (is_null($this->paid_amount) && $status == config('constant.status.load.invoice_paid')) {
        $paidAmount = $amount;
      }
      $invoiceNumber = $this->load_unique_id ?? '';
      $url = !empty($this->invoice_file_name) ? getImage($this->invoice_file_name, config('constant.s3.load_invoice')) : '';
    } else {
      /* It is manual invoice */
      $dueDate = !empty($this->due_date) ? $this->due_date->toDateString() : '';
      $issueDate = !empty($this->issue_date) ? $this->issue_date->toDateString() : '';
      $amount = $this->balance_due ?? null;
      $type = config('constant.invoices.type.manual');
      $status = !empty($this->status) ? config('constant.status.invoice')[$this->status] : '';
      $invoiceNumber = $this->invoice_number ?? '';
      $url = !empty($this->storage_file_name) ? getImage($this->storage_file_name, config('constant.s3.load_invoice')) : '';
      $customerId = $this->customer_id ?? null;
      $customerName = $this->customer->company_name ?? '';
      $customerEmail = $this->customer->billing_email ?? '';
      $customerNoFactoring = null;
    }

    $ret = [
      'type' => $type ?? '',
      'id' => $this->id ?? null,
      'invoiceNumber' => $invoiceNumber ?? '',
      'status' => $status ?? '',
      'customerId' => $customerId,
      'customerName' => $customerName,
      'customerEmail' => $customerEmail,
      'customerNoFactoring' => $customerNoFactoring,
      'amount' => $amount,
      'issueDate' => $issueDate,
      'dueDate' => $dueDate ?? '',
      'url' => $url ?? ''
    ];

    if ($isSingleLoad) {
      $ret['loadReference'] = $this->refrence_id ?? null;
      $ret['firstShipDate'] = $this->loadShippers->first()->shipping_date ?? '';
      $ret['lastDelDate'] = $this->loadReceivers->last()->delivery_date ??  '';
      $ret['paidAmount'] = $paidAmount ?? null;
      $ret['paymentOption'] = $paymentOption ?? null;
    } else {
      $ret['salesRep'] = $this->customer->sales_rep ?? null;
    }
    return $ret;
  }
}
