<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class DropTrailerReportExport implements FromCollection, WithHeadings, WithEvents {
  private \Illuminate\Database\Eloquent\Collection $dropTrailerReport;

  public function __construct(\Illuminate\Database\Eloquent\Collection $dropTrailerReport) {
    $this->dropTrailerReport = $dropTrailerReport;
  }

  public function collection(): \Illuminate\Support\Collection {
    $allDriverIds = $this->dropTrailerReport
      ->pluck('driver_ids')
      ->map(fn ($id) => explode(',', $id))
      ->flatten()
      ->unique()
      ->toArray();

    $drivers = User::with('driverDetail')
      ->whereIn('id', $allDriverIds)
      ->get();

    return $this->dropTrailerReport->map(function ($loadDriver) use ($drivers) {
      $loadUniqueId = $loadDriver->loadDetail->load_unique_id;
      // Users can click drop trailer before a trailer is assigned in load UI.
      $trailerNumber = $loadDriver->trailer->number ?? '';
      $driverIds = explode(',', $loadDriver->driver_ids);
      $driverNames = implode(
        ',',
        $drivers->whereIn('id', $driverIds)->pluck('driverDetail.name')->toArray()
      );
      $receiver = $loadDriver->loadDetail->loadReceivers->sortByDesc('delivery_date')->last();

      return [
        'load_id' => $loadUniqueId ?? '',
        'trailer_number' => $trailerNumber ?? '',
        'driver_name' => $driverNames ?? '',
        'delivery_date' => $receiver ? $receiver->delivery_date : '',
        'delivery_location' => $receiver ? "{$receiver->city}, {$receiver->state}" : '',
        'is_trailer_picked_up' => $loadDriver->is_trailer_picked_up == 1 ? 'Yes' : 'No',
      ];
    });
  }

  public function headings(): array {
    return [
      'Load ID',
      'Trailer Number',
      'Driver Name',
      'Delivery Date',
      'Delivery Location',
      'Already Picked Up',
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
