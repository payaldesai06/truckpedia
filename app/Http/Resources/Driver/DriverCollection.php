<?php

namespace App\Http\Resources\Driver;

use App\Models\User;
use App\Traits\ApiResourceTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class DriverCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = DriverResource::class;

    private function drivers()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return User::whereIn('role', [config('constant.roles.driver')])
            // ->whereHas('driverDetail', function (Builder $query) {
            //     return $query->where('owner_id', Auth::id());
            // })
            ->where('admin_company_detail_id', '=', $companyId)
            ->get();
    }

    public function toArray($request)
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $paginated['active_user'] = $this->counter(config('constant.status.driver.active'));
            $paginated['inactive_user'] =  $this->counter(config('constant.status.driver.inactive'));
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }

    public function counter($status)
    {
        $drivers = $this->drivers();
        // $result = $users->count();
        $result = $drivers->filter(function ($value, $key) use ($status) {
            return $value->status == $status;
        })->count();
        return $result;
    }
}
