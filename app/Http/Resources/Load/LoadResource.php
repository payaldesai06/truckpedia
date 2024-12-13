<?php

namespace App\Http\Resources\Load;

use App\Http\Resources\Customer\CustomerResource;
use App\Http\Resources\Dispacher\DispacherResource;
use App\Http\Resources\LoadRateConfirmation\LoadRateConfirmationResource;
use App\Services\LoadService;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $ret = [
      $this->merge(new LoadMainResource($this)),

      $this->merge([
        'load_rate_confirmations' => LoadRateConfirmationResource::collection($this->rateConfirmations)
      ]),

      'load_charge' => [
        $this->merge(new LoadChargeResource($this->loadCharge)) ?? "",
      ],
      'shippers' => LoadShipperResource::collection($this->loadShippers) ?? "",
      'receivers' => LoadReceiverResource::collection($this->loadReceivers) ?? "",
      'load_legs' => LoadLegResource::collection($this->loadLegs) ?? '',
      'drivers' => LoadDriverResource::collection($this->loadDrivers) ?? "",
      'dispatcher' => ($this->dispatcher ? [
        $this->merge(new DispacherResource($this->dispatcher)),
      ] : []),
      'customer' => [
        $this->merge(new CustomerResource($this->customer))
      ],
      'load_images' => LoadImageResource::collection($this->adminLoadImages) ?? "",
      'thirdPartyCarrier' => [
        $this->merge(new ThirdPartyCarrierResource($this))
      ] ?? null,
      'multiPurposeStops' => $this->loadMultiPurposeStops
        ? LoadMultiPurposeStopsResource::collection
        ($this->loadMultiPurposeStops) : collect(),
      'logs' => LoadLogResource::collection($this->loadLogs),
      'distanceCache' => (new LoadService())->getDistanceCache($this->distance_cache) ?? null
    ];

    // For Broker/Shipper Append Carrier Images/PDF/File In Documents/Pictures
    if ($this->third_party_carrier_as_customer_id && $this->synced_load_id) {
      $ret['loadImagesFromThirdPartyCarrier'] =
        LoadImageResource::collection($this->syncedLoad->adminLoadImages) ?? [];
    }

    $ret['notes'] = $this->loadNotes ? LoadNoteResource::collection($this->loadNotes) : [];

    return $ret;
  }
}
