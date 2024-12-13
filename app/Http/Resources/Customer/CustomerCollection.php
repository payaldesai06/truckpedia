<?php

namespace App\Http\Resources\Customer;

use App\Models\Customer;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class CustomerCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = CustomerResource::class;

    private function customers()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return Customer::where('company_id', '=', $companyId)->get();
    }

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $paginated['active_customer'] = $this->counter(config('constant.status.customer.active'));
            $paginated['inactive_customer'] =  $this->counter(config('constant.status.customer.inactive'));
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    public function counter($status)
    {
        $customers = $this->customers();
        $result = $customers->filter(function ($value, $key) use ($status) {
            return $value->status == $status;
        })->count();
        return $result;
    }
}
