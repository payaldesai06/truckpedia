<?php

namespace App\Services;

use App\Models\Automation;
use App\Models\ExpenseType;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use App\Models\DriverPayTemplateCustomField;
use Illuminate\Support\Facades\DB;

class AdminCompanyProfileService {

  /**
   * Setup Profile for registered company.
   * @param $customerServiceId
   * @return HigherOrderTapProxy|mixed
   * @throws Exception
   */
  public function setupProfile($customerServiceId) {
    $user = Auth::user();
    if ($user->admin_company_detail_id) {
      throw new Exception('Have you logged in another ' . config('app.name') . ' account? Please log out and log in again.');
    }
    $businessUrl = !empty(request('business_url')) ? strtolower(request('business_url')) : null;
    if (
      !empty($businessUrl)
      && !isValidBusinessUrlAndNotExist($businessUrl)
    ) {
      throw new Exception(config('response.url.not_available'));
    }
    $customDomain = !empty(request('customDomain')) ? strtolower(request('customDomain')) : null;
    if (
      !empty($customDomain)
      && !isValidCustomDomainAndNotExist($customDomain)
    ) {
      throw new Exception(config('response.customDomain.not_available'));
    }
    $data = request([
      'business_name',
      'usdot_number',
      'address',
      'city',
      'state',
      'zipcode',
      'fax_number',
      'timezone',
    ]);
    if (empty($data['usdot_number'])) {
      $data['usdot_number'] = '';
    }

    $data['load_unique_id_started_from'] = request('load_unique_id_started_from') ?? 1000;
    if (empty($data['address'])) {
      $data['address'] = '';
    }
    if (empty($data['city'])) {
      $data['city'] = '';
    }
    if (empty($data['state'])) {
      $data['state'] = '';
    }
    if (empty($data['zipcode'])) {
      $data['zipcode'] = '';
    }
    if (empty($data['phone_number'])) {
      $data['phone_number'] = '';
    }

    if (request()->has('companyType')) {
      $data['company_type'] = array_search(request('companyType'), config('constant.companyType'));
    }

    if (!empty($businessUrl)) {
      $data['business_url'] = $businessUrl;
    }
    if (!empty($customDomain)) {
      $data['custom_domain'] = $customDomain;
    }
    $data['email'] = request('email');
    if (request()->has('business_email') && !empty(request('business_email'))) {
      $data['email'] = request('business_email');
    }

    if (request()->has('referredByCompanyId')) {
      $data['referred_by_company_id'] = request('referredByCompanyId');
    }
    $data['trial_valid_till'] = Carbon::now()
      ->addDays(config('constant.company.trial_valid_day'))
      ->format(config('constant.date_format'));
    $data['subscription_status'] = config('constant.subscription_status.in_active');
    $data['stripe_customer_id'] = $customerServiceId;
    $data['user_id'] = $user->id;
    //When a carrier company (not shipper or broker) registers, please automatically put feature_access = 7
    if (
      !request()->has('companyType') ||
      (request()->has('companyType') && request('companyType') === 'carrier')
    ) {
      $data['feature_access'] = array_search('basic', config('constant.company.features'));
    }
    return tap(
      $user,
      function ($user) use ($data) {
        $adminCompanyDetail = $user->adminCompanyDetail()->create($data);
        $user->update(['admin_company_detail_id' => $adminCompanyDetail->id]);

        /* Create default task automation entry for company.*/
        Automation::create([
          'company_id' => $adminCompanyDetail->id
        ]);

        // foreach (config('constant.default_expense_type') as $expenseType) {
        //   ExpenseType::create([
        //     'company_id' => $adminCompanyDetail->id,
        //     'title' => $expenseType,
        //   ]);
        // }

        //auto generate load and trip fields of company
        $this->autoGenerateFields($adminCompanyDetail->id);

        //add default accessorial fees for company
        $defaultAccessorialFees = config('constant.company.defaultAccessorialFee');
        $accessorialFeesToInsert = [];
        foreach ($defaultAccessorialFees as $defaultAccessorialFee) {
          $accessorialFeesToInsert[] = [
            'user_id' => $user->id,
            'name' => $defaultAccessorialFee,
            'description' => $defaultAccessorialFee,
          ];
        }
        if (!empty($accessorialFeesToInsert)) {
          $adminCompanyDetail->accessorialFees()->createMany($accessorialFeesToInsert);
        }
      }
    );
  }

  public function updateCompanyProfile($adminCompanyDetail) {
    $data = request()->only([
      'business_name',
      'email',
      'phone_number',
      'address',
      'state',
      'city',
      'zipcode'
    ]);

    $billingCcEmails = array_filter(request('billing_cc_emails')) ?? null;
    $billingCcEmails = !empty($billingCcEmails) ? implode(',', $billingCcEmails) : null;
    $data = array_merge($data, ['billing_cc_emails' => $billingCcEmails]);

    if (request()->filled('company_image')) {
      $data['company_image'] = request('company_image');
    } elseif (request('removedImage') == true) {
      $data['company_image'] = null;
    }

    return $adminCompanyDetail->update($data);
  }

  /**
   * Auto Generate fields of load and trip for company.
   * @param $companyId
   * @return mixed
   */
  public function autoGenerateFields($companyId) {
    return DB::transaction(function () use ($companyId) {
      //auto create load fields
      $fields = config('constant.driverPayTemplate.type');
      $targetLoad = array_search('load', config('constant.driverPayTemplate.target'));
      $targetTrip = array_search('trip', config('constant.driverPayTemplate.target'));
      $byPercentageOfHaulingFee = config('constant.driverPayTemplate.type')[6];
      $byPercentageOfFuelSurcharge = config('constant.driverPayTemplate.type')[7];
      $byPercentageOfTotalIncome = config('constant.driverPayTemplate.type')[8];
      $flatPay = config('constant.driverPayTemplate.type')[3];
      $stopPay = config('constant.driverPayTemplate.type')[4];
      foreach ($fields as $field) {
        $fieldData = [
          'company_id' => $companyId,
          'target' => $targetLoad,
          'type' => array_search($field, config('constant.driverPayTemplate.type')),
          'name' => config('constant.driverPayTemplate.defaultName')[$field]
        ];
        if (!in_array($field, [
          $byPercentageOfHaulingFee,
          $byPercentageOfFuelSurcharge,
          $byPercentageOfTotalIncome
        ])) {
          $fieldData['default_rate'] = 0;
          if ($field == $stopPay) {
            $fieldData['default_pay_start_after'] = 2;
          }
          //auto create trip flatPay field
          else if ($field == $flatPay) {
            $tripFieldData = $fieldData;
            $tripFieldData['target'] = $targetTrip;
            DriverPayTemplateCustomField::firstOrCreate($tripFieldData);
          }
        } else {
          $fieldData['default_percentage_in_fractional'] = 0;
        }
        DriverPayTemplateCustomField::firstOrCreate($fieldData);
      }
    });
  }

  /**
   * Generate pre-signed url of s3 to upload company logo.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getCompanyFileUploadUrl($request): array {
    $fileName = 'logo-' . generateUniqueFileName($request->companyId, $request->extension);
    return [
      'storageFileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.admin_company_image'))
    ];
  }
}
