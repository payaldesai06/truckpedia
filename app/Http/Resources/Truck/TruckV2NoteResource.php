<?php

namespace App\Http\Resources\Truck;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class TruckV2NoteResource extends JsonResource {

  /**
   * Truck V2 Note Resource.
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? '',
      'note' => $this->note ?? '',
      'utcUpdatedAt' => Carbon::parse($this->updated_at)->format('Y-m-d H:i:s') ?? ''
    ];
  }
}
