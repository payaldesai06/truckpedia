<?php

namespace App\Exports;

use App\Services\DriverPayHelper;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class LoadDriverReport implements FromCollection, WithHeadings, WithStyles, WithEvents {
  /**
   * @return Collection
   */
  private $driverReport;

  public function __construct($driverReport) {
    $this->driverReport = $driverReport;
  }

  public function collection(): Collection {
    $data = [];
    foreach ($this->driverReport as $key => $value) {
      $driverPayAmount = 0;
      $loadDrivers = $value->loadDrivers->pluck('driverAsUsers')->flatten()
        ->pluck('driverDetail') ?? [];

      // Sometimes truckers encounter weird situation that a driver shows up twice.
      // For example driver first handover then do the load again.
      $loadDrivers = $loadDrivers->unique('user_id');

      if (count($loadDrivers) && request()->has('driverId')) {
        $loadDrivers = $loadDrivers->where('user_id', request('driverId'));
      }

      if (!$loadDrivers->isEmpty()) {
        foreach ($loadDrivers as $loadDriver) {
          $driverPayAmount += (new DriverPayHelper())->calculateLoadDriverPaymentFromPercentage($value, $loadDriver);
        }
      }

      $data[$key]["driver_name"] = implode(', ', $loadDrivers->pluck('name')->toArray()) ?? "";
      $data[$key]["load_number"] = $value->load_unique_id ?? "";
      $data[$key]["reference_id"] = $value->refrence_id ?? "";
      $data[$key]["customer_name"] = $value->customer->company_name ?? "";
      $data[$key]["ship_date"] = !empty($value->loadShippers) ? ($value->loadShippers->first()->shipping_date ?? "") : "";
      $data[$key]["delivery_date"] = !empty($value->loadReceivers) ? ($value->loadReceivers->last()->delivery_date ?? "") : "";
      $data[$key]["freight_weight"] = !empty($value->loadShippers) ? ($value->loadShippers->sum('freight_weight') ?? "") : "";
      $data[$key]["freight_qty"] = !empty($value->loadShippers) ? ($value->loadShippers->sum('freight_qty') ?? "") : "";
      $data[$key]["total_amount"] = $value->total_amount ?? "";
      $data[$key]["driver_pay"] = $driverPayAmount;
    }

    $data[] = [
      "driver_name" => "",
    ];

    $data[] = [
      "driver_name" => "Total",
      "load_number" => "",
      "reference_id" => "",
      "customer_name" => "",
      "ship_date" => "",
      "delivery_date" => "",
      "freight_weight" => "",
      "freight_qty" => collect($data)->sum('freight_qty'),
      "total_amount" => collect($data)->sum('total_amount'),
      "driver_pay" => collect($data)->sum('driver_pay')
    ];

    return collect($data);
  }

  public function headings(): array {
    return [
      "Driver Name",
      "Load Number",
      "Reference #",
      "Customer",
      "Ship Date",
      // I did not use "Delivery Date" because it would lead to 
      // a wider Excel column than "Ship Date".
      "Del. Date",
      "Weight",
      "Quantity",
      "Amount",
      "Driver Pay"
    ];
  }

  public function styles(Worksheet $sheet) {
    return [
      1 => ['font' => ['bold' => true]]
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
