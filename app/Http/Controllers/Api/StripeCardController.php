<?php

namespace App\Http\Controllers\Api;

use AdminDetails;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Stripe\CardRequest;
use App\Http\Resources\Stripe\CardResource;
use App\Models\AdminCompanyDetail;
use App\Services\StripeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StripeCardController extends Controller
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

    /**
     * stripe card create and card replace
     */
    public function cardCreate(CardRequest $request)
    {
        try {
            $stripeCard = $this->stripeService->cardCreate();
            // return $stripeCard;
            return $this->respondWithMessageAndPayload(new CardResource($stripeCard), config('response.stripe.card.create'));
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    /**
     * stripe card show
     */
    public function cardShow()
    {
        try {
            $stripeCard = $this->stripeService->retrieveCardToCustomer();
            return $this->respondWithData(new CardResource($stripeCard));
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    /**
     * stripe card delete
     */
    public function cardDelete()
    {
        try {
            $stripeCard = $this->stripeService->cardDelete();
            return $this->respondWithMessage(config('response.stripe.card.delete'));
        } catch (\Throwable $e) {
            return $this->respondBadRequest($e->getMessage());
        }
    }

    //demo for web card create view
    public function cardView()
    {
        $stripePublicKey = $this->stripePublicKey;
        return view('stripe.card', ['stripePublicKey' => $stripePublicKey]);
    }
}
