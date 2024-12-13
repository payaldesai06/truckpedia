<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CompanyUser\CompanyUserChangeStatusRequest;
use App\Services\CompanyUserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyUserChangeStatusController extends Controller
{
    private CompanyUserService $companyUserService;

    public function __construct(CompanyUserService $companyUserService)
    {
        $this->companyUserService = $companyUserService;
    }

    public function __invoke(CompanyUserChangeStatusRequest $request): ?JsonResponse
    {
        try {
            $this->companyUserService->changeStatus();

            return $this->respondWithMessage(config('response.user.change_status'));
        } catch (\Throwable $throwable) {
            return $this->respondWithError($throwable->getMessage());
        }
    }
}
