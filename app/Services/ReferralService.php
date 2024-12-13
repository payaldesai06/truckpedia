<?php

namespace App\Services;

use App\Mail\Referral\ReferralNotification;
use App\Models\AdminCompanyDetail;
use App\Models\Referral;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ReferralService {
  /**
   * Get Referral code or generate a new referral code if not exists.
   * @return mixed
   */
  public function getReferralLink() {
    return DB::transaction(function () {
      $companyId = getAuthAdminCompanyId();
      $adminCompanyDetail = AdminCompanyDetail::select('referral_code')
        ->where('id', $companyId)
        ->first();

      $referralCode = $adminCompanyDetail->referral_code;

      if (empty($referralCode)) {
        /* referral code not exists */
        $referralCode = $this->checkReferralCodeExist();
        AdminCompanyDetail::where('id', $companyId)
          ->update([
            'referral_code' => $referralCode
          ]);
      }

      return [
        'referral_code' => $referralCode
      ];
    });
  }

  /**
   * Generate unique referral code.
   * @return string
   */
  private function checkReferralCodeExist(): string {
    while (true) {
      $newGeneratedReferralCode = strtoupper(Str::random(8));
      if (!AdminCompanyDetail::where('referral_code', $newGeneratedReferralCode)->exists()) {
        break;
      }
    }
    return $newGeneratedReferralCode;
  }

  /**
   * Submit a referral.
   * @param $request
   * @throws Exception
   */
  public function submitReferral($request) {
    $companyId = getAuthAdminCompanyId();
    $adminCompanyDetail = AdminCompanyDetail::select('business_name')
      ->where('id', $companyId)->first();
    $logMessage = 'Referral from ' . $adminCompanyDetail->business_name
      . ': ' . implode(',', $request->all());
    $newReferral = Referral::create([
      'company_id' => $companyId,
      "company_name" => $request->companyName,
      "first_name" => $request->firstName,
      "last_name" => $request->lastName,
      "phone" => $request->phone,
      "email" => $request->email,
      "state" => $request->state,
      "number_of_trucks" => $request->numberOfTrucks
    ]);

    if (app()->environment('production')) {
      $sendTo = config('constant.emails.support');
      Log::channel('slack_confidential-prod-data')->critical($logMessage);
    } else {
      $sendTo = Auth::user()->email;
    }
    Mail::queue(new ReferralNotification(
      $sendTo,
      $adminCompanyDetail->business_name,
      $newReferral
    ));
    return;
  }

  /**
   * Get Earnings.
   * @return mixed
   */
  public function getEarnings() {
    return DB::transaction(function () {
      $companyId = getAuthAdminCompanyId();
      $currentMonthEarnings = $currentYearEarnings = 0;
      $referralList = [];
      $referralCompanies = AdminCompanyDetail::select(
        'id',
        'business_name',
        'email',
        'timezone'
      )->where('referred_by_company_id', $companyId)
        ->with([
          'transactions' => function ($query) {
            $query->select(
              'id',
              'admin_company_detail_id',
              'amount',
              'status',
              'from_date',
              'created_at'
            )
              ->where('status', 1);
          }
        ])
        ->get();

      foreach ($referralCompanies as $company) {
        $subscribeSince = $monthlyEarnings = null;
        $transactions = $company->transactions ?? collect();
        $dateFormat = config('constant.date_format');
        if ($transactions->isNotEmpty()) {
          $timezone = $company->timezone ?? config('constant.defaultTimeZone');
          //month earnings
          $firstDayOfLocalMonth = Carbon::now($timezone)->startOfMonth()->format($dateFormat);
          $startOfDayInUtc1 = getLocalDateStartOfDayInUtc($firstDayOfLocalMonth, $timezone);
          $currentMonthEarnings += $transactions->where('created_at', '>=', $startOfDayInUtc1)
            ->sum('amount');
          //year earnings
          $firstDayOfLocalYear = Carbon::now($timezone)->startOfYear()->format($dateFormat);
          $startOfDayInUtc2 = getLocalDateStartOfDayInUtc($firstDayOfLocalYear, $timezone);
          $currentYearEarnings += $transactions->where('created_at', '>=', $startOfDayInUtc2)
            ->sum('amount');
          $subscribeSince = $transactions->sortBy('id')->first()->from_date ?? null;
          $monthlyEarnings = $transactions->sortByDesc('id')->first()->amount ?? null;
        }
        $referralList[] = [
          'companyId' => $company->id,
          'companyName' => $company->business_name ?? null,
          'companyEmail' => $company->email ?? null,
          'subscribeSince' => $subscribeSince,
          'monthlyEarnings' => $monthlyEarnings > 0 ?
            number_format(($monthlyEarnings * 0.1), 2) : null,
        ];
      }

      return [
        'currentMonthEarnings' => $currentMonthEarnings > 0 ?
          number_format(($currentMonthEarnings * 0.1), 2) : 0,
        'currentYearEarnings' => $currentYearEarnings > 0 ?
          number_format(($currentYearEarnings * 0.1), 2) : 0,
        'referralList' => $referralList,
      ];
    });
  }
}
