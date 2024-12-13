<?php

namespace App\Http\Resources\TrailerV2;

use App\Http\Resources\Tag\TagNameOnlyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class GetListTrailerV2Resource extends JsonResource {
  public function toArray($request): array {
    $fullName = $this->driverDetails->pluck('user')->map(function ($user) {
      $firstName = $user->first_name ?? '';
      $lastName = $user->last_name ?? '';
      return trim("{$firstName} {$lastName}");
    })->filter()->implode(', ') ?? '';

    return [
      'id' => $this->id,
      'trailerNumber' => $this->number ?? '',
      'vin' => $this->vin ?? '',
      'make' => $this->make ?? '',
      'year' => $this->year ?? '',
      'licensePlate' => $this->licence_plate ?? '',
      'status' => $this->status ?? '',
      'driverName' => $fullName,
      'tags' => !empty($this->tags) ? TagNameOnlyResource::collection($this->tags) : []
    ];
  }
}
