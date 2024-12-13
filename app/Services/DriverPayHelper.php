<?php

namespace App\Services;

use Exception;

class DriverPayHelper {
  /**
   * Calculate driver total payment of trip.
   * @param $trip
   * @param $driverDetail
   * @return float|int|null
   * @throws Exception
   */
  public function calculateDriverTripPayment($trip, $driverDetail) {
    $driverPayType = $driverDetail->driver_pay_types;
    $reimbursement = $this->convertIntoNumber($trip->reimbursement) ?? 0;

    switch ($driverPayType) {
      case config('constant.driver_pay_type.hourly'):
        $totalPayment = ($this->convertIntoNumber($trip->total_hours) * $this->convertIntoNumber($driverDetail->hourly_rate)) + $reimbursement;
        return round($totalPayment, 2) ?? 0;

      case config('constant.driver_pay_type.per_mile'):
        $stopCharge = $this->getStopCharge($trip->number_of_stop, $driverDetail);
        $detentionCharge = $this->getDetentionCharges($trip->detention, $driverDetail);
        $layoverCharge = $this->getLayoverCharges($trip->layover, $driverDetail);
        return $this->getPerMileDriverTotalPayment($driverDetail, ($stopCharge + $detentionCharge + $layoverCharge + $reimbursement)) ?? 0;

      case config('constant.driver_pay_type.percentage'):
        $loadPayPercentageOf = $this->convertIntoNumber($driverDetail->load_pay_percentage_of);
        $loadPayPercentage = $this->convertIntoNumber($driverDetail->load_pay_percentage);
        $loadCharges = $trip->loads->pluck('loadCharge');

        if ($loadPayPercentageOf == config('constant.load_pay_percentage_of.hauling_fees')) {
          /* Haulling fee (Flat Fee) */
          $rate = $loadCharges->sum('hauling_fees') ?? 0;
        } else if ($loadPayPercentageOf == config('constant.load_pay_percentage_of.total_income')) {
          /* total income*/
          $rate = $trip->loads->sum('total_amount') ?? 0;
        } else if ($loadPayPercentageOf == config('constant.load_pay_percentage_of.hauling_plus_fuel_surcharge')) {
          /* Hauling Fees + Fuel Surcharge */
          $haullingFee = $loadCharges->sum('hauling_fees') ?? 0;

          $fuelSurcharge = $trip->loads->map(function ($load) {
            /*if ($load->loadCharge->fuel_surcharge_type == config('constant.fuel_surcharge_type.per_mile')) {
              return $load->loadCharge->fuel_surcharge * $load->total_miles ?? 0;
            }*/
            /* FuelSurcharge = Flat Fee, Percentage */
            return $load->loadCharge->fuel_surcharge ?? 0;
          })->sum();

          $rate = $haullingFee + $fuelSurcharge ?? 0;
        } else {
          throw new Exception(config('response.error'));
        }

        return round(($loadPayPercentage * $rate) / 100, 2) ?? 0;

      default:
        throw new Exception(config('response.error'));
    }
  }

  /**
   * Calculate load driver total payment if driver pay type is percentage.
   * @param $load
   * @param $driverDetail
   * @return float|int|null
   */
  public function calculateLoadDriverPaymentFromPercentage($load, $driverDetail) {
    $driverPayType = $driverDetail->driver_pay_types;

    if ($driverPayType == config('constant.driver_pay_type.percentage')) {
      $loadPayPercentageOf = $this->convertIntoNumber($driverDetail->load_pay_percentage_of);
      $loadPayPercentage = $this->convertIntoNumber($driverDetail->load_pay_percentage);
      $loadCharges = $load->loadCharge;

      if ($loadPayPercentageOf == config('constant.load_pay_percentage_of.hauling_fees')) {
        /* Haulling fee (Flat Fee) */
        $rate = $loadCharges->hauling_fees ?? 0;
      } else if ($loadPayPercentageOf == config('constant.load_pay_percentage_of.total_income')) {
        /* total income*/
        $rate = $load->total_amount ?? 0;
      } else if ($loadPayPercentageOf == config('constant.load_pay_percentage_of.hauling_plus_fuel_surcharge')) {
        /* Hauling Fees + Fuel Surcharge */
        $haullingFee = $loadCharges->hauling_fees ?? 0;

        $fuelSurcharge = $loadCharges->fuel_surcharge ?? 0;

        $rate = $haullingFee + $fuelSurcharge ?? 0;
      } else {
        throw new Exception(config('response.error'));
      }
      return round(($loadPayPercentage * $rate) / 100, 2) ?? 0;
    } else {
      return 0;
    }
  }

  /**
   * Get Driver Stop Charges details of a trip.
   * @param $numberOfStops
   * @param $driverDetails
   * @return float|int
   */
  private function getStopCharge($numberOfStops, $driverDetails) {
    $numberOfStops = $this->convertIntoNumber($numberOfStops);
    $payPerStopStartAfter = $this->convertIntoNumber($driverDetails->pay_per_stop_start_after);
    $payableStops = $numberOfStops - $payPerStopStartAfter;

    if ($payableStops <= 0) {
      return 0;
    }

    $payPerStopRate = $this->convertIntoNumber($driverDetails->pay_per_stop_rate);

    return round(($payableStops * $payPerStopRate), 2) ?? 0;
  }

  /**
   * Get Driver Detention Charges details of a trip.
   * @param $detentionHours
   * @param $driverDetails
   * @return float|int
   */
  private function getDetentionCharges($detentionHours, $driverDetails) {
    $detentionHours = $this->convertIntoNumber($detentionHours);
    $detentionStartAfter = $this->convertIntoNumber($driverDetails->detention_start_after);
    $payableDetentionCharges = $detentionHours - $detentionStartAfter;

    if ($payableDetentionCharges <= 0) {
      return 0;
    }

    $detentionRate = $this->convertIntoNumber($driverDetails->detention_rate);

    return round(($payableDetentionCharges * $detentionRate), 2) ?? 0;
  }

  /**
   * Get Driver Layover Charges details of a trip.
   * @param $layoverHours
   * @param $driverDetails
   * @return float|int
   */
  private function getLayoverCharges($layoverHours, $driverDetails) {
    $layoverHours = $this->convertIntoNumber($layoverHours);
    $layoverStartAfter = $this->convertIntoNumber($driverDetails->layover_start_after);

    $layoverPayableHours = $layoverHours - $layoverStartAfter;

    if ($layoverPayableHours <= 0) {
      return 0;
    }

    $layoverRate = $driverDetails->layover_rate;

    return round(($layoverPayableHours * $layoverRate), 2) ?? 0;
  }

  /**
   * Get Driver per mile total payment of a trip.
   * @param $driverDetail
   * @param $totalMiles
   * @return float|int
   */
  private function getPerMileDriverTotalPayment($driverDetail, $totalMiles) {
    $totalMiles = $this->convertIntoNumber($totalMiles);
    $perMileCharge = $this->convertIntoNumber($driverDetail->per_mail_charges);
    return round(($totalMiles * $perMileCharge), 2) ?? 0;
  }

  /**
   * Convert empty string into numeric value.
   * @param $value
   * @return float|int|string
   */
  private function convertIntoNumber($value) {
    return !empty($value) ? $value : 0;
  }
}
