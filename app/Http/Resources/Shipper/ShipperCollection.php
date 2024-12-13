<?php

namespace App\Http\Resources\Shipper;

use App\Models\Shipper;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class ShipperCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = ShipperResource::class;

    private function shippers()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return Shipper::where('company_id', '=', $companyId)->get();
    }

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $paginated['active_shipper'] = $this->counter(config('constant.status.shipper.active'));
            $paginated['inactive_shipper'] =  $this->counter(config('constant.status.shipper.inactive'));
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    public function counter($status)
    {
        $shippers = $this->shippers();
        $result = $shippers->filter(function ($value, $key) use ($status) {
            return $value->status == $status;
        })->count();
        return $result;
    }
}
