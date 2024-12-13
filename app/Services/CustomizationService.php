<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use Illuminate\Support\Facades\Auth;

class CustomizationService {
  /**
   * Get all setting customization.
   * @return mixed
   */
  public function getCustomizations() {
    return AdminCompanyDetail::select(
      'id',
      'show_driver_truck_on_pipeline',
      'show_qbd_invoice_sync_status_on_list',
      'show_driver_location_on_calendar_map',
      'driver_app_variation',
      'customizations'
    )->find(Auth::user()->admin_company_detail_id);
  }

  /**
   * Update setting customization.
   * @param $request
   * @return mixed
   */
  public function updateCustomizations($request) {
    $response = $this->getCustomizations();
    $customization = [
      'dpm' => request('showDriverPayOnMobileApp') ?? false
    ];
    $response->update(
      [
        'show_driver_truck_on_pipeline' => request('show_driver_truck_on_pipeline'),
        'show_qbd_invoice_sync_status_on_list' => request('show_qbd_invoice_sync_status_on_list'),
        'show_driver_location_on_calendar_map' => request('show_driver_location_on_calendar_map'),
        'driver_app_variation' => !empty(request('driver_app_variation')) ? request('driver_app_variation') : null,
        'customizations' => $customization
      ]
    );
    return $response;
  }
}
