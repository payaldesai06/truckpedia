<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadImage\LoadPickedUpImageRequest;
use App\Http\Resources\DriverLoad\DriverLoadResource;
use App\Services\LoadImageService;
use Illuminate\Http\JsonResponse;

class LoadPickedUpImageController extends Controller
{
    private LoadImageService $loadImageService;

    public function __construct(LoadImageService $loadImageService)
    {
        $this->loadImageService = $loadImageService;
    }

    public function __invoke(LoadPickedUpImageRequest $request): JsonResponse
    {
        $loadDriver = $this->loadImageService->loadPickUpImages();

        return $this->respondWithData(new DriverLoadResource($loadDriver->loadDetail));
    }
}
