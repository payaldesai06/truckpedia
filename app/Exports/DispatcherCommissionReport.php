<?php

namespace App\Exports;

use App\Services\DispatcherCommissionHelper;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class DispatcherCommissionReport implements FromCollection, WithHeadings, WithEvents {
  /**
   * @return \Illuminate\Support\Collection
   */
  private $equipmentListReports;

  public function __construct($equipmentListReports) {
    $this->equipmentListReports = $equipmentListReports;
  }

  public function collection() {
    $data = [];
    foreach ($this->equipmentListReports as $key => $value) {
      $customer = $value->customer;
      $result = DispatcherCommissionHelper::calculateCommissions($value);

      $data[$key]['load_unique_id'] = $value->load_unique_id ?? "";
      $data[$key]['customer_name'] = $customer->company_name ?? "";
      $data[$key]['dispatcher_name'] = $result->dispatcher_name ?? "";
      $data[$key]['shipping_date'] = $value->i_start_date ?? "";
      $data[$key]['delivery_date'] = $value->i_end_date ?? "";
      $data[$key]['payment_status'] = $value->payment_status == 'paid' ? 'Paid' : 'Pending' ?? "";
      $data[$key]['commission_on'] = $result->commission_on ?? "";
      $data[$key]['commission_fractional'] = $result->commission_fractional * 100 ?? 0;
      $data[$key]['rate'] = $result->rates ?? 0;
      $data[$key]['rate_per_mile'] = $result->rate_per_mile ?? 0;
      $data[$key]['total_commission'] = $result->total_commission ?? 0;
      $data[$key]['dispatcher_paid'] = $value->dispatcher_paid == true ? 'Paid' : 'Pending' ?? "";
    }
    return collect($data);
  }

  public function headings(): array {
    return [
      'Load #',
      'Customer',
      'Dispatcher',
      'Ship Date',
      'Del Date',
      'Payment Status',
      'Commission On',
      'Commission %',
      'Rates',
      'RPM',
      'Commission',
      'Commission Status',
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
