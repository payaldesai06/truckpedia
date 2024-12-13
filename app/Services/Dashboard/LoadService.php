<?php

namespace App\Services\Dashboard;

use App\Models\Customer;
use App\Models\Load;
use Illuminate\Support\Facades\Auth;
use \Illuminate\Contracts\Pagination\LengthAwarePaginator;

class LoadService
{
    private $loadStatuses;

    public function __construct()
    {
        $this->loadStatuses = collect(config('constant.status.load'));
    }

    public function datatable(): LengthAwarePaginator
    {
        $perPage = request('rows', config('response.per_page'));

        $adminCompanyDetailId = Auth::user()->admin_company_detail_id;

        $loadStatus = $this->loadStatuses->only([
            'invoice_created',
            'invoice_sent',
            'invoice_paid'
        ])->values();

        return Load::query()
            ->with(['customer', 'adminCompanyDetail', 'loadShippers', 'loadReceivers'])
            ->where('admin_company_detail_id', '=', $adminCompanyDetailId)
            ->whereIn('status', $loadStatus)
            ->addSelect([
                'invoice_due_date_at' => Customer::query()
                    ->selectRaw('CAST(DATE_ADD(loads.invoice_generated_at, INTERVAL customers.payment_terms_day DAY) as DATE)')
                    ->whereColumn('customers.id', '=', 'loads.customer_id')
                    ->limit(1)
            ])
            ->when(request('load_unique_id'), function ($query, $loadUniqueId) {
                $search = '%' . $loadUniqueId . '%';

                return $query->where('load_unique_id', 'like', $search);
            })
            ->when(request('customer_company_name'), function ($query, $customerCompanyName) {
                return $query->whereHas('customer', function ($query) use ($customerCompanyName) {
                    $search = '%' . $customerCompanyName . '%';

                    return $query->where('company_name', 'like', $search);
                });
            })
            ->when(request('customer_billing_email'), function ($query, $customerBillingEmail) {
                return $query->whereHas('customer', function ($query) use ($customerBillingEmail) {
                    $search = '%' . $customerBillingEmail . '%';

                    return $query->where('billing_email', 'like', $search);
                });
            })
            ->when(request('total_amount'), function ($query, $totalAmount) {
                $search = '%' . $totalAmount . '%';

                return $query->where('total_amount', 'like', $search);
            })
            ->when(request('invoice_generated_at'), function ($query, $totalAmount) {
                $search = '%' . $totalAmount . '%';

                return $query->where('invoice_generated_at', 'like', $search);
            })
            ->when(request('invoice_due_date_at'), function ($query, $invoiceDueDateAt) {
                $search = '%' . $invoiceDueDateAt . '%';

                return $query->having('invoice_due_date_at', 'like', $search);
            })
            ->when(request()->has(['sortField', 'sortOrder']), function ($query) {
                if (in_array(request('sortField'), ['customer_company_name', 'customer_billing_email'])) {
                    $sortField = [
                        'customer_company_name' => 'company_name',
                        'customer_billing_email' => 'billing_email',
                    ][request('sortField')];

                    return $query->orderBy(function ($query) use ($sortField) {
                        return $query->selectRaw($sortField)
                            ->from('customers')
                            ->whereColumn('customers.id', 'loads.customer_id')
                            ->limit(1);
                    }, request('sortOrder'));
                }

                if (request('sortField') == 'invoice_due_date_at') {
                    return $query->orderBy(function ($query) {
                        return $query->selectRaw('CAST(DATE_ADD(loads.invoice_generated_at, INTERVAL customers.payment_terms_day DAY) as DATE)')
                            ->from('customers')
                            ->whereColumn('customers.id', 'loads.customer_id')
                            ->limit(1);
                    }, request('sortOrder'));
                }

                return $query->orderBy(request('sortField'), request('sortOrder'));
            })
            ->when(request()->has(['startDate', 'endDate']), function ($query) {
                return $query->whereBetween('load_end_date', [
                    request('startDate'),
                    request('endDate')
                ]);
            })
            ->paginate($perPage);
    }
}
