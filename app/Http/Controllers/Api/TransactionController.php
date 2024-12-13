<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Transction\TranscationCollection;
use App\Services\TranscationService;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    private $transcationService;

    public function __construct(TranscationService $transcationService)
    {
        $this->transcationService = $transcationService;
    }

    public function datatable()
    {
        $transcations = $this->transcationService->datatable();
        return $this->respondWithData(new TranscationCollection($transcations));
    }
}
