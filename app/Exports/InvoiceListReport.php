<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class InvoiceListReport implements FromCollection, WithHeadings, WithStyles, WithEvents {
  /**
   * @return Collection
   */
  private $invoices;
  private $maxItems;

  public function __construct($invoices, $maxItems) {
    $this->invoices = $invoices;
    $this->maxItems = $maxItems;
  }

  public function collection(): Collection {
    $data = [];
    foreach ($this->invoices as $invoice) {
      $row = [
        'customer' => !empty($invoice->customer) ? $invoice->customer->company_name : '',
        'invoice' => $invoice->invoice_number ?? '',
        'issueDate' => !empty($invoice->issue_date) ?
          $invoice->issue_date->format(config('constant.shortDateFormat')) : '',
        'dueDate' => !empty($invoice->issue_date) ?
          $invoice->due_date->format(config('constant.shortDateFormat')) : '',
        'shippingAddress' => $invoice->shipping_address ?? '',
        'amount' => !empty($invoice->balance_due) ?
          getCurrencyInNumberFormatWithDollarPrefix($invoice->balance_due) : '',
      ];
      if (!empty($invoice->invoiceItems)) {
        foreach ($invoice->invoiceItems as $index => $item) {
          $row['item ' . ($index + 1)] = $item->name .
            ' ' . getCurrencyInNumberFormatWithDollarPrefix($item->amount) .
            ' x ' . round($item->qty);
        }
      }
      $data[] = $row;
    }
    return collect($data);
  }

  /**
   * Define the Heading of Column
   * @return string[]
   */
  public function headings(): array {
    $headings = [
      "Customer",
      "Invoice #",
      "Issue Date",
      "Due Date",
      "Shipping Address",
      "Amount",
    ];
    if (!empty($this->maxItems)) {
      for ($i = 1; $i <= $this->maxItems; $i++) {
        array_push($headings, ('Item ' . $i));
      }
    }
    return $headings;
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
}
