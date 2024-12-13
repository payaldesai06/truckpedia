<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\WaitingList\CreateWaitingListRequest;
use App\Services\WaitingListService;
use Illuminate\Http\JsonResponse;

class WaitingListController extends Controller
{
    private WaitingListService $waitingListService;

    public function __construct(WaitingListService $waitingListService)
    {
        $this->waitingListService = $waitingListService;
    }

    public function __invoke(CreateWaitingListRequest $request): ?JsonResponse
    {
        try {
            $this->waitingListService->create();

            return $this->respondWithMessage('You’ve been added to our waitlist. We will reach out to you when it’s ready to launch!');
        } catch (\Throwable $throwable) {
            return $this->respondWithError($throwable->getMessage());
        }
    }
}
