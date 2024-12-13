<?php

namespace App\Exports;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class DriverPaymentReport implements FromCollection, WithHeadings, WithEvents {
  /**
   * @return Collection
   */
  private $driverPaymentReport;
  private $isBasicReport;

  public function __construct($driverPaymentReport, $isBasicReport) {
    $this->driverPaymentReport = $driverPaymentReport;
    $this->isBasicReport = filter_var($isBasicReport, FILTER_VALIDATE_BOOLEAN);
  }

  public function collection(): Collection {
    $data = [];
    if ($this->isBasicReport) {
      foreach ($this->driverPaymentReport as $key => $value) {
        $data[$key]['driver_name'] = $value->driver->driverDetail->name ?? "";
        $data[$key]['trip_number'] = $value->trip_id ?? "";
        $data[$key]['driver_pay_types'] = ucwords(str_replace('_', ' ', $value->driver_pay_types)) ?? '';
        $data[$key]['amount'] = $value->total_payment ?? "";
      }
    } else {
      foreach ($this->driverPaymentReport as $key => $value) {
        $data[$key]['driver_name'] = $value->driver->driverDetail->name ?? "";
        $data[$key]['trip_number'] = $value->trip_id ?? "";
        $data[$key]['driver_pay_types'] = ucwords(str_replace('_', ' ', $value->driver_pay_types)) ?? '';
        $data[$key]['trip_start_time'] = $value->trip->trip_start_time ? Carbon::parse($value->trip->trip_start_time)->format('H:i') : '';
        $data[$key]['trip_end_time'] = $value->trip->trip_end_time ? Carbon::parse($value->trip->trip_end_time)->format('H:i') : '';
        $data[$key]['hourly_rate'] = $value->hourly_rate ?? '';
        $data[$key]['total_hours'] = $value->trip->total_hours ?? '';
        $data[$key]['total_miles'] = $value->trip->total_miles ?? "";
        $data[$key]['pay_per_stop_rate'] = $value->pay_per_stop_rate ?? '';
        $data[$key]['per_mile_charges'] = $value->per_mile_charges ?? '';
        $data[$key]['stop_charge'] = $value->stop_charge ?? '';
        $data[$key]['detention_rate'] = $value->detention_rate ?? '';
        $data[$key]['detention_charge'] = $value->detention_charge ?? '';
        $data[$key]['layover_rate'] = $value->layover_rate ?? '';
        $data[$key]['layover_charge'] = $value->layover_charge ?? '';
        $data[$key]['load_pay_percentage_of'] = ucfirst(str_replace('_', ' ', $value->load_pay_percentage_of)) ?? '';
        $data[$key]['load_pay_percentage'] = $value->load_pay_percentage ?? '';
        $data[$key]['reimbursement'] = $value->reimbursement ?? '';
        $data[$key]['amount'] = $value->total_payment ?? "";
      }
    }
    return collect($data);
  }

  public function headings(): array {
    if ($this->isBasicReport) {
      return [
        'Driver Name',
        'Trip Number',
        'Driver Pay Type',
        'Amount'
      ];
    } else {
      return [
        'Driver Name',
        'Trip Number',
        'Driver Pay Type',
        'Trip Start Time',
        'Trip End Time',
        'Hourly Rate',
        'Total Hours',
        'Total Miles',
        'Pay Per Stop Rate',
        'Per Mile Charge',
        'Stop Charge',
        'Detention Rate',
        'Detention Charge',
        'Layover Rate',
        'Layover Charge',
        'Load Pay Percentage Of',
        'Load Pay Percentage',
        'Reimbursement',
        'Total Payment'
      ];
    }
  }

  public function registerEvents(): array {
    return [
      AfterSheet::class => function (AfterSheet $event) {
        $event->sheet->autoSize();
      },
    ];
  }
}
