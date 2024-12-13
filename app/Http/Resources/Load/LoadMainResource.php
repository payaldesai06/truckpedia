<?php

namespace App\Http\Resources\Load;

use App\Http\Resources\LoadInvoice\LoadInvoiceResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadMainResource extends JsonResource {
  public $loadStartDate;
  public $loadEndDate;
  public $loadStartToEndDuration;

  public function __construct($resource) {
    parent::__construct($resource);

    $this->loadStartDate = getDateTimeBasedOnTimezoneFormattedForMobileApp(
      $this->load_start_date,
      $this->adminCompanyDetail->timezone
    );
    $this->loadEndDate = getDateTimeBasedOnTimezoneFormattedForMobileApp(
      $this->load_end_date,
      $this->adminCompanyDetail->timezone
    );

    if ($this->loadStartDate != '' && $this->loadEndDate != '') {
      $this->loadStartToEndDuration = Carbon::parse($this->loadStartDate)
        ->diffForHumans($this->loadEndDate, true, false);
    }
  }

  public function toArray($request): array {
    $direction = "";
    if (isset($this->direction)) {
      $direction = $this->direction == 1 ? config('constant.load.directions.inbound') : config('constant.load.directions.outbound');
    }

    return [
      'load_id' => $this->id ?? "",
      'admin_company_detail_id' => $this->admin_company_detail_id ?? "",
      'tag_id' => $this->tag_id ?? "",
      'user_id' => $this->user_id ?? "",
      'syncedLoadId' => $this->synced_load_id ?? null,
      // 'customer_id' => $this->customer_id ?? "",
      'dispatcher_id' => $this->dispatcher_id ?? "",
      'load_unique_id' => $this->load_unique_id ?? "",
      'refrence_id' => $this->refrence_id ?? "",
      'dispatcher_notes' => $this->dispatcher_notes ?? '',
      'equipment_type' => !empty($this->equipment_type) ? config('constant.load.equipment_type')[$this->equipment_type] : '',
      'trailer_type' => !empty($this->trailer_type) ? config('constant.load.trailer_type')[$this->trailer_type] : '',
      'direction' => $direction,
      'sub_total' => $this->sub_total,
      'discount' => $this->discount,
      'total_amount' => $this->total_amount,
      'paidAmount' => $this->paid_amount ?? null,
      'status' => !is_null($this->deleted_at) ? 'deleted' : ($this->status ?? ''),
      // 'customer' => $this->customer->company_name ?? "",
      'ship_date' => $this->loadShippers->first()->shipping_date ?? "",
      'shipping_end_date' => $this->loadShippers->first()->shipping_end_date ?? "",
      'delivery_date' => $this->loadReceivers->last()->delivery_date ?? "",
      'delivery_end_date' => $this->loadReceivers->last()->delivery_end_date ?? "",
      'pick_up' => $this->loadShippers->first()->city . ', ' . $this->loadShippers->first()->state ?? "",
      'delivery' => $this->loadReceivers->last()->city . ', ' . $this->loadReceivers->last()->state ?? "",
      'source' => $this->loadShippers->first()->address ?? "", //first shipper address
      'destination' => $this->loadReceivers->last()->address ?? "", //last shipper address
      'total_miles' => $this->total_miles ?? "",
      'calculate_using' => $this->calculate_using ?? "",
      'load_start_date' => $this->loadStartDate ?? "",
      'load_end_date' => $this->loadEndDate ?? "",
      'load_duration' => $this->loadStartToEndDuration ?? "",
      'dispatcher_paid' => $this->dispatcher_paid ?? '',
      'override_commission_fractional' => $this->override_commission_fractional ?? '',
      'shared_dispatcher_commission_fractional' => $this->shared_dispatcher_commission_fractional ?? '',
      'other_commission_amount' => $this->other_commission_amount ?? '',
      'collaboratorEmails' => $this->collaborators->pluck('email')->toArray() ?? [],
      'billToCode' => $this->bill_to_code ?? '',
      'laneCode' => $this->lane_code ?? '',
      'costCode' => $this->cost_code ?? '',
      'orderType' => $this->order_type ?? '',
      'serviceType' => $this->service_type ?? '',
      'companyInternalReference' => $this->company_internal_reference ?? null,
      'containerStatus' => !empty($this->container_status) ?
        config('constant.load.container.status')[$this->container_status] : null,
      'vessel' => $this->vessel ?? '',
      'arrivalDate' => $this->arrival_date ?? '',
      'lastFreeDate' => $this->last_free_date ?? '',
      'bolNumber' => $this->bol_number ?? '',
      'showRateConToDriver' => $this->show_rate_con_to_driver ?? null,
      'pickedUpEquipment' => [
        'number' => $this->picked_up_equipment_number ?? '',
        'type' => $this->picked_up_equipment_type ?? '',
        'size' => $this->picked_up_equipment_size ?? ''
      ],
      'droppedOffEquipment' => [
        'number' => $this->dropped_off_equipment_number ?? '',
        'type' => $this->dropped_off_equipment_type ?? '',
        'size' => $this->dropped_off_equipment_size ?? ''
      ],
      $this->merge(new LoadInvoiceResource($this)),

      /**
     * Move to `LoadResource`
     */
      //           $this->merge([
      //                'load_rate_confirmations' => LoadRateConfirmationResource::collection($this->rateConfirmations)
      //            ]),
    ];
  }
}
