<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TripLoad\TripLoadCollection;
use App\Services\TripLoadService;
use Illuminate\Http\Request;

class TripLoadController extends Controller
{
    protected $tripLoadService;

    public function __construct(TripLoadService $tripLoadService)
    {
        $this->tripLoadService = $tripLoadService;
    }

    public function index()
    {
        $loads = $this->tripLoadService->getAllTripLoad();
        // return $loads;
        return $this->respondWithData(new TripLoadCollection($loads));
    }
}
