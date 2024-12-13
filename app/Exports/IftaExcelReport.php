<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class IftaExcelReport implements FromCollection, WithHeadings, WithEvents {
  /**
   * @return \Illuminate\Support\Collection
   */
  private $iftaExcelReport;

  public function __construct($iftaExcelReport) {
    $this->iftaExcelReport = $iftaExcelReport;
  }

  public function collection() {
    $jurisdictions = $this->iftaExcelReport['jurisdictions'];
    return collect($jurisdictions);
  }

  public function headings(): array {
    return [
      'State',
      'Taxable Miles',
      'Gallons Paid',
      'Gallons Consumed',
      'Gallons Net Taxable',
      'State Tax Rate',
      'State Tax Paid',
      'State Tax Consumed',
      'State Tax Due'
    ];
  }

  public function registerEvents(): array {
    return [
      AfterSheet::class => function (AfterSheet $event) {
        $event->sheet->autoSize();
      },
    ];
  }
}
