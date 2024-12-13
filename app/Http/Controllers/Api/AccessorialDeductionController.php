<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AccessorialDeduction\CreateAccessorialDeductionRequest;
use App\Http\Resources\AccessorialDeduction\AccessorialDeductionCollection;
use App\Http\Resources\AccessorialDeduction\AccessorialDeductionResource;
use App\Services\AccessorialDeductionService;
use Illuminate\Http\Request;

class AccessorialDeductionController extends Controller
{
    protected $accessorialDeductionService;

    public function __construct(AccessorialDeductionService $accessorialDeductionService)
    {
        $this->accessorialDeductionService = $accessorialDeductionService;
    }

    public function index()
    {
        $accessrialDeductions = $this->accessorialDeductionService->getAllAccessrialDeduction();
        return $this->respondWithData(new AccessorialDeductionCollection($accessrialDeductions));
    }

    public function store(CreateAccessorialDeductionRequest $request)
    {
        $accessrialDeduction = $this->accessorialDeductionService->createAccessrialDeduction();
        return $this->respondWithMessageAndPayload(new AccessorialDeductionResource($accessrialDeduction), config('response.accessorial_deduction.create'));
    }
}
