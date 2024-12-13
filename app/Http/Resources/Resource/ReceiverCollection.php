<?php

namespace App\Http\Resources\Resource;

use App\Models\Receiver;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class ReceiverCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = ReceiverResource::class;

    private function receivers()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return Receiver::where('company_id', '=', $companyId)->get();
    }

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $paginated['active_receiver'] = $this->counter(config('constant.status.receiver.active'));
            $paginated['inactive_receiver'] =  $this->counter(config('constant.status.receiver.inactive'));
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    public function counter($status)
    {
        $receivers = $this->receivers();
        $result = $receivers->filter(function ($value, $key) use ($status) {
            return $value->status == $status;
        })->count();
        return $result;
    }
}
