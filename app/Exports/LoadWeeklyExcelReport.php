<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class LoadWeeklyExcelReport implements FromCollection, WithHeadings, WithEvents {
  /**
   * @return Collection
   */
  private $loads;

  public function __construct($loads) {
    $this->loads = $loads;
  }

  /**
   * @return Collection
   */
  public function collection(): Collection {
    $data = [];
    foreach ($this->loads as $key => $load) {
      $data[$key]['status'] = $load['status'];
      $data[$key]['loadUniqueId'] = $load['loadUniqueId'];
      $data[$key]['sequence'] = $load['sequence'];
      $data[$key]['billToCode'] = $load['billToCode'];
      $data[$key]['totalAmount'] = $load['totalAmount'];
      $data[$key]['shippingDate'] = $load['shippingDate'];
      $data[$key]['deliveryDate'] = $load['deliveryDate'];
      $data[$key]['weight'] = $load['weight'];
      $data[$key]['totalMiles'] = $load['totalMiles'];
      $data[$key]['invoiceGeneratedAt'] = $load['invoiceGeneratedAt'];
      $data[$key]['truck'] = $load['truck'];
      $data[$key]['trailer'] = $load['trailer'];
      $data[$key]['referenceId'] = $load['referenceId'];
      $data[$key]['internalReference'] = $load['internalReference'];
      $data[$key]['item'] = $load['item'];
      $data[$key]['description'] = $load['description'];
      $data[$key]['quantity'] = $load['quantity'];
      $data[$key]['rate'] = $load['rate'];
      $data[$key]['charge'] = $load['charge'];
      $data[$key]['rateUnit'] = $load['rateUnit'];
      $data[$key]['customer'] = $load['customer'];
      $data[$key]['shipperName'] = $load['shipperName'];
      $data[$key]['shipperAddress1'] = $load['shipperAddress1'];
      $data[$key]['shipperAddress2'] = $load['shipperAddress2'];
      $data[$key]['shipperCity'] = $load['shipperCity'];
      $data[$key]['shipperState'] = $load['shipperState'];
      $data[$key]['shipperZip'] = $load['shipperZip'];
      $data[$key]['receiverName'] = $load['receiverName'];
      $data[$key]['receiverAddress1'] = $load['receiverAddress1'];
      $data[$key]['receiverAddress2'] = $load['receiverAddress2'];
      $data[$key]['receiverCity'] = $load['receiverCity'];
      $data[$key]['receiverState'] = $load['receiverState'];
      $data[$key]['receiverZip'] = $load['receiverZip'];
      $data[$key]['laneCode'] = $load['laneCode'];
    }
    return collect($data);
  }

  /**
   * @return string[]
   */
  public function headings(): array {
    return [
      'status',
      'ivh_invoicenumber',
      'ivd_sequence',
      'ivh_billto',
      'ivh_totalcharge',
      'ivh_shipdate',
      'ivh_deliverydate',
      'ivh_totalweight',
      'ivh_totalmiles',
      'ivh_billdate',
      'ivh_tractor',
      'ivh_trailer',
      'ivh_ref_number',
      'ivh_internal_reference',
      'line_item',
      'line_description',
      'ivd_quantity',
      'ivd_rate',
      'ivd_charge',
      'ivd_rateunit',
      'cmd_name',
      'shipper_name',
      'shipper_address_1',
      'shipper_address_2',
      'shipper_city',
      'shipper_state',
      'shipper_zip',
      'consignee_name',
      'consignee_address1',
      'consignee_address_2',
      'consignee_city',
      'consignee_state',
      'consignee_zip',
      'GEA Lane',
    ];
  }

  /**
   * @return mixed
   */
  public function registerEvents(): array {
    return [
      AfterSheet::class => function (AfterSheet $event) {
        $event->sheet->autoSize();
        $event->sheet->getDelegate()->freezePane('A2');
        $event->sheet->getDelegate()->getStyle('A:Z')
          ->getAlignment()
          ->setHorizontal(Alignment::HORIZONTAL_LEFT);
      },
    ];
  }
}
