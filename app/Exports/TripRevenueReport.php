<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class TripRevenueReport implements FromCollection, WithHeadings, WithEvents {
  private $equipmentListReports;

  public function __construct($equipmentListReports) {
    $this->equipmentListReports = $equipmentListReports;
  }

  public function collection() {
    $data = [];

    foreach ($this->equipmentListReports as $key => $value) {
      $data[$key]['trip_id'] = $value->id ?? "";
      $data[$key]['truck_numbers'] = $value->truck_numbers ?? "";
      $data[$key]['total_miles'] = $value->total_miles ?? "";
      $data[$key]['total_income'] = $value->total_income ?? "";
      $data[$key]['total_expenses'] = $value->total_expenses ?? "";
      $data[$key]['driver_pay'] = $value->driver_pay ?? "";
      $data[$key]['rate_per_mile'] = $value->rate_per_mile ?? "";
      $data[$key]['cost_per_mile'] = $value->cost_per_mile ?? "";
      $data[$key]['profit_per_mile'] = $value->profit_per_mile ?? "";
    }

    return collect($data);
  }

  public function headings(): array {
    return [
      'Trip Id',
      'Truck Numbers',
      'Trip Miles', // total miles
      'Trip Revenue', // total income
      'Trip Expenses', // total expenses
      'Driver Pay',
      'Rate Per Mile',
      'Cost Per Mile',
      'Profit Per Mile'
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
