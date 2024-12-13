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

class TrailerListReport implements FromCollection, WithHeadings, WithEvents, WithStyles {

  /**
   * @return Collection
   */
  private $trailerReport;

  public function __construct($trailerReport) {
    $this->trailerReport = $trailerReport;
  }

  /**
   * Create a collection
   * @return Collection
   */
  public function collection(): Collection {
    return collect($this->trailerReport);
  }

  /**
   * Define the Heading of Column
   * @return string[]
   */
  public function headings(): array {
    return [
      'Trailer Number',
      'Driver Name',
      'Year',
      'Make',
      'VIN',
      'Tag',
      'License Plate',
      'Latest Location',
      'Latest Status',
      'Latest Load',
      'Latest Load Shipper',
      'Latest Load Receiver',
      'Latest Update Date',
      // 'Latest Load Driver'
      'Status'
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
