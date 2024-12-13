<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadImage\LoadDeliveredImageRequest;
use App\Http\Resources\DriverLoad\DriverLoadResource;
use App\Services\LoadImageService;
use Illuminate\Http\JsonResponse;

class LoadDeliveredImageController extends Controller
{
    private LoadImageService $loadImageService;

    public function __construct(LoadImageService $loadImageService)
    {
        $this->loadImageService = $loadImageService;
    }

    public function __invoke(LoadDeliveredImageRequest $request): JsonResponse
    {
        $loadDriver = $this->loadImageService->loadDeliveredImages();

        return $this->respondWithData(new DriverLoadResource($loadDriver->loadDetail));
    }
}
