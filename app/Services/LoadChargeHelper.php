<?php

namespace App\Services;

use App\Models\AccessorialDeduction;
use App\Models\AccessorialFee;
use Illuminate\Support\Str;

class LoadChargeHelper {
  public static function generateLoadCharges($load) {
    $loadCharge = $load->loadCharge;

    // Extract and decode accessorial fees and deductions
    $loadAccessorialFees = json_decode($loadCharge->accessorial_fee, true) ??
      [];
    $loadAccessorialDeductions = json_decode(
      $loadCharge->accessorial_deduction,
      true
    ) ?? [];

    $accessorialFeeIds = array_column($loadAccessorialFees ?? [], 'id');
    $accessorialDeductionIds = array_column(
      $loadAccessorialDeductions ?? [],
      'id'
    );

    $accessorialFeesData = getAccessorialsByIds('fee', $accessorialFeeIds);
    $accessorialDeductionsData = getAccessorialsByIds('deduction', $accessorialDeductionIds);


    $accessorialFees = array_map(function ($accessorialFee) use ($accessorialFeesData) {
      $accessorial = $accessorialFeesData->get($accessorialFee['id']);
      $accessorialFeeType = $accessorial ? strtolower($accessorial->name) : '';

      return [
        'accessorial_fee_type' => $accessorialFeeType,
        'accessorial_fee_rate' => $accessorialFee['rate'],
      ];
    }, $loadAccessorialFees ?? []);

    $accessorialDeductionFees = array_map(function ($accessorialDeductionFee) use ($accessorialDeductionsData) {
      $accessorialDeduction = $accessorialDeductionsData->get($accessorialDeductionFee['id']);
      $accessorialDeductionFeeType = $accessorialDeduction ? strtolower($accessorialDeduction->name) : '';

      return [
        'accessorial_deduction_fee_type' => $accessorialDeductionFeeType,
        'accessorial_deduction_fee_rate' => $accessorialDeductionFee['rate'],
      ];
    }, $loadAccessorialDeductions ?? []);
    //add space before capitals
    $fuelSurchargeType = preg_replace('/(?<! )(?<!^)[A-Z]/', ' $0', $load->loadCharge->fuel_surcharge_type);
    return collect([
      'hauling_fees' => $load->loadCharge->hauling_fees,
      'hauling_fees_type' => Str::of($load->loadCharge->hauling_fees_type)
        ->replace('_', ' ')
        ->lower(),
      'hauling_fees_rate' => $load->loadCharge->hauling_fees_rate,
      'fuel_surcharge' => $load->loadCharge->fuel_surcharge,
      'fuel_surcharge_type' => Str::of($fuelSurchargeType)
        ->replace('_', ' ')
        ->lower(),
      'fuel_surcharge_rate' => $load->loadCharge->fuel_surcharge_rate,
      'accessorial_fees' => $accessorialFees,
      'accessorial_deduction' => $accessorialDeductionFees,
    ]);
  }
}
