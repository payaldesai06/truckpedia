<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AccessorialFee\CreateAccessrialFeeRequest;
use App\Http\Resources\AccessorialFee\AccessorialFeeCollection;
use App\Http\Resources\AccessorialFee\AccessorialFeeResource;
use App\Services\AccessorialFeeService;
use Illuminate\Http\Request;

class AccessorialFeeController extends Controller
{
    protected $accessorialFeeService;

    public function __construct(AccessorialFeeService $accessorialFeeService)
    {
        $this->accessorialFeeService = $accessorialFeeService;
    }

    public function index()
    {
        $accessrialFees = $this->accessorialFeeService->getAllAccessrialFee();
        return $this->respondWithData(new AccessorialFeeCollection($accessrialFees));
    }

    public function store(CreateAccessrialFeeRequest $request)
    {
        $accessrialFee = $this->accessorialFeeService->createAccessrialFee();
        return $this->respondWithMessageAndPayload(new AccessorialFeeResource($accessrialFee), config('response.accessorial_fee.create'));
    }
}
