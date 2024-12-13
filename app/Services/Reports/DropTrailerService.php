<?php

namespace App\Services\Reports;

use App\Exports\DropTrailerReportExport;
use App\Models\LoadDriver;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class DropTrailerService
{
    public function getReportDatatable()
    {
        $user = Auth::user();
        $adminCompanyDetailId = $user->admin_company_detail_id;
        $perPage = request('rows', config('response.per_page'));

        return LoadDriver::query()
            ->with(['loadDetail.loadReceivers', 'trailer'])
            ->where('drop_trailer', '=', 1)
            // May need this later.
            // ->whereNotNull('trailer_id')
            ->whereHas('loadDetail', function ($query) use ($adminCompanyDetailId) {
                return $query->where(function ($query) use ($adminCompanyDetailId) {
                    return $query->whereNull('deleted_at')
                        // ->where('status', '=', config('constant.status.load.invoice_paid'))
                        ->where('status', '!=', config('constant.status.load.canceled'))
                        ->where('admin_company_detail_id', '=', $adminCompanyDetailId);
                });
            })
            ->when(request()->has(['startDate', 'endDate']), function ($query) {
                return $query
                    ->where(function ($query) {
                        return $query->selectRaw('load_receivers.delivery_date as delivery_date')
                            ->from('load_receivers')
                            ->leftJoin('loads', 'load_receivers.load_id', '=', 'loads.id')
                            ->whereColumn('load_receivers.load_id', '=', 'loads.id')
                            ->whereColumn('load_drivers.load_id', '=', 'loads.id')
                            ->whereNull('loads.deleted_at')
                            ->whereNull('load_receivers.deleted_at')
                            ->orderByDesc('delivery_date')
                            ->limit(1);
                    }, '>=', request('startDate'))
                    ->where(function ($query) {
                        return $query->selectRaw('load_receivers.delivery_date as delivery_date')
                            ->from('load_receivers')
                            ->leftJoin('loads', 'load_receivers.load_id', '=', 'loads.id')
                            ->whereColumn('load_receivers.load_id', '=', 'loads.id')
                            ->whereColumn('load_drivers.load_id', '=', 'loads.id')
                            ->whereNull('loads.deleted_at')
                            ->whereNull('load_receivers.deleted_at')
                            ->orderByDesc('delivery_date')
                            ->limit(1);
                    }, '<=', request('endDate'));

            })
            ->when(request()->has('startDate') && !request()->has('endDate'),function ($query){
              return $query
                ->where(function ($query) {
                  return $query->selectRaw('load_receivers.delivery_date as delivery_date')
                    ->from('load_receivers')
                    ->leftJoin('loads', 'load_receivers.load_id', '=', 'loads.id')
                    ->whereColumn('load_receivers.load_id', '=', 'loads.id')
                    ->whereColumn('load_drivers.load_id', '=', 'loads.id')
                    ->whereNull('loads.deleted_at')
                    ->whereNull('load_receivers.deleted_at')
                    ->orderByDesc('delivery_date')
                    ->limit(1);
                }, request('startDate'));
            })
            ->when(
                request()->has(['sortField', 'sortOrder']),
                function ($query) {
                    $sortField = request('sortField', 'load_unique_id');
                    $sortOrder = request('sortOrder', 'asc');

                    if ($sortField == 'load_unique_id') {
                        return $query->orderBy(function ($query) {
                            return $query->select('load_unique_id')
                                ->from('loads')
                                ->whereColumn('loads.id', 'load_drivers.load_id')
                                ->limit(1);
                        }, $sortOrder);
                    }

                    if ($sortField == 'trailer_number') {
                        return $query->orderBy(function ($query) {
                            return $query->select('number')
                                ->from('trailers')
                                ->whereColumn('trailers.id', 'load_drivers.trailer_id')
                                ->limit(1);
                        }, $sortOrder);
                    }

                    if ($sortField == 'delivery_date') {
                        return $query->orderBy(function ($query) {
                            return $query->selectRaw('load_receivers.delivery_date as delivery_date')
                                ->from('load_receivers')
                                ->leftJoin('loads', 'load_receivers.load_id', '=', 'loads.id')
                                ->whereColumn('load_receivers.load_id', '=', 'loads.id')
                                ->whereColumn('load_drivers.load_id', '=', 'loads.id')
                                ->whereNull('loads.deleted_at')
                                ->whereNull('load_receivers.deleted_at')
                                ->orderByDesc('delivery_date')
                                ->limit(1);
                        }, $sortOrder);
                    }

                    if ($sortField == 'receiver_location') {
                        return $query->orderBy(function ($query) {
                            return $query->selectRaw('CONCAT(load_receivers.city, load_receivers.state) as receiver_location')
                                ->from('load_receivers')
                                ->leftJoin('loads', 'load_receivers.load_id', '=', 'loads.id')
                                ->whereColumn('load_receivers.load_id', '=', 'loads.id')
                                ->whereColumn('load_drivers.load_id', '=', 'loads.id')
                                ->whereNull('loads.deleted_at')
                                ->whereNull('load_receivers.deleted_at')
                                ->limit(1);
                        }, $sortOrder);
                    }

                    return $query;
                },
                function ($query) {
                    return $query->latest();
                }
            )
            ->when(
                request()->has(['to_download']),
                function ($query) use ($perPage) {
                    if (request('to_download') == 1) {
                        return $query->get();
                    }

                    return $query->paginate($perPage);
                },
                function ($query) use ($perPage) {
                    return $query->paginate($perPage);
                }
            );
    }

    public function exportReport($dropTrailers): array
    {
        $companyId = Auth::user()->admin_company_detail_id;
        $fileName = "$companyId-Drop-Trailer-Report.xlsx";
        $path = config('constant.export_path') . $fileName;

        Excel::store(new DropTrailerReportExport($dropTrailers), $path, 's3');

        return [
            'download_url' => getExportFile($fileName)
        ];
    }
}
