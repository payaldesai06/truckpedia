<?php

namespace App\Http\Resources\Load\AvailableLegLoads;

use App\Http\Resources\Customer\CustomerResource;
use App\Http\Resources\Load\LoadDriverResource;
use App\Http\Resources\Load\LoadImageResource;
use App\Http\Resources\Load\LoadLegResource;
use App\Http\Resources\Load\LoadMainResource;
use App\Http\Resources\Load\LoadReceiverResource;
use App\Http\Resources\Load\LoadShipperResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class AvailableLegLoadDetailResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    list($loadShippers, $loadLegs, $loadReceivers) = $this->generateStopsDetailsWithOrder();

    $shipperResources = LoadShipperResource::collection($loadShippers) ?? "";
    $legResources = LoadLegResource::collection($loadLegs) ?? "";
    $receiverResources = LoadReceiverResource::collection($loadReceivers) ?? "";

    return [
      $this->merge(new LoadMainResource($this)),
      'loadTrailerNumber' => $this->loadDrivers->pluck('trailer')->pluck('number')->first() ?? "",
      'customer' => new CustomerResource($this->customer) ?? "",
      'shippers' => $shipperResources,
      'legs' => $legResources,
      'receviers' => $receiverResources,
      // Below two fields are not needed.
      'driver' => new \stdClass(), // new LoadDriverResource($this->loadDriver) ?? 
      'load_images' => collect(), // !empty($this->loadDriver->loadImage) ? LoadImageResource::collection($this->loadDriver->loadImage) : 
      'stops' => $this->getAvailableStops($shipperResources, $legResources, $receiverResources),
    ];
  }

  /**
   * Get available stops in an array with stopType.
   * @param $shipperResources
   * @param $legResources
   * @param $receiverResources
   * @return Collection
   */
  private function getAvailableStops($shipperResources, $legResources, $receiverResources): Collection {
    $temp = collect();

    $shipperResources->each(function ($item) use ($temp) {
      $item->stopType = 'shipper';
      $temp->push($item);
    });
    $legResources->each(function ($item) use ($temp) {
      $item->stopType = 'leg';
      $temp->push($item);
    });
    $receiverResources->each(function ($item) use ($temp) {
      $item->stopType = 'receiver';
      $temp->push($item);
    });
    return $temp->sortBy('order')->values();
  }


  /**
   * Get all stops with order and assign order number if order is null/not exits.
   * @return array
   */
  private function generateStopsDetailsWithOrder(): array {
    $loadShippers = $this->loadShippers ?? collect();
    $loadLegs = $this->loadLegs ?? collect();
    $loadReceivers = $this->loadReceivers ?? collect();

    $totalShippers = $loadShippers->count();
    $totalLegs = $loadLegs->count();

    if ($totalShippers && is_null($loadShippers->first()->order)) {
      $loadShippers = $loadShippers->map(function ($shipper, $key) {
        $shipper->order = $key + 1;
        return $shipper;
      });
      if ($totalLegs) {
        $loadLegs = $loadLegs->map(function ($leg, $key) use ($totalShippers) {
          $leg->order = $totalShippers + $key + 1;
          return $leg;
        });
      }
      if ($loadReceivers->count()) {
        $totalShippersAndLegs = $totalShippers + $totalLegs;
        $loadReceivers = $loadReceivers->map(function ($receiver, $key) use ($totalShippersAndLegs) {
          $receiver->order = $totalShippersAndLegs + $key + 1;
          return $receiver;
        });
      }
    }
    return [$loadShippers, $loadLegs, $loadReceivers];
  }
}
