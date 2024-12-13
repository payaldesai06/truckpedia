<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverTrailerAssignmentResourceV2 extends JsonResource {
  private static $currentTrailerId;

  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    return [
      'id' => $this->id ?? '',
      'trailerId' => $this->trailer_id ?? '',
      'startDate' => optional($this->start_date)->format(config('constant.date_format')) ?? '',
      'endDate' => optional($this->end_date)->format(config('constant.date_format')) ?? '',
      'isCurrent' => (int) $this->trailer_id === self::$currentTrailerId,
    ];
  }

  public static function withCurrentTrailer($resource, int $currentTrailerId = null) {
    self::$currentTrailerId = $currentTrailerId;
    return parent::collection($resource);
  }
}
