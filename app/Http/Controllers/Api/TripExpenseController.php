<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\TripExpense\CreateTripExpenseRequest;
use App\Http\Requests\Api\TripExpense\UpdateTripExpenseRequest;
use App\Http\Resources\TripExpense\TripExpenseCollection;
use App\Http\Resources\TripExpense\TripExpenseResource;
use App\Http\Resources\TripExpense\TripExpenseWithTripExpenseResource;
use App\Services\TripExpenseService;
use Illuminate\Http\Request;

class TripExpenseController extends Controller
{
    protected $tripExpenseService;

    public function __construct(TripExpenseService $tripExpenseService)
    {
        $this->tripExpenseService = $tripExpenseService;
    }

    public function index()
    {
        $tripExpenses = $this->tripExpenseService->getAllTripExpenses();
        return $this->respondWithData(new TripExpenseCollection($tripExpenses));
    }

    public function store(CreateTripExpenseRequest $request)
    {
        $tripExpense = $this->tripExpenseService->create();
        // return $tripExpense;
        return $this->respondWithMessageAndPayload(new TripExpenseWithTripExpenseResource($tripExpense), config('response.trip_expense.create'));
    }

    public function update(UpdateTripExpenseRequest $request)
    {
        $tripExpense = $this->tripExpenseService->update();
        return $this->respondWithMessageAndPayload(new TripExpenseWithTripExpenseResource($tripExpense), config('response.trip_expense.update'));
    }

    public function destroy()
    {
        $this->tripExpenseService->delete();
        return $this->respondDeleted(config('response.trip_expense.delete'));
    }
}
