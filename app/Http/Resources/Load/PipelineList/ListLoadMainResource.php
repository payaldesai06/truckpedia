<?php

namespace App\Http\Resources\Load\PipelineList;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ListLoadMainResource extends JsonResource {
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

    $loadPodImages = $this->adminLoadImages->whereIn(
      'purpose',
      [
        config('constant.load.image.image_alias.load_pod_admin'),
        config('constant.load.image.image_alias.load_pod')
      ]
    );

    return [
      'load_id' => $this->id ?? "",
      'admin_company_detail_id' => $this->admin_company_detail_id ?? "",
      'tag_id' => $this->tag_id ?? null,
      'dispatcher_id' => $this->dispatcher_id ?? "",
      'load_unique_id' => $this->load_unique_id ?? "",
      'refrence_id' => $this->refrence_id ?? "",
      'dispatcher_notes' => $this->dispatcher_notes ?? '',
      'companyInternalReference' => $this->company_internal_reference ?? null,
      // 'containerStatus' => !empty($this->container_status) ?
      //  config('constant.load.container.status')[$this->container_status] : null,
      'direction' => $direction,
      'total_amount' => $this->total_amount,
      'paymentOption' => $this->payment_option ? config('constant.load.paymentOption')[$this->payment_option] :
        null,
      'status' => $this->status ?? "",
      'ship_date' => $this->loadShippers->first()->shipping_date ?? "",
      'ship_time' => $this->loadShippers->first()->shipping_time ? $this->loadShippers->first()->shipping_time->format('H:i') : "",
      'ship_end_time' => $this->loadShippers->first()->shipping_end_time ? $this->loadShippers->first()->shipping_end_time->format('H:i') : "",
      'delivery_date' => $this->loadReceivers->last()->delivery_date ?? "",
      'delivery_time' => $this->loadReceivers->last()->delivery_time ? $this->loadReceivers->last()->delivery_time->format('H:i') : "",
      'delivery_end_time' => $this->loadReceivers->last()->delivery_end_time ? $this->loadReceivers->last()->delivery_end_time->format('H:i') : "",
      'pick_up' => $this->loadShippers->first()->city . ', ' . $this->loadShippers->first()->state ?? "",
      'delivery' => $this->loadReceivers->last()->city . ', ' . $this->loadReceivers->last()->state ?? "",
      'load_start_date' => $this->loadStartDate ?? "",
      'load_end_date' => $this->loadEndDate ?? "",
      'invoice_file_name' => $this->invoice_file_name ?? "",
      'qbdSingleInvoices' => $this->qbdInvoices ?? null,
      'qbdMassInvoices' => $this->qbdInvoiceLoads ?? null,
      'podAvailable' => !$loadPodImages->isEmpty(),
      'loadPods' => $loadPodImages->map(function ($loadImage) {
        return [
          'loadId' => $loadImage->load_id,
          'loadImageId' => $loadImage->id,
        ];
      }) ?? null,
    ];
  }
}
