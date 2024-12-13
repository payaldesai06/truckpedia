<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LoadDetail\LoadDetailCollection;
use App\Services\CalendarService;
use Exception;
use Illuminate\Http\JsonResponse;

class CalendarController extends Controller {
  /**
   * @var CalendarService
   */
  private $calendarService;

  public function __construct(CalendarService $calendarService) {
    $this->calendarService = $calendarService;
  }

  /**
   * Get all calendar loads.
   * @return JsonResponse
   * @throws Exception
   */
  public function index(): JsonResponse {
    $calendarDetails = $this->calendarService->getLoadsForCalendar();
    return $this->respondWithData($calendarDetails);
  }

  /**
   * Get the load details by load id.
   * @return JsonResponse
   */
  public function loadDetails(): JsonResponse {
    $loadDetails = $this->calendarService->getLoadDetails();
    return $this->respondWithData(new LoadDetailCollection($loadDetails));
  }

  /**
   * Get all trucks' location and ongoing load info
   * @return JsonResponse
   * @throws Exception
   */
  public function locateTrucks(): JsonResponse {
    $trucks = $this->calendarService->locateTrucks();
    return $this->respondWithData(['trucks' => $trucks]);
  }

  /**
   * Get all trucks' location and ongoing load info with drivers location.
   * @return JsonResponse
   */
  public function locateTrucksDrivers(): JsonResponse {
    $locateTrucksDrivers = $this->calendarService->locateTrucksDrivers();
    return $this->respondWithData($locateTrucksDrivers);
  }
}
