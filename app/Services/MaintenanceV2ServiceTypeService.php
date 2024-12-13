<?php

namespace App\Services;

use App\Models\MaintenanceV2ServiceType;
use Illuminate\Support\Facades\DB;

class MaintenanceV2ServiceTypeService {

  /**
   * Get service type list
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function getServiceTypes() {
    return MaintenanceV2ServiceType::where('company_id', getAuthAdminCompanyId())
      ->selectRaw('id, service_type as serviceType')
      ->get();
  }

  /**
   * Create a new service type.
   * @param string $serviceType
   * @return array
   */
  public function create($serviceType) {
    return DB::transaction(function () use ($serviceType) {
      $data = [
        'service_type' => $serviceType, 'company_id' => getAuthAdminCompanyId()
      ];
      $ret = MaintenanceV2ServiceType::create($data);
      return ['id' => $ret->id];
    });
  }
}
