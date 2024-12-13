<?php

namespace App\Http\Resources\Truck;

use App\Http\Resources\Tag\TagNameOnlyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class GetListTruckV2Resource extends JsonResource {
  public function toArray($request): array {
    $fullName = $this->driverDetails->pluck('user')->map(function ($user) {
      $firstName = $user->first_name ?? '';
      $lastName = $user->last_name ?? '';
      return trim("{$firstName} {$lastName}");
    })->filter()->implode(', ') ?? '';
    $allTruckTypes = config('constant.truck_types');
    $truckTypes = [];
    foreach ($allTruckTypes as $column => $value) {
      if ($this->$column == 1) {
        $truckTypes[] = $value;
      }
    }

    return [
      'id' => $this->id,
      'truckNumber' => $this->number ?? '',
      'vin' => $this->truck_vin ?? '',
      'make' => $this->make ?? '',
      'year' => $this->year ?? '',
      'licensePlate' => $this->licence_plate ?? '',
      'status' => $this->status ?? '',
      'driverName' =>  $fullName,
      'tags' => !empty($this->tags)
        ? TagNameOnlyResource::collection($this->tags) : [],
      'truckTypes' => $truckTypes,
    ];
  }
}
