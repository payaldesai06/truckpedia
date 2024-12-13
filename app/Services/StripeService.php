<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\Transaction;
use App\Models\User;
use App\Services\Helpers\CompanyStatisticsHelper;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class StripeService {
  public function createCustomer() {
    $user = $this->getAuthUser();

    //create stripe customer
    return resolve('stripe')->customers->create([
      'description' => 'user id-' . $user->id,
      'name' => request('business_name'),
      'email' => $user->email,
    ]);
  }

  public function updateCustomer($request, $adminCompanyDetail) {
    $perameters = [];

    if ($adminCompanyDetail->business_name != $request->business_name) {
      $perameters['name'] = $request->business_name;
    }
    if ($adminCompanyDetail->email != $request->email) {
      $perameters['email'] = $request->email;
    }

    if (!empty($perameters)) {
      $stripeCustomerId = $adminCompanyDetail->stripe_customer_id;
      return resolve('stripe')->customers->update(
        $stripeCustomerId,
        $perameters,
      );
    }
  }

  public function cardCreate() {
    $adminCompanyDetail = $this->getAdminCompanyDetail();

    if (empty($adminCompanyDetail->stripe_payment_method_id)) {
      return $this->attachCardToCustomer($adminCompanyDetail);
    } else {
      $paymentMethodId = $adminCompanyDetail->stripe_payment_method_id;
      $card = $this->attachCardToCustomer($adminCompanyDetail);
      $this->removeCardFromCustomer($paymentMethodId);
      return $card;
    }
  }

  public function cardDelete() {
    $adminCompanyDetail = $this->getAdminCompanyDetail();

    if ($adminCompanyDetail->subscription_status == config('constant.subscription_status.canceled') || $adminCompanyDetail->subscription_status == config('constant.subscription_status.in_active')) {

      $this->removeCardFromCustomer($adminCompanyDetail->stripe_payment_method_id);

      //add stripe card in admin company detail table
      $adminCompanyDetail->update([
        'stripe_payment_method_id' => null,
      ]);
    } else {
      //return error message to subscription status is invalid
      throw new Exception('subscription status is invalid.');
    }
  }

  public function attachCardToCustomer($adminCompanyDetail) {
    //card create
    $stripeCard = resolve('stripe')->paymentMethods->attach(
      request('payment_method_id'),
      [
        'customer' => $adminCompanyDetail->stripe_customer_id,
      ]
    );

    //add stripe card in admin company detail table
    $adminCompanyDetail->update([
      'stripe_payment_method_id' => $stripeCard->id,
    ]);

    return $stripeCard;
  }

  public function removeCardFromCustomer($paymentMethodId) {
    return resolve('stripe')->paymentMethods->detach(
      $paymentMethodId,
      []
    );
  }

  public function retrieveCardToCustomer() {
    $adminCompanyDetail = $this->getAdminCompanyDetail();

    return resolve('stripe')->paymentMethods->retrieve(
      $adminCompanyDetail->stripe_payment_method_id,
      []
    );
  }

  public function cronDailyAutoRenewSubscriptions() {
    $currentDate = Carbon::now()->toDateString();
    Log::channel('cron')->notice(
      'cronDailyAutoRenewSubscriptions starts at ' .
        Carbon::now()->toDateTimeString()
    );

    $adminCompanyDetails = AdminCompanyDetail::where(
      'subscription_to_date',
      $currentDate
    )
      ->where(
        'subscription_status',
        config('constant.subscription_status.active')
      )
      ->get();

    Log::channel('cron')->notice('sizeof: ' . sizeof($adminCompanyDetails));

    $companyStatisticsHelper = new CompanyStatisticsHelper();
    foreach ($adminCompanyDetails as $adminCompanyDetail) {
      try {
        $companyId = $adminCompanyDetail->id;
        $subscriptionFromDate = $adminCompanyDetail->subscription_from_date;
        $subscriptionToDate = $adminCompanyDetail->subscription_to_date;
        $activeDriversAndTrucks = $companyStatisticsHelper
          ->countOneCompanyActiveDriversAndTrucksInPeriod($companyId, $subscriptionFromDate, $subscriptionToDate);
        // $maxCount = max($activeDriversAndTrucks['drivers'], $activeDriversAndTrucks['trucks']);

        $logMessage = $adminCompanyDetail->business_name . ' has '
          . $activeDriversAndTrucks['drivers'] . ' active drivers and '
          . $activeDriversAndTrucks['trucks'] . ' active trucks.';
        Log::channel('cron')->notice($logMessage);
        Log::channel('slack_confidential-prod-data')->critical($logMessage);

        $chargeAmount = 0;

        if ($adminCompanyDetail->monthly_fee_per_unit && $activeDriversAndTrucks['drivers']) {
          $chargeAmount = $adminCompanyDetail->monthly_fee_per_unit * $activeDriversAndTrucks['drivers'];
        }
        if ($adminCompanyDetail->monthly_fee) {
          $chargeAmount = max($chargeAmount, $adminCompanyDetail->monthly_fee);
        }

        if ($chargeAmount) {
          $this->renewSubscription($adminCompanyDetail, null, null, $chargeAmount);
        } else {
          $logMessage = 'ERROR: cannot charge ' . $adminCompanyDetail->business_name
            . '. monthly_fee_per_unit: ' . $adminCompanyDetail->monthly_fee_per_unit
            . ', drivers: ' . $activeDriversAndTrucks['drivers']
            . ', monthly_fee: ' . $adminCompanyDetail->monthly_fee;
          Log::channel('cron')->notice($logMessage);
          Log::channel('slack_confidential-prod-data')->critical($logMessage);
        }
      } catch (Exception $e) {
        $logMessage = 'Failed charging ' . $adminCompanyDetail->business_name
          . ': ' . $e->getMessage();
        Log::channel('cron')->notice($logMessage);
        Log::channel('slack_confidential-prod-data')->critical($logMessage);
      }
    }
  }

  private function renewSubscription(
    $adminCompanyDetail,
    $fromDate = null,
    $toDate = null,
    $amount = null
  ) {
    $adminCompanyDetailId = $adminCompanyDetail->id;
    $stripePaymentMethodId = $adminCompanyDetail->stripe_payment_method_id;
    if ($fromDate == null) {
      $currentDate = Carbon::now()->toDateString();
      $fromDate = $this->getNextDayDate($currentDate);
      $toDate = $this->getToDate($fromDate);
    }
    if (!$amount) {
      $amount = $adminCompanyDetail->monthly_fee;
    }
    //check subscription renew frequency
    $subscriptionRenewFrequency = !empty($adminCompanyDetail->subscription_renew_frequency) ?
      $adminCompanyDetail->subscription_renew_frequency : 1;
    if ($subscriptionRenewFrequency > 1) {
      $toDate = $this->getToDateWithFrequency($fromDate, $subscriptionRenewFrequency);
      $amount = $amount * $subscriptionRenewFrequency;
    }

    $stripePayment = $this->createPayment(
      $adminCompanyDetail->stripe_customer_id,
      $stripePaymentMethodId,
      $amount
    );

    if ($stripePayment->status == "succeeded") {
      $status = 1;
      DB::transaction(function () use (
        $stripePayment,
        $adminCompanyDetailId,
        $stripePaymentMethodId,
        $amount,
        $fromDate,
        $toDate,
        $adminCompanyDetail,
        $status
      ) {
        //update subscription_from_date & subscription_to_date date
        $this->updateSubscription(
          $adminCompanyDetail,
          $fromDate,
          $toDate,
          config('constant.subscription_status.active')
        );

        //insert transaction table
        $transaction = Transaction::create([
          'admin_company_detail_id' => $adminCompanyDetailId,
          'stripe_payment_method_id' => $stripePaymentMethodId,
          'stripe_transaction_id' => $stripePayment->id,
          'amount' => $amount,
          'response' => json_encode($stripePayment),
          'status' => $status,
          'from_date' => $fromDate,
          'to_date' => $toDate,
        ]);
        $logMessage = 'Charging success: ' . $adminCompanyDetail->business_name
          . ' at amount $' . $amount;
        Log::channel('cron')->notice($logMessage);
        Log::channel('slack_confidential-prod-data')->critical($logMessage);
      });
    } else {
      Log::emergency(json_encode($stripePayment));
      $status = 0;
      DB::transaction(function () use (
        $stripePayment,
        $adminCompanyDetailId,
        $stripePaymentMethodId,
        $amount,
        $fromDate,
        $toDate,
        $adminCompanyDetail,
        $status
      ) {
        //insert transaction table
        Transaction::create([
          'admin_company_detail_id' => $adminCompanyDetailId,
          'stripe_payment_method_id' => $stripePaymentMethodId,
          'stripe_transaction_id' => $stripePayment->id,
          'amount' => $amount,
          'response' => json_encode($stripePayment),
          'status' => $status,
          'from_date' => $fromDate,
          'to_date' => $toDate,
        ]);

        //update subscription_from_date & subscription_to_date date
        $adminCompanyDetail->update([
          'subscription_status' => config('constant.subscription_status.suspended'),
        ]);
        Log::channel('cron')->notice('fail: ' . $adminCompanyDetailId);
      });
      throw new Exception("Payment failed, status: " . $stripePayment->status);
    }
  }

  public function addManualSubscription() {
    $adminCompanyDetail = $this->getAdminCompanyDetail();
    $currentDate = Carbon::now()->toDateString();
    $user = $this->getAuthUser();

    //check card is exist or not
    if (empty($adminCompanyDetail->stripe_payment_method_id)) {
      //return error message to please enter your card
      throw new Exception('Please enter your card.');
    } else {
      //check subscription status is valid or invalid
      if ($adminCompanyDetail->subscription_status != config('constant.subscription_status.suspended')) {
        //return error message to subscription status is invalid
        throw new Exception('Subscription status is invalid.');
      } else {
        //get transaction
        $transaction = Transaction::findOrFail(request('subscription'));

        //create stripe payment
        $stripePayment = $this->createPayment(
          $adminCompanyDetail->stripe_customer_id,
          $adminCompanyDetail->stripe_payment_method_id,
          $transaction->amount
        );

        //when payment successful then update transaction table
        if ($stripePayment->status == "succeeded") {
          DB::transaction(function () use ($transaction, $stripePayment, $currentDate, $adminCompanyDetail) {
            $fromDate = $transaction->from_date;
            // $this->getNextDayDate($currentDate);
            $toDate = $transaction->to_date;
            // $this->getToDate($fromDate);
            //update subscription_from_date & subscription_to_date date & status
            $this->updateSubscription(
              $adminCompanyDetail,
              $fromDate,
              $toDate,
              config('constant.subscription_status.active')
            );

            //update transaction table
            $transaction->update([
              'stripe_transaction_id' => $stripePayment->id,
              'new_response' => json_encode($stripePayment),
              'status' => 1,
            ]);
          });
        } else {
          Log::emergency(json_encode($stripePayment));
          $transaction->update([
            'stripe_transaction_id' => $stripePayment->id,
            'new_response' => json_encode($stripePayment),
          ]);
          throw new Exception("Payment failed, status: " . $stripePayment->status);
        }
      }
    }
    return $user;
  }

  public function createPayment($stripeCustomerId, $paymentMethodId, $amount) {
    return resolve('stripe')->paymentIntents->create([
      'amount' => (int) ($amount * 100),
      'currency' => 'usd',
      'customer' => $stripeCustomerId,
      'payment_method' => $paymentMethodId,
      'confirm' => true,
    ]);
  }

  public function subscriptionPlaneActive() {
    $adminCompanyDetail = $this->getAdminCompanyDetail();
    $currentDate = Carbon::now()->toDateString();

    //check card is exist or not
    if (empty($adminCompanyDetail->stripe_payment_method_id)) {
      //return error message to please enter your card
      throw new Exception('Please enter your card.');
    } else if (empty($adminCompanyDetail->monthly_fee)) {
      throw new Exception('Please contact ' . config('app.name') . ' sales rep.');
    } else if ($adminCompanyDetail->subscription_status != config('constant.subscription_status.in_active') && $adminCompanyDetail->subscription_status != config('constant.subscription_status.canceled')) {
      //check subscription status is valid or invalid
      //return error message to subscription status is invalid
      throw new Exception('subscription status is invalid.');
    } else {
      if ($adminCompanyDetail->trial_valid_till > $currentDate) {
        $fromDate = $this->getNextDayDate(
          $adminCompanyDetail->trial_valid_till
        );
      } else {
        $fromDate = $currentDate;
      }
      $toDate = $this->getToDate($fromDate);

      $companyStatisticsHelper = new CompanyStatisticsHelper();
      $companyId = $adminCompanyDetail->id;
      $checkFromDate = Carbon::now()->subMonth()->toDateString();
      $checkToDate = $currentDate;
      $activeDriversAndTrucks = $companyStatisticsHelper
        ->countOneCompanyActiveDriversAndTrucksInPeriod($companyId, $checkFromDate, $checkToDate);
      // $maxCount = max($activeDriversAndTrucks['drivers'], $activeDriversAndTrucks['trucks']);

      $logMessage = $adminCompanyDetail->business_name . ' is activating subscription, has '
        . $activeDriversAndTrucks['drivers'] . ' active drivers and '
        . $activeDriversAndTrucks['trucks'] . ' active trucks.';
      Log::channel('cron')->notice($logMessage);
      Log::channel('slack_confidential-prod-data')->critical($logMessage);

      $chargeAmount = 0;

      if ($adminCompanyDetail->monthly_fee_per_unit && $activeDriversAndTrucks['drivers']) {
        $chargeAmount = $adminCompanyDetail->monthly_fee_per_unit * $activeDriversAndTrucks['drivers'];
      }
      if ($adminCompanyDetail->monthly_fee) {
        $chargeAmount = max($chargeAmount, $adminCompanyDetail->monthly_fee);
      }

      // No need to modify to date and chargeAmount here based on frequency,
      // because they are modified later in renewSubscription().

      if ($chargeAmount) {
        try {
          $this->renewSubscription($adminCompanyDetail, $fromDate, $toDate, $chargeAmount);
        } catch (Exception $e) {
          $logMessage = 'Failed charging ' . $adminCompanyDetail->business_name
            . ': ' . $e->getMessage();
          Log::channel('cron')->notice($logMessage);
          Log::channel('slack_confidential-prod-data')->critical($logMessage);
          throw $e;
        }
      } else {
        $logMessage = 'ERROR: cannot charge ' . $adminCompanyDetail->business_name
          . '. monthly_fee_per_unit: ' . $adminCompanyDetail->monthly_fee_per_unit
          . ', drivers: ' . $activeDriversAndTrucks['drivers']
          . ', monthly_fee: ' . $adminCompanyDetail->monthly_fee;
        Log::channel('cron')->notice($logMessage);
        Log::channel('slack_confidential-prod-data')->critical($logMessage);
        throw new Exception('No valid monthly fee.');
      }
    }

    return $this->getAuthUser();
  }

  public function subscriptionPlaneCancel() {
    $adminCompanyDetail = $this->getAdminCompanyDetail();

    //check subscription status is valid or invalid
    if ($adminCompanyDetail->subscription_status != config('constant.subscription_status.active')) {
      //return error message to subscription status is invalid
      throw new Exception('Subscription is not active.');
    } else {
      $adminCompanyDetail->update([
        'subscription_status' => config('constant.subscription_status.canceled'),
      ]);
    }
    return $this->getAuthUser();
  }

  private function updateSubscription(
    $adminCompanyDetail,
    $fromDate,
    $toDate,
    $status
  ) {
    $adminCompanyDetail->update([
      'subscription_from_date' => $fromDate,
      'subscription_to_date' => $toDate,
      'subscription_status' => $status,
    ]);
  }

  private function getAuthUser() {
    return Auth::user();
  }

  private function getAdminCompanyDetail() {
    $user = $this->getAuthUser();
    return AdminCompanyDetail::findorfail($user->admin_company_detail_id);
  }

  private function getToDate($date) {
    return Carbon::parse($date)->addMonthNoOverflow()->subDays(1)
      ->toDateString();
  }

  private function getNextDayDate($date) {
    return Carbon::parse($date)->addDays(1)->toDateString();
  }

  private function getToDateWithFrequency($date, $frequency) {
    return Carbon::parse($date)->addMonthsNoOverflow($frequency)->subDays(1)
      ->toDateString();
  }
}
