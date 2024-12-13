<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Driver\DriverCollection;
use App\Services\DriverService;
use Illuminate\Http\Request;

class CoDriverController extends Controller
{
    protected $driverService;

    public function __construct(DriverService $driverService)
    {
        $this->driverService = $driverService;
    }

    public function index()
    {
        $drivers = $this->driverService->getAllCoDriver();
        return $this->respondWithData(new DriverCollection($drivers));
    }
}
