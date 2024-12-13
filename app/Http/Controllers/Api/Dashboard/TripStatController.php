<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\Dashboard\TripStat\TripStatResource;
use App\Services\Dashboard\TripStatsService;
use Illuminate\Http\JsonResponse;

class TripStatController extends Controller
{
    private $tripService;

    public function __construct(TripStatsService $tripService)
    {
        $this->tripService = $tripService;
    }

    public function __invoke(): JsonResponse
    {
        $stats = $this->tripService->getDashboardStatistics();

        return $this->respondWithData(new TripStatResource($stats));
    }
}
