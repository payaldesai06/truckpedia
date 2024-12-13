<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class ExportEquipmentListReport implements FromCollection, WithHeadings, WithEvents {
  /**
   * @return \Illuminate\Support\Collection
   */
  private $equipmentListReports;

  public function __construct($equipmentListReports) {
    $this->equipmentListReports = $equipmentListReports;
  }

  public function collection() {
    $data = [];
    // dd($this->transactions);
    foreach ($this->equipmentListReports as $key => $value) {

      $data[$key]['number'] = $value->number ?? "";
      $data[$key]['type'] = $value->type ?? "";
      $data[$key]['licence_plate'] = $value->licence_plate;
      $data[$key]['licence_plate_expiry'] = $value->licence_plate_expiry ?? "";
      $data[$key]['inspection_expiry'] = $value->inspection_expiry ?? "";
      $data[$key]['status'] = $value->status ?? "";
      $data[$key]['ownership'] = $value->ownership ?? "";
    }
    return collect($data);
  }

  public function headings(): array {

    return [
      'Equipment No.',
      'Type',
      'VIN',
      'Licence Plate Expiry',
      'Inspection Expiry',
      'Status',
      'Ownership'
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
