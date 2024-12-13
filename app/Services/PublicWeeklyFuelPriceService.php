<?php

namespace App\Services;

use App\Models\PublicWeeklyFuelPrice;
use Exception;

class PublicWeeklyFuelPriceService {

  /**
   * Get all public weekly fuel prices.
   * @return array
   * @throws Exception
   */
  public function getPrices(): array {
    $prices = PublicWeeklyFuelPrice::select(
      'release_date as releaseDate',
      'price'
    )->get();
    return [
      'prices' => $prices ?? collect(),
    ];
  }
}
