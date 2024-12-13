<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\Dashboard\Load\DashboardLoadCollection;
use App\Services\Dashboard\LoadService;
use Illuminate\Http\JsonResponse;

class LoadController extends Controller
{
    private $loadService;

    public function __construct(LoadService $loadService)
    {
        $this->loadService = $loadService;
    }

    public function datatable(): JsonResponse
    {
        $loads = $this->loadService->datatable();

        return $this->respondWithData(new DashboardLoadCollection($loads));
    }
}
