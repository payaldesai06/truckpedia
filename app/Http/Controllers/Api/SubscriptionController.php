<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Company\CompanyDetailResource;
use App\Http\Resources\User\UserResource;
use App\Services\StripeService;
use Carbon\Carbon;

class SubscriptionController extends Controller
{
    private $stripeService;

    public function __construct(StripeService $stripeService)
    {
        $this->stripeService = $stripeService;
    }

    public function manualSubscription()
    {
        try {
            $user = $this->stripeService->addManualSubscription();
            // return $user;
            return $this->respondWithMessageAndPayload(new UserResource($user), config('response.stripe.payment.manual_success'));
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    public function subscriptionPlaneActive()
    {
        try {
            $user = $this->stripeService->subscriptionPlaneActive();
            return $this->respondWithMessageAndPayload(new UserResource($user), config('response.subscription.plane_active'));
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    public function subscriptionPlaneCancel()
    {
        try {
            $user = $this->stripeService->subscriptionPlaneCancel();
            return $this->respondWithMessageAndPayload(new UserResource($user), config('response.subscription.plane_cancel'));
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    //crone
    public function upgradePlan()
    {
        $this->stripeService->upgradePlan();
        return $this->respondWithMessage(config('response.stripe.payment.success'));
    }
}
