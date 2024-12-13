<?php

namespace App\Http\Resources\Company;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyDetailResource extends JsonResource {
  public function toArray($request): array {
    $featureAccess = [];
    if (!empty($this->feature_access)) {
      $featureAccess = explode(',', $this->feature_access);
      $featureAccess = array_map(function ($feature) {
        return config('constant.company.features')[$feature];
      }, $featureAccess);
    }
    return [
      'admin_company_detail_id' => $this->id ?? "",
      'business_name' => $this->business_name ?? "",
      'email' => $this->email ?? "",
      'usdot_number' => $this->usdot_number ?? "",
      'address' => $this->address ?? "",
      'city' => $this->city ?? "",
      'state' => $this->state ?? "",
      'zipcode' => $this->zipcode ?? "",
      'phone_number' => $this->phone_number ?? "",
      'fax_number' => $this->fax_number ?? "",
      'timezone' => $this->timezone ?? "",
      'company_image_url' => getImage($this->company_image, config('constant.s3.admin_company_image')) ?? "",
      'company_image' => $this->company_image ?? "",
      'trial_valid_till' => $this->trial_valid_till ?? "",
      'stripe_customer_id' => $this->stripe_customer_id ?? "",
      'stripe_payment_method_id' => $this->stripe_payment_method_id ?? "",
      'subscription_valid_till' => $this->subscription_valid_till ?? "",
      'subscription_from_date' => $this->subscription_from_date ?? "",
      'subscription_to_date' => $this->subscription_to_date ?? "",
      'subscription_status' => $this->subscription_status ?? "",
      'subscriptionRenewFrequency' => $this->subscription_renew_frequency ?? null,
      'auto_send_status_updates_to_collaborators' => $this->auto_send_status_updates_to_collaborators ?? '',
      'auto_send_status_updates_to_dispatcher' => $this->auto_send_status_updates_to_dispatcher ?? '',
      'auto_send_pod_to_collaborators' => $this->auto_send_pod_to_collaborators ?? '',
      'auto_send_detention_requests_to_collaborators' => $this->auto_send_detention_requests_to_collaborators ?? '',
      'detention_free_time_in_minutes' => $this->detention_free_time_in_minutes ?? '',
      'detention_charge_per_hour' => $this->detention_charge_per_hour ?? '',
      'monthly_fee_per_unit' => $this->monthly_fee_per_unit ?? null,
      'monthly_fee' => $this->monthly_fee ?? '',
      'driver_can_select_loads_on_mobile' => $this->driver_can_select_loads_on_mobile,
      'referral_code' => $this->referral_code ?? "",
      'driver_app_variation' => $this->driver_app_variation ?? null,
      'billing_cc_emails' => !empty($this->billing_cc_emails) ? explode(',', $this->billing_cc_emails) : '',
      'business_url' => $this->business_url ?? '',
      'early_access' => $this->early_access ?? '',
      'customDomain' => $this->custom_domain ?? '',
      'companyType' => !empty($this->company_type) ? config('constant.companyType')[$this->company_type] : null,
      'pricingPlan' => getPricingPlanV1($this),
      'featureAccess' => $featureAccess,
      // Do not turn this on, it's slow.
      // 'fmcsaCarrierId' => $this->fmcsaCarrier->id ?? null,
    ];
  }
}
