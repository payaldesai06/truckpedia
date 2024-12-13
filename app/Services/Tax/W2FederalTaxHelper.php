<?php

namespace App\Services\Tax;

use App\Models\DriverDetail;
use Carbon\Carbon;
use Exception;

class W2FederalTaxHelper {

  /**
   * Calculate Trip Federal Tax.
   * @param float $totalPayment
   * @param DriverDetail $driverDetail
   * @return mixed
   * @throws Exception
   */
  public function calculateTripFederalTax(
    $totalPayment,
    DriverDetail $driverDetail
  ) {
    if (empty($driverDetail->pay_frequency) || empty($driverDetail->filing_status)) {
      return null;
    }

    $numberOfPaychecks = $this->getNumberOfPaychecks($driverDetail->pay_frequency);

    if (is_null($numberOfPaychecks)) {
      return null;
    }

    $projectedAnnualIncome = $totalPayment * $numberOfPaychecks;

    $nowInCompanyTimezone = now(getCompanyTimezone());
    $currentYear = $nowInCompanyTimezone->year;

    if (empty(config('tax.w2.federal.' . $currentYear))) {
      return null;
    }

    $projectedAnnualTax = $this->calculateProjectedAnnualTaxBeforeCredits(
      $currentYear,
      $driverDetail->filing_status,
      $projectedAnnualIncome
    );

    $projectedAnnualTax -= $driverDetail->tax_federal_credits ?? 0;
    // Negative number does not make sense here.
    $projectedAnnualTax = max($projectedAnnualTax, 0);
    $withholding = $driverDetail->withholding ?? 0;

    $tax = round($projectedAnnualTax / $numberOfPaychecks + $withholding, 2);
    return max(0, $tax);
  }

  /**
   * Get Number of Paychecks.
   * @param $payFrequency
   * @return int
   * @throws Exception
   */
  private function getNumberOfPaychecks($payFrequency): ?int {
    $payFrequencyMapping = [
      1 => 52,
      2 => 26,
      3 => 12
    ];

    if (!isset($payFrequencyMapping[$payFrequency])) {
      return null;
    }

    return $payFrequencyMapping[$payFrequency];
  }

  /**
   * Calculate Projected Annual Tax Before Credits.
   * @param $year
   * @param $filingStatus
   * @param $projectedAnnualIncome
   * @return float|int|mixed|string
   * @throws Exception
   */
  private function calculateProjectedAnnualTaxBeforeCredits(
    int $year,
    int $filingStatus,
    $projectedAnnualIncome
  ) {
    $filingStatusValue = config('constant.filing_status')[$filingStatus];
    $brackets = config('tax.w2.federal.' . $year . '.' . $filingStatusValue . '.brackets');
    $projectedAnnualIncome -= config('tax.w2.federal.' . $year . '.' . $filingStatusValue . '.standardDeduction');

    if ($projectedAnnualIncome <= 0) {
      return 0;
    }

    $index = 0;

    foreach ($brackets as $key => $bracket) {
      if ($projectedAnnualIncome <= $bracket["threshold"]) {
        if ($index === 0) {
          return $projectedAnnualIncome * $brackets[0]["rate"];
        }

        return $bracket["fixedTax"] + ($projectedAnnualIncome - $brackets[$key - 1]["threshold"]) *  $bracket["rate"];
      }

      $index++;
    }

    $lastBracket = end($brackets);
    return $lastBracket["fixedTax"] + ($projectedAnnualIncome - $lastBracket["threshold"]) * $lastBracket["rate"];
  }
}
