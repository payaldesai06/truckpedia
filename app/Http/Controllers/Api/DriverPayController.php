<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DriverPay\DriverPayCollection;
use App\Services\DriverPayService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DriverPayController extends Controller {
  protected $driverPayService;

  public function __construct(DriverPayService $driverPayService) {
    $this->driverPayService = $driverPayService;
  }

  public function datatable(): JsonResponse {
    $driverPays = $this->driverPayService->datatable();
    return $this->respondWithData(new DriverPayCollection($driverPays));
  }
}
