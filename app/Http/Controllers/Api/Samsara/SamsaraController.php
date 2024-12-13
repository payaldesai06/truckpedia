<?php

namespace App\Http\Controllers\Api\Samsara;

use App\Http\Controllers\Controller;
use App\Services\Samsara\SamsaraService;

class SamsaraController extends Controller
{
    private $samsaraService;

    public function __construct(SamsaraService $samsaraService)
    {
        $this->samsaraService = $samsaraService;
    }

    public function getVehiclesLocation($loadTruckId = null)
    {
        $response = $this->samsaraService->getVehiclesLocationFromSamsara($loadTruckId);
        return $this->respondWithData($response);
    }

}
