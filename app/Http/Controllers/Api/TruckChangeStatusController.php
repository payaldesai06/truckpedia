<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Truck\TruckChangeStatusRequest;
use App\Services\TruckService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TruckChangeStatusController extends Controller
{
    protected TruckService $truckService;

    public function __construct(TruckService $truckService)
    {
        $this->truckService = $truckService;
    }

    public function __invoke(TruckChangeStatusRequest $request): ?JsonResponse
    {
        try {
            $this->truckService->changeStatus();

            return $this->respondWithMessage(config('response.truck.change_status'));
        } catch (\Throwable $th) {
            return $this->respondWithError($th->getMessage());
        }
    }
}
