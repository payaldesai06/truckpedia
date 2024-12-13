<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\DriverFileService;
use Illuminate\Http\Request;

class DriverFileController extends Controller
{
    protected $driverFileService;

    public function __construct(DriverFileService $driverFileService)
    {
        $this->driverFileService = $driverFileService;
    }

    public function destroy()
    {
        $result = $this->driverFileService->delete();
        if ($result) {
            return $this->respondDeleted(config('response.driver_file.delete'));
        } else {
            return $this->respondBadRequest(config('response.driver_file.error'));
        }
    }
}
