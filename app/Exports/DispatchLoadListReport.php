<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class DispatchLoadListReport implements FromCollection, WithHeadings, WithEvents {
  /**
   * @return \Illuminate\Support\Collection
   */
  private $loads;
  private static $formatedLoadStatus = [
    'open' => "Open",
    'assign' => "Assigned",
    'in_transit' => "In Transit",
    'delivered' => "Delivered",
    'invoice_created' => "Invoice Generated",
    'invoice_sent' => "Payment Requested",
    'invoice_paid' => "Paid",
  ];

  public function __construct($loads) {
    $this->loads = $loads;
  }

  public function collection() {
    $data = [];
    foreach ($this->loads as $key => $value) {
      $pickupNumber = trim(implode(' ',$value->loadShippers->pluck('shipper_reference')->toArray()));
      $deliveryNumber = trim(implode(' ',$value->loadReceivers->pluck('receiver_reference')
        ->toArray()));
      $loadShipper = $value->loadShippers->first();
      $loadReceiver = $value->loadReceivers->last();
      $driverNames = $value->loadDrivers->pluck('driverAsUsers')->flatten()
        ->pluck('driverDetail')->pluck('name')->toArray();

      $data[$key]['load_unique_id'] = $value->load_unique_id ?? "";
      $data[$key]['refrence_id'] = $value->refrence_id ?? "";
      $data[$key]['shipping_date'] = $loadShipper
        ->shipping_date ? $loadShipper->shipping_date : '';
      $data[$key]['delivery_date'] = $loadReceiver
        ->delivery_date ? $loadReceiver->delivery_date : '';
      $data[$key]['customer'] = $value->customer->company_name ?? "";
      $data[$key]['pick_up'] = $loadShipper->city . ',' . $loadShipper->state;
      $data[$key]['delivery'] = $loadReceiver->city . ',' . $loadReceiver->state;
      $data[$key]['drivers'] = implode(',', $driverNames) ?? '';
      $data[$key]['notes'] = $value->dispatcher_notes ?? '';
      $data[$key]['load_status'] = self::$formatedLoadStatus[$value->status] ?? '';
      $data[$key]['pickupNumber'] = $pickupNumber ?? '';
      $data[$key]['deliveryNumber'] = $deliveryNumber ?? '';
    }
    return collect($data);
  }

  public function headings(): array {
    return [
      'Load #',
      'Load Reference',
      'Ship Date',
      'Del. Date',
      'Customer',
      'Pick Up',
      'Delivery',
      'Drivers',
      'Notes',
      'Load Status',
      'Pickup #',
      'Delivery #'
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
