<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class CustomerRevenueReport implements FromCollection, WithHeadings, WithEvents {
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

      $data[$key]['customer'] = $value->customer->company_name ?? "";
      $data[$key]['total_revenue'] = $value->total_revenue ?? "";
      $data[$key]['percentage_of_revenue'] = $value->percentage_of_revenue ?? "";
      $data[$key]['number_of_loads'] = $value->number_of_loads ?? "";
      $data[$key]['load_total_miles'] = $value->load_total_miles ?? "";
      $data[$key]['revenue_per_mile'] = $value->revenue_per_mile ?? "";
    }
    return collect($data);
  }

  public function headings(): array {

    return [
      'Customer Name',
      'Total Revenue',
      'Percentage of Revenue',
      'No. of Loads',
      'Total Miles',
      'Revenue Per Mile'
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
