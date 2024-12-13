<?php

namespace App\Services\SuperAdmin;

use App\Models\AdminCompanyDetail;
use App\Models\Transaction;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class PaymentHistoryService
{
    public function datatable()
    {
        $per_page = request('rows') ?? config('response.per_page');

        return Transaction::with(['adminCompanyDetail'])
            ->when(request()->has('amount'), function ($query) {
                return $query->where('amount', 'like', '%' . request('amount') . '%');
            })
            ->when(request()->has('status'), function ($query) {
                return $query->where('status', 'like', '%' . request('status') . '%');
            })
            ->when(request()->has('created_at'), function ($query) {
                return $query->where('created_at', 'like', '%' . request('created_at') . '%');
            })
            ->when(request()->has('load_counter'), function ($query) {
                return $query->where('load_counter', 'like', '%' . request('load_counter') . '%');
            })
            ->when(request()->has('from_date'), function ($query) {
                return $query->where('from_date', 'like', '%' . request('from_date') . '%');
            })
            ->when(request()->has('to_date'), function ($query) {
                return $query->where('to_date', 'like', '%' . request('to_date') . '%');
            })
            ->when(request('business_name'), function ($query, $globalSearch) {
                return $query->whereHas('adminCompanyDetail', function (Builder $innerquery) {
                    $innerquery->where('business_name', 'like', '%' . request('business_name') . '%');
                });
            })
            ->when(
                request()->has('sortField') && request()->has('sortOrder'),
                function ($query) {
                    if (request('sortField') == 'business_name') {
                        return $query->orderBy(function ($query) {
                            $query->selectRaw("business_name")
                                ->from('admin_company_details')
                                ->whereColumn('transactions.admin_company_detail_id', 'admin_company_details.id');
                        }, request('sortOrder'));
                    } else {
                        return $query->orderBy(request('sortField'), request('sortOrder'));
                    }
                },
                function ($query) {
                    return $query->orderBy('created_at', 'desc');
                }

            )
            ->paginate($per_page);
        // ->dd();
    }
}
