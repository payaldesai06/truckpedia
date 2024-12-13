<?php

namespace App\Http\Controllers\Api\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PaymentHistory\PaymentHistoryCollection;
use App\Services\SuperAdmin\PaymentHistoryService;
use Illuminate\Http\Request;

class PaymentHistoryController extends Controller
{
    private $paymentHistoryService;

    public function __construct(PaymentHistoryService $paymentHistoryService)
    {
        $this->paymentHistoryService = $paymentHistoryService;
    }

    public function datatable()
    {
        $paymentHistories = $this->paymentHistoryService->datatable();
        return $this->respondWithData(new PaymentHistoryCollection($paymentHistories));
    }
}
