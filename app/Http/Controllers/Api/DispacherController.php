<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Dispacher\DispacherCollection;
use App\Services\DispacherService;
use Illuminate\Http\Request;

class DispacherController extends Controller
{
    protected DispacherService $dispacherService;

    public function __construct(DispacherService $dispacherService)
    {
        $this->dispacherService = $dispacherService;
    }

    public function index()
    {
        try {
            $users = $this->dispacherService->getAllDispatcher();

            return $this->respondWithData(new DispacherCollection($users));
        } catch (\Throwable $throwable) {
            return $this->respondWithError($throwable->getMessage());
        }
    }
}
