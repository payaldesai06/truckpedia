<?php

namespace App\Services\SuperAdmin;

use App\Models\AdminCompanyDetail;
use App\Models\Load;
use App\Models\Trailer;
use App\Models\Truck;
use App\Models\User;
use App\Services\Helpers\CompanyStatisticsHelper;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Exception;

class AdminCompanyDetailService {
  public function getAdminCompanyDetailDatatable(): LengthAwarePaginator {
    $per_page = request('rows') ?? config('response.per_page');

    return AdminCompanyDetail::query()
      ->when(request()->has('business_name'), function ($query) {
        return $query->where('business_name', 'like', '%' . request('business_name') . '%');
      })
      ->when(request()->has('usdot_number'), function ($query) {
        return $query->where('usdot_number', 'like', '%' . request('usdot_number') . '%');
      })
      ->when(request()->has('address'), function ($query) {
        return $query->where('address', 'like', '%' . request('address') . '%');
      })
      ->when(request()->has('referral_code'), function ($query) {
        return $query->where('referral_code', 'like', '%' . request('referral_code') . '%');
      })
      ->when(request()->has('phone_number'), function ($query) {
        return $query->where('phone_number', 'like', '%' . request('phone_number') . '%');
      })
      ->when(request()->has('trial_valid_till'), function ($query) {
        return $query->where('trial_valid_till', 'like', '%' . request('trial_valid_till') . '%');
      })
      ->when(request()->has('subscription_status'), function ($query) {
        return $query->where('subscription_status', 'like', '%' . request('subscription_status') . '%');
      })
      ->orderBy(
        request('sortField', 'created_at'),
        request('sortOrder', 'desc')
      )
      ->paginate($per_page);
  }

  public function getAdminCompanyDetailShow($request) {
    $adminCompanyDetails = AdminCompanyDetail::withCount(['admins', 'dispatchers', 'drivers', 'trucks', 'trailers', 'loads'])
      ->with(['fmcsaCarrier:id,company_id'])
      ->where('id', '=', request('adminCompanyDetails'))
      ->first();

    $statisticsHelper = (new CompanyStatisticsHelper())->countOneCompanyActiveLoadsDriversTrucksInPeriod($adminCompanyDetails->id, $request->startDate, $request->endDate);

    $adminCompanyDetails->activeDrivers = $statisticsHelper['drivers'] ?? 0;
    $adminCompanyDetails->activeTrucks = $statisticsHelper['trucks'] ?? 0;
    $adminCompanyDetails->activeLoads = $statisticsHelper['loads'] ?? 0;

    return $adminCompanyDetails;
  }

  public function extendTrial() {
    /* get user admin details */
    $adminCompanyDetails = AdminCompanyDetail::select('trial_valid_till')->where('id', request('adminCompanyDetails'));

    if (empty($adminCompanyDetails->first())) {
      return [
        'status' => false,
        'message' => 'Company details not found'
      ];
    }

    $adminCompanyDetails->update([
      'trial_valid_till' => request('trial_valid_till')
    ]);

    return [
      'status' => true,
      'message' => 'Trial Version updated successfully'
    ];
  }

  public function getCompanyAdmins() {
    $per_page = request('rows') ?? config('response.per_page');
    return User::where('admin_company_detail_id', request('adminCompanyDetails'))->where('role', config('constant.roles.admin'))->paginate($per_page);
  }

  public function getCompanyDispatchers() {
    $per_page = request('rows') ?? config('response.per_page');
    return User::where('admin_company_detail_id', request('adminCompanyDetails'))->where('role', config('constant.roles.dispatcher'))->paginate($per_page);
  }

  public function getCompanyDrivers() {
    $per_page = request('rows') ?? config('response.per_page');
    return User::where('admin_company_detail_id', request('adminCompanyDetails'))->where('role', config('constant.roles.driver'))->paginate($per_page);
  }

  public function getCompanyLoads() {
    $per_page = request('rows') ?? config('response.per_page');
    return Load::where('admin_company_detail_id', request('adminCompanyDetails'))->paginate($per_page);
  }

  public function getCompanyTrucks() {
    $per_page = request('rows') ?? config('response.per_page');
    return Truck::where('company_id', request('adminCompanyDetails'))
      ->paginate($per_page);
  }

  public function getCompanyTrailers() {
    $per_page = request('rows') ?? config('response.per_page');
    return Trailer::where('company_id', request('adminCompanyDetails'))
      ->paginate($per_page);
  }

  public function updateMonthlyFees($request) {
    $data = [
      'monthly_fee' => $request->monthly_fee,
      'subscription_renew_frequency' => $request->subscriptionRenewFrequency ?? null,
    ];
    if ($request->has('monthly_fee_per_unit')) {
      $data['monthly_fee_per_unit'] = $request->monthly_fee_per_unit;
    }
    return AdminCompanyDetail::where('id', $request->adminCompanyDetails)
      ->update($data);
  }

  public function updateCompanyTrial($request) {
    return AdminCompanyDetail::where('id', $request->adminCompanyDetails)
      ->update([
        'trial_valid_till' => $request->trial_valid_till
      ]);
  }

  /**
   * Update company feature accesses.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateCompanyFeatureAccess($request) {
    $featureAccess = !empty($request->featureAccess) ? $request->featureAccess : null;
    if (!empty($featureAccess)) {
      $featureAccess = array_map(function ($feature) {
        return array_search($feature, config('constant.company.features'));
      }, $featureAccess);
      $featureAccess = implode(',', $featureAccess);
    }
    return AdminCompanyDetail::where('id', $request->adminCompanyDetails)->update([
      'feature_access' => $featureAccess
    ]);
  }

  /**
   * Create company admin user.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createCompanyAdminUser($request) {
    return DB::transaction(function () use ($request) {
      $validatedData = $this->getValidatedUserData($request);
      $user = User::create($validatedData);
      return $user->adminDetail()->create($this->getValidatedAdminData($request));
    });
  }

  /**
   * Validate user data.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  private function getValidatedUserData($request) {
    return [
      'email' => $request->email,
      'password' => $request->password,
      'first_name' => $request->firstName,
      'last_name' => $request->lastName,
      'role' => config('constant.roles.admin'),
      'admin_company_detail_id' => $request->adminCompanyDetails,
      'status' => config('constant.status.user.active'),
    ];
  }

  /**
   * Validate admin user data.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  private function getValidatedAdminData($request) {
    return [
      'first_name' => $request->firstName,
      'last_name' => $request->lastName,
    ];
  }
}
