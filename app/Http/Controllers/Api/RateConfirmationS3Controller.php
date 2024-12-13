<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RateConfirmationS3\RateConfirmationS3Request;
use App\Http\Resources\Api\RateConfirmationS3\RateConfirmationS3Resource;
use Illuminate\Http\JsonResponse;

class RateConfirmationS3Controller extends Controller {
    // This is only used in Create Load UI, after user upload one rate con PDF to S3, we call this to get its S3 link.
    public function __invoke(RateConfirmationS3Request $request): JsonResponse {
        $rateConfirmation = (object) $request->validated();

        return $this->respondWithData(new RateConfirmationS3Resource($rateConfirmation));
    }
}
