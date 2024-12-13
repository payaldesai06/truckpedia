<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DriverLoad\DriverLoadResource;
use App\Services\LoadImageService;
use Illuminate\Http\JsonResponse;

class LoadImagesController extends Controller
{
    private LoadImageService $loadImageService;

    public function __construct(LoadImageService $loadImageService)
    {
        $this->loadImageService = $loadImageService;
    }

    public function destroy(): JsonResponse
    {
        $load = $this->loadImageService->deleteLoadImage();

        return $this->respondWithData(new DriverLoadResource($load));
    }
}
