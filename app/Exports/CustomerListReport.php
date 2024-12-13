<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithStyles;

class CustomerListReport implements FromCollection, WithHeadings, WithEvents, WithStyles {

  /**
   * @return Collection
   */
  private $customerReport;

  public function __construct($customerReport) {
    $this->customerReport = $customerReport;
  }

  /**
   * Create a collection
   *
   * @return Collection
   */
  public function collection(): Collection {
    $data = [];
    foreach ($this->customerReport as $customer) {
      $data[] = [
        'companyName' => $customer->company_name,
        'customerType' => ucwords($customer->type),
        'status' => ucwords($customer->status),
        'internalCustomer' => $customer->internal == 1 ? 'Yes' : 'No',
        'billToCode' => $customer->bill_to_codes ?? '',
        'mcNumber' => $customer->mc_number ?? '',
        'address' => $customer->address ?? '',
        'city' => $customer->city ?? '',
        'state' => $customer->state ?? '',
        'zipCode' => $customer->zip_code ?? '',
        'primaryContact' => $customer->primary_contact ?? '',
        'phone' => $customer->phone_number ?? '',
        'email' => $customer->email ?? '',
        'ccEmails' => $customer->cc_emails ?? '',
        'notes' => $customer->notes ?? '',
        'salesRep' => $customer->sales_rep ?? '',
        'shippingCarrierAcct' => $customer->shipping_carrier_acct ?? '',
        'billingAddress' => $customer->billing_address ?? '',
        'billingState' => $customer->billing_state ?? '',
        'billingCity' => $customer->billing_city ?? '',
        'billingZipCode' => $customer->billing_zip_code ?? '',
        'billingContact' => $customer->billing_contact ?? '',
        'billingPhone' => $customer->billing_phone_number ?? '',
        'billingEmail' => $customer->billing_email ?? '',
        'billingCcEmails' => $customer->billing_cc_emails ?? '',
        'paymentTerms' => $customer->payment_terms_day ?? ''
      ];
    }
    return collect($data);
  }

  /**
   * Define the Heading of Column
   * @return string[]
   */
  public function headings(): array {
    return [
      'Company Name',
      'Customer Type',
      'Status',
      'Internal Customer',
      'Bill To Code',
      'MC #',
      'Address',
      'City',
      'State',
      'Zip/Postal',
      'Primary Contact',
      'Phone',
      'Email',
      'CC Emails',
      'Notes',
      'Sales Rep',
      'Shipping Carrier Account',
      'Billing Address',
      'Billing City',
      'Billing State',
      'Billing Zip/Postal',
      'Billing Contact',
      'Billing Phone',
      'Billing Email',
      'Billing CC Emails',
      'Payment Terms (No. of Days)'
    ];
  }

  /**
   * @return mixed
   */
  public function registerEvents(): array {
    return [
      AfterSheet::class => function (AfterSheet $event) {
        $event->sheet->autoSize();
        $event->sheet->getDelegate()->getStyle('A:Z')
          ->getAlignment()
          ->setHorizontal(Alignment::HORIZONTAL_LEFT);
      },
    ];
  }

  /**
   * Style of worksheet
   * @param Worksheet $sheet
   * @return array[]
   */
  public function styles(Worksheet $sheet) {
    return [
      1 => ['font' => ['bold' => true]]
    ];
  }
}
