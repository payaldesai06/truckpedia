<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\Dashboard\TripRevenue\TripRevenueCollection;
use App\Services\Dashboard\TripRevenueService;
use Illuminate\Http\JsonResponse;

class TripRevenueController extends Controller
{
    private $tripRevenueService;

    public function __construct(TripRevenueService $tripRevenueService)
    {
        $this->tripRevenueService = $tripRevenueService;
    }

    public function __invoke(): JsonResponse
    {
        $revenue = $this->tripRevenueService->getRevenue();

        return $this->respondWithData(new TripRevenueCollection($revenue));
    }
}
