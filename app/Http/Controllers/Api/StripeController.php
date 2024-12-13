<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Stripe\CardRequest;
use App\Http\Resources\Stripe\CardResource;
use App\Models\Load;
use App\Models\User;
use App\Services\StripeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StripeController extends Controller
{

    private $stripeService;
    private $stripePublicKey;

    public function __construct(StripeService $stripeService)
    {
        $this->stripeService = $stripeService;
        $this->stripePublicKey = '';
        if (app()->environment('production')) {
            $this->stripePublicKey = config('constant.stripe_key.production.public');
        } else {
            $this->stripePublicKey = config('constant.stripe_key.sandbox.public');
        }
    }

    // demo 

    public function customerCreate(Request $request)
    {
        try {
            return $this->stripeService->demoCreateCustomer();
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    public function demoCardCreate()
    {
        $user = Auth::loginUsingId(10);
        // dd($user);
        return $this->stripeService->attachCardToCustomer($user);
    }
}
