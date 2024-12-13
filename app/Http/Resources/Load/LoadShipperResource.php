<?php

namespace App\Http\Resources\Load;

use Illuminate\Http\Resources\Json\JsonResource;

class LoadShipperResource extends JsonResource {
  public function toArray($request): array {
    return [
      'load_shipper_id' => $this->id ?? "",
      'load_id' => $this->load_id ?? "",
      'shipper_name' => $this->shipper_name ?? "",
      'address' => $this->address ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'zip_code' => $this->zip_code ?? "",
      'latitude' => $this->latitude ?? "",
      'longitude' => $this->longitude ?? "",
      'contact_person' => $this->contact_person ?? "",
      'contact_number' => $this->contact_number ?? "",
      'shipper_reference' => $this->shipper_reference ?? "", //shipper_reference is a pickup number from moblie display
      'shipping_date' => $this->shipping_date ?? "",
      'shipping_end_date' => $this->shipping_end_date ?? "",
      'shipping_time' => $this->shipping_time ? $this->shipping_time->format('H:i') : "",
      'shipping_end_time' => $this->shipping_end_time ? $this->shipping_end_time->format('H:i') : "",
      'freightEquipmentType' => $this->freight_equipment_type ?? "",
      'freight_description' => $this->freight_description ?? "",
      'freight_weight' => $this->freight_weight ?? "",
      'weight_unit' => config('constant.weight_unit')[$this->weight_unit] ?? null,
      'freight_qty' => $this->freight_qty ?? "",
      'qtyRate' => $this->qty_rate ?? null,
      'qty_unit' => config('constant.quantity_unit')[$this->qty_unit] ?? null,
      'freight_length' => $this->freight_length ?? "",
      'freight_width' => $this->freight_width ?? "",
      'freight_height' => $this->freight_height ?? "",
      'shipper_note' => $this->shipper_note ?? '',
      'arrived_local_datetime' => $this->arrived_local_datetime ?? '',
      'arrived_latitude' => $this->arrived_latitude ?? '',
      'arrived_longitude' => $this->arrived_longitude ?? '',
      'loaded_local_datetime' => $this->loaded_local_datetime ?? '',
      'loaded_latitude' => $this->loaded_latitude ?? '',
      'loaded_longitude' => $this->loaded_longitude ?? '',
      'container' => $this->container ?? '',
      'order' => $this->order ?? null,
      'stopType' => 'shipper',
      'temperature' => $this->temperature ?? '',
      'dropTrailerType' => !empty($this->drop_trailer_type)
        ? config('constant.load.dropHookTrailerType')[$this->drop_trailer_type] : '',
      'dropTrailerId' => $this->drop_trailer_id ?? '',
      'hookTrailerType' => !empty($this->hook_trailer_type)
        ? config('constant.load.dropHookTrailerType')[$this->hook_trailer_type] : '',
      'hookTrailerId' => $this->hook_trailer_id ?? '',
      'containerHere' => $this->container_here ? true : false,
      'additionalFreightDetails' => !empty($this->additional_freight_details) ?
        new LoadAdditionalFreightDetailsResource(json_decode($this->additional_freight_details)) :
        null
    ];
  }
}
