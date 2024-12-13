<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\DriverLoadService;
use Illuminate\Http\JsonResponse;

class DriverLoadTrailerPickupController extends Controller
{
    private DriverLoadService $driverLoadService;

    public function __construct(DriverLoadService $driverLoadService)
    {
        $this->driverLoadService = $driverLoadService;
    }

    public function __invoke(): JsonResponse
    {
        $this->driverLoadService->trailerPickedUp();

        return $this->respondWithMessage(config('response.driver_load.trailer_picked_up'));
    }
}
