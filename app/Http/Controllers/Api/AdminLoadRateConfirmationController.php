<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AdminLoadRateConfirmation\CreateAdminLoadRateConfirmationRequest;
use App\Http\Resources\LoadRateConfirmation\LoadRateConfirmationResource;
use App\Services\AdminLoadRateConfirmationService;
use Illuminate\Http\Request;

class AdminLoadRateConfirmationController extends Controller
{
    protected $adminLoadRateConfirmationService;

    public function __construct(AdminLoadRateConfirmationService $adminLoadRateConfirmationService)
    {
        $this->adminLoadRateConfirmationService = $adminLoadRateConfirmationService;
    }

    public function store(CreateAdminLoadRateConfirmationRequest $request)
    {
        $rateConfirmation = $this->adminLoadRateConfirmationService->createRateConfirmation();

        return $this->respondCreatedWithPayload(
            new LoadRateConfirmationResource($rateConfirmation),
            config('response.load_rate_confirmation.create')
        );
    }

    public function destroy()
    {
        $this->adminLoadRateConfirmationService->deleteRateConfirmation();

        return $this->respondDeleted(config('response.load_rate_confirmation.delete'));
    }
}
