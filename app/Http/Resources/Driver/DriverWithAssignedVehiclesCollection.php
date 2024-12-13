<?php

namespace App\Http\Resources\Driver;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class DriverWithAssignedVehiclesCollection extends ResourceCollection {
  use ApiResourceTrait;
  public $collects = DriverWithAssignedVehiclesResource::class;

  public function toArray($request) {
    $collection = ['drivers' => $this->collection];
    return $collection;
  }
}
