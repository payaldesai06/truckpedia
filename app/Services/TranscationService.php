<?php


namespace App\Services;

use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;

class TranscationService
{
    public function datatable()
    {
        $per_page = request('rows') ?? config('response.per_page');
        $user = Auth::user();

        return Transaction::where('admin_company_detail_id', '=', $user->admin_company_detail_id)
            ->when(request()->has('status'), function ($query) {
                return $query->where('status', '=', request('status'));
            })
            ->when(
                request()->has('sortField') && request()->has('sortOrder'),
                function ($query) {
                    return $query->orderBy(request('sortField'), request('sortOrder'));
                },
                function ($query) {
                    return $query->orderBy('created_at', 'desc');
                }
            )
            ->paginate($per_page);
    }
}
