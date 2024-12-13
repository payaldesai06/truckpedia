<?php

namespace App\Http\Resources\Reports\DispatcherCommissionReport;

use App\Services\DispatcherCommissionHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class DispatcherCommissionReportResource extends JsonResource {
  public function toArray($request): array {
    $customer = $this->customer;
    $result = DispatcherCommissionHelper::calculateCommissions($this);

    return [
      'load_id' => $this->id ?? '',
      'load_unique_id' => $this->load_unique_id ?? '',
      'customer_id' => $customer->id ?? '',
      'customer' => $customer->company_name ?? '',
      'dispatcher' => $result->dispatcher_name ?? "",
      'dispatcher_id' => $this->dispatcher_id ?? '',
      'ship_date' => $this->i_start_date ?? '',
      'delivery_date' => $this->i_end_date ?? '',
      'payment_status' => $this->payment_status == 'paid' ? 'Paid' : 'Pending',
      'type' => $result->commission_on ?? '',
      'rates' => $result->rates ?? '',
      'commission_fractional' => $result->commission_fractional ?? '',
      'total_commission' => $result->total_commission ?? '',
      'dispatcher_paid' => $this->dispatcher_paid == true ? 'Paid' : 'Pending' ?? '',
      'override_commission_fractional' => $this->override_commission_fractional ?? '',
      'shared_dispatcher_id' => $this->shared_dispatcher_id ?? '',
      'shared_dispatcher_commission_fractional' => $this->shared_dispatcher_commission_fractional ?? '',
      'other_commission_amount' => $this->other_commission_amount ?? '',
      'rate_per_mile' => $result->rate_per_mile,
    ];
  }
}
