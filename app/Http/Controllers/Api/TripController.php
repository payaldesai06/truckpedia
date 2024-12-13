<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Trip\CreateTripRequest;
use App\Http\Requests\Api\Trip\TripPaymentRequest;
use App\Http\Requests\Api\Trip\UpdateTripPaymentRequest;
use App\Http\Requests\Api\Trip\UpdateTripRequest;
use App\Http\Resources\Trip\TripCollection;
use App\Http\Resources\Trip\TripNewCollection;
use App\Http\Resources\Trip\TripResource;
use App\Http\Resources\Trip\TripWithLoadExpenseResource;
use App\Models\DriverDetail;
use App\Models\Trip;
use App\Services\TripService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TripController extends Controller
{
    protected $tripService;

    public function __construct(TripService $tripService)
    {
        $this->tripService = $tripService;
    }

    public function tripInProgress()
    {
        $trips = $this->tripService->getAllTripInProgress();
        return $this->respondWithData(new TripCollection($trips));
    }

    public function tripPaid()
    {
        $trips = $this->tripService->getAllTripPaid();
        // return $trips->tripPayments;
        return $this->respondWithData(new TripCollection($trips));
    }

    public function store(CreateTripRequest $request)
    {
        $trip = $this->tripService->create();
        // return $trip;
        return $this->respondWithMessageAndPayload(new TripResource($trip), config('response.trip.create'));
    }

    public function update(UpdateTripRequest $request)
    {
        $trip = $this->tripService->update();
        return $this->respondWithMessageAndPayload(new TripResource($trip), config('response.trip.update'));
    }

    public function paymentRequest(UpdateTripPaymentRequest $request)
    {
        $trip = $this->tripService->paymentRequest();
        return $this->respondWithMessageAndPayload(new TripResource($trip), config('response.trip.payment_request'));
    }

    public function show()
    {
        $trip = $this->tripService->show();
        // return $trip;
        return $this->respondWithData(new TripWithLoadExpenseResource($trip));
    }

    public function tripPayment(TripPaymentRequest $request)
    {
        $this->tripService->tripPayment();
        return $this->respondWithMessage(config('response.trip.trip_payment'));
    }
}
