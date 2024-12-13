<?php

namespace App\Http\Resources\Trailer;

use App\Models\Trailer;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class TrailerCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = TrailerResource::class;

    private function trailers()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return Trailer::where('company_id', '=', $companyId)->get();
    }

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $paginated['active_trailer'] = $this->counter(config('constant.status.trailer.active'));
            $paginated['inactive_trailer'] =  $this->counter(config('constant.status.trailer.inactive'));
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    public function counter($status)
    {
        $trailers = $this->trailers();
        $result = $trailers->filter(function ($value, $key) use ($status) {
            return $value->status == $status;
        })->count();
        return $result;
    }
}
