<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverAccountingInfoV2 extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->user_id ?? '',
      'driverPayType' => $this->driver_pay_types ?? '',
      'perMileCharge' => $this->per_mail_charges ?? '',
      'payPerStopRate' => $this->pay_per_stop_rate ?? '',
      'payPerStopStartAfter' => $this->pay_per_stop_start_after ?? '',
      'detentionRate' => $this->detention_rate ?? '',
      'detentionStartAfter' => $this->detention_start_after ?? '',
      'layoverRate' => $this->layover_rate ?? '',
      'layoverStartAfter' => $this->layover_start_after ?? '',
      'hourlyRate' => $this->hourly_rate ?? '',
      'loadPayPercentage' => $this->load_pay_percentage ?? '',
      'loadPayPercentageOf' => $this->load_pay_percentage_of ?? '',
      'flatPayFrequency' => !empty($this->flat_pay_frequency) ? config('constant.flat_pay_frequency.' . $this->flat_pay_frequency) : '',
      'flatPayRate' => $this->flat_pay_rate ?? '',
      'paymentMethod' => !empty($this->payment_method) ? config('constant.payment_method.' . $this->payment_method) : '',
      'financialInstitutionName' => $this->financial_institution_name ?? '',
      'accountNumber' => $this->account_number ?? '',
      'routingNumber' => $this->routing_number ?? '',
      'taxForm' => !empty($this->tax_form) ? config('constant.tax_form.' . $this->tax_form) : '',
      'filingStatus' => !empty($this->filing_status) ? config('constant.filing_status.' . $this->filing_status) : '',
      'allowances' => $this->allowances ?? '',
      'withholding' => $this->withholding ?? '',
      'taxMedicare' => ($this->tax_medicare) ? true : false,
      'taxAdvanceEarnedIncomeCredit' => ($this->tax_advance_earned_income_credit) ? true : false,
      'taxSocialSecurity' => ($this->tax_social_security) ? true : false,
      'taxFederalTax' => ($this->tax_federal_tax) ? true : false,
      'driverPayTemplate' => [
        'loadDetails' => !empty($this->driverPayTemplateDetails['loadDetails']) ? $this->driverPayTemplateDetails['loadDetails'] : null,
        'tripDetails' => !empty($this->driverPayTemplateDetails['tripDetails']) ? $this->driverPayTemplateDetails['tripDetails'] : null
      ],
      'payFrequency' => $this->pay_frequency ? config('constant.driver.payFrequency')[$this->pay_frequency] : null,
      'taxFederalCredits' => $this->tax_federal_credits ?? null,
    ];
  }
}
