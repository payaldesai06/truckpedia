<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\PublicWeeklyFuelPriceService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class PublicWeeklyFuelPriceController extends Controller {

  protected $publicWeeklyFuelPriceService;

  public function __construct(PublicWeeklyFuelPriceService $publicWeeklyFuelPriceService) {
    $this->publicWeeklyFuelPriceService = $publicWeeklyFuelPriceService;
  }

  /**
   * Get all public weekly fuel prices.
   * @return JsonResponse|mixed
   */
  public function getPrices() {
    try {
      return $this->respondWithData($this->publicWeeklyFuelPriceService->getPrices());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
