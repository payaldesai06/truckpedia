<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadImage\LoadProofOfDeliveryImageRequest;
use App\Http\Resources\DriverLoad\DriverLoadResource;
use App\Services\LoadImageService;
use Illuminate\Http\JsonResponse;

class LoadProofOfDeliveryImageController extends Controller
{
    private LoadImageService $loadImageService;

    public function __construct(LoadImageService $loadImageService)
    {
        $this->loadImageService = $loadImageService;
    }

    public function __invoke(LoadProofOfDeliveryImageRequest $request): JsonResponse
    {
        $loadDriver = $this->loadImageService->loadProofOfDelivery();

        return $this->respondWithData(new DriverLoadResource($loadDriver->loadDetail));
    }
}
