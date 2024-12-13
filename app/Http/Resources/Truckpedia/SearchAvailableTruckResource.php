<?php

namespace App\Http\Resources\Truckpedia;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchAvailableTruckResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    $truckAvalRptManualLanes = $this->trucks->pluck('truckAvalRptScheds')
      ->flatten()->pluck('truckAvalManualLanes')->flatten();
    $truckAvalOnceManualLanes = $this->trucks->pluck('truckAvalOnceScheds')
      ->flatten()->pluck('truckAvalManualLanes')->flatten();
    $manualLane = $truckAvalRptManualLanes->merge($truckAvalOnceManualLanes)
      ->whereNotNull('target_rpm')->sortBy('target_rpm')->first();

    return [
      'company' => [
        'id' => $this->id ?? '',
        'name' => $this->business_name ?? '',
        'logoUrl' => !empty($this->company_image) ? getImage(
          $this->company_image,
          config('constant.s3.admin_company_image')
        ) : "",
      ],
      'maxWeight' => optional($manualLane)->target_weight ?? null,
      'rate' => !is_null(optional($manualLane)->target_rpm) ?
        max(
          $manualLane->target_rpm * $request->distance,
          $manualLane->target_min_rate
        ) : 99999
    ];
  }
}
