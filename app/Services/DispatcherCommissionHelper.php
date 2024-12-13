<?php

namespace App\Services;

class DispatcherCommissionHelper {
  public static function calculateCommissions($load, $accessorialCache = null) {
    $dispatcher = $load->dispatcher->dispacherDetail ?? '';

    $loadCharge = $load->loadCharge;
    $haulingFee = $loadCharge['hauling_fees'] ?? 0;
    if (!$accessorialCache) {
      $accessorialCache = $load['_internal'];
    }
    $feesAmount = $accessorialCache['_feesAmount'];
    $thirdPartyFeesAmount = $accessorialCache['_3rdPartyFeesAmount'];
    // $deductionAmount not needed.

    $nonCommissionableFeesAmount = $accessorialCache['_nonCommissionableFeesAmount'];
    $nonCommissionable3rdPartyFeesAmount = $accessorialCache['_nonCommissionable3rdPartyFeesAmount'];
    $nonCommissionableDeductionsAmount = $accessorialCache['_nonCommissionableDeductionsAmount'];
    $nonCommissionable3rdPartyDeductionsAmount = $accessorialCache['_nonCommissionable3rdPartyDeductionsAmount'];


    $otherCommissionAmount = $load->other_commission_amount ?? 0;
    if (is_null($load->override_commission_fractional)) {
      $commissionFractional = $dispatcher->commission_fractional ?? 0;
    } else {
      $commissionFractional = $load->override_commission_fractional;
    }

    switch ($dispatcher->commission_on ?? '') {
      case 'hauling_fee':
        /* hauling fee  */
        $commissionOn = 'Hauling Fee';
        $rates = $haulingFee ?? 0;
        break;

      case 'hauling_fee_with_accessorial_fee':
        /* hauling fee + accessorial fee  */
        $commissionOn = 'Hauling Fee + Accessorial Fee';
        $rates = $haulingFee + $feesAmount - $nonCommissionableFeesAmount ?? 0;
        break;

      case 'custom_formula':
        $commissionOn = 'Custom Formula';
        $primaryRate = DispatcherCommissionHelper::getRateBasedOnFormula(
          config('constant.commissionCustomFormulaOperand.'
            . $dispatcher->custom_formula_primary),
          $load,
          $haulingFee,
          $feesAmount,
          $nonCommissionableFeesAmount,
          $nonCommissionableDeductionsAmount,
          $thirdPartyFeesAmount,
          $nonCommissionable3rdPartyFeesAmount,
          $nonCommissionable3rdPartyDeductionsAmount
        );
        $secondaryRate = DispatcherCommissionHelper::getRateBasedOnFormula(
          config('constant.commissionCustomFormulaOperand.'
            . $dispatcher->custom_formula_secondary),
          $load,
          $haulingFee,
          $feesAmount,
          $nonCommissionableFeesAmount,
          $nonCommissionableDeductionsAmount,
          $thirdPartyFeesAmount,
          $nonCommissionable3rdPartyFeesAmount,
          $nonCommissionable3rdPartyDeductionsAmount
        );

        // Calculate rates based on operator
        if ($dispatcher->custom_formula_operator === 1) { // add
          $rates = $primaryRate + $secondaryRate;
        } else { // 'subtract'
          $rates = $primaryRate - $secondaryRate;
        }
        $rates = round($rates, 2);
        break;

      default:
        /* total_income */
        $commissionOn = 'Total Income';
        $rates = $load->total_amount - $nonCommissionableFeesAmount - $nonCommissionableDeductionsAmount ?? 0;
        break;
    }

    $totalCommission = $rates * $commissionFractional + $otherCommissionAmount;

    if ($load->total_miles) {
      $ratePerMile = $haulingFee / $load->total_miles ?? 0;
    } else {
      $ratePerMile = 0;
    }

    return (object) [
      'total_commission' => round($totalCommission, 2),
      'rates' => round($rates, 2),
      'commission_on' => $commissionOn,
      'commission_fractional' => $commissionFractional,
      'dispatcher_name' => ($dispatcher->first_name ?? '') . ' ' . ($dispatcher->last_name ?? ''),
      'rate_per_mile' => round($ratePerMile, 2),
    ];
  }

  public static function getRateBasedOnFormula(
    $formula,
    $load,
    $haulingFee,
    $feesAmount,
    $nonCommissionableFeesAmount,
    $nonCommissionableDeductionsAmount,
    $thirdPartyFeesAmount,
    $nonCommissionable3rdPartyFeesAmount,
    $nonCommissionable3rdPartyDeductionsAmount
  ) {
    switch ($formula) {
      case 'haulingFee':
        return $haulingFee;
      case 'haulingFeeAndAccessorialFee':
        return $haulingFee + $feesAmount - $nonCommissionableFeesAmount;
      case 'totalIncome':
        return $load->total_amount - $nonCommissionableFeesAmount - $nonCommissionableDeductionsAmount ?? 0;
      case 'thirdPartyHaulingFee':
        return $load->thirdPartyCarrierCharge ?
          $load->thirdPartyCarrierCharge->hauling_fee : 0;
      case 'thirdPartyHaulingFeeAndAccessorialFee':
        return $load->thirdPartyCarrierCharge ?
          $load->thirdPartyCarrierCharge->hauling_fee + $thirdPartyFeesAmount - $nonCommissionable3rdPartyFeesAmount : 0;
      case 'thirdPartyTotalCost':
        return $load->third_party_carrier_total_amount - $nonCommissionable3rdPartyFeesAmount - $nonCommissionable3rdPartyDeductionsAmount ?? 0;
      default:
        return 0;
    }
  }
}
