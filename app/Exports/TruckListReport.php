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

class TruckListReport implements FromCollection, WithHeadings, WithEvents, WithStyles {

  /**
   * @return Collection
   */
  private $truckReport;

  public function __construct($truckReport) {
    $this->truckReport = $truckReport;
  }

  /**
   * Create a collection
   *
   * @return Collection
   */
  public function collection(): Collection {
    $data = [];
    foreach ($this->truckReport as $truck) {
      $fullName = $truck->driverDetails->pluck('user')->map(function ($user) {
        $firstName = $user->first_name ?? '';
        $lastName = $user->last_name ?? '';
        return trim("{$firstName} {$lastName}");
      })->filter()->implode(', ') ?? '';

      $data[] = [
        'truckNumber' => $truck->number,
        'driverName' => $fullName,
        'year' => $truck->year ?? '',
        'make' => $truck->make ?? '',
        'vin' => $truck->truck_vin ?? '',
        'tag' => $truck->tags->pluck('business_name')->implode(', ') ?? '',
        'licensePlate' => $truck->licence_plate ?? '',
        'status' => ucwords($truck->status)
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
      'Truck Number',
      'Driver Name',
      'Year',
      'Make',
      'VIN',
      'Tag',
      'License Plate',
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
