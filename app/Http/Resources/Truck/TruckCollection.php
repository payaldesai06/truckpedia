<?php

namespace App\Http\Resources\Truck;

use App\Models\Truck;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class TruckCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = TruckResource::class;

    private function trucks()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return Truck::where('company_id', '=', $companyId)->get();
    }

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $paginated['active_truck'] = $this->counter(config('constant.status.truck.active'));
            $paginated['inactive_truck'] =  $this->counter(config('constant.status.truck.inactive'));
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    public function counter($status)
    {
        $trucks = $this->trucks();
        $result = $trucks->filter(function ($value, $key) use ($status) {
            return $value->status == $status;
        })->count();
        return $result;
    }
}
