<?php

namespace App\Http\Resources\Driver;

use App\Traits\ApiResourceTrait;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Http\Resources\Json\ResourceCollection;

class DriverCollectionV2 extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = DriverResourceV2::class;

  /**
   * Transform the resource collection into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    $paginated = $this->resource->toArray();
    return [
      'data' => $this->collection->transform(function ($user) {
        $driver = $user->driverDetail;
        $trailer = $driver->assignmentTrailer;
        $truck = $driver->assignmentTruck;
        return [
          'id' => $user->id,
          'name' => $user->first_name . ' ' . $user->last_name,
          'firstName' => $user->first_name ?? "",
          'lastName' => $user->last_name ?? "",
          'truckNumber' => optional($truck)->number,
          'trailerNumber' => optional($trailer)->number,
          'phone' => $driver->phone_number,
          'email' => $user->email,
          'driverType' => $driver->type,
          'companyEmployeeId' => $driver->company_employee_id ?? "",
          'tags' => !empty($user->tags) ?
            DriverTagResourceV2::collection($user->tags) : [],
        ];
      }),
      'links' => $this->when($this->resource instanceof AbstractPaginator, $this->paginationLinks($paginated)),
      'meta' => $this->when($this->resource instanceof AbstractPaginator, $this->meta($paginated)),
    ];
  }
}
