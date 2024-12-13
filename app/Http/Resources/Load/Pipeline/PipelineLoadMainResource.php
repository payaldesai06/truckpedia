<?php

namespace App\Http\Resources\Load\Pipeline;

use Illuminate\Http\Resources\Json\JsonResource;

class PipelineLoadMainResource extends JsonResource {

  public function toArray($request): array {
    $direction = "";
    if (isset($this->direction)) {
      $direction = $this->direction == 1 ? config('constant.load.directions.inbound') : config('constant.load.directions.outbound');
    }
    $loadShipper = $this->loadShippers->first() ?? null;
    $loadReceiver = $this->loadReceivers->last() ?? null;
    $deliveryCity = $loadReceiver->city ?? "";
    $deliveryState = $loadReceiver->state ?? "";
    $pickUpCity = $loadShipper->city ?? "" ;
    $pickUpState = $loadShipper->state ?? "";
    return [
      'load_id' => $this->id ?? "",
      'admin_company_detail_id' => $this->admin_company_detail_id ?? "",
      'tag_id' => $this->tag_id ?? null,
      'dispatcher_id' => $this->dispatcher_id ?? "",
      'load_unique_id' => $this->load_unique_id ?? "",
      'refrence_id' => $this->refrence_id ?? "",
      'dispatcher_notes' => $this->dispatcher_notes ?? '',
      'direction' => $direction,
      'total_amount' => $this->total_amount,
      'miles' => $this->total_miles,
      'equipmentType' => $this->equipment_type,
      'status' => $this->status ?? "",
      'ship_date' => $loadShipper->shipping_date ?? "",
      'ship_time' => !empty($loadShipper->shipping_time)
        ? $loadShipper->shipping_time->format(config('constant.time_format')) : "",
      'ship_end_time' => !empty($loadShipper->shipping_end_time)
        ? $loadShipper->shipping_end_time->format(config('constant.time_format')) : "",
      'delivery_date' => $loadReceiver->delivery_date ?? "",
      'delivery_time' =>  !empty($loadReceiver->delivery_time)
        ? $loadReceiver->delivery_time->format(config('constant.time_format')) : "",
      'delivery_end_time' => !empty($loadReceiver->delivery_end_time)
        ? $loadReceiver->delivery_end_time->format(config('constant.time_format')) : "",
      'pick_up' => $pickUpCity . ', ' . $pickUpState,
      'delivery' => $deliveryCity . ', ' . $deliveryState,
      'invoice_file_name' => $this->invoice_file_name ?? "",
      'billToCode' => $this->bill_to_code ?? null,
      'paymentOption' => $this->payment_option ? config('constant.load.paymentOption')[$this->payment_option] :
        null,
    ];
  }
}
