<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Trailer\TrailerChangeStatusRequest;
use App\Services\TrailerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TrailerChangeStatusController extends Controller
{
    private TrailerService $trailerService;

    public function __construct(TrailerService $trailerService)
    {
        $this->trailerService = $trailerService;
    }

    public function __invoke(TrailerChangeStatusRequest $request): ?JsonResponse
    {
        try {
            $this->trailerService->changeStatus();

            return $this->respondWithMessage(config('response.truck.change_status'));
        } catch (\Throwable $th) {
            return $this->respondWithError($th->getMessage());
        }
    }
}
