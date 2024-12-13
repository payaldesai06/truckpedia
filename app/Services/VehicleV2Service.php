<?php

namespace App\Services;

use App\Models\Truck;
use App\Models\Trailer;
use Exception;

class VehicleV2Service {

  /**
   * Get All Vehicles(trucks and trailers) list.
   * @return array
   * @throws Exception
   */
  public function getAllVehicles(): array {
    $companyId = getAuthAdminCompanyId();
    $trucks = Truck::where('company_id', $companyId)
      ->where('status', config('constant.status.truck.active'))
      ->select('id', 'number', 'make', 'year', 'truck_vin')->get();
    $trailers = Trailer::where('company_id', $companyId)
      ->where('status', config('constant.status.trailer.active'))
      ->select('id', 'number', 'make', 'year', 'vin')->get();
    if (!empty($trucks)) {
      $trucks = $trucks->map(function ($truck) {
        return [
          'id' => $truck->id,
          'number' => $truck->number,
          'make' => $truck->make,
          'year' => $truck->year,
          'vin' => $truck->truck_vin,
        ];
      });
    }
    return [
      'trucks' => $trucks ?? [],
      'trailers' => $trailers ?? []
    ];
  }

  /**
   * Get All Vehicles(trucks and trailers) list.
   * @return array
   * @throws Exception
   */
  public function getAllVehiclesV2(): array {
    $companyId = getAuthAdminCompanyId();
    $selectedTruckColumns = ['id', 'number'];
    $selectedTrailerColumns = ['id', 'number'];
    if (request('extraAttributes')) {
      foreach (request('extraAttributes') as $field) {
        switch ($field) {
          case 'vin':
            $selectedTruckColumns = array_merge($selectedTruckColumns, ["truck_vin as vin"]);
            $selectedTrailerColumns = array_merge($selectedTrailerColumns, ["vin"]);
            break;
          case 'year':
          case 'make':
            $selectedTruckColumns = array_merge($selectedTruckColumns, [$field]);
            $selectedTrailerColumns = array_merge($selectedTrailerColumns, [$field]);
            break;
          default:
            break;
        }
      }
    }
    $trucks = Truck::where('company_id', $companyId)
      ->where('status', config('constant.status.truck.active'))
      ->select($selectedTruckColumns)
      ->get();
    $trailers = Trailer::where('company_id', $companyId)
      ->where('status', config('constant.status.trailer.active'))
      ->select($selectedTrailerColumns)
      ->get();

    return [
      'trucks' => $trucks ?? [],
      'trailers' => $trailers ?? []
    ];
  }
}
