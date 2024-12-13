<?php

namespace App\Services;

use App\Models\Load;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PipelineService {
  public function getLoadsEagerLoading(): Collection {
    $currentUser = User::select('id', 'role', 'admin_company_detail_id', 'tag_access')
      ->where('id', Auth::id())
      ->with(['tags:id'])
      ->first();
    $adminCompanyDetailId = $currentUser->admin_company_detail_id;

    $currentUserRole = $currentUser->role;
    $onlyAccessToTagLoads = $currentUser->tag_access == 1 ? true : false;
    $currentUserTags = [];
    if (!empty($currentUser->tags)) {
      $currentUserTags = Arr::pluck($currentUser->tags->toArray(), 'id');
    }

    return Load::query()->with([
      'adminCompanyDetail:id,timezone',
      'loadShippers:id,load_id,city,state,shipping_date,shipping_end_date,shipping_time,shipping_end_time,order',
      'loadReceivers:id,load_id,city,state,delivery_date,delivery_end_date,delivery_time,delivery_end_time,order',
      'customer:id,company_name,billing_email,no_factoring',
      'loadDrivers:id,load_id,truck_id', // should not need driver_ids
      'loadDrivers.truck:id,number',
      'loadDrivers.driverAsUsers:id',
      'loadDrivers.driverAsUsers.driverDetail:user_id,name',
    ])
      ->where('admin_company_detail_id', '=', $adminCompanyDetailId)
      ->when(
        !empty($currentUserTags),
        function ($query) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
          $query->where(function ($query2) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
            if ($currentUserRole == config('constant.roles.tag_operator')) {
              // I don't even know why loads.tag_id works.
              $query2->whereIn('tag_id', $currentUserTags);
            } else {
              $query2->whereIn('tag_id', $currentUserTags);
              if ($onlyAccessToTagLoads == false) {
                $query2->orWhereNull('tag_id');
              }
            }
          });
        }
      )
      ->when(request('startDate') && request('endDate'), function ($query) {
        $query->where(function ($query2) {
          $query2->whereHas('loadShippers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'shipping_date',
              [request('startDate'), request('endDate')]
            );
          })->orWhereHas('loadReceivers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'delivery_date',
              [request('startDate'), request('endDate')]
            );
          });
        });
      })
      ->orderBy(function ($query) {
        $query->selectRaw('delivery_date')
          ->from('load_receivers')
          ->whereColumn('load_receivers.load_id', 'loads.id')
          ->orderByDesc('delivery_date')
          ->limit(1);
      }, 'desc')
      ->where('status', '!=', config('constant.status.load.canceled')) //ignored canceled load for now
      ->get();
  }

  public function getPipeline(): Collection {
    $adminCompanyDetailId = Auth::user()->admin_company_detail_id;
    return Load::query()
      ->with([
        'adminCompanyDetail',
        'loadCharge',
        'loadShippers',
        'loadReceivers',
        'customer',
        'dispatcher',
        'loadImages',
        'loadDrivers',
        'rateConfirmations',
      ])
      ->where('admin_company_detail_id', '=', $adminCompanyDetailId)
      ->when(!empty(request('startDate') && !empty(request('endDate'))), function ($query) {
        return $query
          ->where(function ($query) {
            $query->select('delivery_date')
              ->from('load_receivers')
              ->whereColumn('load_id', 'loads.id')
              ->orderByDesc('delivery_date')
              ->limit(1);
          }, '>=', request('startDate'))
          ->where(function ($query) {
            $query->select('delivery_date')
              ->from('load_receivers')
              ->whereColumn('load_id', 'loads.id')
              ->orderByDesc('delivery_date')
              ->limit(1);
          }, '<=', request('endDate'));
        //                return $query->whereHas('loadReceivers', function ($query) {
        //                    return $query->whereBetween(
        //                        'delivery_date',
        //                        [request('startDate'), request('endDate')]
        //                    );
        //                });
      })
      ->orderBy(function ($query) {
        $query->selectRaw('delivery_date')
          ->from('load_receivers')
          ->whereColumn('load_receivers.load_id', 'loads.id')
          ->orderByDesc('delivery_date')
          ->limit(1);
      }, 'desc')
      ->get();
  }

  /**
   * Get Load Pipeline
   * @return mixed
   */
  public function getLoadPipeline(): Collection {
    $currentUser = User::select('id', 'role', 'admin_company_detail_id', 'tag_access')
      ->where('id', Auth::id())->with(['tags:id'])->first();
    $adminCompanyDetailId = $currentUser->admin_company_detail_id;

    $currentUserRole = $currentUser->role;
    $onlyAccessToTagLoads = $currentUser->tag_access == 1 ? true : false;
    $currentUserTags = [];
    if (!empty($currentUser->tags)) {
      $currentUserTags = Arr::pluck($currentUser->tags->toArray(), 'id');
    }
    // DB::enableQueryLog();
    $ret = Load::query()->with([
      'adminCompanyDetail:id,timezone',
      'loadShippers:id,shipper_name,load_id,city,state,shipping_date,'
        . 'shipping_end_date,shipping_time,shipping_end_time,order,'
        . 'freight_equipment_type,freight_description',
      'loadReceivers:id,receiver_name,load_id,city,state,delivery_date,'
        . 'delivery_end_date,delivery_time,delivery_end_time,order',
      'customer:id,company_name,billing_email,no_factoring',
      'loadDrivers:id,load_id,truck_id,trailer_id,external_trailer_number', // should not need driver_ids
      'loadDrivers.truck:id,number',
      'loadDrivers.trailer:id,number',
      'loadDrivers.driverAsUsers:id',
      'loadDrivers.driverAsUsers.driverDetail:user_id,name',
    ])
      ->where('admin_company_detail_id', '=', $adminCompanyDetailId)
      ->when(
        !empty($currentUserTags),
        function ($query) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
          $query->where(function ($query2) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
            if ($currentUserRole == config('constant.roles.tag_operator')) {
              $query2->whereIn('tag_id', $currentUserTags);
            } else {
              $query2->whereIn('tag_id', $currentUserTags);
              if ($onlyAccessToTagLoads == false) {
                $query2->orWhereNull('tag_id');
              }
            }
          });
        }
      )
      ->when(request('startDate') && request('endDate'), function ($query) {
        $query->whereBetween('i_end_date', [request('startDate'), request('endDate')]);
        /*
        ->whereHas('loadShippers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'shipping_date',
              [request('startDate'), request('endDate')]
            );
          })->orWhereHas
          */
        /*
        $query->where(function ($query2) {
          $query2->whereHas('loadReceivers', function ($innerQuery) {
              $innerQuery->whereBetween(
                'delivery_date',
                [request('startDate'), request('endDate')]
              );
            });
        });
        */
      })
      ->when(request('filters.dispatcherIds'), function ($query) {
        $query->whereIn('dispatcher_id', request('filters.dispatcherIds'));
      })
      ->when(request('filters.tagIds'), function ($query) {
        $query->whereIn('tag_id', request('filters.tagIds'));
      })
      ->when(request('filters.driverIds'), function ($query) {
        $query->whereHas('loadDrivers.driverAsUsers', function ($innerQuery) {
          $innerQuery->whereIn('load_driver_user.user_id', request('filters.driverIds'));
        });
      })
      ->orderBy(function ($query) {
        $query->selectRaw('delivery_date')
          ->from('load_receivers')
          ->whereColumn('load_receivers.load_id', 'loads.id')
          ->orderByDesc('delivery_date')
          ->limit(1);
      }, 'desc')
      ->where('status', '!=', config('constant.status.load.canceled')) //ignored canceled load for now
      ->get();
    // error_log(json_encode(DB::getQueryLog()));
    return $ret;
  }
}
